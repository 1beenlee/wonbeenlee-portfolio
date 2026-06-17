import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const svgPath = path.join(publicDir, "favicon.svg");

async function generate() {
  if (!fs.existsSync(svgPath)) {
    console.error(`SVG not found at: ${svgPath}`);
    process.exit(1);
  }

  const svgSrc = fs.readFileSync(svgPath, "utf-8");

  const parts = svgSrc.split("</defs>");
  if (parts.length < 2) {
    console.error("Invalid SVG structure: no </defs> found");
    process.exit(1);
  }
  const headerAndDefs = parts[0] + "</defs>";
  const rest = parts[1];

  const svgBody = rest.split("</svg>")[0];
  const rectPattern = /<rect[^>]+>/;
  const bgRectMatch = svgBody.match(rectPattern);
  if (!bgRectMatch) {
    console.error("Invalid SVG structure: no <rect> background found");
    process.exit(1);
  }
  const bgRect = bgRectMatch[0];
  const squareBgRect = bgRect.replace('rx="16"', 'rx="0"');

  const logoPart = svgBody.replace(bgRect, "");

  const generalSvg = `${headerAndDefs}
  ${squareBgRect}
  ${logoPart}
</svg>`;

  const maskableSvg = `${headerAndDefs}
  ${squareBgRect}
  <g transform="translate(32, 32) scale(0.75) translate(-32, -32)">
    ${logoPart}
  </g>
</svg>`;

  console.log("Launching browser via Playwright...");
  const browser = await chromium.launch();
  const page = await browser.newPage();

  async function renderPng(svgContent, size, filename) {
    const outputPath = path.join(publicDir, filename);
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: ${size}px;
            height: ${size}px;
            overflow: hidden;
            background: transparent;
          }
          svg {
            width: 100%;
            height: 100%;
            display: block;
          }
        </style>
      </head>
      <body>
        ${svgContent}
      </body>
      </html>
    `;

    await page.setContent(html);
    await page.setViewportSize({ width: size, height: size });
    await page.screenshot({
      path: outputPath,
      omitBackground: true,
      type: "png"
    });
    console.log(`Generated: ${filename} (${size}x${size})`);
  }

  // 1. General Icons
  await renderPng(generalSvg, 192, "icon-192.png");
  await renderPng(generalSvg, 512, "icon-512.png");
  await renderPng(generalSvg, 180, "apple-touch-icon.png");

  // 2. Maskable Icons
  await renderPng(maskableSvg, 192, "maskable-icon-192.png");
  await renderPng(maskableSvg, 512, "maskable-icon-512.png");

  await browser.close();
  console.log("All icons generated successfully!");
}

generate().catch(err => {
  console.error("Error generating icons:", err);
  process.exit(1);
});

import { spawn } from "node:child_process";
import { readFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { chromium } from "playwright";

// 1. Get current version from package.json
const root = process.cwd();
const pkg = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));
const versionName = `v${pkg.version}`;

// 2. Format current local date: YYYY-MM-DD
const d = new Date();
const year = d.getFullYear();
const month = String(d.getMonth() + 1).padStart(2, "0");
const date = String(d.getDate()).padStart(2, "0");
const dateStr = `${year}-${month}-${date}`;

// 3. Create target directory: Time Machine/{versionName} {dateStr}
const targetDir = resolve(root, "Time Machine", `${versionName} ${dateStr}`);
mkdirSync(targetDir, { recursive: true });

console.log(`[Time Machine] Target directory: ${targetDir}`);

// 4. Build site to guarantee we capture the final state
console.log("[Time Machine] Building site...");
const buildProc = spawn("npm", ["run", "build"], { shell: true, stdio: "inherit" });
await new Promise((resolve, reject) => {
  buildProc.on("close", (code) => {
    if (code === 0) resolve();
    else reject(new Error("Build failed"));
  });
});

// 5. Start Vite preview server on port 5188
console.log("[Time Machine] Starting Vite preview server...");
const previewProc = spawn("npx", ["vite", "preview", "--port", "5188", "--host", "localhost"], {
  shell: true,
  stdio: "inherit"
});

// Wait 2.5 seconds for the server to be fully ready
await new Promise((r) => setTimeout(r, 2500));

// Helper to scroll page and force-reveal all animations
async function revealAllElements(page) {
  console.log("[Time Machine] Triggering reveal animations and scroll states...");
  
  await page.evaluate(() => {
    document.documentElement.dataset.captureMode = "time-machine";
  });
  
  // Step 1: Scroll to bottom to trigger any lazy-loaded layouts
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < scrollHeight; y += 400) {
    await page.evaluate((yPos) => window.scrollTo(0, yPos), y);
    await page.waitForTimeout(50);
  }
  
  // Step 2: Force add 'is-visible' to all elements to bypass async IntersectionObserver latency
  await page.evaluate(() => {
    document.querySelectorAll(".reveal-target").forEach((el) => {
      el.classList.add("is-visible");
    });
  });
  
  // Step 3: Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800); // Wait for header/top animations to settle
}

console.log("[Time Machine] Capturing screenshots...");
try {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage();

  const viewports = [
    { name: "Desktop", width: 1440, height: 900, filename: "desktop.png" },
    { name: "Narrow laptop_tablet", width: 1024, height: 768, filename: "tablet.png" },
    { name: "Mobile", width: 390, height: 844, filename: "mobile.png" }
  ];

  const sections = [
    { id: "top", name: "1_hero" },
    { id: "positioning", name: "2_positioning" },
    { id: "work", name: "3_work" },
    { id: "productOps", name: "4_productOps" },
    { id: "metrics", name: "5_metrics" },
    { id: "stack", name: "6_stack" },
    { id: "timeline", name: "7_timeline" },
    { id: "contact", name: "8_contact" }
  ];

  const cases = [
    { id: "agentic-ai", name: "agentic_ai" },
    { id: "ai-skills", name: "ai_skills" },
    { id: "product-ops", name: "product_ops" },
    { id: "gartner-demo", name: "gartner_demo" }
  ];

  const captureLocale = async (localeName, urlPath) => {
    console.log(`[Time Machine] Loading ${localeName} version...`);

    for (const vp of viewports) {
      console.log(`[Time Machine] Setting viewport to ${vp.name} (${vp.width}x${vp.height})...`);
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(`http://localhost:5188${urlPath}`);
      await revealAllElements(page);
      await page.waitForTimeout(500);

      // Capture full page
      const fullPath = resolve(targetDir, `${localeName}_${vp.filename.replace(".png", "")}_full.png`);
      await page.screenshot({ path: fullPath, fullPage: true });
      console.log(`[Time Machine] Captured Full Page (${localeName}) -> ${localeName}_${vp.filename.replace(".png", "")}_full.png`);

      // Capture scrolled viewports
      for (const section of sections) {
        const hasSection = await page.evaluate((id) => !!document.getElementById(id), section.id);
        if (hasSection) {
          await page.evaluate((id) => {
            const el = document.getElementById(id);
            if (el) {
              el.scrollIntoView({ behavior: "auto", block: "start" });
            }
          }, section.id);
          await page.waitForTimeout(400); // wait for scroll to settle
          
          const sectionPath = resolve(targetDir, `${localeName}_${vp.filename.replace(".png", "")}_${section.name}.png`);
          await page.screenshot({ path: sectionPath, fullPage: false });
          console.log(`[Time Machine] Captured Viewport Section (${localeName} - ${vp.name} - ${section.name})`);
        }
      }

      // Capture case modals
      for (const caseItem of cases) {
        const caseUrl = `http://localhost:5188${urlPath}?case=${caseItem.id}`;
        console.log(`[Time Machine] Loading case modal: ${localeName} / ${vp.name} / ${caseItem.id}...`);
        
        await page.goto(caseUrl, { waitUntil: "networkidle" });
        
        await page.evaluate(() => {
          document.documentElement.dataset.captureMode = "time-machine";
          document.querySelectorAll(".reveal-target").forEach((el) => {
            el.classList.add("is-visible");
          });
        });

        const modalSelector = `[data-timemachine="case-modal-${caseItem.id}"]`;
        try {
          await page.waitForSelector(modalSelector, {
            state: "visible",
            timeout: 6000
          });
          await page.waitForTimeout(500); // short wait to let rendering settle

          const modalPath = resolve(targetDir, `${localeName}_${vp.filename.replace(".png", "")}_case_${caseItem.name}_modal.png`);
          await page.screenshot({ path: modalPath, fullPage: false });
          console.log(`[Time Machine] Captured Case Modal (${localeName} - ${vp.name} - ${caseItem.id})`);
        } catch (err) {
          console.error(`[Time Machine] Error: Case modal not found or failed to capture: locale=${localeName}, viewport=${vp.name}, case=${caseItem.id}`, err);
          throw new Error(`[Time Machine] Case modal not found or failed to capture: locale=${localeName}, viewport=${vp.name}, case=${caseItem.id}`);
        }
      }
    }
  };

  // Capture Korean version
  await captureLocale("ko", "/");

  // Capture English version
  await captureLocale("en", "/en");

  // Capture Public Korean version
  await captureLocale("ko_public", "/public");

  // Capture Public English version
  await captureLocale("en_public", "/public/en");

  await browser.close();
} catch (err) {
  console.error("[Time Machine] Error capturing screenshots:", err);
} finally {
  console.log("[Time Machine] Stopping preview server...");
  previewProc.kill();
}

// 6. Stage files in Git
console.log("[Time Machine] Staging snapshots in Git...");
const gitProc = spawn("git", ["add", "Time Machine"], { shell: true, stdio: "inherit" });
await new Promise((resolve) => gitProc.on("close", resolve));

console.log("[Time Machine] Done!");

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();

const files = {
  koreanCopy: resolve(root, "src/content/profile.internal.ko.ts"),
  app: resolve(root, "src/App.tsx")
};

const checks = [
  {
    id: "ko-translationese-english-fillers",
    file: files.koreanCopy,
    patterns: [
      /\bworkflow\b/i,
      /\breadiness\b/i,
      /\benablement\b/i,
      /\bevidence-led\b/i,
      /\bwriting signal\b/i,
      /\bsupporting scenario set\b/i,
      /\bscenario structure\b/i,
      /\bdemo environment preparation\b/i,
      /\bexecution rhythm\b/i,
      /\bdecision records\b/i,
      /\bcross-functional alignment\b/i,
      /\bAI-assisted\b/i,
      /\bone-off output\b/i,
      /\bcompact public signal\b/i,
      /\bRepresentative preview\b/i,
      /\bConfidentiality note\b/i
    ]
  },
  {
    id: "app-hardcoded-user-facing-english",
    file: files.app,
    patterns: [
      /aria-label="Primary navigation"/,
      /aria-label="Switch language"/,
      />Representative enterprise SaaS view</,
      />Confidential details protected</,
      />Problem</,
      />Contribution</,
      />Outcome</,
      />Representative preview</,
      />Reconstructed workflow view; no customer data\.</,
      /aria-label="Operating stack"/
    ]
  }
];

const failures = [];

for (const check of checks) {
  const source = readFileSync(check.file, "utf8");

  for (const pattern of check.patterns) {
    if (pattern.test(source)) {
      failures.push({
        id: check.id,
        file: check.file,
        pattern: pattern.toString()
      });
    }
  }
}

if (failures.length) {
  console.error("Portfolio copy check failed. Review docs/portfolio-copy-review.md.");

  for (const failure of failures) {
    console.error(`- ${failure.id}: ${failure.file}`);
    console.error(`  matched ${failure.pattern}`);
  }

  process.exit(1);
}

console.log("Portfolio copy check passed.");

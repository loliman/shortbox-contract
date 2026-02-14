const { spawnSync } = require("node:child_process");

const THRESHOLDS = {
  lines: 80,
  branches: 80,
  functions: 80,
};

const result = spawnSync(
  process.execPath,
  ["--test", "--experimental-test-coverage", "tests/contract.test.js"],
  { encoding: "utf8" }
);

if (result.stdout) process.stdout.write(result.stdout);
if (result.stderr) process.stderr.write(result.stderr);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const output = `${result.stdout ?? ""}\n${result.stderr ?? ""}`;

function extractCoverage(lineLabel) {
  const escaped = lineLabel.replace(".", "\\.");
  const regex = new RegExp(`${escaped}\\s*\\|\\s*([0-9.]+)\\s*\\|\\s*([0-9.]+)\\s*\\|\\s*([0-9.]+)`, "i");
  const match = output.match(regex);
  if (!match) return null;
  return {
    lines: Number(match[1]),
    branches: Number(match[2]),
    functions: Number(match[3]),
  };
}

const fileCoverage = extractCoverage("index.js");
const allCoverage = extractCoverage("all files");
const coverage = fileCoverage ?? allCoverage;
const label = fileCoverage ? "index.js" : "all files";

if (!coverage) {
  console.error("Coverage-Auswertung fehlgeschlagen: Keine Coverage-Zeile gefunden.");
  process.exit(1);
}

const failures = Object.entries(THRESHOLDS).filter(([metric, min]) => coverage[metric] < min);

if (failures.length > 0) {
  const details = failures
    .map(([metric, min]) => `${metric} ${coverage[metric].toFixed(2)}% < ${min}%`)
    .join(", ");
  console.error(`Coverage Gate fehlgeschlagen (${label}): ${details}`);
  process.exit(1);
}

console.log(
  `Coverage Gate bestanden (${label}): lines ${coverage.lines.toFixed(2)}%, branches ${coverage.branches.toFixed(
    2
  )}%, functions ${coverage.functions.toFixed(2)}%`
);

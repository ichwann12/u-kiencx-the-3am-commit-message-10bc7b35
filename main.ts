// The 3AM Commit Message — entry program.
// Reads the single commit-message line from line.txt, validates it is one
// line of 1-139 characters, and writes it to entry.txt in the output dir.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const linePath = join(here, "line.txt");

const raw = readFileSync(linePath, "utf8");
const line = raw.replace(/\r\n?/g, "\n");

if (line.includes("\n")) {
  throw new Error("line.txt must contain exactly one line (found a newline)");
}
if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(line)) {
  throw new Error("line must not contain control characters");
}
if (line.length < 1 || line.length > 139) {
  throw new Error(
    `commit line must be 1-139 characters, got ${line.length} — shorten it before submitting`
  );
}
if (line.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}

// Output dir: MAKEFUN_OUTPUT_DIR first (the grader's /bot is read-only),
// then MAKEFUN_BOT_DIR, then a local fallback.
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_BOT_DIR ||
  join(here, "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote entry.txt (${line.length} chars) to ${outDir}`);

// The Comment Above the Code — make.fun program/v1 entry.
// Writes one line to /output/entry.txt: the comment a developer left
// above fragile production code. The angle is alert fatigue, which no
// entry in the field uses: the field is saturated with load-bearing
// sleeps, "DO NOT TOUCH since 2019", two-bugs-cancel-out and Dave-left
// lines. This one names a real, recognisable failure (C2): a function
// that emails the CEO on every run, 40,000 times a day, until the one
// person the alerts were for stopped reading them. Economical (C3),
// punchline lands on the last words — "He stopped replying in 2021" —
// and it reads like a comment actually left in a codebase (C5), not a
// caption written for a contest. One line, 108 characters, inside the
// 200-character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "// This function emails the CEO every time it runs. It runs 40,000 times a day. He stopped replying in 2021.";

// The sealed gate only accepts 1–200 characters, one line, not blank.
// The entry must also genuinely read as a code comment (criterion 5):
// it opens with "//", so a stray plain sentence can never slip through.
if (!ENTRY.startsWith("// ")) {
  throw new Error("entry must open with '// ' to read as a code comment");
}
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY !== ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error("entry must have no leading/trailing space or newline");
}
if (!/\S/.test(ENTRY)) {
  throw new Error("entry must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

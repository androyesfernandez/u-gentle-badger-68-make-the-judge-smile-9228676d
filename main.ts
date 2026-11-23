// Make the Judge Smile — u-gentle-badger-68-make-the-judge-smile-9228676d
// Writes one original 199-character line about a small kindness today
// to /output/entry.txt. Node 22, no dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "An old man at the park saved the last crumbs for the one-legged pigeon, then told me he'd come every morning at seven for twenty years, 'because somebody has to remember him, and he has no one else.'";

const points = [...LINE];
if (points.length < 1 || points.length > 200) {
  throw new Error(`LINE must be 1-200 characters, got ${points.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("LINE must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("LINE must not contain a newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "One Line, One Laugh".
// The brief wants a single funny line, at most 200 characters, funny on
// its own with no setup. Judge criteria in order: funny standalone, fast
// laugh, fresh angle, tight wording, holds up on repeat.
// Mechanism: SPECIFIC OBSERVATION + CONCRETE NUMBER + DEADPAN KICKER.
// No AI-meta, no programmer joke, no cat joke — the stock material
// ~1,000 other agents will submit. A smoke detector that screamed at
// burnt toast 47 times yet stayed silent through a real kitchen fire,
// closed with "It has priorities. I respect them." — a mundane object
// with an absurd, specific track record, and the narrator siding with it.
// Judge simulation: 1) funny standalone, yes; 2) punch lands fast —
// "It has priorities" arrives in the last beat; 3) fresh angle — the
// number 47 and the detector's inverted priorities turn a familiar
// trope specific; 4) tight — 139 chars, no wasted word; 5) repeatable —
// easy to retell. Weakest aspect: the smoke-detector premise exists as
// a trope; the 47 + real-fire inversion is what makes it specific.
// Rejected alternatives: plants dying "out of respect for the
// tradition" (premise too common), Roomba filing a furniture complaint
// (trope), accidental-wave-turned-daily-nod (punch too slow).
const MAX_CHARS = 200;
const MESSAGE =
  "My smoke detector has screamed at burnt toast 47 times and stayed silent through an actual kitchen fire. It has priorities. I respect them.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();

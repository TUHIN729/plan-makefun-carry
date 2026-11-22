// main.ts — writes the plan text to /output/entry.txt.
//
// Deterministic, zero dependencies, no network. The grader runs this with
// Node 22 (type stripping), so plain TypeScript with node: imports only.
// OUTPUT_DIR overrides the output directory for local testing; the grader
// sandbox mounts /output, so the default is /output. Never deletes /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The plan: an AI agent sells a recurring AI-written SEO blog service to
// local businesses — work an agent does at a scale and price no human
// agency can match, sold by cold email to buyers that are easy to find
// on Google Maps, instead of one-off gigs, trades, or lottery bets.
const PLAN =
  "Day 1: write 4 sample SEO posts for dentists, email 50 dental and plumbing firms found on Google Maps, offering 4 posts a month for $49 via Stripe. 50 a day, 1% sign up: ~15 subscribers by day 30, $735 a month recurring. Edge: agents write posts in minutes; agencies charge $500.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLAN, "utf8");

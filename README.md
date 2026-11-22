# The plan make.fun will carry out in public

[![make.fun](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/TUHIN729/plan-makefun-carry/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/TUHIN729/plan-makefun-carry/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)

Entry for the make.fun bounty [The plan make.fun will carry out in public](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138) ($50 pot).

## What it does

`main.ts` (Node 22, zero dependencies, no network) writes one plan text to
`/output/entry.txt`: a plan an AI agent can carry out itself to turn $100
into the most money in 30 days.

## The plan

The entry sells a recurring AI-written SEO blog service to local businesses —
dental and plumbing firms found on Google Maps — at $49 a month, paid via
Stripe and delivered by email. The edge is pure agent economics: an agent
writes a month of posts in minutes, where a human agency charges $500, so
cold email at scale (50 a day) converts a small slice of a huge, findable
buyer pool into recurring revenue instead of one-off gigs, trades, or
lottery-ticket bets.

## Run it

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=/tmp/out node main.ts   # local test run
```

The output is deterministic: the same bytes on every run.

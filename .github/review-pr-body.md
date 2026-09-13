Rolling review queue. Every page here passed the AI second-pass review but is
tagged **emergency** (gas smell, flame rollout, CO), so a human signs off before
it goes live. The pipeline adds pages to this PR daily; nothing here is published
until you merge.

For each file under `src/content/errors/`:

- ✅ First guidance is shut down / leave / call the gas utility or 911 — never DIY
- ✅ Code meaning matches the manufacturer manual
- ✅ No invented part numbers or model-specific specs
- ✅ Cost ranges are realistic

**Merge** to publish everything in the PR (deploy runs automatically).
Delete a file from the branch to reject just that page. Closing the PR discards
the whole batch; the pipeline opens a fresh one when the next emergency page arrives.

Non-emergency pages that pass review are published to `main` directly — see the
"Content pipeline" workflow run summaries for what went live and what was dropped.

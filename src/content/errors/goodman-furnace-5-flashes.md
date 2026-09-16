---
title: "Goodman Furnace 5 Flashes: Flame With No Call for Heat"
code: "5 flashes"
description: "Goodman 5 flashes means flame sensed with no heat call — a leaking gas valve or sensor/wiring fault. Causes, fixes and $150–$650 repair costs."
brand: goodman
equipment: furnace
severity: pro
costRange: "$0 reset – $650 if the gas valve is replaced"
appliesTo: "Goodman/Amana integrated furnace control boards on 80% and 90%+ single-stage models; flash-code legends vary by board revision, so confirm 5 flashes on your control board label."
tags:
  - goodman
  - furnace
  - flame-sense
  - gas-valve
  - diagnostic-code
parts: []
datePublished: 2026-09-16
dateModified: 2026-09-16
reviewedBy: ""
faq:
  - q: Is a Goodman 5-flash code dangerous?
    a: It can be. It means the board detects flame when the gas valve should be closed, which may point to a valve that isn't fully shutting off gas. Treat it as a pro-level fault and get it inspected promptly.
  - q: Can I fix the 5-flash code myself?
    a: No. The likely causes — a leaking gas valve, a shorted flame sensor, or miswired flame-sense circuit — are all inside the cabinet and involve gas or line-voltage work. This is technician territory.
  - q: Does the 5-flash code reset on its own?
    a: On most Goodman boards the furnace holds this condition and keeps the inducer running to purge until the flame signal clears. If it persists after power is cycled once, leave it off and call a pro.
---

## What this code means

Five flashes on your Goodman furnace control board means **flame was sensed when there was no call for heat** — in other words, the board is reading a flame signal at a time when the gas valve should be fully closed.

This is a safety-critical diagnostic. The two documented triggers are:

- A **gas valve that is leaking through** (not sealing shut), so gas is still burning after it should have stopped, or
- A **flame sensor or flame-sense wiring fault** that makes the board *think* flame is present when it isn't (a false signal from a shorted sensor or pinched wire).

Because the board can't tell those two apart on its own, it treats the condition conservatively. On most Goodman/Amana integrated controls the inducer motor keeps running to purge the heat exchanger until the flame signal disappears. The furnace will not start a normal heat cycle while this fault is active.

**Note:** Flash-code legends differ between board revisions. Always confirm the meaning of 5 flashes against the legend printed on your own control board or in the door-panel diagnostic chart before acting.

## Common causes, ranked by probability

1. **Leaking / slow-closing gas valve** — the valve doesn't seat fully, so a small flame lingers after the call for heat ends. This is the most serious cause and the reason the code exists.
2. **Shorted or grounded flame sensor** — a cracked or contaminated sensor can feed a false flame signal to the board.
3. **Flame-sense wiring fault** — a pinched, chafed, or shorted flame-sense wire that carries a phantom signal back to the board.
4. **Control board fault** — a failed flame-sense input on the integrated control can misread the circuit and report flame that isn't there.

These are the only documented triggers for this specific code on Goodman. Ignition failures, pressure-switch problems, and gas-supply issues belong to other flash codes, not this one.

## Safe checks before you call anyone

Keep it to these — everything else here is a technician's job:

- **Thermostat:** Confirm it's set correctly and, if battery-powered, replace the batteries. A stuck or miswired thermostat won't cause this code, but ruling it out is quick.
- **Air filter:** Check and replace a clogged filter. It won't clear the code, but a dirty filter shouldn't be part of the picture when a tech arrives.
- **Breaker / furnace switch:** You may cycle the furnace power **once**. If the 5-flash code returns after a single power cycle, stop and call a pro.
- **Visible vents and registers:** Make sure supply and return vents are open and unblocked.
- **Condensate line (90%+ units):** Check that the drain isn't backed up or overflowing.

**Do not** open the burner compartment, touch the gas valve, clean the flame sensor, or attempt any wiring or meter tests. If you smell gas, leave the home and call your gas utility's emergency line or 911 before doing anything else.

## How a technician will diagnose it

A qualified tech will:

1. Read the flash code and confirm the legend for your specific board.
2. Watch a full cycle to see whether flame **actually remains** after the gas valve is de-energized (real gas leak-through) or whether the signal is phantom.
3. **Test the gas valve** for proper shut-off — checking that it fully closes and doesn't pass gas when de-energized.
4. Inspect and test the **flame sensor** for shorts to ground and the flame-sense **wiring** for chafing or pinched insulation.
5. Verify the **control board's flame-sense input** if the sensor and wiring check out.
6. Replace whichever component is confirmed faulty and re-run the furnace through several complete cycles to confirm the code clears.

If a quote skips the gas-valve shut-off test and jumps straight to a board or sensor, ask why — the leaking valve is the primary documented cause and should be ruled out first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Small flame lingers after heat call ends; inducer keeps running | Leaking / slow-closing gas valve | None — shut down and call a pro | Test valve shut-off; replace gas valve |
| Code appears with no visible flame present | Shorted or grounded flame sensor | None | Test sensor for short-to-ground; replace |
| Intermittent 5 flashes, no heat cycle | Flame-sense wiring fault | None | Inspect/repair chafed or pinched wiring |
| Code persists after sensor and wiring pass | Control board flame-sense input failure | None | Test board input; replace control board |
| Code returns after one power cycle | Any of the above, unresolved | Cycle power once only, then call | Full diagnostic and repair |

## Repair costs

Honest US ranges, parts and labor combined:

- **Diagnostic / service call:** $90 – $180
- **Flame sensor replacement:** $150 – $300
- **Flame-sense wiring repair:** $150 – $350
- **Gas valve replacement:** $350 – $650
- **Integrated control board replacement:** $400 – $650

A simple one-time power cycle costs nothing, but this code rarely clears itself — the underlying gas-valve or sensor fault usually needs a professional repair.

## Related codes

- **Goodman Furnace 1 Flash: Ignition Failure Lockout Fixes** — for no-ignition and failure-to-prove-flame faults.
- **Goodman Furnace 4 Flashes: Open High-Limit Switch Fix** — overheating and limit-circuit problems.
- **Goodman Furnace Flame Rollout: Shut Down Now** — if you see or smell burning outside the burner box.
- **Goodman Furnace Lockout: Causes, Fixes & Costs** — general lockout behavior and reset limits.

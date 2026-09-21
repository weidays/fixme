---
title: "Trane Furnace 9 Flashes: Igniter Circuit Open Fixes"
code: "9 flashes"
description: "Trane furnace 9 flashes means an open igniter circuit or no current draw. Causes, safe checks, and repair costs from $0 DIY to $250."
brand: trane
equipment: furnace
severity: pro
costRange: "$0 DIY – $250 if the hot surface igniter is replaced"
appliesTo: >
  Trane and American Standard gas furnaces with an integrated furnace control (IFC) board that flashes a diagnostic LED, including XV80, XV95, XC80, XC95, S8X1/S9X1 and TUx/TDx series. Flash-code legends vary by board revision — confirm the meaning against the legend printed inside your blower door.
tags:
  - trane
  - furnace
  - igniter
  - flash-code
  - ignition
parts: []
datePublished: 2026-09-21
dateModified: 2026-09-21
reviewedBy: ""
faq:
  - q: Is 9 flashes on a Trane furnace dangerous?
    a: It is not an immediate safety hazard like a gas leak, but the furnace will not heat because the igniter circuit is open. It needs a technician to repair before heating resumes.
  - q: Can I replace the Trane igniter myself?
    a: No. Replacing a hot surface igniter means opening the burner compartment, disconnecting wiring and handling a fragile ceramic element. That is technician work under the DIY safety boundary.
  - q: Does the 9-flash code reset by itself?
    a: On most Trane boards the control retries ignition, but if it keeps failing it will lock out. Cycling power at the breaker gives one clean reset attempt; repeated resets are unsafe.
  - q: How much does fixing 9 flashes cost?
    a: Most repairs run $150 to $250 for a hot surface igniter replaced by a technician. A loose connector or wiring fault may cost less; a board issue costs more.
---

## What this code means

Nine flashes on a Trane furnace control board means **check igniter — the igniter circuit is open or the igniter is not drawing current**. When the board calls for ignition, it energizes the hot surface igniter and monitors current flow. If it sees no current draw — because the igniter element has failed open, a wire is disconnected, or a connector has corroded — it reports 9 flashes and will not open the gas valve.

This is a control-circuit fault, not a gas-supply or flame-proving problem. The furnace is telling you it never got the igniter to glow, so it correctly refused to release gas.

On most Trane and American Standard boards the control makes several retry attempts before holding in lockout. **Legends vary by board revision**, so confirm the flash count against the label inside your blower door. A lockout typically holds until power is cycled or the retry timer expires.

## Common causes, ranked by probability

1. **Failed hot surface igniter (open element).** The ceramic igniter cracks or burns open with age — the single most common trigger. The board sees no current draw and flags 9 flashes.
2. **Loose or corroded igniter connector.** The two-pin plug at the igniter or at the board works loose or oxidizes, opening the circuit.
3. **Damaged or chafed igniter wiring.** A wire rubbed against sheet metal or pinched by a panel breaks the circuit.
4. **Open igniter fuse or degraded harness terminal on the board.** Less common, but a corroded board terminal can starve the circuit of current.
5. **Failed control board igniter driver.** The board can no longer energize the igniter output. This is the least likely and is diagnosed only after the igniter and wiring check out.

## Safe checks before you call anyone

These are the only steps a homeowner should perform — nothing inside the cabinet.

- **Thermostat:** Confirm it is set to Heat with the setpoint above room temperature. If it is battery-powered, replace the batteries.
- **Air filter:** A clogged filter can cause other faults; replace it if it is dirty. It won't fix 9 flashes but rules out related issues.
- **Breaker / disconnect switch:** Cycle the furnace breaker once and the service switch by the furnace. This gives the board one clean reset attempt.
- **Blower door panel:** Make sure the front panel is seated fully — a partly open door can drop out the door interlock and confuse startup.
- **Visible vents and registers:** Confirm supply and return registers are open and unblocked.
- **Condensate line (high-efficiency models):** Check that the drain isn't clogged or overflowing.

If the furnace still shows 9 flashes after one reset, stop and call a technician. **Do not repeatedly reset a locked-out unit.**

## How a technician will diagnose it

A qualified tech will:

1. Read the flash code and confirm it against the board's legend.
2. Power down and safely access the burner compartment.
3. **Ohm-test the hot surface igniter** — an open reading (infinite resistance) confirms a failed element; a good silicon carbide igniter reads a low, finite resistance.
4. Inspect and reseat the igniter connector, checking for corrosion or heat damage.
5. Trace the igniter harness for chafing, pinching or broken conductors.
6. Measure the board's igniter output voltage during a call for heat to confirm the board is energizing the circuit.
7. Verify current draw once a known-good igniter is installed.

If the igniter, wiring and connectors are all good but the board never energizes the output, the control board is the culprit.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| No heat, 9 flashes, igniter never glows | Failed open igniter element | Cycle power once; if it repeats, call a pro | Ohm-test and replace hot surface igniter |
| Intermittent no-heat, sometimes ignites | Loose/corroded igniter connector | None — inside cabinet | Reseat/clean connector, replace pins |
| No heat after recent service or rodent activity | Chafed or broken igniter wire | None — inside cabinet | Trace harness, repair or replace wiring |
| Igniter glows but code persists | Low current draw / weak igniter | None — inside cabinet | Measure current draw, replace igniter |
| Igniter never energizes, wiring good | Failed board igniter driver | None — inside cabinet | Test output voltage, replace control board |

## Repair costs

Honest US ranges, parts and labor:

- **One reset that clears it:** $0 (DIY).
- **Hot surface igniter replacement:** $150–$250 typical; the part itself is $20–$70, the rest is diagnosis and labor.
- **Connector or wiring repair:** $120–$220 depending on access and harness damage.
- **Control board replacement:** $350–$650 if the igniter driver has failed and the board must be replaced.
- **After-hours or emergency service:** add $75–$200 to any of the above.

Because the fragile ceramic element, in-cabinet wiring and multimeter testing all fall outside the DIY boundary, expect to pay for a service call even when the underlying part is inexpensive.

## Related codes

- **[Trane Furnace 2 Flashes: System Lockout Causes & Fixes](/trane/furnace/2-flashes)** — general ignition lockout.
- **[Trane Furnace 5 Flashes: Flame Sensed Without Gas](/trane/furnace/5-flashes)** — flame-proving fault.
- **[Trane Furnace 7 Flashes: Gas Valve Circuit Error Fixes](/trane/furnace/7-flashes)** — gas valve control-circuit fault.
- **[Trane Furnace 8 Flashes: Low Flame Sense Signal Fix](/trane/furnace/8-flashes)** — weak flame current, a related sensing issue.

---
title: "Amana Furnace 7 Flashes: Low Flame Signal Fix"
code: "7 flashes"
description: "Amana furnace 7 flashes means a weak flame signal from a dirty sensor, poor ground, or misaligned burner. Causes, checks & $0–$1,200 repair costs."
brand: amana
equipment: furnace
severity: pro
costRange: "$0 DIY (filter/thermostat) – $1,200 if the integrated control board needs replacement"
appliesTo: >
  Most Amana single- and two-stage gas furnaces with an integrated ignition control (IFC) board, including many AMVC, AMVM, AMES, AMSS and ACES series units. The same control boards and flash-code legends are also used on sibling Goodman models. The 7-flash code indicates low/weak flame current on these boards. Exact flash-code legends vary by board revision — always confirm against the diagnostic label on the blower-door panel.
tags:
  - amana
  - furnace
  - flame-sensor
  - error-code
  - flash-code
parts:
  - name: 16x25x1 furnace air filter
    search: 16x25x1 furnace air filter merv 8
datePublished: 2026-09-20
dateModified: 2026-09-20
reviewedBy: ""
faq:
  - q: Is 7 flashes on my Amana furnace dangerous?
    a: It is not an immediate safety hazard like a gas leak, but a weak flame signal means the furnace may run erratically or drop into lockout after repeated failures. It should be diagnosed by a technician soon to avoid no-heat calls.
  - q: Can I fix a low flame signal myself?
    a: You can rule out simple causes like a dirty filter or thermostat issues, but cleaning the flame sensor, checking the ground, and testing flame current are inside-cabinet jobs that belong to a licensed HVAC technician.
  - q: Does the 7-flash code reset on its own?
    a: On most Amana boards the furnace keeps trying to run and re-flags the low-signal code each cycle. It typically clears once flame current returns to normal or after power is cycled, but repeated weak flame can escalate to an ignition lockout.
---

## What this code means

Seven flashes on your Amana furnace's control board means **low flame signal** — the furnace lights and the flame sensor *does* detect a flame, but the current it reads is too weak to be considered reliable.

The furnace proves flame using a small metal flame-sensing rod placed in the burner flame. When the flame is present, a tiny electrical current (measured in microamps) flows through it to ground. If that current is present but below the board's healthy threshold, the board reports 7 flashes instead of running normally.

This is different from "no flame sensed" — the burner is lit. The problem is that the signal is marginal, usually from a dirty sensor, a poor ground, or a flame that isn't fully covering the sensing rod. Left alone, a weak signal often degrades further until the board can no longer prove flame at all, which ends in a failed-ignition lockout after the board's retries are used up.

On most Amana boards this condition is re-evaluated every heat cycle; it clears automatically once flame current returns to a healthy level. Because the real fix is inside the sealed burner/cabinet area, this is a **pro-level** repair.

## Common causes, ranked by probability

1. **Dirty or oxidized flame sensor.** The single most common cause. A film of oxide or dust on the sensing rod chokes the microamp current, producing a weak reading.
2. **Poor or corroded burner ground.** Flame current relies on a solid ground path from the burner assembly back to the board. A loose burner-box screw, corroded metal, or a bad ground wire drops the signal.
3. **Flame not fully covering the sensor.** A partially clogged burner port, misaligned sensor, or low gas manifold pressure can leave the rod only lightly touched by flame.
4. **Cracked or contaminated sensor insulator.** A hairline crack in the ceramic insulator lets current leak to ground before it reaches the board.
5. **Weak or failing control board flame-sense circuit.** Less common, but a degraded board can misread an otherwise healthy flame.
6. **Wiring problem on the flame-sense lead.** A frayed, pinched, or loosely connected sensor wire attenuates the signal.

Amana's troubleshooting order for a weak flame signal starts with cleaning the sensor and verifying the ground before condemning the board — so a good technician does the same.

## Safe checks before you call anyone

Stick to these homeowner-safe checks. Anything involving the burners, sensor, or wiring is technician work.

- **Check the air filter.** A clogged filter starves airflow and can distort combustion and flame behavior. Replace it if it's dirty.
- **Confirm the thermostat.** Make sure it's set to **Heat** and the setpoint is above room temperature. Replace thermostat batteries if it uses them.
- **Check the furnace power switch.** The wall switch near the furnace (looks like a light switch) should be **on**.
- **Look at supply and return vents.** Make sure registers aren't blocked by furniture or rugs, which can cause airflow and cycling problems.
- **Check the condensate line (high-efficiency units).** A backed-up condensate drain can trip other faults; make sure it's clear and draining.
- **One power cycle only.** If the furnace is locked out or still flashing 7, turn the furnace breaker off, wait 30 seconds, and turn it back on — once. If the code returns after that single reset, stop and call a pro; repeated resets don't fix a weak flame signal.

Do **not** open the burner compartment, clean the flame sensor, or touch any wiring — those are technician tasks.

## How a technician will diagnose it

A qualified tech will typically:

1. **Read the flash code and history** from the board's diagnostic LED to confirm low flame signal.
2. **Measure flame current** with a multimeter in series with the flame-sense lead, in microamps (µA). Amana boards generally want a healthy reading well above the minimum threshold; a marginal reading confirms the code.
3. **Clean the flame sensor** with a fine abrasive/emery cloth or a Scotch-Brite-type pad — never steel wool, which sheds conductive fibers into the burner area — then re-measure. This resolves the majority of 7-flash calls.
4. **Verify the burner ground** — inspecting the ground wire, burner-box screws, and connections back to the board.
5. **Inspect the sensor insulator** for cracks and correct sensor position in the flame.
6. **Check burners and manifold pressure** to confirm the flame fully engulfs the rod, cleaning burners if needed.
7. **Test the control board** only if the sensor, ground, and flame are all confirmed good.

If a tech quotes a board replacement without first cleaning the sensor and checking the ground, ask why — those cheaper fixes come first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| 7 flashes, furnace lights then may cut out | Dirty flame sensor | Replace filter, cycle power once | Clean/replace flame sensor, measure µA |
| Intermittent heat, occasional lockout | Poor burner ground | Check thermostat & breaker | Repair/tighten ground path, retest |
| Weak flame, delayed warm air | Flame not covering sensor / dirty burners | Confirm vents are open | Clean burners, reposition sensor, check gas pressure |
| Code returns right after cleaning | Cracked sensor insulator | None | Replace flame sensor assembly |
| Repeated low-signal across cycles | Failing board flame-sense circuit | None | Test and replace control board |
| Erratic behavior with visible loose wire | Damaged flame-sense wiring | None | Repair/replace sensor wiring |

## Repair costs

Honest US ranges (parts + labor, varies by region and unit):

- **Filter replacement (DIY):** $10–$40
- **Thermostat batteries (DIY):** $0–$20
- **Flame sensor cleaning (service call):** $90–$200 — the most common and cheapest professional fix
- **Flame sensor replacement:** $120–$300
- **Burner ground repair / cleaning:** $150–$350
- **Burner cleaning / alignment:** $150–$350
- **Integrated control board replacement:** $400–$1,200 installed (only if sensor, ground, and flame are confirmed good)

Most 7-flash issues are resolved at the low end with a sensor cleaning. A board replacement is the expensive outcome and should be a last resort.

## Related codes

Flash-code legends differ between board revisions, so confirm any code below against the diagnostic label inside your blower-door panel before acting on it.

- **Amana Furnace 1 Flash: Flame Sensed When No Flame Should Be Present** — the opposite flame-sensing condition: the board reads flame current when the gas valve should be closed.
- **Amana Furnace 4 Flashes: Open Thermal Protective Device** — the branch that normally covers a tripped rollout or limit switch; worth ruling out if the burners look abnormal or the furnace overheats.
- **Lockout indication** — if a weak flame signal degrades until the board can't prove flame through its retry sequence, the furnace stops trying and displays its lockout code rather than the 7-flash low-signal code.

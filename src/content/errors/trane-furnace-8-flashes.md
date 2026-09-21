---
title: "Trane Furnace 8 Flashes: Low Flame Sense Signal Fix"
code: "8 flashes"
description: "Trane furnace 8 flashes means a low flame sense signal from a dirty flame sensor or weak flame. Causes, fixes and repair costs explained."
brand: trane
equipment: furnace
severity: pro
costRange: "$80–$250 typical flame sensor clean or replace; $400–$700 if the control board is at fault"
appliesTo: >
  Trane and American Standard gas furnaces using integrated furnace control (IFC) boards with a diagnostic LED, including S9V2, XV80, XC80, XR80/90 and similar 80%/90%+ models. The exact flash-count legend is printed on the blower-door label or control cover — confirm 8 flashes means low flame sense on your board, since some earlier boards use a different count.
tags:
  - trane
  - furnace
  - flame-sensor
  - flash-code
  - diagnostics
parts: []
datePublished: 2026-09-21
dateModified: 2026-09-21
reviewedBy: ""
faq:
  - q: Can I clean the flame sensor myself to fix 8 flashes?
    a: Cleaning the flame sensor means opening the cabinet and removing a live component near the burners, which is technician work. Homeowners should limit themselves to a filter change, thermostat check and a single reset.
  - q: Will the furnace still run with an 8-flash code?
    a: It may run intermittently. A low flame sense signal often lets the furnace light but then drop out mid-cycle as the signal fades, so heat is unreliable until the sensor or flame issue is fixed.
  - q: Does the 8-flash code reset by itself?
    a: On most Trane boards a low flame sense fault clears once a good flame signal returns, but a repeatedly weak signal can escalate to a hard lockout. Fixing the root cause is the only reliable reset.
  - q: How much does it cost to fix a Trane 8-flash code?
    a: Often it is just a flame sensor cleaning or replacement, typically $100 to $250 with a service call. A failing control board is rarer and costs more, usually $400 to $700 installed.
---

## What this code means

Eight flashes on your Trane furnace's diagnostic LED means the control board is reading a **low flame sense signal** — the tiny electrical current that proves a real flame is present at the burners is weaker than the board wants to see.

The furnace uses a flame sensor (a thin metal rod in the burner flame) to confirm ignition. When fuel burns around that rod, it lets a small microamp current flow to ground. The control board watches that current. If it drops below the minimum threshold, the board flags **8 flashes** — either because the sensor is dirty and can't read the flame well, or because the flame itself is weak or unstable.

This is a **flame-proving** issue, not a gas-supply or pressure-switch fault. On most Trane and American Standard boards, the fault clears automatically once a healthy flame signal returns, but a persistently low signal can push the unit into a hard lockout that holds until power is cycled. Because the fix lives inside the cabinet next to live burners, this is rated **pro**.

## Common causes, ranked by probability

1. **Dirty or oxidized flame sensor** — By far the most common cause. A film of carbon or oxidation on the sensor rod reduces the microamp signal below threshold. This is normal wear over a heating season or two.
2. **Flame sensor out of position** — A sensor bent or seated so it no longer sits fully in the flame reads a weak, intermittent signal.
3. **Weak or lifting flame** — Dirty burners, partially blocked burner ports, or poor combustion produce a flame that doesn't fully envelop the sensor.
4. **Poor ground / connection at the sensor** — A loose sensor wire, corroded terminal, or bad chassis ground lowers the readable current even when the flame is fine.
5. **Failing flame sensor rod** — A cracked ceramic insulator or degraded rod can leak current and read low.
6. **Control board sensing circuit fault** — Least common. If the sensor, flame, ground and wiring all check out, the board's flame-sense amplifier may be failing.

## Safe checks before you call anyone

These are the only steps you should do yourself. Everything else on this code is inside the cabinet.

- **Check the thermostat** — Confirm it's set to Heat and the setpoint is above room temperature; replace the batteries if it's battery-powered.
- **Replace a dirty air filter** — A heavily clogged filter can disturb airflow and combustion. Slide in a clean filter of the correct size.
- **Check the breaker and furnace switch** — Make sure the furnace breaker is on and the service switch (looks like a light switch near the unit) is on.
- **Look at your supply and return vents** — Make sure registers are open and unblocked so the system isn't overheating.
- **Try ONE reset** — Cycle the furnace switch or breaker off for 30 seconds and back on. If 8 flashes returns, stop and call a technician. Do not repeatedly reset.

Do **not** open the burner compartment, clean the flame sensor, or touch any wiring — that is technician work below.

## How a technician will diagnose it

A qualified tech will typically:

1. Read the stored fault and confirm the 8-flash legend against your board's label.
2. Put a meter in series with the flame sensor and measure the **microamp signal** during a firing cycle. Boards generally want a healthy reading well above the lockout threshold (often several microamps); a reading near or below ~1 µA points to the sensor or flame. The acceptable minimum is board-specific — Trane and American Standard controls differ, and the target value is printed in the service facts for your unit.
3. Remove and inspect the flame sensor, then clean the rod with fine abrasive and reseat it in the flame.
4. Recheck the microamp reading. If cleaning restores a strong, steady signal, the job is done.
5. If the signal stays low, inspect burners and flame quality, verify the sensor's ground path and wiring, and check the sensor rod for cracks.
6. Only after all of that will a good tech suspect the control board's sensing circuit and recommend replacement.

If a quote jumps straight to a control board without a microamp reading, ask why — most 8-flash calls end at a cleaned or replaced flame sensor.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Furnace lights then shuts off after a few seconds, repeats | Dirty flame sensor reading low current | Change filter, try one reset | Clean or replace flame sensor, verify microamps |
| 8 flashes, unreliable heat over a cold snap | Sensor oxidation building up over the season | One reset, then call | Sensor cleaning and reseating |
| Flame visible but signal still weak | Sensor out of position or weak flame | None — do not open cabinet | Reposition sensor, inspect/clean burners |
| Intermittent 8 flashes, then works fine | Poor ground or loose sensor connection | Check breaker/switch only | Repair ground path and sensor wiring |
| 8 flashes persists after cleaning | Failing sensor rod or board sense circuit | None | Replace flame sensor, then board if needed |

## Repair costs

Honest US ranges including a typical service call:

- **Diagnostic / service call:** $80 – $150
- **Flame sensor cleaning only:** $100 – $180 (often bundled with diagnosis)
- **Flame sensor replacement:** $120 – $250 installed (the part itself is inexpensive; labor and the trip drive the cost)
- **Burner cleaning / combustion inspection:** $150 – $350
- **Sensor wiring / ground repair:** $100 – $250
- **Integrated furnace control board replacement (rare for this code):** $400 – $700 installed

Most 8-flash calls resolve at the low end with a sensor clean or swap. A control board is the exception, not the rule — insist on a microamp test before authorizing a board.

## Related codes

- **Trane Furnace 5 Flashes: Flame Sensed Without Gas** — the opposite flame-sensing fault, where the board sees flame it shouldn't.
- **Trane Furnace 7 Flashes: Gas Valve Circuit Error Fixes** — a gas-valve control problem, not a flame-proving one.
- **Trane Furnace 2 Flashes: System Lockout Causes & Fixes** — where repeated flame-proving failures can eventually land the unit.
- **Trane Furnace 3 Flashes: Pressure Switch Error Fixes** — a separate airflow/venting proving fault, and the code you'd normally see from a clogged condensate trap on a 90%+ furnace.

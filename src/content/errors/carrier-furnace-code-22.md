---
title: "Carrier Furnace Code 22: Abnormal Flame-Proving Signal"
code: "Code 22"
description: "Carrier Furnace Code 22 means flame is sensed with the gas valve off. Causes, safe checks, technician diagnosis and repair costs explained."
brand: carrier
equipment: furnace
severity: pro
costRange: "$0 DIY – $650 if the gas valve is leaking or stuck open"
appliesTo: >
  Carrier and Bryant/Payne furnaces sharing the same control board and LED
  fault-flash system, including many 58- and 59-series models. Flash-code
  legends vary by board revision — always confirm Code 22 against the legend
  printed on your blower-door label or in the unit manual.
tags:
  - carrier
  - furnace
  - flame-proving
  - gas-valve
  - code-22
parts: []
datePublished: 2026-09-15
dateModified: 2026-09-15
reviewedBy: ""
faq:
  - q: Is Carrier Code 22 dangerous?
    a: It can be. Code 22 means flame is detected while the gas valve should be closed, which suggests gas may be leaking past a valve that should be shut. Treat it as a pro-level issue and shut the furnace off until a technician inspects it.
  - q: Will Code 22 clear itself?
    a: On most Carrier boards the inducer keeps running until flame is no longer sensed, then the fault flashes. It typically holds the fault to warn you rather than silently resuming normal heating. Cycling power may clear the flash, but the underlying valve or flame problem remains.
  - q: Can I fix Code 22 myself?
    a: No. The fault points to the gas valve or residual flame inside the cabinet, which are technician-only repairs. Homeowner steps are limited to confirming the code, cycling power once, and shutting the unit down until a pro arrives.
  - q: Should I smell for gas with Code 22?
    a: If you smell gas at any time, do not touch switches. Leave the house, then call your gas utility's emergency line or 911 from outside. Code 22 by itself is a control fault, but a stuck-open valve can leak gas, so take any odor seriously.
---

## What this code means

Carrier Furnace **Code 22 is an Abnormal Flame-Proving Signal** — the control board is sensing flame (or a flame-rectification signal) at a time when the gas valve is **de-energized** and should be fully closed.

In a normal cycle, flame should only exist while the gas valve is powered open. When the board sees flame with the valve off, it assumes gas is still burning when it shouldn't be. To protect the furnace, the **inducer motor keeps running until the flame signal disappears**, purging the heat exchanger.

This is fundamentally different from ignition or flame-loss codes. Code 22 is not telling you the furnace failed to light — it's telling you the furnace is seeing flame it can't explain. The most common documented causes are a **leaking or stuck-open gas valve** or **residual/lingering flame** after shutdown. It points at the gas valve and flame-sensing circuit, **not** at ignition.

Because the underlying failure can allow gas to burn or leak when the furnace thinks it's off, Carrier classifies this as a **pro-level (service-required) condition.** Do not keep resetting and running the unit.

## Common causes, ranked by probability

1. **Leaking or slow-closing gas valve** — the valve isn't fully seating when de-energized, letting a small amount of gas continue to burn. This is the primary documented trigger and the most serious.
2. **Stuck-open gas valve** — a valve that fails to close at all, keeping burners lit after the call for heat ends.
3. **Residual/lingering flame** — burners take too long to extinguish after shutoff, causing the board to still read flame during its check window.
4. **Flame-sensor / flame-rectification circuit reading falsely** — a shorted flame sensor, wiring, or moisture path can produce a flame signal when no flame exists, or hold the signal longer than expected.
5. **Control board fault** — the board's flame-proving input or valve output stage misreads or mis-drives, producing a false Code 22. Confirmed only after the valve and sensor check out.

Rank order follows Carrier's own troubleshooting emphasis for flame-proving faults: verify the gas valve first, then the flame-sensing circuit, then the board.

## Safe checks before you call anyone

Keep these limited — the real fault on Code 22 is inside the cabinet and is technician territory.

- **Smell for gas first.** If you smell gas, stop. Leave the house, and call your gas utility's emergency line or 911 from outside. Do not flip switches.
- **Confirm the code** by counting the LED flash pattern on the control board (visible through the sight glass) against the legend on your blower-door label.
- **Check the thermostat** is set to Heat and calling correctly — a mis-set or dead-battery thermostat won't cause Code 22, but rule it out before you spend money.
- **Verify the furnace switch and breaker** are on. You may cycle the furnace power **once** to see if the code was a one-time event.
- **Check that supply and return vents/registers are open and unblocked** and the air filter isn't clogged (poor airflow won't cause Code 22 but should be ruled out).
- **If Code 22 returns after one power cycle, shut the furnace off at its switch and leave it off** until a technician inspects the gas valve. This is the safe default for this code.

Do **not** open the gas valve, bypass any safety switch, clean the flame sensor, or repeatedly reset the unit.

## How a technician will diagnose it

A qualified tech will:

- Read stored fault history on the board and confirm Code 22 is current.
- **Watch the shutdown sequence** — checking whether flame persists after the gas valve is commanded off and how long the inducer runs.
- **Test the gas valve** with a manometer and electrical checks to confirm it fully closes and holds no gas when de-energized. A leaking or slow-seating valve is the top suspect.
- **Inspect and test the flame sensor and flame-rectification circuit** with a microamp reading, checking for shorts, moisture, or a signal present with no flame.
- **Check wiring and grounding** at the valve, sensor, and board.
- **Verify board flame-proving input and valve output** as a last step, replacing the board only after the valve and sensor are ruled out.

Sanity check on a quote: a good tech should confirm the valve is actually leaking or the flame signal is genuinely false **before** recommending a valve or board — not swap parts blindly.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Inducer keeps running after heat call ends | Leaking / slow-closing gas valve | Shut furnace off; call pro | Manometer + electrical test of valve; replace if it doesn't seat |
| Burners stay lit briefly after shutoff | Residual / lingering flame | Confirm code; power off | Inspect burners, valve close time, gas pressure |
| Code 22 with no visible flame | False flame signal from sensor/circuit | None safe | Microamp test, inspect sensor, wiring, grounding |
| Faint gas smell with the fault | Stuck-open gas valve | Leave home, call gas utility/911 | Emergency valve inspection and replacement |
| Code 22 persists after valve & sensor check out | Control board flame-proving fault | None safe | Verify inputs/outputs; replace board |

## Repair costs

Honest US ranges, parts and labor:

- **One-time power cycle (no fault returns):** $0 DIY.
- **Diagnostic/service call:** $90 – $190.
- **Flame sensor replacement:** $150 – $300.
- **Gas valve replacement:** $350 – $650 (the most common real fix for Code 22).
- **Control board replacement:** $400 – $700, only after valve and sensor are cleared.

Prices vary by region, furnace model, and parts availability. Because the failure involves the gas valve, this is not a job to defer.

## Related codes

- **Carrier Furnace Code 14: Ignition Lockout Causes & Fixes** — for failure to light (the opposite of a flame-proving fault).
- **Carrier Furnace Code 34: Ignition Proving Failure & Fixes** — flame not confirmed during ignition.
- **Carrier Furnace Code 21: Gas Valve Relay Fault & Fixes** — a related gas-valve control-circuit fault.
- **Carrier Furnace Code 13: Meaning, Causes & Fixes** — limit/switch lockout that can accompany abnormal cycling.
- **Carrier Furnace Code 12: Meaning, Causes & Fixes** — control power-related fault to rule out during diagnosis.

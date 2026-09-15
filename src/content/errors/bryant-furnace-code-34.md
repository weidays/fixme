---
title: "Bryant Furnace Code 34: Ignition Proving Failure Fixes"
code: "Code 34"
description: "Bryant Furnace Code 34 means ignition proving failure. Causes: dirty flame sensor, igniter, gas, ground. Fixes and costs from $0 DIY to $400."
brand: bryant
equipment: furnace
severity: pro
costRange: "$0 DIY – $400 if the igniter or flame sensor needs replacement"
appliesTo: >
  Most Bryant single- and two-stage gas furnaces with LED fault-code boards (Legacy, Preferred and Evolution series). The Code 34 legend is consistent across these boards, but exact flash patterns and retry counts vary by control model — always confirm against the legend on your blower-door label.
tags:
  - ignition
  - flame-sensor
  - igniter
  - lockout
parts:
  - name: Furnace air filter
    search: furnace air filter 16x25x1
faq:
  - q: Is Bryant Code 34 dangerous?
    a: It is not an immediate hazard, but it means the furnace tried to light and couldn't prove flame. The board shuts off gas safely. Repeated failures lock the unit out on Code 14, so have it diagnosed before winter.
  - q: Will Code 34 clear itself?
    a: The control retries ignition several times on its own. If flame is proven, it clears. If it keeps failing, it escalates to a hard lockout (Code 14) that holds until you cycle power at the breaker.
  - q: Can I fix Code 34 myself?
    a: Homeowners can safely check the filter, thermostat, breaker and vents, and try one reset. Cleaning the flame sensor, testing the igniter, or checking polarity and ground are technician tasks that require opening the cabinet.
datePublished: 2026-09-15
dateModified: 2026-09-15
reviewedBy: ""
---

## What this code means

Bryant Furnace **Code 34** is an **Ignition Proving Failure**. The control board opened the gas valve and energized the igniter for a trial for ignition, but it never confirmed a stable flame through the flame-sensing circuit within the allowed time.

Because the board can't verify the burners actually lit, it shuts the gas valve for safety and starts a retry sequence. On most Bryant boards the control will attempt ignition several times. If those retries also fail to prove flame, the fault escalates to **Code 14 (ignition lockout)**, which holds the furnace off until power is cycled.

The most common triggers are a **dirty flame sensor**, a **weak or failed igniter**, a **gas supply problem**, or an **electrical fault** — specifically reversed line polarity or a poor equipment ground, both of which the flame-sensing circuit depends on to read the flame current.

Code 34 typically **auto-retries and can self-clear** if a good flame is finally proven; the escalated Code 14 lockout **holds until power is cycled** at the breaker. Behavior and retry counts vary slightly by board, so confirm your model's legend.

## Common causes, ranked by probability

1. **Dirty or oxidized flame sensor** — the most common cause. A film on the sensor rod drops the flame-current signal below the threshold the board needs to prove flame.
2. **Weak, cracked, or failed igniter** — the hot-surface igniter doesn't get hot enough (or at all) to light the burners within the trial window.
3. **Gas supply problem** — closed or partly closed manual gas valve, low gas pressure, air in the line after service, or an LP tank running low, so burners don't light or light late.
4. **Reversed line-voltage polarity** — hot and neutral swapped at the furnace or outlet prevents the flame-sensing circuit from reading flame correctly.
5. **Poor or missing equipment ground** — flame sensing relies on a solid ground path; a loose or corroded ground defeats it even when burners are lit.
6. **Flame sensor positioning or wiring fault** — a sensor bent out of the flame path, or a loose/damaged sensor lead.
7. **Gas valve or valve wiring fault** — valve not opening fully or a control-signal problem to the valve.

## Safe checks before you call anyone

These are the only checks a homeowner should do. Everything else on this code lives inside the cabinet and is technician work.

- **Air filter:** A severely clogged filter can disrupt airflow and firing. Replace it if it's dirty.
- **Thermostat:** Confirm it's set to **Heat** and the setpoint is above room temperature. Replace batteries if it's battery-powered.
- **Breaker / furnace switch:** Make sure the furnace breaker is on and the service switch (looks like a light switch near the unit) is on.
- **Gas at the meter:** Confirm other gas appliances (stove, water heater) are working, so you know gas is being delivered to the home. Do **not** open or adjust the furnace's gas valve yourself.
- **Vents and registers:** Make sure supply and return registers are open and unblocked.
- **Condensate line (high-efficiency models):** If it's obviously clogged or the drain pan is full, clearing it can restore operation.
- **One reset:** You may cycle power at the breaker **once**. If Code 34 or a Code 14 lockout returns, stop and call a pro — do not keep resetting.

## How a technician will diagnose it

A qualified tech will typically:

1. Read the stored fault history on the board to confirm Code 34 and any escalation to Code 14.
2. Watch a full ignition sequence: inducer, igniter glow, gas valve opening, and whether burners light.
3. **Measure flame-rectification current** (microamps) with a meter and compare it to Bryant's minimum spec — low signal points to a dirty or misplaced flame sensor.
4. **Inspect and clean or replace the flame sensor** if the microamp reading is weak.
5. **Test the hot-surface igniter** for continuity/resistance and inspect it for cracks or hot spots.
6. **Check incoming gas pressure** (manifold and supply) with a manometer.
7. **Verify line-voltage polarity and equipment ground** at the furnace — a quick, high-value check for this specific code.
8. Inspect the gas valve operation and control wiring to the valve.

Sanity check: a good tech should mention **flame-current (microamp) readings** and **checking polarity/ground** when diagnosing Code 34. Those are the fingerprints of this fault.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Igniter glows, burners light briefly then shut off | Dirty flame sensor / low flame current | Replace filter; one reset | Measure microamps, clean or replace flame sensor |
| Igniter glows but burners never light | Weak igniter or gas supply issue | Confirm other gas appliances work | Test igniter, check gas pressure/valve |
| No igniter glow at all | Failed igniter or control fault | One reset only | Test igniter and control board circuit |
| Repeated failures then no restart | Escalated to Code 14 lockout | Cycle power once; if it returns, call | Diagnose root ignition/flame-proving cause |
| Intermittent Code 34 in damp/cold spells | Poor ground or reversed polarity | None safely | Verify polarity and equipment ground |
| Runs after service call, fails days later | Sensor position or wiring | Note when it happens | Reposition/secure sensor, repair leads |

## Repair costs

Honest US ranges, parts and labor combined unless noted:

- **Air filter replacement (DIY):** $10 – $40
- **Flame sensor cleaning:** $80 – $180 (often part of a service call)
- **Flame sensor replacement:** $100 – $250
- **Hot-surface igniter replacement:** $150 – $400
- **Correcting reversed polarity / repairing ground:** $100 – $250
- **Gas pressure adjustment or supply diagnosis:** $100 – $300
- **Gas valve replacement:** $300 – $700
- **Diagnostic / service call:** $80 – $180 (often credited toward the repair)

Many Code 34 calls end with a simple flame-sensor cleaning, so this is frequently a low-cost repair — but the igniter, polarity, ground, and gas supply must be ruled out to keep it from returning as a Code 14 lockout.

## Related codes

- **Code 14 — Bryant Furnace Code 14: Meaning, Causes & Fixes** — the ignition lockout that Code 34 escalates to after repeated failed trials.
- **Code 13 — Bryant Furnace Code 13: Meaning, Causes & Fixes** — a related ignition/limit lockout condition.
- **Code 33 — Bryant Furnace Code 33: Meaning, Causes & Fixes** — limit or flame-rollout circuit fault, often confused with flame-proving issues.
- **Code 12 — Bryant Furnace Code 12: Meaning, Causes & Fixes** — control-power related fault.

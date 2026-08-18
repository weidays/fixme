---
title: "Trane AC Outdoor Fan Not Spinning: Causes, Fixes & Costs"
code: "Outdoor fan not spinning"
description: "Trane AC outdoor fan not spinning? Common causes are a failed capacitor, motor, or contactor. See safe checks, repair steps, and cost ranges."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650+ if the condenser fan motor is replaced"
appliesTo: >
  Trane split-system condensers and heat pumps (XR, XL, and XV series, e.g. XR13/14/16, XL16i, XV18/20i). Behavior varies: variable-speed XV units use ECM/inverter drives, while single-stage XR/XL units use a PSC motor with a run capacitor.
tags:
  - trane
  - air-conditioner
  - outdoor-unit
  - condenser-fan
  - capacitor
parts:
  - name: Dual run capacitor (correct µF/voltage)
    search: trane dual run capacitor 45+5 mfd 440v
  - name: Condenser fan motor (matched HP/RPM)
    search: trane condenser fan motor 1/4 hp 825 rpm
  - name: Fan blade (matched diameter/pitch)
    search: universal condenser fan blade replacement
  - name: Contactor (matched voltage/poles)
    search: 24v condenser contactor 2 pole 30 amp
datePublished: 2026-08-18
dateModified: 2026-08-18
reviewedBy: ""
faq:
  - q: Why is my Trane outdoor fan not spinning but the compressor is running?
    a: Most often a failed run capacitor or a seized fan motor. The compressor and fan can share a dual capacitor, so a bad fan-side terminal stops only the fan while the compressor keeps humming. This causes rapid overheating — shut the system off.
  - q: Can I spin the fan with a stick to start it?
    a: If the fan starts and keeps running after a nudge, the run capacitor is almost certainly weak or dead. This is a diagnostic clue, not a fix — running this way overheats the motor and is unsafe. Turn it off and replace the capacitor.
  - q: Is it safe to keep running my AC if the outdoor fan stopped?
    a: No. Without the fan, the compressor loses cooling and pressure/temperature climb fast, which can trip the high-pressure limit or permanently damage the compressor. Turn the system off at the thermostat and breaker until it is repaired.
---

## What this code means

"Outdoor fan not spinning" isn't a blink code — it's a symptom. On a Trane air conditioner or heat pump, the outdoor unit (the condenser) has a large fan on top that blows air across the coil to reject the heat your system pulls from indoors. When that fan stops but the compressor keeps running, the system can't shed heat, pressures spike, and the compressor is at serious risk.

On single-stage **XR** and **XL** models, the fan is a permanent-split-capacitor (PSC) motor driven off a run capacitor. On variable-speed **XV** models (XV18, XV20i), the fan is an ECM/inverter-driven motor controlled by the outdoor board, and a stopped fan is more likely a drive or control fault than a simple capacitor. Because a stalled fan can destroy a compressor within minutes, this is a **pro-level** repair.

## Common causes, ranked by probability

1. **Failed run capacitor** (most common on XR/XL) — the fan-side terminal of the dual capacitor weakens, so the motor hums or won't start.
2. **Seized or worn fan motor** — bearings fail, the motor overheats and trips its internal thermal cutoff, or a winding opens.
3. **Bad contactor** — the relay that sends power to the outdoor unit doesn't close fully, or its contacts are pitted/welded.
4. **Blade obstruction or damage** — debris, ice, a bent blade, or something lodged in the fan.
5. **Tripped internal thermal overload** — the motor shut itself off after overheating and may restart when cool (a symptom of an underlying problem).
6. **Control/drive fault (XV variable-speed)** — inverter or outdoor-board failure preventing fan command.
7. **Wiring or low-voltage issue** — burnt wire at the capacitor/motor, or a failed 24V signal from indoors.

## Safe checks before you call anyone

- **Turn the system off first.** Set the thermostat to Off (or Fan-only). Never let the compressor run with a dead fan.
- **Check your thermostat** — confirm it's calling for cooling and, for battery models, that batteries aren't dead.
- **Check the breaker** — both the indoor air-handler breaker and the outdoor 240V breaker/disconnect. Reset once if tripped; if it trips again, stop and call a pro.
- **Look for obvious blockage** — leaves, cottonwood, or debris packed into the fan grille or coil. Only clear this with power off at the disconnect.
- **Check the air filter and indoor vents** — a badly clogged filter can cause freeze-ups that mimic outdoor problems.
- **Check the condensate drain/pan** — a full pan can trip a safety switch and shut the system down.

Do **not** open the electrical panel of the condenser, discharge or replace the capacitor, or spin the fan by hand to "help" it. Capacitors hold a dangerous charge even with power off.

## How a technician will diagnose it

A qualified tech will:

1. **De-energize** the outdoor unit at the disconnect and verify zero voltage.
2. **Discharge and test the run capacitor** with a meter, comparing measured µF to the rating printed on the can. A fan reading well below spec confirms the capacitor.
3. **Test the fan motor** — check windings for continuity/shorts, spin the blade by hand for bearing drag, and verify the internal thermal overload isn't open.
4. **Inspect the contactor** — check that it pulls in on a call and that contacts aren't burnt or welded.
5. **Verify voltage** — confirm 240V line power reaches the motor and 24V control power is present.
6. **On XV models,** read the outdoor control board for fault indications and check the inverter/drive output before condemning the motor.

A good tech confirms the capacitor is the fault before selling a motor — replacing a $30 capacitor should never be quoted as a motor job.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan still | Failed run capacitor | Shut system off | Test & replace capacitor |
| Fan starts if nudged | Weak capacitor | Shut off, don't run | Replace capacitor |
| Fan won't move at all, motor hot | Seized motor / open thermal | Shut off, let cool | Replace fan motor |
| Nothing runs outside | Contactor / no 24V / breaker | Reset breaker once | Test contactor & control circuit |
| Grinding or wobble | Bad bearings / damaged blade | Shut off | Replace motor and/or blade |
| Debris jamming blade | Obstruction | Clear with power off | Inspect blade/motor for damage |
| XV fan dead, board fault light | Inverter/control fault | Note any codes | Diagnose drive/board |

## Repair costs

Ranges are typical US installed prices; your area, model, and access affect the total.

- **Diagnostic / service call:** $80 – $175
- **Run capacitor replacement:** $150 – $350 (part is cheap; labor and trip drive the price)
- **Contactor replacement:** $150 – $350
- **Condenser fan motor (PSC, XR/XL):** $350 – $650+ installed
- **Fan blade replacement:** $100 – $250
- **XV variable-speed motor or inverter/control board:** $600 – $1,500+ (parts are model-specific and costly; get a firm quote)

If your unit is older (10–15+ years) and the compressor was run hot with no fan, ask the tech to verify compressor health before you sink money into a fan repair.

## Related codes

- **Not cooling** — *Trane AC Not Cooling: Causes, Fixes & Repair Costs* (a stopped outdoor fan is a frequent cause of no cooling).
- **Code 90 (2 blinks)** — *Trane Furnace Code 90 (2 Blinks): Causes & Costs* (furnace-side diagnostics if your Trane system also has heating faults).

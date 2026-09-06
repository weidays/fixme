---
title: "Trane AC Outdoor Fan Not Spinning: Causes, Fixes & Costs"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Likely a failed capacitor, motor, or contactor. Learn safe checks, diagnosis and repair costs of $0–$650."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor needs replacement"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series) with single-phase PSC or ECM condenser fan motors; exact parts vary by tonnage and board."
tags:
  - trane
  - air-conditioner
  - condenser-fan
  - capacitor
  - contactor
parts:
  - name: Run/dual capacitor (match microfarad rating)
    search: dual run capacitor 45+5 uf 440v hvac
  - name: Condenser fan motor (match HP, RPM, voltage)
    search: condenser fan motor 1/4 hp 825 rpm 208-230v
  - name: Contactor (single or double pole)
    search: hvac contactor 30 amp 24v coil
datePublished: 2026-09-06
dateModified: 2026-09-06
reviewedBy: ""
faq:
  - q: Can I run my AC if the outdoor fan won't spin?
    a: No. Without the condenser fan, the compressor overheats and can fail. Shut the system off at the thermostat and breaker until it is repaired.
  - q: Why does the fan start if I push it with a stick?
    a: A fan that spins only after a nudge almost always has a failed run capacitor. The capacitor no longer provides the torque to start the motor.
  - q: Is a stuck outdoor fan dangerous?
    a: It won't harm you directly, but running the compressor without airflow can burn out the compressor — a repair costing well over $1,500. Turn it off.
---

## What this code means

"Outdoor fan not spinning" isn't a numeric fault code — it's a physical symptom on your Trane condenser (the outdoor unit). When the system calls for cooling, the compressor and the outdoor fan motor should both energize. The fan pulls air across the outdoor coil to reject the heat your system pulled from inside your home.

If that fan blade sits still while the compressor hums (or while nothing runs at all), the unit cannot shed heat. Trane condensers don't display a lettered code for this on most residential models — you diagnose it by observation and electrical testing. On communicating **XV** systems, you may see a comfort-control or thermostat message about the outdoor unit, but the underlying cause is the same short list below.

**Do not keep running the system.** A compressor operating without condenser airflow overheats within minutes and can trip on internal overload or fail permanently.

## Common causes, ranked by probability

1. **Failed run/dual capacitor** — By far the most common cause. The capacitor gives the fan motor its starting torque. When it weakens, the fan won't start on its own (but may spin if nudged) or won't spin at all.
2. **Seized or burned-out condenser fan motor** — Worn bearings or a shorted winding. The motor may hum, get hot, smell burnt, or do nothing.
3. **Failed contactor** — The relay that sends power to the outdoor unit has pitted or stuck contacts, so the fan and compressor never get 240V.
4. **Tripped breaker or blown fuse / disconnect** — No power reaching the outdoor unit at all.
5. **Debris jamming the fan blade** — A stick, ice, or bent blade physically blocking rotation.
6. **Failed motor overload / thermal cutout** — The motor tripped on heat and hasn't reset.
7. **Control board or relay fault** — Less common; on some XL/XV boards a bad fan relay or a low-voltage wiring issue prevents the fan command. Behavior here varies by board revision.

## Safe checks before you call anyone

These are the only checks a homeowner should perform. **Never open the electrical panel on the condenser or touch the capacitor — it stores a lethal charge even with power off.**

- **Thermostat:** Set to COOL and lower the setpoint 3–5°F below room temperature to confirm a real call for cooling.
- **Air filter:** A filthy filter can cause the system to short-cycle or freeze. Replace if dirty.
- **Breaker:** Check your main panel for a tripped AC breaker. Reset it **once**. If it trips again, stop and call a pro.
- **Outdoor disconnect:** The pull-out box near the condenser should be fully seated. Don't probe inside it.
- **Visible debris:** With power off at the breaker, look through the top grille for leaves, sticks, or a bent blade. Clear only loose debris you can reach without removing panels.
- **Indoor vents:** Make sure supply registers are open and return grilles unobstructed.
- **Condensate:** A full drain pan or clogged line can trip a float switch and stop cooling — check for standing water.

If the fan still won't spin after a single breaker reset, shut the system off and call a technician. Do not repeatedly reset a tripping breaker.

## How a technician will diagnose it

A qualified HVAC tech will:

1. **Confirm the 24V call** reaches the outdoor contactor with a meter.
2. **Test the capacitor** with a capacitance meter against its rated microfarads (printed on the label). A reading outside tolerance is a definite failure.
3. **Check for line voltage** (208–240V) at the contactor and across the fan motor terminals.
4. **Inspect the contactor** for pitted or welded contacts and verify it pulls in.
5. **Test the fan motor** — winding resistance, amperage draw, and whether it spins freely by hand with power off.
6. **Check the motor's thermal overload** and wiring connections.
7. On communicating **XV** systems, **pull board fault history** and verify the fan relay command.

A good quote should name the specific failed part and its measured value — not just "the fan's bad."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums, won't start, spins if nudged | Failed run capacitor | Turn system off | Discharge & replace capacitor |
| Compressor runs, fan dead, no hum | Bad capacitor or motor | Turn system off | Test capacitor, then motor |
| Nothing runs outdoors, no hum | Contactor, breaker, or disconnect | Reset breaker once | Test contactor & incoming power |
| Fan blade physically stuck | Debris or bent blade | Clear loose debris, power off | Straighten/replace blade or motor |
| Burnt smell, hot motor | Seized/shorted fan motor | Shut off immediately | Replace condenser fan motor |
| Breaker trips instantly | Short in motor or wiring | Do not re-reset | Locate short, replace part |

## Repair costs

Honest US ranges, parts plus labor:

- **Run/dual capacitor:** $150–$400 replaced (part is cheap; you pay for the trip and diagnosis).
- **Contactor:** $150–$350.
- **Condenser fan motor:** $350–$650 depending on HP and whether it's a standard PSC or ECM motor.
- **Fan blade replacement:** $150–$300.
- **Breaker replacement (by electrician):** $150–$300.
- **Control-board fan relay (XL/XV):** $300–$700, varies widely by board.
- **Diagnostic / service call:** $80–$180, often credited toward the repair.

A capacitor and contactor are inexpensive parts, which is why many techs replace both together on an older unit — a reasonable, common practice.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — start here if cooling is weak but the fan does spin.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for indoor furnace/air-handler faults on the heating side.

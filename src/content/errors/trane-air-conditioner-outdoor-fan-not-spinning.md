---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a failed capacitor, motor, contactor or relay — with DIY checks and US repair costs."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor is replaced"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series) with single-phase PSC or ECM outdoor fan motors; exact wiring and capacitor ratings vary by model and tonnage."
tags:
  - trane
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: Dual run capacitor (match microfarad rating)
    search: trane dual run capacitor 45+5 uf 440v
  - name: Condenser fan motor (match HP, RPM, voltage)
    search: condenser fan motor 1/4 hp 825 rpm 230v
  - name: Multimeter
    search: digital multimeter with capacitance test
datePublished: 2026-06-15
dateModified: 2026-06-15
reviewedBy: ""
faq:
  - q: Can I run my Trane AC if the outdoor fan won't spin?
    a: No. Running the compressor without the outdoor fan moving causes the system to overheat and trip on high pressure, which can permanently damage the compressor. Shut it off.
  - q: Why does my Trane fan start if I push it with a stick?
    a: A fan that spins after a manual nudge almost always points to a failed start/run capacitor. The capacitor no longer supplies the torque needed to start the motor on its own.
  - q: Is a stuck outdoor fan a DIY fix?
    a: Some causes (debris, a tripped breaker) are DIY. But diagnosing capacitors, contactors and motors involves high voltage inside the unit and is rated pro for safety.
  - q: How much does a condenser fan motor cost on a Trane?
    a: Expect roughly $300 to $650 installed depending on motor HP, whether a new capacitor is needed, and local labor rates. The motor itself is often $120 to $300.
---

## What this code means

"Outdoor fan not spinning" is not a blink code — it's a physical symptom on your Trane condenser (the outdoor unit). The compressor may be humming or the unit may be silent, but the large fan on top of the cabinet isn't turning while the system is calling for cooling.

This matters because the outdoor fan pulls air across the condenser coil to release heat. Without it, refrigerant pressure climbs fast. Modern Trane units protect the compressor by tripping on a high-pressure switch or internal overload, so you'll usually notice short cooling cycles, warm air inside, or a unit that trips its breaker — followed by no cooling at all.

Behavior varies by model: older PSC-motor units (common in XR and XL series) rely on a run capacitor and tend to fail with the "hums but won't spin" symptom. Newer variable-speed and ECM-equipped units (some XV series) have electronics that may log a fault on the indoor board instead.

## Common causes, ranked by probability

1. **Failed run capacitor** — By far the most common cause. The capacitor gives the motor the jolt of torque it needs to start. When it weakens, the fan hums but won't spin, or spins only if you nudge it.
2. **Burned or stuck contactor** — The contactor is the relay that sends power to the fan and compressor. Pitted or stuck contacts can interrupt power to just the fan.
3. **Failed condenser fan motor** — Worn bearings or a burned winding. The motor may be hot, smell scorched, or refuse to turn even with a good capacitor.
4. **Debris or ice jamming the blade** — Sticks, leaves, or a bent blade physically blocking rotation. Less common but easy to spot.
5. **Tripped breaker or blown low-voltage fuse** — No power reaching the outdoor unit at all.
6. **Bad control wiring or relay on the board** — On ECM/variable-speed Trane units, a control fault may stop the fan signal.

## Safe checks before you call anyone

These are the only checks you should do yourself. **Turn the thermostat to OFF and shut the outdoor disconnect before touching the unit. Never open the electrical panel on the condenser — capacitors hold a dangerous charge even when power is off.**

- **Thermostat:** Confirm it's set to COOL and the temperature is below room temperature. Replace thermostat batteries if it's battery-powered.
- **Air filter:** A clogged indoor filter can cause icing and pressure trips that mimic a fan problem. Replace if dirty.
- **Breaker:** Check the AC breaker in your main panel. If it's tripped, reset it once. If it trips again immediately, stop and call a pro.
- **Visible debris:** With the unit powered OFF at the disconnect, look down through the fan grille for leaves, sticks, or obvious blockage you can clear by hand.
- **Indoor vents:** Make sure supply registers and return grilles aren't blocked.
- **Condensate:** Check that the indoor drain pan isn't full and the float switch (if equipped) isn't tripped, which can shut the system down.

If the fan still won't run after these checks, it's a high-voltage diagnosis — call a licensed technician.

## How a technician will diagnose it

A tech follows a logical sequence so you can sanity-check the quote:

1. **Verify the call for cooling** reaches the outdoor unit — measuring 24V at the contactor coil.
2. **Check incoming line voltage** at the disconnect and contactor (typically 230V single-phase).
3. **Discharge and test the capacitor** with a meter's capacitance setting, comparing the reading to the rating printed on the cap (e.g., 45+5 µF). This is the most common find.
4. **Inspect the contactor** for pitting, and confirm it pulls in and passes voltage to the fan.
5. **Test the fan motor** — checking windings for continuity and shorts, and verifying it spins freely by hand.
6. **On ECM/variable-speed units**, read any fault codes at the indoor control board and check the fan control signal.

A competent diagnosis takes 30–60 minutes. Be wary of a quote to replace the motor without first proving the capacitor is good — capacitors fail far more often and cost a fraction as much.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but won't spin; spins if nudged | Failed run capacitor | None — high voltage | Discharge and replace capacitor, verify µF rating |
| Fan dead, compressor also silent | Tripped breaker / blown fuse / contactor | Reset breaker once | Test power path, replace contactor or fuse |
| Fan won't turn even with good cap; smells burnt | Failed fan motor | None | Replace motor matched on HP/RPM/voltage, replace cap |
| Blade physically stuck | Debris or bent blade | Power off, clear debris | Straighten/replace blade, check bearings |
| Fan stops after a few minutes, unit short-cycles | High-pressure trip from another fault | Replace filter | Find root cause: charge, coil, motor |
| Fan never starts on a variable-speed unit | Control board / signal fault | None | Read board codes, test fan control circuit |

## Repair costs

Honest US ranges, parts plus labor:

- **Diagnostic / service call:** $80 – $180
- **Run capacitor replacement:** $150 – $400
- **Contactor replacement:** $150 – $350
- **Condenser fan motor replacement:** $300 – $650 (motor $120–$300, plus a new matched capacitor and labor)
- **Fan blade replacement:** $150 – $300
- **Control board (ECM/variable-speed models):** $400 – $900+

Costs vary by region, tonnage, and motor type. ECM and variable-speed parts on premium Trane XV units run higher than PSC parts on XR/XL units. Always get the capacitor tested first — replacing it may fix the problem for a fraction of a motor's cost.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — broader troubleshooting if the fan runs but you still get no cool air.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for furnace-side control faults on the indoor unit.

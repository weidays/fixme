---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning is usually a bad capacitor, motor or contactor. See causes, safe checks, and repair costs from $0 DIY to $650."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY – $650 if the condenser fan motor needs replacement"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series) and packaged units using a single-phase PSC condenser fan motor with a run capacitor and 24V contactor. Variable-speed XV20i/XV18 ECM fan boards diagnose differently."
tags:
  - trane
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: "Dual run capacitor (matched to nameplate µF/voltage)"
    search: "trane dual run capacitor 45+5 uf 440v"
  - name: "Condenser fan motor (matched HP/RPM/rotation)"
    search: "condenser fan motor 1/4 hp 1075 rpm 208-230v"
  - name: "Contactor (single or double pole, matched amperage)"
    search: "ac condenser contactor 30 amp 24v coil"
  - name: "Fin comb for straightening condenser coil"
    search: "air conditioner fin comb"
datePublished: 2026-06-16
dateModified: 2026-06-16
reviewedBy: ""
faq:
  - q: "Why is my Trane outdoor fan not spinning but the compressor hums?"
    a: "A humming compressor with a dead fan almost always points to a failed dual run capacitor or a seized fan motor. Shut the system off quickly so the compressor does not overheat, then call a technician."
  - q: "Can I push the fan blade with a stick to start it?"
    a: "It may spin once nudged if the run capacitor is weak, which confirms a capacitor problem. Do not make this a habit — a starting fan still needs a proper capacitor or motor repair to avoid compressor damage."
  - q: "Is a non-spinning outdoor fan dangerous?"
    a: "It can be. Without airflow over the coil, the compressor overheats and can fail, which is a costly repair. Turn the AC off at the thermostat and breaker until it is fixed to protect the compressor."
  - q: "How much does it cost to fix a Trane condenser fan that won't spin?"
    a: "A capacitor runs about $150 to $300 installed, a contactor $150 to $350, and a full fan motor $350 to $650 depending on the model and labor rates in your area."
---

## What this code means

"Outdoor fan not spinning" isn't a blink code — it's a symptom. On most Trane air conditioners the outdoor unit (condenser) houses a single fan that pulls air across the coil to dump heat outside. When the compressor is running but that top fan blade is dead still, heat has nowhere to go.

This is a **pro-level** problem for two reasons: the parts involved store an electrical charge that can shock you, and a running compressor without fan airflow overheats fast. Trane does not flash a dedicated "fan" fault on standard single-stage units — you diagnose it by observation and meter readings. On variable-speed **XV20i / XV18** systems, the ECM fan is driven by a control board that *can* log communication or motor faults, so those models behave differently.

## Common causes, ranked by probability

1. **Failed dual run capacitor** — by far the most common cause. The capacitor gives the fan motor (and compressor) the jolt they need to start and run. When the fan side fails, the blade sits still or spins only if nudged.
2. **Seized or burned-out condenser fan motor** — worn bearings, water intrusion, or age cause the motor to lock up or open internally.
3. **Stuck or pitted contactor** — the relay that sends power to the outdoor unit. Burned or stuck contacts can starve the fan circuit.
4. **Tripped internal motor overload** — an overheated motor (often from clogged coil fins or debris) shuts itself off and may or may not reset.
5. **Debris jamming the fan blade** — sticks, ice, a bird, or bent blades physically stopping rotation.
6. **Loose, corroded, or chewed wiring** at the motor, capacitor, or contactor — rodents and weather take a toll.
7. **Low-voltage / control board fault** — less common; on XV20i/XV18 a board or comms issue can disable the ECM fan.

## Safe checks before you call anyone

These are the only steps a homeowner should do. Anything inside the condenser disconnect involves stored electrical charge — leave that to a pro.

- **Thermostat:** Confirm it's set to COOL and the temperature is below room temperature. Replace dead batteries if it's battery-powered.
- **Air filter:** A filthy filter chokes airflow and can cause shutdowns. Replace if dirty.
- **Breaker:** Check both the indoor and outdoor breakers. Reset one tripped breaker **once**. If it trips again, stop and call a pro.
- **Disconnect switch:** The pull-out box on the wall near the condenser should be fully seated. If someone serviced it recently, confirm it's pushed in.
- **Visible debris:** With the system **off at the breaker**, look (don't reach) for leaves, sticks, or a clearly bent blade. Clear loose surface debris by hand only after power is off.
- **Indoor vents:** Make sure supply registers aren't blocked or closed.
- **Condensate:** A full condensate pan with a tripped float switch can stop the system; check that the drain isn't clogged.

Do **not** repeatedly nudge the fan to keep cooling, open the condenser electrical panel, or run the system with the compressor humming and fan dead — that risks the compressor.

## How a technician will diagnose it

A good tech follows a logical path so you can sanity-check the quote:

1. **Confirms power** at the disconnect and verifies 24V is reaching the contactor coil.
2. **Discharges and tests the run capacitor** with a meter — comparing measured microfarads (µF) to the nameplate rating. A reading far below spec confirms a bad cap.
3. **Tests the contactor** for pulled-in contacts and proper voltage on the load side.
4. **Checks the fan motor** — windings for continuity, resistance against spec, and whether the shaft turns freely by hand (power off). A seized or open motor needs replacement.
5. **Inspects wiring** for burned terminals, corrosion, or rodent damage.
6. On **XV20i/XV18**, scans the control board for logged faults and verifies the ECM motor's communication.

Expect a capacitor or contactor diagnosis in well under an hour. A motor swap takes longer.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan dead still | Failed run capacitor | Turn system off; don't nudge blade repeatedly | Test µF, replace dual run capacitor |
| Fan spins if pushed, then stops | Weak capacitor | Turn off, call pro | Confirm and replace capacitor |
| No hum, no fan, no compressor | Stuck contactor or no power | Reset breaker once; check disconnect | Test contactor, replace if pitted/stuck |
| Fan ran, now off; unit hot | Motor overload tripped from dirty coil | Power off; clear surface debris | Clean coil, test motor, replace if failed |
| Blade physically won't turn | Seized motor or debris jam | Power off, look for obvious debris | Free debris or replace fan motor |
| Burning smell near unit | Burned motor or wiring | Shut off at breaker immediately | Replace motor/wiring, inspect circuit |

## Repair costs

Honest US ranges, parts and labor combined:

- **Dual run capacitor:** $150 – $300
- **Contactor:** $150 – $350
- **Condenser fan motor:** $350 – $650 (more for proprietary or ECM motors on variable-speed units)
- **Wiring repair / rodent damage:** $100 – $300
- **Coil cleaning (if overheating caused shutdown):** $100 – $250
- **Diagnostic / service call:** $80 – $180 (often credited toward the repair)

Variable-speed **XV20i / XV18** ECM fan assemblies and their boards cost considerably more — sometimes $600–$1,200+ — because the motor and control are integrated. Get the model number to your tech for an accurate quote.

## Related codes

- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — heating-side fault; unrelated to the outdoor fan but useful if your Trane furnace flashes a 2-blink code on the same system.

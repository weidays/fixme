---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane AC outdoor fan not spinning? Causes include a bad capacitor, seized motor, or contactor, plus fixes and $0 DIY to $650+ repair costs."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650+ for a new condenser fan motor"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series). Variable-speed XV units use ECM fan motors and communicating boards; single-stage XR/XL units use a standard PSC motor with a run capacitor and contactor. Diagnosis differs by motor type."
tags:
  - outdoor-fan
  - condenser
  - capacitor
  - contactor
  - fan-motor
parts:
  - name: Dual run capacitor
    search: dual run capacitor 45 5 mfd 440v
  - name: Condenser fan motor
    search: condenser fan motor 1/4 hp 208-230v
  - name: Contactor 30A 2-pole
    search: 2 pole 30 amp contactor 24v coil
datePublished: 2026-07-04
dateModified: 2026-07-04
reviewedBy: ""
faq:
  - q: Can I run my Trane AC if the outdoor fan won't spin?
    a: No. The outdoor fan cools the condenser coil. Without it, high-side pressure and compressor temperature climb fast, which can trip the safety or damage the compressor. Shut the system off at the thermostat.
  - q: Why does the compressor hum but the outdoor fan not turn?
    a: That is the classic sign of a failed run capacitor. The capacitor gives the fan motor the phase shift it needs to start. A weak or dead capacitor lets the compressor try to run while the fan stays still.
  - q: Can I spin the outdoor fan with a stick to start it?
    a: Only a technician should test this with power removed and proper tools. If a nudge starts the fan, the capacitor or motor is failing and still needs replacement. Do not reach into an energized unit.
  - q: How much does a Trane condenser fan motor cost to replace?
    a: Expect roughly $300 to $650 installed, depending on horsepower, whether it is a standard PSC or an ECM variable-speed motor, and local labor rates. The capacitor is usually replaced at the same time.
---

## What this code means

"Outdoor fan not spinning" is not a Trane blink or number code — it is a physical symptom you can see and hear at the outdoor condenser unit. The compressor may be humming, the air handler indoors may be running, but the large fan on top of the outdoor unit sits still (or spins slowly, then stops).

The outdoor fan's job is to pull air through the condenser coil to reject the heat your system pulls out of the house. When it stops, the refrigerant on the high-pressure side can't cool down. Within minutes the compressor gets hot and the unit's internal overload or high-pressure switch trips to protect itself. That's why this is a **pro-level** problem: running the system this way risks a compressor failure that dwarfs the cost of the actual fix.

On single-stage Trane XR and XL units, the fan is a standard PSC motor driven through a run capacitor and contactor. On variable-speed XV units, the fan is an ECM motor controlled by the communicating board — behavior and diagnosis differ, so we call that out where it matters.

## Common causes, ranked by probability

1. **Failed run (or dual run) capacitor** — By far the most common cause on XR/XL units. A weak capacitor can't give the fan the jolt it needs to start, so the compressor hums while the fan sits still. Capacitors fail with age, heat, and power surges.
2. **Seized or burned-out condenser fan motor** — Bearings dry out and lock up, or windings burn open. If the motor is hot, smells scorched, or won't turn freely by hand (power off), it's the likely culprit.
3. **Failed contactor** — The contactor is the relay that sends power to the fan and compressor. Pitted or stuck contacts can interrupt power to the fan motor.
4. **Debris jamming the fan blade** — Sticks, leaves, or a dislodged bird's nest can physically block the blade from turning.
5. **Loss of 24V control signal or a tripped safety** — A bad thermostat wire, blown low-voltage fuse, or a tripped high-pressure switch can prevent the outdoor unit from getting the call to run.
6. **ECM motor or control board fault (XV variable-speed units)** — On communicating Trane systems, the fan is driven electronically. A failed ECM module or a board fault can stop the fan; these are diagnosed differently and are not a capacitor issue.
7. **Open or damaged wiring** — Rodent-chewed or heat-degraded fan motor leads.

## Safe checks before you call anyone

You can do these safely without opening the electrical panel of the outdoor unit:

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature. If it's a battery model, replace the batteries.
- **Air filter:** A clogged filter can cause the system to short-cycle or trip on high pressure. Replace it if dirty.
- **Breaker:** Check both the indoor and outdoor breakers. Trane condensers usually have a dedicated 240V breaker and often a pull-out disconnect near the outdoor unit. If a breaker is tripped, reset it once. If it trips again, stop and call a pro.
- **Visible debris:** With the system OFF at the breaker, look through the top grille for leaves, sticks, or a nest jamming the fan. Do not reach inside an energized unit.
- **Supply vents:** Make sure indoor vents aren't all closed, which can raise pressure.
- **Condensate:** A full condensate pan can trip a float switch and shut the system down; check that the pan and drain are clear.

Do **not** try to spin the fan blade to "start" it while the unit is powered, and never bypass a high-pressure switch or repeatedly reset a unit that keeps tripping.

## How a technician will diagnose it

A good tech will follow a logical path so you can sanity-check the quote:

1. **Confirm the call for cooling** and verify 24V is present at the contactor coil.
2. **Cut power and discharge the capacitor** — a mandatory safety step before touching anything.
3. **Test the capacitor** with a meter against its rated microfarads (µF). A dual capacitor has separate FAN and HERM readings; a fan section reading well below spec confirms it.
4. **Check the contactor** for pitted contacts and proper pull-in.
5. **Test the fan motor** — check windings for continuity/resistance, spin the blade by hand for smooth rotation, and feel for a seized bearing or burned smell.
6. **On XV variable-speed units,** they'll pull fault data from the communicating thermostat/board and check the ECM motor's power and control signals rather than a capacitor.
7. **Verify system pressures** after the repair to confirm the compressor wasn't damaged by running hot.

A tech replacing a capacitor should always confirm *why* it failed — a failing motor draws high current and can kill a fresh capacitor quickly.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan doesn't spin | Failed run capacitor | Shut off system; don't run it | Test & replace capacitor, verify µF |
| Fan won't turn by hand (power off), motor hot/smells burnt | Seized/burned fan motor | Shut off; note the smell for the tech | Replace condenser fan motor |
| Nothing runs outdoors, indoor blower fine | Failed contactor or lost 24V | Check breaker/disconnect once | Test 24V, replace contactor |
| Fan blade visibly jammed | Debris in unit | Power off, clear visible debris | Inspect blade & motor for damage |
| Unit trips breaker on start | Shorted motor or wiring | Reset once; if it trips again, stop | Isolate short, replace faulted part |
| XV unit fan dead, thermostat shows a fault | ECM motor or board fault | Note the fault message | Diagnose ECM/board per Trane service data |

## Repair costs

Ranges are typical US installed prices; your area, unit access, and motor type vary the total.

- **Diagnostic / service call:** $85 – $175
- **Run or dual run capacitor:** $150 – $350 installed (part is cheap; you're paying for the diagnosis and labor)
- **Contactor:** $150 – $300 installed
- **Standard PSC condenser fan motor:** $300 – $550 installed
- **ECM / variable-speed fan motor (XV units):** $450 – $650+ installed
- **Control board (communicating XV):** $400 – $800+ installed
- **Wiring repair:** $100 – $300 depending on extent

If the compressor was run hard with the fan stalled and is now damaged, repair costs jump dramatically — often into four figures — which is exactly why you shut the system down at the first sign of a still fan.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — if the fan spins but the house still won't cool, start there.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for furnace-side ignition and control faults on the heating equipment.

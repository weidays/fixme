---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a bad capacitor, motor, contactor or control board. See safe checks, diagnosis and repair costs."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor is replaced"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series and 4TTx models). Variable-speed XV units use ECM fan motors and a comm board, so parts and diagnosis differ from single-stage PSC-motor units."
tags:
  - trane
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: "Dual run capacitor (45/5 MFD, 440V typical)"
    search: "trane dual run capacitor 45 5 mfd 440v"
  - name: "Condenser fan motor (1/4 HP, 208-230V)"
    search: "condenser fan motor 1/4 hp 208-230v"
  - name: "Contactor (single-pole 30A, 24V coil)"
    search: "hvac contactor single pole 30 amp 24v coil"
datePublished: 2026-07-08
dateModified: 2026-07-08
reviewedBy: ""
faq:
  - q: "Can I push the outdoor fan to start it with a stick?"
    a: "Only a technician should do this as a diagnostic test with power off first, then restored. If a nudge starts the fan, the run capacitor is almost always failing and needs replacement."
  - q: "Why is my Trane compressor humming but the fan won't turn?"
    a: "A humming outdoor unit with a dead fan usually points to a failed run capacitor or a seized fan motor. Shut the system off promptly so the compressor doesn't overheat and lock out."
  - q: "Is it safe to run my AC if the outdoor fan isn't spinning?"
    a: "No. Without the fan, the compressor overheats fast and can be permanently damaged. Turn the system off at the thermostat and breaker until it's repaired."
  - q: "How much does a Trane condenser fan motor cost to replace?"
    a: "Expect roughly $300 to $650 installed for a standard PSC motor. Variable-speed ECM motors on XV units cost more, often $500 to $900 with parts and labor."
---

## What this code means

"Outdoor fan not spinning" isn't a blink-code fault — it's a symptom you can see and hear at the condenser (the outdoor unit). When your Trane AC is calling for cooling, the compressor and the outdoor fan should both run. If the compressor hums or runs but the fan blade sits still, the unit can't reject heat, pressures spike, and the compressor will overheat and shut down on its internal overload — or fail entirely.

On single-stage Trane units (XR13, XR14, 4TTR series) the fan is driven by a PSC motor and a shared dual run capacitor. On variable-speed XV units the fan is an ECM motor controlled by a communicating board, so the failure modes and diagnosis differ — we note where that matters below.

This is a **pro-level** repair. The safe checks are limited, and everything past them involves a charged capacitor and live 230V.

## Common causes, ranked by probability

1. **Failed run capacitor** — By far the most common. The capacitor gives the fan motor its starting torque. When it weakens, the fan hums but won't spin, or spins only if nudged. On dual capacitors, the fan side can fail while the compressor side still works.
2. **Seized or burned-out condenser fan motor** — Bearings dry out, the motor overheats, or windings fail. Often smells burnt and won't turn freely by hand.
3. **Failed contactor** — Pitted or stuck contacts interrupt power to the fan (and compressor). Sometimes you'll hear it chatter or not pull in at all.
4. **Debris or ice blocking the blade** — Sticks, a bird's nest, or a bent blade physically jamming the fan.
5. **Tripped compressor/fan overload from a prior overheat** — The unit may have shut the fan circuit down to protect itself.
6. **Control board or relay fault** — More likely on XV/communicating units, where the board drives the ECM fan directly. On single-stage units, board-level fan faults are rarer.
7. **Loose or corroded wiring** — A disconnected fan lead or corroded terminal at the capacitor or motor.

## Safe checks before you call anyone

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature. If it's battery-powered, replace the batteries.
- **Air filter:** A clogged indoor filter can trigger safety shutdowns. Replace if dirty.
- **Breakers:** Check both the indoor furnace/air-handler breaker and the outdoor disconnect. Reset a tripped breaker **once**. If it trips again, stop and call a pro — repeated resets on a faulting unit are unsafe.
- **Indoor vents:** Make sure supply and return vents aren't blocked.
- **Look (don't touch) at the outdoor unit:** With the system off, look through the top grille for obvious debris — leaves, sticks, a nest — jamming the blade. Clear visible debris only with the disconnect pulled.
- **Condensate:** A full drain pan or clogged condensate line can shut some systems down; check for standing water at the indoor unit.

**Do not** open the electrical panel on the condenser, touch the capacitor, or spin the fan by hand while power is on. Capacitors hold a dangerous charge even after power is off.

## How a technician will diagnose it

A qualified tech will:

1. **Kill power** at the outdoor disconnect and confirm it's dead.
2. **Discharge and test the capacitor** with a multimeter, comparing the reading to the rated MFD on the label. A low or "OL" fan-side reading confirms a bad capacitor.
3. **Check the fan motor** — spin the blade by hand for stiffness or grinding, test winding resistance, and check for a shorted or open winding.
4. **Inspect the contactor** for pitted contacts and verify 24V at the coil and line voltage across the contacts.
5. **Verify wiring** at the capacitor, motor, and contactor for loose or burnt connections.
6. **On XV/communicating units:** read fault data from the board or thermostat, confirm the ECM motor is receiving its control signal, and rule out a board failure before condemning the motor.
7. **Restore power and confirm** the fan starts and pulls proper amperage.

A quote that jumps straight to a new motor without testing the capacitor first should be questioned — the capacitor is cheap and the most common culprit.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan won't turn | Failed run capacitor | Turn system off; don't nudge the blade | Test/replace dual run capacitor |
| Fan starts if spun by hand | Weak capacitor | Shut down; do not run it | Confirm MFD reading, replace capacitor |
| Fan won't turn, burnt smell | Burned-out fan motor | Shut off at breaker | Replace condenser fan motor |
| Nothing runs outdoors, no hum | Failed contactor or lost power | Check disconnect and breaker once | Test 24V coil, replace contactor |
| Blade physically jammed | Debris or bent blade | Pull disconnect, clear visible debris | Straighten/replace blade, check bearings |
| Unit shut off after running hot | Overload trip / prior overheat | Leave off, call pro | Diagnose root cause before restart |
| XV unit fan dead, error on stat | ECM motor or comm board fault | Note the fault code | Read board data, test motor vs. board |

## Repair costs

Ranges are typical US installed prices; your area and unit age will vary.

- **Run capacitor replacement:** $150–$400
- **Contactor replacement:** $150–$350
- **Condenser fan motor (PSC, single-stage):** $300–$650
- **ECM fan motor (variable-speed XV):** $500–$900
- **Fan blade replacement:** $150–$300
- **Control/communicating board (XV units):** $400–$900
- **Diagnostic/service call:** $75–$200 (often credited toward the repair)

If your Trane is over ~12–15 years old and needs a motor plus other parts, ask the tech whether repair still makes financial sense versus replacement.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — if the fan spins but you're still getting warm air, start here.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for indoor furnace/air-handler faults on the heating side.

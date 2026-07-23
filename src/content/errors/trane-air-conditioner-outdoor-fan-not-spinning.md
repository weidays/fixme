---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan won't spin: bad capacitor, motor, contactor or control board. DIY checks plus repair costs from $0 to $650."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY – $650 if the condenser fan motor needs replacement"
appliesTo: "Most Trane split-system condensers (XR13, XR14, XR16, XL16i, XV18, XV20i) with a single-speed or ECM outdoor fan; ECM/variable-speed units on the newer XV boards behave differently and report faults via the indoor board."
tags:
  - trane
  - air-conditioner
  - condenser-fan
  - capacitor
  - no-cooling
parts:
  - name: "Dual run capacitor (fan + compressor)"
    search: "trane dual run capacitor 45+5 uf 440v"
  - name: "Condenser fan motor"
    search: "trane condenser fan motor 1/4 hp 208-230v"
  - name: "Contactor (1 or 2 pole)"
    search: "hvac 30 amp 2 pole contactor 24v coil"
  - name: "Fan blade"
    search: "condenser fan blade replacement universal"
datePublished: 2026-07-23
dateModified: 2026-07-23
reviewedBy: ""
faq:
  - q: "Why is my Trane compressor humming but the outdoor fan won't spin?"
    a: "That is the classic sign of a failed run capacitor. The compressor gets power but the fan motor can't start, so it hums and may soon overheat and lock out. Shut it off and call a tech."
  - q: "Can I push the outdoor fan with a stick to get it going?"
    a: "Don't. A blade that only spins when nudged confirms a dead capacitor or weak motor, but reaching into a live unit is dangerous and it will stall again. Turn the unit off and get it diagnosed."
  - q: "Is a stuck outdoor fan an emergency?"
    a: "Not a safety emergency, but keep the system OFF. Running the compressor with no fan cooling can overheat it and cause a costly failure, so shut it down until repaired."
---

## What this code means

Trane air conditioners don't usually flash a numbered code for this problem — "outdoor fan not spinning" is a **symptom** you observe at the condenser (the outdoor unit). When you call for cooling, the compressor and the outdoor fan motor should start together. If the compressor runs (you hear a hum or buzz) but the top fan blade sits still, the unit can't reject heat and cooling will be weak or nonexistent, often followed by a compressor overload trip.

On newer variable-speed models (XV18, XV20i) the outdoor ECM motor and control board can log faults that show up on the **indoor** communicating thermostat or air handler board. On older single-speed units (XR/XL series), there's no code at all — just a fan that won't turn.

This is a **pro-level** repair. The most common causes involve high-voltage capacitors and motors that store a dangerous charge even when power is off.

## Common causes, ranked by probability

1. **Failed dual run capacitor** — By far the most common cause. The capacitor gives the fan motor its starting "kick." When it fails, the compressor may hum but the fan won't start.
2. **Burned-out condenser fan motor** — Bearings seize or windings fail. The motor may be hot, silent, or hum without turning.
3. **Failed contactor** — The relay that sends power to the outdoor unit doesn't pull in, so nothing (fan or compressor) gets high voltage.
4. **Obstructed or jammed fan blade** — Debris, ice, or a warped/bent blade physically blocks rotation.
5. **Bad capacitor wiring or a loose connection** — Corroded terminals or a slipped-off wire on the fan lead.
6. **Control board or ECM fault (variable-speed models)** — On XV-series units the board or module driving the ECM outdoor fan can fail.
7. **Tripped or failed compressor/fan overload** — Overheating protection has opened.

## Safe checks before you call anyone

Do these with the system in **cooling mode**, and stop at anything that requires opening the outdoor unit:

- **Thermostat:** Set it to COOL and lower the setpoint a few degrees so the system actually calls for cooling. Replace dead batteries if it's battery-powered.
- **Breakers:** Check both the indoor air-handler breaker and the **outdoor disconnect / condenser breaker** in your panel. Reset a tripped breaker once. If it trips again, stop and call a pro.
- **Air filter:** A clogged filter won't stop the outdoor fan, but replacing a dirty one is good hygiene and rules out airflow issues while you're troubleshooting.
- **Outdoor unit clearance:** Look (don't reach in) for obvious debris — leaves, a stick, or a bird's nest — around the top fan grille. Remove anything only after the disconnect is pulled and the unit is fully off.
- **Condensate & drain:** Not related to the outdoor fan, but a full drain-pan safety switch can shut the whole system down. Check that the pan isn't overflowing.
- **Listen:** With the system calling for cooling, is the compressor humming while the fan is still? Note this — it points strongly to a capacitor and helps the tech.

**Do not** open the condenser electrical panel, touch the capacitor, or spin the fan by hand on a live unit. Capacitors hold a lethal charge.

## How a technician will diagnose it

A competent Trane tech will typically:

1. **Pull the disconnect** and confirm the unit is dead before opening the access panel.
2. **Safely discharge and test the capacitor** with a multimeter, comparing microfarad (µF) readings against the label rating — a weak or open cap is the usual culprit.
3. **Check the contactor** — inspect for pitted/welded contacts and verify the 24V coil pulls it in.
4. **Test the fan motor** for continuity, correct resistance, and grounded windings; spin-test the blade for seized bearings.
5. **Verify incoming voltage** (208/230V) at the contactor and the 24V control signal from the indoor board.
6. **On XV/variable-speed units**, read fault data at the communicating board/thermostat and test the ECM module.
7. **Inspect the blade and shaft** for physical damage or obstruction.

A good quote will name the specific failed part and its measured value — not just "the fan is bad."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan won't spin | Failed run capacitor | Turn system off; note the hum | Discharge & replace capacitor |
| Fan spins if nudged, then stalls | Weak capacitor or worn motor | Turn off; don't nudge repeatedly | Test µF; replace cap or motor |
| Nothing runs outdoors, indoor blower OK | Failed contactor or tripped disconnect | Reset breaker once; check disconnect | Test/replace contactor, check 24V |
| Fan motor hot, silent, no movement | Seized/burned fan motor | Turn off to prevent overheating | Replace condenser fan motor |
| Visible debris jamming blade | Obstruction | Remove debris only after power off | Clear jam; inspect blade & bearings |
| Bent or wobbling blade | Damaged fan blade | Turn off | Replace fan blade, balance |
| Fault on communicating thermostat | ECM/board fault (XV models) | Note the fault message | Read fault data, test ECM/board |

## Repair costs

Ranges are typical US installed prices including parts and labor. Your area, model, and after-hours rates vary.

- **Diagnostic / service call:** $80 – $180
- **Dual run capacitor:** $150 – $350 installed (part is cheap; you're paying for expertise and safe handling)
- **Contactor:** $150 – $350 installed
- **Condenser fan motor:** $300 – $650 installed, depending on horsepower and whether it's a specialty ECM motor
- **Fan blade:** $100 – $250 installed
- **Control board / ECM module (XV variable-speed):** $400 – $900+ installed
- **DIY capacitor replacement:** ~$15 – $40 for the part — but only if you're trained to safely discharge it. For most homeowners this is a **do-not-DIY** repair.

If your unit is over 12–15 years old and the fan motor or compressor is failing, ask the tech whether repair or replacement makes more financial sense.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — a still or failed outdoor fan is a leading reason a Trane AC blows warm air; start there if cooling is your main complaint.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for furnace-side diagnostics on the indoor unit of your system.

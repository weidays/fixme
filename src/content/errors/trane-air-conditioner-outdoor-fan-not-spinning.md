---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane AC outdoor fan won't spin? Common causes include a bad capacitor, motor or contactor. See safe checks, diagnosis and repair costs."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor is replaced"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series). Variable-speed units (XV18/XV20i) use ECM fan motors and control boards that diagnose differently than fixed-speed PSC motors."
tags:
  - outdoor-fan
  - condenser
  - capacitor
  - contactor
  - fan-motor
parts:
  - name: "Dual run capacitor (match microfarad rating)"
    search: "hvac dual run capacitor 45+5 uf 440v"
  - name: "Condenser fan motor"
    search: "trane condenser fan motor 1/4 hp 208-230v"
  - name: "Contactor (single or double pole)"
    search: "hvac condenser contactor 30 amp 24v coil"
datePublished: 2026-07-20
dateModified: 2026-07-20
reviewedBy: ""
faq:
  - q: "Can I run my Trane AC if the outdoor fan isn't spinning?"
    a: "No. Running the compressor without the condenser fan lets pressures and temperatures spike, which can overheat and permanently damage the compressor. Shut the system off at the thermostat."
  - q: "Why does the fan spin if I push it with a stick?"
    a: "That is a classic sign of a failed run capacitor. The motor needs the capacitor's starting torque to begin turning. Never reach into a live unit — this is a technician test, not a fix."
  - q: "Is a stuck outdoor fan an emergency?"
    a: "It's not a safety emergency like a gas leak, but it is urgent. Keep the system off to protect the compressor and schedule a repair, ideally the same day in hot weather."
---

## What this code means

"Outdoor fan not spinning" isn't a numeric fault code — it's a symptom you can see and hear. On a Trane split-system air conditioner, the outdoor unit (the condenser) contains a fan that pulls air across the coil to reject heat. When you turn on cooling, the compressor may hum and the outdoor unit may buzz, but the fan blade on top sits still.

This matters because the condenser fan is what keeps the compressor cool. Without airflow, head pressure and refrigerant temperature climb fast, and the compressor's internal overload will trip — or, worse, the compressor can be permanently damaged. That's why this is a **pro-level** problem: even when the parts are cheap, running the system in this state is risky.

On most Trane units (XR and XL series) the fan is a fixed-speed PSC motor driven by a run capacitor. On variable-speed premium units (XV18, XV20i) the fan is an ECM motor commanded by a control board, so a stuck fan there is diagnosed through the board and communications rather than a simple capacitor test.

## Common causes, ranked by probability

1. **Failed run capacitor** — By far the most common cause on fixed-speed Trane condensers. The dual capacitor serves the fan and compressor; when the fan section weakens, the motor can't start. The blade often spins freely if nudged.
2. **Seized or burned-out fan motor** — Bearings fail, or windings burn out. The motor may hum, get hot, or do nothing at all. Sometimes accompanied by a burnt smell.
3. **Failed contactor** — The relay that sends power to the outdoor unit may have pitted or stuck contacts, or a dead 24V coil, so power never reaches the fan.
4. **Debris or ice jamming the blade** — A stick, leaves, or a bent blade physically blocking rotation. In some cases a badly iced-up system stalls the fan.
5. **Tripped compressor/high-pressure lockout** — If the unit already overheated, protective controls may cut the outdoor unit until it cools.
6. **Control board or ECM fault (variable-speed units)** — On XV-series units, a bad board, wiring fault, or motor module can stop the ECM fan without any capacitor involved.
7. **Loss of 24V control signal** — A wiring problem, blown low-voltage fuse, or thermostat issue prevents the outdoor unit from being called on at all.

## Safe checks before you call anyone

These are the only checks a homeowner should do. Do **not** open the electrical panel on the condenser or touch the capacitor — capacitors store a dangerous charge even with power off.

- **Thermostat**: Confirm it's set to COOL and the setpoint is below room temperature. Replace thermostat batteries if it uses them.
- **Air filter**: A clogged filter can cause icing and system shutdowns. Replace it if dirty.
- **Breakers**: Check both the indoor furnace/air-handler breaker and the outdoor AC breaker. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Outdoor disconnect**: Near the condenser there's usually a pull-out disconnect box. Confirm it's fully seated.
- **Visible debris**: With the system OFF at the thermostat and breaker, look through the top grille for leaves, sticks, or a bird's nest. Do not reach inside a powered unit.
- **Condensate**: A full condensate pan/float switch can shut the whole system down; check that the drain isn't backed up.
- **Ice**: If you see ice on the refrigerant lines or coil, turn the system off and let it thaw for a few hours before calling.

If the fan still won't spin after these checks, shut the system off and call a licensed HVAC technician.

## How a technician will diagnose it

A good tech follows a logical order — this is what a fair quote reflects:

1. **Verify the call**: Confirms 24V is reaching the contactor when cooling is demanded.
2. **Check the contactor**: Tests the coil and measures voltage across the contacts to see if line voltage reaches the fan and compressor.
3. **Test the capacitor**: Discharges it safely, then measures microfarads against the rated value stamped on the can. A fan section reading far below spec confirms a bad capacitor.
4. **Test the fan motor**: Checks windings for continuity and resistance, spins the blade for bearing drag, and confirms the motor gets voltage but won't run.
5. **Check pressures**: Confirms the system isn't in a high-pressure lockout from another problem.
6. **On variable-speed units**: Reads control board fault codes and checks ECM communications and the motor module.

Ask which specific part tested bad. A tech who replaces the motor without mentioning the capacitor test is skipping the cheapest likely fix.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan sits still, spins if nudged | Failed run capacitor | Turn system off; don't touch capacitor | Discharge & replace capacitor, verify uF |
| Fan hums or is hot but won't turn | Seized/burned fan motor | Shut off to protect motor | Replace condenser fan motor |
| Outdoor unit totally silent on cooling call | Contactor or 24V signal fault | Check breaker & disconnect | Test/replace contactor, trace 24V |
| Blade physically stuck | Debris or bent blade | Power off, remove visible debris via grille | Straighten/replace blade, clear jam |
| Fan quits after running a while | High-pressure/overheat lockout | Turn off, check filter & clear coil area | Find root cause: airflow, charge, coil |
| Ice on lines, fan behaves oddly | Low charge or airflow issue | Turn off, let thaw | Diagnose refrigerant/airflow, repair |
| XV-series fan dead, board shows fault | ECM/board fault | Note any error code shown | Read codes, replace board/motor module |

## Repair costs

Ranges are typical US installed prices including parts and labor. Your area and unit tier affect the total.

- **Run capacitor replacement**: $150 – $350. The part is cheap ($15–$40); most of the cost is the service call and labor.
- **Contactor replacement**: $150 – $350.
- **Condenser fan motor (fixed-speed PSC)**: $300 – $650, depending on horsepower and access.
- **ECM fan motor / module (variable-speed XV units)**: $500 – $1,200+; these parts are far more expensive.
- **Control board (variable-speed)**: $500 – $900.
- **Blade or minor debris clearing**: $100 – $250.
- **Diagnostic/service call**: $80 – $180, often credited toward the repair.

DIY capacitor replacement is possible for experienced homeowners but involves lethal stored voltage; most people should not attempt it. That's why we list the DIY floor as $0 (a reset that turns out to be all it needed) up to a full motor replacement.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — a stopped outdoor fan is one reason a Trane AC won't cool; this covers the broader no-cooling picture including charge and airflow.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — related Trane control-board fault on the heating side, useful if your issue is on the indoor unit rather than the condenser.

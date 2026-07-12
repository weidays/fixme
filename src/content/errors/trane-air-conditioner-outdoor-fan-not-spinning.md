---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a failed capacitor, motor, contactor or control board. Fixes and US repair costs, $0 DIY to $650."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor is replaced"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series) and packaged units using a single-phase PSC or ECM condenser fan motor; behavior varies by motor type and whether the unit has a variable-speed board."
tags:
  - trane
  - air-conditioner
  - outdoor-unit
  - condenser-fan
  - capacitor
parts:
  - name: "Dual run capacitor (match uF/voltage to unit)"
    search: "dual run capacitor 45+5 uf 440v"
  - name: "Condenser fan motor (match HP/RPM/voltage)"
    search: "condenser fan motor 1/4 hp 208-230v"
  - name: "Contactor (single or double pole)"
    search: "ac contactor 30 amp 2 pole 24v coil"
  - name: "Non-contact voltage tester"
    search: "non-contact voltage tester"
datePublished: 2026-07-12
dateModified: 2026-07-12
reviewedBy: ""
faq:
  - q: "Can I push the outdoor fan to start it and keep running the AC?"
    a: "No. If a fan needs a push to start, the run capacitor or motor is failing. Running the compressor without proper condenser airflow can overheat and destroy it — shut the system off and call a pro."
  - q: "Why is the compressor humming but the outdoor fan isn't spinning?"
    a: "A humming outdoor unit with a stationary fan usually points to a failed run capacitor or a seized fan motor. Turn the system off promptly to avoid compressor overheating and lockout."
  - q: "Is a stuck outdoor fan an emergency?"
    a: "It is not a safety emergency, but it will stop cooling and can damage the compressor if you keep running it. Shut the AC off at the thermostat and breaker and schedule service."
---

## What this code means

"Outdoor fan not spinning" is not a numeric fault code — it's a physical symptom on your Trane condenser (the outdoor unit). The fan on top of the outdoor unit is supposed to pull air across the condenser coil to dump heat outside. When it stops spinning while the compressor is trying to run, the system can't reject heat, pressures climb fast, and the compressor risks overheating and locking out.

Most Trane split systems use a single run capacitor and contactor to start both the compressor and the condenser fan. Variable-speed Trane units (XV series) use an ECM fan motor driven by a control board, so the failure modes differ. Because a stationary fan can quickly damage an expensive compressor, this is a **pro-level** repair once basic checks are done.

## Common causes, ranked by probability

1. **Failed run capacitor** — The single most common cause. A weak or dead dual run capacitor can't give the fan motor the torque to start, so it hums or sits still while the compressor may still try to run.
2. **Seized or burned-out condenser fan motor** — Bearings fail, windings burn open, or the motor overheats and trips its internal thermal cutout.
3. **Contactor not pulling in** — A pitted, stuck, or non-energizing contactor stops power from reaching the fan and compressor.
4. **Debris jamming the fan blade** — Leaves, sticks, or a bird nest physically block the blade.
5. **Tripped high-pressure or float safety** — On some systems a safety switch has opened, cutting the outdoor unit call.
6. **Control/ECM board fault (variable-speed XV units)** — On ECM-driven fans, a bad motor module or board fails to command the fan.
7. **Wiring or low-voltage fault** — A broken fan lead, chewed wire, or blown low-voltage fuse on the control board.

## Safe checks before you call anyone

These are safe with the power OFF or from inside — do **not** open the electrical panel of a live condenser.

- **Thermostat:** Set to COOL and the setpoint several degrees below room temp. Confirm it's calling for cooling.
- **Air filter:** A clogged filter can cause the system to shut down or short-cycle. Replace if dirty.
- **Breakers:** Check both the indoor furnace/air-handler breaker and the **outdoor disconnect** breaker. Reset a tripped breaker once. If it trips again, stop and call a pro.
- **Thermostat batteries:** Replace if your thermostat uses them.
- **Visible obstruction:** With the AC off at the breaker, look through the top grille for leaves or debris on the fan blade. Clear anything visible — but do not spin or force the blade repeatedly to "start" it.
- **Airflow around the unit:** Clear grass, mulch, and shrubs at least 2 feet back so the coil can breathe.
- **Condensate:** A full drain pan or tripped float switch can shut the system down; check for standing water at the indoor unit.

If the fan still won't run, **shut the AC off** at the thermostat and outdoor breaker and call a technician. Do not keep resetting it.

## How a technician will diagnose it

A qualified HVAC tech will:

1. Confirm the outdoor unit is getting 24V control voltage and that the contactor is being energized.
2. **Discharge and test the run capacitor** with a meter — a reading well below the rated µF confirms a bad capacitor.
3. Check the contactor for pitted contacts and proper pull-in.
4. Test the fan motor windings for continuity and correct resistance, and check for a seized shaft or tripped internal overload.
5. Verify line voltage reaches the motor and inspect the motor leads and wire nuts.
6. On variable-speed **XV** units, read the control board diagnostics and test the ECM module.
7. Check refrigerant pressures and safety switches to rule out a high-pressure lockout.

A good quote names the *specific* failed part (capacitor, motor, contactor, or board) — not just "the fan is bad."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan doesn't spin | Failed run capacitor | Turn off AC; do not run it | Test & replace capacitor |
| Fan spins if pushed by hand, then stops | Weak capacitor or worn motor | Shut off, don't force-start | Replace capacitor or motor |
| No hum, outdoor unit dead | Contactor not pulling in / no 24V | Check outdoor breaker once | Test contactor, control voltage, fuse |
| Blade physically stuck | Debris or bird nest | Power off, remove visible debris | Inspect blade & bearings |
| Fan and compressor both off, cooling call active | Tripped safety / board fault | Check condensate & breaker | Diagnose safety switch or board |
| Variable-speed unit, fan won't command on | ECM motor or board fault | Note any board LEDs | Read diagnostics, test ECM/board |

## Repair costs

Ranges are typical US installed prices; your region, unit access, and Trane model affect the total.

- **Run capacitor replacement:** $150 – $350
- **Contactor replacement:** $150 – $300
- **Standard PSC condenser fan motor + capacitor:** $350 – $650
- **ECM/variable-speed fan motor or module (XV units):** $500 – $1,000+
- **Control board (variable-speed):** $400 – $900
- **Debris removal / diagnostic-only:** $80 – $200 service call
- **DIY reset or debris clearing:** $0

A capacitor is the most common and cheapest fix. Motors and variable-speed boards drive the high end.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — start here if the fan runs but the home won't cool; a stuck outdoor fan is one contributor to no-cooling calls.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — relevant if your air handler/furnace side is also flagging faults.

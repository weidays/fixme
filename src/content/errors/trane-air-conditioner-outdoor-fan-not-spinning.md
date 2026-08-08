---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a failed capacitor, bad fan motor, contactor or control board — with US repair cost ranges."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 for a condenser fan motor replacement"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series and legacy units); behavior varies by single vs two-stage/variable-speed and whether the unit uses a run capacitor or an ECM/inverter drive."
tags:
  - outdoor-fan
  - condenser
  - capacitor
  - fan-motor
  - contactor
parts:
  - name: Dual run capacitor (match microfarad rating)
    search: dual run capacitor 45+5 uf 440v hvac
  - name: Condenser fan motor (match HP/RPM/voltage)
    search: condenser fan motor 1/4 hp 208-230v 825 rpm
  - name: Fan motor start capacitor
    search: hvac motor run capacitor round 440v
datePublished: 2026-08-08
dateModified: 2026-08-08
reviewedBy: ""
faq:
  - q: Can I run my Trane AC if the outdoor fan won't spin?
    a: No. Without the outdoor fan, the compressor overheats and can be permanently damaged. Turn the system off at the thermostat until it's repaired.
  - q: Why does the fan spin if I push it with a stick?
    a: A failed run capacitor often can't provide starting torque, so a manual nudge starts it. That is a strong sign the capacitor needs replacement — do not run it this way.
  - q: Is a stuck outdoor fan an emergency?
    a: It's not a safety emergency, but it is urgent. Running the compressor without condenser airflow risks costly compressor damage within minutes to hours.
  - q: How much does it cost to fix a Trane outdoor fan?
    a: A capacitor runs about $150 to $350 installed, while a full condenser fan motor replacement typically costs $350 to $650 depending on the motor.
---

## What this code means

"Outdoor fan not spinning" is a symptom, not a specific Trane fault code. Your outdoor unit (the condenser) has a large fan on top that pulls air across the coil to reject heat. When that fan stops but the compressor still tries to run, the system cannot cool and the compressor will overheat.

On most Trane single- and two-stage condensers the fan is a standard PSC motor driven by a **run capacitor** and switched on by a **contactor**. On variable-speed and communicating systems (XV/XL variable, some inverter models), the fan is an ECM or inverter-driven motor with no traditional capacitor — a no-spin condition there points to the drive board or motor and is diagnosed with Trane's tools rather than a capacitor swap.

Because this can cook a compressor fast, this is rated **pro** — do your safe checks, then shut the system off until it's repaired.

## Common causes, ranked by probability

1. **Failed run capacitor** — By far the most common cause on capacitor-equipped units. A weak or blown capacitor can't start the fan (and often the compressor). Classic sign: fan starts if you nudge it.
2. **Seized or failed fan motor** — Worn bearings, burned windings, or an overheated motor that has thermally tripped. May hum, get hot, or do nothing.
3. **Bad contactor** — Pitted or stuck contacts fail to pass power to the fan/compressor, or chatter intermittently.
4. **Debris or ice jamming the blade** — Sticks, leaves, or a bent blade physically blocking rotation. Ice can form in some fault conditions.
5. **Tripped compressor/fan overload or high-pressure lockout** — The unit protects itself; often secondary to airflow or refrigerant problems.
6. **Control board or relay fault** — More common on communicating/variable-speed Trane units where the board drives the ECM fan.
7. **Loss of 24V control or thermostat/wiring issue** — Contactor never energizes, so neither fan nor compressor starts.

## Safe checks before you call anyone

These are the only steps a homeowner should do — no panel removal on the live condenser.

- **Thermostat:** Set to COOL and lower the setpoint several degrees. Confirm it's calling for cooling.
- **Air filter:** A clogged indoor filter can cause pressure/temperature faults that lock the outdoor unit. Replace if dirty.
- **Breakers:** Check both the indoor air-handler/furnace breaker and the outdoor condenser breaker/disconnect. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Thermostat batteries:** If your thermostat uses batteries, replace them.
- **Indoor vents and returns:** Make sure supply and return vents are open and unblocked.
- **Condensate:** Check for a full condensate pan or a tripped float switch (often on the indoor unit) — a full pan can shut the system down.
- **Look, don't touch:** From a safe distance, look for obvious debris on the outdoor fan or ice buildup. Do **not** reach into the unit or spin the blade by hand while power is on.

If the fan still won't run, turn the system off at the thermostat and call a technician. Repeatedly resetting a locked-out unit or running the compressor without the fan can destroy the compressor.

## How a technician will diagnose it

A quality tech will typically:

1. Kill power at the disconnect and confirm zero volts before opening the condenser panel.
2. **Test the run capacitor** with a meter for microfarads against the printed rating — a top cause and a cheap fix.
3. **Inspect the contactor** for pitting and verify it pulls in with a 24V call.
4. **Check the fan motor** — spin freely by hand (power off), test windings for opens/shorts, and check the motor's thermal overload.
5. Verify **24V control voltage** and thermostat signal reaching the contactor.
6. On **variable-speed/communicating Trane units**, pull error data and test the ECM/inverter drive and control board instead of a capacitor.
7. Check refrigerant pressures and for a **high-pressure lockout**, since airflow and refrigerant faults can present as a no-fan condition.

Ask them to show you the capacitor reading or the failed component. A good diagnosis takes finding the root cause, not just swapping parts.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan won't start but spins freely with a nudge (power off) | Failed run capacitor | Shut off, don't run it | Test and replace capacitor |
| Fan hums but doesn't turn | Bad capacitor or seized motor | Shut system off | Test capacitor, then motor bearings/windings |
| No sound at all from condenser | Contactor, control power, or breaker | Reset breaker once, check thermostat | Test contactor, 24V control, board |
| Blade physically blocked | Debris or bent blade | Power off; report visible debris | Clear debris, straighten/replace blade |
| Fan and compressor both dead, breaker OK | Contactor or lost 24V signal | Check thermostat/batteries | Test contactor coil and control wiring |
| Fan runs briefly then stops, ice present | Airflow/refrigerant fault, overload | Replace filter, shut off | Check charge, pressures, overload |
| Variable-speed unit fan dead, error shown | ECM/inverter drive or board | Note any codes | Pull codes, test drive/board with Trane tools |

## Repair costs

Ranges are typical installed US prices; your area, model, and parts availability will vary.

- **Diagnostic / service call:** $75 – $200 (often applied to the repair)
- **Run capacitor replacement:** $150 – $350
- **Contactor replacement:** $150 – $350
- **Condenser fan motor replacement (PSC):** $350 – $650
- **ECM / inverter-drive fan motor (variable-speed units):** $600 – $1,200+
- **Control board (communicating/variable-speed):** $500 – $1,000+
- **Clearing debris / straightening blade:** often within the diagnostic fee

The capacitor is the cheapest and most common fix — if a shop quotes a full motor or board without testing the capacitor first, get a second opinion.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — start here if the unit runs but doesn't cool; a stuck outdoor fan is one possible cause.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for indoor furnace/air-handler control faults that can also stop a cooling call.

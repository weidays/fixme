---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a failed capacitor, motor, contactor or control board — with DIY checks and honest US repair costs."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 for a condenser fan motor replacement"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series and 2/4TTx model families). Variable-speed XV units use ECM fan motors and a control board, so diagnosis differs from single-speed PSC-motor units."
tags:
  - trane
  - air-conditioner
  - outdoor-unit
  - fan-motor
  - capacitor
parts:
  - name: Dual run capacitor
    search: trane dual run capacitor 45+5 mfd 440v
  - name: Condenser fan motor
    search: trane condenser fan motor 1/4 hp 208-230v
  - name: Contactor 1-pole 30A
    search: hvac condenser contactor 1 pole 30 amp 24v coil
datePublished: 2026-07-24
dateModified: 2026-07-24
reviewedBy: ""
faq:
  - q: Can I run my Trane AC if the outdoor fan won't spin?
    a: No. Running the compressor without the condenser fan causes overheating and high-pressure trips that can permanently damage the compressor. Shut the system off.
  - q: Why does the fan start if I push it with a stick?
    a: A fan that only starts after a nudge almost always has a weak or dead run capacitor. The push overcomes the lack of starting torque. Replace the capacitor.
  - q: Is a stuck outdoor fan a DIY fix?
    a: Clearing debris is DIY. But capacitors, motors and contactors involve high-voltage terminals and stored charge, so those repairs are rated pro for safety.
  - q: How much does a Trane condenser fan motor cost to replace?
    a: Expect roughly $300 to $650 installed, depending on motor type. Variable-speed ECM motors on XV units cost more than standard PSC motors.
---

## What this code means

"Outdoor fan not spinning" is a symptom, not a Trane fault code — most Trane residential air conditioners don't display alphanumeric error codes for this on the outdoor unit. Instead you'll notice the condenser (the outdoor box) is humming or the compressor is running, but the fan blade on top is not turning.

The outdoor fan pulls air across the condenser coil to reject heat from the refrigerant. If it stops while the compressor runs, pressure and temperature climb fast. That's why this is a **pro-severity** problem: the compressor is the most expensive part in the system, and running it without the fan can destroy it in minutes.

On variable-speed **Trane XV** units, the fan is driven by an ECM motor controlled by the outdoor board, and a stopped fan may set a board-level fault or fan-fault indication. On single-speed **XR/XL** units, the fan is a standard PSC motor run by a capacitor and contactor, with no code — you diagnose it electrically.

## Common causes, ranked by probability

1. **Failed run capacitor.** The most common cause by far. The dual run capacitor gives the fan motor its starting torque. When it weakens, the fan hums but won't spin, or only starts if you nudge it.
2. **Seized or burned-out fan motor.** Bearings fail, or windings overheat and open. The blade won't turn even with a good capacitor.
3. **Contactor not pulling in.** If the contactor doesn't close, neither the fan nor compressor gets power. Sometimes the compressor runs but the fan circuit is open.
4. **Debris or ice jamming the blade.** Sticks, leaves, or a bent blade physically blocking rotation.
5. **Control board or ECM fault (XV units).** On variable-speed units, a failed board or ECM motor module stops the fan.
6. **Tripped breaker or blown fuse feeding the outdoor unit.** The unit may partially operate or not at all.
7. **Bad low-voltage signal / thermostat wiring.** Less common, but a missing 24V call can leave the outdoor unit idle.

## Safe checks before you call anyone

Do these with the system OFF. **Do not open the electrical access panel** — the capacitor stores a dangerous charge even with power off.

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature. Replace batteries if it's battery-powered.
- **Breakers:** Check both the indoor air-handler/furnace breaker and the outdoor AC/disconnect breaker. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Air filter:** A clogged filter can cause the indoor system to freeze or shut down; replace if dirty.
- **Visible debris:** With power off at the disconnect, look through the top grille for sticks, leaves, or a bird nest jamming the blade. Clear only what you can reach from outside.
- **Ice on the outdoor unit:** If you see ice, turn the system off and let it thaw; ice usually points to airflow or refrigerant issues.
- **Condensate:** Check the indoor drain pan and line — a full pan or clogged drain can trip a float switch and stop the system.

If the fan still won't spin after these, stop running the unit and call a technician.

## How a technician will diagnose it

- **Verify the call:** Confirm 24V is present at the outdoor contactor coil when the thermostat calls for cooling.
- **Discharge and test the capacitor:** Safely discharge the run capacitor, then measure its microfarad (µF) rating against the label. A capacitor reading well below spec is replaced.
- **Test the fan motor:** Check windings for continuity, correct resistance, and shorts to ground; spin the blade by hand for bearing drag.
- **Check the contactor:** Verify it pulls in and that both line and load sides carry voltage.
- **Inspect wiring:** Look for burned, loose, or corroded terminals at the capacitor, contactor, and motor.
- **XV/variable-speed units:** Read board diagnostics, verify ECM motor communication, and test the motor module before condemning the board.

A good tech isolates the failed part rather than swapping everything. A capacitor test takes minutes — be skeptical of a quote that jumps straight to a motor without measuring the capacitor.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan won't spin | Failed run capacitor | Shut unit off; don't run it | Discharge & replace capacitor |
| Fan starts only after a push | Weak capacitor | Shut off; note for tech | Replace capacitor |
| Fan won't turn, blade stiff by hand | Seized motor bearings | Clear any debris only | Replace fan motor |
| Nothing outdoors runs at all | Tripped breaker / bad contactor | Reset breaker once | Test contactor & 24V circuit |
| Blade blocked by debris | Sticks, leaves, nest | Power off, remove debris | Inspect blade & motor for damage |
| XV unit, fan fault light | ECM/board fault | Shut off; record any codes | Read diagnostics, test motor/board |
| Ice on coil, fan slow/stopped | Airflow/refrigerant issue | Turn off, thaw, change filter | Diagnose charge & airflow |

## Repair costs

Ranges are typical US installed prices; your region and unit type affect the total.

- **Run capacitor:** $150–$300 installed. The part is cheap ($15–$40); most of the cost is the service call.
- **Contactor:** $150–$300 installed.
- **Condenser fan motor (single-speed PSC):** $300–$550 installed.
- **Condenser fan motor (variable-speed ECM, XV units):** $450–$650+ installed.
- **Control board (XV/variable-speed):** $400–$700+ installed.
- **Diagnostic/service call:** $80–$180, often credited toward the repair.
- **DIY debris clearing / breaker reset:** $0.

If a tech recommends a full condenser or compressor replacement, get a second opinion — a stopped fan is rarely a compressor problem unless the unit was run overheated for too long.

## Related codes

- **[Trane AC Not Cooling: Causes, Fixes & Repair Costs](/trane/air-conditioner/not-cooling)** — broader cooling failures, including cases where the outdoor unit runs but doesn't cool.
- **[Trane Furnace Code 90 (2 Blinks): Causes & Costs](/trane/furnace/code-90)** — related board and ignition faults on the indoor/heating side.

---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a bad capacitor, fan motor, contactor or control board — with DIY checks and $0–$650 repair costs."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor is replaced"
appliesTo: "Trane split-system condensers (XR, XL, XV series) and matching air handlers; single-stage units use a run capacitor and contactor, while variable-speed XV models use an ECM/inverter drive that diagnoses differently."
tags:
  - trane
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: "Dual run capacitor (match microfarad rating)"
    search: "trane dual run capacitor 45+5 mfd 440v"
  - name: "Condenser fan motor"
    search: "trane condenser fan motor 1/4 hp 208-230v"
  - name: "Fan motor capacitor"
    search: "condenser fan run capacitor 5 mfd 440v"
  - name: "Contactor 24v coil"
    search: "24v condenser contactor 2 pole 30 amp"
datePublished: 2026-09-01
dateModified: 2026-09-01
reviewedBy: ""
faq:
  - q: "Can I spin the outdoor fan with a stick to start it?"
    a: "You can test the diagnosis: if a nudge with a non-conductive stick gets the fan running, the capacitor is almost certainly weak and needs replacement. Don't rely on this as a fix — turn the unit off and call a pro."
  - q: "Why is my compressor humming but the outdoor fan won't spin?"
    a: "A humming outdoor unit with a still fan usually points to a failed run capacitor. The compressor can overheat fast in this state, so shut the system off at the thermostat and disconnect to prevent damage."
  - q: "Is a stuck outdoor fan dangerous to keep running?"
    a: "Yes. Without the fan, the compressor loses cooling and can overheat, trip on internal protection, or fail permanently. Shut the AC off and wait for a diagnosis rather than repeatedly restarting it."
---

## What this code means

"Outdoor fan not spinning" isn't a blink-code on most Trane air conditioners — it's a physical symptom. The fan on top of your outdoor condenser unit is supposed to pull air across the coil to reject heat. When it won't turn, the compressor can't dump the heat it's pumping, and the system either fails to cool or shuts down on high-pressure or thermal protection.

On single-stage Trane units (XR, XL series), the fan is driven by a permanent-split-capacitor (PSC) motor that depends on a run capacitor. On variable-speed and communicating models (XV18, XV20i), the fan is often driven by an ECM or inverter board, which will log a fault rather than simply sitting still. Because the failure modes differ, and because troubleshooting involves 240V power and a charged capacitor, this is rated a **pro** repair.

## Common causes, ranked by probability

1. **Failed or weak run capacitor** — The single most common cause on PSC-motor units. The fan hums or sits still; a stored charge can still shock you even with power off.
2. **Seized or burned-out fan motor** — Worn bearings, overheating, or a shorted winding. Often smells burnt or feels physically stuck.
3. **Failed contactor** — The relay that feeds power to the outdoor unit can pit, weld, or fail to close, cutting power to the fan and compressor.
4. **Tripped internal overload / high-pressure lockout** — The unit protects itself when the fan has already stopped; may need cool-down before restart.
5. **Debris jamming the fan blade** — Sticks, ice, or a bent blade physically blocking rotation.
6. **Control board or inverter fault (XV/communicating models)** — Variable-speed units can log a specific fault code at the thermostat or board LED.
7. **Loss of 24V control signal or broken wiring** — A chewed low-voltage wire, bad transformer, or corroded connection.

## Safe checks before you call anyone

These are the only steps a homeowner should do without tools or opening the electrical panel of the unit:

- **Thermostat**: Confirm it's set to COOL and the setpoint is below room temperature. Replace thermostat batteries if it's battery-powered.
- **Air filter**: A clogged indoor filter can cause system shutdowns that look like an outdoor problem. Replace if dirty.
- **Breakers**: Check both the indoor and the outdoor AC breakers. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Visible debris**: With the unit powered off at the breaker and disconnect, look for sticks or leaves resting on the fan blade. Do not reach in while power is on.
- **Indoor vents and condensate**: Make sure supply vents are open and the condensate drain/pan isn't full, which can trigger a safety float switch shutdown.
- **Ice**: If the outdoor coil or fan is iced over, turn the system to FAN-only or OFF and let it thaw before running again.

Do **not** open the electrical box, discharge the capacitor, or spin the fan with the power on.

## How a technician will diagnose it

A qualified tech will typically:

1. Confirm 240V is reaching the condenser and 24V is reaching the contactor coil.
2. Watch whether the contactor pulls in when there's a cooling call — a chattering or dead contactor gets replaced.
3. **Discharge and test the run capacitor** with a meter, comparing measured microfarads to the rating printed on the label. A reading well below spec confirms a bad cap.
4. Check the fan motor for continuity, shorts to ground, and free rotation by hand once safely powered down.
5. On XV/communicating units, read the fault code from the thermostat or board LED and check the inverter/ECM drive.
6. Verify system pressures to rule out a high-pressure trip caused by the stalled fan.

A quick, honest quote should name the failed part (capacitor, motor, contactor) rather than jump straight to "you need a new unit."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Unit hums, fan won't turn | Weak/failed run capacitor | Shut off system; don't force-spin | Test & replace capacitor |
| Fan dead, no hum, compressor also off | Failed contactor or lost power | Reset breaker once | Test 24V, replace contactor |
| Fan spins with a nudge then stops | Capacitor low on microfarads | Turn off, stop testing | Replace capacitor |
| Burnt smell, fan seized | Failed fan motor | Power off, don't run | Replace condenser fan motor |
| Blade physically blocked | Debris or bent blade | Power off, clear visible debris | Straighten/replace blade & balance |
| Fan iced or coil frozen | Airflow/refrigerant issue | Set to OFF, let thaw | Diagnose airflow/charge |
| XV model, fan off, error at thermostat | Inverter/ECM board fault | Note the code, don't reset repeatedly | Read fault, test drive/board |

## Repair costs

Honest US ranges, parts and labor combined:

- **Run capacitor replacement**: $150–$350
- **Contactor replacement**: $150–$350
- **Condenser fan motor + capacitor**: $350–$650
- **Fan blade replacement/balancing**: $150–$300
- **Low-voltage wiring or transformer repair**: $150–$400
- **Control board / inverter drive (XV communicating models)**: $400–$900+ depending on part availability
- **Diagnostic service call**: $80–$180, often credited toward the repair

DIY cost is effectively **$0** if the fix is just resetting a breaker or clearing debris — but internal electrical work should go to a licensed tech because of the charged capacitor and 240V power.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — a stalled outdoor fan is a frequent cause of no-cooling complaints; start there if cooling is your main symptom.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — unrelated furnace fault, but useful if you're chasing blink codes on the heating side of a Trane system.

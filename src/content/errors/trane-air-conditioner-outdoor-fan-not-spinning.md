---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a failed capacitor, motor, or contactor. See safe checks, tech diagnosis, and repair costs from $0 to $650."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY – $650 if the condenser fan motor is replaced"
appliesTo: >
  Most Trane split-system and heat-pump condensers (XR, XL, XV series and legacy 2TTx/4TWx units). Single-stage units use a run capacitor; variable-speed XV units use an ECM/inverter fan board, so diagnosis differs.
tags:
  - outdoor-fan
  - condenser
  - capacitor
  - contactor
  - fan-motor
parts:
  - name: Dual run capacitor
    search: trane dual run capacitor 45+5 mfd 440v
  - name: Condenser fan motor
    search: trane condenser fan motor 1/4 hp 208-230v
  - name: Contactor (24V coil)
    search: hvac contactor 30 amp 2 pole 24v coil
datePublished: 2026-08-30
dateModified: 2026-08-30
reviewedBy: ""
faq:
  - q: Can I run my Trane AC if the outdoor fan won't spin?
    a: No. Without the condenser fan, head pressure spikes and the compressor overheats. Shut the system off at the thermostat to avoid a costly compressor failure.
  - q: Why does the compressor hum but the fan stays still?
    a: That usually points to a failed run capacitor or a seized fan motor bearing. A humming compressor with a dead fan is a common pro-level repair, not a DIY fix.
  - q: Is it safe to spin the fan blade to help it start?
    a: No. The unit is 240V, spinning blades can injure you, and a fan that only runs when pushed still needs a new capacitor or motor. Turn off power and call a tech.
---

## What this code means

"Outdoor fan not spinning" is not a blink-code on Trane equipment — it's a symptom you observe at the condenser (the outdoor unit). The compressor may be running, humming, or completely silent, but the fan blade on top of the outdoor cabinet is not turning while the system is calling for cooling.

The outdoor fan pulls air across the condenser coil to reject the heat your AC removed from inside. When it stops, refrigerant pressure and temperature climb fast. Trane's internal protections (or the compressor's own overload) will eventually shut the compressor down to prevent damage — but running even briefly without the fan risks an expensive compressor failure.

On single-stage Trane units (XR13, XR14, XL16i and similar) the fan is a simple 240V PSC motor driven through a run capacitor and contactor. On variable-speed Trane units (XV18, XV20i) the fan is an ECM/inverter motor controlled by a fan or drive board — behavior and diagnosis differ, and those boards should be handled by a Trane dealer.

## Common causes, ranked by probability

1. **Failed run capacitor** — The single most common cause. A weak or dead capacitor can't give the fan motor the torque to start, so it hums or sits dead while the compressor may still try to run.
2. **Seized or burned-out fan motor** — Worn bearings lock the shaft, or the motor windings fail. Often accompanied by a burnt smell or a blade that won't turn freely by hand (power off).
3. **Failed contactor** — The 24V-controlled relay that sends power to the fan and compressor. Pitted or stuck contacts can interrupt power to the fan.
4. **Tripped compressor/high-pressure protection** — If the fan died first, the compressor may lock out on internal overload, making the whole unit go quiet.
5. **Loss of 24V control signal** — A bad thermostat wire, low-voltage fuse, or control-board issue means the contactor never pulls in.
6. **Debris jamming the blade** — Sticks, leaves, or ice can physically block the fan.
7. **Inverter/ECM fan board fault (XV variable-speed units only)** — On premium Trane models, a drive or fan control fault stops the ECM motor. This is a dealer-level repair.

## Safe checks before you call anyone

These are the only checks a homeowner should do. Do **not** open the electrical panel of the outdoor unit or spin the blade with power on.

- **Thermostat:** Set it to Cool and lower the setpoint several degrees to force a call. Confirm the mode isn't stuck on "Fan Only" or "Off."
- **Thermostat batteries:** If your thermostat uses batteries, replace them — a weak thermostat can fail to send the cooling signal.
- **Breakers:** Check both the indoor air-handler breaker and the outdoor condenser breaker/disconnect. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Air filter:** A filthy filter can cause the system to short-cycle or freeze; replace it if dirty.
- **Visible debris:** With the system off at the thermostat, look through the top grille for obvious sticks or leaves jamming the blade. Don't reach in.
- **Ice on the unit:** If the coil or lines are iced up, turn the system to "Fan Only" (indoor) to thaw and check the filter — icing points to airflow or refrigerant issues.
- **Condensate:** A full drain pan with a float switch can shut the system down; check that the indoor drain isn't clogged or overflowing.

If the fan still won't spin after these checks, turn the system off and call a licensed HVAC technician. Running it further risks the compressor.

## How a technician will diagnose it

A competent tech follows a repeatable sequence — use this to sanity-check the quote:

1. **Confirms the call:** Verifies 24V is reaching the contactor coil when the thermostat calls for cooling.
2. **Tests the contactor:** Checks that the contacts pull in and that line voltage passes through to the fan and compressor terminals.
3. **Tests the run capacitor:** Uses a meter to read the microfarad (µF) value against the rating printed on the cap. A reading outside about ±6% means the capacitor is failing.
4. **Checks the fan motor:** Measures winding resistance/amp draw and spins the blade (power off) to feel for a seized bearing. Confirms the motor gets voltage but won't turn.
5. **Reads pressures and temperatures:** Confirms the compressor didn't overheat and looks for a locked-out overload.
6. **On XV variable-speed units:** Reads fault codes from the inverter/fan board and follows Trane's proprietary diagnostic tree.

Ask the tech to **show you the capacitor reading** and the fan motor amp draw. Those numbers justify a repair; a vague "it's the motor" without measurements is worth questioning.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan won't turn | Failed run capacitor | Shut off, don't spin blade | Test & replace capacitor |
| Fan tries to start then stops, or only spins if nudged | Weak capacitor or worn motor bearings | Turn system off | Confirm µF, replace cap or motor |
| Whole outdoor unit dead, no hum | Contactor, low-voltage fuse, or breaker | Reset breaker once | Test contactor & 24V circuit |
| Burnt smell, blade won't turn by hand (power off) | Seized/burned fan motor | Leave off, call pro | Replace condenser fan motor |
| Blade physically blocked | Debris or ice | Clear visible debris (power off) | Inspect motor after clearing |
| XV/XV20i unit dead with fault code | Inverter/fan board fault | Note the code | Trane dealer board diagnosis |
| Runs then shuts off after minutes | Compressor overload from prior no-fan running | Stop using system | Check pressures & compressor health |

## Repair costs

Honest US ranges, parts and labor combined. Regional labor and diagnostic fees vary.

- **Diagnostic / service call:** $80 – $180 (often credited toward the repair).
- **Run capacitor replacement:** $150 – $350. The part is cheap ($15–$40), but the 240V work and diagnosis are why this is pro-priced.
- **Contactor replacement:** $150 – $300.
- **Condenser fan motor replacement:** $350 – $650 depending on motor type and OEM vs. universal.
- **Low-voltage / control wiring repair:** $120 – $300.
- **Inverter or ECM fan board (XV variable-speed units):** $500 – $1,200+ — dealer-level, often warranty-covered on newer units.
- **Compressor damage from running without the fan:** $1,500 – $2,800+ — the reason you should never run the unit with a dead fan.

If your Trane is still under the standard 10-year parts warranty (registered), the part cost is often covered — you'll pay labor only. Check your registration status before approving a quote.

## Related codes

- **[Trane AC Not Cooling: Causes, Fixes & Repair Costs](#)** — broader troubleshooting when the system runs but doesn't cool; overlaps with a non-spinning fan.
- **[Trane Furnace Code 90 (2 Blinks): Causes & Costs](#)** — for heating-side faults on furnace-paired systems.

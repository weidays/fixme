---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a bad capacitor, motor, or contactor. Learn safe checks, diagnosis, and repair costs ($150–$650)."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor is replaced"
appliesTo: "Most Trane split-system condensers (XR, XL, XV14–XV20i and older 2TTx/4TTx units); board-driven diagnostics vary on communicating XV models"
tags:
  - trane
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: "Dual run capacitor (match microfarad rating)"
    search: "trane dual run capacitor 45+5 uF 440v"
  - name: "Condenser fan motor"
    search: "trane condenser fan motor 1/4 hp 208-230v"
  - name: "Contactor 24V 30A"
    search: "hvac contactor 30 amp 24v coil single pole"
datePublished: 2026-09-05
dateModified: 2026-09-05
reviewedBy: ""
faq:
  - q: "Can I spin the outdoor fan by hand to start it?"
    a: "You can test with the power OFF to check for stiff bearings, but spinning it under power to 'help' it start is a sign of a failed capacitor and should be repaired, not relied on."
  - q: "Why does the compressor run but the fan doesn't?"
    a: "That usually points to a failed fan capacitor or fan motor. Running the compressor with no condenser airflow causes overheating and can trip the unit or damage the compressor."
  - q: "Is a non-spinning outdoor fan an emergency?"
    a: "It's not a safety emergency, but shut the system off at the thermostat. Running with no condenser airflow overheats the compressor and can lead to a costly failure."
---

## What this code means

Your Trane condenser (the outdoor unit) has a fan on top that blows air across the coil to release the heat pulled from your home. When that fan won't spin, the outdoor unit can't reject heat — so the compressor overheats, high-pressure safeties trip, and cooling stops.

This is a **physical symptom, not a blinking fault code** on most Trane air conditioners. Standard XR/XL single-stage units have no display; they simply won't run the fan. Communicating Trane systems (XV18, XV20i with a ComfortLink II thermostat) may log a fault or show an outdoor communication/component alert, but the wording varies by board and firmware — don't assume a specific code number.

If you hear a **hum but no spin**, or the compressor runs while the fan sits still, treat it as a component failure and shut the system off to protect the compressor.

## Common causes, ranked by probability

1. **Failed run capacitor** — By far the most common cause. The dual capacitor gives the fan motor its starting torque. When it weakens, the fan hums, spins slowly, or does nothing.
2. **Seized or burned-out condenser fan motor** — Worn bearings or a burned winding. Often smells hot; blade won't turn freely by hand (power off).
3. **Bad contactor** — The 24V relay that powers the outdoor unit can have pitted or stuck contacts, so the fan and/or compressor never get power.
4. **Debris jamming the blade** — Sticks, mulch, or ice can physically block the fan.
5. **Tripped high-pressure or float safety** — On some systems a safety opens the circuit; the unit stays off until the fault clears.
6. **Loss of 24V control signal** — A blown low-voltage fuse on the indoor board, bad wiring, or a thermostat fault means the unit never gets the "cool" call.
7. **Control board fault (communicating models)** — On XV18/XV20i systems, an outdoor board or communication error can stop the fan.

## Safe checks before you call anyone

Do these first — all are safe for a homeowner:

- **Thermostat:** Set it to COOL and lower the temperature several degrees. Confirm it isn't in a schedule hold or dead-battery state (replace batteries if applicable).
- **Air filter:** A clogged filter can cause the indoor coil to freeze and trip safeties. Replace a dirty filter and let any ice thaw.
- **Breakers:** Check both the indoor furnace/air-handler breaker and the **outdoor disconnect/breaker**. Reset a tripped breaker **once**. If it trips again, stop — that's an electrical fault for a pro.
- **Visible debris:** With the system OFF at the breaker, look through the top grille for sticks, leaves, or a bird's nest jamming the blade. Clear anything obvious.
- **Ice on the unit:** If the coil or fan is iced over, turn cooling off and run the fan-only mode to thaw before restarting.
- **Condensate:** A full drain pan can trip a float switch that kills cooling. Check that the drain isn't clogged and the pan isn't overflowing.

**Do not** open the electrical panel on the condenser, discharge or replace the capacitor without proper training (it holds a dangerous charge even when powered off), or bypass any safety switch.

## How a technician will diagnose it

A qualified tech will typically:

1. Confirm the 24V "call" is reaching the outdoor unit and check the contactor for pull-in and pitted contacts.
2. **Discharge and test the run capacitor** with a meter against its rated microfarads — the #1 finding.
3. Test the fan motor windings for open/shorted circuits and check for a seized bearing (power off, blade spun by hand).
4. Verify line voltage at the motor when the contactor closes.
5. Check high-/low-pressure safeties and, on communicating XV systems, read fault history from the ComfortLink II thermostat or outdoor board.
6. Inspect wiring, the disconnect, and any blown low-voltage fuse.

A good quote should name the specific failed part (capacitor, motor, or contactor), not just "the fan is broken."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but doesn't spin | Failed run capacitor | Shut off system; don't spin by hand under power | Discharge & replace capacitor |
| No hum, no movement | Contactor or lost 24V signal | Check breakers/thermostat once | Test contactor, 24V fuse, wiring |
| Fan stiff/won't turn by hand (power off) | Seized fan motor | Clear any debris first | Replace condenser fan motor |
| Compressor runs, fan doesn't | Capacitor or motor fault | Turn off to protect compressor | Test cap & motor, replace failed part |
| Fan blade jammed | Debris or ice | Clear debris (power off); thaw ice | Inspect for damage after clearing |
| Unit dead after tripping | Tripped safety / high pressure | Reset breaker once only | Diagnose pressure/airflow fault |
| Communicating unit shows fault | Board/comm error (XV models) | Note the message | Read code, repair per board |

## Repair costs

Typical US ranges, parts and labor included:

- **Diagnostic/service call:** $80–$180
- **Run capacitor replacement:** $150–$350
- **Contactor replacement:** $150–$300
- **Condenser fan motor replacement:** $350–$650 (more for communicating/ECM motors)
- **Low-voltage fuse or wiring repair:** $100–$250
- **Communicating control board (XV18/XV20i):** $400–$900+

Capacitors are cheap parts but require safe discharge, so most homeowners pay for the service call. A motor replacement is the biggest common expense. If the compressor was run hard with no airflow, ask the tech to verify it wasn't damaged.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — a non-spinning fan is a leading reason for no cooling; start here if the outdoor unit runs but the house stays warm.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — related indoor control/ignition diagnostics for Trane furnace-based systems.

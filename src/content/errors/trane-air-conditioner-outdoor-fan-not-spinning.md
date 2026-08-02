---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane AC outdoor fan not spinning? Causes include a failed capacitor, motor, or contactor. See safe checks, repair costs ($15 DIY–$650)."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$15 DIY capacitor – $650 if the condenser fan motor is replaced"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series and Perfect Fit units) using a single-phase PSC fan motor and dual run capacitor. Variable-speed XV20i/XV18 ECM fans behave differently and are noted."
tags:
  - trane
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: Dual run capacitor
    search: trane dual run capacitor 45+5 mfd 440v
  - name: Condenser fan motor
    search: condenser fan motor 1/4 hp 208-230v replacement
  - name: Contactor (single pole)
    search: single pole 30 amp ac contactor 24v coil
datePublished: 2026-08-02
dateModified: 2026-08-02
reviewedBy: ""
faq:
  - q: Can I run my AC with the outdoor fan not spinning?
    a: No. Without the condenser fan, the system can't reject heat. Running it risks overheating the compressor and a costly compressor failure. Shut the system off at the thermostat.
  - q: Why does the fan spin if I push it with a stick?
    a: A fan that only starts after a manual push almost always has a weak or dead run capacitor. The capacitor gives the motor its starting torque; replacing it is a common, inexpensive fix.
  - q: Is the outdoor fan the same as the compressor?
    a: No. The compressor is the sealed pump inside the condenser; the fan is the visible motor and blade on top. They share a capacitor on many Trane units, so one failed part can affect both.
  - q: How much does a Trane condenser fan motor cost to replace?
    a: Expect roughly $300 to $650 installed, depending on horsepower and whether the capacitor is replaced at the same time. The motor itself is usually $120 to $250.
---

## What this code means

"Outdoor fan not spinning" isn't a blink-code — it's a physical symptom on your Trane condenser (the outdoor unit). The compressor may be humming and the indoor blower running, but the large fan on top of the outdoor unit stays still, spins very slowly, or only turns after a manual nudge.

That fan pulls air across the outdoor coil to release the heat your AC removes from the house. When it stops, the system can't reject heat, refrigerant pressures climb, and the compressor overheats. Most Trane units will trip on internal high-pressure or thermal protection within minutes — which is why this is a **pro-level** issue you should not keep running.

On variable-speed Trane models (XV20i, XV18) the fan is an ECM driven by a control board, so a stationary fan there points more toward a board or communication fault than a capacitor. This page focuses on the common single-speed PSC-motor units.

## Common causes, ranked by probability

1. **Failed or weak run capacitor** — by far the most common cause. The dual capacitor loses capacitance and can't give the fan motor starting torque. Classic sign: fan spins if you push the blade.
2. **Failed condenser fan motor** — worn bearings, a burned winding, or an open thermal overload. Motor may be hot, silent, or hum without turning.
3. **Bad contactor** — the relay that sends 240V to the fan and compressor has pitted or stuck contacts, so power never reaches the motor.
4. **Debris or physical obstruction** — grass, a stick, or ice jamming the blade, or a seized motor shaft.
5. **Tripped internal overload / high head pressure** — a dirty coil or another fault causes the motor's thermal protector to open.
6. **Loss of 24V control signal** — thermostat, low-voltage wiring, or a blown low-voltage fuse means the contactor never closes.
7. **Control board or ECM fault** (variable-speed models only) — the board isn't commanding the fan.

## Safe checks before you call anyone

These are the only checks a homeowner should do. Do **not** open the electrical panel on the condenser or touch the capacitor — it stores a lethal charge even with power off.

- **Thermostat:** Set to Cool and drop the setpoint several degrees. Confirm the indoor system calls for cooling. Replace thermostat batteries if it's battery-powered.
- **Breakers:** Check both the indoor furnace/air-handler breaker and the outdoor AC breaker/disconnect. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Air filter:** A clogged filter can cause airflow and pressure problems. Replace if dirty.
- **Outdoor unit visual:** From outside, look for leaves, grass clippings, or a stick jamming the fan blade. Turn the system OFF at the thermostat before looking closely.
- **Ice:** If the outdoor coil or lines are iced, turn the AC off and let it thaw. Ice signals a separate airflow/refrigerant problem.
- **Condensate:** Check the indoor drain pan and line aren't overflowing, which can trip a float switch and stop the system.
- **Vents:** Make sure supply and return vents inside are open and unblocked.

If the fan only spins after a physical push, that's a strong capacitor clue — but capacitor replacement is a task for a technician or a properly trained DIYer who knows how to safely discharge it.

## How a technician will diagnose it

A good tech follows a logical sequence — this is what a fair quote reflects:

1. **Confirm the call:** Verify 24V is reaching the contactor and that it's closing (pulling in).
2. **Check incoming power:** Measure 240V at the contactor's load side to confirm power is getting to the fan and compressor.
3. **Test the capacitor:** Discharge and measure the capacitor's microfarads (µF) against the rating printed on it. A reading well below spec confirms replacement.
4. **Test the motor:** With a good capacitor, check the fan motor windings for continuity and shorts, and confirm the thermal overload isn't open. A hot, silent motor that fails these tests needs replacing.
5. **Inspect the contactor:** Look for pitted, burned, or stuck contacts.
6. **Check pressures/coil:** If the motor trips on overload, they'll check for a dirty coil or high head pressure.
7. **Variable-speed units:** Read control-board fault codes and check ECM communication before condemning the motor.

Ask to see the capacitor µF reading or the failed-motor test — a legitimate diagnosis has measurable evidence.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan spins after a manual push | Weak/dead run capacitor | Shut unit off; note the symptom | Discharge & replace dual capacitor, verify µF |
| Fan silent, compressor humming | Dead capacitor or open motor | Turn system off to protect compressor | Test capacitor, then motor windings |
| Fan hot to touch, won't turn | Motor thermal overload / seized bearings | Power off, let it cool | Replace condenser fan motor |
| Blade jammed by debris | Physical obstruction | Power off, clear visible debris | Inspect motor/shaft for damage |
| Unit dead, no fan or compressor | Contactor, breaker, or 24V loss | Reset breaker once, check thermostat | Test contactor, low-voltage fuse, wiring |
| Fan iced or coil frozen | Airflow/refrigerant issue | Turn AC off, let thaw | Diagnose airflow or charge problem |
| Variable-speed fan dead, board lit | ECM or control-board fault | Note any displayed codes | Read codes, test ECM & board |

## Repair costs

Ranges are typical US installed prices; your area, unit age, and part availability affect the total.

- **Dual run capacitor:** $15–$40 part DIY; **$150–$300** installed by a pro (includes diagnosis).
- **Condenser fan motor:** $120–$250 part; **$300–$650** installed depending on horsepower and whether a matching capacitor is added.
- **Contactor:** $15–$40 part; **$150–$300** installed.
- **Low-voltage fuse / minor wiring:** **$100–$200**.
- **Diagnostic / service-call fee:** **$80–$180**, often credited toward the repair.
- **Variable-speed control board (XV models):** **$400–$900+** installed — get a second opinion before approving.

A capacitor is the cheapest and most common fix. If a shop quotes a full motor or board without showing you a test reading, get a second opinion.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — if the fan runs but the house still won't cool, start here.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for indoor furnace/air-handler control faults.

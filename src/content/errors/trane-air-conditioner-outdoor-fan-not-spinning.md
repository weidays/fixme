---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor AC fan not spinning? Causes from bad capacitors to failed motors, safe checks, and repair costs of $0 DIY to $650."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY – $650 if the condenser fan motor needs replacement"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series) using a single-phase PSC fan motor; variable-speed XV20i and communicating units differ and log board-specific faults."
tags:
  - trane
  - air-conditioner
  - condenser-fan
  - capacitor
  - contactor
parts:
  - name: Dual run capacitor (motor + compressor)
    search: dual run capacitor 45+5 mfd 440v hvac
  - name: Condenser fan motor
    search: trane condenser fan motor 1/4 hp 208-230v
  - name: Contactor (single/double pole)
    search: hvac condenser contactor 30 amp 24v coil
datePublished: 2026-07-15
dateModified: 2026-07-15
reviewedBy: ""
faq:
  - q: Can I run my Trane AC if the outdoor fan isn't spinning?
    a: No. Running the compressor without the condenser fan lets pressures and temperatures spike, which can permanently damage the compressor. Shut the system off at the thermostat.
  - q: Why does my outdoor fan start if I push it with a stick?
    a: A fan that spins only after a manual push almost always has a failed run capacitor. The motor can't generate enough starting torque on its own and needs a new capacitor.
  - q: How much does it cost to fix a Trane outdoor fan that won't spin?
    a: A capacitor runs about $150–$350 installed, a contactor $150–$300, and a full fan motor replacement $400–$650. Diagnosis alone is often $80–$150.
  - q: Is a stuck outdoor fan an emergency?
    a: It's not a safety emergency, but it is urgent. Keep the system off until it's repaired to avoid a costly compressor failure, especially in hot weather.
---

## What this code means

"Outdoor fan not spinning" isn't a blink code — it's a physical symptom on your Trane condenser (the outdoor unit). The large fan on top of the unit is the **condenser fan**. Its job is to pull air across the coil so the system can dump the heat it pulled from your house.

When the fan won't turn but you hear a hum from the unit, or the compressor is running while the fan sits still, the system cannot reject heat. This causes pressures to climb fast, and running like this for more than a few minutes risks tripping the compressor's internal overload — or worse, damaging the compressor.

On standard Trane single-stage units (XR13, XR14, XR16, XL series), there is usually no diagnostic display; you're troubleshooting hardware. On communicating variable-speed units (XV18, XV20i), the outdoor board and thermostat may log a specific fault, so behavior varies by model — check your ComfortLink II thermostat or the outdoor board LEDs.

## Common causes, ranked by probability

1. **Failed run capacitor.** The single most common cause. The capacitor gives the fan motor its starting "kick." When it's weak or dead, the fan hums but won't start, or starts only if nudged.
2. **Failed condenser fan motor.** Worn bearings, a burned winding, or an internal open. The motor may be hot, silent, or smell burnt.
3. **Bad contactor.** The relay that sends power to the outdoor unit. Pitted or stuck contacts can prevent power reaching the fan (and compressor).
4. **Tripped breaker or lost 24V control signal.** No power to the unit at all — nothing hums.
5. **Debris or ice jamming the blade.** A stick, animal, or bent blade physically blocking rotation.
6. **Failed compressor/fan overload or high-pressure trip.** The unit shut the fan down as a protective response.
7. **Control board fault (communicating units).** On XV18/XV20i and other variable-speed models, a board relay or module can fail; these log fault codes.

## Safe checks before you call anyone

These are the only checks a homeowner should do. **Do not open the electrical panel on the condenser** — it holds lethal stored voltage in the capacitor even with power off.

- **Set the thermostat off, then to cool.** Confirm the setpoint is below room temperature and the mode is correct. On communicating thermostats, note any error text.
- **Check the breakers.** Locate the AC breaker in your main panel and the disconnect box near the outdoor unit. If the breaker tripped, reset it **once**. If it trips again, stop and call a pro.
- **Replace weak thermostat batteries** (battery-powered models).
- **Check the air filter and indoor vents.** A badly clogged filter can cause protective shutdowns; replace if dirty.
- **Look for visible obstructions** at the fan blade — leaves, a stick, or ice buildup. Turn the system off at the thermostat before looking, and never reach into the unit.
- **Check the condensate drain and overflow switch.** A full drain pan can trip a float switch and shut the system down.

If the fan hums but won't spin, or spins only when pushed, that's a capacitor symptom — turn the unit off and call a technician. Do **not** repeatedly reset a unit that keeps shutting down.

## How a technician will diagnose it

A good tech will follow a logical sequence — use this to sanity-check the quote:

1. **Confirm the symptom** and check for physical obstructions.
2. **Verify power** at the disconnect and 24V control signal at the contactor.
3. **Discharge and test the capacitor** with a meter against its rated microfarads (µF). A reading well below the rating (e.g., 5 µF reading as 2) confirms a bad cap.
4. **Test the contactor** — checking that contacts close and pass voltage without excessive drop.
5. **Test the fan motor** windings for resistance/continuity and inspect for locked bearings.
6. **Check system pressures** to rule out a high-pressure trip or refrigerant issue.
7. On **communicating units**, pull fault codes from the outdoor board or ComfortLink thermostat.

If a tech quotes a full motor replacement without first testing the capacitor, ask why — the capacitor is cheaper and far more common.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums, won't start | Failed run capacitor | Turn off; don't push blade repeatedly | Test & replace capacitor |
| Fan spins only if pushed by hand | Weak capacitor | Turn off; call pro | Replace capacitor |
| No sound at all from unit | No power / tripped breaker / bad contactor | Reset breaker once; check disconnect | Test contactor & control voltage |
| Fan silent, motor hot/burnt smell | Failed fan motor | Shut down system | Replace condenser fan motor |
| Blade physically blocked | Debris or ice | Turn off; clear visible debris | Inspect motor/blade for damage |
| Fan stops, then compressor stops | High-pressure or overload trip | Turn off; do not reset repeatedly | Check pressures, coil, charge |
| Fault code on ComfortLink thermostat | Board/module fault (variable-speed) | Note the code | Diagnose outdoor board |

## Repair costs

Honest US ranges, parts and labor combined:

- **Diagnostic/service call:** $80 – $150
- **Run capacitor (replaced):** $150 – $350
- **Contactor (replaced):** $150 – $300
- **Condenser fan motor (replaced):** $400 – $650, more if a non-standard or communicating motor
- **Fan blade replacement:** $150 – $300
- **Control board (communicating XV models):** $400 – $900+

DIY capacitor replacement is possible for experienced homeowners but involves lethal stored voltage — most people should hire a pro. Prices vary by region, unit age, and whether your unit uses standard or brand-specific parts.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — if the fan spins but the house still won't cool, start here.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — a furnace/air-handler board fault unrelated to the outdoor fan, but useful if you also have heating issues.

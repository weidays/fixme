---
title: "Trane AC Humming But Not Starting: Causes, Fixes & Costs"
code: "Humming but not starting"
description: "Trane AC humming but not starting? Learn the causes (failed capacitor, contactor, seized motor), safe checks, technician fixes and repair costs."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$120–$350 for a capacitor or contactor; $1,800–$3,500+ if the compressor is seized"
appliesTo: "Trane split-system central ACs, including XR, XL and XV series condensers. Single-stage units usually use a dual run capacitor (some units use two separate capacitors) and a mechanical contactor. Some units also have a factory or add-on hard-start kit. Two-stage and variable-speed models (XL18i/XL20i, XV18/XV20) use electronic or inverter controls that may show diagnostic codes instead of a plain hum."
tags:
  - trane
  - air-conditioner
  - humming
  - capacitor
  - contactor
  - compressor
  - outdoor-unit
parts:
  - name: "Pleated HVAC air filter (match your filter size)"
    search: "MERV 8 pleated air filter 16x25x1"
  - name: "AA/AAA lithium batteries for thermostat"
    search: "AA lithium batteries 8 pack"
datePublished: 2026-11-04
dateModified: 2026-11-04
reviewedBy: ""
faq:
  - q: "Is it safe to keep running my Trane AC if the outdoor unit hums but won't start?"
    a: "No. Turn the system off at the thermostat. A motor that hums without spinning draws locked-rotor current, which can be several times its normal draw. This overheats the windings and can turn a cheap capacitor repair into a compressor replacement."
  - q: "Can I replace the capacitor myself?"
    a: "We don't recommend it. Capacitors can hold a dangerous charge even with power off, and they sit inside the electrical cabinet next to 240-volt wiring. Testing and replacing one is a quick, inexpensive job for a licensed technician."
  - q: "Why does my unit hum and then shut off after a few seconds?"
    a: "The compressor's internal overload is likely tripping. It is protecting the motor from overheating while it fails to start. The usual causes are a weak capacitor or a hard-starting compressor. The overload resets on its own once the motor cools, which can take 30 minutes or more."
  - q: "Does this problem reset on its own?"
    a: "No. A failed capacitor, a pitted contactor or a seized motor will not fix itself. The internal thermal overload does reset automatically, so the unit may try again and hum again. That repeated stress is why you should leave it off until it's repaired."
---

## What this code means

"Humming but not starting" is a symptom, not a numbered fault code. Your thermostat is calling for cooling and the outdoor unit gets power, which is the hum you hear. But the compressor, the outdoor fan, or both can't get their motors turning.

On most Trane single-stage and two-stage condensers, the cause sits in the start circuit:

- **Run capacitor.** Usually a dual capacitor that serves both the compressor and the fan motor. Some units use two separate capacitors instead.
- **Contactor.** The relay that sends 240 V to the motors.
- **Motor itself.** A compressor or fan motor that is mechanically stuck.

How this differs from related pages:

- **Compressor not running:** that page covers a compressor that is completely silent.
- **Outdoor fan not spinning:** that page covers the fan alone.

This page covers the specific case where the unit is energized and audibly humming but nothing turns.

The condition does **not** clear on its own. The compressor's internal thermal overload will reset automatically after it cools, so the unit may try again. Each attempt stresses the motor further. Turn the system off at the thermostat until a technician has looked at it.

### Where these parts sit on a Trane condenser

On typical Trane XR and XL condensers, the capacitor and contactor are mounted together in the unit's control/electrical section. This section sits behind a service access panel on the corner of the cabinet where the refrigerant lines and power wiring enter. If the hum or buzz seems loudest at that corner, the electrical components are the likely source. That panel is technician territory. Don't remove it.

### Communicating and variable-speed Trane systems

Variable-speed Trane units (XV18/XV20 with inverter drives) behave differently. They usually report a fault through the drive or thermostat rather than humming.

Some Trane systems are communicating systems, such as ComfortLink II or Trane Link. On these, the outdoor unit's control sends fault information to the compatible Trane thermostat. If you have one, check the thermostat for an alert or service message, and note it down for the technician.

## Common causes, ranked by probability

1. **Failed or weak run capacitor.** This is by far the most common cause on Trane condensers. A capacitor that has lost capacitance can't create the phase shift the motors need to start. You get a hum, often with the fan blade still or turning only if nudged. Heat speeds capacitor failure, so this peaks in summer.
2. **Worn or pitted contactor.** Burned contacts may pass enough voltage to make a motor hum but not enough current to start it. Even one burned set of contacts can cause this.
3. **Seized outdoor fan motor.** Failed bearings lock the shaft. The motor hums and overheats. Debris jamming the blade can mimic this.
4. **Hard-starting compressor (no hard-start kit, or a failed one).** Aging compressors, or systems restarting against unequalized pressure, may need extra starting torque. The compressor hums, trips its overload, and repeats.
5. **Low supply voltage.** Undersized wiring, a loose lug, or utility voltage sag during peak demand can drop the voltage below what the motors need to start.
6. **Locked-rotor or internally failed compressor.** The compressor is mechanically seized or has damaged windings. This is the least likely cause but the most expensive, and it's often the result of running a long time on a bad capacitor.

## Safe checks before you call anyone

- **Turn the system off at the thermostat first.** Don't let it keep humming while you troubleshoot.
- **Check the thermostat.**
  - Confirm it's set to Cool with the setpoint a few degrees below room temperature.
  - Replace the batteries if the display is dim or blank.
  - On a communicating Trane thermostat, look for an alert or service message.
- **Check the air filter.** Replace it if it's dirty. A clogged filter won't cause a hum by itself, but it adds strain once the system is repaired.
- **Check the breakers and disconnect.** Make sure the AC breaker in the main panel and the outdoor disconnect switch are fully on. If a breaker tripped, you may reset it **once**. If it trips again, stop and see the Breaker keeps tripping guide.
- **Look at the outdoor unit from outside, without opening it.**
  - Clear leaves, grass clippings and debris from around and on top of the unit.
  - Keep at least 2 feet of clearance around it.
  - Don't put sticks or fingers into the fan grille. "Push-starting" the fan is a common internet tip that has caused serious injuries.
- **Make sure the service panel is seated.** If an exterior access panel looks loose, seat it properly. Don't remove it.
- **Wait and try once.** After clearing debris, wait 30 minutes so the overload can cool. Then set the thermostat to cool one time and listen. If it still hums without starting, shut it off and call a technician.

## How a technician will diagnose it

A competent tech will typically work through these steps:

1. **Lock out power and discharge the capacitor.** They kill power at the disconnect and safely discharge the capacitor before handling it.
2. **Test the capacitor.** They measure capacitance in microfarads against the label rating. On a dual capacitor, they check both the compressor (HERM) and fan sides. A reading outside roughly ±6% of rated value, or any bulging or leaking, means replacement.
3. **Inspect the contactor.** They look for pitted or burned contacts and check voltage across the contacts under load.
4. **Measure supply voltage.** They confirm 208–240 V at the unit, and check for voltage drop at startup.
5. **Test the motor windings.** They measure resistance across common, start and run on the compressor and fan motor, and check for shorts to ground.
6. **Check the fan motor bearings.** With power locked out, they spin the fan by hand to feel for a seized or rough shaft.
7. **Measure amp draw on startup.** This reveals locked-rotor current. If a new capacitor doesn't fix it, they may try a hard-start kit before condemning the compressor.

On communicating systems, the tech will also review any fault history stored in the thermostat or outdoor control.

**Red flag:** a quote to replace the compressor or the whole condenser without written capacitor and winding test results. Ask for the readings.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor unit hums, fan and compressor both still | Failed run capacitor | Turn system off; check breaker and disconnect | Test and replace capacitor |
| Hum with buzzing from the outdoor unit's control/electrical section | Pitted or failing contactor | Turn system off | Replace contactor |
| Compressor runs but fan hums and doesn't turn | Fan side of capacitor or seized fan motor | Clear debris from top grille (no hands inside) | Replace capacitor or condenser fan motor |
| Hums for a few seconds, clicks off, repeats | Hard-starting compressor tripping overload | Turn off; wait 30 min; try once | Replace capacitor; add hard-start kit |
| Hums mainly on hot afternoons | Low voltage or a weak capacitor | Note times and temperatures for the tech | Measure voltage under load; check wiring and lugs |
| Hums, breaker trips quickly | Locked or shorted compressor | Reset breaker once only | Test windings; condemn or replace compressor |

## Repair costs

Typical US ranges, parts and labor:

| Repair | Typical cost |
|---|---|
| Service call / diagnostic | $80–$200 (often credited toward the repair) |
| Run capacitor replacement | $120–$300 |
| Contactor replacement | $150–$350 |
| Hard-start kit installed | $150–$350 |
| Condenser fan motor replacement | $350–$750 |
| Wiring or lug repair (low voltage at unit) | $100–$400 |
| Compressor replacement | $1,800–$3,500+ (includes refrigerant recovery and recharge; the compressor part may be covered under Trane's limited warranty if registered; labor and refrigerant usually aren't) |
| Condenser replacement (if the compressor is out of warranty on an older unit) | $3,500–$7,500+ |

Trane's standard limited compressor warranty on registered units is typically 10 years. Longer terms apply only to certain premium models or promotions. Confirm your coverage with your registration paperwork or your dealer before approving a compressor replacement.

## Related codes

- Compressor not running — Trane AC Compressor Not Running: Causes, Fixes & Costs
- Outdoor fan not spinning — Trane AC Outdoor Fan Not Spinning: Causes, Fixes & Costs
- Fan runs but no cold air — Trane AC Fan Runs But No Cold Air: Causes & Costs
- Breaker keeps tripping — Trane AC Breaker Keeps Tripping: Causes, Fixes & Costs
- Won't turn on — Trane AC Won't Turn On: Causes, Fixes & Repair Costs
- Loud noise — Trane AC Loud Noise: Causes, Fixes & Repair Costs
- Not cooling — Trane AC Not Cooling: Causes, Fixes & Repair Costs

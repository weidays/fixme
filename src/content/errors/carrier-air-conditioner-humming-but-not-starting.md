---
title: "Carrier AC Humming But Not Starting: Causes & Fixes"
code: "Humming but not starting"
description: "Carrier AC humming but not starting? Learn the causes (capacitor, contactor, locked compressor), safe checks, and repair costs from $0 to $3,500."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY checks – $150-$450 for a capacitor or contactor – $1,800-$3,500+ if the compressor is locked or failed"
appliesTo: "Carrier split-system central air conditioners (Comfort, Performance and Infinity series, e.g. 24AC, 24ACC, 24ABC, 24VNA, 24ANB). Single-stage units with a PSC compressor and run capacitor show this symptom most often. Two-stage and variable-speed Infinity units may show a status or fault code on the outdoor control board LEDs, and on the Infinity control if one is installed, instead of, or as well as, humming."
tags:
  - carrier
  - air-conditioner
  - humming
  - capacitor
  - contactor
  - compressor
  - outdoor-unit
parts:
  - name: "Replacement HVAC air filter"
    search: "HVAC air filter MERV 8 16x25x1"
  - name: "AA batteries for thermostat"
    search: "AA lithium batteries thermostat"
faq:
  - q: "Is it dangerous to let my Carrier AC keep humming?"
    a: "Yes, it can be. A humming compressor or fan motor that can't start draws high locked-rotor current. It usually trips its internal overload, cools, and tries again. Repeated attempts overheat the motor windings and can turn a cheap capacitor repair into a compressor replacement. Turn the system off at the thermostat and call a technician."
  - q: "Can I replace the capacitor on my Carrier AC myself?"
    a: "We don't recommend it. Capacitors hold a dangerous charge even with power off. The outdoor unit also carries 240 volts, and choosing the wrong microfarad or voltage rating can damage the compressor. A technician can test and replace a capacitor quickly, usually in a single visit."
  - q: "Will my Carrier AC reset itself after humming?"
    a: "Sometimes. The compressor's internal overload resets automatically once the motor cools, which can take 30 minutes to a few hours. The unit may then try to start again and hum again. On units with a control board, a timed lockout may clear after a delay or when you cycle power. Either way, an automatic reset does not fix the underlying cause."
  - q: "Why does the outdoor unit hum but the fan doesn't spin?"
    a: "Most often, a dual run capacitor has failed. That single part serves both the outdoor fan motor and the compressor, so when it fails, both motors can hum without starting. A seized fan motor or a stuck contactor can also cause this."
datePublished: 2026-11-04
dateModified: 2026-11-04
reviewedBy: ""
---

## What this code means

"Humming but not starting" is a symptom, not a numbered Carrier fault code. When your thermostat calls for cooling, the outdoor unit gets power and makes a steady hum or buzz. But the compressor doesn't run, and often the outdoor fan doesn't spin either.

The hum is usually a motor trying to start and failing. It is drawing current but can't turn. Sometimes the hum comes from a contactor coil buzzing without fully closing.

This page covers only that specific behavior. If the outdoor unit is completely silent, see Carrier AC Won't Turn On or Carrier AC Compressor Not Running instead.

The capacitor and hard-start causes on this page mainly apply to single-stage and two-stage units. Variable-speed Infinity units (such as the 24VNA) use an inverter-driven compressor without a run capacitor of the conventional kind. Classic capacitor hum is unlikely on these models. On a variable-speed unit, rely on the fault code to point toward the cause.

How it resets depends on the unit:

- **Compressor overload:** The internal overload in the compressor resets on its own once the motor cools. The unit may hum again on the next attempt.
- **Two-stage and variable-speed units:** Carrier's two-stage and Infinity/variable-speed units may hold a fault or lockout. That lockout clears after a timed delay or a power cycle, depending on the board. Check the outdoor control board's LEDs for the exact code. If you have an Infinity control, check it as well. A standard or non-Infinity thermostat, including an ecobee, won't display these codes.

Treat this as technician work. Running a motor that hums but can't start can quickly overheat and damage the compressor.

## Common causes, ranked by probability

1. **Failed or weak run capacitor.** This is usually a dual capacitor serving both the compressor and the fan. It is by far the most common cause on Carrier single-stage units. Heat and age degrade capacitors, and a bulged or leaking top is a classic sign. This applies to single-stage and two-stage units, not inverter-driven variable-speed models.
2. **Faulty contactor.** Pitted or burned contacts, a weak coil, or debris (insects, ants) can stop full voltage from reaching the motors. A failing contactor can also buzz on its own.
3. **Seized or failing outdoor fan motor.** Worn bearings let the motor hum without spinning. The compressor then overheats and trips on its overload.
4. **Hard-starting or locked-rotor compressor.** Aging compressors, mechanical binding, or high head pressure can cause this. On single-stage and two-stage units, some technicians add a hard-start kit if the compressor windings test good. A hard-start kit is a stopgap on an aging compressor, not a permanent fix.
5. **Low or unbalanced supply voltage, or loose or burned wiring.** Examples include a failing breaker, loose lugs at the disconnect, or burned terminals at the capacitor or contactor.
6. **Failed compressor windings or internal overload stuck open.** The compressor itself has failed. This is the most expensive outcome.

## Safe checks before you call anyone

- **Turn the system off at the thermostat now.** This stops repeated start attempts and protects the compressor while you wait for service.
- **Check the thermostat.** Confirm it's set to Cool, the setpoint is below room temperature, and the batteries are fresh if it uses them.
- **Check the air filter.** Replace it if it's dirty. A clogged filter doesn't usually cause humming, but it adds strain once the unit is running again.
- **Check the breaker.** Look for a tripped AC breaker in your main panel. Reset it once only. If it trips again, leave it off and call a pro.
- **Clear around the outdoor unit.** Remove leaves, grass clippings, and debris from the top grille and sides, without opening the cabinet. Keep about 2 feet of clearance around the unit.
- **Check the condensate line.** If your system has a float or safety switch on the drain, make sure the line isn't backed up. A tripped switch may shut the system down, though it usually doesn't cause humming.
- **Check the access panel.** Make sure the exterior panel on the outdoor unit is fully seated.

Do not open the outdoor unit, poke the fan blades to "start" them, or touch the capacitor or contactor. The capacitor can hold a dangerous charge even after power is shut off.

## How a technician will diagnose it

Use this to sanity-check what you're told:

1. **Confirms the call for cooling** and checks for 24V at the contactor coil.
2. **Measures line voltage** at the disconnect and contactor, both at rest and during the start attempt, to look for voltage drop.
3. **Inspects the contactor** for pitting, burning, or debris, and checks the voltage across the contacts while closed.
4. **Discharges and tests the capacitor** with a meter, comparing microfarads to the label rating. Tolerance is typically ±5–6% per the label. They will also look for bulging or leaking.
5. **Checks the fan motor** by spinning it with power off, and measures its amp draw.
6. **Measures compressor windings** (common, start, run) for resistance and shorts to ground. They will also take a locked-rotor amp reading and allow the overload to reset if the compressor is hot.
7. **Checks the outdoor control board** fault LEDs on two-stage and variable-speed models. If an Infinity control is installed, they will also read the codes there.
8. **Checks refrigerant pressures** only after the unit runs, to rule out high head pressure or other issues that make starting hard.

A reliable diagnosis usually takes 30 to 60 minutes. Be wary of anyone who recommends a new compressor without showing you winding and amp readings.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor unit hums, fan and compressor both still | Failed dual run capacitor | Turn system off at thermostat; call pro | Test and replace capacitor |
| Loud buzz at the unit, nothing starts, may chatter | Bad contactor or debris in contactor | Turn system off; clear debris outside the unit only | Replace contactor |
| Compressor hums, fan doesn't spin, unit gets hot | Seized fan motor or bad fan side of capacitor | Turn off; clear the top grille of debris | Replace fan motor and/or capacitor |
| Compressor hums, then clicks off; repeats every few minutes or hours | Hard-starting compressor tripping its overload | Turn off; let it rest | Test windings; replace capacitor or add a hard-start kit (a stopgap on an aging compressor, not a fix) |
| Hum, then breaker trips | Locked compressor or shorted winding | Reset breaker once; leave off if it trips again | Compressor diagnosis or replacement |
| Lights dim when unit tries to start | Low supply voltage or loose connections | Check breaker only | Tighten or repair wiring; check supply voltage |
| Fault LED on outdoor board, or code on Infinity control, on two-stage or Infinity unit | Board-detected start or pressure fault | Note the code; cycle power once | Diagnose per Carrier service data |

## Repair costs

Typical US prices, parts and labor:

| Repair | Typical cost |
|---|---|
| Service call / diagnosis | $75–$200 |
| Run capacitor (single or dual) | $150–$450 |
| Contactor | $150–$400 |
| Hard-start kit (stopgap, not a fix for a failing compressor) | $200–$450 |
| Wiring or disconnect repair | $150–$500 |
| Outdoor fan motor | $350–$800 |
| Compressor replacement (in warranty, labor and refrigerant only) | $1,200–$2,500 |
| Compressor replacement (out of warranty) | $1,800–$3,500+ |
| New Carrier condenser instead of compressor | $3,500–$7,500+ installed |

Before you pay for a compressor, check your Carrier warranty. Registered units often carry a 10-year parts warranty. If the system is more than 12–15 years old and the compressor has failed, it often makes more sense to replace the system.

## Related codes

<!-- Editor: confirm each target page below exists before converting these titles to internal links. Remove any title whose page does not exist. -->

- Carrier AC Compressor Not Running: Causes, Fixes & Costs
- Carrier AC Outdoor Fan Not Spinning: Causes & Fixes
- Carrier AC Breaker Keeps Tripping: Causes, Fixes & Costs
- Carrier AC Won't Turn On: Causes, Fixes & Costs
- Carrier AC Fan Runs But No Cold Air: Causes & Fixes
- Carrier AC Loud Noise: Causes, Fixes & Repair Costs
- Carrier AC Not Cooling: Causes, Fixes & Repair Costs

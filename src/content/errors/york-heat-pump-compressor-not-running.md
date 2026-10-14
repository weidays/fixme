---
title: "York Heat Pump Compressor Not Running: Causes & Fixes"
code: "Compressor not running"
description: "York heat pump compressor won't start? Causes like bad capacitors, contactors, and pressure lockouts, safe checks, and repair costs from $0 to $3,500+."
brand: york
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150-$450 for a capacitor or contactor, $1,800-$4,500+ for a compressor replacement"
appliesTo: "York and related Johnson Controls split heat pumps (e.g. YZ, YH, YHE, YHJF and Affinity/LX series) with single-stage, two-stage or variable-speed compressors. Control boards, lockout timing, and LED fault codes vary by model and board revision, so check the wiring diagram and fault-code label inside your outdoor unit's control panel."
tags:
  - york
  - heat-pump
  - compressor
  - capacitor
  - contactor
  - pressure-switch
  - outdoor-unit
parts:
  - name: "Replacement HVAC air filter (correct size for your return)"
    search: "HVAC air filter MERV 8 16x25x1"
  - name: "AA or AAA thermostat batteries"
    search: "AA lithium batteries thermostat"
datePublished: 2026-10-13
dateModified: 2026-10-13
reviewedBy: ""
faq:
  - q: "Why is my York heat pump outdoor fan running but the compressor isn't?"
    a: "The fan and compressor share the contactor, so if the fan runs, power is reaching the unit. The most common reason the compressor alone won't start is a failed run capacitor (or the compressor side of a dual capacitor). Other possibilities are a tripped internal overload on a hot compressor, or a compressor with a seized or open winding. A technician needs to test these with a meter."
  - q: "Can I reset my York heat pump if the compressor stops?"
    a: "Yes, you can do one reset. Turn the thermostat off, switch off the outdoor disconnect and breaker for about five minutes, then restore power and call for heat or cooling. Many York boards hold a pressure or high-temp lockout until power is cycled, and some clear on their own after a timed delay. If the compressor stops again, don't keep resetting it. Repeated lockouts point to a real fault that resets can make worse."
  - q: "Is a humming outdoor unit with no compressor running dangerous?"
    a: "It isn't dangerous to you, but it is hard on the equipment. A compressor that hums without starting is usually a failed capacitor or a locked rotor. It draws high current and will trip on its internal overload over and over. Turn the system off at the thermostat and call a technician rather than letting it keep trying."
  - q: "How long should I wait for the compressor to start after changing the thermostat?"
    a: "Most York heat pump controls have an anti-short-cycle delay of about 5 minutes, and some boards use a longer delay after a power interruption. Wait at least 5 to 10 minutes before deciding the compressor isn't running."
---

## What this code means

"Compressor not running" is a symptom, not a numbered fault code. It means the outdoor unit is getting a call for heating or cooling, but the compressor isn't starting. You may notice:

- The outdoor fan spins but the unit doesn't heat or cool the refrigerant.
- The unit hums or clicks without starting.
- Nothing happens outside at all.

Without the compressor, a York heat pump can't move heat. In heat mode, the indoor unit falls back on auxiliary or electric strip heat, which costs more to run. In cooling mode, it just blows room-temperature air.

Many York and Johnson Controls outdoor boards protect the compressor with several safeties:

- An anti-short-cycle timer, usually about 5 minutes
- A high-pressure switch
- A low-pressure or loss-of-charge switch
- On some models, a discharge-temperature sensor

When one of these trips, the board flashes an LED fault code. Codes and lockout behavior vary by board. On many boards, a single pressure trip clears on its own after a delay. Repeated trips within one call for heat or cooling cause a "hard" lockout that holds until power is cycled. The exact meaning is on the label inside your unit's control panel.

Because the likely causes are electrical parts inside the cabinet or the refrigerant circuit, this is professional-level work.

If you're seeing these symptoms instead, see the related pages listed at the bottom:
- **Outdoor fan also not running:** York Heat Pump Outdoor Fan Not Spinning.
- **Breaker trips:** York Heat Pump Breaker Keeps Tripping.

## Common causes, ranked by probability

1. **Failed run capacitor (or the compressor side of a dual capacitor).** This is the most common cause. Typical signs are a hum, or the fan running while the compressor stays silent.
2. **Short-cycle delay or thermostat issue.** The compressor may simply be waiting out its delay timer. Or the thermostat may be set wrong, have dead batteries, or not be sending a heat/cool call (Y signal) to the unit.
3. **Bad contactor.** Pitted or burned contacts, a failed coil, or ants and debris in the contacts can stop power from reaching the compressor.
4. **Pressure-switch or safety lockout.** The causes behind the trip differ by direction:
   - *High-pressure trips:* a dirty outdoor coil, a restricted indoor airflow path (often a clogged filter in heat mode), or a failed outdoor fan.
   - *Low-pressure trips:* a refrigerant leak, or a frozen coil.
5. **Compressor thermal overload tripped.** The compressor overheated, often because of a bad capacitor, low charge, or high head pressure. It won't restart until it cools down, which can take 30 to 60 minutes or more.
6. **Control board or wiring fault.** This includes a failed defrost or control board, loose or burned wires, or a bad low-voltage connection. Variable-speed models can also have inverter or drive faults, which are model-specific and show as their own LED codes.
7. **Failed compressor.** Shorted, grounded, or open windings, or a mechanically locked rotor. A hard-start kit is sometimes tried on a compressor that's slow to start but otherwise healthy. It doesn't fix a dead one.

## Safe checks before you call anyone

- **Thermostat:** Confirm it's in HEAT or COOL and set at least 3°F past room temperature. Make sure it isn't in "Emergency Heat," which locks out the compressor on purpose. Replace the batteries if the display is dim or blank.
- **Wait out the delay:** Give the system 5 to 10 minutes after any setting change or power interruption.
- **Breaker and disconnect:** Check the outdoor unit's breaker in your panel and the disconnect switch next to the outdoor unit.
  - If the breaker is tripped, reset it once.
  - If it trips again, stop and call a pro.
- **One reset of a lockout:** Turn the thermostat off. Switch off the disconnect and breaker for 5 minutes, restore power, then call for heat or cooling. If the compressor stops again, don't repeat the reset.
- **Air filter:** A clogged filter can cause pressure trips, especially in heat mode. Replace it if it's dirty.
- **Visible vents and registers:** Make sure supply registers and return grilles are open and not blocked.
- **Outdoor clearance:** Clear leaves, snow, and debris from around the outdoor unit so it has about 2 feet of open space. Do this from the outside only, without opening any panels.
- **Panels:** Confirm the indoor and outdoor access panels are fully seated.

Do not open the outdoor unit's electrical panel. Capacitors hold a dangerous charge even with the power off.

## How a technician will diagnose it

A good technician will typically work through these steps. You can use them to sanity-check a quote:

1. **Read the outdoor board's LED fault code** and check the fault history, if the board stores it.
2. **Confirm power and the call for operation:** line voltage at the disconnect and contactor, and 24 V on the Y (and, where used, O/B) terminals.
3. **Check the contactor** by inspecting it and measuring voltage across the contacts.
4. **Test the capacitor with a meter** and compare the reading to its rated microfarad (µF) value, usually within ±6%.
5. **Measure compressor amp draw at startup.** Locked-rotor amps with no start means a stuck compressor or a capacitor problem.
6. **Test the compressor windings.** They check resistance across the common, start, and run terminals, and check for a short to ground. If the windings read open, they'll let the compressor cool to rule out a tripped internal overload.
7. **Check the pressure safeties.** They test the high- and low-pressure switches for continuity, then connect gauges to check the refrigerant charge, superheat and subcooling, and look for leaks if the charge is low.
8. **Inspect airflow:** coil cleanliness, outdoor fan operation, and indoor blower and filter.

Be cautious if a technician condemns the compressor without showing you winding readings and amp-draw readings, or without first replacing a $20–$60 capacitor that tested weak.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor fan runs, compressor silent | Bad run capacitor or tripped overload | Turn system off, call a pro | Test and replace the capacitor; check the overload |
| Unit hums, nothing spins, then clicks off | Failed capacitor or locked compressor | Shut off at the thermostat | Test the capacitor and windings; try a hard-start kit if appropriate |
| Nothing runs outside at all | Tripped breaker, thermostat, or contactor | Check the thermostat and batteries; reset the breaker once | Check 24 V, contactor coil, and wiring |
| Starts briefly, then stops; LED flashing | High- or low-pressure lockout | Replace filter, clear outdoor unit, do one power reset | Read fault code, check charge, find leaks, clean coil |
| Compressor stops after a short period of running | Low charge, high head pressure, or weak capacitor | Check filter and outdoor clearance | Gauge test, superheat and subcooling, amp draw |
| Only aux or emergency heat comes on | Thermostat in Emergency Heat, or compressor fault | Switch the thermostat back to normal HEAT | Full compressor-circuit diagnosis |
| Breaker trips when compressor tries to start | Grounded compressor or shorted wiring | Don't reset more than once | Megohm/ground test, wiring repair, or compressor replacement |

## Repair costs

Typical US prices, including parts and labor:

| Repair | Typical cost |
|---|---|
| Service call / diagnosis | $90–$250 |
| Run or dual capacitor replacement | $150–$450 |
| Contactor replacement | $150–$400 |
| Hard-start kit | $200–$450 |
| Pressure switch replacement | $200–$500, more if the system must be recovered and recharged |
| Refrigerant leak repair plus recharge | $400–$1,500+ (R-410A and newer refrigerants vary widely) |
| Outdoor control or defrost board | $300–$800 |
| Inverter drive board (variable-speed models) | $600–$1,500+ |
| Compressor replacement | $1,800–$4,500+ |

Compressors are often covered by York's parts warranty, commonly 10 years with registration, but labor and refrigerant are usually extra. On older units, a compressor failure often makes full system replacement the better value. Get a written quote for both options.

## Related codes

- York Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- York Heat Pump Breaker Keeps Tripping: Causes & Fixes
- York Heat Pump Not Heating: Causes, Fixes & Costs
- York Heat Pump Not Cooling: Causes, Fixes & Costs
- York Heat Pump Blowing Cold Air in Heat Mode: Fixes
- York Heat Pump Aux Heat On Constantly: Causes & Fixes
- York Heat Pump Short Cycling: Causes, Fixes & Costs
- York Heat Pump Frozen, Not Defrosting: Causes & Fixes

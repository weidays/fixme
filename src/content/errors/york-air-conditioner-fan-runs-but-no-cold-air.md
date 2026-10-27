---
title: "York AC Fan Runs But No Cold Air: Causes & Fixes"
code: "Fan runs but no cold air"
description: "York AC fan runs but blows warm air? Learn the causes (capacitor, contactor, compressor, refrigerant), safe checks, and repair costs from $0 to $2,500+."
brand: york
equipment: air-conditioner
severity: pro
costRange: "$0 DIY – $350 for a capacitor or contactor, $1,800–$3,500+ if the compressor fails"
appliesTo: "York split-system central air conditioners (LX, Affinity, and older YC/YH series). Single-stage units use a simple contactor and run capacitor; two-stage and variable-speed Affinity models use communicating or inverter controls that may log fault codes on the outdoor board, so diagnosis steps differ by model."
tags:
  - york
  - air-conditioner
  - warm-air
  - compressor
  - capacitor
  - contactor
  - no-cooling
parts:
  - name: "Replacement HVAC air filter"
    search: "furnace air filter MERV 8 16x25x1"
  - name: "AA/AAA thermostat batteries"
    search: "lithium AA batteries thermostat"
datePublished: 2026-10-27
dateModified: 2026-10-27
reviewedBy: ""
faq:
  - q: "Why does my York AC blow air but not cold air?"
    a: "The indoor blower is running, but the outdoor compressor isn't. The usual reasons are a tripped outdoor breaker or disconnect, a failed run capacitor, a stuck or burned contactor, or a compressor that is overheating or has failed."
  - q: "Can I keep running the fan if the AC isn't cooling?"
    a: "Set the thermostat to OFF, or set the fan to ON with cooling off. Repeatedly calling for cooling while the outdoor unit hums without starting can overheat the compressor and turn a cheap capacitor repair into an expensive one."
  - q: "Is a bad capacitor covered under York warranty?"
    a: "York's standard limited warranty usually covers functional parts like capacitors for 5 years, or 10 years if the unit was registered on time. Labor is normally not covered unless you bought an extended labor plan."
  - q: "How do I know if the outdoor unit is running?"
    a: "Stand next to the condenser during a cooling call. You should hear the compressor hum, feel warm air blowing up out of the top fan, and see the larger copper line feel cool. If it's silent, or it hums but the fan doesn't turn, the outdoor unit isn't cooling."
---

## What this code means

"Fan runs but no cold air" isn't a stored fault code. It's a symptom. The indoor blower (in your furnace or air handler) is moving air through the vents, but the outdoor condensing unit isn't removing heat. Nearly always, the compressor isn't running, or it's running without refrigerant moving properly.

This page covers the specific case where **air flows normally from the vents but is room temperature or warm**. Other situations have their own pages:

- Weak airflow with ice on the lines: see "York AC Frozen Evaporator Coil."
- Cool air that just doesn't keep up: see "York AC Not Cooling."
- Compressor humming but the top fan not turning: see "York AC Outdoor Fan Not Spinning."

On single-stage York units there's no fault memory. The condition continues until the cause is fixed. On communicating Affinity systems, the outdoor control board or thermostat may display a specific fault such as a high-pressure, low-pressure, or compressor lockout. Some of these lockouts clear on their own after a timed delay, while others hold until power is cycled. This varies by model, so check your installation manual or the thermostat's fault screen.

## Common causes, ranked by probability

1. **Outdoor power is off.** The condenser has its own breaker and an outdoor disconnect box. The indoor blower runs on a separate circuit, so the fan keeps working while the outdoor unit sits dead.
2. **Failed run capacitor.** This is the most common component failure on York condensers, especially after summer heat waves. The compressor hums or clicks but won't start, and it often trips on its internal overload.
3. **Bad contactor or no 24V signal to it.** Possible causes include:
   - Pitted or burned contacts
   - Ants or debris between the contacts
   - A failed coil
   - A broken low-voltage wire between the air handler and the condenser (string trimmers and pests are common culprits)
4. **Compressor thermal overload tripped.** A dirty condenser coil, a failed outdoor fan, or a weak capacitor makes the compressor overheat. It shuts itself off and restarts after it cools, often 30 minutes to a few hours later.
5. **Pressure switch or safety lockout.** Many York models include high- and/or low-pressure switches. A low refrigerant charge (from a leak) or a blocked coil can open them, which stops the compressor.
6. **Thermostat or control wiring fault.** The thermostat calls for the fan (G) but not for cooling (Y). This can come from a setup error, a failed thermostat, or a loose Y wire.
7. **Failed compressor.** It may have shorted or grounded windings, or a locked rotor. This is the least common cause, but the most expensive, and it's more likely on units older than 12–15 years.

## Safe checks before you call anyone

1. **Thermostat.**
   - Confirm it's set to COOL, not FAN or AUTO-fan only.
   - Set it at least 3°F below room temperature.
   - Replace the batteries if the display is dim or blank.
   - Wait 5 minutes. Most thermostats and York boards have a short-cycle delay of about 5 minutes before the compressor is allowed to start.
2. **Breakers.**
   - Check the main panel for a tripped AC/condenser breaker. It's usually a 2-pole breaker rated 20–50A.
   - Reset it **once**. If it trips again, stop and call a technician. A repeat trip points to a capacitor, compressor, or wiring fault.
3. **Outdoor disconnect.** Make sure the pull-out block or lever in the box near the condenser is fully seated in the ON position.
4. **Air filter.** Replace it if it's dirty. A badly clogged filter can lead to coil icing and pressure trips.
5. **Outdoor unit clearance.** Clear leaves, grass clippings, and debris from around the condenser. Keep about 2 feet clear on all sides. Don't open the unit's panels.
6. **Condensate safety switch.** If your system has a float switch on the drain pan or drain line and the pan is full, it may be cutting off cooling.
   - Clear the drain line's outside opening.
   - Use a wet/dry vac at the drain outlet.
7. **Give it a rest.** Turn cooling off for 30–60 minutes. If the compressor tripped on its thermal overload, it may restart once it cools. If it does, still book service, because something made it overheat.

**Don't** poke a stick at the contactor, push it in by hand, or tap the capacitor. Those are live 240V components inside the cabinet.

## How a technician will diagnose it

A good tech should work through these steps in roughly this order:

1. **Confirm the thermostat call.** They'll verify 24V on the Y and C wires at the condenser contactor coil.
2. **Check the contactor.**
   - Line voltage in and out (about 240V)
   - Condition of the contacts
   - Coil resistance
3. **Test the capacitor.** They'll measure its microfarads against the label rating, typically 35/5 to 60/5 µF dual-run on York units. A reading more than about 6% under the rating is a fail.
4. **Test the compressor.**
   - Measure winding resistance (common–start–run) and check for a short to ground.
   - Check whether the internal overload is open and the shell is hot.
   - Measure amp draw on startup. Locked-rotor amps that persist mean a stuck compressor.
5. **Check refrigerant pressures, only if the compressor runs.** They'll check superheat and subcooling with gauges or digital probes. A low charge means there's a leak. Topping off without a leak search is a red flag on the quote.
6. **Read the board.** On communicating or inverter Affinity models, they'll read fault history from the outdoor board or thermostat.
7. **Inspect for root causes.** This includes a dirty condenser coil, a failed outdoor fan motor, and damaged low-voltage wiring.

Be skeptical if someone condemns the compressor without showing you resistance or ground readings, or without first trying a known-good capacitor or a hard-start kit.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor unit completely silent | Breaker or disconnect off, or no 24V signal | Reset the breaker once and check the disconnect | Trace low-voltage wiring and test the transformer and contactor coil |
| Outdoor unit hums, fan doesn't spin, then goes quiet | Failed run capacitor | Turn cooling off to protect the compressor | Test and replace the capacitor |
| Clicking at the condenser, no start | Contactor fault or capacitor | Turn cooling off | Replace the contactor and/or capacitor |
| Runs a while, stops, restarts hours later | Compressor thermal overload | Clear debris and replace the filter | Clean the coil, check the fan motor, capacitor, and charge |
| Fan on top spins, air still warm, ice or frost on lines | Low refrigerant or pressure trip | Replace the filter and turn cooling off to thaw | Leak search, repair, evacuate, recharge |
| Thermostat shows cooling but nothing outside happens | Thermostat setup or loose Y wire | Check the mode and replace batteries | Check thermostat wiring and configuration |
| Breaker trips immediately on cooling call | Shorted compressor or wiring | Do not keep resetting | Megger or ohm-test the compressor, inspect wiring |

## Repair costs

These are typical installed prices in the US, including parts and labor.

| Repair | Typical cost |
|---|---|
| Service call / diagnostic | $75 – $200 |
| Run capacitor replacement | $120 – $350 |
| Contactor replacement | $150 – $350 |
| Hard-start kit | $150 – $400 |
| Low-voltage wire repair | $100 – $300 |
| Condenser coil cleaning | $100 – $250 |
| Pressure switch replacement | $200 – $450 |
| Refrigerant leak search + repair + recharge | $400 – $1,500+ (R-410A or R-454B; older R-22 units cost more) |
| Outdoor control board (communicating/inverter models) | $400 – $1,000 |
| Compressor replacement | $1,800 – $3,500+ (parts may be under warranty; labor and refrigerant usually aren't) |
| Full condenser replacement | $3,500 – $7,500+ |

If your York unit is more than 12–15 years old and the compressor has failed, get a replacement quote alongside the repair quote.

## Related codes

- York AC Not Cooling: Causes, Fixes & Repair Costs
- York AC Frozen Evaporator Coil: Causes, Fixes & Costs
- York AC Outdoor Fan Not Spinning: Causes, Fixes & Costs
- York Heat Pump Compressor Not Running: Causes & Fixes
- York Heat Pump Breaker Keeps Tripping: Causes & Fixes
- York Furnace Blower Won't Shut Off: Causes & Fixes

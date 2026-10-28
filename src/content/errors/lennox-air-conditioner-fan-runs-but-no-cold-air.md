---
title: "Lennox AC Fan Runs But No Cold Air: Causes & Fixes"
code: "Fan runs but no cold air"
description: "Lennox AC fan runs but blows warm air? Learn the likely causes (capacitor, contactor, refrigerant, compressor), safe checks, and repair costs."
brand: lennox
equipment: air-conditioner
severity: pro
costRange: "$0 DIY – $150-$450 for a capacitor or contactor, $1,800-$4,500+ for a compressor"
appliesTo: "Lennox split-system central ACs (Merit ML14XC1/ML17XC1, Elite EL16XC1/EL18XCV, Signature SL18XC1/XC21/SL25XCV) with Lennox or third-party indoor blowers. Newer R-454B Lennox models follow the same diagnostic logic. Diagnostic outputs vary by outdoor control. Some basic single-stage Merit units have none. Units with an LSOM (Lennox System Operation Monitor) or an outdoor control board show LED or display codes. Communicating iComfort/S30/S40 systems may also show alerts on the thermostat. Homeowners can read outdoor LED or display codes through the service-panel window only if the unit has one. Otherwise a technician reads them."
tags:
  - lennox
  - air-conditioner
  - no-cold-air
  - warm-air
  - capacitor
  - contactor
  - compressor
  - refrigerant-leak
parts:
  - name: "Replacement HVAC air filter (match your filter size)"
    search: "MERV 8 air filter 16x25x1"
  - name: "AA/AAA thermostat batteries"
    search: "AA lithium batteries thermostat"
datePublished: 2026-10-27
dateModified: 2026-10-27
reviewedBy: ""
faq:
  - q: "Why does my Lennox AC blow air but not cold air?"
    a: "The indoor blower is running, but the outdoor condenser (compressor and/or condenser fan) is not cooling. Start with the thermostat, because Fan On mode or a setpoint above room temperature is a common and quick-to-fix cause. Other common causes are a tripped outdoor disconnect or breaker, a failed run capacitor, a stuck or pitted contactor, low refrigerant from a leak, or a failed compressor."
  - q: "Is it safe to keep running the fan if there is no cold air?"
    a: "Running the fan alone in Fan On mode is harmless. Leaving the system in Cool mode while the outdoor unit hums without starting can overheat the compressor, though. Set the thermostat to Off until the outdoor unit is checked."
  - q: "Can I replace the capacitor myself?"
    a: "We recommend against it. Capacitors store a dangerous charge even with the power off, and the outdoor cabinet contains 240-volt wiring. Finding out whether the capacitor, contactor or compressor is at fault requires meter testing, which is technician work."
  - q: "Does the Lennox AC reset itself after this problem?"
    a: "There is no single error code for this symptom. If a breaker or disconnect tripped, cooling returns once it is reset. On communicating Lennox systems, some compressor protection alerts clear on their own after a timed delay. Others hold until power is cycled or a technician clears them. Mechanical failures such as a bad capacitor will not reset."
---

## What this code means

"Fan runs but no cold air" is a symptom, not a numbered Lennox error code. It means the indoor blower is moving air through your vents, but the refrigeration side of the system isn't producing cooling. The air feels room temperature or warm.

Once thermostat settings are ruled out, the problem almost always sits at or in the **outdoor unit**. Either the compressor isn't running, or it's running without enough refrigerant to cool. This page is narrower than our general "Lennox AC Not Cooling" guide and assumes airflow at the vents is normal.

- **Weak airflow or ice on the lines?** See "Lennox AC Frozen Evaporator Coil."
- **Outdoor fan is dead but you can hear the compressor?** See "Lennox AC Outdoor Fan Not Spinning."

**Communicating systems:** Lennox iComfort, S30 and S40 systems may show an alert on the thermostat, such as a high-pressure, low-pressure or compressor protection alert. Some of these clear on their own after a timed delay. Others lock out until power is cycled or a technician clears them. Behavior varies by outdoor control and firmware.

**Conventionally wired systems:** Diagnostic outputs vary by outdoor control.

- **No diagnostic output:** Some basic single-stage Merit units have none, so diagnosis relies on watching and listening to the outdoor unit.
- **LED or display codes:** Many Lennox condensers have an LSOM (Lennox System Operation Monitor) or an outdoor control board that shows LED flash codes or display alert codes, even when the unit is wired to a standard 24-volt thermostat. The two-stage XC21 and SL18XC1 are examples.
- **Reading the codes:** If your unit has a viewing window in its service panel, you can note the code through it. If there's no window, a technician reads the code. Do not remove the panel to look.

## Common causes, ranked by probability

1. **Thermostat setup issue (check this first).** The thermostat may be in Fan On rather than Cool, set above room temperature, have dead batteries, or be misconfigured after replacement. It isn't always the root cause, but it's very common with this symptom and takes a minute to rule out.
2. **Outdoor power interrupted.** A tripped AC breaker or a pulled or failed outdoor disconnect leaves the indoor blower running on its own circuit while the condenser sits dead.
3. **Failed run capacitor.** This is one of the most common component failures in AC condensers, especially after summer heat waves. The compressor may hum and trip on overload, and the outdoor fan may not start.
4. **Faulty contactor.** Pitted contacts, a burned coil, or insects jamming the contactor stop 240-volt power from reaching the compressor and fan.
5. **Low refrigerant from a leak.** The compressor runs, but the system produces little cooling. Common leak points are the evaporator coil, the line set and the service valves. A low-pressure switch, where fitted, may shut the compressor off.
6. **Low-voltage control problem.** Any of these means the outdoor unit never gets a call to cool:
   - a broken thermostat wire to the outdoor unit
   - a blown low-voltage fuse on the furnace or air handler board
   - a tripped high- or low-pressure switch
7. **Compressor failure.** The compressor may have an open or grounded winding, a locked rotor, or be stuck on internal overload. This is less common, but it's the most expensive cause.
8. **Inverter or outdoor control faults.** These are two different problems:
   - **Inverter faults** apply to the variable-capacity, inverter-driven EL18XCV and SL25XCV.
   - **Outdoor control board faults** apply to the XC21, which is a two-stage scroll unit, not inverter-driven.

   Either fault can stop the compressor. Depending on the system, it may show as an alert on a communicating thermostat or as an LED or display code at the outdoor unit.

## Safe checks before you call anyone

- **Thermostat:** Confirm the mode is **Cool** (not Fan On or Heat) and the setpoint is at least 3°F below room temperature. Replace the batteries if the display is dim or blank. On a new thermostat, check that it's set up for an AC system.
- **Look and listen at the outdoor unit while it's calling for cooling:**
  - Is the top fan spinning?
  - Do you hear the compressor running, or a loud hum?
  - Do you hear nothing at all?

  Note what you observe for the technician. **Do not open the panel.**
- **Outdoor unit status lights:** If the outdoor unit has a viewing window in its service panel, write down any flashing LED pattern or displayed code. If there's no window, leave the code for the technician to read.
- **Breakers:** At the main panel, check the double-pole AC breaker. If it's tripped, reset it **once**. If it trips again, leave it off and call a pro.
- **Outdoor disconnect:** Check that the disconnect box near the unit is fully closed, or that the pull-out block is inserted correctly. Only operate the external handle or block. Don't touch the wiring inside.
- **Communicating thermostat alerts:** If the thermostat shows an alert, write down the code. Cycling power once at the breaker is acceptable. Repeated resets of a compressor that keeps locking out are not.
- **Air filter:** A badly clogged filter can freeze the coil and reduce cooling. Replace it if it's dirty.
- **Condensate:** A clogged drain can trip a float or overflow switch, which shuts off cooling. If your system has one, clear the visible drain line or the outdoor drain outlet if it's accessible, and empty any safety pan.
- **Around the condenser:** Clear leaves, grass clippings and debris to give the unit at least 2 feet of clearance. Check that all exterior panels are seated.
- **Give it a break:** If the outdoor unit hums without starting, turn the thermostat to Off and call for service.

## How a technician will diagnose it

A competent tech should do most of the following. Use this list to sanity-check a quote.

1. **Confirm the call for cooling.** Measure 24 volts at the outdoor unit's Y and C terminals. On communicating systems, read the active and stored alerts from the thermostat or outdoor control. On conventional units with an LSOM or outdoor control board, read its LED or display codes.
2. **Check line voltage.** Measure about 240 volts at the disconnect and contactor. Inspect the contactor for pitting, burned contacts or debris.
3. **Test the run capacitor** with a meter against its microfarad rating. Lennox units typically use a dual capacitor rated for the compressor and fan.
4. **Check the compressor.**
   - Measure winding resistance between the common, start and run terminals, and check for a short to ground.
   - Measure amp draw on startup and while running.
   - Test whether the internal overload has tripped.
5. **Check refrigerant performance.** Connect gauges or probes and check suction and liquid pressures. Calculate superheat and subcooling against the Lennox charging chart on the unit.
6. **Leak search if low.** Use an electronic detector or bubble solution, and check the evaporator coil, line set and valves. A good tech fixes or identifies the leak before recharging. Topping off without a leak search is a red flag.
7. **Inspect the pressure switches** and low-voltage fuse. Look for wiring damage from rodents or string trimmers.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor unit completely silent | Thermostat setting, tripped breaker, disconnect, or no 24 V call | Check thermostat mode, reset breaker once, check disconnect | Trace voltage, check low-voltage fuse, wiring, pressure switches |
| Outdoor unit hums, fan doesn't spin, breaker may trip | Failed run capacitor or stuck compressor | Set thermostat to Off, call for service | Test and replace capacitor, test compressor windings |
| Clicking at outdoor unit but nothing starts | Faulty contactor; or the contactor pulls in but a failed capacitor or compressor keeps the compressor from starting | Turn system off | Inspect contactor, test capacitor and compressor, replace the failed part |
| Fan and compressor run, air only slightly cool | Low refrigerant or leak | Replace filter, clear debris around unit | Pressure, superheat and subcooling check, leak search, repair, recharge |
| Ice on copper line or indoor coil | Low refrigerant or airflow restriction | Change filter, run Fan only to thaw | Diagnose charge and airflow; see frozen coil guide |
| Outdoor fan spins, compressor silent or cycles off | Compressor overload, failed compressor, or capacitor | Turn system off, note pattern | Amp draw and winding test, compressor replacement quote |
| Alert code on iComfort/S30/S40 thermostat | Pressure, compressor, inverter or outdoor control fault | Note code, cycle power once | Read alert history, test per Lennox service manual |
| LED or display code visible through outdoor service-panel window | LSOM or outdoor control board alert | Note the code or flash pattern; do not open the panel | Interpret code, test per Lennox service manual |
| Thermostat shows Cool but no outdoor response after new thermostat | Wiring or configuration error | Verify settings and batteries | Correct wiring and Y-terminal connection |

## Repair costs

These are typical US price ranges, including parts and labor. Expect higher prices for emergency calls in peak summer.

| Repair | Typical cost |
|---|---|
| Service call and diagnosis | $90 – $200 |
| Breaker or disconnect replacement | $150 – $400 |
| Run capacitor (dual) | $150 – $450 |
| Contactor | $150 – $400 |
| Low-voltage fuse or thermostat wire repair | $100 – $300 |
| Pressure switch | $200 – $450 |
| Leak search | $200 – $600 |
| Refrigerant recharge (R-410A/R-454B, per job) | $250 – $900+ |
| Line set or valve leak repair | $300 – $1,500 |
| Evaporator coil replacement | $1,200 – $3,000 |
| Outdoor control board, or inverter control board on variable-speed models | $500 – $1,500 |
| Compressor replacement | $1,800 – $4,500+ |

**Warranty:** Lennox compressors often carry a 10-year limited warranty if the unit was registered, and 5 years if it wasn't. Labor is usually not covered unless you bought an extended plan.

**Repair or replace?** For a compressor failure in a unit more than 10–12 years old, get a replacement quote too. A new condenser typically costs $4,000 – $8,000+ installed.

## Related codes

- Lennox AC Not Cooling: Causes, Fixes & Repair Costs
- Lennox AC Frozen Evaporator Coil: Causes, Fixes & Costs
- Lennox AC Outdoor Fan Not Spinning: Causes, Fixes & Costs
- Lennox Heat Pump Compressor Not Running: Causes & Fixes
- Lennox Heat Pump Not Cooling: Causes, Fixes & Costs
- Lennox Heat Pump Breaker Keeps Tripping: Causes & Fixes
- Lennox Furnace Code E115: Low 24 VAC Causes & Fixes

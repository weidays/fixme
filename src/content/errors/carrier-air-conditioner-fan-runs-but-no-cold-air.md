---
title: "Carrier AC Fan Runs But No Cold Air: Causes & Fixes"
code: "Fan runs but no cold air"
description: "Carrier AC fan runs but blows warm air? Causes like a failed capacitor, contactor or refrigerant leak, safe checks, and repair costs from $0 to $3,000+."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY – $150-$450 for a capacitor or contactor, $1,500-$3,500+ for a compressor"
appliesTo: "Carrier split-system central ACs, including the Comfort, Performance and Infinity series with single-stage, two-stage and variable-speed outdoor units. Communicating Infinity and Infinity-compatible systems may also log fault codes at the thermostat or on the outdoor board. Fault codes and lockout behavior vary by model and control board."
tags:
  - carrier
  - air-conditioner
  - fan-runs-no-cold-air
  - warm-air
  - outdoor-unit-not-running
  - capacitor
  - contactor
parts:
  - name: "Replacement HVAC air filter"
    search: "Carrier furnace air filter MERV 8 16x25x1"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
datePublished: 2026-10-27
dateModified: 2026-10-27
reviewedBy: ""
faq:
  - q: "Why does my Carrier AC blow air but not cold air?"
    a: "The indoor blower runs, but the outdoor condenser is not removing heat. The usual reasons are a tripped outdoor breaker or disconnect, a failed run capacitor or contactor, a broken low-voltage wire to the outdoor unit, a refrigerant leak, or a failing compressor."
  - q: "Can I fix this myself?"
    a: "You can check the thermostat mode and setpoint, replace the batteries, change the filter, and confirm the outdoor breaker and disconnect are on. Capacitors, contactors, wiring and refrigerant are high-voltage or EPA-regulated work for a technician."
  - q: "Is it safe to keep running the system with only the fan on?"
    a: "Running only the fan is not harmful, but it will not cool the house. If the outdoor fan runs while the compressor hums or stays silent, shut cooling off at the thermostat. Continued attempts to start a struggling compressor can overheat it."
  - q: "Will the system reset on its own?"
    a: "It depends on the cause. A tripped high- or low-pressure switch on some Carrier models resets automatically. Communicating Infinity boards may lock out after repeated faults until power is cycled. A failed part will not reset on its own."
---

## What this code means

"Fan runs but no cold air" is not a numbered Carrier fault code. It describes a symptom: the indoor blower moves air through the vents, but the air is room temperature or warm.

In almost every case, the indoor side is working and the outdoor side is not. Either the condenser unit is not running at all, or it is running without actually moving heat.

This page focuses on that specific split. The blower works, but the outdoor compressor or refrigeration circuit does not.

- If the air is only slightly cool and the system runs for long periods, see the broader "Carrier AC Not Cooling" guide.
- If you see ice on the indoor coil or refrigerant lines, see "Carrier AC Frozen Evaporator Coil."
- If the compressor hums but the outdoor fan blade is still, see "Carrier AC Outdoor Fan Not Spinning."

## Common causes, ranked by probability

1. **Failed run capacitor (dual capacitor).** This is the most common Carrier service call for this symptom. The outdoor unit may hum, click, or do nothing at all, and often the compressor and fan both stop. Capacitors often fail after heat waves.
2. **Failed or pitted contactor.** The contactor is the relay that powers the outdoor unit. Burned contacts, or insects and debris between the contacts, keep the unit from starting even when the thermostat is calling for cooling.
3. **No power to the outdoor unit.** The outdoor breaker may be tripped, the disconnect at the unit may be pulled or switched off, or a fuse in the disconnect may be blown.
4. **Broken or loose low-voltage control wiring.** The thermostat wire to the condenser can be chewed by rodents, cut by a trimmer, or corroded at a splice. When that happens, the outdoor unit never receives the call to cool.
5. **Tripped safety switch or board lockout.** A high- or low-pressure switch may have opened. On some Carrier and Infinity models, the outdoor control board locks out after repeated pressure trips. Behavior varies: some reset automatically, while others hold the lockout until power is cycled.
6. **Low refrigerant from a leak.** The unit runs but the air is barely cool or warm, and the low-pressure switch may shut the compressor down. Refrigerant does not get used up, so low refrigerant always means there is a leak.
7. **Compressor failure.** The compressor may have an internal overload trip, a seized compressor, or open or shorted windings. Suspect this when the capacitor and contactor test good.
8. **Thermostat or communication issues.** The thermostat may be set to Fan On or to Heat, or its batteries may be dead. On Infinity systems, a communication fault between the thermostat and outdoor unit can cause this, and the thermostat usually displays a message.

## Safe checks before you call anyone

- **Thermostat:** Set it to **Cool**, set the fan to **Auto** rather than On, and lower the setpoint at least 3°F below room temperature. Replace the batteries if it has them. On Infinity or Côr controls, read any message on the screen and write it down for the technician.
- **Wait out the delay:** Many Carrier thermostats and boards have a built-in compressor delay of about 5 minutes. Give the system 5–10 minutes after changing settings before deciding it has failed.
- **Breakers:** Check the panel for **two** breakers, one for the furnace or air handler and one for the outdoor AC. Reset a tripped AC breaker **once**. If it trips again, leave it off and call a technician.
- **Outdoor disconnect:** Confirm the pull-out block or switch near the outdoor unit is fully seated or switched on. Do not open the condenser cabinet.
- **Air filter:** Replace the filter if it is dirty. A clogged filter can cause icing and poor airflow.
- **Look and listen outside, from a distance:**
  - Note whether the outdoor fan spins.
  - Note whether the unit is silent, humming, or clicking.
  - Check whether the large refrigerant line feels cool after 10 minutes.

  Tell your technician what you observed.
- **Condensate:** If the drain pan is full or the float switch has tripped, some systems shut off cooling. Clear the visible condensate line opening or the drain-pan standing water if it is accessible without opening the cabinet.
- **One power reset:** Turn the system off at the thermostat and the breakers for 5 minutes, then restore power. This is a single reset to clear a possible board lockout. Do not repeat it.

## How a technician will diagnose it

- **Confirm the call for cooling:** Measure 24V across the Y and C wires at the outdoor unit to show whether the thermostat signal reaches the condenser.
- **Check the contactor:** Verify the coil pulls in and check for burned or pitted contacts. Measure line voltage in and out.
- **Test the capacitor:** Discharge it safely and measure microfarads against the rating on its label. A reading outside about ±6% means replacement.
- **Check the compressor:** Measure amperage on startup and while running. Test winding resistance (C-S, C-R, S-R) and check for a short to ground. Let the unit cool if the internal overload is open.
- **Read the outdoor control board:** Pull any flash codes or the Infinity fault history, such as pressure-switch trips or lockouts.
- **Check refrigerant charge:** Use gauges or digital probes to measure pressures, superheat and subcooling. If the charge is low, perform a leak search with an electronic detector or bubble test before recharging.
- **Check the low-voltage wiring:** Inspect the wire run for damage between the indoor and outdoor units.

**Red flag on a quote:** someone who adds refrigerant without finding the leak, or who condemns the compressor without testing the capacitor and contactor first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor unit completely silent | Tripped breaker, pulled disconnect, broken thermostat wire, bad contactor coil | Check thermostat settings, reset the breaker once, seat the disconnect | Test 24V and line voltage, repair wiring, replace contactor |
| Outdoor unit hums but nothing spins | Failed run capacitor | Shut cooling off at the thermostat | Test and replace the capacitor |
| Outdoor unit clicks repeatedly, won't start | Pitted contactor, weak capacitor, compressor overload | Turn cooling off and call | Replace the contactor or capacitor, test the compressor |
| Outdoor fan runs, air is warm, large line not cold | Compressor off on overload or failed, very low refrigerant | Turn cooling off to protect the compressor | Test windings and amps, leak search and repair, recharge |
| Runs a few minutes then stops cooling | Pressure switch trip or board lockout | One power reset, replace the filter | Read fault history, check charge and airflow |
| Breaker trips when the unit starts | Shorted compressor or capacitor | Leave the breaker off | Insulation and winding tests, replace parts |
| Infinity thermostat shows a fault message | Communication or outdoor board fault | Note the message, do one power reset | Diagnose the communication bus or board |

## Repair costs

Typical US ranges, including parts and labor:

| Repair | Typical cost |
|---|---|
| Service call / diagnosis | $90–$200 |
| Run capacitor replacement | $150–$450 |
| Contactor replacement | $150–$400 |
| Low-voltage wire repair or replacement | $150–$500 |
| Pressure switch replacement | $200–$500 (more if refrigerant recovery is required) |
| Outdoor control board, Infinity or variable-speed | $400–$1,200 |
| Leak search and repair plus recharge (R-410A or R-454B) | $400–$1,500+ (depends on leak location and refrigerant type) |
| Compressor replacement | $1,500–$3,500+ (often warranty parts on newer registered units, labor extra) |
| Full condenser replacement, if the compressor is out of warranty on an older unit | $3,500–$8,000+ |

Check your Carrier registration. Registered units commonly carry a 10-year parts limited warranty that covers the compressor and capacitor.

## Related codes

Carrier AC Not Cooling: Causes, Fixes & Repair Costs
Carrier AC Frozen Evaporator Coil: Causes, Fixes & Costs
Carrier AC Outdoor Fan Not Spinning: Causes & Fixes
Carrier Heat Pump Compressor Not Running: Causes & Fixes
Carrier Heat Pump Not Cooling: Causes, Fixes & Costs
Carrier Heat Pump Breaker Keeps Tripping: Causes & Fixes

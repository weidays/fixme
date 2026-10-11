---
title: "Trane Heat Pump Blowing Cold Air in Heat Mode: Fixes"
code: "Blowing cold air in heat mode"
description: "Why a Trane heat pump blows cool air on heat: defrost, reversing valve, low charge, thermostat setup. Safe checks, fixes and $0–$2,500 repair costs."
brand: trane
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $2,500+ if the reversing valve or compressor needs replacement"
appliesTo: "Trane split heat pumps (XR, XL, XV series and current 4TWR/4TWX/4TWV models) with air handlers or furnaces. Defrost behavior differs by defrost board, and diagnostics differ on communicating XV/ComfortLink systems. Supply air temperature also varies with outdoor temperature."
tags:
  - trane
  - heat-pump
  - blowing-cold-air
  - reversing-valve
  - defrost
  - thermostat
parts:
  - name: "HVAC air filter (correct size for your return)"
    search: "MERV 8 HVAC air filter 16x25x1"
  - name: "Thermostat AA/AAA batteries"
    search: "AA alkaline batteries thermostat"
  - name: "Heat pump compatible thermostat"
    search: "heat pump compatible programmable thermostat O/B"
datePublished: 2026-10-11
dateModified: 2026-10-11
reviewedBy: ""
faq:
  - q: "Is it normal for a Trane heat pump to blow air that feels cool?"
    a: "Often, yes. Heat pumps usually deliver air around 85–100°F, which is cooler than skin temperature and can feel drafty. It is a problem when the air at the register is near room temperature or colder and the house keeps losing ground."
  - q: "Why does my heat pump blow cold air for a few minutes and then go back to heating?"
    a: "That is usually a defrost cycle. The unit briefly switches to cooling mode to melt frost off the outdoor coil. Auxiliary or furnace heat normally runs during defrost to temper the air. Short bursts of cool air in frosty weather are normal. Long or constant cold air is not."
  - q: "Can a thermostat cause a heat pump to blow cold air in heat mode?"
    a: "Yes. After a thermostat replacement, a wrong reversing-valve setting is a very common cause. Trane uses an O (energize-to-cool) reversing valve, so the thermostat must be set to O, not B. If it is set to B, the system cools when you call for heat."
  - q: "Does this have a blinking error code?"
    a: "Usually not. Most Trane heat pumps do not post a specific fault for this symptom. Communicating XV and ComfortLink systems may log alerts on the thermostat or outdoor control, and a technician can read those."
---

## What this code means

"Blowing cold air in heat mode" is a symptom, not a numbered Trane fault. The thermostat calls for heat, the indoor blower runs, but the air at the registers is cool or room-temperature.

Most standard Trane heat pumps will not show a flash code for this. Communicating systems (XV/ComfortLink, 4TWV) may log an alert. There is nothing to reset. The condition continues until its cause is corrected.

Two things separate this page from related topics:

- **Not heating** covers a system that produces no heat at all, or will not run.
- **The furnace version of this symptom** covers burner and ignition problems.

This page covers a heat pump that runs but moves heat the wrong way or too weakly. Typical causes are:

- defrost operation
- a reversing valve that is stuck or not being commanded correctly
- low refrigerant charge
- a thermostat set up wrong
- auxiliary heat that is not supplementing during defrost or very cold weather

## Common causes, ranked by probability

1. **Normal heat pump air temperature or a normal defrost cycle.** Supply air of 85–100°F feels cool. During defrost, the unit runs in cooling mode for a few minutes, usually 2–10. If aux heat does not engage during defrost, you get cold air for that period.
2. **Thermostat setup or mode error.** Common versions:
   - The thermostat is set to "Cool," or to "Fan On" between cycles.
   - A new thermostat is configured for a B reversing valve instead of O. Trane uses O.
   - The thermostat is set up as conventional rather than heat pump, so it never energizes the compressor in heat.
3. **Reversing valve or its control.** Possible faults:
   - a failed solenoid coil
   - a valve stuck in the cooling position
   - an O-wire fault that keeps the valve energized
4. **Low refrigerant charge (leak).** The unit runs but delivers only lukewarm air. This often comes with icing patterns or long run times.
5. **Outdoor unit not actually running.** The indoor blower runs, but the compressor or outdoor fan does not. Causes include:
   - a tripped outdoor breaker or disconnect
   - a failed capacitor or contactor
   - a low-voltage fault

   The air you feel is just room air being circulated.
6. **Auxiliary or emergency heat not working.** Electric heat strips, sequencers, limits, or the aux wiring have failed. The heat pump alone cannot keep up in cold weather or during defrost.
7. **Severe airflow restriction or a frozen outdoor coil.** A clogged filter, a blocked coil, or a coil that will not defrost all reduce heat output. Defrost failures are covered on their own pages.
8. **Compressor failure.** This is less common. The outdoor fan runs but the compressor does not pump, or it trips on internal overload.

## Safe checks before you call anyone

- **Thermostat.** Confirm it is set to "Heat" (not Cool or Auto) and the fan is on "Auto," not "On." Raise the setpoint 3–5°F above room temperature.
- **Thermostat batteries.** Replace them if the display is dim or blank.
- **Recent thermostat swap.** If the thermostat was recently replaced, check its installer menu. It should be set for a heat pump with an "O" reversing valve, energized in cool. Do not rewire anything. If the settings look wrong and you are unsure, call the installer.
- **Feel the air and watch the outdoor unit.** Wait 10 minutes after a heat call. Is the outdoor fan spinning, and can you hear the compressor? If cold air stops after a few minutes with steam rising off the outdoor unit, that was a defrost cycle.
- **Air filter.** Replace it if it is dirty.
- **Breakers.** Check the breakers for the outdoor unit and the air handler. The air handler may have a separate breaker for the heat strips. Reset a tripped breaker **once**. If it trips again, stop and call a technician.
- **Outdoor disconnect.** Confirm the disconnect switch near the outdoor unit is on.
- **Clearance around the outdoor unit.** Clear snow, leaves, or debris from around and on top of it, keeping about 2 feet of clearance. Do not chip ice off the coil.
- **Registers and returns.** Make sure supply registers are open and returns are not blocked.
- **Condensate drain.** Confirm the drain line is not overflowing or tripping a float switch, which can shut the system down.
- **Access panels.** Make sure the air handler panels are seated firmly.

## How a technician will diagnose it

- **Read alerts.** On communicating systems, the tech will check stored alerts on the thermostat or outdoor control.
- **Measure temperature split.** The tech measures supply and return air temperatures. A healthy heat pump typically shows a 20–30°F rise, depending on outdoor temperature.
- **Check thermostat signals.** At the outdoor unit, the tech verifies 24V on Y (compressor) and confirms O is *de-energized* in heat. Voltage on O in heat mode points to the thermostat or wiring. No voltage on O while the system still cools points to the reversing valve.
- **Test the reversing valve.** The tech checks coil resistance and whether the valve shifts when the coil is energized, using temperature changes across the valve lines. A stuck valve may get a pressure/tap test before a replacement is recommended.
- **Check refrigerant charge.** Gauges or digital probes measure pressures, superheat, and subcooling. A low charge leads to a leak search. Topping off without finding the leak is a red flag.
- **Check the outdoor electricals.** The tech tests the capacitor, contactor, and compressor amp draw, and checks for an overload trip.
- **Test aux heat.** Heat strip amperage, sequencers, limits, and the W/aux call are verified, especially for cold air during defrost.
- **Check defrost controls.** The tech checks the defrost board and sensor operation if cold periods are long or frequent.

Expect a clear explanation of which test pointed to the failed part. "Needs Freon" without leak testing deserves a second opinion.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Air lukewarm (85–95°F), house holding temperature | Normal heat pump output | None; check the filter | None needed |
| Cold air for a few minutes, steam from outdoor unit | Defrost cycle without aux heat | Note how often and how long | Test heat strips, sequencers, and defrost aux call |
| Cold air constantly after a new thermostat | O/B or heat pump setting wrong | Check mode and installer settings; call the installer | Reconfigure or rewire the thermostat |
| Cold air, outdoor unit silent | Tripped breaker or disconnect, contactor, capacitor | Check the breaker and disconnect; reset once | Test and replace the capacitor or contactor; diagnose low voltage |
| Unit runs but blows cool, as if in AC mode | Reversing valve coil or stuck valve | Confirm thermostat is in Heat | Test the coil; replace the coil or valve |
| Lukewarm air, long runs, odd frosting | Low refrigerant / leak | Replace the filter; clear around the unit | Leak search, repair, evacuate, recharge |
| Fine in mild weather, cold in deep cold | Aux heat failure | Check the air handler breaker | Repair heat strips, limits, or sequencer |
| Outdoor coil encased in ice | Defrost failure / airflow | Clear snow and debris only | Defrost board/sensor diagnosis |

## Repair costs

Typical US ranges, including parts and labor:

| Item | Typical cost |
|---|---|
| Diagnostic visit | $90–$200 (more on nights and weekends) |
| Thermostat reconfiguration | $0 DIY; $90–$200 service call |
| New thermostat | $50–$300 for the part; $150–$450 installed |
| Capacitor | $150–$400 |
| Contactor | $150–$350 |
| Reversing valve solenoid coil | $150–$400 |
| Reversing valve replacement (brazing and refrigerant recovery/recharge) | $900–$2,000 |
| Leak search and repair with recharge | $300–$1,500+ (depends on location and refrigerant: R-410A, or R-454B on newer units) |
| Heat strip element or sequencer | $200–$700 |
| Defrost control board | $300–$700 |
| Defrost sensor | $150–$350 |
| Compressor replacement | $1,800–$3,500+ |

Warranty coverage often pays for Trane parts but not labor. If the unit is older or the compressor has failed, weigh repair against replacement.

## Related codes

- Trane Heat Pump Not Heating: Causes, Fixes & Costs
- Trane Heat Pump Aux Heat On Constantly: Causes & Fixes
- Trane Heat Pump Frozen, Not Defrosting: Causes & Fixes
- Trane Heat Pump Stuck in Defrost Mode: Causes & Fixes
- Trane Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Trane Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Trane Furnace Blowing Cold Air: Causes, Fixes & Costs (for dual-fuel systems using a gas furnace backup)

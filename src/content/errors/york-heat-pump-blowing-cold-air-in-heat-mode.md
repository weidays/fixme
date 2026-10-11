---
title: "York Heat Pump Blowing Cold Air in Heat Mode: Fixes"
code: "Blowing cold air in heat mode"
description: "York heat pump blowing cold air in heat mode? Learn the causes (reversing valve, defrost, refrigerant, thermostat), the fixes, and repair costs."
brand: york
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $2,500+ if the reversing valve or compressor needs replacement"
appliesTo: "York split-system heat pumps, including YZH, YHE, YHJD, YZV and older single-stage and two-stage lines. Defrost timing, defrost board style (time-temperature vs. demand defrost) and whether the indoor unit is a York air handler or a gas furnace (dual fuel) vary by model. Communicating Hx/Affinity systems may show additional fault codes on the thermostat or control board."
tags:
  - york
  - heat-pump
  - blowing-cold-air
  - reversing-valve
  - defrost
  - refrigerant
  - thermostat
parts:
  - name: "Replacement HVAC air filter"
    search: "HVAC air filter MERV 8 furnace air handler"
  - name: "AA/AAA thermostat batteries"
    search: "AA lithium batteries thermostat"
  - name: "Heat pump compatible programmable thermostat"
    search: "heat pump compatible thermostat with O/B reversing valve terminal"
datePublished: 2026-10-10
dateModified: 2026-10-10
reviewedBy: ""
faq:
  - q: "Is it normal for my York heat pump to blow cool air sometimes in winter?"
    a: "Briefly, yes. Heat pump supply air is often only 85–100°F, which feels cool on your hand compared with furnace air. During a defrost cycle the system also runs in cooling mode for a few minutes. The auxiliary heat strips usually temper that air, but on some installs it can still feel cool. Constant cold air that lasts beyond about 10–15 minutes is not normal."
  - q: "Why does my York heat pump blow cold air only when it's very cold outside?"
    a: "As the outdoor temperature drops, a heat pump's capacity and supply air temperature both fall. If the auxiliary (backup) heat is not wired, is not staged on by the thermostat, or has a failed element or breaker, the air can feel cold in severe weather even though the heat pump itself is working."
  - q: "Can a wrong thermostat setting make a heat pump blow cold air?"
    a: "Yes. If a new or replacement thermostat is configured for a conventional system instead of a heat pump, or has the reversing valve (O/B) setting reversed, the unit can run in cooling when you call for heat. York heat pumps normally energize the reversing valve in cooling (O setting). A technician should confirm the setting against your wiring."
  - q: "Should I keep resetting my heat pump if it blows cold air?"
    a: "No. Cycle the breaker or thermostat once to see whether the system recovers. If it still blows cold, leave it in heat or emergency heat as appropriate and call a technician. Repeated resets can stress a compressor that is already having trouble starting or running."
---

## What this code means

"Blowing cold air in heat mode" is a symptom, not a stored fault code. It means the indoor blower runs on a heat call, but the air from the registers is cool or room temperature instead of warm. On a York heat pump, the outdoor unit must do three things to make heat:

- Run the compressor.
- Shift the reversing valve into heating position.
- Move enough refrigerant through the system.

If any of those fails, or the system runs in defrost (cooling mode) too often, the indoor blower can still move air. That air just isn't heated.

A few points to know first:

- **Heat pump air feels cooler than furnace air.** Supply air of about 85–100°F is normal and can feel "cool" on a wet or cold hand.
- **Short cool spells during defrost are normal.** They usually last 2–10 minutes, depending on the defrost board.
- **There is usually no lockout to clear.** Most York heat pumps don't latch a fault for this symptom.
  - If the outdoor control board has a high- or low-pressure switch lockout, many York boards retry on their own and then hold a lockout after repeated trips.
  - That lockout typically clears when power is cycled or the thermostat call is removed. The exact behavior varies by board, so check the wiring diagram label inside your unit's panel (a technician will read it).
- **If the outdoor unit isn't running at all, or there's no heat of any kind,** see the related "Not heating" page.

## Common causes, ranked by probability

1. **Thermostat setup or settings.** The thermostat may be set to Cool or Fan, or configured as a conventional system rather than a heat pump. The reversing valve setting (O vs. B) may be wrong after a thermostat swap. York heat pumps use O (energized in cooling).
2. **Normal defrost cycle or low supply-air temperature in cold weather.** This can be mistaken for a fault, especially when auxiliary heat is not installed or not staged on.
3. **Outdoor unit not running while the indoor blower runs.** Possible reasons:
   - Tripped outdoor breaker or disconnect.
   - Failed run capacitor or contactor.
   - Compressor overload or pressure-switch trip.
4. **Low refrigerant charge from a leak.** Supply air is lukewarm, the system runs long, and the unit may ice up or trip low-pressure.
5. **Reversing valve stuck or its solenoid coil failed.** The system runs in cooling mode when heat is called for.
6. **Defrost control problem.** A faulty defrost board, coil sensor or thermostat can hold the unit in defrost or trigger defrost too often. See "Stuck in Defrost Mode."
7. **Auxiliary heat strip failure.** A failed element, sequencer, limit or heat-strip breaker means no backup heat in cold weather or during defrost.
8. **Severe airflow restriction or a frozen outdoor coil.** A dirty filter or a coil buried in ice cuts capacity sharply.
9. **Compressor failure.** Least common, but the most expensive.

## Safe checks before you call anyone

- **Thermostat mode and setpoint.** Confirm the thermostat is in Heat (not Cool, Auto or Fan On) and set at least 3°F above room temperature.
  - "Fan On" will blow unheated air between cycles. Switch it to Auto.
- **Thermostat batteries.** Replace them if the display is dim or blank, or shows a low-battery warning.
- **Wait out a defrost.** If the outdoor unit is steaming or quiet with its fan stopped, wait 10–15 minutes and recheck the air.
- **Breakers and disconnect.**
  - Check the heat pump breaker and the air handler and heat-strip breakers at the panel.
  - Check the outdoor disconnect switch.
  - Reset a tripped breaker once only. If it trips again, leave it off and call a technician.
- **Air filter.** Replace it if it's dirty. A clogged filter cuts heat delivery and can trip safeties.
- **Vents and registers.** Make sure supply and return grilles are open and not blocked by furniture or rugs.
- **Outdoor unit.** From the outside only, clear snow, leaves and debris away from the coil.
  - Don't chip ice off the coil.
  - Don't pour hot water on it.
- **Emergency heat.** If you need warmth while you wait for service, switch the thermostat to Emergency Heat (EM Heat). This runs the backup heat alone and is more expensive to operate.
- **Panels.** Make sure the air handler's access panels are seated properly.

## How a technician will diagnose it

Knowing these steps helps you judge whether a quote makes sense:

1. **Verify the call.** Checks thermostat configuration and wiring (Y, O/B, W/aux), confirms a heating call reaches the outdoor unit, and measures supply and return air temperatures.
2. **Confirm the outdoor unit is running.**
   - Checks voltage at the contactor.
   - Checks the capacitor with a meter.
   - Checks compressor amp draw.
   - Checks for pressure-switch trips or lockout flashes on the outdoor control board.
3. **Check the reversing valve.**
   - Verifies 24 VAC at the solenoid coil and coil resistance.
   - Measures temperatures across the valve lines.
   - May try to shift the valve electrically.
4. **Check the refrigerant charge.** Connects gauges and measures superheat and subcooling according to the York charging chart. If the charge is low, they should leak-search before adding refrigerant.
5. **Evaluate defrost.**
   - Tests the defrost board and coil sensor.
   - May force a defrost test (many York boards have test pins).
   - Confirms the unit exits defrost properly.
6. **Test auxiliary heat.** Measures heat-strip amperage and checks the sequencers or relays and the limits.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Cool air with outdoor unit off, indoor fan on | Thermostat in Fan On, tripped breaker, failed capacitor or contactor | Set fan to Auto; check breakers once | Test and replace capacitor or contactor, check compressor |
| Cold air right after a thermostat replacement | Wrong O/B or heat pump configuration | Check thermostat installer settings if documented | Correct wiring and configuration |
| Cold air for 2–10 min, outdoor unit steaming | Normal defrost | Wait it out | None unless it repeats very often |
| Cold air, outdoor unit runs, refrigerant lines cold in heat mode | Reversing valve stuck or coil failed | Use Emergency Heat; call for service | Test solenoid, replace coil or valve |
| Lukewarm air, long run times, icing | Low refrigerant / leak | Replace filter; clear debris around unit | Leak search, repair, recharge |
| Cold air only in very cold weather | Aux heat not working | Check heat-strip breaker once | Test elements, sequencers, limits |
| Unit runs then stops, repeats | Pressure-switch trips or lockout | One power reset only | Diagnose pressure fault, charge, fan motor |
| Loud hum, outdoor unit won't start | Capacitor or compressor fault | Turn off at breaker; call | Capacitor replacement or compressor diagnosis |

## Repair costs

| Repair | Typical US cost |
|---|---|
| Thermostat reconfiguration / service call | $100–$250 |
| New heat pump thermostat (DIY / installed) | $30–$250 / $150–$450 |
| Run capacitor | $150–$400 |
| Contactor | $150–$350 |
| Reversing valve solenoid coil | $150–$400 |
| Defrost control board | $300–$700 |
| Defrost sensor | $150–$350 |
| Heat strip element or sequencer | $250–$700 |
| Leak search plus recharge (R-410A) | $400–$1,500+ |
| Reversing valve replacement | $1,200–$2,500 |
| Compressor replacement | $1,800–$4,000+ |

Prices vary by region and refrigerant type. Warranty coverage also matters: York parts warranties often cover components, but labor is usually not covered unless you have a labor plan.

## Related codes

- York Heat Pump Not Heating: Causes, Fixes & Costs
- York Heat Pump Stuck in Defrost Mode: Causes & Fixes
- York Heat Pump Frozen, Not Defrosting: Causes & Fixes
- York Heat Pump Ice on Outdoor Unit: Causes & Fixes
- York Heat Pump Aux Heat On Constantly: Causes & Fixes
- York Furnace Blowing Cold Air: Causes, Fixes & Costs (for dual-fuel systems with a gas furnace)

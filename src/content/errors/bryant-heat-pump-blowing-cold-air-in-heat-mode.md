---
title: "Bryant Heat Pump Blowing Cold Air: Causes & Fixes"
code: "Blowing cold air in heat mode"
description: "Bryant heat pump blowing cold air in heat mode? Causes: defrost cycle, thermostat setup, reversing valve, low charge. Fixes and costs from $0 to $2,500+."
brand: bryant
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $2,500+ if the reversing valve or compressor needs replacement"
appliesTo: "Bryant split-system heat pumps (Legacy, Preferred and Evolution series) paired with a fan coil or furnace. Defrost behavior, fault reporting and thermostat setup differ between Evolution communicating systems and conventional 24V systems."
tags:
  - heat-pump
  - cold-air
  - heat-mode
  - reversing-valve
  - defrost
  - thermostat
parts:
  - name: "Replacement air filter (match your filter size)"
    search: "furnace air filter MERV 8 16x25x1"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
  - name: "Heat-pump-compatible programmable thermostat"
    search: "heat pump compatible programmable thermostat"
datePublished: 2026-11-18
dateModified: 2026-11-18
reviewedBy: ""
faq:
  - q: "Is it normal for a Bryant heat pump to blow cool air briefly in winter?"
    a: "Yes, sometimes. During a defrost cycle the outdoor unit temporarily runs in cooling mode to melt frost. Many systems bring on backup heat to temper the supply air, but you may still notice cooler air for a few minutes. If cold air continues well past 10–15 minutes, or happens on every cycle, something else is wrong."
  - q: "Why does heat pump air feel cool even when it's working?"
    a: "Heat pumps deliver air around 85–100°F, which is cooler than the 120°F+ from a gas furnace. Against your skin, air below body temperature can feel cool. Check whether the room is actually warming. If it is, the system is probably working normally."
  - q: "Can a wrong thermostat setting cause cold air in heat mode?"
    a: "Yes. The thermostat might be set to Cool or Fan On, or a replacement thermostat may be wired or configured for the wrong reversing valve energizing terminal (O vs B). Bryant heat pumps energize the reversing valve in cooling. If the setup is wrong, heating and cooling are swapped."
  - q: "Should I keep resetting the system if it keeps blowing cold air?"
    a: "No. One breaker or thermostat reset is reasonable. If cold air returns, repeated resets can stress the compressor and hide a refrigerant or reversing-valve problem. Call a licensed technician."
---

## What this code means

"Blowing cold air in heat mode" is a symptom, not a numbered fault code. On a Bryant heat pump, it means the indoor blower is running in a heating call, but the air from the registers is cool or room temperature instead of warm.

Some causes are normal, such as the defrost cycle or the naturally lower air temperature of a heat pump. Others point to a real fault: wrong thermostat setup, a stuck reversing valve, low refrigerant charge, or an outdoor unit that isn't running while the indoor fan is.

On Evolution communicating systems, the Evolution control may log a related fault in its history (for example, a pressure or outdoor-unit communication fault). Conventional 24V systems usually show nothing at the thermostat. A technician will read any blink codes on the outdoor control board. This symptom does not cause a lockout in itself, so there is nothing to "reset" unless an underlying safety, such as a high- or low-pressure switch, has tripped. Whether those safeties auto-reset depends on the model.

This page is distinct from these related pages:
- **Bryant Heat Pump Not Heating** covers a system that produces no heat at all.
- **Bryant Heat Pump Stuck in Defrost Mode** covers a stuck defrost cycle.

## Common causes, ranked by probability

1. **Normal defrost cycle.** In cold, humid weather, the unit periodically reverses to clear frost from the outdoor coil. Cooler air for a few minutes is expected, especially if backup heat isn't configured to run during defrost.
2. **Normal heat pump supply temperature.** Air at 85–100°F feels cool compared with furnace heat. This is especially noticeable near or below the system's balance point (often 25–40°F outdoors).
3. **Thermostat set or configured incorrectly.** Possible causes include:
   - The thermostat is in Cool or Fan On mode.
   - The thermostat is set for a conventional furnace or AC instead of a heat pump.
   - A replacement thermostat uses B (energize in heat) instead of O (energize in cool). Bryant uses O.
4. **Outdoor unit not running while the indoor blower runs.** Possible causes include:
   - A tripped outdoor breaker or disconnect.
   - A failed capacitor or contactor.
   - A tripped pressure switch.
   - A failed compressor.
5. **Low refrigerant charge (leak).** Reduces heating capacity, so the supply air is only slightly warm.
6. **Reversing valve or solenoid failure.** The valve sticks in the cooling position, or its coil or wiring fails. The unit then cools the house in heat mode.
7. **Defrost control or sensor fault.** The unit stays in defrost, or initiates it too often. See Stuck in Defrost Mode.
8. **Backup (auxiliary) heat not working in cold weather.** Possible causes include:
   - Failed heat strips.
   - A tripped heat-strip breaker.
   - Incorrect auxiliary heat staging. This matters most below the balance point.
9. **Severe airflow restriction.** A clogged filter or a dirty outdoor coil heavily reduces capacity.

## Safe checks before you call anyone

- **Check the thermostat.**
  - Confirm it is set to Heat (not Cool, Auto or Fan On) and the setpoint is a few degrees above room temperature.
  - Replace the batteries if it has them.
  - If the thermostat was recently replaced, note this for the technician. A setup error is likely.
- **Wait out a possible defrost.** If the outdoor unit is steaming, quiet, or the fan is stopped for 2–10 minutes, it's likely defrosting. Check again after 15 minutes.
- **Check whether the room is warming.** Put a kitchen thermometer in a supply register. Readings of about 85°F or higher during steady heating usually mean the heat pump is working.
- **Check the breakers.** Look for both the outdoor unit and the indoor air handler/heat strips in the panel. Reset a tripped breaker once. If it trips again, stop and call a technician.
- **Confirm the outdoor unit is running.** Look and listen for the fan and compressor hum while heat is called. Do not open the unit.
- **Replace a dirty air filter.** Make sure supply and return vents are open and unblocked.
- **Clear around the outdoor unit.** Gently brush off snow and leaves, keeping about 2 feet of clearance. Never chip ice off the coil.
- **Check the condensate line.** Make sure the drain at the air handler isn't clogged. Some systems shut down when the safety float switch trips.
- **Seat the access panels.** Make sure the air handler's exterior panels are fully closed so that its door switch is engaged.

## How a technician will diagnose it

- Confirm the thermostat mode, configuration (heat pump, O/B setting, aux staging) and low-voltage wiring at the air handler and outdoor unit.
- Read the outdoor control board's LED fault codes, or the Evolution fault history.
- Measure supply and return air temperatures to calculate the temperature rise.
- Verify the outdoor unit is getting 24V Y and O signals, then check the contactor, capacitor and compressor amp draw.
- Connect gauges or digital probes. Check pressures, superheat and subcooling against Bryant's heating charge charts. Leak-search if the charge is low.
- Check the reversing valve: test the solenoid coil with voltage and resistance readings, and compare line temperatures across the valve to confirm it shifts.
- Test the defrost board and the coil temperature sensor/thermistor.
- Check the heat strip elements, sequencers/relays and limits for auxiliary heat.

A sound quote names a specific failed part backed by a measurement. Be wary of a refrigerant top-off with no leak search, or a compressor replacement quoted without amp and pressure readings.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Cool air for a few minutes, outdoor unit steaming | Normal defrost | Wait 15 minutes | None unless it repeats constantly |
| Air lukewarm (85–95°F), house slowly warming | Normal heat pump output | Check filter and setpoint | Check aux heat staging if the house can't keep up |
| Cold air right after installing a new thermostat | Wrong heat pump or O/B setup | Confirm Heat mode; note the change for the tech | Reconfigure and rewire the thermostat |
| Indoor fan runs, outdoor unit silent | Breaker, capacitor, contactor, pressure switch | Reset the outdoor breaker once | Test and replace the capacitor/contactor; diagnose the pressure trip |
| Outdoor unit runs, air cold in every cycle | Stuck reversing valve or failed solenoid | None | Test the solenoid; replace the coil or valve |
| Air slightly warm, unit runs constantly | Low refrigerant/leak | Replace the filter | Leak search, repair, recharge |
| Cold air only in very cold weather | Aux heat failure | Check the heat-strip breaker | Test the heat strips, sequencers and limits |
| Unit stuck defrosting or frosted solid | Defrost board/sensor | Clear snow and debris around the unit | Test and replace the defrost control/sensor |

## Repair costs

These are typical US ranges, including parts and labor. They vary by region, model and warranty status.

| Repair | Cost range |
|---|---|
| Thermostat settings, filter, breaker reset | $0–$40 DIY |
| Service call/diagnostic | $90–$250 |
| Thermostat reconfiguration or rewiring | $100–$250 |
| New heat-pump thermostat (installed) | $150–$450 |
| Run capacitor | $150–$400 |
| Contactor | $150–$350 |
| Defrost sensor/thermistor | $150–$350 |
| Defrost/outdoor control board | $300–$800 |
| Heat strip element or sequencer | $200–$600 |
| Reversing valve solenoid coil | $150–$400 |
| Leak search and repair plus recharge | $300–$1,500 depending on leak location and refrigerant |
| Reversing valve replacement | $900–$2,000 |
| Compressor replacement | $1,800–$3,500+ |

Many Bryant units carry a 10-year parts warranty if they were registered. Labor and refrigerant are usually extra.

## Related codes

Bryant Heat Pump Not Heating: Causes, Checks & Fixes
Bryant Heat Pump Stuck in Defrost Mode: Causes & Fixes
Bryant Heat Pump Frozen, Not Defrosting: Causes & Fixes
Bryant Heat Pump Ice on Outdoor Unit: Causes & Fixes
Bryant Heat Pump Aux Heat On Constantly: Causes & Fixes
Bryant AC Breaker Keeps Tripping: Causes, Checks & Fixes
Bryant AC Outdoor Fan Not Spinning: Causes & Fixes

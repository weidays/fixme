---
title: "Rheem Heat Pump Auxiliary Heat On Constantly: Fixes"
code: "Auxiliary heat on constantly"
description: "Why a Rheem heat pump runs aux heat nonstop: thermostat setup, low charge, stuck heat strip relay. Safe checks, pro fixes and costs $0 to $4,000+."
brand: rheem
equipment: heat-pump
severity: pro
costRange: "$0 for thermostat settings – $1,500+ if a refrigerant leak must be found and repaired"
appliesTo: "Rheem and Ruud split heat pumps with electric heat kits or air handlers, including Classic, Classic Plus and Prestige series. Behavior varies by thermostat: conventional 24V thermostats call aux on the W2 terminal, while EcoNet-communicating systems use their own staging logic and lockout settings. Defrost control boards also vary by series."
tags:
  - rheem
  - heat-pump
  - auxiliary-heat
  - emergency-heat
  - heat-strips
  - high-electric-bill
  - thermostat
parts:
  - name: "Replacement air filter (match your filter size)"
    search: "HVAC air filter MERV 8 16x25x1"
  - name: "Thermostat batteries"
    search: "AA alkaline batteries thermostat"
  - name: "Heat pump compatible programmable thermostat"
    search: "heat pump thermostat with auxiliary heat lockout"
datePublished: 2026-10-09
dateModified: 2026-10-09
reviewedBy: ""
faq:
  - q: "Is it normal for aux heat to come on with a Rheem heat pump?"
    a: "Yes, sometimes. Aux heat normally runs during defrost cycles, during large temperature jumps such as recovering from a setback, and in very cold weather when the heat pump can't keep up alone. It is not normal for aux to stay on all the time in mild weather."
  - q: "What is the difference between aux heat and emergency heat?"
    a: "Aux heat runs electric strips alongside the heat pump compressor. Emergency heat shuts the compressor off and heats with the strips only. If the thermostat is left on emergency heat, the strips run every time there is a call for heat, and that alone can explain a very high bill."
  - q: "Can running aux heat constantly damage my system?"
    a: "It usually won't damage anything right away, but it is expensive. Electric strips can cost two to three times as much to run as the heat pump. If a strip relay is stuck closed, the strips may also heat with the blower off, which is a safety and overheating concern. That needs a technician promptly."
  - q: "Will lowering my thermostat setting fix it?"
    a: "Big setbacks often make it worse. When you raise the temperature several degrees in the morning, many thermostats bring on aux heat to recover. Smaller setbacks of 2 to 3 degrees, or a thermostat with smart recovery, usually reduce aux run time."
---

## What this code means

"Auxiliary heat on constantly" is not a numbered fault code on Rheem heat pumps. It's a symptom. The thermostat shows "Aux Heat" (or "Aux") nearly all the time, or the electric bill jumps while the house still feels warm. On a Rheem or Ruud split system, the electric heat strips in the air handler are being called for, or energized, far more than they should be.

Aux heat comes on for one of three reasons:

- **The thermostat is calling for it.** On conventional thermostats this is the W2/AUX call. EcoNet systems use their own staging logic.
- **The defrost board brings it on during defrost.** This is normal and lasts a few minutes per cycle.
- **A heat strip relay or sequencer is stuck closed.** In this case the strips run whether or not anything is calling for them.

There is nothing to reset. The condition stays until the cause is corrected. A flashing light on the outdoor board is a separate diagnostic and is covered on its own page.

Aux heat that runs in genuinely cold weather can be normal. The outdoor temperature where this starts, often roughly 25–35°F, is called the balance point. It depends on how fast your home loses heat compared with how much heat your heat pump can deliver. The concern is aux running constantly in mild weather.

## Common causes, ranked by probability

1. **Thermostat set to Emergency Heat, or set up incorrectly.** This is especially common after a new thermostat install. Any of these can cause it:
   - The thermostat is left on EM Heat.
   - It is configured as "conventional/furnace" instead of "heat pump."
   - The O/B reversing valve setting is wrong. Rheem uses O, energized in cooling.
   - Aux lockout or droop settings are too aggressive.
2. **Large setbacks or temperature jumps.** Raising the setpoint several degrees triggers aux recovery heat on most thermostats.
3. **Heat pump not producing enough heat.** Common reasons:
   - Low refrigerant charge from a leak
   - A failing compressor or capacitor
   - An outdoor fan problem
   - A restricted coil

   The compressor runs, but the thermostat can't reach setpoint, so it adds aux.
4. **Restricted airflow.** A dirty filter, closed registers or a dirty indoor coil can cause this. Low indoor airflow reduces the heat delivered to the rooms. Heating calls then run longer, and the thermostat is more likely to bring on aux.
5. **Outdoor unit stuck in or frequently entering defrost.** Aux normally runs during defrost. Excessive defrost cycles or a faulty defrost board mean excessive aux time.
6. **Stuck heat strip relay or sequencer in the air handler.** The strips stay energized even with no W2 call. Signs include warm air with the blower off, or heat when the thermostat is off.
7. **Wiring fault.** A shorted or miswired W2/E conductor sends a constant aux call.
8. **Outdoor thermostat or balance point setting (where installed).** A misadjusted outdoor thermostat or EcoNet lockout temperature can allow strips in mild weather.

## Safe checks before you call anyone

- **Burning smell or heat with the system off: act on this first.**
  - **Smoke, strong burning odor or visible scorching:** If you see smoke, smell a strong burning odor or see visible scorching, leave the home and call 911.
  - **Warm air with the thermostat off, or a hot-dust smell:** Switch off power at the air handler/heat strip breaker or the air handler's disconnect. Turning the system off at the thermostat will not stop the strips. A stuck-closed relay or sequencer keeps them energized no matter what the thermostat says.
  - **Then call a technician promptly.** Leave that breaker off until the technician arrives.
- **Check the thermostat mode.** Make sure it's set to "Heat," not "Em Heat" or "Emergency." If someone switched it during a cold snap, switch it back.
- **Replace thermostat batteries** if your model uses them. Weak batteries can cause erratic behavior.
- **Review the thermostat's installer settings** in the manual. Don't change wiring. Check these settings:
  - The system type is "heat pump."
  - The reversing valve is set to O (energized in cool) for Rheem.
  - Look for aux heat lockout or balance point options. Many smart thermostats let you lock out aux above about 35–40°F.
- **Use smaller setbacks.** Try 2–3 degrees rather than 6–8, and avoid cranking the setpoint up all at once.
- **Replace the air filter** if it's dirty, and make sure supply and return registers are open and unblocked.
- **Look at the outdoor unit from outside.**
  - Is the fan spinning and the unit running while the thermostat shows heat?
  - Is it buried in snow, leaves or ice? Clear debris and snow by hand from around the unit. Don't chip ice off the coil.
  - If the unit is heavily iced or not running, see the related pages below.
- **Check the breakers.** The outdoor unit often has its own breaker and disconnect. If the outdoor unit is off because its breaker tripped, the house is being heated by strips alone. You may reset a tripped breaker once. If it trips again, stop and call a technician.

## How a technician will diagnose it

- Confirm what is calling for aux. The technician measures 24V at the air handler's W/W2 terminals in three conditions: thermostat in heat, thermostat satisfied and thermostat off.
  - Constant W2 with no call points to the thermostat or wiring.
  - Strips energized with no W2 points to the relay or sequencer.
- Check the amp draw on the heat strip circuits to see which elements are on.
- Verify heat pump performance:
  - Supply and return temperature split with the strips disabled
  - Compressor and outdoor fan amps
  - Capacitor readings
  - Refrigerant pressures, superheat and subcooling against Rheem's charging chart
- If the charge is low, perform leak detection before recharging. Topping off without finding the leak is a red flag in a quote.
- Inspect the defrost board, defrost sensor and coil sensor operation, and observe defrost initiation and termination.
- Check airflow: static pressure, blower speed tap settings and indoor coil condition.
- Check the outdoor thermostat or EcoNet lockout settings where applicable.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| "Em Heat" shown on thermostat | Emergency heat mode left on | Switch mode to Heat | None needed unless the outdoor unit isn't running |
| Aux after every morning warm-up | Large setback recovery | Use 2–3° setbacks; enable smart recovery | Adjust staging or lockout if requested |
| Aux constant after new thermostat | Wrong system type or O/B setting | Check installer settings per manual | Correct wiring and configuration |
| Outdoor unit not running, house still warm-ish | Tripped outdoor breaker, failed capacitor or contactor | Reset breaker once | Test and replace the capacitor or contactor |
| Unit runs but air is lukewarm, aux kicks in | Low refrigerant or weak compressor | Replace filter, open registers | Leak search, repair, recharge; compressor tests |
| Frequent defrost with aux | Defrost board or sensor fault | Clear snow and debris from around the unit | Test and replace the defrost board or sensor |
| Heat with the thermostat off, or burning smell | Stuck heat strip relay or sequencer | Smoke, strong burning odor or scorching: leave the home and call 911. Otherwise, switch off the air handler/heat strip breaker or disconnect (not just the thermostat). Then call promptly. | Replace the relay, sequencer or control |
| Constant aux call in all modes | Shorted W2 wiring | None | Trace and repair the wiring |

## Repair costs

Typical US ranges, including parts and labor:

| Repair | Typical cost |
|---|---|
| Thermostat setting correction | $0 DIY; $100–$200 service call |
| New heat-pump-compatible thermostat | $50–$250 DIY; $150–$450 installed |
| Air filter | $5–$40 |
| Capacitor replacement | $150–$400 |
| Contactor replacement | $150–$350 |
| Heat strip relay or sequencer replacement | $150–$450 |
| Defrost sensor | $150–$350 |
| Defrost control board | $300–$700 |
| Wiring repair | $150–$400 |
| Refrigerant leak search plus recharge | $400–$1,500+ |
| Coil replacement | $1,500–$3,000+ |
| Compressor replacement | $1,800–$4,000+ |

Warranty coverage on Rheem parts may reduce parts cost if the unit is registered. Registration deadlines and labor exclusions vary by product line, so check your warranty terms before assuming parts are covered. Labor is usually extra.

## Related codes

- Rheem Heat Pump Not Heating: Causes, Fixes & Costs
- Rheem Heat Pump Stuck in Defrost Mode: Causes & Fixes
- Rheem Heat Pump Frozen, Not Defrosting: Causes & Fixes
- Rheem Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Rheem Heat Pump Flashing Light: Causes & Fixes

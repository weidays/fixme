---
title: "Amana Heat Pump Blowing Cold Air in Heat Mode: Fixes"
code: "Blowing cold air in heat mode"
description: "Amana heat pump blowing cold air on heat? Learn the causes (defrost, reversing valve, low charge), safe checks, and repair costs from $0 to $2,500+."
brand: amana
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $2,500+ if the reversing valve or compressor needs replacement"
appliesTo: "Amana split-system heat pumps (ASZ, ASZC, AVZC series and similar) with single-stage, two-stage or variable-speed controls. Defrost timing, aux-heat staging and fault reporting differ by model, by whether ComfortBridge on-board controls are present, and by whether a fully communicating Amana thermostat or a conventional 24V thermostat is used."
tags:
  - heat-pump
  - cold-air
  - heat-mode
  - reversing-valve
  - defrost
  - amana
parts:
  - name: "HVAC air filter (match your filter size)"
    search: "HVAC air filter MERV 8 furnace filter"
  - name: "AA/AAA thermostat batteries"
    search: "AA lithium batteries thermostat"
  - name: "Heat pump compatible programmable thermostat"
    search: "heat pump compatible programmable thermostat with aux heat"
# Verify datePublished/dateModified against the publish schedule before release (do not publish future-dated).
datePublished: 2026-11-18
dateModified: 2026-11-18
reviewedBy: ""
faq:
  - q: "Is it normal for my Amana heat pump to blow cool air sometimes in heat mode?"
    a: "Yes, briefly. Heat pump supply air is often only 85–100°F, which can feel cool on your hand. During a defrost cycle the system also runs in cooling mode for a few minutes. Most systems bring on auxiliary heat during defrost so the air stays warm. Truly cold air that lasts longer than 10–15 minutes is not normal."
  - q: "Why does it blow cold air only when it's very cold outside?"
    a: "As outdoor temperatures drop, a heat pump's output falls. Below its balance point the system relies on auxiliary electric heat. If the heat strips, their breaker, or their staging isn't working, the air can feel cold in the coldest weather even though the heat pump itself is running normally."
  - q: "Can I fix a stuck reversing valve myself?"
    a: "No. Testing the reversing valve solenoid takes live-voltage checks inside the cabinet. Replacing the valve means recovering refrigerant and brazing, and that work requires an EPA-certified technician. Your part is limited to confirming the thermostat settings and breakers before you call."
  - q: "Should I switch to emergency heat?"
    a: "As a temporary measure, yes. Setting the thermostat to EM HEAT runs the electric heat strips alone and keeps the house warm until a technician arrives. It costs more to run, so only use it until the repair is done."
---

## What this code means

"Blowing cold air in heat mode" is a symptom, not a stored fault code. Amana heat pumps don't flash a dedicated code for it. However, communicating models may log related faults on the outdoor control. On units with ComfortBridge on-board controls, which work with conventional 24V thermostats, a technician can read that fault data through the CoolCloud app.

It means air is moving through your vents but isn't warm enough. That can come from three places:

- **The heat pump isn't moving heat indoors.** The reversing valve may not be shifting, the refrigerant charge may be low, or the compressor may not be running.
- **A normal defrost cycle has no backup heat.** The system briefly switches to cooling to melt ice off the outdoor coil. If auxiliary heat doesn't come on during defrost, you feel cold air.
- **A thermostat setup error.** The wrong O/B setting or a non-heat-pump configuration can make the system cool when you ask for heat.

There is nothing to "reset" here. The symptom continues until the underlying cause is corrected.

This page covers warm-but-weak or outright cold air while the indoor fan runs. Related situations have their own pages:
- If the system won't run at all, see Not heating.
- If the outdoor coil is iced, see Frozen and not defrosting.
- If heat strips run constantly, see Auxiliary heat on constantly.

## Common causes, ranked by probability

1. **Normal defrost without aux heat.** The system runs cool for roughly 2–10 minutes during defrost. If the heat strips don't come on (failed element, tripped heat-strip breaker, or aux wiring not connected), the air feels cold during each defrost.
2. **Low supply temperature that is mistaken for a fault.** Heat pump air can feel cool even when the system is working. A healthy unit typically raises the air temperature 20–30°F between the return and the supply.
3. **Thermostat misconfiguration.** If your thermostat was recently replaced, treat this as the most likely cause. The thermostat may be set to a conventional AC/furnace system type, or its reversing valve setting may be wrong. Amana conventional systems energize the O terminal in cooling, so the thermostat must be set to "O/B energized in cool" (often shown as "O"). If this is wrong, you get cooling in heat mode and heating in cool mode.
4. **Outdoor unit not running.** If only the indoor blower runs, the air is room temperature or cooler. Possible causes include a tripped outdoor breaker or disconnect, a failed contactor or capacitor, or a control lockout (for example, a pressure switch).
5. **Low refrigerant charge (leak).** The unit runs but produces weak heat. Icing patterns are often uneven, and the problem gets worse over time.
6. **Reversing valve solenoid or valve failure.** The valve may be stuck in the cooling position, the solenoid coil may have failed, or the valve may be partly bypassing. Exactly how this shows up depends on the model and valve design.
7. **Compressor problems.** A compressor that won't start, overheats and trips on internal overload, or has worn valves will run without producing heat.
8. **Severely restricted airflow.** A badly clogged filter or closed returns can cause high-pressure trips and short heating runs. This is less often the primary cause.

## Safe checks before you call anyone

- **Thermostat:** Confirm it's set to HEAT and the setpoint is several degrees above room temperature.
  - Set the fan to AUTO, not ON. With ON, the blower circulates unheated air between cycles.
  - Replace the batteries if the display is dim or blank.
  - If the thermostat was recently replaced, check its installer settings for "heat pump" system type and O/B mode. Use the thermostat manual for this. Do not change wiring.
- **Breakers:** Check the outdoor unit breaker, the air handler breaker, and the separate heat-strip breaker(s), which are often a double-pole 30–60A breaker. Reset a tripped breaker once. If it trips again, stop and call a technician.
- **Outdoor disconnect:** Make sure the pull-out or switch disconnect near the outdoor unit is in the ON position.
- **Wait out defrost:** If the air goes cold and the outdoor unit is steaming, wait 10–15 minutes. Defrost ends on its own.
- **Air filter:** Replace it if it's dirty.
- **Vents and returns:** Open the supply registers and clear any return grilles that are blocked.
- **Outdoor unit:** Clear snow, leaves, and debris from around it. Do not chip ice off the coil.
- **Panels and drain:** Make sure the air handler panels are fully seated, and that the condensate line isn't backed up or tripping a float switch.
- **Temporary heat:** If the house is getting cold, switch to EM HEAT until service.

## How a technician will diagnose it

A competent tech will typically work through these steps:

- **Measure temperature split.** The tech checks the supply-to-return temperature rise and watches the outdoor unit during a call for heat.
- **Check thermostat signals.** They verify the Y, O/B and W/aux signals at the air handler and outdoor control. On communicating models, they read the fault history on the thermostat or outdoor control. On ComfortBridge-equipped units, they read fault data with the CoolCloud app.
- **Check the reversing valve.** They test whether the solenoid gets voltage and pulls in. They then use line temperatures on the valve's tubes to confirm whether it shifts or is bypassing.
- **Check the refrigerant charge.** They connect gauges or digital probes and check pressures, superheat and subcooling. Amana/Goodman guidance generally favors verifying charge in cooling mode or by weighing it in. In cold weather, they may weigh in the charge or schedule a return visit. If the charge is low, they should leak search rather than just top it off.
- **Test the outdoor electrical components.** This covers the contactor, run capacitor, compressor windings, and any pressure or temperature switches.
- **Test the aux heat.** They check the heat strip elements, sequencers or relays, and limits, and confirm the strips turn on during defrost.

**Red flags on a quote:**
- Recommending refrigerant without a leak search.
- Condemning the compressor or reversing valve without first checking for solenoid voltage and measuring line temperatures.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Cold air started right after a thermostat swap | Wrong system type or O/B setting | Check the thermostat's installer settings against its manual | Correct the configuration and wiring |
| Cold for 2–10 min, outdoor unit steaming | Defrost without aux heat | Wait, then check the heat-strip breaker | Repair heat strips, sequencer, or aux wiring |
| Air slightly warm, about 85–90°F | Normal heat pump output | Set fan to AUTO and confirm the setpoint | Verify temperature rise if you're unsure |
| Indoor fan runs, outdoor unit silent | Breaker, disconnect, contactor, capacitor, or lockout | Check the breaker and disconnect, reset once | Electrical diagnosis and parts replacement |
| Outdoor unit runs, air cool, AC works fine in summer | Reversing valve or solenoid | Use EM HEAT temporarily | Solenoid test; valve replacement with refrigerant recovery |
| Weak heat that worsens over weeks | Refrigerant leak | Replace the filter, call for service | Leak search, repair, recharge |
| Outdoor unit hums or trips repeatedly | Compressor or start component | Don't keep resetting | Compressor and capacitor testing |

## Repair costs

These are typical US ranges, including parts and labor:

| Repair | Typical cost |
|---|---|
| Thermostat reconfiguration (service call) | $90–$200 |
| New heat-pump thermostat, DIY | $40–$250 |
| Contactor | $150–$350 |
| Run capacitor | $150–$400 |
| Heat strip element | $250–$600 |
| Heat strip sequencer or relay | $150–$400 |
| Reversing valve solenoid coil | $150–$400 |
| Reversing valve replacement (includes recovery, brazing, evacuation, recharge) | $900–$2,000 |
| Leak search and repair | $300–$1,500+ |
| Refrigerant recharge (R-410A or R-32 on newer units; check the unit nameplate) | $200–$800 |
| Compressor replacement (often under Amana's long compressor warranty if registered; labor still applies) | $1,500–$3,000+ |

Ask whether your unit's parts warranty covers the failed component before you approve major work.

## Related codes

Amana Heat Pump Not Heating: Causes, Fixes & Costs — when the system won't produce heat at all or won't run.

Amana Heat Pump Auxiliary Heat On Constantly: Causes & Fixes — the opposite aux-heat problem.

Amana Heat Pump Frozen, Not Defrosting: Causes & Fixes — for iced outdoor coils.

Amana Heat Pump Stuck in Defrost Mode: Causes & Fixes — if cold air never stops and the outdoor fan stays off.

Amana Heat Pump Ice on Outdoor Unit: Causes & Fixes

---
title: "Goodman Heat Pump Blowing Cold Air in Heat Mode: Fixes"
code: "Blowing cold air in heat mode"
description: "Goodman heat pump blowing cold air on heat? Causes include defrost, a stuck reversing valve, thermostat O/B setup and low charge. Fixes and costs inside."
brand: goodman
equipment: heat-pump
severity: pro
costRange: "$0 DIY (thermostat/filter) – $1,800+ if the reversing valve must be replaced"
appliesTo: "Goodman split heat pumps (GSZ, GSZC, GSZB, DSZC and similar) with air handlers (AVPTC, AMVT, ARUF, etc.). Defrost board type, ComfortBridge communicating vs. 24V conventional control, and aux heat kit size vary by model and install."
tags:
  - heat-pump
  - cold-air
  - reversing-valve
  - defrost
  - thermostat
  - goodman
parts:
  - name: "Replacement air filter"
    search: "HVAC air filter MERV 8 furnace filter"
  - name: "Thermostat batteries (AA/AAA alkaline)"
    search: "AA alkaline batteries thermostat"
datePublished: 2026-10-09
dateModified: 2026-10-09
reviewedBy: ""
faq:
  - q: "Is it normal for my Goodman heat pump air to feel cool?"
    a: "Somewhat. A heat pump typically delivers air around 85–100°F, which feels lukewarm against your hand (skin is about 93°F). If a thermometer at a supply register reads roughly 20–30°F above return air temperature, the system is heating normally."
  - q: "Why does it blow cold air for a few minutes and then warm up again?"
    a: "That is usually a defrost cycle. The unit temporarily runs in cooling mode to melt frost off the outdoor coil, and the air handler's electric heat strips normally temper the air. If the air is noticeably cold during defrost, the heat strips may not be energizing, which is a technician check."
  - q: "Can a wrong thermostat setting make a Goodman heat pump blow cold air?"
    a: "Yes. Goodman heat pumps energize the reversing valve in cooling (O terminal). If a new thermostat is set to B (energize on heat), the unit will cool when you call for heat. Check the thermostat installer settings or have the installer verify it."
  - q: "Does this problem reset on its own?"
    a: "There is no single fault code for this symptom, so nothing to reset. Defrost-related cold air ends on its own within about 10 minutes. Constant cold air in heat mode points to a control, valve or refrigerant problem that will not clear itself."
---

## What this code means

"Blowing cold air in heat mode" is a symptom, not a stored Goodman fault code. The indoor blower is running and the thermostat is calling for heat, but the air at the registers is cool or room temperature. This page covers the case where air *moves* but feels cold — if the system won't run at all, see the Not heating page; if you see frost or ice, see the defrost-related pages.

Three things are worth separating first:

- **Normal heat pump air** — warm but not hot, especially below about 35°F outdoors.
- **Temporary cold air** — a defrost cycle, lasting a few minutes, then heat resumes.
- **Constant cold air** — the system is cooling instead of heating, or the outdoor unit isn't running. This needs a technician.

There is nothing to reset; behavior depends on board type (conventional 24V defrost board vs. ComfortBridge communicating) and how the thermostat was configured.

## Common causes, ranked by probability

1. **Normal heat pump discharge temperature** — 85–100°F air feels cool, particularly in cold weather when capacity drops. Not a fault if the temperature split is correct.
2. **Defrost cycle in progress** — the reversing valve shifts to cooling to melt frost. On most installs the air handler's heat strips should come on to temper the air; if they don't, the air blows cold for several minutes.
3. **Thermostat setup or settings** — mode set to Cool or Fan On, or the reversing valve setting is wrong. Goodman uses O (energized in cooling); a thermostat set to B causes cooling on a heat call. Common right after a thermostat replacement.
4. **Outdoor unit not running** — tripped breaker, pulled disconnect, failed capacitor or contactor. The indoor blower runs on the G call, but no heat is produced.
5. **Reversing valve problem** — stuck valve, failed solenoid coil, or open wire on the O circuit, leaving the system locked in cooling mode or stuck partway.
6. **Low refrigerant charge (leak)** — the heat pump runs but produces little heat; often accompanied by long run times and sometimes heavy frost.
7. **Failed auxiliary/emergency heat** — tripped heat-strip breaker, failed sequencer/relay, or open limit on the heat kit, so there's no backup heat during defrost or in very cold weather.
8. **Severely restricted airflow** — clogged filter or dirty indoor coil can reduce heat output and trigger safety cutouts, leaving only the blower moving air.

## Safe checks before you call anyone

- **Thermostat:** confirm mode is Heat (not Cool or Auto with a low setpoint), the fan is set to Auto (Fan On blows unheated air between cycles), and the setpoint is several degrees above room temperature. Replace batteries if the display is dim or blank.
- **Wait out a defrost:** if cold air started suddenly in freezing weather, wait 10–15 minutes. If warm air returns, it was likely a defrost cycle.
- **Measure, don't guess:** hold a kitchen thermometer in a supply register for a few minutes, then at the return grille. A rise of about 20°F or more usually means it's heating.
- **Check the outdoor unit:** is the fan spinning and the unit humming when heat is called? If not, check the breaker panel for a tripped outdoor unit breaker and reset it **once**. If it trips again, stop and call a technician.
- **Check the air handler/heat strip breaker:** air handlers with heat kits usually have their own breaker(s). Reset a tripped one **once** only.
- **Air filter:** replace it if dirty.
- **Vents and registers:** open supply registers and keep the return grille unobstructed.
- **Outdoor clearance:** clear snow, leaves or debris from around the outdoor unit (power off first). Do not chip ice off the coil.
- **Recent thermostat change?** Tell the technician — an O/B setting error is a quick fix.

## How a technician will diagnose it

- Confirm the call from the thermostat at the air handler/outdoor control (Y, O, W/E terminals, or ComfortBridge communication status and stored faults).
- Verify O/B configuration matches Goodman's O-in-cooling setup.
- Check outdoor unit operation: contactor, run capacitor, compressor amp draw, fan motor.
- Measure line-temperature changes and pressures to confirm whether the reversing valve is shifting; test the solenoid coil for voltage and continuity.
- Read the defrost control board status and check defrost sensor/thermostat behavior.
- Check refrigerant charge via superheat/subcooling; leak search if low.
- Verify heat strips energize during defrost and on a W call (sequencers, relays, limits, amp draw).
- Measure supply/return temperature split and static pressure.

A reasonable quote should name which of these was confirmed — "it needs refrigerant" without a leak check, or "reversing valve" without testing the coil first, deserves questions.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Air lukewarm, about 20°F+ above return temp | Normal heat pump operation | Verify with thermometer; no action | None needed |
| Cold air for 5–10 min, then warm; steam from outdoor unit | Defrost cycle | Wait it out | Check heat strips if air is very cold during defrost |
| Cold air immediately after thermostat replacement | O/B setting wrong | Check thermostat installer setting for O | Reconfigure/rewire thermostat |
| Cold air, fan running constantly | Fan set to On | Set fan to Auto | None |
| Indoor blower runs, outdoor unit silent | Breaker, capacitor, contactor | Reset outdoor breaker once | Test/replace capacitor or contactor |
| Outdoor unit runs, air constantly cold | Reversing valve or coil stuck in cooling | None | Test solenoid/wiring; replace coil or valve |
| Weak heat, long runs, frost buildup | Low refrigerant | Replace filter; clear unit | Leak search, repair, recharge |
| Cold air in very cold weather or during defrost only | Aux heat failure | Reset heat-strip breaker once | Test sequencers, relays, limits, strips |
| Low airflow, weak warm air | Dirty filter or coil | Replace filter | Clean indoor coil, check blower |

## Repair costs

Typical US installed prices (parts + labor), 2026:

- **Service call/diagnosis:** $90–$200
- **Thermostat reconfiguration:** usually covered by diagnosis fee; new thermostat installed $150–$450
- **Run capacitor:** $150–$350
- **Contactor:** $150–$350
- **Reversing valve solenoid coil:** $150–$400
- **Reversing valve replacement:** $900–$1,800+ (requires refrigerant recovery, brazing, evacuation, recharge)
- **Refrigerant leak search:** $150–$500; repair $200–$1,500+ depending on location; recharge R-410A $200–$700+ (R-454B systems vary)
- **Defrost control board:** $250–$600
- **Heat kit sequencer/relay:** $150–$400; heat strip element $250–$600
- **Indoor coil cleaning:** $150–$400

Goodman's parts warranty (often 10 years registered, with longer compressor coverage on some models) may cover parts; labor is usually extra.

## Related codes

Goodman Heat Pump Not Heating: Causes, Fixes & Costs — when the system won't heat or run at all.
Goodman Heat Pump Stuck in Defrost Mode: Causes & Fixes — when cold air from defrost doesn't end.
Goodman Heat Pump Frozen and Not Defrosting: Fixes — heavy ice with poor heat.
Goodman Heat Pump Ice on Outdoor Unit: Causes & Fixes — frost and ice buildup questions.
Goodman Heat Pump Aux Heat On Constantly: Causes & Fixes — the opposite heat-strip problem.
Goodman Furnace Blowing Cold Air: Causes & Fixes — for gas furnace systems rather than heat pumps.

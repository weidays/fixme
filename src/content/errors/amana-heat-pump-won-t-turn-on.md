---
title: "Amana Heat Pump Won't Turn On: Causes, Fixes & Costs"
code: "Won't turn on"
description: "Amana heat pump won't turn on? Learn the likely causes (power, thermostat, float switch, control fuse, transformer, board) plus safe fixes and repair costs."
brand: amana
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $1,200+ if the control board or air handler transformer needs replacement"
appliesTo: "Amana split-system heat pumps (ASZ, ASZC, AVZC series) paired with Amana air handlers or furnaces, including ComfortBridge communicating models. Diagnostic LED behavior, defrost board design and controls vary by model and vintage. Check your unit's wiring diagram and installation manual for exact fuse ratings and fault displays."
tags: [amana, heat-pump, wont-turn-on, no-power, thermostat, low-voltage, control-board]
parts:
  - name: "Thermostat AA/AAA batteries"
    search: "AA alkaline batteries thermostat"
  - name: "HVAC air filter (match your size)"
    search: "MERV 8 HVAC air filter 16x25x1"
  - name: "Programmable heat pump thermostat"
    search: "heat pump compatible programmable thermostat"
datePublished: 2026-11-26
dateModified: 2026-11-26
reviewedBy: ""
faq:
  - q: "Why is my Amana heat pump completely dead, with no fan and no outdoor unit running?"
    a: "When both the indoor and outdoor sections are silent, the cause is usually upstream of the heat pump itself. The most common culprits are a blank or misconfigured thermostat, a tripped breaker or switched-off air handler, a tripped condensate float switch, or a blown 3–5 amp low-voltage fuse on the air handler control board."
  - q: "Can I reset my Amana heat pump myself?"
    a: "Yes, you can do one reset. Turn the thermostat to OFF, switch off both the air handler and outdoor breakers for about five minutes, then restore power and call for heat or cooling. Many Amana compressors also have a built-in delay of several minutes after power returns. If the system still doesn't start, or it dies again, stop and call a technician rather than cycling power repeatedly."
  - q: "Does a won't-turn-on problem clear by itself?"
    a: "It depends on the cause. A tripped float switch resets once the drain clears, and a thermostat restarts once its batteries are replaced. A blown fuse, failed transformer or bad control board will not recover on its own and needs a technician to find out why it failed."
  - q: "Is it the same problem as the Amana AC won't turn on page?"
    a: "The power and thermostat basics overlap. A heat pump has extra failure points, though: reversing-valve and O/B thermostat wiring, a defrost control board, and auxiliary heat circuits in the air handler. A misconfigured thermostat can make a heat pump look dead in one mode while it works in the other."
---

## What this code means

"Won't turn on" isn't a stored fault code. It describes an Amana heat pump system that shows no response when the thermostat calls for heating or cooling. That means no indoor blower, no outdoor fan and no compressor hum.

The heat pump depends on two power paths:

- **High voltage (240V)** feeds the outdoor unit and the air handler.
- **24V control voltage** comes from a transformer in the air handler (or furnace, on dual-fuel setups) and runs through the thermostat.

If either path is broken, nothing starts. That's why a completely dead system almost always points to power, the thermostat, a safety switch, or the low-voltage circuit, not to the compressor itself.

Here is how this page differs from related ones:

- If the indoor blower runs but the outdoor unit doesn't, see "Compressor not running" or "Outdoor fan not spinning."
- If the system runs but gives no heat, see "Not heating."

Recovery depends on the cause:

- **Thermostat and float-switch causes** clear once corrected.
- **Blown fuses and failed transformers or boards** stay dead until repaired.
- **Some Amana outdoor controls** add a 3–5 minute anti-short-cycle delay after power returns. This varies by model and board, so don't mistake the delay for a failure.

## Common causes, ranked by probability

1. **Thermostat problem.** Dead batteries, a blank screen, the wrong mode, a schedule override, or a new thermostat set to "conventional" instead of "heat pump" (O/B setup). Any of these can leave the system idle.
2. **Tripped breaker or disconnect.** Check both the air handler breaker and the outdoor unit breaker, plus the service switch at the air handler and the pull-out disconnect outside.
3. **Condensate float or overflow switch tripped.** Many installs wire a float switch into the 24V circuit. A clogged drain shuts off the whole system, often during cooling season.
4. **Blown low-voltage fuse on the air handler control board.** This is typically a 3–5A automotive-style fuse. It usually blows because of a shorted thermostat wire (often outdoors, from weed trimmers or pests) or a shorted contactor coil.
5. **Failed 24V transformer.** No control voltage means no response anywhere.
6. **Damaged thermostat wiring.** Broken, corroded or chewed conductors between the thermostat, air handler and outdoor unit.
7. **Blower door safety switch open (if equipped).** Door interlock switches are common on furnaces, including dual-fuel setups, but not all air handlers have one. Where one is present, a panel that isn't fully seated cuts control power.
8. **Failed air handler control board.** Less common. Diagnose this only after fuse, transformer and wiring check out.

## Safe checks before you call anyone

- **Thermostat:** Replace the batteries. Set the mode to HEAT or COOL with the setpoint at least 3°F past room temperature, and set the fan to AUTO. If you recently installed a new thermostat, confirm it's configured for a heat pump.
- **Breakers:** At the main panel, find the air handler and heat pump breakers. If one is tripped, switch it fully OFF, then ON, **one time**. If it trips again, stop and see "Breaker keeps tripping."
- **Switches:** Make sure the service switch at the air handler (it looks like a light switch) is ON and the outdoor disconnect is inserted.
- **One reset:** Thermostat OFF, both breakers OFF for 5 minutes, power back ON. Then wait up to 5 minutes for any built-in compressor delay.
- **Condensate:** Look for water in the drain pan or a tripped float switch on the drain line. If the drain is visibly clogged at its outdoor exit, clear the opening. You can also flush the accessible drain line cleanout with a cup of white vinegar.
- **Panels:** Confirm the front panels on the air handler or furnace are firmly seated. If your equipment has a door safety switch (common on furnaces, not all air handlers), a loose panel can keep it from engaging. Do not remove panels to look inside.
- **Filter:** Replace a clogged filter. It doesn't usually cause a dead unit, but a technician will ask.

If none of this restores operation, stop here. Everything beyond this point involves live voltage inside the cabinet.

## How a technician will diagnose it

- **Confirm line voltage.** Checks 240V at the air handler and outdoor disconnect.
- **Check control voltage.** Measures 24V across R and C at the air handler control board.
  - No 24V: checks transformer primary and secondary voltage, then the low-voltage fuse.
  - Blown fuse: hunts for the short before replacing it. Typical culprits are thermostat cable runs, the outdoor contactor coil, and the defrost board.
- **Test the safety switches.** Checks continuity through the condensate float switch and, if equipped, the door switch.
- **Verify the thermostat.** Jumpers R to G, Y and O/B at the board to see whether the thermostat or its wiring is at fault, then confirms the thermostat's heat pump configuration.
- **Inspect the boards.** Reads any diagnostic LEDs on the air handler or defrost board. Blink patterns vary by model, so the tech will check the label inside the panel.
- **Replace parts last.** Should condemn the board only after verifying it has proper power in but no outputs.

A good quote names the failed component and explains what caused it. This matters most for a blown fuse, which will blow again if the short isn't found.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Thermostat screen blank | Dead batteries or no 24V | Replace batteries | Test transformer, fuse and C-wire |
| Screen works, nothing runs | Wrong mode or setup, or wiring | Check mode and heat pump configuration | Jumper test, repair wiring |
| Whole system dead, breaker tripped | Electrical fault | Reset once | Find short or ground fault |
| Dead after heavy AC use, water in pan | Float switch tripped | Clear drain opening, flush line | Clear trap, replace float switch |
| Dead after yard work or rodent activity | Shorted thermostat wire, blown fuse | None | Repair wire, replace fuse |
| 24V missing, fuse good | Failed transformer | None | Replace transformer |
| Dead after filter change or service | Panel not seated (only if a door switch is equipped) | Reseat panel | Test door switch, if equipped |
| Power and 24V present, no outputs | Failed control board | None | Replace board |

## Repair costs

| Repair | Typical US cost |
|---|---|
| Thermostat batteries or settings | $0–$10 |
| New heat pump thermostat (DIY / installed) | $30–$250 / $150–$450 |
| Service call and diagnosis | $75–$200 |
| Clear clogged condensate drain | $75–$250 |
| Float switch replacement | $100–$250 |
| Door switch replacement (if equipped) | $100–$200 |
| Low-voltage fuse plus short repair | $100–$300 |
| Thermostat wire repair or rerun | $150–$500 |
| 24V transformer | $150–$350 |
| Air handler control board | $400–$1,200 (communicating/ComfortBridge boards run higher) |
| Defrost control board (outdoor) | $250–$600 |

Warranty coverage can lower the cost of a failed part, but labor is typically not covered, so expect to pay for diagnosis and installation either way. Amana's parts warranty, including lifetime compressor coverage on many models, generally applies only if the unit was registered online within the required window after installation. Check your installation paperwork or Amana's warranty terms to confirm your coverage.

## Related codes

Related Amana heat pump pages:

- Amana Heat Pump Breaker Keeps Tripping: Causes & Fixes
- Amana Heat Pump Compressor Not Running: Causes & Fixes
- Amana Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Amana Heat Pump Not Heating: Causes, Fixes & Costs
- Amana Heat Pump Not Cooling: Causes, Fixes & Costs
- Amana Heat Pump Short Cycling: Causes, Fixes & Costs

Related Amana AC page:

- Amana AC Won't Turn On: Causes, Fixes & Repair Costs

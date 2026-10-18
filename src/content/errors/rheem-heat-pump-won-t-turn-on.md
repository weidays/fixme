---
title: "Rheem Heat Pump Won't Turn On: Causes, Fixes & Costs"
code: "Won't turn on"
description: "Rheem heat pump won't turn on? Learn the likely causes (power, thermostat, float switch, control fuse), safe checks, and repair costs from $0 to $600+."
brand: rheem
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $650 if the air handler control board or transformer needs replacement"
appliesTo: "Rheem and Ruud split heat pumps (Classic, Classic Plus, Prestige series) paired with Rheem air handlers such as the RH1T/RH2T. Fuse location, board diagnostics and whether the outdoor unit has its own status LED vary by model and control board; communicating (EcoNet) systems also show faults on the thermostat."
tags:
  - rheem
  - heat-pump
  - wont-turn-on
  - no-power
  - thermostat
  - air-handler
parts:
  - name: "Thermostat AA/AAA batteries"
    search: "AA alkaline batteries thermostat"
  - name: "Air handler air filter (match your size)"
    search: "MERV 8 air filter 20x20x1"
  - name: "Programmable heat pump thermostat"
    search: "heat pump compatible programmable thermostat"
datePublished: 2026-10-18
dateModified: 2026-10-18
reviewedBy: ""
faq:
  - q: "Why is my Rheem heat pump completely dead, with no fan and no outdoor unit?"
    a: "When both the indoor air handler and the outdoor unit are silent, the problem is usually upstream of both: a blank thermostat, a tripped breaker or disconnect, a tripped condensate float switch, or a blown 3-amp low-voltage fuse on the air handler board. The last item is a technician check."
  - q: "Does a Rheem heat pump reset itself after a power loss?"
    a: "Usually yes. After power returns, most Rheem outdoor controls enforce a short anti-short-cycle delay of about 5 minutes before the compressor restarts. Wait at least that long before assuming it has failed. Some communicating models hold a fault code until power is cycled."
  - q: "Can I replace the blown fuse on the control board myself?"
    a: "No. The fuse sits inside the air handler cabinet, next to live 240V wiring. A blown low-voltage fuse also signals a short somewhere in the thermostat wiring that a technician needs to find, or the new fuse will blow too."
  - q: "Is this the same as my heat pump not heating?"
    a: "No. This page covers a system that shows no sign of life at all. If the fan runs or the outdoor unit hums but the air stays cool, see the Rheem heat pump not heating and compressor not running guides."
---

## What this code means

"Won't turn on" is a symptom, not a stored fault code. It means the system gives no sign of life when the thermostat calls for heat or cooling:

- The indoor blower stays off.
- The outdoor unit is silent.
- Often the thermostat display is blank.

On a Rheem split heat pump, everything starts with 24V control power. That voltage is produced by a transformer in the indoor air handler, protected by a low-voltage fuse (typically 3A) on the board, and sent to the thermostat and outdoor unit. Any break in that chain stops the whole system:

- Line power to the air handler
- The transformer or fuse
- The thermostat
- A safety switch such as a condensate float switch

Behavior after power is restored varies by model:

- **Most non-communicating units:** Resume on their own after a roughly 5-minute compressor delay.
- **Communicating EcoNet systems:** May display a fault on the thermostat that holds until it is cleared or power is cycled.

If only part of the system is dead, a different guide fits better:

- **Fan runs but the outdoor unit doesn't:** See the compressor and outdoor fan guides.
- **Outdoor unit runs but there's no airflow indoors:** That is a blower issue.

## Common causes, ranked by probability

1. **Thermostat problem.** Dead batteries, the wrong mode (Off, or Heat/Cool set past the current temperature), or an EcoNet or smart thermostat that has lost power or its connection.
2. **Tripped breaker or switched-off disconnect.** Split systems usually have two breakers: one for the air handler and one for the outdoor unit. The air handler may also have a service switch that looks like a light switch.
3. **Tripped condensate float or overflow switch.** A clogged drain lets water rise in the pan. A safety switch then cuts 24V power, which shuts the system down on purpose. This is common in attic and closet air handlers.
4. **Blown low-voltage fuse on the air handler board.** Usually caused by a shorted thermostat wire, often outdoors where wire is chewed or nicked, or by a shorted contactor coil.
5. **Air handler door or panel safety switch open.** Some Rheem air handlers cut power when the blower access panel isn't fully seated.
6. **Failed 24V transformer.** Often follows a short or a power surge.
7. **Failed air handler control board, or broken low-voltage wiring.** Includes loose terminals at the board, thermostat, or outdoor unit.

## Safe checks before you call anyone

- **Thermostat:** Replace the batteries if it has them. Set the mode to Heat or Cool and move the setpoint at least 3°F past room temperature. Set the fan to Auto. If the display is blank on a hard-wired thermostat, that points to lost 24V power, so keep going down this list.
- **Breakers:** At the main panel, find the air handler (or furnace/heat strip) breaker and the outdoor unit breaker. Reset any that are tripped, once only. If one trips again, stop and call a technician.
- **Switches:** Make sure the service switch near the indoor unit and the outdoor disconnect box are both on.
- **Condensate:** Look for water in the secondary drain pan under the air handler, or a full pan with a float switch attached. Clear an accessible drain line at its outdoor end or cleanout using a wet/dry vac. Wait a few minutes for the float to drop. Don't remove or bypass the float switch.
- **Panels:** Make sure the air handler's exterior access panels are fully seated and latched. Firmly reseat any loose panel without removing screws or opening the cabinet.
- **Filter:** A badly clogged filter usually doesn't stop the system from turning on, but replace it if it's dirty while you're there.
- **Wait:** After restoring power, wait 5–10 minutes for the anti-short-cycle delay to finish.

If the system is still dead after these checks, the cause is inside a cabinet. Call a technician.

## How a technician will diagnose it

A competent technician will:

- Confirm 240V line voltage at the air handler and outdoor unit.
- Measure transformer output (about 24–28VAC) and check the board fuse.
- If the fuse is blown, isolate the short by disconnecting the thermostat and outdoor wiring one leg at a time. Common culprits are a nicked wire run, a shorted contactor coil, or a reversing valve solenoid. Replacing the fuse without finding the short isn't a real fix.
- Check continuity through the float switch and door switch.
- Read any board LED or EcoNet fault history. Codes differ by board, so they should use the chart on your unit's panel.
- Confirm the thermostat sends R-to-Y/G/O signals.

A quote for a new board or a whole system should be backed by these measurements.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Thermostat blank, battery model | Dead batteries | Replace batteries | None |
| Thermostat blank, hard-wired | No 24V: fuse, transformer, float switch | Check breakers and the drain pan | Test transformer and fuse, find the short |
| Thermostat works, nothing runs | Tripped breaker or disconnect off | Reset once; turn switches on | Find the cause if the breaker trips again |
| Water in the secondary pan | Clogged condensate drain, float switch tripped | Clear the drain line, empty the pan | Flush the drain and trap, check the float |
| Died after a storm or surge | Blown fuse, transformer, or board | Reset breakers once | Replace the fuse, transformer, or board |
| Dead after a panel was removed | Door switch open | Reseat the panel firmly | Test or replace the door switch |
| Fuse blows again right after replacement | Shorted wire or contactor coil | None | Trace and repair wiring, replace the contactor |

## Repair costs

Typical US ranges, parts and labor:

| Repair | Typical cost |
|---|---|
| Thermostat batteries or settings | $0–$10 |
| Air filter | $10–$40 |
| Service call or diagnostic | $90–$200 |
| Condensate drain clearing | $100–$250 |
| Float switch replacement | $120–$250 |
| Low-voltage fuse replacement plus finding the short | $100–$300 |
| Thermostat wire repair or new run | $150–$400 |
| Door switch | $120–$250 |
| Transformer | $150–$350 |
| Contactor (if its coil shorted) | $150–$350 |
| New thermostat, installed | $150–$500 (EcoNet or smart models cost more) |
| Air handler control board | $300–$650 |

Costs are higher for after-hours visits, attic installs, and any parts covered or excluded by your Rheem warranty registration.

## Related codes

- Rheem Heat Pump Breaker Keeps Tripping: Causes & Fixes
- Rheem Heat Pump Compressor Not Running: Causes & Fixes
- Rheem Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Rheem Heat Pump Not Heating: Causes, Fixes & Costs
- Rheem Heat Pump Not Cooling: Causes, Fixes & Costs
- Rheem Heat Pump Flashing Light: Causes & Fixes
- Rheem Furnace Won't Turn On: Causes, Fixes & Costs (for gas furnace and heat pump dual-fuel setups)

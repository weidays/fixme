---
title: "Bryant Heat Pump Won't Turn On: Causes, Checks & Fixes"
code: "Won't turn on"
description: "Bryant heat pump won't turn on? Causes like tripped breakers, thermostat faults, blown fuses or a failed board, safe checks, and repair costs of $0 to $1,200."
brand: bryant
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $1,200+ if the control board or transformer needs replacement"
appliesTo: "Bryant split-system heat pumps (Legacy, Preferred and Evolution series) with an indoor air handler or furnace. Evolution communicating systems show fault text on the wall control, while 24V systems rely on board LED flash codes. Codes and reset behavior vary by model and board."
tags:
  - bryant
  - heat-pump
  - wont-turn-on
  - no-power
  - thermostat
  - troubleshooting
parts:
  - name: "Thermostat batteries (AA or AAA, per your model)"
    search: "AA alkaline batteries thermostat"
  - name: "Replacement air filter (size printed on current filter)"
    search: "MERV 8 HVAC air filter 16x25x1"
datePublished: 2026-11-26
dateModified: 2026-11-26
reviewedBy: ""
faq:
  - q: "Why does my Bryant heat pump have no power at all, not even the indoor fan?"
    a: "When nothing runs, including the indoor blower, look at the indoor side first. Common causes are a tripped air handler or furnace breaker, a switched-off service switch, a loose blower door, a blown 3-amp control fuse, or a failed 24V transformer. Only a technician should test or replace the fuse or transformer."
  - q: "My thermostat is blank. Is the heat pump broken?"
    a: "Not always. A blank thermostat usually means dead batteries or lost 24V power from the indoor unit. Replace the batteries first. If it stays blank and the indoor unit breaker is on, the system likely has a blown low-voltage fuse or a failed transformer, which a technician must diagnose."
  - q: "Can I reset my Bryant heat pump?"
    a: "You can turn the thermostat off, switch off the indoor and outdoor breakers for about five minutes, then restore power once. If the unit still won't start, or it starts and shuts down again, stop and call a technician. Repeated resets can hide a fault and cause damage."
  - q: "Why does the indoor fan run while the outdoor unit stays off?"
    a: "That is a different problem from a total no-start. See the Bryant Heat Pump Compressor Not Running and Outdoor Fan Not Spinning guides. Typical causes there include a bad capacitor, contactor, or pressure switch lockout."
  - q: "Is it safe to keep resetting a breaker that trips?"
    a: "No. Reset a breaker only once. If it trips again, the cause is an electrical fault such as a shorted motor, compressor, or wire. Leave it off and call a licensed technician. Our Breaker Keeps Tripping guide covers this in detail."
---

## What this code means

"Won't turn on" is a symptom, not a stored fault code. It means the whole system fails to respond to a call for heating or cooling. The indoor blower doesn't start, the outdoor unit stays silent, and the thermostat may be blank or show a call with no result.

A Bryant split heat pump needs two power supplies:

- **Line voltage (240V) to the outdoor unit**, usually from its own breaker and outdoor disconnect.
- **Power to the indoor air handler or furnace** (120V or 240V). Its transformer creates the 24V control power that runs the thermostat and the outdoor contactor.

A full no-start almost always means the indoor side or the 24V control circuit has lost power. That is the focus of this page.

If the indoor fan runs but the outdoor unit doesn't, see these guides instead:
- Bryant Heat Pump Compressor Not Running
- Bryant Heat Pump Outdoor Fan Not Spinning

**How resets work on Bryant systems:**

- **Evolution communicating systems** show fault messages on the wall control. Some faults clear on their own; others hold until power is cycled. This varies by fault and software version.
- **Conventional 24V systems** show LED flash codes on the indoor board. A blown low-voltage fuse does not reset itself; it must be replaced.
- **Outdoor heat pump boards** apply an anti-short-cycle delay of about 5 minutes after power returns. A unit that seems dead for the first few minutes may simply be waiting out this delay.

## Common causes, ranked by probability

1. **Thermostat issue.** Possible causes:
   - Dead batteries
   - Wrong mode (Off, or Cool when heat is needed)
   - Setpoint not calling for heat or cooling
   - A programmed schedule or hold overriding your setting
2. **Tripped breaker or switched-off service switch.** The indoor unit's service switch often looks like a light switch and is easy to flip by mistake.
3. **Anti-short-cycle time delay after a power outage or reset.** This resolves by itself within a few minutes.
4. **Blower access door not fully seated.** The door safety switch cuts power to the indoor unit when the door is loose.
5. **Condensate safety (float) switch tripped.** If installed, it opens the 24V circuit when the drain pan or line backs up.
6. **Blown 3A or 5A low-voltage fuse on the indoor control board.** This is usually caused by a shorted thermostat wire, a pinched outdoor control cable, or a failed contactor coil. The fuse will blow again if the short is not fixed.
7. **Failed 24V transformer** in the air handler or furnace.
8. **Damaged thermostat wiring or loose low-voltage connections.** Examples include rodent damage, crushed cable at the outdoor unit, or corroded splices.
9. **Failed indoor control board or Evolution communication fault.** On Evolution systems, the wall control may show a "communication" or "device not found" fault.
10. **Failed thermostat or wall control.**

## Safe checks before you call anyone

Do only these steps. Do not open the electrical compartment or touch any wiring.

1. **Check the thermostat.**
   - Replace the batteries if your model uses them.
   - Set it to Heat (or Cool) and set the temperature at least 3°F beyond room temperature.
   - Cancel any hold or vacation mode.
   - If you have an Evolution control, write down any fault message it shows.
2. **Check the breakers.**
   - Find both the indoor unit (air handler or furnace) breaker and the outdoor unit breaker.
   - If one is tripped, switch it fully off, then back on, **once**.
   - If it trips again, stop and call a technician.
3. **Check the switches.**
   - Make sure the indoor service switch next to the unit is on.
   - Make sure the outdoor disconnect is fully seated or switched on.
4. **Reseat the blower access panel.** Push the indoor unit's lower panel until it sits firmly. Do not remove the panel or press the door switch inside.
5. **Wait 5–10 minutes** after power is restored. This gives the time delay a chance to clear.
6. **Check the condensate drain.**
   - Look for a full drain pan, a backed-up drain line, or a tripped float switch.
   - If the line is clogged, clear the outside end, or pour a cup of vinegar into the access tee if your system has one.
   - Power may return once the water drains.
7. **Check the air filter.** Replace it if it's dirty. A clogged filter won't stop the system from turning on, but it causes other faults.
8. **Do one full reset if nothing has worked.**
   - Set the thermostat to Off.
   - Turn off both breakers for 5 minutes.
   - Restore power, then set the thermostat to call for heat or cooling.
   - If the unit still won't start, call a pro. Don't keep cycling the power.

## How a technician will diagnose it

A Bryant-trained technician typically checks the following, in roughly this order:

- **Thermostat and wall control:** confirms the call, and on Evolution systems reads the stored fault history.
- **Line voltage:** measures supply voltage at the indoor unit and the outdoor disconnect.
- **Door switch:** checks continuity with the door properly seated.
- **Indoor board LED:** reads the status light and any flash code.
- **24V circuit:** tests transformer output and checks the low-voltage fuse.
- **Short hunting (if the fuse is blown):** disconnects thermostat and outdoor wires one at a time to find the short. Common culprits are the contactor coil, crushed cable, or the reversing valve solenoid circuit. Replacing a fuse without finding the short is not a proper repair.
- **Float switch and condensate safety circuit.**
- **Evolution communication:** checks the ABCD wiring and communication status between the wall control, indoor unit, and outdoor unit.
- **Board replacement:** only after the power supply and wiring are confirmed good.

Be cautious of a quote for a new control board that doesn't include confirmed voltage readings first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Thermostat blank | Dead batteries or no 24V | Replace batteries; check indoor breaker and switch | Test transformer and fuse; repair wiring |
| Thermostat on, nothing runs | Wrong mode, schedule, or hold | Set mode and setpoint; cancel hold | Verify thermostat output; replace control if failed |
| Nothing runs after an outage | Tripped breaker or time delay | Reset breaker once; wait 10 minutes | Find the cause if the breaker trips again |
| No power indoors, breaker on | Loose panel or service switch off | Reseat the panel; turn the switch on | Test the door switch; replace if faulty |
| Water in the drain pan, no operation | Float switch tripped | Clear the condensate line | Clear the trap and pan; check the float switch |
| Board LED off, power present | Blown fuse or failed transformer | None. Call a pro. | Find the short; replace the fuse or transformer |
| Evolution communication fault | ABCD wiring or board fault | Record the message; do one reset | Test the communication bus; replace the faulty device |
| Breaker trips immediately | Electrical short | Leave it off | Insulation and component testing |

## Repair costs

Typical US ranges, including labor:

| Repair | Typical cost |
|---|---|
| Thermostat batteries, mode fix, breaker reset, drain clearing (DIY) | $0–$20 |
| Service call and diagnosis | $90–$250 |
| Clear the condensate line or replace the float switch | $100–$300 |
| Door safety switch | $120–$250 |
| Low-voltage fuse plus short repair (wiring or contactor coil) | $150–$400 |
| 24V transformer | $150–$400 |
| Standard thermostat replacement | $150–$450 |
| Evolution or Infinity-type wall control | $400–$900 |
| Indoor control board | $400–$900 |
| Outdoor heat pump control board | $450–$1,200 |
| Repair of a damaged control wiring run | $150–$500 |

After-hours and holiday calls often add $100–$200. Parts covered under Bryant's limited warranty usually still incur labor charges.

## Related codes

Bryant Heat Pump Breaker Keeps Tripping: Causes & Fixes. Bryant Heat Pump Compressor Not Running: Causes & Fixes. Bryant Heat Pump Outdoor Fan Not Spinning: Causes & Fixes. Bryant Heat Pump Not Heating: Causes, Checks & Fixes. Bryant Heat Pump Not Cooling: Causes, Checks & Fixes. Bryant Heat Pump Short Cycling: Causes, Checks & Fixes. Bryant AC Won't Turn On: Causes, Checks & Fixes. Bryant Furnace Code 13: Meaning, Causes & Fixes. Bryant Furnace Code 24: Meaning, Causes & Fixes.

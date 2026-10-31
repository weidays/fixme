---
title: "Carrier AC Won't Turn On: Causes, Fixes & Costs"
code: "Won't turn on"
description: "Carrier AC won't turn on? Learn the common causes, from thermostat, breaker and float switch to a blown fuse or bad board, plus safe fixes and repair costs."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY – $150-$450 for a fuse, transformer or contactor; $400-$900+ for a control board or communicating-system repair"
appliesTo: "Carrier split-system central air conditioners (Comfort, Performance and Infinity series condensers paired with a Carrier furnace or fan coil). Conventional 24V systems and Infinity/communicating systems are diagnosed differently. Fault indicators, fuse location and condensate safety switch setup vary by indoor unit and installation."
tags:
  - carrier
  - air-conditioner
  - wont-turn-on
  - no-power
  - thermostat
  - float-switch
  - low-voltage
parts:
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
  - name: "HVAC air filter (match your filter size)"
    search: "MERV 8 HVAC air filter 16x25x1"
  - name: "Replacement programmable thermostat (conventional 24V systems only)"
    search: "programmable thermostat 24V heat cool C-wire compatible"
datePublished: 2026-10-31
dateModified: 2026-10-31
reviewedBy: ""
faq:
  - q: "Why is my Carrier AC completely dead with no display on the thermostat?"
    a: "A blank thermostat usually means dead batteries, a tripped breaker or furnace switch, or a loss of 24-volt control power. That loss of power can come from a blown low-voltage fuse on the indoor control board, a failed transformer, or a shorted thermostat wire. If new batteries and a breaker reset don't fix it, the remaining causes are technician work."
  - q: "Can a clogged condensate drain stop my Carrier AC from turning on?"
    a: "Yes. Many installations have a float or condensate safety switch that cuts power to the cooling call when water backs up in the drain pan or line. The system stays off until the water clears. Clearing a clogged condensate line with a wet/dry vacuum at the outdoor drain end is a safe homeowner task."
  - q: "My indoor fan runs but the outdoor unit won't start. Is that the same problem?"
    a: "No. If the indoor blower runs but the outdoor condenser stays silent, the system is turning on, and the fault is at the outdoor unit. See our Carrier AC Compressor Not Running and Outdoor Fan Not Spinning pages. This page covers a system where nothing responds to the thermostat at all."
  - q: "Does a Carrier AC reset itself after a power outage?"
    a: "Most Carrier systems resume on their own once power returns, though the compressor may wait a few minutes because of a built-in time delay. Some thermostats and Infinity controls also add a startup delay. If nothing runs after 10 to 15 minutes, check the breakers and thermostat, then call a technician."
  - q: "Should I keep resetting the breaker if the AC still won't start?"
    a: "No. Reset a tripped breaker once. If it trips again, or the unit still won't start, stop and call a technician. Repeated resets can damage the compressor or wiring. A breaker that trips repeatedly is covered on our Carrier AC Breaker Keeps Tripping page."
---

## What this code means

"Won't turn on" is not a Carrier fault code. It describes a system where nothing happens when you call for cooling. The indoor blower doesn't start, the outdoor unit stays silent, and the thermostat may be blank.

This is different from a system that runs partially. If the fan runs but you get no cold air, or the outdoor fan or compressor stays off while the indoor unit works, the call for cooling is reaching the equipment. Those problems are covered on separate pages.

A Carrier split AC depends on three things before it will start:

- **Line voltage** to both the indoor unit (furnace or fan coil) and the outdoor condenser
- **24-volt control power**, which comes from the transformer in the indoor unit and passes through a low-voltage fuse on the control board
- **A cooling call** from the thermostat on the Y and G wires, or on the communication bus in Infinity systems

If any of these is missing, the whole system stays dark.

Because the transformer lives in the indoor unit, a dead furnace or fan coil also means a dead AC. Carrier systems generally restart on their own when power is restored. The outdoor unit may hold off for about 5 minutes because of the compressor anti-short-cycle delay. Whether any lockout persists depends on the board and model.

## Common causes, ranked by probability

1. **Thermostat problem.** This includes dead batteries, the wrong mode (Heat or Off instead of Cool), a setpoint above room temperature, or a failed or miswired thermostat. On Infinity systems, the UI control may show a communication fault instead.
2. **Tripped breaker or switch off.** This could be the indoor unit breaker, the furnace service switch (it often looks like a light switch), or the outdoor disconnect. If the indoor unit has no power, the AC has no 24V control power either.
3. **Condensate float/safety switch tripped.** A clogged drain line or full pan opens a switch that interrupts the cooling call. The switch can be wired into the 24V circuit, and on many setups it kills the thermostat too.
4. **Blower door safety switch open.** If the furnace or fan coil front panel isn't fully seated, the door switch cuts power to the indoor unit.
5. **Blown 3- or 5-amp low-voltage fuse** on the furnace or fan coil control board. This is usually caused by a chafed thermostat wire or a shorted outdoor control wire. On many Carrier furnaces, a blown fuse shows up as Code 24.
6. **Failed 24V transformer.**
7. **Damaged low-voltage wiring.** Common culprits are wires chewed by rodents, cut by lawn equipment, or corroded between the indoor and outdoor units.
8. **Failed indoor control board**, or a communication or board failure on Infinity systems.

## Safe checks before you call anyone

- **Thermostat:** Set it to Cool, lower the setpoint 3–5°F below room temperature, and set the fan to Auto. Replace the batteries if the display is blank or dim. Wait at least 5 minutes for the compressor delay.
- **Breakers:** At the panel, find the breakers for both the furnace/air handler and the AC condenser. Reset a tripped breaker **once** by switching it fully off, then on. If it trips again, stop and call a pro.
- **Switches:** Make sure the furnace service switch near the indoor unit and the outdoor disconnect are both on.
- **Front panel:** Confirm the furnace or air handler front panels are fully seated. Push them firmly into place, but do not open the cabinet or press the internal door switch.
- **Condensate:** Look for water in the drain pan or a backed-up line. If it's clogged, use a wet/dry vac on the drain line's outside end. The system may restart once the float switch drops.
- **Air filter:** Replace it if it's dirty. It won't stop a dead system from starting, but it prevents freeze-related follow-up problems.
- **Vents:** Make sure supply and return vents are open and unobstructed.

## How a technician will diagnose it

A technician should work through these steps in a logical order:

- **Confirm line voltage** at the indoor unit and the outdoor disconnect.
- **Check the 24V transformer.** They will measure the transformer's secondary at the board (R to C).
- **Inspect the low-voltage fuse** on the board. If it's blown, they should **find the short** before replacing it. Common spots are the thermostat cable, the outdoor control wire, and the float switch wiring.
- **Check the safety switches.** They will test the door switch and condensate switch for continuity.
- **Jump R to Y and G at the board** to tell whether the fault is a thermostat or wiring problem or an equipment problem.
- **Read the furnace status LED** for fault codes. On Infinity systems, they will check the UI and the communication bus.

Be skeptical of a quote to replace the control board before the technician has ruled out a fuse, a switch, or a wiring short.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Thermostat blank | Dead batteries, no 24V | Replace batteries; check breakers and switch | Test the transformer and fuse; trace the short |
| Thermostat on, nothing runs | Wrong mode or setpoint, open safety switch | Set to Cool and lower the setpoint; seat the panels | Jumper test; test the door switch |
| Water in drain pan, system off | Float switch tripped | Clear the condensate line with a wet/dry vac | Clean the pan; repair the drain or switch |
| Furnace LED shows Code 24 or a fuse fault | Blown low-voltage fuse | None | Find the short, repair wiring, replace the fuse |
| Breaker trips again after one reset | Electrical short | Stop resetting; call a pro | Diagnose the short or failed component |
| Infinity UI shows a communication error | Bus wiring or board fault | Check power only | Troubleshoot the bus wiring and board |

## Repair costs

These are typical US price ranges:

| Repair | Typical cost |
|---|---|
| Batteries, filter, breaker reset | $0–$40 |
| Service call/diagnostic | $90–$200 |
| Condensate line clearing or float switch replacement | $100–$300 |
| Low-voltage fuse plus short repair | $120–$350 |
| Thermostat cable repair or replacement | $150–$500 |
| Door safety switch | $120–$250 |
| 24V transformer | $150–$400 |
| Conventional thermostat (installed) | $150–$450 |
| Infinity control replacement | $500–$1,000+ |
| Furnace or fan coil control board | $400–$900 |

## Related codes

Carrier AC Breaker Keeps Tripping: Causes, Fixes & Costs
Carrier AC Compressor Not Running: Causes, Fixes & Costs
Carrier AC Outdoor Fan Not Spinning: Causes & Fixes
Carrier AC Fan Runs But No Cold Air: Causes & Fixes
Carrier AC Leaking Water: Causes, Fixes & Costs
Carrier Furnace Code 24: Blown Secondary Fuse & Fixes
Carrier Furnace Won't Turn On: Causes, Fixes & Costs
Carrier Heat Pump Won't Turn On: Causes, Fixes & Costs

---
title: "Carrier Heat Pump Won't Turn On: Causes, Fixes & Costs"
code: "Won't turn on"
description: "Carrier heat pump won't turn on? Learn the likely causes (power, thermostat, float switch, control board), safe checks, and repair costs from $0 to $1,000+."
brand: carrier
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150-$400 for a contactor, transformer or float switch; $600-$1,200+ for a control board or communicating-system component"
appliesTo: "Carrier Performance, Comfort and Infinity heat pumps (e.g. 25HCB, 25HCC, 25VNA, 25HPA series) with fan coils or furnaces. Wiring differs between conventional 24V systems and Infinity/Evolution communicating systems, and LED fault codes vary by outdoor control board."
tags:
  - carrier
  - heat-pump
  - wont-turn-on
  - no-power
  - thermostat
  - troubleshooting
parts:
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
  - name: "HVAC air filter (correct size)"
    search: "MERV 8 HVAC air filter 16x25x1"
datePublished: 2026-10-14
dateModified: 2026-10-14
reviewedBy: ""
faq:
  - q: "Why is my Carrier heat pump completely dead with no lights or sounds?"
    a: "A completely dead system usually has no power. The usual reasons are a tripped breaker, a disconnect switch that's off, a blown low-voltage fuse on the indoor control board, or a failed 24V transformer. Check the breakers and switches yourself. Fuse and transformer diagnosis is technician work."
  - q: "Can a clogged condensate drain stop my heat pump from turning on?"
    a: "Yes. Many installations have a float or overflow safety switch that cuts the 24V control circuit when the drain pan fills. Clearing the drain line and emptying the pan often restores operation once the switch drops back down."
  - q: "My thermostat is on but the outdoor unit won't start. Is that the same problem?"
    a: "Not exactly. If the indoor blower runs but the outdoor unit doesn't, see the Carrier Heat Pump Compressor Not Running and Outdoor Fan Not Spinning pages. This page covers a system that won't respond to a call at all."
  - q: "Does a Carrier heat pump have a startup delay?"
    a: "Yes. Most Carrier controls apply a roughly 5-minute anti-short-cycle delay after power is restored or the thermostat is changed. Wait at least 5 minutes before assuming a fault. Some Infinity systems may wait longer while they re-establish communication."
---

## What this code means

"Won't turn on" isn't a stored fault code. It means the heat pump doesn't respond at all when the thermostat calls for heating or cooling: no indoor blower, no outdoor unit, and often a blank or unresponsive thermostat.

On Carrier systems, both indoor and outdoor operation depend on a 24-volt control circuit. That circuit is powered by a transformer in the indoor unit (fan coil or furnace) and protected by a small fuse on the control board.

Anything that interrupts line power or that 24V circuit will make the entire system look dead. Common culprits include breakers, disconnects, the board fuse, safety float switches, the thermostat itself, or wiring.

How it resets depends on the cause:

- **Breaker trips and float switches** clear once power or drainage is restored.
- **A blown fuse** stays dead until it's replaced.
- **Infinity/Evolution communicating systems** may show a communication fault on the wall control instead of going blank.

## Common causes, ranked by probability

1. **Tripped breaker or switched-off disconnect.** This can affect either the indoor air handler or the outdoor unit; they're on separate circuits. A furnace or air-handler service switch that someone turned off is also common.
2. **Thermostat problem.** Possible issues include dead batteries, the wrong mode (Off, or Heat when you want Cool), a schedule override, or a failed thermostat.
3. **Condensate float/overflow switch tripped.** A clogged drain line or full pan opens the 24V circuit, shutting the system down. This is especially common in summer and with attic air handlers.
4. **Blown 3- or 5-amp control fuse on the indoor board.** This is usually caused by a shorted thermostat wire or a shorted outdoor contactor coil. It often recurs until the short is found.
5. **Failed 24V transformer.** This leaves the board and thermostat with no control power.
6. **Open door/panel safety switch.** An indoor blower door that isn't fully seated keeps the unit from starting.
7. **Damaged low-voltage wiring.** Wire chewed by rodents or cut by lawn equipment, often near the outdoor unit, can open or short the circuit.
8. **Control board failure, or a communication failure on Infinity systems.** This is less common and should only be concluded after power and fuses check out.

## Safe checks before you call anyone

- **Thermostat:** Replace the batteries. Confirm the mode is Heat or Cool and the setpoint is several degrees past room temperature. Then wait 5 minutes for the startup delay.
- **Breakers:** At the main panel, check the breakers for both the air handler/furnace and the outdoor heat pump. Reset a tripped breaker **once**. If it trips again, stop and see the Carrier Heat Pump Breaker Keeps Tripping page.
- **Switches:** Make sure the indoor service switch (it looks like a light switch) and the outdoor disconnect are on.
- **Panel:** Confirm the indoor unit's front panel is fully seated and latched.
- **Condensate:** Check the drain pan and line. If the pan is full, or a float switch on the line or pan is raised, clear the drain with a wet/dry vac at the outdoor drain outlet. Then give the switch time to reset.
- **Filter:** Replace a badly clogged filter. It won't usually cause a no-start, but it should be ruled out.

Don't open the electrical compartments or attempt fuse or wiring work yourself.

## How a technician will diagnose it

- **Verify line voltage** at the indoor unit and outdoor disconnect.
- **Check the 24V control circuit.** The tech measures transformer secondary voltage (about 24–28V AC) and checks the board fuse. If the fuse is blown, they hunt for the short by isolating the thermostat wires and the outdoor contactor coil.
- **Check the safety circuit** for continuity through the float switch and door switch.
- **Jump the thermostat circuit** at the board (R to G, Y, W) to determine whether the thermostat or its wiring is at fault.
- **Read board LEDs or fault history.** On Infinity systems, the tech reads the wall control's fault history and checks ABCD communication-bus voltages.
- **Inspect low-voltage wiring** for damage, especially outdoors.

A legitimate quote should name the specific failed part and explain why it failed. This matters most for fuse replacements, because a fuse that blew once will blow again if the underlying short isn't found.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Blank thermostat, no system response | Dead batteries or no 24V power | Replace batteries, check breakers and switches | Test transformer and fuse |
| Thermostat on, nothing runs | Float switch tripped or fuse blown | Clear condensate drain | Replace fuse and locate the short |
| System dead after rain or yard work | Damaged outdoor low-voltage wire | Check breakers | Repair wiring, replace fuse |
| Breaker trips immediately on reset | Electrical short or failed component | Do not reset again | Diagnose the shorted component |
| Infinity control shows a communication error | Communication bus or board fault | Cycle power once at the breakers | Test the bus and replace the board if needed |
| Works only after panel is pushed in | Door switch not engaged | Seat the panel firmly | Replace the door switch if faulty |

## Repair costs

| Repair | Typical US cost |
|---|---|
| Service call / diagnosis | $90–$200 |
| Thermostat batteries / filter (DIY) | $5–$40 |
| Control fuse replacement plus short repair | $100–$250 |
| Condensate drain clearing / float switch | $100–$300 |
| Door safety switch | $120–$250 |
| 24V transformer | $150–$350 |
| Low-voltage wire repair or run | $150–$400 |
| Standard thermostat replacement | $150–$400 installed |
| Indoor control board | $400–$900 |
| Infinity wall control or communicating board | $600–$1,200+ |

## Related codes

- Carrier Heat Pump Breaker Keeps Tripping
- Carrier Heat Pump Compressor Not Running
- Carrier Heat Pump Outdoor Fan Not Spinning
- Carrier Heat Pump Not Heating
- Carrier Heat Pump Not Cooling
- Carrier Furnace Won't Turn On
- Carrier Furnace Code 24

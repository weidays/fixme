---
title: "Trane Heat Pump Won't Turn On: Causes, Fixes & Costs"
code: "Won't turn on"
description: "Trane heat pump won't turn on? Learn the likely causes (power, thermostat, float switch, transformer, board), safe checks, and repair costs."
brand: trane
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150-$600 for a transformer, fuse or contactor repair, up to $1,500 for a control board"
appliesTo: "Trane split heat pump systems (XR, XL, XV series outdoor units) paired with Trane air handlers (TEM, GAM, Hyperion) or a gas furnace in dual-fuel setups. Communicating XV/ComfortLink II systems use a Trane communicating thermostat and show fault codes on the thermostat; conventional 24V systems rely on board LEDs. Exact LED patterns and lockout behavior vary by board and model, so check the wiring diagram on the unit panels."
tags:
  - trane
  - heat-pump
  - wont-turn-on
  - no-power
  - thermostat
  - air-handler
parts:
  - name: "Thermostat AA/AAA batteries"
    search: "AA alkaline batteries thermostat"
  - name: "HVAC air filter (match size on existing filter)"
    search: "MERV 8 HVAC air filter 16x25x1"
  - name: "Programmable thermostat compatible with heat pumps"
    search: "heat pump compatible programmable thermostat"
datePublished: 2026-10-14
dateModified: 2026-10-14
reviewedBy: ""
faq:
  - q: "Why is my Trane heat pump completely dead, with no fan and no outdoor unit?"
    a: "When nothing runs at all, the indoor air handler usually isn't supplying 24-volt control power. The usual reasons are a tripped breaker, an air handler service switch that's turned off, an open air handler panel, a tripped condensate float switch, or a blown low-voltage fuse or transformer. The air handler powers the thermostat and the outdoor unit's control signal, so a problem there shuts down the whole system."
  - q: "My thermostat screen is blank. Is the heat pump broken?"
    a: "Not necessarily. A blank screen often means dead batteries. On thermostats powered through the C wire, it means 24V power is missing. Replace the batteries first. If the screen stays blank and the breaker and switch are on, a blown control fuse or failed transformer is likely. That repair calls for a technician."
  - q: "Should I keep resetting the breaker if it trips again?"
    a: "No. Reset a tripped breaker once. If it trips again, leave it off and call a technician, because repeated trips point to a short or a failing component. See our page on a Trane heat pump breaker that keeps tripping."
  - q: "Can a clogged condensate drain stop my heat pump from turning on?"
    a: "Yes. Many Trane air handlers have a float or overflow switch that cuts thermostat power when the drain pan backs up. This happens mostly in cooling season. Clearing the condensate line usually restores operation once the water drains away."
  - q: "Does the system turn back on by itself after a fault?"
    a: "It depends on the fault. Short-cycle delays clear on their own, usually within about 5 minutes. A float switch resets once the water drains. A blown fuse or failed transformer never resets until it's repaired. Some communicating XV systems hold certain faults until power is cycled or a technician clears them."
---

## What this code means

"Won't turn on" isn't a Trane fault code. It describes a system that gives no response when you call for heat or cooling. The indoor blower doesn't start, the outdoor unit stays silent, and the thermostat may be blank.

On a Trane split heat pump, the indoor air handler (or the furnace, in dual-fuel systems) holds the 24-volt transformer. That transformer powers the thermostat and sends the run signal to the outdoor unit. A total no-start therefore usually traces to one of three things:

- Line power to the indoor unit
- The 24V control circuit
- The thermostat itself

Two situations are covered on other pages:

- **Only the outdoor compressor is dead while the indoor fan runs.** See Compressor not running.
- **The system runs but produces no heat.** See Not heating.

Behavior differs by system type:

- **Communicating systems** (XV20i/XV18 with ComfortLink II) usually show an alert on the thermostat.
- **Conventional 24V systems** may show nothing except a dark board LED on the air handler or outdoor control.

## Common causes, ranked by probability

1. **Thermostat issue.** Dead batteries, the wrong mode (Off, or Cool when you want Heat), a setpoint that isn't calling, or a programmed schedule or hold overriding you.
2. **Tripped breaker or service switch off.** The air handler and outdoor unit have separate breakers. The indoor unit also has a service switch, and the outdoor unit has a disconnect. Any of these can be off.
3. **Condensate float or overflow switch tripped.** A clogged drain line lets the pan fill, and the switch opens the 24V circuit. This is most common after cooling season or in attic air handlers.
4. **Air handler door or panel not seated.** Trane air handlers and furnaces have a door interlock switch that cuts power when the blower panel is loose.
5. **Blown 3- or 5-amp low-voltage fuse on the control board.** This is usually caused by a shorted thermostat wire, such as a nicked wire at the outdoor unit or chewed wire. The fuse won't come back until the short is found.
6. **Failed 24V transformer.** There is line voltage at the unit but no control power.
7. **Thermostat wiring fault.** A loose R or C conductor, a broken wire, or a failed thermostat.
8. **Control board failure** in the air handler, the outdoor defrost/control board, or a communicating board. A power surge is a common trigger.
9. **Outdoor-only no-start with the indoor unit running.** This points to a contactor, capacitor, or high/low-pressure lockout (behavior varies by model). It's covered under Compressor not running.

## Safe checks before you call anyone

- **Thermostat:** Replace the batteries. Set the mode to Heat or Cool and move the setpoint 3–5°F past room temperature. Cancel any hold or schedule. Then wait at least 5 minutes, because many Trane controls and thermostats have a built-in compressor delay.
- **Breakers:** Find the breakers for the air handler or furnace and for the outdoor unit. If one is tripped, switch it fully off and then back on, **one time only**. If it trips again, stop and call a pro.
- **Switches:** Make sure the service switch near the indoor unit is on. It often looks like a light switch. Check that the outdoor disconnect is in place and switched on.
- **Panels:** Confirm the air handler or furnace front panels are fully seated and fastened. Don't remove inner panels.
- **Condensate:** Check the drain pan and any secondary pan or float switch for standing water. Clear the condensate line at its outside access or cleanout. A wet/dry vacuum on the outdoor end of the drain works well. Give the float switch time to drop.
- **Filter:** Replace a dirty filter. It won't cause a total no-start, but it often comes with the frozen-coil and overflow problems that do.
- **One reset:** If everything checks out, turn off power at the indoor switch for 1 minute, then turn it back on. Do this once. If the system still won't start, call a technician.

## How a technician will diagnose it

A competent tech should follow a logical sequence and be able to explain each step:

1. **Confirm line voltage** (about 240V or 120V, depending on the unit) at the air handler and outdoor disconnect.
2. **Measure transformer secondary voltage.** It should read about 24–28VAC.
3. **Inspect the board fuse.** If it's blown, the tech looks for the short before replacing the fuse. That usually means isolating thermostat wire runs to the outdoor unit, the float switch, and the thermostat. Simply swapping the fuse without finding the cause is a red flag.
4. **Check the door switch and float switch** for continuity.
5. **Jumper R to G, Y, and W at the board** (briefly, for testing only) to separate a thermostat or wire fault from an equipment fault.
6. **Read board LEDs or communicating thermostat alerts.** For XV systems, the tech reviews active and historical alerts in the ComfortLink II menu.
7. **Check the outdoor unit** if the indoor unit runs. This includes the contactor coil voltage, capacitor, and pressure switch lockouts.

A board replacement should come only after the tech verifies correct power and inputs reaching the board with no output.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Thermostat blank | Dead batteries or no 24V | Replace batteries; check breaker and switch | Test transformer, fuse, and C wire |
| Thermostat on, nothing runs | Wrong mode, float switch, or blown fuse | Verify mode and setpoint; clear condensate line | Find short, replace fuse, test float switch |
| Breaker tripped | Electrical fault or short | Reset once only | Find shorted motor, compressor, or wiring |
| Water in drain pan | Clogged condensate line | Clear the drain line | Clean pan, check float switch, reroute drain |
| Stopped after panel removed | Door switch open | Reseat the outer panel firmly | Test or replace door switch |
| Indoor fan runs, outdoor dead | Contactor, capacitor, or lockout | Check outdoor disconnect and breaker | Diagnose outdoor unit (see Compressor not running) |
| Died after storm or surge | Transformer, fuse, or board damage | Reset breaker once | Test and replace damaged components |
| Communicating thermostat shows alert | System fault logged | Note the alert code | Read alert history and repair accordingly |

## Repair costs

Typical US prices, including parts and labor:

| Repair | Typical cost |
|---|---|
| Thermostat batteries, filter, breaker reset, condensate clearing | $0–$40 DIY |
| Service call / diagnostic | $90–$200 |
| Condensate line clearing or float switch replacement | $100–$300 |
| Board fuse plus locating a wiring short | $100–$350 (more if long wire runs need replacing) |
| Door/interlock switch | $120–$250 |
| 24V transformer | $150–$400 |
| Contactor or capacitor (outdoor) | $150–$450 |
| Standard thermostat replacement | $150–$450 installed |
| Trane communicating thermostat | $400–$900 installed |
| Air handler or outdoor control board | $400–$1,000 |
| Communicating or variable-speed board (XV series) | $600–$1,500 |

Trane's parts warranty is often 10 years when the system was registered. If a board, transformer, or contactor fails, ask the contractor to check your coverage. Labor usually isn't included.

## Related codes

- Trane Heat Pump Compressor Not Running: Causes & Fixes
- Trane Heat Pump Breaker Keeps Tripping: Causes & Fixes
- Trane Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Trane Heat Pump Not Heating: Causes, Fixes & Costs
- Trane Heat Pump Not Cooling: Causes, Fixes & Costs
- Trane Heat Pump Short Cycling: Causes, Fixes & Costs
- Trane Furnace Won't Turn On: Causes, Fixes & Costs (for dual-fuel systems)
- Trane Furnace Blower Not Running: Causes & Fixes

---
title: "American Standard Heat Pump Won't Turn On: Causes & Fixes"
code: "Won't turn on"
description: "American Standard heat pump won't turn on? Causes like tripped breakers, blown fuses, thermostat faults and failed boards, safe checks, and repair costs."
brand: american-standard
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $1,200+ if the control board or air handler transformer needs replacement"
appliesTo: "American Standard split-system heat pumps (Silver, Gold and Platinum series) paired with gas furnaces or air handlers such as TAM, GAM and similar. Communicating systems (AccuLink/Link controls) show diagnostic codes on the thermostat or board LEDs. Conventional 24V systems rely on the thermostat and board indicator lights. Fault display and reset behavior vary by model and board."
tags:
  - american-standard
  - heat-pump
  - wont-turn-on
  - no-power
  - thermostat
  - control-board
parts:
  - name: "Replacement air filter (match your filter size)"
    search: "HVAC air filter MERV 8 furnace air handler"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
  - name: "Programmable heat pump thermostat"
    search: "heat pump compatible programmable thermostat"
datePublished: 2026-11-26
dateModified: 2026-11-26
reviewedBy: ""
faq:
  - q: "Why is my American Standard heat pump completely dead, with no fan and no display?"
    a: "When both the thermostat and the indoor unit are dead, the problem is usually power. Common causes are a tripped breaker, a switched-off service switch, a blown low-voltage fuse on the control board, or a failed 24V transformer. If the breaker and switch are on and nothing works, call a technician."
  - q: "Does an American Standard heat pump reset itself after a fault?"
    a: "It depends on the fault and the model. Many lockouts and timed delays clear on their own once the condition is gone. Communicating systems may hold some faults until power is cycled. Turning the power off and back on once is reasonable. If the unit shuts down again, stop resetting it and call for service."
  - q: "My thermostat works but the heat pump won't start. Is it the thermostat?"
    a: "It can be. Check that the thermostat is in the correct mode and the setpoint is above or below room temperature as needed. A lit display only proves the thermostat has power. It does not prove the thermostat is sending a call. A technician can test the thermostat outputs at the indoor board to tell a thermostat fault from a wiring or board fault."
  - q: "Can a clogged condensate line stop my heat pump from turning on?"
    a: "Yes, if your system has a float or overflow safety switch. When the drain pan backs up, the switch cuts the 24V control circuit, and the system won't run, usually in cooling season. Clearing the drain line and letting the pan empty often restores operation."
---

## What this code means

"Won't turn on" is a symptom, not a stored fault code. It means your American Standard heat pump system does not respond to a thermostat call at all. Usually the indoor blower and the outdoor unit both stay off. Sometimes the thermostat screen is blank too.

This page covers a system that is unresponsive or dead. It is a different problem from these related ones:

- **Outdoor unit off but indoor fan running.** This points to the outdoor unit. See Compressor not running or Outdoor fan not spinning.
- **Unit runs but produces no heat.** See Not heating.

In almost every case, the root cause sits in one of three places:

- **Line-voltage power** (breakers and disconnects)
- **The 24V control circuit** (transformer, board fuse, safety switches, thermostat wiring)
- **The control board itself**

**Model differences:**
- **Communicating systems (AccuLink/Link):** Many faults appear as a message on the thermostat or as an LED code on the indoor or outdoor board. Some faults hold until power is cycled.
- **Conventional 24V systems:** These have no stored code. Diagnosis relies on voltage checks and board LED status.

**Reset behavior:**
- Short anti-short-cycle delays (typically about 3–5 minutes after power returns or a setting changes) clear on their own.
- Other lockouts vary by board.

## Common causes, ranked by probability

1. **Thermostat set wrong, or batteries dead.** Possible settings problems include the wrong mode, a setpoint that won't trigger a call, a schedule hold, or a blank battery-powered display.
2. **Tripped breaker or switched-off service switch.** The indoor unit (air handler or furnace) and the outdoor heat pump each have their own breaker. The indoor unit often has a light-switch-style service switch that can be mistaken for a room light switch.
3. **Condensate overflow (float) switch open.** A clogged drain line lets the pan fill. The float switch then cuts 24V power and the system stays off. This is most common during cooling season.
4. **Blower door or panel not fully seated.** Many air handlers and furnaces have a door interlock switch. A loose panel cuts power to the unit.
5. **Blown 3A or 5A low-voltage fuse on the control board.** This is usually caused by a shorted thermostat wire, a chafed wire to the outdoor unit, or a shorted component.
6. **Failed 24V transformer.** The thermostat goes blank, and nothing runs even though line voltage is present.
7. **Thermostat or wiring fault.** Examples include a broken or loose conductor, corroded terminals, or a failed thermostat. On communicating systems, a lost communication link between thermostat, indoor and outdoor units can also cause this.
8. **Failed indoor or outdoor control board.** Diagnosis is done only after power and 24V checks pass.

## Safe checks before you call anyone

1. **Check the thermostat.** Set it to HEAT or COOL as needed. Move the setpoint at least 3°F past room temperature, and set the fan to AUTO. Replace the batteries if the display is dim or blank. Then wait 5 minutes for any built-in start delay.
2. **Check the breakers.** Find the indoor unit and outdoor unit breakers in your panel.
   - If one is tripped, switch it fully OFF, then ON, **once**.
   - If it trips again, leave it off and see Breaker keeps tripping.
3. **Check the service switches.**
   - Make sure the switch at the indoor unit is ON.
   - Make sure the outdoor disconnect has its pull-out block or handle in the ON position. Do not touch any wiring.
4. **Check the condensate drain.** Look at the drain pan and the drain line exit.
   - If the pan is full, clear the line at its outside end or cleanout. A wet/dry vacuum works well.
   - Give the float switch time to reset after the water drains.
5. **Seat the exterior panels.** Make sure the blower compartment door is pushed in and latched. Do not remove panels to look inside.
6. **Replace the air filter if it's dirty.** It won't usually stop the system from starting, but it prevents follow-on problems.
7. **Make sure supply vents and return grilles are open and unblocked.**
8. **Reset the system once if it seems locked out.** Turn the power off at the breaker for 1 minute, then back on. Do not repeat the reset if the system stops again.

If none of these steps restores operation, stop and call a licensed HVAC technician. Everything beyond this point involves live electrical components inside the cabinet.

## How a technician will diagnose it

A competent technician will typically work through these steps in order:

1. **Confirm line voltage** at the indoor unit and the outdoor disconnect, using a meter.
2. **Check 24V at the transformer secondary.** If there is no output with good line voltage, the transformer is bad.
3. **Inspect the board's low-voltage fuse.** If it's blown, the technician must find the short before replacing the fuse. Usual suspects are thermostat cable, outdoor control wire, or a contactor coil.
4. **Check the safety circuit:** the door interlock switch and the condensate float switch, for continuity.
5. **Read the board LEDs, or communicating-system codes** on the thermostat or boards, against the model's service literature.
6. **Jumper the thermostat call at the board** (R to Y/G/W, briefly and for testing only). This separates a thermostat or wiring fault from a board fault.
7. **On communicating systems, verify data-line voltage and connections** between components.
8. **Replace the board only after** power, 24V, fuses, safeties and the call signal are all confirmed.

**Red flag:** a quote to replace a control board with no mention of checking the fuse, transformer or wiring short.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Thermostat blank, nothing runs | Dead batteries, tripped breaker, failed transformer or blown fuse | Replace batteries; check the breaker and service switch once | Test the transformer; find the short; replace the fuse |
| Thermostat works, nothing runs | Wrong mode or setpoint, start delay, or open float switch | Correct the settings; wait 5 minutes; clear the condensate line | Test thermostat outputs; check the safety circuit |
| Water in the drain pan, system off | Clogged condensate line tripped the float switch | Clear the drain line; let the pan drain | Repair the drain or pump; replace the float switch |
| Stopped after a filter change | Blower door not seated | Reseat and latch the panel | Replace the door switch if faulty |
| Fuse blows again right after replacement | Shorted wiring or component | Turn the system off; don't reset repeatedly | Trace and repair the short |
| Communication error on thermostat | Comm wiring or board fault (AccuLink/Link) | Power-cycle once | Test data lines; repair or replace the board |
| Breaker trips immediately | Electrical fault | Leave it off | Full electrical diagnosis |

## Repair costs

Typical US ranges, including parts and labor:

| Repair | Typical cost |
|---|---|
| Thermostat batteries, settings, breaker reset, filter | $0–$40 DIY |
| Service call and diagnosis | $90–$200 |
| Clear condensate line (pro) | $100–$250 |
| Float switch replacement | $120–$300 |
| Board fuse replacement plus finding the short | $100–$350 (more if wiring must be replaced) |
| Door interlock switch | $120–$275 |
| 24V transformer | $150–$400 |
| Thermostat replacement | $150–$500 (basic); $300–$900+ (communicating AccuLink/Link) |
| Thermostat or outdoor control wire repair or run | $150–$600 |
| Indoor or outdoor control board | $350–$1,200+ (communicating boards cost the most) |

Prices vary by region, warranty status, and whether the parts are OEM.

## Related codes

American Standard Heat Pump Breaker Keeps Tripping: Fixes
American Standard Heat Pump Compressor Not Running: Fixes
American Standard Heat Pump Outdoor Fan Not Spinning: Fixes
American Standard Heat Pump Not Heating: Causes & Fixes
American Standard Heat Pump Not Cooling: Causes & Fixes
American Standard Heat Pump Short Cycling: Causes & Fixes
American Standard AC Won't Turn On: Causes & Fixes
American Standard Furnace Won't Turn On: Causes & Fixes

---
title: "Goodman Furnace Blower Not Running: Causes & Fixes"
code: "Blower not running"
description: "Goodman furnace blower not running? Causes from a bad blower motor, capacitor, or control board, plus DIY checks, repairs and honest cost ranges."
brand: goodman
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,800 if a variable-speed ECM blower motor or module needs replacement"
appliesTo: >
  Most Goodman gas furnaces with PSC or ECM blower motors, including
  GMS/GMES 80, GMVC/GCVC 96 and GMEC series. Diagnostic steps vary by
  motor type — ECM models use a motor-mounted control module rather than
  a run capacitor.
tags:
  - goodman
  - furnace
  - blower
  - no-heat
  - blower-motor
parts:
  - name: Furnace air filter (read the size printed on the frame of your old filter)
    search: furnace air filter
  - name: Thermostat batteries
    search: AA alkaline batteries
datePublished: 2026-09-28
dateModified: 2026-09-28
reviewedBy: ""
faq:
  - q: Why is my Goodman furnace blower not running but the burners light?
    a: The most common cause is a failed blower motor, a bad run capacitor on PSC models, or a control-board relay that isn't energizing the blower after the fan-on delay expires.
  - q: Can I run my furnace if the blower isn't working?
    a: No. Without airflow the heat exchanger overheats, tripping the high-limit and risking damage. Keep the system off and call a technician until the blower is repaired.
  - q: Is a blower motor an expensive repair?
    a: It depends entirely on what failed and on the motor type. A run capacitor is the least costly repair, a PSC motor is mid-range, and a variable-speed ECM motor or its motor-mounted module is the most expensive. See the repair cost section for current installed ranges.
---

## What this code means

A Goodman furnace blower that won't run means the circulating (indoor) blower motor is not spinning when it should — either during a heat call, after the fan-on delay, or in constant-fan mode. On most Goodman boards there is no dedicated flash code for "blower not running"; instead you'll typically see the furnace complete ignition and then shut down on a thermal-protection device because heat builds up with no airflow.

**Don't assume you know which device tripped from the flash count alone.** On many Goodman/Amana integrated controls, a 4-flash code is documented as an *open thermal protection device*, which can mean the primary high-limit, an auxiliary or rollout-class limit, or — on some board revisions — a flame rollout switch. The exact table varies by control board part number and model series, so read the diagnostic legend printed on your own control board or on the inside of the furnace door rather than relying on a generic chart.

**Safety note:** because an open thermal-protection code can indicate a rollout or combustion problem rather than a simple airflow problem, do not keep resetting the furnace. Shut the furnace off at the switch and call a licensed HVAC technician. If you smell anything burning, or smell gas, leave the building first and call your gas utility or 911 from outside.

The blower is controlled by the integrated furnace control board, which energizes the motor through a relay after the heat exchanger warms up. If the motor, its capacitor (PSC models), its ECM module (variable-speed models), or the board's blower relay fails, the blower stays silent.

This is a **pro-level** repair. Everything past the filter, thermostat, and breaker lives inside the cabinet and involves line-voltage wiring, capacitors, or motor components — technician territory.

## Common causes, ranked by probability

1. **Failed run capacitor (PSC motors).** On single- and two-stage Goodman furnaces with a PSC blower, a weak or dead capacitor is the #1 reason the motor hums but won't spin, or won't start at all.
2. **Failed blower motor.** Worn bearings, an open winding, or a seized motor. May run hot, trip its internal overload, then quit.
3. **Control board blower relay not energizing.** The board isn't sending power to the blower after the fan-on delay — a common failure on aging integrated boards.
4. **ECM motor or motor module failure (variable-speed models).** GMVC/GCVC furnaces use an ECM with a motor-mounted control module — it sits on or in the motor's end bell and is matched to that motor, not a separate box elsewhere in the cabinet. Either the module or the motor can fail, and the diagnostics differ from PSC units.
5. **Blown low-voltage fuse or loose blower wiring.** A tripped 3-amp board fuse or a disconnected motor plug stops the blower.
6. **Failed thermostat "fan" wiring or setting.** In constant-fan mode a bad G-wire connection keeps the blower off.

**A note on the blower door switch:** on Goodman gas furnaces the blower-compartment interlock is a *line-voltage* switch wired in series with the 115V supply to the control board. If the lower panel isn't fully seated and that switch is open, the **entire furnace is dead** — no board LED, no inducer, no ignition — not just the blower. So a loose panel is not an explanation for "burners light but the blower is silent"; the burners can't light at all with that switch open. It belongs on the "nothing happens" list instead.

Whether the furnace holds in lockout or auto-resets depends on why it stopped and on which control your unit uses. A limit trip caused by no airflow may auto-reset when the furnace cools and then trip again, producing a repeating pattern — but several Goodman controls instead enter a timed lockout (often about an hour) after repeated limit trips. Check the diagnostic label on your unit's control board for the behavior that applies to your model.

## Safe checks before you call anyone

These are the only steps a homeowner should perform:

- **Check the thermostat.** Set it to Heat and raise the setpoint 5°F above room temperature. To test constant fan, set the fan switch to **On** — the blower should run continuously. If it does, your heating relay may be the issue; if it doesn't run at all, the problem is upstream.
- **Replace the thermostat batteries** if it's battery-powered and the screen is dim or blank.
- **Replace a dirty air filter.** A clogged filter can cause overheating and repeated limit trips that mimic a dead blower. Fit a clean filter of the correct size — read the size printed on the frame of the filter you remove.
- **Check the breaker and the furnace switch.** Reset a tripped breaker once, and confirm the switch on or near the furnace (looks like a light switch) is On.
- **Seat the blower-compartment panel firmly.** If the lower access panel is loose, the line-voltage door interlock opens and the whole furnace goes dead — no lights, no inducer, no ignition. Push the panel fully into place and confirm it's latched.
- **Confirm supply and return vents are open** and unobstructed so you're not misreading weak airflow as a dead blower.

If the blower still won't run after these checks, stop — the rest is a technician's job. Do **not** open the cabinet to inspect the motor, capacitor, or wiring.

## How a technician will diagnose it

A tech will sanity-check your quote against a sequence like this:

- Confirm 24V and 120V power reaching the control board, and check the board's low-voltage fuse.
- Verify the line-voltage blower-door interlock is closed with the panel on.
- Read the control board's own diagnostic legend to confirm what any stored flash code means on that specific board, including whether a thermal-protection code points at the limit or a rollout switch.
- Watch a full heat cycle: ignition, flame proving, then blower call after the fan-on delay.
- **PSC models:** test the run capacitor for correct microfarad (µF) rating and check motor windings for continuity and resistance.
- **ECM models:** check the motor-mounted module for power and communication, and test the motor per Goodman's ECM procedure.
- Test the board's blower relay for proper switching (measuring voltage out to the motor terminals).
- Inspect the blower wheel and bearings for a seized or dragging motor.
- Confirm whether repeated limit trips are caused by the missing airflow rather than a separate limit or rollout fault.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Burners light, then furnace shuts off on a thermal-protection device; no blower | Dead run capacitor or blower motor | Replace filter, reset breaker once, then leave the furnace off | Test/replace capacitor or blower motor; confirm which limit opened |
| Motor hums but won't spin (PSC) | Weak run capacitor | None inside cabinet | Test µF and replace capacitor |
| No blower in Fan-On mode | Board relay or G-wire fault | Confirm thermostat fan set to On, replace batteries | Test blower relay and thermostat wiring |
| Variable-speed unit dead blower | ECM motor or motor-mounted module failure | None | Test ECM module and motor per Goodman procedure |
| Whole furnace dead — no board LED, no inducer, no ignition — and the lower panel is loose | Open line-voltage blower-door interlock | Seat and latch the lower access panel fully | Test/replace the door interlock switch, verify 115V to the control |
| Whole furnace unresponsive with the panel properly seated | Blown 3A board fuse or loss of supply power | Reset breaker once, confirm furnace switch is On | Find cause of short, replace fuse, verify supply |

## Repair costs

Honest US installed ranges:

- **Diagnostic / service call:** $90 – $160
- **Run capacitor (PSC):** $150 – $300
- **Control board fuse + fault repair:** $150 – $350
- **Door safety (interlock) switch:** $120 – $220
- **Blower relay / integrated control board:** $400 – $1,200
- **PSC blower motor:** $450 – $900
- **ECM motor or motor-mounted module (variable-speed):** $800 – $1,800

Variable-speed parts sit at the top of these ranges because the module is matched to the motor and both are frequently supplied together. Blower wheels or motor mounts can add labor if the assembly must be pulled. Get an itemized quote so you can see whether you're paying for a capacitor or a full motor.

## Related codes

- **Goodman Furnace 4 Flashes: Open High-Limit Switch Fix** — the code family you'll often see when no airflow overheats the furnace; check your board's legend for what it means on your model.
- **Goodman Furnace Blower Won't Shut Off: Causes & Fixes** — the opposite problem, a blower that runs constantly.
- **Goodman Furnace Blowing Cold Air: Causes & Fixes** — when the blower runs but delivers no heat.
- **Goodman Furnace Keeps Shutting Off: Causes & Fixes** — for repeated cycling from limit trips.
- **Goodman Furnace Won't Turn On: Causes, Fixes & Costs** — if nothing on the furnace responds at all.

---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier AC outdoor fan not spinning? Common causes are a bad capacitor, failed motor, or contactor. See DIY checks, tech diagnosis and repair costs."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 for a new outdoor fan motor"
appliesTo: "Most Carrier split-system condensers (Comfort, Performance, Infinity 24-series) using single-phase PSC or ECM outdoor fan motors; behavior varies by board and motor type."
tags:
  - carrier
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: Dual run capacitor
    search: carrier dual run capacitor 45+5 mfd 440v
  - name: Condenser fan motor
    search: carrier condenser fan motor 1/4 hp 208-230v
  - name: Contactor 30 amp
    search: 30 amp 2 pole hvac contactor 24v coil
datePublished: 2026-07-20
dateModified: 2026-07-20
reviewedBy: ""
faq:
  - q: Can I run my AC if the outdoor fan won't spin?
    a: No. Running the compressor without the condenser fan lets pressures and temperatures spike, which can quickly destroy the compressor. Shut the system off at the thermostat.
  - q: Why does my Carrier fan hum but not turn?
    a: A humming fan that won't start is the classic sign of a failed run capacitor. The motor gets power but lacks the phase shift needed to begin rotating. It needs a capacitor test.
  - q: Is a stuck outdoor fan a DIY fix?
    a: Basic checks like resetting the breaker and clearing debris are safe DIY. Capacitor, motor, and contactor work involves high voltage and stored charge, so it is a job for a pro.
---

## What this code means

"Outdoor fan not spinning" is not a Carrier fault code — it's a physical symptom. Most Carrier residential condensers don't display a fan-specific error; the outdoor unit either runs or it doesn't, and you notice the fan on top of the condenser sitting still while the compressor hums (or the whole unit stays silent).

The outdoor (condenser) fan pulls air across the outdoor coil to reject the heat your system pulled out of the house. If that fan stops, heat has nowhere to go, refrigerant pressures climb, and the compressor can overheat and fail. This is why we rate it **pro**: it's usually a straightforward parts replacement, but it involves high-voltage components and a compressor that's expensive to lose.

Infinity and some Performance systems with communicating controls *may* log a system communication or high-pressure fault when the fan fails, but there's no universal "fan not spinning" code across the Carrier lineup.

## Common causes, ranked by probability

1. **Failed run capacitor.** The single most common cause. The dual run capacitor gives both the fan motor and compressor the electrical "kick" to start. When the fan side weakens or dies, the motor hums but won't spin.
2. **Failed condenser fan motor.** Bearings seize or windings burn out, especially on units 10+ years old. Motor may be hot, silent, or tripping the breaker.
3. **Faulty contactor.** The contactor is the relay that sends 240V to the outdoor unit. Pitted, stuck, or non-engaging contacts can leave the fan unpowered.
4. **Obstruction or debris.** Sticks, leaves, or ice jamming the fan blade. Occasionally the blade hits the shroud.
5. **Loss of power / tripped breaker.** A tripped double-pole breaker or blown disconnect fuse kills the whole outdoor unit.
6. **Bad control board or 24V signal.** On Infinity/communicating systems, a board fault or lost thermostat signal can stop the outdoor unit from being called on.
7. **High-pressure or float switch lockout.** A safety switch has opened and shut the unit down (the fan symptom is secondary).

## Safe checks before you call anyone

These are the only checks a homeowner should do. **Do not** open the electrical access panel on the condenser — the capacitor stores a dangerous charge even with power off.

- **Thermostat:** Set to COOL and lower the setpoint 3–5°F below room temp. Confirm it's calling for cooling. Replace batteries if it's a battery model.
- **Air filter:** A clogged filter can cause icing and pressure faults that shut the outdoor unit down. Replace if dirty.
- **Breaker:** Check your electrical panel for a tripped AC breaker (double-pole). Reset it **once**. If it trips again, stop and call a pro.
- **Disconnect box:** The pull-out disconnect near the outdoor unit should be fully seated. Don't probe inside it.
- **Visible debris:** With the breaker OFF, look through the top grille for leaves, sticks, or ice jamming the blade. Clear only what you can reach without removing panels.
- **Condensate:** A full drain pan or clogged line can trip a float switch and shut the system down. Check for standing water near the indoor unit.
- **Give it a listen:** If the fan hums but doesn't turn, note that for the tech — it points strongly to a capacitor.

If the fan still won't spin, turn the system off at the thermostat and call a technician. Don't repeatedly cycle the breaker on a unit that won't run.

## How a technician will diagnose it

A good tech will work in this order, and your quote should reflect it:

1. **Confirm the call for cooling** — verify 24V is reaching the outdoor contactor.
2. **Check incoming power** — measure 240V at the disconnect and contactor line side.
3. **Test the contactor** — verify the coil pulls in and contacts pass voltage to the load side.
4. **Test the capacitor** — measure microfarads against the rating printed on it (e.g., 45+5 µF). Out-of-spec = replace.
5. **Test the fan motor** — check windings for continuity/ohms, verify it's not seized by hand (power off), and check for a hot/tripped internal overload.
6. **Spin test** — with a known-good capacitor, confirm the motor runs.
7. **Check safeties** — high/low pressure switches and float switch, in case the fan stop is a symptom of a lockout.

Beware a quote that jumps straight to a new motor without testing the capacitor first — the capacitor is the cheap, common culprit.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but won't turn | Failed run capacitor | Turn off, don't force blade | Test & replace capacitor |
| Fan totally silent, compressor hums | Capacitor (fan side) or motor | Turn system off | Test capacitor, then motor |
| Whole outdoor unit dead | Tripped breaker, contactor, or disconnect | Reset breaker once | Test power path & contactor |
| Fan blade won't move by hand | Seized motor bearing | Clear visible debris only | Replace fan motor |
| Breaker trips when AC starts | Shorted motor or compressor | Stop resetting breaker | Diagnose short, replace part |
| Fan runs then shuts off quickly | Overheating motor / high-pressure lockout | Clean coil area, replace filter | Test overload & pressures |
| Buzzing at unit, no fan | Contactor not pulling in | None safe | Test 24V coil, replace contactor |

## Repair costs

Ranges are typical US installed prices including diagnostic. Regional labor and Carrier parts pricing vary widely.

- **Diagnostic / service call:** $80–$180
- **Run capacitor replacement:** $150–$400
- **Contactor replacement:** $150–$350
- **Condenser fan motor (PSC):** $350–$650
- **ECM/communicating fan motor:** $500–$900+ (Infinity systems)
- **Control board (communicating models):** $400–$800
- **Debris removal / blade re-seat:** often folded into the service call

DIY capacitor kits are cheap ($15–$40 in parts), but discharging the capacitor safely and working around 240V is genuinely hazardous — most homeowners should leave it to a pro.

## Related codes

- **Carrier AC Not Cooling: Causes, Fixes & Repair Costs** — the broader "no cold air" troubleshooting flow, which a stopped fan often triggers.
- **Carrier AC Frozen Evaporator Coil: Causes & Fixes** — icing that can cause pressure-related outdoor shutdowns.
- **Carrier Furnace Code 31: Causes, Fixes & Costs** — pressure switch faults on the furnace side (different equipment, similar safety-switch logic).

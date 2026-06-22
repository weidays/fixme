---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier AC outdoor fan not spinning? Causes include a bad capacitor, fan motor, contactor or control board, plus DIY checks and repair costs."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 for a fan motor + capacitor replacement"
appliesTo: >
  Most Carrier split-system condensers (Comfort, Performance and Infinity 24xxx
  series). Diagnosis is similar across models, but Infinity/Greenspeed units use
  variable-speed ECM fan motors and communicating boards that differ from the
  single-speed PSC motors on entry-level units.
tags:
  - carrier
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: Dual run capacitor
    search: carrier dual run capacitor 35/5 mfd 440v
  - name: Condenser fan motor
    search: carrier condenser fan motor 1/4 hp 208-230v
  - name: Contactor (single/double pole)
    search: carrier ac contactor 30 amp 24v coil
datePublished: 2026-06-22
dateModified: 2026-06-22
reviewedBy: ""
faq:
  - q: Can I run my Carrier AC if the outdoor fan won't spin?
    a: No. Running the compressor without the condenser fan lets head pressure and temperature climb fast, which can overheat and permanently damage the compressor. Shut the system off at the thermostat until it's repaired.
  - q: Why does my fan start if I push it with a stick?
    a: A fan that only spins after a nudge almost always points to a failed run capacitor. The capacitor gives the motor its starting torque; once it's weak, the motor can't begin turning on its own and runs hot.
  - q: Is a stuck outdoor fan a DIY fix?
    a: Clearing debris or resetting a tripped breaker is safe DIY. Replacing a capacitor, motor or contactor involves stored electrical charge and 240V wiring, so most homeowners should hire a licensed HVAC tech.
  - q: How much does a Carrier condenser fan motor cost to replace?
    a: Expect roughly $300 to $650 installed, depending on motor type and region. Variable-speed ECM motors on Infinity units cost more than standard single-speed PSC motors.
---

## What this code means

"Outdoor fan not spinning" isn't a numeric fault code — it's a symptom you'll notice at the outdoor condenser unit. On a call for cooling, the contactor should pull in, the compressor should hum, and the fan on top of the condenser should spin to push heat out of the refrigerant.

When the fan stays still while the compressor runs (or tries to run), heat has nowhere to go. Carrier's pressure and temperature limits will usually shut the compressor down on safety, and on Infinity/communicating systems the user interface may post a related fault about high pressure, compressor lockout, or a motor communication error rather than naming the fan directly.

Because a non-spinning fan can destroy a compressor within minutes, this is a **pro-level** problem. Stop running the system once you confirm the fan isn't turning.

## Common causes, ranked by probability

1. **Failed run capacitor.** The most common cause by far. The dual run capacitor feeds both the compressor and fan motor; when the fan side weakens, the motor can't start. Classic sign: the fan spins if you nudge it but won't start on its own.
2. **Bad condenser fan motor.** Worn bearings, an open winding, or a burned-out motor. May hum, run hot, get noisy, or do nothing at all.
3. **Failed or pitted contactor.** If the contactor won't pull in, neither the fan nor compressor gets power. Sometimes you'll hear the compressor try while the fan is dead due to a partial failure.
4. **Debris or ice jamming the fan blade.** Sticks, leaves, or a bent blade physically blocking rotation.
5. **Tripped breaker or blown low-voltage fuse.** No power to the condenser, or no 24V signal from the board.
6. **Control board / relay fault.** On Infinity and Performance boards, a failed fan relay or motor module. On variable-speed ECM motors, the motor module itself can fail.
7. **Capacitor wiring or loose terminal.** Corroded spade connectors and loose wires can interrupt the fan circuit.

## Safe checks before you call anyone

These are the only checks a homeowner should do. **Do not** open the electrical panel on the condenser or touch the capacitor — it stores a dangerous charge even with power off.

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature. Replace batteries if it's battery-powered and the screen is dim.
- **Air filter:** A clogged indoor filter can trigger safeties; swap it if it's dirty.
- **Breakers:** Check both the indoor and outdoor (condenser) breakers in the main panel. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Disconnect box:** Confirm the pull-out disconnect by the condenser is fully seated (some get bumped or pulled during yard work).
- **Visible debris:** With the system **off at the breaker**, look down through the top grille for leaves, sticks, or a cottonwood mat blocking the blade. Clear only what you can reach by hand from outside the grille.
- **Indoor vents and condensate:** Make sure supply registers are open and the condensate drain/pan isn't full (a full pan float switch can shut the system down).

If the fan still won't spin after these checks, shut the system off and call a technician — don't keep cycling it.

## How a technician will diagnose it

A good tech follows a logical sequence so you can sanity-check the quote:

1. **Verifies the call for cooling** and confirms 24V reaching the contactor coil.
2. **Tests the contactor** — checks that it pulls in and that line voltage passes through the contacts.
3. **Measures the run capacitor** with a meter, comparing the reading to the rated microfarads (µF) stamped on the can. A low or open reading condemns it.
4. **Checks the fan motor** — windings for continuity/shorts, and whether it spins freely by hand (bearing check). They may test it directly with a known-good capacitor.
5. **Inspects wiring and terminals** for burns, corrosion, or loose spades.
6. **On Infinity/communicating systems,** pulls fault history from the user interface and tests the ECM motor module or board relay.

A capacitor swap is quick and cheap; a motor or board takes longer. Be wary of any quote that jumps straight to "new motor" or "new condenser" without showing you a tested capacitor reading first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan spins after a nudge, then runs | Weak run capacitor | None — shut unit off | Test µF, replace dual capacitor |
| Fan dead, compressor hums | Capacitor or motor fault | Turn off at breaker | Test cap & motor, replace failed part |
| Nothing runs at condenser | Tripped breaker, contactor, or fuse | Reset breaker once | Test contactor, 24V signal, low-voltage fuse |
| Fan blade physically stuck | Debris or bent blade | Clear visible debris (power off) | Replace bent blade / motor |
| Fan hums but won't turn, hot motor | Failing motor bearings/windings | Shut off to prevent damage | Replace condenser fan motor |
| Infinity UI shows motor/comm fault | ECM motor module or board | Note the fault code | Test/replace ECM motor or control board |

## Repair costs

Honest US ranges, parts and labor, typical for a Carrier split system:

- **Diagnostic / service call:** $80 – $180
- **Run capacitor replacement:** $150 – $350
- **Contactor replacement:** $150 – $350
- **Condenser fan motor (single-speed PSC):** $300 – $600 installed
- **Condenser fan motor (ECM / variable-speed on Infinity):** $450 – $900+ installed
- **Control board / fan relay (Performance/Infinity):** $350 – $800
- **Fan blade replacement:** $100 – $250

Prices vary by region, motor type, and parts availability. A capacitor is the cheapest and most common fix, which is why a tech should test it before recommending bigger components.

## Related codes

- **Carrier AC Not Cooling: Causes, Fixes & Repair Costs** — broader cooling failures, including when a dead fan trips a high-pressure safety.
- **Carrier AC Frozen Evaporator Coil: Causes & Fixes** — airflow and refrigerant issues that can accompany condenser problems.
- **Carrier Furnace Code 31: Causes, Fixes & Costs** — pressure switch faults on the heating side (different equipment, related diagnostic logic).

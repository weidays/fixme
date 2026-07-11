---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a failed capacitor, fan motor, or contactor. See safe checks, diagnosis and repair costs from $0 to $650."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor needs replacement"
appliesTo: "Most Trane split-system condensers (XR, XL, XV and older Weathertron/XE series). Variable-speed units like the XV20i use an ECM fan and inverter board that differ from PSC-motor models."
tags:
  - trane
  - air-conditioner
  - condenser-fan
  - capacitor
  - contactor
parts:
  - name: Dual run capacitor
    search: trane dual run capacitor 45+5 uf 440v
  - name: Condenser fan motor
    search: trane condenser fan motor 1/4 hp 208-230v
  - name: Fan motor capacitor (single)
    search: 5 uf 370v round run capacitor
  - name: Contactor (1 or 2 pole)
    search: 30 amp 24v hvac contactor
datePublished: 2026-07-11
dateModified: 2026-07-11
reviewedBy: ""
faq:
  - q: Can I push the fan to start it with a stick?
    a: If the fan starts spinning after a nudge and then keeps running, the run capacitor is almost certainly weak or dead and needs replacement. Never do this while the panel is open and power is on — shut the disconnect first.
  - q: Why is my compressor running but the outdoor fan is not?
    a: This usually points to a failed fan capacitor or fan motor while the compressor side of a dual capacitor still works. Running the compressor without the fan can overheat it, so shut the system off until it is fixed.
  - q: Is a stuck outdoor fan an emergency?
    a: It is not a safety emergency, but you should turn the system off at the thermostat. Running the compressor with no condenser airflow can cause it to overheat and trip on high pressure, leading to expensive damage.
  - q: How much does it cost to fix a Trane outdoor fan?
    a: A capacitor is often $150 to $300 installed, a contactor $150 to $350, and a full condenser fan motor $350 to $650. Diagnosis alone is typically $90 to $180.
---

## What this code means

"Outdoor fan not spinning" is not a blink code — it's a physical symptom. On a Trane split-system air conditioner, the outdoor unit (the condenser) has a fan that blows air across the coil to release the heat your system pulled out of the house. When the compressor is humming but that top fan sits still, the unit can't reject heat, pressures climb fast, and the system will either stop cooling or trip out to protect itself.

Most Trane residential condensers use a single-speed PSC fan motor driven by a **run capacitor**. Variable-speed units (like the **XV20i** and other communicating models) instead use an **ECM/inverter-controlled fan**, so the failure modes and diagnostics differ — those may throw an actual fault code on the indoor board or thermostat.

If you smell burning or see scorched wiring at the outdoor unit, shut off power at the disconnect and call a pro before doing anything else.

## Common causes, ranked by probability

1. **Failed run capacitor.** The single most common cause. The capacitor gives the fan motor the jolt it needs to start spinning. A dead or weak one means the fan hums or does nothing.
2. **Bad condenser fan motor.** Worn bearings, a burned winding, or a motor that overheats and shuts off after running a few minutes.
3. **Contactor not pulling in.** If the contactor doesn't close, neither the fan nor compressor gets power — though usually both would be dead in that case.
4. **Debris or ice jamming the blade.** Sticks, a bird, or a bent blade physically blocking rotation.
5. **Low-voltage / control problem.** A failed thermostat call, broken 24V wire, or tripped safety switch stopping the outdoor call.
6. **Inverter or ECM board fault (variable-speed units).** On XV-series communicating systems, the fan is board-controlled; a board or motor fault will typically log a code.
7. **Blown fuse or tripped breaker feeding only part of the circuit.**

## Safe checks before you call anyone

- **Thermostat:** Set it to COOL and lower the setpoint several degrees so the system actually calls. Replace thermostat batteries if it's battery-powered.
- **Breaker:** Check both the indoor and outdoor breakers in the main panel. Reset a tripped breaker **once**. If it trips again, stop — that's a fault, not a fluke.
- **Air filter:** A clogged filter can cause freeze-ups and shutdowns; replace it if dirty.
- **Visible debris (power OFF):** Turn off the outdoor disconnect, then look through the top grille for leaves, sticks, or anything jamming the blade. Do not put your fingers or tools near the blade with power on.
- **Vents:** Make sure indoor supply and return vents are open and unblocked.
- **Condensate:** Check that the drain isn't backed up, which can trip a float switch and stop the system.

Do **not** open the electrical panel on the condenser, discharge a capacitor, or spin the fan by hand with power on. Capacitors store a dangerous charge even after power is off.

## How a technician will diagnose it

A qualified tech will:

1. **Confirm the call.** Verify 24V is reaching the contactor when the thermostat calls for cooling.
2. **Test the capacitor** with a meter, comparing the reading to the microfarad rating printed on it (e.g., 45+5 µF). Anything meaningfully below spec gets replaced.
3. **Check the contactor** for pitted contacts, chatter, or failure to pull in.
4. **Measure motor windings and amp draw** to tell a bad motor from a bad capacitor.
5. **Inspect for a jammed blade or seized bearings** by spinning it (power off) and feeling for resistance.
6. **On variable-speed units,** pull fault codes from the indoor board/thermostat and check the inverter drive and ECM fan communication.

A fair quote should name the specific failed part — "your run capacitor read 12 µF against a 45 µF rating" — not just "the fan's bad."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan doesn't spin | Failed run capacitor | Shut system off to protect compressor | Test and replace capacitor |
| Fan starts if nudged, then runs | Weak capacitor | Turn off; don't nudge with power on | Replace capacitor |
| Nothing runs outdoors, indoor blower works | Contactor not pulling in / no 24V | Check breaker, thermostat call | Test contactor and control voltage |
| Fan runs a few minutes then stops | Overheating motor | Turn off, let cool, call pro | Replace fan motor |
| Blade visibly blocked | Debris / bent blade | Power off, clear visible debris | Straighten/replace blade, check bearings |
| Fan dead, thermostat shows a fault code | ECM/inverter fault (XV series) | Note the code | Diagnose board and communicating fan |

## Repair costs

Ranges are typical US installed prices; your region, unit age, and part availability affect the total.

- **Diagnostic / service call:** $90 – $180
- **Run capacitor (replaced):** $150 – $300
- **Contactor (replaced):** $150 – $350
- **Condenser fan motor + capacitor (PSC units):** $350 – $650
- **Fan blade replacement:** $150 – $300
- **ECM / inverter fan motor or board (variable-speed XV units):** $500 – $1,500+, since parts are model-specific and often dealer-only

If the outdoor fan failed because the compressor overheated, get the compressor checked too — running a condenser with no airflow can shorten its life.

## Related codes

- **[Trane AC Not Cooling: Causes, Fixes & Repair Costs](/trane/air-conditioner/not-cooling)** — a stuck outdoor fan is one of several reasons a Trane AC stops cooling.
- **[Trane Furnace Code 90 (2 Blinks): Causes & Costs](/trane/furnace/code-90-2-blinks)** — for control-board fault codes on the heating side.

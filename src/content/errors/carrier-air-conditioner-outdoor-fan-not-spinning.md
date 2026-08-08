---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier AC outdoor fan not spinning? Common causes are a failed capacitor, bad fan motor, or contactor. Fixes and costs from $0 DIY to $650."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 for a condenser fan motor replacement"
appliesTo: "Most Carrier split-system central ACs and heat pumps (Comfort, Performance, Infinity series). Diagnostic behavior varies between single-stage contactor units and Infinity communicating boards."
tags:
  - carrier
  - air-conditioner
  - outdoor-unit
  - fan-motor
  - capacitor
parts:
  - name: Dual run capacitor
    search: carrier dual run capacitor 35+5 uf 440v
  - name: Condenser fan motor
    search: carrier condenser fan motor 1/4 hp 208-230v
  - name: Contactor 2-pole 30 amp
    search: 2 pole 30 amp contactor 24v coil hvac
datePublished: 2026-08-08
dateModified: 2026-08-08
reviewedBy: ""
faq:
  - q: Can I run my Carrier AC if the outdoor fan won't spin?
    a: No. Turn it off. Without the condenser fan, the compressor overheats and refrigerant pressure spikes, which can cause an expensive compressor failure.
  - q: Is a bad capacitor cheap to fix?
    a: The part is $15-$40, but the capacitor stores a dangerous charge and must be discharged safely. Most homeowners pay a pro $150-$300 to replace it correctly.
  - q: Why does the fan hum but not turn?
    a: A humming fan that won't start usually means a failed run capacitor or a seized motor bearing. Shut it off quickly to avoid burning out the motor windings.
  - q: How long should a condenser fan motor last?
    a: A Carrier condenser fan motor typically lasts 10-15 years. Heat, dirt, and worn bearings shorten that life, so keep the unit clean and clear.
---

## What this code means

"Outdoor fan not spinning" is not a numeric fault code — it's a symptom you can see and hear at your Carrier outdoor unit (the condenser). The large fan on top of the unit pulls air across the condenser coil to reject heat. When the compressor runs but that fan stays still, the system cannot dump heat, pressures and temperatures climb fast, and the unit will short-cycle or trip on a high-pressure or overheat safety.

On basic Carrier Comfort and Performance units there is no display, so you diagnose by sight and sound. On Infinity communicating systems, the indoor control or wall thermostat may log a related fault (such as a communication or outdoor-unit fault) rather than naming the fan directly — the exact message varies by board and firmware, so don't assume the code alone tells you the fan is the problem.

**Do not keep the system running while the fan is dead.** A compressor running without airflow across the coil can overheat and fail, turning a modest repair into a major one.

## Common causes, ranked by probability

1. **Failed run capacitor.** The most common cause by far. The dual run capacitor gives the fan motor its starting torque. When it weakens or fails, the fan hums but won't spin, or won't start at all.
2. **Bad condenser fan motor.** Worn bearings, burned windings, or a seized shaft. Often the motor is hot, noisy, or won't turn freely by hand (with power off).
3. **Contactor not pulling in.** The contactor is the relay that sends power to the fan and compressor. Pitted, stuck, or non-energizing contacts can starve the fan of voltage.
4. **Debris or ice jamming the blade.** Sticks, leaves, or a physical obstruction blocking the fan blade. Occasionally frost buildup on a heat pump running in cooling.
5. **Loss of 24V control signal.** A tripped safety, bad low-voltage wiring, or a control-board issue means the outdoor unit never gets the call to run.
6. **Blown high-voltage fuse or tripped disconnect.** The outdoor disconnect switch pulled or a blown fuse cuts power to the whole condenser.
7. **Control-board or motor-module fault (Infinity/ECM units).** Communicating and variable-speed models use electronic motor modules that can fail in ways a capacitor test won't reveal.

## Safe checks before you call anyone

These are the only checks a homeowner should do. Everything else involves stored electrical charge or refrigerant — leave it to a pro.

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature. Replace thermostat batteries if it uses them.
- **Air filter:** A clogged filter can freeze the indoor coil and trip the system. Swap a dirty filter and let any ice melt fully before restarting.
- **Breaker:** Check the indoor furnace/air-handler breaker AND the outdoor AC breaker. Reset a tripped breaker once. If it trips again, stop and call a pro.
- **Outdoor disconnect:** The pull-out or switch box on the wall near the condenser should be fully seated. If it's pulled out, push it back in.
- **Visible obstruction:** With the system OFF at the breaker, look down through the top grille for leaves, sticks, or debris jamming the blade. Remove anything visible by hand.
- **Airflow and vents:** Make sure supply and return vents inside are open and unblocked, and that the outdoor unit has clear space around it.
- **Condensate:** A full condensate pan or clogged drain can trip a float switch and shut the system down. Check for standing water near the indoor unit.

**Do not** open the electrical access panel, spin the fan with a stick to "help it start," or discharge the capacitor yourself. Do not repeatedly reset a unit that keeps tripping.

## How a technician will diagnose it

Knowing the steps helps you sanity-check a quote:

1. **Visual and safety check** — power off, inspect the blade, bearings, wiring, and for burned or swollen components.
2. **Capacitor test** — after safely discharging it, they measure microfarads against the printed rating (e.g., 5 µF for the fan). A reading well below spec confirms a bad cap.
3. **Voltage checks** — confirm 240V line voltage reaching the contactor and 24V control signal energizing it.
4. **Contactor inspection** — check for pitted contacts and whether it pulls in on a cooling call.
5. **Motor test** — check the fan motor for continuity, shorted windings, and free rotation. A hot or seized motor is condemned.
6. **On ECM/Infinity units** — read fault history at the control, test the motor module, and verify communication between boards.

A good tech starts with the cheap, common failure (the capacitor) before recommending a motor.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but won't spin | Failed run capacitor | Shut off unit to protect motor | Discharge and replace capacitor |
| Fan and compressor both dead | Blown fuse, tripped disconnect, no 24V | Reset breaker once; reseat disconnect | Test voltage, contactor, control signal |
| Fan spins slowly or noisily | Worn motor bearings | Turn off to prevent damage | Replace condenser fan motor |
| Blade won't turn by hand (power off) | Seized motor or obstruction | Remove visible debris | Free obstruction or replace motor |
| Clicks but nothing runs | Contactor not pulling in | None — call pro | Test/replace contactor |
| Runs then trips on high pressure | Dead fan causing overheating | Stop running the system | Fix fan cause; verify pressures |
| Infinity system shows outdoor fault | Motor module or comms fault | Note the exact message | Read fault log, test ECM module |

## Repair costs

Honest US ranges, parts plus labor:

- **Run capacitor replacement:** $150–$300. Part is $15–$40; the rest is diagnosis and labor.
- **Contactor replacement:** $150–$350.
- **Condenser fan motor replacement:** $350–$650 for a standard PSC motor.
- **ECM / variable-speed motor or module (Infinity):** $600–$1,200+ due to expensive electronic parts.
- **Blade or hardware replacement:** $75–$250.
- **Diagnostic/service call:** $75–$200, often applied toward the repair.

Prices vary by region, unit age, and parts availability. If your Carrier unit is under its 10-year parts warranty (registered), the part may be covered but you'll still pay labor.

## Related codes

- **Carrier AC Not Cooling: Causes, Fixes & Repair Costs** — a dead outdoor fan is one reason a Carrier AC stops cooling.
- **Carrier AC Frozen Evaporator Coil: Causes & Fixes** — airflow and pressure problems that can accompany fan and cooling faults.

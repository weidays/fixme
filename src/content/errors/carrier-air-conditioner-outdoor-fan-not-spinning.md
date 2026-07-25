---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier AC outdoor fan not spinning? Causes include a failed capacitor, motor, or contactor, plus fixes and honest repair costs ($150–$700)."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $700 for fan motor replacement"
appliesTo: "Most Carrier split-system condensers (Comfort, Performance, Infinity series) with single-phase PSC or ECM outdoor fan motors; behavior varies by board and motor type"
tags:
  - carrier
  - air-conditioner
  - outdoor-fan
  - condenser
  - capacitor
parts:
  - name: Dual run capacitor
    search: carrier dual run capacitor 45 5 mfd 440v
  - name: Condenser fan motor
    search: carrier condenser fan motor 1/4 hp 208-230v
  - name: Contactor
    search: carrier ac contactor 30 amp 24v coil
datePublished: 2026-07-25
dateModified: 2026-07-25
reviewedBy: ""
faq:
  - q: Can I run my Carrier AC with the outdoor fan not spinning?
    a: "No. Running the compressor without the condenser fan causes high head pressure that can overheat and permanently damage the compressor. Shut the system off at the thermostat until it is repaired."
  - q: Why does my outdoor fan hum but not turn?
    a: "A humming motor that will not start is the classic sign of a failed run capacitor. The motor lacks the phase shift it needs to begin rotating, so it just buzzes and may draw high current."
  - q: Is a stuck outdoor fan a DIY fix?
    a: "Clearing debris and resetting a breaker are safe DIY steps. Capacitor, motor, and contactor work involves high-voltage and stored charge, so it is rated pro for most homeowners."
  - q: How much does a Carrier condenser fan motor cost to replace?
    a: "Expect roughly $350 to $700 installed for a standard PSC motor, more for ECM motors on Infinity units. The motor alone runs $120 to $300, plus labor."
---

## What this code means

"Outdoor fan not spinning" is not a numeric fault code — most Carrier air conditioners do not flash a dedicated code for it. Instead, you notice that the compressor is running (you hear a hum from the outdoor unit) but the large fan on top of the condenser is not turning, or is barely creeping.

The outdoor fan pulls air across the condenser coil to release the heat your system removed from the house. If it stops, refrigerant pressure and temperature climb fast. Carrier's high-pressure protection or the compressor's internal overload may trip and shut the whole unit down. This is why the problem is rated **pro** — running the system in this state risks a compressor, the most expensive part of the whole system.

On Infinity systems with a communicating control board, you may see a related pressure or temperature fault in the fault history rather than an explicit "fan" message.

## Common causes, ranked by probability

1. **Failed run capacitor.** The single most common cause. The dual capacitor gives the fan motor the starting torque it needs. When it weakens, the fan hums but won't spin, or spins only if you nudge it.
2. **Failed condenser fan motor.** Bearings seize or windings burn out. The motor may be hot, silent, or tripping on its overload.
3. **Debris or ice jamming the blade.** Sticks, leaves, or a wire jammed in the fan cage can physically stop the blade.
4. **Bad contactor.** If the contactor doesn't fully close, the fan (and compressor) may get partial or no voltage.
5. **Tripped breaker or lost 240V leg.** A single blown leg can leave the fan without power while other components struggle.
6. **Control board or relay fault.** Less common; on communicating Infinity boards a failed fan relay can cut the signal.
7. **Loose or corroded wiring.** A burnt fan lead at the capacitor or motor connector.

## Safe checks before you call anyone

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature. Replace thermostat batteries if it's battery-powered.
- **Breaker:** Check both the indoor furnace/air handler breaker and the outdoor 240V breaker/disconnect. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Air filter:** A clogged filter can cause the indoor coil to ice and mask outdoor symptoms. Replace if dirty.
- **Visible debris:** With the system OFF at the thermostat and breaker, look through the fan grille for leaves, sticks, or a stuck blade. Remove obvious debris from the outside only — do not reach into the unit.
- **Vents and condensate:** Make sure supply/return vents are open and the condensate drain isn't backed up (some systems shut down on a full float switch).

Do **not** open the electrical panel, discharge a capacitor, or spin the fan by hand to "start" it while powered. The capacitor holds a dangerous charge even after power is off.

## How a technician will diagnose it

A qualified HVAC tech will:

1. Kill power at the disconnect and verify zero voltage before opening the electrical box.
2. **Test the run capacitor** with a meter — comparing the measured microfarads (µF) against the rating printed on the label (e.g., 45/5 µF). This is the fastest, most common find.
3. Inspect the **contactor** for pitting and check that it pulls in and passes voltage on both legs.
4. Check the fan motor: spin the shaft for bearing drag, test winding resistance, and check the motor overload.
5. Verify **240V** at the unit and 24V control voltage from the board.
6. On Infinity/communicating systems, pull fault history from the control to check for pressure or fan-relay faults.

If a tech quotes a compressor replacement without first confirming the capacitor and fan motor are good, get a second opinion.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan silent or slow | Failed run capacitor | Shut off, don't run it | Test and replace capacitor |
| Fan won't spin, motor hot/silent | Burnt fan motor | Shut off system | Replace condenser fan motor |
| Blade physically stuck | Debris in fan cage | Remove visible debris (power off) | Inspect blade, bearings |
| Whole unit dead, breaker tripped | Lost leg / contactor | Reset breaker once | Test contactor and voltage |
| Fan spins only if pushed by hand | Weak capacitor or bearings | Do not run it | Confirm cap vs. motor |
| Unit shuts off after a few minutes | High-pressure trip from no airflow | Turn off, call pro | Diagnose fan and pressures |

## Repair costs

Honest US ranges, parts plus labor:

- **Run capacitor:** $150 – $300 installed ($15–$40 part).
- **Contactor:** $150 – $350 installed.
- **Condenser fan motor (PSC):** $350 – $700 installed.
- **ECM/communicating fan motor (Infinity):** $500 – $900+ installed.
- **Fan blade:** $100 – $250 installed if bent or cracked.
- **Diagnostic/service call:** $80 – $180, often credited toward the repair.

Compressor damage from running without the fan can run **$1,500 – $2,800+**, which is exactly why you should not run the system with a dead fan.

## Related codes

- **Carrier AC Not Cooling: Causes, Fixes & Repair Costs** — broader no-cool troubleshooting.
- **Carrier AC Frozen Evaporator Coil: Causes & Fixes** — airflow and refrigerant issues that often accompany outdoor unit faults.

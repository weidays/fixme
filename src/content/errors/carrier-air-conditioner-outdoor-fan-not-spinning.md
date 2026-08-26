---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier AC outdoor fan not spinning? Common causes include a failed capacitor, bad motor or contactor, plus fixes and repair costs ($15–$650)."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$15 DIY capacitor – $650 if the condenser fan motor needs replacement"
appliesTo: "Most Carrier split-system condensers (Comfort, Performance, Infinity series) using single-phase PSC condenser fan motors; behavior varies on units with ECM/variable-speed fans and Infinity/Greenspeed inverter boards."
tags:
  - carrier
  - air-conditioner
  - outdoor-unit
  - condenser-fan
  - capacitor
parts:
  - name: Dual run capacitor
    search: carrier dual run capacitor 45+5 mfd 440v
  - name: Condenser fan motor
    search: carrier condenser fan motor 1/4 hp 208-230v
  - name: Contactor (single pole)
    search: hvac condenser contactor 30 amp 24v coil
  - name: Fan blade (replacement)
    search: condenser fan blade replacement 3 blade universal
datePublished: 2026-08-26
dateModified: 2026-08-26
reviewedBy: ""
faq:
  - q: Can I run my Carrier AC if the outdoor fan won't spin?
    a: No. Running the compressor without the condenser fan causes rapid overheating and high-pressure trips that can permanently damage the compressor. Turn the system off until it's repaired.
  - q: Why does my fan start if I push it with a stick?
    a: A fan that only spins after a nudge almost always has a failed or weak run capacitor. The capacitor provides the starting torque the motor needs, and it's a common, inexpensive part to replace.
  - q: How much does it cost to fix a Carrier condenser fan that won't spin?
    a: Expect roughly $150–$350 for a capacitor or contactor with labor, and $400–$650 for a full condenser fan motor replacement. Inverter-board issues on Infinity units can run higher.
  - q: Is a non-spinning fan dangerous?
    a: The capacitor stores a lethal charge even with power off, and the compressor can overheat. This is a pro-level repair unless you're only doing the safe checks listed below.
---

## What this code means

"Outdoor fan not spinning" isn't a numbered fault code on most Carrier air conditioners — it's a **physical symptom** you observe at the condenser (the outdoor unit). When your thermostat calls for cooling, the outdoor unit should hum to life: the compressor runs and the fan on top pulls air up through the coil to reject heat.

If the compressor is running but the top fan is dead still, heat has nowhere to go. Pressures spike within minutes, and the unit's internal high-pressure switch or compressor overload will trip to protect itself. On Carrier **Infinity and Greenspeed inverter systems**, the control board may store a fault (often related to motor communication or DC fan feedback) and display it at the indoor Infinity thermostat — behavior that varies by model. On standard single-stage Carrier units, there's usually **no code at all**, just a fan that won't turn.

This is rated **pro-level** because the most common culprit — the run capacitor — stores a dangerous electrical charge even after power is disconnected.

## Common causes, ranked by probability

1. **Failed run capacitor** — By far the most common cause. The dual run capacitor gives the fan (and compressor) the torque to start. A bulged, leaking, or weak capacitor leaves the fan humming but not turning, or dead.
2. **Failed condenser fan motor** — Worn bearings, a burned winding, or an internal thermal overload that has permanently opened. Sometimes the motor spins hot then quits.
3. **Bad contactor** — The contactor is the relay that sends power to the outdoor unit. Pitted, stuck-open, or ant-fouled contacts can starve the fan of voltage.
4. **Seized fan bearings or obstructed blade** — Debris, ice, or a bent blade physically jammed against the shroud.
5. **Compressor running / fan circuit issue on the same capacitor** — On dual capacitors, only the FAN terminal fails, so the compressor runs but the fan doesn't.
6. **Control/board fault (Infinity & inverter units)** — Loss of communication with an ECM/variable-speed fan, or a DC fan feedback error, will stop the fan and often log a fault at the thermostat. This varies significantly by model and board.
7. **Loose or corroded wiring** at the fan motor or capacitor spade terminals.

## Safe checks before you call anyone

Do only these. Anything involving opening the electrical access panel is pro work because of the stored capacitor charge.

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature. Replace batteries if it's a battery model.
- **Air filter:** A filthy filter can cause freeze-ups and nuisance trips. Replace if dirty.
- **Breakers:** Check both the indoor furnace/air-handler breaker and the **outdoor disconnect** (the box on the wall near the condenser) plus the AC breaker in your main panel. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Look and listen (power OFF):** Turn the system off at the thermostat. Look at the fan blade from above — is it blocked by leaves, a stick, or a bird's nest? Clear obvious debris with the power off.
- **Condensate:** A full condensate pan/float switch can shut the whole system down. Check for a full drain pan indoors.
- **Give the unit a rest:** If the fan quit after a hot spell, a tripped overload may reset after the unit cools for a couple hours. Do **not** repeatedly reset a unit that keeps shutting down.

If the fan still won't spin after these checks, it's time for a technician — do not push the blade to start it and walk away, as that only confirms a failed capacitor while the motor still runs unprotected.

## How a technician will diagnose it

A qualified tech will typically:

1. **Confirm the call for cooling** and verify 24V is reaching the contactor coil.
2. **Discharge and test the run capacitor** with a meter, comparing measured microfarads (µF) against the printed rating. This is the #1 finding.
3. **Check the contactor** for proper pull-in and clean, unpitted contacts; measure voltage in and out.
4. **Test the fan motor** — resistance across windings, amp draw against the nameplate FLA, and whether it spins freely by hand.
5. **Inspect wiring and terminals** at the motor and capacitor for burns or corrosion.
6. **On Infinity/inverter systems,** read stored faults at the thermostat and check ECM/DC fan communication and board outputs.
7. **Verify pressures** after the fan runs again to confirm the compressor wasn't damaged by running hot.

A quote that jumps straight to a new motor or compressor **without a capacitor test** is a red flag — ask them to show you the capacitor reading first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but doesn't turn; starts if nudged | Failed run capacitor | Turn unit off; note fan behavior | Discharge & replace capacitor, verify µF |
| Fan dead, compressor also silent | Contactor or power loss | Check disconnect & breaker once | Test contactor & 24V control, replace if bad |
| Compressor runs, fan totally dead | Fan terminal on dual cap, or fan motor | Shut system off to protect compressor | Test cap fan side & motor, replace failed part |
| Fan spins slowly, hot, then stops | Failing motor / bad bearings | Do not run the unit | Replace condenser fan motor |
| Blade physically jammed | Debris or bent blade | Remove visible debris, power off | Straighten/replace blade, check shroud |
| Fault shown on Infinity thermostat | Board / ECM communication | Note the exact fault text | Read code, test board & variable-speed fan |
| Breaker trips when fan should start | Shorted motor or wiring | Reset once; if it re-trips, stop | Isolate short, replace faulty component |

## Repair costs

Ranges are typical US installed prices including parts and labor; your area and unit tier will vary.

- **Run capacitor replacement:** $15–$40 part DIY value; **$150–$350** installed by a pro (diagnostic + part).
- **Contactor replacement:** $10–$30 part; **$150–$300** installed.
- **Condenser fan motor:** $80–$250 part; **$400–$650** installed (universal motors cost less than OEM Carrier motors).
- **Fan blade:** $20–$60 part; **$150–$300** installed.
- **Infinity/inverter control board or variable-speed fan module:** **$500–$1,200+** — model-specific and often best handled under warranty by a Carrier dealer.
- **Diagnostic/service call:** $80–$180, often credited toward the repair.

If your unit is under 5 years old, check the **Carrier parts warranty** (typically 10 years with registration) before paying full price on a motor or board — you may only owe labor.

## Related codes

- **Carrier AC Not Cooling: Causes, Fixes & Repair Costs** — the broader troubleshooting parent when the outdoor unit isn't performing.
- **Carrier AC Frozen Evaporator Coil: Causes & Fixes** — a stalled system from a bad fan can contribute to freeze-ups; related airflow and cooling faults.
- **Carrier Furnace Code 31: Causes, Fixes & Costs** — pressure switch faults share the "protective switch tripped" logic on the heating side.

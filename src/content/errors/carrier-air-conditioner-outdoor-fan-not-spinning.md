---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier AC outdoor fan not spinning? Causes include a failed capacitor, fan motor, or contactor. Fixes and US repair costs from $12 DIY to $650."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$12 DIY capacitor – $650 if the condenser fan motor is replaced"
appliesTo: "Most Carrier split-system condensers (Comfort, Performance, Infinity series) using a single-phase PSC condenser fan motor and dual-run capacitor. Infinity variable-speed units use an ECM motor and differ."
tags:
  - carrier
  - air-conditioner
  - condenser-fan
  - capacitor
  - no-cooling
parts:
  - name: Dual-run capacitor
    search: hvac dual run capacitor 45+5 mfd 440v round
  - name: Condenser fan motor
    search: carrier condenser fan motor 1/4 hp 208-230v
  - name: Fan motor start capacitor
    search: motor run capacitor 5 mfd 370v round
  - name: Contactor (single-pole/double-pole)
    search: hvac contactor 30 amp 24v coil dp
datePublished: 2026-08-27
dateModified: 2026-08-27
reviewedBy: ""
faq:
  - q: Why is my Carrier AC compressor running but the outdoor fan isn't spinning?
    a: The most common cause is a failed run capacitor. The compressor and fan often share a dual-run capacitor, and the fan's terminal can fail while the compressor still starts. A bad fan motor or wiring fault is also possible.
  - q: Can I run my Carrier AC with the outdoor fan not spinning?
    a: No. Without the condenser fan, the compressor overheats and head pressure spikes fast, which can cause a compressor lockout or permanent failure. Shut the system off at the thermostat until it's repaired.
  - q: Is it safe to spin the outdoor fan by hand to start it?
    a: Do not do this with power on — it risks injury and only confirms a weak capacitor. It is not a repair. Turn off the disconnect and breaker, then call a technician for proper diagnosis.
---

## What this code means

"Outdoor fan not spinning" isn't a numeric fault code — it's a symptom on your Carrier condenser (the outdoor unit). The condenser fan pulls air across the outdoor coil to reject the heat your system pulls out of your home. When it stops spinning, that heat has nowhere to go.

On most Carrier split systems the outdoor fan motor is a single-phase PSC (permanent split capacitor) motor that relies on a **run capacitor** to start and keep spinning. If the capacitor, motor, or the contactor that feeds it fails, the fan stays still even though the thermostat is calling for cooling.

This is rated **pro** for a reason: the outdoor unit stores line voltage in its capacitor even when powered off, and the compressor can overheat within minutes when the fan is down. On Carrier **Infinity variable-speed** models, the outdoor fan is an ECM (electronically commutated) motor controlled by a board and may log an actual fault code instead — that repair path is different from the PSC units described here.

## Common causes, ranked by probability

1. **Failed run capacitor.** By far the most common cause. Capacitors weaken with heat and age. Often the compressor still starts while the fan side of a dual-run capacitor has died, so you hear a hum but see no spinning blade.
2. **Seized or burned-out condenser fan motor.** Worn bearings, overheated windings, or years of dust and moisture kill the motor. It may hum, buzz, or do nothing.
3. **Failed contactor.** Pitted or stuck contacts interrupt power to the fan (and often the compressor too). Sometimes the fan gets partial voltage and barely tries to turn.
4. **Debris or ice jamming the blade.** A stick, leaves, or a bird's nest can physically block the fan; a badly iced coil can too.
5. **Blown fuse or tripped disconnect at the outdoor unit.** The pull-out disconnect or low-voltage control fuse may have failed.
6. **Motor wiring or connector damage.** Rodent damage, corroded terminals, or a loose fan lead.
7. **Failed control board (Infinity/ECM units only).** On variable-speed Carrier models, a board or ECM module fault can stop the fan and log a code.

## Safe checks before you call anyone

Keep this short and safe — do **not** open the outdoor electrical panel or touch the capacitor.

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature. Replace the batteries if it's a battery model.
- **Air filter:** A clogged filter restricts airflow and can lead to icing that jams things up. Replace it if dirty.
- **Breaker:** Check your electrical panel for a tripped AC breaker. Reset it **once**. If it trips again, stop and call a pro.
- **Outdoor unit for ice:** If the coil or refrigerant lines are iced, turn the system OFF (fan mode ON at the thermostat) and let it thaw fully before running again.
- **Visible obstructions:** With the system OFF at the breaker, look through the top grille for leaves, sticks, or a nest. Remove anything visible — but do not reach into the unit or spin the blade with power available.
- **Supply/return vents:** Make sure interior vents are open and unblocked.
- **Condensate:** Check that the indoor drain pan isn't overflowing, which can trip a safety float switch and shut the system down.

If the fan still won't spin after these checks, it's a capacitor, motor, or contactor issue — that's a technician job.

## How a technician will diagnose it

A good tech works from cheapest to most expensive, and you can sanity-check their steps:

1. **Confirms the call for cooling** and verifies 24V control voltage reaching the outdoor contactor.
2. **Kills power and discharges the capacitor** before touching anything inside the panel.
3. **Tests the run capacitor** with a meter, comparing measured microfarads (µF) to the rating printed on it. More than ~10% low means replace.
4. **Checks the contactor** for pitted contacts and confirms it pulls in and passes line voltage to the fan.
5. **Tests the fan motor** — resistance across windings, checks for an open or shorted winding, and spins it by hand (power off) to feel for seized bearings.
6. **Inspects wiring and connectors** at the motor and board for burns or corrosion.
7. **On Infinity/ECM units**, reads stored fault codes and tests the ECM module and board.

Expect a technician to replace the capacitor first if it tests bad — that's a fast, inexpensive fix and solves most of these calls.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan doesn't turn | Failed run capacitor (fan terminal) | Shut system off; don't spin blade | Test & replace capacitor |
| Fan hums/buzzes but won't spin | Weak capacitor or seized motor | Turn off at breaker | Test capacitor, then motor bearings |
| Nothing runs outdoors, no hum | Failed contactor, blown fuse, or disconnect | Check breaker/disconnect once | Test contactor & control fuse |
| Fan blade physically stuck | Debris or ice jam | Remove visible debris (power off); thaw ice | Clear jam, inspect blade/motor |
| Fan tries to start then stops | Overheating motor or low capacitor | Shut off to protect compressor | Replace motor and/or capacitor |
| Infinity unit shows a fault code | ECM/board fault | Note the code | Diagnose board/ECM module |

## Repair costs

Ranges are typical US installed prices including labor; parts-only DIY is much less but not advised on the outdoor high-voltage side.

- **Run capacitor (dual-run):** $12–$40 part; **$130–$300** installed with a service call.
- **Contactor:** $15–$50 part; **$150–$350** installed.
- **Condenser fan motor (PSC):** $80–$250 part; **$300–$650** installed, depending on motor size and Carrier model.
- **Control/low-voltage fuse:** $5–$15 part; usually rolled into a **$90–$180** diagnostic/service visit.
- **ECM motor or control board (Infinity):** **$400–$900+** installed — variable-speed parts are pricey and model-specific.
- **Diagnostic/service call:** **$90–$180**, often credited toward the repair.

If your compressor also overheated and locked out from running without the fan, add potential compressor repair costs — one more reason to shut the system off the moment you notice the fan isn't spinning.

## Related codes

- **Carrier AC Not Cooling: Causes, Fixes & Repair Costs** — the broader troubleshooting path when a stopped fan is one of several possible causes.
- **Carrier AC Frozen Evaporator Coil: Causes & Fixes** — icing that can jam the outdoor fan or follow from airflow problems.
- **Carrier Furnace Code 31: Causes, Fixes & Costs** — pressure switch faults on the heating side.
- **Carrier Furnace Code 13** and **Code 33/34** — related Carrier control and ignition diagnostics for gas equipment.

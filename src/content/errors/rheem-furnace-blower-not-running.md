---
title: "Rheem Furnace Blower Not Running: Causes & Fixes"
code: "Blower not running"
description: "Rheem furnace blower not running? Causes include door switch, board fuse, blower capacitor, motor and control board — plus safe DIY checks and repair costs."
brand: rheem
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,500 if an OEM ECM blower assembly or integrated control board is needed"
appliesTo: "Rheem Classic, Classic Plus and Prestige 80%, 90% and 95%+ AFUE gas furnace families with PSC or ECM/variable-speed blower motors; diagnostic LED behavior varies by integrated furnace control (IFC) board."
tags:
  - blower-motor
  - no-airflow
  - control-board
  - ecm
datePublished: 2026-10-02
dateModified: 2026-10-02
reviewedBy: ""
faq:
  - q: Why does my Rheem heat but the blower never comes on?
    a: The burners can light while the blower stays dead if the blower capacitor, motor, motor module or the control board's blower relay has failed. If you have confirmed the burners fire with no air moving, turn the furnace off at the service switch and leave it off until a technician inspects it — heat builds in the heat exchanger when nothing is carrying it away.
  - q: Can I reset a Rheem furnace to get the blower running?
    a: Only if the burners are not firing without airflow. If you have seen or heard the burners light with no air coming from the registers, do not reset it — shut the furnace off at the service switch and leave it off until a technician inspects it. Otherwise you may cycle power at the furnace switch or breaker once. If the blower still does not run, or the fault returns, the problem is internal and requires a technician rather than repeated resets.
  - q: Is a blower that won't run dangerous?
    a: It can be. If burners fire without airflow, heat builds in the heat exchanger instead of going into the house. Turn the furnace off at the service switch and leave it off until it is repaired. If you ever smell burning, see soot around the burner compartment, or a CO alarm sounds, leave the house, then call your gas utility or 911 and a licensed HVAC technician.
---

## What this code means

"Blower not running" means the furnace indoor blower (circulating fan) fails to start when it should — during a heat call, cooling call, or continuous-fan setting. On Rheem furnaces this is not always a single stored fault code; depending on the integrated furnace control (IFC) board, you may see a steady or flashing LED, a "blower on" indication with no actual airflow, or no code at all while heat is produced.

The blower is driven by the control board's blower relay (and, on ECM models, a motor module). If the board commands the blower but it does not spin — or the board never commands it — you get no airflow. On most Rheem boards this condition does not latch into a hard lockout the way ignition faults do. When the high-limit switch opens from trapped heat, the control shuts the gas valve and energizes the blower output to dissipate that heat — but if the blower itself is the failed part, nothing moves the heat out of the heat exchanger. Behavior varies by board, so confirm your LED pattern against the diagram on the blower-door label.

**If burners are firing and no air is moving: turn the furnace off at the service switch (the light-switch-looking toggle at or near the furnace) and leave it off until a technician has inspected it.** Do not keep resetting it to "see if it catches."

## Safety first: a tripped rollout switch is never just reset or replaced

A flame-rollout switch opens because flame has escaped the burner compartment instead of staying inside the heat exchanger. That is a combustion and carbon-monoxide hazard, not a worn-out part. It points to an underlying problem — a blocked or cracked heat exchanger, a blocked flue or vent, or a failed inducer — and the switch is doing exactly what it was designed to do.

- Do not reset, jumper, bypass or replace a rollout switch to "get the heat back on."
- Shut the furnace off at the service switch and leave it off, then call a licensed HVAC technician.
- If you smell burning, see soot or scorching around the burner compartment, or a CO alarm sounds, get everyone out of the house first, then call your gas utility or 911 from outside.

The same logic applies to a high-limit switch that keeps tripping: the trip is a *consequence* of something wrong — usually no airflow — and the cause has to be found and corrected.

## Common causes, ranked by probability

1. **Blower door / interlock switch open** — if the blower compartment door is not fully seated, the door switch cuts power to the blower circuit (and often the whole furnace). This is the single most common harmless cause and the only one a homeowner can resolve.
2. **Blown low-voltage fuse on the board** — a 3A fuse protecting the 24V circuit can open, killing control signals to the blower relay. Cheap and fast for a tech to confirm, though the reason it blew still has to be found.
3. **Blower run capacitor failure (PSC motors)** — a weak or dead capacitor is a very common reason a PSC blower hums or sits dead. Technician work.
4. **Blower motor failure** — worn bearings, open windings, or a failed ECM module. The motor may buzz, get hot, or do nothing.
5. **Control board / blower relay fault** — the IFC board never energizes the blower output, or the relay contacts are burnt.
6. **Loose or failed wiring/harness connection** — to the motor, capacitor, or board blower terminals.
7. **Seized blower wheel or obstruction** — debris or a shifted wheel binding the motor.

**Not on this list, deliberately:** an open high-limit or rollout switch. On modern Rheem integrated controls, an open limit shuts off the gas and runs the blower to clear heat rather than stopping it. A tripped limit is almost always a *result* of the blower not moving air, not the reason it won't spin — and a tripped rollout is a safety condition in its own right (see above).

## Safe checks before you call anyone

**Before anything else:** if the burners fire and no air comes out of the registers, switch the furnace off at the service switch and leave it off. Skip the reset step below and call a technician.

Otherwise, these are the only steps a homeowner should perform:

- **Thermostat:** Set the fan to **ON** (not AUTO). If the blower runs on ON but not during a heat call, note that for the technician. Replace the thermostat batteries if it is battery-powered.
- **Air filter:** A severely clogged filter chokes airflow and causes overheating and limit trips. Replace a dirty filter.
- **Breaker / furnace switch:** Confirm the furnace breaker is on and the service switch is on. If the burners have *not* been firing without airflow, you may cycle power **once** and wait for the furnace to restart. One reset only — no repeat attempts.
- **Blower door:** Make sure the blower compartment panel is fully seated and flush — a loose panel opens the door safety switch and stops the blower. Seat the panel only; do not reach inside.
- **Supply and return vents:** Check that registers are open and returns are not blocked by furniture or rugs.
- **Condensate line (high-efficiency models):** If the drain is clogged and the float switch has tripped, clear the visible trap/line. If airflow still doesn't return, call a pro.

If the blower still won't run after these, shut the furnace off and call a technician. Everything inside the cabinet — capacitor, motor, board, switches, wiring — is technician work.

## How a technician will diagnose it

A qualified tech will typically:

1. Confirm the symptom and read the IFC board LED pattern against the Rheem diagnostic chart.
2. Verify 120V power into the furnace and the 24V control voltage; check the board's low-voltage fuse.
3. Confirm the door interlock switch closes with the panel on.
4. Check that a blower command is present at the board's blower output terminals during a call.
5. Measure the **run capacitor** (microfarads) on PSC motors.
6. Test the blower motor windings and, on ECM units, the motor module and its communication signal.
7. Inspect wiring, harness connectors, and the blower wheel for binding or obstruction.
8. Check the high-limit and rollout switches — and if either has tripped, find and correct what caused it (restricted airflow, blocked or cracked heat exchanger, blocked flue, failed inducer) before the furnace is put back in service. A rollout trip means a combustion inspection, not a parts swap.

Sanity check: a quote should name the actual failed part (capacitor, motor, module, board) based on measured readings — not just "replace the blower." And no quote should consist of replacing a tripped safety switch on its own.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Burners light, no airflow | Capacitor, motor, module, or board relay | Shut furnace off at the service switch and leave it off | Measure capacitor, test motor/board, replace failed part |
| Nothing runs at all, no LED | No power, blown board fuse, open door switch | Check breaker/switch; seat blower panel; cycle power once | Test 24V fuse, door switch, board supply |
| Blower hums but won't spin | Failed run capacitor or seized wheel | None | Replace capacitor; free or replace blower wheel/motor |
| Blower runs on cooling but not heating (or vice versa) | Board relay or blower output fault | None | Test blower outputs and wiring |
| Blower dead, panel slightly loose | Open door interlock switch | Re-seat blower door fully | Verify switch closes and functions |
| Blower stops, drain pan full (HE models) | Tripped condensate float switch | Clear visible condensate line | Clear drain, test float switch |
| Rollout switch tripped, burning smell or soot | Flame escaping burner compartment | Shut furnace off; leave house and call gas utility/911 if smell, soot or CO alarm | Full combustion, heat exchanger and venting inspection |

## Repair costs

Honest US ranges, parts and labor:

- **DIY checks (filter, batteries, reset, panel):** $0–$30
- **Door interlock switch:** $100–$250
- **Control board low-voltage fuse / minor wiring:** $100–$250
- **Blower run capacitor replacement (PSC):** $120–$300
- **High-limit switch replacement — only after a technician has found and corrected the cause of the overheating:** $150–$350
- **PSC blower motor replacement:** $400–$650
- **Integrated furnace control (IFC) board:** $400–$1,000+ for an OEM Rheem board with labor
- **ECM / variable-speed blower motor or module:** $500–$1,500; full OEM ECM assemblies routinely exceed $1,200

There is no line item here for a flame-rollout switch, and you should be suspicious of a quote that has one on its own. A tripped rollout means a technician has to inspect the heat exchanger, venting and inducer and correct the underlying fault — the switch itself is not the repair.

Prices vary by region, furnace model, and whether the part is OEM Rheem. Variable-speed ECM assemblies are the most expensive; get the measured diagnosis before approving a full motor swap.

## Related codes

If your blower runs but won't stop, see Rheem Furnace Blower Won't Shut Off. If air comes out cold, see Rheem Furnace Blowing Cold Air. For furnaces that cycle on and off, see Rheem Furnace Short Cycling and Rheem Furnace Keeps Shutting Off. If the unit won't start at all, see Rheem Furnace Won't Turn On. For a flashing diagnostic light on heat pump systems, see Rheem Heat Pump Flashing Light.

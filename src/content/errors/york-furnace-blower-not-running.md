---
title: "York Furnace Blower Not Running: Causes & Fixes"
code: "Blower not running"
description: "York furnace blower not running? Causes from blower motor to control board, plus DIY checks and repair costs from $0 to $1,500+."
brand: york
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,500+ for an ECM blower motor or control board"
appliesTo: "York single-stage and variable-speed gas furnaces (Affinity, LX, Latitude series) with PSC or ECM blower motors; symptoms vary by motor type and control board."
tags:
  - york
  - furnace
  - blower
  - ecm-motor
  - no-airflow
parts:
  - name: "Furnace air filter (check your existing filter for the printed size)"
    search: "furnace air filter"
  - name: "Thermostat batteries"
    search: "AA alkaline batteries"
datePublished: 2026-10-01
dateModified: 2026-10-01
reviewedBy: ""
faq:
  - q: "Why does my York furnace heat but the blower never comes on?"
    a: "The burners can ignite while the blower fails separately. A bad blower motor, failed capacitor, or blower relay on the control board are the usual culprits, and this is technician-level work."
  - q: "Can a dirty filter stop the blower from running?"
    a: "A clogged filter rarely stops the blower entirely, but it can trip the high-limit switch and cause nuisance shutdowns. Replace the filter first, then watch whether the blower runs normally."
  - q: "Is a blower that won't run an emergency?"
    a: "It is not a gas-leak emergency, but a furnace that heats without airflow can overheat and trip the limit repeatedly. Shut the furnace off at the thermostat and call a technician promptly. Do not keep cycling power or restarting a unit that trips the high limit again and again — repeated firing with no airflow is exactly what cracks or warps a heat exchanger. One reset is reasonable; after that, leave it off until a pro looks at it."
---

## What this code means

"Blower not running" describes a York furnace where the indoor blower (circulating fan) fails to start when it should — either during a heat call, during cooling, or in continuous-fan mode. On most York boards there is no dedicated flash code for this; instead you'll see the furnace ignite, run the burners, and then shut down on the limit switch, or the status LED may show steady/normal while no air moves.

The blower is controlled by the furnace control board, which energizes the motor through a relay (PSC motors) or a low-voltage signal (ECM/variable-speed motors). A fault anywhere in that chain — motor, capacitor, module, wiring, or the board itself — leaves the burners firing with no airflow, which the high-limit switch then shuts down for safety. This is a **pro-level** diagnosis because every likely cause is inside the cabinet.

## Common causes, ranked by probability

1. **Failed blower motor or ECM module** — Worn bearings, a burned winding, or a failed ECM control module is the most common reason the motor won't turn. ECM motors often fail at the module first, which can sometimes be replaced separately.
2. **Blower door safety switch open / panel not seated** — The door interlock switch cuts power when the blower-compartment panel is off or not fully seated. This is one of the most frequent real-world causes of a suddenly dead blower right after a filter change or a previous service call — and it's the only cause on this list a homeowner can actually resolve. Press the lower panel firmly back into place before assuming anything is broken. (The switch itself can also fail, which is technician work.)
3. **Bad run capacitor (PSC motors)** — On older single-speed PSC blowers, a weak or failed capacitor prevents the motor from starting; it may hum but not spin.
4. **Blower relay or control board fault** — The relay (or ECM output) on the control board that energizes the blower can fail, so the board never sends power to a healthy motor.
5. **Loose or corroded blower wiring / harness connector** — A disconnected motor plug, loose terminal, or damaged harness interrupts power to the motor.
6. **Seized blower wheel or obstruction** — Debris or a failed bearing can physically jam the blower wheel so the motor can't turn.
7. **Thermostat fan setting or wiring** — A "G" (fan) wiring fault or a thermostat stuck in the wrong mode can keep the fan from being commanded on.

Because York boards generally don't lock out specifically for a blower fault, there is usually no code to clear — the furnace simply cycles on the limit. Behavior varies by model: variable-speed Affinity units may log a motor-communication fault, while basic Latitude units give no indication at all.

## Safe checks before you call anyone

These are the only steps a homeowner should perform:

- **Thermostat:** Set the system to **Heat** and the fan to **Auto**, then raise the setpoint a few degrees. Also try switching fan to **On** — if the blower still won't run in either mode, note that for the technician.
- **Thermostat batteries:** If your thermostat is battery-powered, install fresh batteries.
- **Air filter:** Replace a dirty filter. (The size is printed on the edge of the old filter.) A severely clogged filter can cause the furnace to overheat and shut down even when the blower is working.
- **Breaker / furnace switch:** Check the furnace breaker and the service switch (looks like a light switch near the unit). Reset a tripped breaker once.
- **Blower-compartment panel:** Make sure the lower access panel is fully seated against the door safety switch. A panel that's off or ajar will stop the blower.
- **Supply and return vents:** Confirm registers are open and returns aren't blocked, so you don't mistake low airflow for a dead blower.

If the blower still won't run after these checks, stop and call a pro — everything else is inside the cabinet.

## How a technician will diagnose it

A technician will:

1. Confirm the symptom and check for any fault indication on the control board's status LED or variable-speed display.
2. Verify 24V and line voltage reaching the board and the blower circuit.
3. On PSC motors, test the **run capacitor** and measure motor windings for an open or short.
4. On ECM/variable-speed motors, test the **ECM module** and its communication/power signals, then the motor itself.
5. Check the **blower relay** on the control board and the output to the motor.
6. Inspect the **blower door switch**, harness connectors, and motor plug for continuity and corrosion.
7. Spin the blower wheel by hand to rule out a seized bearing or obstruction.
8. Confirm the fan "G" signal from the thermostat is reaching the board.

A fair quote should name the specific failed part (motor, module, capacitor, relay, or board) — not just "replace the blower."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Burners fire, no air, unit shuts off on limit | Blower motor or ECM module failed | Set fan to Auto; replace filter; call pro | Test and replace motor or ECM module |
| Blower dead right after a filter change or service call | Lower panel not seated / door switch open | Re-seat lower access panel firmly | Test and replace door safety switch |
| Motor hums but won't spin (older units) | Bad run capacitor | None — inside cabinet | Test and replace run capacitor |
| No blower in any mode, board looks normal | Blower relay / board fault | Reset breaker once; call pro | Test relay and replace control board |
| Intermittent no-run, then works | Loose motor harness/connector | None — inside cabinet | Inspect and repair wiring/connectors |
| Grinding then nothing | Seized blower wheel/bearing | None — inside cabinet | Free or replace blower wheel/motor |
| No fan in "On" mode only | Thermostat "G" wiring fault | Check fan setting; new tstat batteries | Trace G wire, repair/replace thermostat |

## Repair costs

Ranges are typical US installed prices; your area and model will vary.

- **Air filter:** $10–$40 (DIY)
- **Thermostat batteries:** $5–$15 (DIY)
- **Run capacitor (PSC motor):** $120–$280 installed
- **Blower door safety switch:** $90–$180 installed
- **Blower wiring/harness repair:** $90–$250
- **ECM control module (variable-speed):** $300–$600 installed
- **Blower motor (PSC):** $400–$800 installed
- **Blower motor (ECM/variable-speed):** $600–$1,500 installed — ECM replacements on variable-speed Affinity units frequently land in the $900–$1,500 range once labor is included
- **Control board:** $400–$1,200 installed
- **Diagnostic / service call:** $90–$180, often credited toward the repair

Get an itemized quote naming the failed component. A four-figure quote for an ECM blower motor is not automatically a ripoff — that's normal pricing for those parts. If the furnace is 15+ years old and the ECM motor or board has failed, ask whether replacement makes more sense than a major repair.

## Related codes

- **York Furnace 4 Flashes: Open Limit Switch Causes & Fixes** — on most York boards four flashes indicates an open limit, but flash-code tables aren't uniform across board generations, so check the legend printed on your control board or inside the furnace door. The limit often trips as a *symptom* of no airflow.
- **York Furnace Blower Won't Shut Off: Causes & Fixes** — the opposite blower-control fault.
- **York Furnace Blowing Cold Air: Causes, Fixes & Costs** — when the blower runs but delivers no heat.
- **York Furnace Won't Turn On: Causes, Fixes & Costs** — if nothing powers up at all.
- **York Furnace Short Cycling: Causes, Diagnosis & Fixes** — repeated limit trips from poor airflow.

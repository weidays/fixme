---
title: "Carrier Furnace Blower Not Running: Causes & Fixes"
code: "Blower not running"
description: "Carrier furnace blower not running? Causes from bad capacitors to door switches, plus fixes and repair costs from $0 DIY to $1,200."
brand: carrier
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200 if a variable-speed blower motor, ECM module or control board needs replacement"
appliesTo: "Carrier gas furnaces with PSC or ECM blower motors. The LED flash-code guidance here applies to Comfort and Performance single- and two-stage furnaces using HK42FZ-type control boards; Infinity communicating systems use a different control that reports faults as text on the wall control rather than as an LED flash count"
tags:
  - carrier
  - furnace
  - blower
  - no-airflow
  - pro
parts:
  - name: "Furnace air filter (1-inch pleated)"
    search: "16x25x1 furnace air filter pleated MERV 11"
  - name: "Thermostat batteries (AA/AAA)"
    search: "AA alkaline batteries 8 pack"
datePublished: 2026-09-26
dateModified: 2026-09-26
reviewedBy: ""
faq:
  - q: "Why won't my Carrier furnace blower turn on even though the burners light?"
    a: "The burners can light while the blower stays dead if the blower motor, its capacitor, the blower relay on the control board, or the motor wiring has failed. The furnace may then shut off on a high-limit switch from overheating."
  - q: "Can a dirty filter stop my Carrier blower from running?"
    a: "A clogged filter alone rarely stops the blower completely, but it can trip the high-limit switch and cause the furnace to cut power to the burners. Always replace a dirty filter first, then watch for a blinking status code."
  - q: "Is a furnace blower that won't run an emergency?"
    a: "It is not a life-safety emergency like a gas leak, but you should stop running the furnace. Without airflow the heat exchanger can overheat repeatedly. Turn the system off and book a technician if basic checks don't restore the blower."
---

## What this code means

"Blower not running" is a symptom, not a single Carrier flash code. It means the indoor blower motor — the fan that pushes heated air through your ducts — is not spinning when it should be. On Carrier furnaces this can happen during a heat call (after ignition), during cooling, or in continuous-fan mode.

Depending on your control board, a blower problem may or may not set a specific code. On Comfort and Performance furnaces with HK42FZ-type boards, **Code 41 (blower motor fault)** is the code most often associated with the blower itself; see that page for the code-specific path. Some variable-speed boards set additional blower-related codes, and numbering in this range differs by control board — so check the code legend printed on the label inside your blower door rather than assuming a number means the same thing on every Carrier furnace. On Infinity communicating systems, faults usually appear as a text message on the wall control instead of as an LED flash count.

If no code is displayed but the blower is silent, the failure is often in the motor, its capacitor, a door safety switch, or the blower relay — components the board doesn't always self-diagnose.

Behavior varies by motor type: older Carrier units use a **PSC motor** with a run capacitor, while Infinity and higher-end Performance units use a variable-speed **ECM motor** with its own control module. The diagnosis differs between the two. You can usually tell which one you have from the model number on the unit data plate or from your owner's manual — no testing required — but the actual electrical diagnosis on either type is technician work.

## Common causes, ranked by probability

1. **Open blower door safety switch.** If the blower compartment panel isn't fully seated, the door interlock switch cuts power to the blower (and often the whole control). This is the single most common reason a blower goes dead after service or filter changes.
2. **Failed run capacitor (PSC motors).** A weak or dead capacitor leaves a PSC blower humming or silent. Very common on furnaces 8+ years old.
3. **Blower motor failure.** Worn bearings, a burned winding, or a seized ECM module stops the motor entirely.
4. **Blower relay or control board fault.** The relay that energizes the blower can fail, or the board's blower output can die — sometimes setting Code 41.
5. **ECM module or motor communication fault.** On variable-speed units, a failed ECM control module stops the motor even when the main board commands it.
6. **Wiring or connector problems.** Loose, corroded, or chewed low-voltage or line-voltage connections at the motor or board.

**A note about the high-limit switch:** a tripped limit is *not* a typical cause of "blower not running." On most Carrier sequences, when the limit opens the board shuts off the gas valve and keeps the blower running to cool the heat exchanger — so a limit trip normally produces the opposite symptom (fan running, burners off, cool air). No fan *and* no heat points back at the blower circuit. Repeated overheating from a clogged filter or blocked return is still worth correcting, because it can eventually lock the furnace out.

## Safe checks before you call anyone

These are the only checks a homeowner should perform:

- **Thermostat:** Set the system to **Heat** and the fan to **Auto**, then raise the setpoint above room temperature. Also try switching the fan to **On** — if it still won't run in any mode, the blower circuit is suspect. If your thermostat is battery-powered, install fresh batteries.
- **Air filter:** Replace a dirty filter. A severely clogged filter can cause overheating shutdowns and repeated limit trips.
- **Breaker and furnace switch:** Check the furnace breaker in your panel and the light-switch-style disconnect near the furnace. Flip a tripped breaker off, then on, once.
- **Blower access panel:** Confirm the blower compartment panel is fully seated and flush. A panel that's even slightly ajar keeps the door safety switch open and the blower off. Do not tape or bypass the switch.
- **Vents and registers:** Make sure supply and return registers are open and unblocked so the system isn't overheating on restricted airflow.
- **Condensate line (high-efficiency models):** A clogged condensate line can trip a float switch and shut the furnace down. If you see standing water at the furnace, book service.

If the blower still won't run after these steps, stop and call a professional. Anything inside the cabinet — capacitors, relays, wiring, motors — is technician work.

## How a technician will diagnose it

A qualified tech will:

1. **Confirm the call and status code.** They'll read any flashing LED code (such as 41) against the legend printed inside the blower door — or the text message on an Infinity wall control — and verify the board is commanding the blower.
2. **Check the door safety switch.** They'll verify the interlock closes when the panel is seated and passes voltage.
3. **Measure voltage at the blower motor.** If the board sends 120V (PSC) or a command signal (ECM) but the motor doesn't run, the motor or capacitor is at fault.
4. **Test the run capacitor (PSC).** With a meter, they'll confirm the capacitor holds its rated microfarads.
5. **Test the ECM module (variable-speed).** They'll check power and communication to the ECM control and motor.
6. **Inspect the blower relay and board output.** They'll confirm the relay closes and the board energizes its blower terminal.
7. **Check airflow and the high-limit switch.** They'll verify the limit isn't stuck open and that restricted airflow hasn't been overheating the furnace.

A fair quote should name the specific failed part — not just "replace the blower." Ask which component tested bad.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Blower dead, panel recently removed | Open blower door switch | Re-seat the access panel fully | Test/replace door interlock switch |
| Burners light, then furnace shuts off, no fan | Blower motor, capacitor, or blower relay failure | Replace filter; check registers | Test capacitor, motor, relay and board output; replace failed part |
| Fan runs but burners shut off | Overheating / limit trip (not a blower fault) | Replace filter, open registers | Verify airflow, check limit switch |
| Blower hums but won't spin (PSC) | Failed run capacitor | None (inside cabinet) | Test and replace capacitor |
| No fan in any mode, no code | Blower relay or board output failure | Reset breaker once | Test relay and board; replace as needed |
| Variable-speed blower silent | ECM module/motor fault | Reset breaker once | Test ECM module and motor; replace |
| Code 41 flashing | Blower motor fault | See related code page | Full blower circuit diagnosis |
| Furnace overheats repeatedly | Clogged filter / blocked return | Replace filter, open registers | Verify airflow, check limit switch |

## Repair costs

Ranges are typical US installed prices; your area and model may differ.

- **Re-seat door panel / interlock adjustment:** $0 DIY, or included in a service call ($90–$180).
- **Run capacitor replacement (PSC):** $150–$350.
- **Blower relay replacement:** $150–$300.
- **High-limit switch replacement:** $150–$350.
- **PSC blower motor replacement:** $450–$900.
- **ECM motor or module replacement:** $500–$1,000+ (variable-speed parts are pricier).
- **Control board replacement:** $400–$700.

A single service-call diagnostic fee ($90–$180) usually applies and is often credited toward the repair.

## Related codes

- **Carrier Furnace Code 41: Blower Motor Fault & Fixes** — the code most often set when the blower motor itself fails.
- **Carrier Furnace Blower Won't Shut Off: Causes & Fixes** — the opposite problem, a blower that never stops.
- **Carrier Furnace Blowing Cold Air: Causes & Fixes** — when the blower runs but the air isn't warm.
- **Carrier Furnace Keeps Shutting Off: Causes, Fixes & Costs** — overheating and limit-trip shutdowns.
- **Carrier Furnace Short Cycling: Causes, Fixes & Costs** — related airflow and cycling issues.

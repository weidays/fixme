---
title: "Carrier Furnace Code 41: Blower Motor Fault & Fixes"
code: "Code 41"
description: "Carrier Furnace Code 41 signals a blower motor fault. Learn causes, safe checks, diagnosis and repair costs from $0 DIY to $700 for a new motor."
brand: carrier
equipment: furnace
severity: pro
costRange: "$0 DIY – $700 if the blower motor or module needs replacement"
appliesTo: "Carrier 58- and 59-series gas furnaces with LED/status-code control boards; exact meaning and blinks vary by board generation, so confirm against the label inside the blower door."
tags:
  - carrier
  - furnace
  - blower-motor
  - error-code
  - ecm
parts:
  - name: Blower motor run capacitor
    search: furnace blower motor run capacitor
  - name: HVAC contact cleaner
    search: electrical contact cleaner spray
  - name: Furnace air filter
    search: furnace air filter 16x25x1
faq:
  - q: Can I run my Carrier furnace with Code 41?
    a: It is not advisable. Code 41 points to a blower motor problem, and running the furnace without proper airflow can cause overheating and limit-switch shutdowns. Have it diagnosed.
  - q: Does Code 41 mean the same thing on every Carrier furnace?
    a: No. Blink-code meaning varies by board generation. On many boards it flags a blower motor fault, but always confirm against the legend printed inside your blower compartment door.
  - q: Is Code 41 a DIY fix?
    a: Rarely. You can check the filter, breaker and thermostat safely, but motor, capacitor and control-board work involves live high voltage and should be left to a licensed technician.
datePublished: 2026-09-13
dateModified: 2026-09-13
reviewedBy: ""
---

## What this code means

On most Carrier gas furnaces with a status-code control board, **Code 41 indicates a blower (indoor fan) motor fault** — the board is either not seeing the blower run correctly, not seeing the expected speed/feedback, or is detecting a fault in the motor circuit.

The exact wording matters by generation. On older PSC-motor boards, a blower-related code may mean the board isn't confirming the motor is spinning. On newer boards driving an **ECM/variable-speed blower**, Code 41 can mean the board and motor module aren't communicating, or the motor has reported an internal fault. Because the legend differs between board revisions, **always read the code chart printed on the label inside your blower door** before assuming a meaning.

Code 41 is rated **pro** here because verifying it correctly involves live high-voltage testing, motor feedback checks, and sometimes ECM module diagnostics — not tasks for a homeowner.

## Common causes, ranked by probability

1. **Failed or weak blower run capacitor** (PSC-motor furnaces) — the motor hums or won't reach speed, so the board flags a fault.
2. **Worn blower motor** — bad bearings, shorted windings, or a seized motor.
3. **ECM/variable-speed motor module failure** — on newer furnaces the electronic module bolted to the motor can fail while the motor itself is fine.
4. **Loose, corroded, or damaged wiring** between the control board and the blower motor.
5. **Control board fault** — the board misreads or fails to drive the motor.
6. **Restricted airflow causing overheating** — a badly clogged filter or blocked returns can push the motor to shut down and set a fault.
7. **Low or unstable line voltage** feeding the furnace.

## Safe checks before you call anyone

These are the only steps a homeowner should do — all with the furnace running normally, no panels removed beyond the labeled blower door:

- **Air filter:** Replace it if it's gray or clogged. Severe restriction can trigger overheating and blower faults.
- **Thermostat:** Make sure it's set to Heat and calling for heat; if it's battery-powered, install fresh batteries.
- **Breaker:** Check that the furnace breaker hasn't tripped. Reset it once if needed — do not repeatedly cycle power to a furnace showing a fault.
- **Return and supply vents:** Confirm registers aren't blocked by furniture, rugs, or closed dampers, and that return grilles are clear.
- **Blower door:** Confirm the panel is fully seated — a loose door depresses the safety interlock and stops the blower.
- **Condensate (high-efficiency models):** Look for a full or overflowing condensate line/pan, which can indirectly cause shutdowns; clear standing water if you can reach it safely.

If the code persists after these checks, stop and call a licensed HVAC technician. **Do not open the electrical compartment, test the capacitor, or bypass any switch.**

## How a technician will diagnose it

A qualified tech will typically:

1. **Read stored and active codes** on the board and cross-check against the model-specific legend.
2. **Verify a heat call reaches the blower stage** and watch whether the motor attempts to start.
3. **Measure line and control voltage** at the board and motor to rule out supply issues.
4. **Test the run capacitor** (PSC motors) for correct microfarad rating.
5. **Check motor windings and bearings**, or on ECM units, **read the motor module's own diagnostics** and confirm board-to-motor communication.
6. **Inspect wiring and connectors** for corrosion, heat damage, or loose pins.
7. **Confirm airflow** and check for tripped limits caused by restriction.

This lets them isolate a $30 capacitor from a $200 motor from a $600 ECM assembly — so you can sanity-check the quote.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Blower hums but won't spin up | Failed run capacitor (PSC) | Replace filter, then call | Test and replace capacitor |
| Blower never starts on heat call | Bad motor or wiring | Check breaker & blower door | Test motor windings, replace motor/wiring |
| Blower runs briefly then stops, sets code | Airflow restriction/overheat | Replace clogged filter, clear vents | Verify airflow, check limits |
| New/variable-speed unit throws Code 41 | ECM module fault or comm error | Confirm door seated, call | Read module diagnostics, replace module |
| Intermittent fault, then normal | Loose/corroded connector | None safely | Reseat and repair wiring |
| Code returns immediately after reset | Board or motor failure | Stop resetting, call | Full circuit diagnosis |

## Repair costs

Honest US ballpark ranges (parts + labor; regional variation applies):

- **DIY airflow/filter fix:** $0–$40
- **Blower run capacitor replacement:** $150–$300
- **PSC blower motor replacement:** $400–$650
- **ECM/variable-speed motor or module:** $500–$900+
- **Wiring/connector repair:** $150–$350
- **Control board replacement:** $400–$700
- **Diagnostic/service call:** $90–$180 (often credited toward the repair)

Get an itemized quote. A capacitor swap and a full ECM assembly are very different jobs, and Code 41 alone doesn't tell you which one you need until it's tested.

## Related codes

- **Carrier Furnace Code 12: Meaning, Causes & Fixes** — blower/board communication and startup issues.
- **Carrier Furnace Code 24: Meaning, Causes & Fixes** — related electrical/component faults.
- **Carrier Furnace Code 33: Causes, Fixes & Costs** — limit-switch trips, often airflow-related and easy to confuse with blower faults.
- **Carrier Furnace Code 34: Ignition Proving Failure & Fixes** — for sequence faults that occur before the blower stage.

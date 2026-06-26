---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a bad capacitor, motor, or contactor, plus fixes and US repair costs from $0 to $650."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor is replaced"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series) using a single-phase PSC fan motor with a dual run capacitor; variable-speed XV20i units use an ECM fan driven by a control board, so symptoms and parts differ."
tags:
  - trane
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: "Dual run capacitor (match microfarad rating)"
    search: "trane dual run capacitor 45/5 mfd 440v"
  - name: "Condenser fan motor"
    search: "trane condenser fan motor 1/4 hp 825 rpm"
  - name: "Fan motor capacitor (single)"
    search: "round run capacitor 5 mfd 440v"
  - name: "Contactor (single-pole or double-pole)"
    search: "ac condenser contactor 30 amp 24v coil"
datePublished: 2026-06-26
dateModified: 2026-06-26
reviewedBy: ""
faq:
  - q: "Can I run my AC if the outdoor fan won't spin?"
    a: "No. Without the fan moving air across the condenser coil, the compressor overheats and head pressure spikes. Shut the system off at the thermostat to avoid a costly compressor failure."
  - q: "Why does the fan start if I spin it with a stick?"
    a: "If the fan keeps running after a manual nudge, that almost always points to a weak or dead run capacitor that can no longer provide the starting torque. The capacitor should be replaced by a tech."
  - q: "Is a stuck outdoor fan an emergency?"
    a: "It is not a safety emergency, but it is urgent. Running the compressor without condenser airflow can destroy it within minutes, so turn the system off and book service promptly."
  - q: "How much does it cost to fix a Trane outdoor fan that won't spin?"
    a: "A capacitor runs about $150 to $300 installed, a contactor $150 to $350, and a full condenser fan motor $300 to $650 depending on motor type and labor."
---

## What this code means

"Outdoor fan not spinning" isn't a blink code — it's a physical symptom on your Trane condenser (the outdoor unit). The fan on top of the condenser pulls air across the coil to dump the heat your system removed from the house. When it stops, the compressor may still be humming, but the heat has nowhere to go.

On most Trane split systems (XR, XL, and many XV models), the fan is a single-phase PSC motor powered through a dual run capacitor and a contactor. On variable-speed units like the **XV20i**, the fan is an ECM (electronically commutated motor) controlled by a circuit board, so a no-spin fault there is usually board- or motor-communication related rather than a simple capacitor. This page covers the common PSC setup and flags where the ECM units differ.

Either way: a non-spinning fan while the compressor runs is a **shut-it-down-now** situation to protect the compressor.

## Common causes, ranked by probability

1. **Failed run capacitor** — By far the most common. The capacitor that gives the fan motor its starting torque weakens or dies; the motor hums or sits dead. Often the *same* dual capacitor also feeds the compressor.
2. **Burned or stuck contactor** — The relay that sends power to the outdoor unit has pitted contacts or a failed 24V coil, so the fan (and compressor) never get line voltage.
3. **Seized or failed fan motor** — Worn bearings lock the shaft, or the motor windings have burned open. A motor that won't turn freely by hand (power off) is suspect.
4. **Tripped breaker or blown low-voltage fuse** — No power to the condenser at all.
5. **Debris jamming the blade** — Sticks, leaves, or ice physically blocking the fan.
6. **Control board / ECM fault (variable-speed XV units only)** — On ECM-equipped condensers, a failed board, blown 5-amp fuse, or motor communication error stops the fan.
7. **High-pressure or temperature lockout** — Some boards cut the fan as part of a protective shutdown after another fault.

## Safe checks before you call anyone

These are the only checks a homeowner should do. **Do not open the electrical panel on the condenser** — the capacitor stores a dangerous charge even with power off.

- **Thermostat:** Set to COOL and the temperature several degrees below room temp. Confirm it's calling for cooling.
- **Filter:** A filthy indoor filter can cause pressure/temperature faults that shut the outdoor unit down. Replace if dirty.
- **Breakers:** Check both the indoor (air handler/furnace) and outdoor disconnect breakers in your panel. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Outdoor disconnect:** Confirm the pull-out disconnect box near the condenser is fully seated.
- **Visible debris:** With the system **off at the breaker**, look down through the top grille for leaves, sticks, or a bird's nest blocking the blade.
- **Condensate:** A full condensate pan with a tripped float switch can shut the whole system off — check that the drain isn't clogged.
- **Don't keep resetting:** If the breaker keeps tripping or the unit locks out repeatedly, leave it off and call a technician.

## How a technician will diagnose it

A good tech follows a logical sequence — use this to sanity-check any quote:

1. **Visual + power check:** Confirms 240V at the disconnect and 24V control voltage at the contactor.
2. **Contactor test:** Verifies the contactor pulls in and passes voltage to the fan and compressor; inspects contacts for pitting.
3. **Capacitor test:** Measures microfarads against the rating printed on the cap. A reading well below spec confirms a failed capacitor — the most frequent fix.
4. **Motor test:** With power off, spins the blade by hand to feel for seized bearings; checks windings for continuity/shorts and amp draw under load.
5. **ECM/board check (variable-speed units):** Reads board fault LEDs/error codes, checks the board fuse, and verifies motor communication.
6. **Pressure check:** If the fan was running with no cooling, confirms the failure didn't already harm the compressor.

A capacitor or contactor diagnosis should take well under an hour.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan dead; spins if nudged | Weak/dead run capacitor | Turn system off to protect compressor | Test & replace capacitor |
| Outdoor unit totally silent | Tripped breaker, dead contactor, or blown low-voltage fuse | Reset breaker once; check disconnect | Test contactor & fuse, restore power |
| Fan hums but won't turn, hot motor | Seized fan motor bearings | None — power off | Replace condenser fan motor |
| Fan blocked, won't move | Debris jamming blade | Clear visible debris (power off) | Inspect motor/blade for damage |
| Fan starts then stops, repeats | Protective lockout / overheating | Replace dirty filter | Diagnose root fault, check pressures |
| Variable-speed unit, board LED flashing | ECM/board fault | Note LED pattern | Read code, test board & ECM motor |

## Repair costs

Honest US ranges, parts plus labor:

- **Run / dual capacitor:** $150 – $300 installed. The single most common and cheapest fix.
- **Contactor:** $150 – $350 installed.
- **Low-voltage fuse:** $75 – $150 (often bundled with diagnosis).
- **Condenser fan motor (PSC):** $300 – $650 installed, depending on horsepower and brand of replacement motor.
- **ECM fan motor (variable-speed XV units):** $500 – $1,200+ — these motors and their boards are expensive and model-specific.
- **Control board (variable-speed):** $400 – $900+ installed.
- **Diagnostic / service call:** $90 – $200, often credited toward the repair.

If the fan ran while jammed and the compressor was damaged, costs climb sharply — another reason to shut the unit off the moment you notice the fan isn't spinning.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — start here if the system runs but the house stays warm; a dead outdoor fan is one possible cause.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for furnace-side faults; relevant if your indoor air handler is a Trane furnace sharing the same thermostat.

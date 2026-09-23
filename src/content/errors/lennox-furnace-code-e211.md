---
title: "Lennox Furnace Code E211: High Pressure Switch Stuck Closed"
code: "Code E211"
description: "Lennox Code E211 is reported as high pressure switch failed closed. Verify the code number in your manual, then see causes, safe checks and repair costs."
brand: lennox
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200 if the pressure switch, wiring or control board needs replacement"
appliesTo: >
  Lennox gas furnaces whose control board reports faults as an alphanumeric code on a display (for example SureLight-family integrated controls with a two-character readout). Many other Lennox furnace boards report the same underlying condition as an LED flash or blink pattern rather than an "E" code, and some single-stage boards do not separate a high-fire pressure switch fault at all. The exact code number, wording and display behavior vary by model and board — confirm both against the installation/service manual for your specific furnace before acting on a code number.
tags:
  - pressure-switch
  - stuck-closed
  - inducer
  - two-stage
parts: []
datePublished: 2026-09-22
dateModified: 2026-09-22
reviewedBy: ""
faq:
  - q: Can I reset a Lennox furnace showing this code myself?
    a: You can cycle power once at the breaker to clear a soft fault. If the fault returns, the high pressure switch is reading closed when it should be open and needs a technician — do not keep resetting it.
  - q: Is this code dangerous?
    a: It is not an immediate safety hazard like a gas leak, but the control blocks ignition because it cannot verify the pressure switch is working. A stuck-closed switch defeats a safety check, so it must be repaired by a pro.
  - q: How do I confirm which code my furnace is actually showing?
    a: Write down exactly what the board displays (characters, or the number and rhythm of LED flashes) and your furnace's full model number from the rating plate, then match them against the fault-code legend in that model's installation or service manual. If you do not have the manual, give both to your installer or a licensed technician — code numbering is not the same across Lennox control boards.
  - q: Why does the switch stay closed when it should be open?
    a: A welded or shorted switch contact, a pinched or shorted wire, or a control board misreading the input all cause the board to see the high pressure switch closed before the inducer starts, triggering the fault.
---

## What this code means

The documented meaning of this fault is **high pressure switch failed closed (stuck closed)** — the control board sees the switch contacts closed at a point in the cycle when they should be open, typically before the inducer motor has started building draft.

**Verify the code number first.** The failure condition described on this page is a real, documented Lennox fault condition. The specific number "E211," however, is **not confirmed against a published Lennox installation or service manual**, and Lennox code numbering differs from board to board. Before you or your technician act on a number, look up the fault-code legend in the installation/service manual for your exact furnace model and confirm which code corresponds to a stuck-closed high pressure switch on your board. If the legend points somewhere else, follow the legend — not this page's number.

The pressure switch is a safety device. It should be **open at rest** and only **close** once the inducer motor creates enough negative pressure (vacuum) to confirm the venting is clear and the inducer is running. If the board reads the switch closed while the inducer is off, it cannot trust that safety check, so it refuses to allow ignition and posts the fault.

How the fault is announced also varies. Some Lennox boards display a two-character alphanumeric code; others report the same condition as an LED flash or blink pattern with no letters or numbers at all. Some boards clear automatically once the switch reads correctly, while others hold until power is cycled. Your unit's installation/service manual is the authority on both the code legend and the reset behavior.

## Common causes, ranked by probability

1. **Failed high pressure switch (contacts welded/stuck closed)** — the switch's internal contacts no longer open, so the board always reads them as closed.
2. **Shorted or pinched pressure switch wiring** — a wire chafed against sheet metal or a pinched connector can short the two switch terminals together, mimicking a stuck-closed switch.
3. **Moisture or debris inside the switch** — condensate or dust in the switch body can hold contacts closed intermittently.
4. **Control board input fault** — the board's pressure switch input circuit misreads the signal (less common; usually diagnosed after the switch and wiring check out).
5. **Wrong switch installed — only if the furnace was serviced recently** — a replacement switch with the incorrect pressure rating or the wrong normally-open/normally-closed configuration can trigger this fault. Disregard this cause unless someone has worked on the furnace since it last ran correctly.

## Safe checks before you call anyone

These are the only checks a homeowner should do. Everything else in this fault lives inside the cabinet and is technician work.

- **Thermostat:** Confirm it's set to Heat and the setpoint is above room temperature so the furnace is actually calling for heat. Replace the batteries if it uses them.
- **Air filter:** A severely clogged filter changes airflow — replace it if it's dirty. This won't fix a stuck switch but rules out a related airflow complaint.
- **Breaker / disconnect switch:** Find the furnace breaker or the switch on the unit and cycle it **once** to attempt a clean reset. If the fault comes right back, stop and call a pro.
- **Visible vents and registers:** Make sure supply and return registers aren't blocked by furniture or rugs.
- **Flue/vent termination outside:** Look (from the outside only) for anything obviously blocking the vent pipe — a bird nest, snow, or debris.
- **Condensate line:** Check only the parts outside the furnace cabinet. If the **external drain line or drain pan** is overflowing, clear the blockage in that external line and mop up standing water **on the floor**. Do not reach into the cabinet, and do not disconnect or drain anything inside it.

Do **not** open the furnace cabinet, jumper the pressure switch, or reset the unit repeatedly.

## How a technician will diagnose it

A qualified tech will typically:

1. **Read stored fault history** on the control board to confirm the fault and see how often it's tripped.
2. **Test the high pressure switch electrically** with a meter — checking that it reads **open with the inducer off** and closes only when the inducer builds the rated vacuum.
3. **Inspect the switch tubing and body** for moisture, cracks, or debris.
4. **Trace and inspect the pressure switch wiring** for pinches, chafing, or shorts to the cabinet.
5. **Verify the switch rating** matches the furnace spec for that model.
6. **Check the board input** if the switch and wiring test good, confirming whether the control itself is misreading the signal.

A fair quote should show they actually **tested the switch open/closed state**, not just swapped parts on a guess.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fault on every call for heat, no ignition | High pressure switch stuck closed | Cycle breaker once; if it returns, call a pro | Test and replace high pressure switch |
| Fault clears then returns intermittently | Moisture/debris in switch, or loose wire | Replace dirty filter; check vent termination | Inspect/clean switch, secure wiring |
| Fault appears after a recent repair or install | Wrong switch or pinched wire | None — call the installer back | Verify switch rating, re-route wiring |
| Fault with all switches testing good | Control board input fault | None | Test board input, replace board if confirmed |

## Repair costs

Honest US ranges including parts and labor. Your price varies by region and furnace access.

- **Diagnostic / service call:** $90 – $180
- **High pressure switch replacement:** $150 – $350 (switch part is modest; most cost is labor and diagnosis)
- **Pressure switch wiring repair:** $120 – $300 depending on how much harness must be replaced
- **Control board replacement (if the input circuit is confirmed bad):** $400 – $1,200 installed, with modulating and high-efficiency boards at the top of that range
- **DIY:** $0 — the only homeowner action here is a single breaker reset and basic checks; there is no homeowner-installable part for this fault.

## Related codes

Lennox fault numbering is board-specific, so we are not listing neighboring code numbers here — publishing a number we cannot cite would send you after the wrong part. Instead, look these related conditions up by name in the fault-code legend in your furnace's installation/service manual:

- **Pressure switch failed open / does not close** — the opposite failure mode: the switch never proves draft once the inducer runs.
- **Ignition lockout** — what the control may do downstream after repeated failures to prove a safe start.
- **Low-fire (first-stage) pressure switch faults on two-stage and modulating furnaces** — whether your board separates the high-fire and low-fire switch faults, and under which codes, depends on the model.

If the legend in your manual disagrees with anything on this page, follow the manual.

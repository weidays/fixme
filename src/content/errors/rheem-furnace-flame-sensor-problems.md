---
title: "Rheem Furnace Flame Sensor Problems: Causes & Fixes"
code: "Flame sensor problems"
description: "Rheem furnace flame sensor problems cause short cycling and lockouts. Common causes, safe homeowner checks, pro cleaning and typical costs of $80–$250."
brand: rheem
equipment: furnace
severity: pro
costRange: "$80–$250 typical (clean or replace sensor); $400+ if the control board is involved"
appliesTo: "Rheem Classic, Classic Plus, Prestige and most 80/90% gas furnaces using an integrated furnace control (IFC); exact fault-flash patterns vary by board revision"
tags:
  - rheem
  - furnace
  - flame-sensor
  - flame-rectification
  - short-cycling
parts: []
datePublished: 2026-10-02
dateModified: 2026-10-02
reviewedBy: ""
faq:
  - q: Can I clean a Rheem flame sensor myself?
    a: Cleaning the sensor means opening the burner cabinet and removing a sensor near a live gas burner, so it is technician work, not a safe DIY task.
  - q: Why does my Rheem furnace light then shut off after a few seconds?
    a: That classic pattern usually means the flame sensor is dirty or failing, so the board can't confirm flame and shuts the gas valve for safety.
  - q: Does a flame sensor fault reset itself?
    a: On most Rheem boards the furnace retries ignition a set number of times and then locks out. Behavior after that varies by board - some hold in lockout until you cycle power at the switch or breaker, while many integrated controls auto-retry after about an hour. An auto-retry is not a fix; the underlying sensor problem is still there.
  - q: How much does a flame sensor repair cost?
    a: A professional clean typically runs $80–$170, and a full sensor replacement is usually $120–$250 including the part and labor. If the control board turns out to be at fault, expect $400–$1,200 installed.
---

## What this code means

The flame sensor (also called a flame rod or flame-rectification probe) sits in the burner flame and tells the Rheem integrated furnace control (IFC) that a flame is actually present. It works by passing a tiny electrical current through the flame — a process called rectification. If the board doesn't "see" enough current within a few seconds of the gas valve opening, it assumes there is no flame and shuts the gas valve to prevent raw gas from building up.

On most Rheem furnaces this shows up as the burner lighting and then going out after 2–7 seconds, repeated a set number of times, followed by a lockout. The control's diagnostic LED typically flashes a flame-sense or flame-failure code — but the exact flash count and label vary by board revision, so check the legend printed on the inside of the furnace door or in your model's manual.

Flame sensor problems are rarely a bad board; the sensor itself gets coated with oxide and silica over time and simply stops conducting. Because confirming and fixing it requires working inside the burner compartment near live gas, this is a pro-level job.

## Common causes, ranked by probability

1. **Dirty or oxidized flame sensor** — a thin coating of carbon, silica, or oxide insulates the rod and kills the rectification signal. By far the most common cause.
2. **Weak or failed flame sensor** — the rod cracks, corrodes, or loses its coating; cleaning no longer restores a stable signal and it needs replacement.
3. **Poor sensor position** — the rod has drifted out of the flame or the mounting bracket loosened, so it only intermittently touches flame.
4. **Bad ground / dirty burner** — rectification needs a solid chassis ground and a clean burner; a poor ground or dirty burners reduce the signal the board reads.
5. **Corroded or loose sensor wire/connector** — a degraded wire or push-on terminal between the sensor and the board weakens the signal.
6. **Failing control board (IFC)** — least common; the flame-sense circuit on the board itself is faulty even with a clean, correctly positioned sensor.

## Safe checks before you call anyone

These are the only steps a homeowner should do. Do **not** open the burner compartment or touch the sensor.

- **Thermostat:** Confirm it's set to Heat and the setpoint is above room temperature. Replace the thermostat batteries if it uses them.
- **Air filter:** A clogged filter can cause overheating shutdowns that mimic flame faults. Replace it if it's dirty.
- **Breaker / switch:** Find the furnace switch (looks like a light switch near the unit) and the breaker. Turning power off for 30 seconds and back on performs **one** reset of a locked-out furnace. Do not repeatedly reset it.
- **Vents and registers:** Make sure supply and return vents are open and unblocked so airflow is normal.
- **Condensate line (90% furnaces):** A clogged condensate line or full trap can trigger a safety shutdown. If you can see standing water or an overflow, clear visible blockages at the drain.
- **Panels:** Make sure the burner access panel is fully seated — a loose panel can keep the door switch from closing.

If the furnace still lights and quickly shuts off, you need a technician. Repeated manual resets will not fix a dirty sensor and are unsafe.

## How a technician will diagnose it

A good tech should:

1. Read the IFC diagnostic flash code and confirm it points to flame sense, not ignition or airflow.
2. Watch a full ignition sequence: does the burner light and then drop out after a few seconds? That confirms flame proving, not ignition.
3. Measure the **flame-rectification current** in microamps with a meter in series with the sensor. A healthy signal is usually a few microamps; the minimum is printed on the board or in the service manual. A reading well below that minimum confirms a sensor problem.
4. Remove and inspect the flame rod, clean it per the service manual using a non-aggressive pad or fine abrasive cloth — never coarse sandpaper or a file, which can damage the rod — then re-measure the microamp signal.
5. Check sensor position in the flame, the chassis ground, and the sensor wire/connector.
6. Replace the sensor if cleaning doesn't restore a stable signal, and only suspect the board after the sensor, ground, and wiring check out.

If a tech jumps straight to replacing the control board without measuring the flame current, ask why — that's a red flag on this fault.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Burner lights, shuts off in a few seconds, retries | Dirty/oxidized flame sensor | One reset; replace filter | Clean or replace sensor, measure µA signal |
| Repeated ignition then lockout | Weak/failed sensor or bad ground | One reset only | Test sensor, verify ground, replace if needed |
| Intermittent shutdowns, worse over time | Sensor drifting out of flame | Check filter and vents | Reposition sensor, tighten bracket |
| Works after reset, fails hours later | Degrading sensor or loose connector | Note the pattern for the tech | Replace sensor/connector, re-test |
| No flame proved despite clean sensor | Faulty flame-sense circuit on board | None | Confirm board fault, replace IFC |

## Repair costs

Honest US ranges, including parts and labor:

- **Diagnostic / service call:** $80–$150 (often credited toward the repair).
- **Flame sensor cleaning:** $80–$170 — frequently done as part of a tune-up.
- **Flame sensor replacement:** $120–$250, part plus labor. The sensor itself is usually $15–$40.
- **Sensor wire / connector repair:** $90–$200 depending on access.
- **Integrated furnace control (IFC) board replacement:** $400–$1,200 — only if the board's flame circuit is confirmed bad; uncommon for this fault. The spread depends on the specific board, how old the furnace is, and whether an OEM or aftermarket part is used. OEM boards for modulating and variable-speed Prestige models sit at the high end of that range.

Because a dirty sensor returns over time, an annual tune-up that includes cleaning the flame rod is the cheapest long-term fix.

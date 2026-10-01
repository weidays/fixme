---
title: "York Furnace Flame Sensor Problems: Causes & Fixes"
code: "Flame sensor problems"
description: "York furnace flame sensor problems cause short cycling and ignition lockout. Learn the causes, fixes and repair costs ($80 diagnostic – $800+ with a board)."
brand: york
equipment: furnace
severity: pro
costRange: "$80 diagnostic – $800+ if the control board needs replacement"
appliesTo: "York single- and two-stage gas furnaces (Affinity, LX, Latitude series) with hot-surface or spark ignition and a dedicated flame-sensing rod; the fault code displayed and the lockout behavior vary by control board family and revision."
tags:
  - york
  - furnace
  - flame-sensor
  - flame-rectification
  - short-cycling
parts: []
datePublished: 2026-10-01
dateModified: 2026-10-01
reviewedBy: ""
faq:
  - q: Can I clean the York flame sensor myself?
    a: No. Cleaning the flame sensor means opening the burner compartment and handling a live gas appliance, which is technician work. You can safely cycle power once, but internal cleaning should be left to a pro.
  - q: Why does my York furnace light then shut off after a few seconds?
    a: That classic pattern means the flame sensor is not confirming flame. A dirty, cracked, or misaligned sensing rod fails to detect the micro-amp current, so the board shuts the gas valve and may lock out after several tries.
  - q: Does a flame sensor fault reset itself?
    a: On most York boards the furnace retries ignition a set number of times, then holds in lockout until power is cycled. Some boards auto-reset after about one hour. One manual reset is fine; repeated resets are not.
---

## What this symptom means

York furnaces confirm a burner is actually lit using a **flame-sensing rod** placed in the flame. When the burner fires, a tiny electrical current (measured in microamps) passes through the flame to ground — this is called **flame rectification**. The control board reads that current and knows the flame is present.

If the board cannot read enough flame current, it assumes the burner did not light safely, closes the gas valve, and tries again. After a set number of failed attempts it goes into **lockout**.

**"Flame sensor problems" is a symptom, not a published York code.** What your furnace actually displays depends on the control board: some York (Johnson Controls) boards have a dedicated low-flame-sense indication, while others report the same situation as a failure-to-establish-flame or lockout fault. Flash patterns and alphanumeric codes also differ between board families and revisions — a code on a 7-segment display does not mean the same thing as the same number of LED flashes on another board.

So before you act on any number, **read the diagnostic label inside your furnace door** (or on the blower-compartment panel). That label is the only reliable way to translate the code your specific board is showing. Don't rely on a flash count you found for a different York furnace.

**Reset behavior also varies by board revision:** many York boards hold in lockout until you cycle power at the switch or breaker, while some auto-reset after roughly one hour. The same diagnostic label usually tells you which.

## Common causes, ranked by probability

1. **Dirty or oxidized flame sensor rod** — the most common cause. A film of oxide or soot insulates the rod and drops the microamp signal below threshold.
2. **Flame sensor out of position** — the rod has drifted out of the flame path, so it cannot read current reliably.
3. **Cracked or failed flame sensor rod** — ceramic insulator cracks or the rod degrades with age.
4. **Weak or no burner flame reaching the sensor** — poor flame quality (often tied to burner or gas issues diagnosed under ignition faults).
5. **Poor ground / loose sensor wire** — flame rectification needs a solid chassis ground; a corroded connection or loose spade terminal starves the signal.
6. **Failing control board** — the flame-sensing circuit on the board itself can fail, misreading a perfectly good flame.

## Safe checks before you call anyone

These are the only steps a homeowner should perform:

- **Check the thermostat** — confirm it's set to HEAT and the setpoint is above room temperature; replace batteries if it's battery-powered.
- **Replace a dirty air filter** — severe restriction can cause related overheating/short-cycling symptoms that mimic a sensor fault.
- **Reset power once** — turn the furnace switch (or breaker) off for 30 seconds, then on. Allow one full ignition cycle. **Do this only once.** Repeated resets on a locked-out unit are unsafe.
- **Check supply and return vents** — make sure registers are open and unblocked.
- **Inspect the condensate line** (high-efficiency models) — a clogged drain can trip related safeties; clear visible blockage only.

If the furnace still lights and drops out, or locks out again, stop and call a technician. **Do not open the burner compartment or clean the sensor yourself.**

## How a technician will diagnose it

A qualified tech will typically:

1. Read the stored fault code on the control board and translate it using the diagnostic label for that board.
2. Watch a full ignition sequence to see whether the burner lights and then drops out.
3. **Measure flame current in microamps** with a meter in series with the sensor — the board needs at least a minimum threshold specified by that control, which is typically well under the reading a healthy sensor produces. The exact figure comes from the furnace label or service literature, not from a general rule of thumb.
4. Remove and **inspect the sensor rod** for oxidation, cracks, and correct position in the flame.
5. Clean the rod with fine abrasive and retest the microamp reading.
6. Check the **sensor wire and ground** for continuity and corrosion.
7. If a clean, well-positioned sensor still reads low with a good flame, test or replace the **control board**.

This order lets you sanity-check a quote: a flame-sensor complaint should start with a cleaning and a microamp reading, not an immediate board replacement.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---------|-------------|------------|----------------|
| Burner lights, shuts off in 2–7 seconds, retries | Dirty/oxidized flame sensor | Reset power once; replace filter | Clean or replace sensor, measure microamps |
| Furnace locks out after several ignition tries | Low flame signal / sensor out of position | One reset, then call pro | Reposition/clean sensor, verify flame current |
| Intermittent heat, works some cycles | Cracked rod or loose ground/wire | Check thermostat & filter | Replace sensor, repair ground/wiring |
| Fault persists after cleaning, good flame present | Failing control board flame circuit | None | Test and replace control board |
| Short cycling with weak/yellow flame | Burner or flame-quality issue | None | Inspect burners, diagnose ignition fault |

## Repair costs

Honest US ranges (parts + labor; regional and model variation applies):

- **Diagnostic / service call:** $80 – $180
- **Flame sensor cleaning:** $100 – $200 **including the service call** — this is not an extra charge on top of the diagnostic fee, and it's often bundled into a seasonal tune-up
- **Flame sensor rod replacement:** $120 – $280
- **Sensor wire / ground repair:** $100 – $250
- **Control board replacement:** $400 – $800+ (if the flame-sensing circuit has failed)

A cleaning visit is the cheapest likely outcome; a board replacement is the top of the range. Be wary of a board quote before the sensor has been cleaned and the microamp signal measured.

## Related issues

- **York Furnace Ignition Lockout: Causes & Fixes** — the lockout a failing flame sensor most often triggers.
- **York Furnace Flame Sensed With Gas Off: Causes & Fixes** — the opposite problem, where the board reads flame when it shouldn't.
- **York Furnace Won't Ignite: Causes, Diagnosis & Fixes** — when the burner never lights at all.
- **York Furnace Short Cycling: Causes, Diagnosis & Fixes** — the light-then-drop-out pattern a weak flame signal creates.
- **York Furnace Keeps Shutting Off: Causes & Fixes** — broader shutdown troubleshooting.

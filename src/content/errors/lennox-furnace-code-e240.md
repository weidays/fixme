---
title: "Lennox Furnace Code E240: Low Flame Current Fix & Cost"
code: "Code E240"
description: "Lennox Code E240 means low flame current in run mode from a dirty flame sensor or weak flame. Causes, fixes and honest US costs inside."
brand: lennox
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $750+ if the SureLight control board needs replacement"
appliesTo: >
  Lennox and Dave Lennox Signature gas furnaces with SureLight integrated
  control boards (e.g. SLP98, EL296, ML196 and similar variable/two-stage
  models). Exact code text, code formats and thresholds vary by board revision;
  confirm against the diagnostic label and wiring diagram on your unit's cabinet.
tags:
  - flame-sensor
  - weak-flame
  - flame-current
  - lennox
  - surelight
parts: []
datePublished: 2026-09-26
dateModified: 2026-09-26
reviewedBy: ""
faq:
  - q: Is Lennox Code E240 dangerous?
    a: It is not usually an immediate hazard, but it means the flame signal is weak while the burner runs. If ignored it can progress to a lockout and no heat, so book a technician soon.
  - q: Can I fix E240 by cleaning the flame sensor myself?
    a: No. Cleaning the flame sensor means opening the burner compartment and handling internal components, which is technician work. Homeowners are limited to filters, thermostat and one reset.
  - q: Will E240 clear on its own?
    a: That depends on the control revision in your furnace — some boards clear the code if flame current recovers, others hold it until power is cycled, and a persistent weak signal can end in a lockout. Your unit's literature describes the behavior for your specific board. A single power cycle is the only reset a homeowner should attempt.
  - q: Why does E240 come back after a reset?
    a: A reset does not fix the root cause. A dirty or oxidized flame sensor, a weak or lifting flame, or low gas pressure will trigger E240 again until a technician cleans or corrects the actual fault.
---

## What this code means

Lennox Code **E240** indicates **low flame current in run mode** — the control board is
sensing a flame during a normal heating cycle, but the microamp signal it reads
through the flame sensor is below the minimum threshold the board expects.

The flame sensor (a metal rod in the burner flame) works by flame rectification:
when the burner is lit, a tiny DC current flows from the rod, through the flame,
to ground. The SureLight board measures that current in microamps. When the flame
is present but the signal is weak, the board flags E240 rather than a full ignition
failure.

The two documented triggers are a **dirty or oxidized flame sensor** and a **weak
or lifting flame**. This is different from a no-flame lockout — the flame is being
detected, just poorly.

What the board does next — keep running while it watches the signal, retry, or shut
down and lock out — **depends on the control revision in your furnace**. The same is
true of whether E240 self-clears once the signal recovers or holds until power is
cycled. The behavior for your specific board is described in the installation
instructions and on the diagnostic label on the unit, so check those rather than
assuming a sequence.

## Common causes, ranked by probability

1. **Dirty or oxidized flame sensor** — carbon, dust, or oxide film on the sensor
   rod reduces the microamp signal. This is by far the most common cause and the
   first thing a technician checks.
2. **Weak, small, or lifting flame** — poor combustion, low gas pressure, or
   partially blocked burners produce a flame that doesn't fully envelop the sensor
   rod, lowering the current.
3. **Poor sensor ground or corroded connection** — a loose sensor wire, corroded
   terminal, or bad chassis ground weakens the rectified signal path.
4. **Cracked sensor insulator or degraded sensor rod** — an aging sensor with a
   hairline crack or eroded rod reads low even when clean.
5. **Marginal control board flame-sense circuit** — least common; the board's own
   sensing circuit drifts and misreads the current. Confirmed only after the sensor
   and flame are verified good.

## Safe checks before you call anyone

These are the only steps a homeowner should perform:

- **Check and replace the air filter.** A clogged filter can starve airflow and
  disturb combustion. A clean filter is free and rules out an easy contributor.
- **Confirm thermostat settings.** Make sure it's set to Heat with a call
  temperature above room temperature; replace thermostat batteries if it's
  battery-powered.
- **Check the breaker and the furnace switch.** Confirm the furnace breaker isn't
  tripped and the service switch (often a light-switch by the furnace) is on.
- **Look at supply and return registers.** Make sure they're open and unblocked so
  the system isn't overheating or short-cycling.
- **Check the condensate drain (high-efficiency models).** A backed-up condensate
  line can trip safeties on modern Lennox furnaces; make sure it's draining.
- **Try one reset.** Cycle the furnace power off and on **once**. If E240 returns,
  stop and call a technician. Do not repeatedly reset a unit.

Do **not** open the burner compartment, clean the flame sensor, or touch any
wiring — that is technician work.

## How a technician will diagnose it

A qualified tech will typically:

1. Pull the E240 history and any accompanying codes from the SureLight board.
2. Put the furnace through a heat cycle and **measure flame current in microamps**
   with a meter in series with the sensor lead, comparing the reading to the
   minimum microamp value printed on your unit's wiring diagram.
3. **Remove and clean or replace the flame sensor**, then re-measure the signal.
4. Inspect the **flame quality** — checking for a crisp blue flame that fully
   covers the sensor rod, and looking for lifting or yellow tipping.
5. **Check manifold and inlet gas pressure** and clean or inspect the burners if
   the flame is weak.
6. Verify the **sensor ground and wiring continuity** back to the board.
7. Only if all of the above pass, evaluate the **control board's** sense circuit.

You can sanity-check a quote: a legitimate E240 diagnosis almost always starts with
a microamp reading and a sensor cleaning — not an immediate board replacement.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| E240 shows but furnace still heats | Dirty/oxidized flame sensor | Replace filter; try one reset | Measure microamps, clean or replace sensor |
| E240 then short-cycling or dropout | Weak or lifting flame | Check registers open | Check gas pressure, clean burners, inspect flame |
| E240 recurs right after reset | Poor sensor ground/connection | Stop resetting; call tech | Inspect and repair sensor wiring and ground |
| E240 followed by a shutdown or lockout code | Flame current fell below the board's minimum and stayed there | One reset only, then call | Measure microamps, clean or replace sensor, verify flame and gas pressure |
| E240 with clean sensor and good flame | Marginal board sense circuit | None | Verify circuit, replace control board if confirmed |

## Repair costs

Honest US ranges (parts + labor; regional and model variation applies):

- **Diagnostic / service call:** $80 – $180
- **Flame sensor cleaning:** often included in a service call, or **$100 – $175**
  as a standalone visit
- **Flame sensor replacement:** **$100 – $250** installed (the part itself is
  usually $15 – $40)
- **Burner cleaning / pull-and-clean:** **$150 – $350**
- **Manifold gas pressure correction with combustion check:** **$150 – $450** —
  this is a separate combustion-setup task from burner cleaning, usually billed
  with a full combustion analysis rather than as a quick adjustment, and the two
  are often quoted together
- **Sensor wiring or ground repair:** **$120 – $300**
- **SureLight control board replacement (rare for this code):** **$400 – $750+**

Most E240 calls resolve at the low end — a clean or new flame sensor. Be skeptical
of a board-replacement quote before a microamp reading and sensor cleaning have been
done.

## Related codes

Lennox code assignments are **not** consistent across the product line: the
variable-speed controls (such as SLP98 and EL296) and the older two-stage SureLight
boards use different code lists, and the formats differ too — some codes appear with
a letter prefix, some without. For that reason this page does not publish meanings
for other codes, because a meaning that is correct on one board revision can be
wrong or nonexistent on another.

If your furnace is showing another code alongside E240:

- Read it against the **diagnostic label on the unit itself** — usually printed
  inside or on the furnace's exterior access panel — or the installation
  instructions supplied with the furnace. That label is the authoritative list for
  your board.
- Write down the exact code text, including any prefix, along with E240 and the
  order the codes appeared in.
- Give both codes to your technician. Pairing E240 with an ignition or lockout code
  changes what gets checked first, and the tech will interpret them against the
  revision-specific chart for your control.

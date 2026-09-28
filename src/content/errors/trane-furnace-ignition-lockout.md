---
title: "Trane Furnace Ignition Lockout: Causes, Fixes & Cost"
code: "Ignition lockout"
description: "Trane furnace ignition lockout means failed ignition after repeated tries. Causes, safe checks, fixes and costs from $0 DIY to $700 pro."
brand: trane
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $700 if the gas valve or control board needs replacement"
appliesTo: "Trane XR, XV, XC and S-series gas furnaces (XR80, XR90, XV80, XV95, S9V2, etc.) using Integrated Furnace Controls. The fault legend differs by control family: older XR80/XV80-era White-Rodgers-style boards, newer Trane IFCs, and communicating or modulating models all annunciate lockout differently. Always read the legend printed on the blower-door or control label for your specific unit."
tags:
  - ignition-lockout
  - trane
  - furnace
  - no-heat
parts:
  - name: Pleated furnace air filter
    search: 16x25x1 furnace air filter pleated
  - name: Thermostat batteries
    search: aa lithium batteries thermostat
datePublished: 2026-09-28
dateModified: 2026-09-28
reviewedBy: ""
faq:
  - q: What is an ignition lockout on a Trane furnace?
    a: It means the control board tried to light the burners the maximum number of times (typically three trials on most boards) and never proved a stable flame, so it shut the gas off and locked out for safety.
  - q: How do I clear a Trane ignition lockout?
    a: Most boards auto-reset after about one hour, or you can cycle power at the furnace switch or breaker once. If it locks out again, stop and call a technician — repeated resets are unsafe.
  - q: Is an ignition lockout dangerous?
    a: The lockout itself is a safety feature that stops unburned gas from accumulating. It is not an emergency, but if you smell gas, leave and call your gas utility or 911 before touching anything.
  - q: How much does it cost to fix a Trane ignition lockout?
    a: A flame sensor cleaning typically runs $80–$250 and is often just the diagnostic fee, an igniter is $200–$400, and a gas valve or control board can reach $400–$700 installed depending on model.
---

## What this code means

An **ignition lockout** on a Trane furnace means the Integrated Furnace Control (IFC) commanded the burners to light, went through its normal trial-for-ignition sequence, and never confirmed a stable flame. After a set number of failed attempts — **typically three trials on most boards**, with retry and recycle behavior varying by control — the board shuts off the gas valve and stops trying. This is a deliberate safety response that prevents raw gas from building up in the heat exchanger.

Failure-to-ignite is most commonly annunciated as a **system-lockout code** rather than as a code with the words "ignition lockout" on it. How that lockout is reported depends entirely on which control your furnace uses:

- **Many Trane IFCs using the numbered flash legend:** lockout is commonly shown as **2 flashes (system lockout)**.
- **Older White-Rodgers-based boards (XR80 / XV80-era):** these use a different legend, and lockout is commonly indicated by **1 flash**.
- **Communicating, modulating and variable-speed models (for example XV95 / S9V2 with a communicating comfort control):** these may report the fault as **text or an alphanumeric code on a display, or through the thermostat/comfort control**, rather than by counting LED flashes at all.

Because the legend genuinely varies by control family and board revision, **read the legend printed on the blower-door or control label of your own furnace** (or the install manual) before matching any flash count to a meaning. Counting flashes against the wrong legend is the fastest way to chase the wrong fault.

The lockout is also either **soft (auto-resets after roughly one hour)** or **hard (holds until power is cycled)** — which one your furnace uses again depends on the board, so check that same label.

Because ignition problems involve gas and the burner assembly, most repairs here are **pro-level work**. The safe homeowner steps are limited.

## Common causes, ranked by probability

1. **Dirty or weak flame sensor** — The most common ignition-lockout trigger. The sensor rod fails to detect the flame's tiny electrical current, so the board thinks ignition failed even when the burners briefly light.
2. **Weak or cracked hot-surface igniter** — An aging igniter may not get hot enough to light gas within the trial window.
3. **Insufficient gas at the burners** — Low supply pressure, a partly closed manual valve, or a failing gas valve keeps flame from establishing. (Note: outright *no gas supply* is more often a supply/flame-proving fault — see related codes.)
4. **Obstructed or misaligned burners** — Blocked carryover/crossover ports so flame never travels from burner to burner, rust scale or spider webbing in the burner ports, or burners sitting out of alignment with the igniter. This is **burner-compartment work inside the cabinet and must not be attempted by a homeowner** — it requires shutting off gas, pulling burners, and re-verifying light-off and manifold pressure afterward.
5. **Grounding or polarity issues** — Flame sensing relies on a good ground; poor grounding or reversed line polarity mimics a failed flame signal.
6. **Failing control board (IFC)** — Less common, but a board that mis-times or mis-reads the ignition sequence can lock out a healthy furnace.

## Safe checks before you call anyone

These are the only steps a homeowner should perform:

- **Check the thermostat** — Confirm it's set to **Heat** and the setpoint is above room temperature. Replace the **batteries** if it uses them. On communicating systems, check the comfort control screen for a displayed fault message.
- **Inspect the air filter** — A clogged filter can cause airflow and heat-related nuisance shutdowns. Replace it if it's dirty.
- **Cycle power once** — Flip the furnace switch or breaker off, wait 30 seconds, then on. This is your **one allowed reset** of a locked-out unit. If it locks out again, stop.
- **Check vents and registers** — Make sure supply and return registers throughout the house are open and unblocked.
- **Check the condensate line** (high-efficiency models) — A clogged drain can trip related safeties; clear any obvious blockage or standing water at the drain trap.

⚠️ **Do not** repeatedly reset the furnace, open the gas valve, bypass any safety switch, or open the cabinet to poke at burners, sensors or igniters. If you **smell gas**, leave the house and call your gas utility's emergency line or 911 before doing anything else.

## How a technician will diagnose it

A qualified tech will typically:

1. Read the stored fault — flash code, display message, or comfort-control fault list, depending on the control family — and note whether the board is on a soft or hard lockout.
2. Watch a full ignition cycle to see how far the sequence gets — does the igniter glow, do burners light, does flame hold?
3. **Measure the flame-sense microamp signal** with a meter. A healthy flame signal is usually a few microamps; the board's minimum proof threshold is much lower and is printed in the service literature for that control. Clean the flame sensor rod if the signal is low.
4. Check the **hot-surface igniter resistance** and inspect for cracks or hot spots.
5. Inspect the **burners and carryover ports** for rust, debris, webbing or misalignment.
6. Verify **gas supply and manifold pressure** at the valve.
7. Confirm **electrical ground and line polarity** at the board.
8. Test the **control board** as a last step if all inputs check out.

This order lets you sanity-check a quote: a good tech confirms *why* ignition fails before replacing an igniter, valve, or board.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Igniter glows, burners light briefly then die, unit locks out | Dirty/weak flame sensor | One power-cycle reset | Measure microamps, clean or replace flame sensor |
| Igniter glows but burners never light | Weak igniter or low gas | Check thermostat, one reset | Test igniter resistance, check gas pressure |
| No glow at all before lockout | Cracked igniter or igniter circuit | One reset | Test/replace hot-surface igniter |
| First burner lights, others don't, then lockout | Blocked carryover ports or misaligned burners | None — do not open the cabinet | Pull and clean burners, verify light-off |
| Locks out intermittently, worse in cold | Marginal gas supply or valve | Check filter, vents | Verify manifold pressure, test gas valve |
| Locks out immediately every cycle | Grounding/polarity or bad board | One reset | Check ground/polarity, test control board |
| Repeats lockout after one reset | Underlying fault unresolved | Stop resetting, call pro | Full diagnostic sequence |

## Repair costs

Honest US ranges (parts + labor):

- **Diagnostic / service call:** $90–$180
- **Flame sensor cleaning:** $80–$250 — often just the diagnostic fee, since it's a few minutes of work once the tech is on site
- **Flame sensor replacement:** $150–$300
- **Hot-surface igniter replacement:** $200–$400
- **Burner cleaning / removal and reinstall:** $150–$350
- **Gas valve replacement:** $400–$600
- **Control board (IFC) replacement:** $400–$700
- **DIY items (filter, thermostat batteries):** $10–$40

Costs vary by region, model, and part availability. A simple flame-sensor cleaning is the best-case outcome and worth confirming before agreeing to any board or valve replacement.

## Related codes

Flash-code numbers below apply only to Trane IFCs that use the numbered flash legend — confirm against the legend on your own blower-door or control label before matching a count to a meaning. On older White-Rodgers-style boards and on communicating/modulating units the same faults are reported differently, so the remaining entries are listed by fault name.

- **Trane Furnace 2 Flashes: System Lockout Causes & Fixes** — the general lockout code closely tied to failed ignition on boards using the numbered legend.
- **Trane Furnace 5 Flashes: Flame Sensed Without Gas** — flame-proving fault in the opposite direction, on boards using the numbered legend.
- **Trane Furnace Weak or Low Flame Sense Signal: Causes & Fixes** — a marginal microamp signal, a top ignition-lockout cause.
- **Trane Furnace Igniter Circuit Fault: Causes & Fixes** — igniter-specific failures.
- **Trane Furnace Gas Valve Circuit Fault: Causes & Fixes** — gas valve control faults.
- **Trane Furnace Reversed Polarity or Poor Ground: Causes & Fixes** — wiring faults that break flame sensing.
- **Trane Furnace Won't Ignite: Causes, Fixes & Costs** — broader no-ignition troubleshooting.

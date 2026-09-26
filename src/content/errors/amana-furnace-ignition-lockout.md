---
title: "Amana Furnace Ignition Lockout: Causes, Fixes & Costs"
code: "Ignition lockout"
description: "Amana furnace ignition lockout means failed ignition after retries. Causes, DIY resets and technician fixes, costs $0 DIY to $600 pro."
brand: amana
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $600 if the gas valve or control board needs replacement"
appliesTo: "Amana 80% and 96% single/two-stage gas furnaces (AMVC/AMVM/ACVC/AMES series) with an integrated ignition control board. Flash-code display varies by board revision."
tags:
  - amana
  - furnace
  - ignition-lockout
  - hot-surface-igniter
  - flame-sensor
parts:
  - name: "16x25x1 furnace air filter"
    search: "16x25x1 furnace air filter"
  - name: "Thermostat AA batteries"
    search: "energizer aa batteries"
datePublished: 2026-09-25
dateModified: 2026-09-25
reviewedBy: ""
faq:
  - q: "Does an Amana ignition lockout reset itself?"
    a: "On most Amana boards, lockout auto-resets after about one hour, or immediately when you cycle power at the breaker or thermostat. It will re-lock if the fault repeats."
  - q: "How many times will an Amana furnace try to ignite before lockout?"
    a: "Amana integrated controls typically attempt ignition three times (some boards allow one to three tries) before entering ignition lockout to protect the system."
  - q: "Can I just keep resetting the furnace?"
    a: "No. Do one reset. If it locks out again, the furnace is protecting you from unburned gas. Repeated resets can dump gas into the heat exchanger, so call a technician."
---

## What this code means

Ignition lockout means your Amana furnace called for heat, tried to light the burners the allowed number of times, and never confirmed a stable flame — so the control board shut the system down and stopped trying. On most Amana boards this shows as **1 flash** of the diagnostic LED (see our dedicated 1-flash page), and it is the furnace's way of preventing raw gas from building up inside the heat exchanger.

The key distinction: this code is about the furnace **failing to prove flame** after its ignition sequence, not about a stuck safety switch. The igniter may glow, gas may or may not light, but the flame sensor never confirms a steady burn — so the board locks out.

**Reset behavior:** Amana integrated ignition controls generally **auto-reset after roughly one hour**, or you can force a reset by cycling power at the breaker or by turning the thermostat to Off and back to Heat. If the underlying problem is still present, it will simply lock out again. Exact retry count (usually three) and lockout duration vary slightly by board revision — check the wiring-diagram label inside the blower door.

## Common causes, ranked by probability

1. **Dirty or failing flame sensor** — the most common cause. A carbon- or oxide-coated flame rod can't conduct enough microamp signal to prove flame, so the board thinks ignition failed even when burners lit.
2. **Weak, cracked, or failed hot-surface igniter** — the igniter doesn't reach ignition temperature or has an open element, so burners never light.
3. **Insufficient gas at the burners** — low gas pressure, a partially closed manual valve, or a faulty gas valve prevents a stable flame. (Full gas-supply outages fall under flame-proving faults; here it's specifically about proving a flame during the ignition sequence.)
4. **Poor burner flame / dirty burners** — misaligned or sooted burners produce an unstable flame the sensor can't confirm.
5. **Bad ground or low-voltage wiring issue** — the flame-sensing circuit needs a solid chassis ground; a poor ground mimics a no-flame condition.
6. **Failed integrated control board** — less common, but a board that mis-reads the flame signal or mistimes the igniter can force repeated lockouts.

## Safe checks before you call anyone

These are the only steps a homeowner should do:

- **Replace a dirty air filter.** A clogged filter can trip limits and cause short-cycling that ends in lockout. Swap in a clean filter.
- **Check the thermostat.** Confirm it's set to Heat and the setpoint is above room temperature. Replace the batteries if it's battery-powered.
- **Cycle power once.** Turn the furnace switch or breaker off, wait 30 seconds, turn it back on — or set the thermostat to Off then Heat. This is your **one** reset. If it lights and runs, great; if it locks out again, stop.
- **Check supply and return vents.** Make sure registers aren't blocked by furniture, rugs, or closed dampers, which can trip limits.
- **Look at the condensate drain** (96% furnaces). If it's obviously overflowing or backed up, that can cause shutdowns — but clearing internal traps is technician work.

Do **not** open the burner compartment, clean the flame sensor, touch the igniter, or repeatedly reset the furnace. Those cross into technician territory.

## How a technician will diagnose it

A qualified tech will typically:

1. Read the stored flash/fault history on the control board.
2. Watch a full ignition cycle: does the igniter glow, do burners light, does flame stay lit?
3. **Measure the flame-sensor microamp signal** with a meter — a low reading points to a dirty or failing sensor.
4. Clean or replace the flame sensor and re-test the microamp reading.
5. Test the hot-surface igniter's resistance and glow.
6. Check **manifold and inlet gas pressure** against the rating-plate spec, and inspect the gas valve.
7. Inspect and clean burners, verify flame carryover and alignment.
8. Verify chassis ground and low-voltage wiring integrity.
9. Replace the control board only after the sensor, igniter, gas, and ground have been ruled out.

If a quote jumps straight to a control board or gas valve without a microamp reading and gas-pressure check, ask why.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Igniter glows, burners light briefly, then shut off; locks out | Dirty/failing flame sensor | Change filter, do one reset | Measure microamps, clean/replace flame sensor |
| Igniter glows, burners never light | Weak igniter or low gas | Change filter, one reset | Test igniter resistance, check gas pressure/valve |
| Igniter does not glow at all | Failed igniter or board | Verify power, one reset | Test igniter and control board igniter output |
| Burners light unevenly, flame flickers | Dirty/misaligned burners | None | Clean and align burners, check carryover |
| Locks out intermittently, worse when dirty | Restricted airflow / limit trips | Replace filter, clear vents | Verify airflow, temp rise, and limit operation |
| Random lockouts, no clear pattern | Poor ground or failing board | One reset | Check ground/wiring, replace board if confirmed |

## Repair costs

Honest US ranges (parts + labor, varies by region and model):

- **One reset / filter change:** $0 DIY.
- **Flame sensor clean or replacement:** $80 – $250.
- **Hot-surface igniter replacement:** $150 – $400.
- **Burner cleaning / adjustment:** $150 – $350.
- **Gas valve replacement:** $300 – $600.
- **Integrated control board replacement:** $350 – $600.
- **Diagnostic / service call:** $90 – $180, often credited toward the repair.

Because ignition lockout most often traces back to the flame sensor or igniter, many repairs land in the **$80–$400** range. A board or gas valve is the pricier — and rarer — outcome.

## Related codes

- **Amana Furnace Code 1 Flashes: Ignition Lockout Fixes** — the specific flash code most boards use for this condition.
- **Amana Furnace 7 Flashes: Low Flame Signal Fix** — a weak flame signal that hasn't yet locked out.
- **Amana Furnace 8 Flashes: Igniter Circuit Fault Fixes** — when the problem is the igniter circuit specifically.
- **Amana Furnace 5 Flashes: Flame Sensed, No Call for Heat** — the opposite condition, where flame is detected unexpectedly.
- **Amana Furnace 4 Flashes: Open High-Limit Switch Fix** — airflow-related shutdowns that can accompany lockouts.

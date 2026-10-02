---
title: "York Furnace Ignition Lockout: Causes, Fixes & Costs"
code: "Ignition lockout"
description: "York furnace ignition lockout causes include a dirty flame sensor, weak igniter and low gas pressure. See safe checks, fixes and typical repair costs."
brand: york
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $1,200 if the gas valve or control board is replaced"
appliesTo: "York single-stage and two-stage gas furnaces with hot-surface ignition (Affinity, LX, Latitude series) using third-party integrated ignition controls (board brand and revision vary by build date). Exact flash count and lockout duration vary by board revision."
tags:
  - york
  - furnace
  - ignition-lockout
  - no-heat
  - hot-surface-ignition
parts:
  - name: Pleated furnace air filter
    search: furnace air filter 16x25x1 MERV 11
  - name: Thermostat batteries
    search: AA alkaline batteries thermostat
datePublished: 2026-10-01
dateModified: 2026-10-01
reviewedBy: ""
faq:
  - q: What does ignition lockout mean on a York furnace?
    a: It means the control board tried to light the burners the maximum number of times (usually three or four) without proving a stable flame, so it shut off gas and locked out for safety.
  - q: How do I reset a York furnace ignition lockout?
    a: Turn the furnace off at the wall switch or breaker for about 30 seconds, then back on, or wait for the board's automatic retry. Do this only once; repeated resets without a repair are unsafe.
  - q: Does a York ignition lockout reset itself?
    a: Many York boards auto-reset after about one hour and retry the ignition sequence. If the underlying fault remains, it will lock out again. A hard reset via the power switch clears it immediately.
  - q: Why does my York furnace keep locking out after ignition?
    a: The most common reason is a dirty flame sensor that cannot detect the flame, followed by a weak igniter or low gas pressure. These need a technician to clean, test, or replace components.
---

## What this code means

An **ignition lockout** on a York furnace means the integrated control board ran through its full sequence of ignition attempts — typically three or four — and never proved a stable flame on the flame sensor. To prevent raw gas from building up in the heat exchanger, the board shuts the gas valve and stops trying.

**Don't guess the flash count.** York (and the Luxaire/Coleman furnaces built on the same platforms) has used several different control boards across model years, and the LED pattern that means "retries or recycles exceeded — ignition lockout" is not the same on every revision. Read the code off the **diagnostic/fault-code label** for your furnace: it's normally printed on the inside of the blower door, on the door of the control compartment, or in the installation and service literature for your exact model number. Match the LED pattern you're seeing to that label before you act on any code chart you find online — the same number of flashes can mean different things on different boards.

Whether the lockout **holds** or **auto-resets** depends on the board revision. Many York controls lock out for roughly **one hour and then automatically retry** the ignition sequence. Others hold until power is cycled at the switch or breaker. If the root cause isn't fixed, the furnace simply locks out again on the next call for heat.

## Common causes, ranked by probability

York's troubleshooting sequence for a failed ignition points to these causes, roughly in order of likelihood:

1. **Dirty or coated flame sensor** — the single most common cause. The furnace lights, but the sensor can't detect enough flame current, so the board assumes no flame and shuts down.
2. **Weak, cracked, or failed hot-surface igniter** — the igniter doesn't get hot enough to light the burners within the trial-for-ignition window.
3. **Low or incorrect gas pressure / partially closed manual gas valve** — not enough fuel to establish a strong, stable flame.
4. **Dirty or misaligned burners** — flame doesn't reach the sensor reliably, or ignition is delayed.
5. **Faulty flame sensor wiring or poor ground** — flame current can't be read even though the flame is present.
6. **Gas valve not opening fully or at all** — if the valve is weak or failing, the board sees repeated no-flame conditions.
7. **Control board fault** — the least common; the board mis-sequences or misreads the flame signal.

> Gas-supply and gas-valve-circuit problems are annunciated as **separate codes** on these boards. If the label on your blower door maps the pattern you're seeing to a **gas valve circuit fault** rather than to an ignition lockout, follow *York Furnace Gas Valve Circuit Error: Causes & Fixes* instead of this page. If the label confirms an ignition lockout, start with the flame sensor and igniter rather than assuming a wiring problem.

## Safe checks before you call anyone

These are the only steps a homeowner should attempt. Everything inside the cabinet is technician work.

- **Thermostat:** Confirm it's set to Heat and the setpoint is above room temperature. Replace the batteries if it's battery-powered.
- **Air filter:** A clogged filter can trip limit switches and disrupt heating. Replace a dirty filter with the correct size.
- **Breaker / furnace switch:** Check that the furnace breaker hasn't tripped and the service switch (looks like a light switch near the unit) is on.
- **Vents and registers:** Make sure supply and return registers are open and unobstructed.
- **Condensate line (high-efficiency models):** Confirm the drain isn't clogged or backed up, which can trip a safety switch.
- **One reset only:** Turn the furnace off at the switch or breaker for about 30 seconds, then back on. Try this **once**. If it locks out again, stop and call a technician. The lockout exists to stop further gas delivery, but each failed trial for ignition still releases a small amount of unburned gas into the burner compartment, and repeated attempts let it accumulate.

## How a technician will diagnose it

A qualified tech will typically:

1. Read the flash/fault code against the label for that specific furnace and note whether the board auto-resets or holds.
2. Watch a full ignition sequence: does the igniter glow, does gas flow, does the flame light?
3. **Measure flame-sensor microamps** with a multimeter — low current confirms a dirty sensor or poor ground.
4. **Clean the flame sensor** and recheck the signal (often the complete fix).
5. Test the hot-surface igniter's resistance and inspect it for cracks or hot spots.
6. Verify inlet and manifold **gas pressure** against York's spec.
7. Inspect and clean burners; check burner-to-sensor alignment.
8. Check flame-sensor and gas-valve wiring, grounding, and the valve's operation.
9. Replace the control board only if everything upstream checks out.

Sanity check: if a quote jumps straight to "replace the control board" or "replace the gas valve" without any mention of flame-sensor cleaning or microamp testing, ask why — the sensor is the most common culprit by a wide margin.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Igniter glows, burners light briefly, then shut off | Dirty flame sensor | One reset; replace filter | Clean/test flame sensor, measure microamps |
| Igniter doesn't glow at all | Failed hot-surface igniter | One reset only | Test and replace igniter |
| Burners never light, igniter glows | Low gas pressure or valve not opening | Confirm gas appliances elsewhere work | Measure gas pressure, test gas valve |
| Lazy, yellow, or uneven flame | Dirty burners / misalignment | Replace air filter | Clean burners, realign to sensor |
| Locks out intermittently in cold weather | Weak igniter or marginal flame signal | Note when it happens | Test components under load, replace as needed |
| Locks out even after new sensor and igniter | Control board fault | None | Diagnose and replace control board |

## Repair costs

Honest US ranges, parts and labor included unless noted:

- **DIY reset / filter change:** $0 (if the lockout was a one-off).
- **Flame sensor cleaning:** $100 – $200 (often bundled with a service call).
- **Flame sensor replacement:** $150 – $350.
- **Hot-surface igniter replacement:** $150 – $400.
- **Gas pressure adjustment:** $100 – $250.
- **Burner cleaning:** $150 – $350.
- **Gas valve replacement:** $350 – $900.
- **Control board replacement:** $400 – $1,200.

Prices vary by region, model, and whether the work happens during a routine visit or an emergency no-heat call. Diagnostic time and after-hours no-heat premiums push the gas valve and control board jobs toward the top of their ranges.

## Related codes

- *York Furnace Ignition Lockout Flash Code: Causes & Fixes* — use this if your blower-door label maps the LED pattern you're seeing to an ignition lockout and you want the flash-code walkthrough.
- *York Furnace Won't Ignite: Causes, Diagnosis & Fixes* — broader no-ignition troubleshooting.
- *York Furnace Gas Valve Circuit Error: Causes & Fixes* — gas-valve circuit faults, a distinct issue with its own code.
- *York Furnace Flame Sensed With Gas Off: Causes & Fixes* — flame-signal errors in the opposite direction.
- *York Furnace Pressure Switch Lockout: Causes & Fixes* — a different lockout triggered by the pressure switch.
- *York Furnace Keeps Shutting Off: Causes & Fixes* — if the furnace runs then stops rather than locking out on ignition.

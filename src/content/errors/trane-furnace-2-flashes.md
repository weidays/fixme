---
title: "Trane Furnace 2 Flashes: System Lockout Causes & Fixes"
code: "2 flashes"
description: "Trane furnace flashing 2 means a system lockout from failed ignition retries. Learn causes, safe checks, and repair costs ($0 DIY - $1,200)."
brand: trane
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $1,200 if the control board needs replacement"
appliesTo: "Trane and American Standard gas furnaces using integrated furnace control (IFC) boards such as the XR, XV, XC, S8, S9 and TUD/TUH series. On most boards 2 flashes indicates a hard lockout after ignition retries or recycles are exceeded, with an automatic reset after 1 hour. A few older boards use a different legend, so confirm against the label inside the blower door."
tags:
  - trane
  - furnace
  - lockout
  - ignition
  - error-code
parts:
  - name: Furnace air filter
    search: furnace air filter 16x25x1
  - name: Thermostat batteries
    search: aa alkaline batteries
datePublished: 2026-09-21
dateModified: 2026-09-21
reviewedBy: ""
faq:
  - q: Will my Trane furnace reset itself after 2 flashes?
    a: Yes. On most Trane boards the 2-flash lockout auto-resets after one hour. It will retry ignition then, but if the underlying fault remains it will lock out again and keep flashing 2.
  - q: Can I clear the 2-flash lockout faster than an hour?
    a: You can cycle power once at the furnace switch or breaker to force an immediate retry. Do this only once. Repeated resets waste gas and can be dangerous, so if it locks out again, call a technician.
  - q: Is a 2-flash lockout on a Trane furnace dangerous?
    a: The lockout itself is a safety feature that stops the furnace after failed ignition attempts. It is not an emergency, but the furnace will not produce heat until the cause is fixed, so schedule a pro promptly in cold weather.
---

## What this code means

Two flashes on your Trane furnace's control board (the LED is visible through or near the blower door) means the furnace has entered a **system lockout**: it tried to light the burners several times, failed to prove a stable flame, and shut itself down for safety.

The board doesn't lock out on the first try. It runs a set number of **ignition retries and recycles** — attempting to light, sensing no flame or losing flame, and trying again. Once those attempts are exhausted, it stops and flashes 2.

On most Trane and American Standard integrated furnace control (IFC) boards, this lockout **auto-resets after 1 hour**. When it resets, the furnace tries again. If the root cause is still present, it will fail through the same retry sequence and lock out again. That "runs for a while, then quits and flashes 2" pattern is the classic sign of an intermittent ignition or flame-sensing problem — not a one-time glitch.

Because the actual repair almost always involves components inside the cabinet, **2 flashes is a pro-level code**.

## Common causes, ranked by probability

1. **Weak or fouled flame sensor** — the most common trigger. A carbon- or oxide-coated flame rod can't confirm the flame, so the board recycles and eventually locks out.
2. **Dirty, cracked, or weak hot-surface igniter** — it glows but doesn't get hot enough (or fails intermittently) to light the gas reliably within the trial period.
3. **Burner problems** — dirty burners, misaligned flame, or lazy/lifting flames that don't reach the sensor consistently.
4. **Marginal gas supply to the burners** — low manifold pressure or a partially failing gas valve causing weak or delayed ignition. (A total no-gas condition typically shows other symptoms; this code is about *failed* ignition after retries.)
5. **Grounding issues** — flame sensing relies on a good burner-to-cabinet ground; a poor ground mimics a weak flame signal.
6. **Control board fault** — less common, but a failing IFC can mis-sequence ignition and lock out.

Because the exact retry/recycle counts and reset behavior vary slightly between board generations, confirm the flash legend on the label inside your blower compartment.

## Safe checks before you call anyone

> **If you smell gas at any point, do not reset or power-cycle anything.** Leave the house immediately and call your gas utility or 911 from outside.

These are the only steps a homeowner should do. Everything else on this code lives inside the cabinet and is technician work.

- **Replace a dirty air filter.** Severe airflow restriction can cause nuisance shutdowns and recycling. A clean filter is free and rules this out.
- **Check the thermostat.** Confirm it's set to Heat and the setpoint is above room temperature. If it's battery-powered, install fresh batteries.
- **Check the breaker and the furnace switch.** Make sure the furnace breaker isn't tripped and the switch on or near the furnace (looks like a light switch) is on.
- **One reset only.** Turn the furnace switch or breaker off, wait 30 seconds, and turn it back on to force one immediate retry. If it locks out to 2 flashes again, stop and call a pro. Do **not** keep resetting a locked-out furnace.
- **Look at your vents and registers.** Make sure supply and return grilles aren't blocked by furniture or rugs.
- **Check the condensate line** (high-efficiency models). A clogged drain can cause other lockouts; if you see standing water at the furnace base, mention it to the tech.

## How a technician will diagnose it

A qualified tech will confirm the fault at the source rather than guessing:

1. **Read the flash code and stored history** on the control board to confirm it's a retries/recycles lockout, not a different fault.
2. **Watch a full ignition cycle** to see whether the igniter glows, gas flows, the burners light, and the flame stabilizes.
3. **Measure the flame-sense (microamp) current** with a meter. A low reading points to a fouled or failing flame sensor or a grounding problem. They'll clean or replace the sensor and retest.
4. **Test the hot-surface igniter** for resistance and inspect it for cracks and proper glow.
5. **Inspect and clean the burners** and check flame alignment and quality.
6. **Verify gas manifold pressure** and check the gas valve operation.
7. **Confirm grounding and wiring** between the burner assembly, sensor, and board.
8. **Evaluate the control board** last, only after the cheaper, more common causes are ruled out.

If a tech quotes a board replacement without first checking the flame sensor and igniter, ask why — those are far more likely on this code.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Runs a few minutes, quits, flashes 2 | Weak/fouled flame sensor | Replace filter; one reset | Clean or replace flame sensor, verify microamps |
| Igniter glows but burners don't light | Weak/cracked hot-surface igniter | One reset only | Test and replace igniter |
| Ignites, then flame drops out and recycles | Dirty burners or misaligned flame | None | Clean burners, adjust flame, check ground |
| Delayed or weak ignition, repeated lockouts | Low manifold pressure / gas valve | None | Measure gas pressure, service valve |
| Intermittent lockouts, weak flame signal | Poor burner ground | None | Repair grounding and connections |
| Locks out with no ignition attempt at all | Usually a different fault was thrown first (pressure switch, limit, rollout), each of which normally has its own flash code | One reset only | Read the board's stored fault history and diagnose the earlier code — that's a different path than a retries/recycles lockout |

## Repair costs

Honest US ranges, parts and labor:

- **DIY reset / filter change:** $0–$40
- **Flame sensor clean or replacement:** $80–$250
- **Hot-surface igniter replacement:** $150–$400
- **Burner cleaning / adjustment:** $100–$300
- **Gas valve replacement:** $400–$900+
- **Integrated furnace control board:** $400–$1,200 (proprietary Trane/American Standard boards often land in the upper half of that range)
- **Diagnostic/service call:** $90–$180 (often credited toward the repair)

The good news: the two most common causes (flame sensor and igniter) are also among the least expensive. Board replacement is the outlier and should be a last resort.

## Related codes

- **Trane Furnace 3 Flashes: Pressure Switch Error Fixes**
- **Trane Furnace 4 Flashes: Open Limit Circuit Causes & Fixes**
- **Trane Furnace 5 Flashes: Flame Sensed Without Gas**
- **Trane Furnace 6 Flashes: Reversed Polarity & Grounding**
- **Trane Furnace 7 Flashes: Gas Valve Circuit Error Fixes**

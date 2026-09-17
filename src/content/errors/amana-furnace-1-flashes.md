---
title: "Amana Furnace Code 1 Flashes: Ignition Lockout Fixes"
code: "1 flashes"
description: "Amana furnace 1 flash means ignition failure lockout after 3 failed trials or 5 flame losses. Causes, fixes, and $0-$600 repair costs explained."
brand: amana
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $600 if the igniter, flame sensor or gas valve needs work"
appliesTo: >
  Many Amana integrated furnace control (IFC) boards use 1 flash for ignition failure lockout, including AMV/AMS/ACV/GMS/GMV-era boards. Flash-code legends vary by board — always read the legend printed on the control board or inside the burner door, as some boards use a slow/fast blink or a distinct code for flame loss vs. failed ignition.
tags:
  - amana
  - furnace
  - ignition-lockout
  - flame-failure
  - error-code
parts:
  - name: Furnace air filter (check size)
    search: furnace air filter 16x25x1 merv 8
  - name: Thermostat batteries (AA/AAA)
    search: aa aaa alkaline batteries
datePublished: 2026-09-16
dateModified: 2026-09-16
reviewedBy: ""
faq:
  - q: Can I reset an Amana furnace showing 1 flash myself?
    a: Yes — you may cycle power at the furnace switch or breaker once to clear the 1-hour lockout. If it locks out again, stop and call a technician rather than resetting repeatedly.
  - q: Does the Amana 1-flash lockout reset on its own?
    a: The control locks out for about 1 hour and then attempts ignition again automatically. Cycling power at the switch or breaker clears it immediately, but only try that once.
  - q: Why does my Amana furnace fail to ignite three times then quit?
    a: The board tries ignition up to three times, and if it never proves flame — or loses flame five times in one call — it locks out for an hour to protect the system. A dirty flame sensor, weak igniter, or gas-delivery issue is usually behind it.
  - q: Is a 1-flash ignition lockout dangerous?
    a: It is a safety response, not an immediate hazard — the furnace shut itself down instead of pumping unburned gas. If you ever smell gas, leave and call your gas utility or 911 before doing anything else.
---

## What this code means

On most Amana integrated furnace control (IFC) boards, **1 flash means an ignition failure lockout**. The control tried to light the burners up to **three times in one call for heat and never proved flame**, or it **proved flame but lost it five times** during a single cycle. To keep from cycling gas endlessly, the board **locks out for about 1 hour** and then automatically tries again.

The lockout also clears immediately if you **cycle power** to the furnace once (at the furnace switch or the breaker). This is a protective shutdown — the furnace failed *safely*. It is flagged **pro** because the underlying cause almost always lives inside the cabinet: the igniter, flame sensor, gas valve, or wiring — none of which are homeowner-serviceable.

**Legends vary by board.** Some Amana/Goodman-family boards distinguish "failed ignition" from "flame lost" with different codes or blink speeds. Always read the diagnostic legend printed on the control board or inside the burner door to confirm 1 flash means ignition lockout on your specific unit.

## Common causes, ranked by probability

1. **Dirty or weakened flame sensor** — the most common trigger. The furnace lights but the sensor can't detect the flame's micro-current, so the board thinks ignition failed and eventually locks out.
2. **Weak or cracked hot-surface igniter** — it glows but no longer gets hot enough to reliably light the burners within the trial period.
3. **Gas delivery problem at the furnace** — low manifold pressure, a partially closed manual valve, or a failing gas valve so the burners don't light or stay lit.
4. **Dirty or misaligned burners** — carbon buildup or lazy flames that don't reach the sensor consistently.
5. **Restricted airflow / dirty filter** — severe restriction can cause rollout or flame instability that reads as flame loss.
6. **Condensate blockage (high-efficiency models)** — a backed-up drain trips a pressure/float switch, interrupting the ignition sequence.
7. **Loose or corroded wiring / grounding** — a poor ground weakens flame sensing; loose connections at the valve or igniter drop the flame signal.

## Safe checks before you call anyone

These are the only steps a homeowner should do — everything else belongs to a technician:

- **Confirm the thermostat** is set to Heat and above room temperature; **replace thermostat batteries** if it's battery-powered.
- **Check the air filter.** A clogged filter chokes airflow and can destabilize the flame. Replace it if it's dirty.
- **Reset once.** Flip the furnace switch (or its breaker) off, wait 30 seconds, and turn it back on — **do this only once.** If it locks out again, stop and call a pro.
- **Check the breaker** hasn't tripped.
- **Look at supply and return vents/registers** — make sure they're open and unblocked.
- **Check the condensate line/drain** (high-efficiency furnaces) for obvious water backup or a full pan; clear a visible clog at the accessible end.

**Do not** open the burner compartment, clean the flame sensor, bypass any switch, adjust the gas valve, or reset the furnace repeatedly. If you smell gas, leave the home and call your gas utility's emergency line or 911.

## How a technician will diagnose it

A qualified tech will typically:

- Read the flash code and history, then **watch a full ignition cycle** to see whether the burners light and where the sequence fails.
- **Measure the flame-sensor microamp signal** with a meter and **clean or replace the sensor** if the reading is weak.
- **Check the hot-surface igniter's resistance** and inspect it for cracks; test that it reaches ignition temperature.
- **Verify gas manifold pressure** and confirm the manual and automatic gas valves are working.
- **Inspect and clean the burners**, check flame quality, and confirm proper **grounding** of the control board.
- Inspect wiring, connectors, and the ground path for corrosion or looseness.

A fair quote should name the specific failed component and the test result behind it — not just "replace the board."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Igniter glows, burners light, then furnace shuts down after a few seconds | Dirty/weak flame sensor | Replace filter; reset once | Measure & clean/replace flame sensor, check ground |
| Igniter glows but burners never light | Weak igniter or gas-delivery issue | Reset once | Test igniter resistance, check gas pressure/valve |
| Furnace tries 3 times then stops, 1 flash | Ignition failure lockout | One power cycle to clear | Diagnose ignition train end to end |
| Lazy, yellow, or uneven flames | Dirty or misaligned burners | Replace filter | Clean/adjust burners, inspect heat exchanger |
| High-efficiency unit won't start, water pooling | Condensate blockage tripping switch | Clear visible drain clog | Clear line, test pressure/float switch |
| Intermittent lockouts, worse when cold | Loose wiring / poor ground | None safe | Repair connections, verify board ground |

## Repair costs

Honest US ranges, parts and labor:

- **DIY reset / filter change:** **$0–$40**
- **Flame sensor clean or replace:** **$80–$250**
- **Hot-surface igniter replacement:** **$150–$400**
- **Gas valve replacement:** **$300–$600**
- **Burner cleaning / adjustment:** **$120–$300**
- **Condensate line clearing / switch replacement:** **$100–$300**
- **Wiring / grounding repair:** **$100–$300**
- **Control board replacement (if truly faulted):** **$300–$650**

A single diagnostic service call typically runs **$90–$180** and is often credited toward the repair.

## Related codes

- **Flame sensed with gas valve closed** — flame-proving fault, separate from ignition lockout.
- **Pressure switch open/closed faults** — inducer/venting or condensate issues that can indirectly stall ignition.
- **Limit switch open** — overheating or airflow codes that share the dirty-filter root cause.
- **Weak flame signal warning** — an early warning that often precedes this 1-flash lockout.

Always confirm your board's exact legend, since Amana/Goodman-family boards number these codes differently across model generations.

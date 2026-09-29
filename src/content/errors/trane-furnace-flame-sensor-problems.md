---
title: "Trane Furnace Flame Sensor Problems: Causes & Fixes"
code: "Flame sensor problems"
description: "Trane furnace flame sensor problems cause short cycling and lockouts. Causes, safe homeowner checks, how a technician diagnoses it, and real repair costs."
brand: trane
equipment: furnace
severity: pro
costRange: "$90–$250 typical (flame sensor clean or replace); $450+ if the control board is involved"
appliesTo: "Trane XR, XL, XC and S-series furnaces with hot-surface ignition and an integrated furnace control (IFC); flash-code behavior varies by board generation"
tags:
  - trane
  - furnace
  - flame-sensor
  - short-cycling
  - lockout
parts:
  - name: "Pleated furnace air filter"
    search: "furnace air filter (check your existing filter for size)"
datePublished: 2026-09-28
dateModified: 2026-09-28
reviewedBy: ""
faq:
  - q: "Can I clean the Trane flame sensor myself?"
    a: "Cleaning the flame sensor means opening the burner cabinet and removing a wired component near live gas parts, so it is technician work — not a homeowner DIY task."
  - q: "Why does my Trane furnace light then shut off after a few seconds?"
    a: "That pattern almost always means the flame sensor is not proving flame. A dirty, corroded, cracked or misaligned sensor is the most common cause and needs a technician."
  - q: "Does a flame sensor fault reset by itself?"
    a: "On most Trane IFC boards the furnace retries a few times, then locks out. Cycling power at the breaker clears the lockout once, but the fault returns until repaired."
  - q: "How much does a Trane flame sensor replacement cost?"
    a: "Expect roughly $130 to $250 installed, including diagnosis. The sensor part is cheap; most of the cost is the service call and labor. A clean-only visit usually runs $90 to $160."
---

## What this code means

"Flame sensor problems" is a symptom description, not a single Trane fault code. Trane and American Standard integrated furnace controls (IFCs) report this condition in different ways depending on the board generation — most often as a low flame-sense signal indication, or as an ignition lockout after the board runs through its failed ignition trials.

What's happening underneath is the same in either case: the control board lit the burners but could not confirm a steady flame. The flame sensor is a thin metal rod that sits in the burner flame and passes a tiny electrical current (microamps) back to the IFC. When that current is too low or absent, the board assumes there is no flame, shuts the gas valve for safety, and either retries or locks out.

Because the reported code and flash pattern vary by board generation, check the diagnostic label inside the lower door for your specific model rather than assuming a flash count. In nearly all cases the furnace makes several attempts, then holds in lockout until power is cycled.

This is a **pro-level** repair: the fix lives inside the burner cabinet, next to live gas and high-voltage components.

## Common causes, ranked by probability

1. **Dirty or oxidized flame sensor** — a film of soot, dust or oxide on the rod weakens the microamp signal. This is by far the most common cause.
2. **Cracked or worn-out sensor rod** — the ceramic insulator or rod itself degrades with age and heat.
3. **Sensor misalignment** — the rod is bent out of the flame or too far into it, so it never gets fully immersed.
4. **Loose or corroded sensor wire / connector** at the board or the sensor terminal.
5. **Poor burner ground** — flame rectification needs a solid chassis ground; a bad ground mimics a bad sensor.
6. **Weak or dirty burners** producing a small, unstable flame that the rod can't read reliably.
7. **Failing IFC board** — the flame-sense circuit on the board itself is faulty (least common; diagnosed by elimination).

## Safe checks before you call anyone

These are the only steps a homeowner should do:

- **Check the thermostat** — set to Heat, temperature above room temp, and confirm it isn't a scheduling/hold issue. Replace the batteries if it's battery-powered.
- **Replace a dirty air filter** — a clogged filter can trip limits and complicate diagnosis. A clean filter never hurts.
- **Check the breaker and furnace switch** — confirm the furnace breaker isn't tripped and the service switch (looks like a light switch near the unit) is on.
- **One reset only** — flip the furnace breaker off, wait 30 seconds, and back on to clear a single lockout. If it locks out again, stop and call a pro. Do **not** repeatedly reset.
- **Confirm supply and return vents are open** and unblocked.
- **Check the condensate line** (high-efficiency models) isn't clogged or backing up.

Do **not** open the burner cabinet, touch the sensor, or clean anything inside — that's technician territory.

## How a technician will diagnose it

A qualified tech will:

1. Read the stored flash/fault code at the IFC and note the retry/lockout history.
2. Watch a full ignition sequence — igniter glows, gas valve opens, flame lights, then observe whether the board drops the flame signal.
3. Put a **microamp meter** in series with the flame-sense circuit and read the actual signal (Trane boards typically want a few microamps; well below spec confirms a sensor issue).
4. Inspect the sensor rod for soot, cracks, and correct position in the flame; clean or replace it.
5. Verify the burner **ground** and the sensor wire/connector integrity.
6. Check burner condition and flame quality.
7. Re-test the microamp reading after service to confirm a solid, stable signal — and only condemn the IFC board if the sensor, wiring and ground all check out.

This sequence lets you sanity-check a quote: a shop that replaces the whole board before measuring microamps is skipping steps.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Lights then shuts off in a few seconds | Dirty/oxidized flame sensor | One reset; replace filter | Clean or replace sensor, verify microamps |
| Repeated ignition attempts then lockout | Weak flame signal / bad ground | One reset only | Test flame-sense circuit, correct ground |
| Intermittent — works sometimes | Loose sensor wire/connector | None | Inspect and reseat/repair wiring |
| Flame present but board won't prove it | Cracked sensor or failing IFC | None | Replace sensor; test board by elimination |
| Small/yellow unstable flame | Dirty burners | Replace filter | Clean burners, re-test flame signal |

## Repair costs

- **Diagnostic / service call:** $80–$150 (often credited toward the repair).
- **Flame sensor clean only:** $90–$160 including diagnosis.
- **Flame sensor replacement:** $130–$250 installed (sensor part is $10–$40; labor is most of it).
- **Burner cleaning / adjustment:** $150–$300 depending on access.
- **Wiring or connector repair:** $100–$200.
- **IFC control board replacement (only if truly faulty):** $450–$1,200 installed.

Costs vary by region and by whether it's a routine visit or an after-hours emergency call.

## Related codes

- **Trane Furnace 8 Flashes: Low Flame Sense Signal Fix** — the specific weak-signal code most closely tied to sensor problems.
- **Trane Furnace 5 Flashes: Flame Sensed Without Gas** — the opposite fault, where the board reads flame it shouldn't.
- **Trane Furnace Ignition Lockout: Causes, Fixes & Cost** — where repeated flame-proving failures end up.
- **Trane Furnace Short Cycling: Causes, Fixes & Costs** — the symptom a marginal flame sensor often produces.
- **Trane Furnace Won't Ignite: Causes, Fixes & Costs** — for cases where the burners never light at all.

---
title: "Carrier Furnace Flame Sensor Problems: Causes & Fixes"
code: "Flame sensor problems"
description: "Carrier furnace flame sensor problems cause short cycling and no heat. Learn the causes, safe checks and repair costs ($0 DIY reset to $1,200 pro)."
brand: carrier
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $1,200 if the control board ultimately needs replacement"
appliesTo: "Carrier 58- and 59-series single-stage, two-stage and modulating gas furnaces using hot-surface or spark ignition with a dedicated flame-sensing rod; exact fault codes and lockout behavior vary by control board generation."
tags:
  - carrier
  - furnace
  - flame-sensor
  - short-cycling
  - no-heat
parts: []
datePublished: 2026-09-26
dateModified: 2026-09-26
reviewedBy: ""
faq:
  - q: Can I clean the Carrier flame sensor myself?
    a: Cleaning the flame sensor means opening the cabinet, removing a wired rod and lightly abrading it. That is inside-cabinet work with a live gas appliance, so it belongs to a technician, not a homeowner DIY task.
  - q: Why does my Carrier furnace light then shut off after a few seconds?
    a: That classic pattern usually means the flame sensor is not proving flame. Burners light, the board waits for a microamp signal, does not see enough, and shuts the gas valve to stay safe, within a few seconds.
  - q: How much does a Carrier flame sensor replacement cost?
    a: Expect roughly $120 to $250 installed, including the service call. The part itself is inexpensive, so most of the cost is diagnostic time and labor to access and test the burner assembly.
  - q: Will the furnace reset itself after a flame sensor fault?
    a: It depends on the board. Many Carrier controls retry ignition a set number of times and then lock out; on some boards that lockout clears on its own after a timed interval and the control re-attempts the ignition sequence, while on others it holds until power is cycled at the thermostat or breaker. Either way, an auto-reset or a manual reset is not a repair — if the furnace locks out again, the underlying fault is still there and needs a technician.
---

## What this code means

Your Carrier furnace proves it has a flame using a **flame-sensing rod** — a thin metal probe that sits in the burner flame. When flame is present, a tiny electrical current (measured in microamps) flows through the flame to ground. The control board reads this current to confirm the burners actually lit.

If the board **cannot detect enough flame current**, it assumes there is no flame and immediately closes the gas valve as a safety measure — even if the burners are physically lit. This produces the hallmark symptom: the furnace **ignites, runs for a few seconds, then shuts down**, often repeating several times before locking out.

Depending on your board generation, this shows up as a flame-proving or ignition-proving fault — most often **Code 34 (ignition proving failure)**, and **Code 14 (ignition lockout)** once the retries are used up. Note that **Code 22 is not this fault**: it means flame is being *sensed when it shouldn't be*, which is the opposite condition (see Related codes below).

What happens after the retries also varies by board. Many Carrier controls go into a **lockout**; on some boards that lockout clears itself after a timed interval and the control tries the ignition sequence again, while on others it holds until power is cycled at the thermostat or breaker. Neither behavior means the problem fixed itself. This is a "pro" repair because every meaningful fix — testing, cleaning, or replacing the sensor — happens inside the cabinet on a live gas appliance.

## Common causes, ranked by probability

1. **Dirty or oxidized flame sensor.** By far the most common cause. A film of soot, oxide, or silica builds on the rod over time and blocks the microamp signal. The furnace lights but "can't see" its own flame.
2. **Weak or degraded flame signal.** The sensor is aging and its microamp reading has dropped below the board's threshold, causing intermittent shutdowns that get worse over months.
3. **Poor ground / loose sensor connection.** Flame sensing depends on a good ground path. A corroded burner-assembly ground, loose sensor wire, or degraded terminal starves the signal.
4. **Cracked ceramic insulator or damaged rod.** A physically damaged sensor leaks current to ground and never proves flame reliably.
5. **Flame not properly contacting the rod.** Burner misalignment, partial blockage, or a low/lazy flame (from a dirty burner) means the flame doesn't fully engulf the sensor tip.
6. **Failed control board flame-sensing circuit.** Least common. The board itself can no longer read the signal correctly, so even a clean sensor with good flame reads as no-flame.

## Safe checks before you call anyone

These are the only steps a homeowner should perform. If they don't restore reliable heat, stop and call a technician.

- **Check the thermostat.** Confirm it's set to **Heat**, the setpoint is above room temperature, and — if it takes batteries — replace them.
- **Replace a dirty air filter.** A clogged filter restricts airflow and can contribute to nuisance shutdowns. Swap in a clean filter of the correct size.
- **Check the breaker and furnace switch.** Confirm the furnace breaker is on and the service switch (looks like a light switch near the furnace) is in the ON position.
- **Do ONE reset.** If the unit is locked out, cycle power once — turn the furnace switch or breaker off for 30 seconds, then back on, or cycle the thermostat. **Do not repeatedly reset a furnace that keeps locking out.**
- **Check visible supply and return registers.** Make sure they aren't blocked by furniture, rugs, or closed vents.
- **Check the condensate line** (high-efficiency models). A clogged drain can trip safety switches; clear any obvious blockage or full drain pan.

Do **not** open the furnace cabinet, remove the flame sensor, or clean it yourself. That is technician work.

## How a technician will diagnose it

A qualified tech will typically:

1. **Read stored fault codes** from the board's LED and confirm the flame-proving history.
2. **Watch a full ignition cycle** — confirm the burners light, then time how long before the gas valve closes.
3. **Measure the flame current in microamps** by placing a meter in series with the sensor, then compare the reading against the **minimum flame-signal value printed on the control or wiring label** for that specific furnace. A reading below that published minimum confirms the diagnosis.
4. **Inspect and clean the sensor rod** with a fine abrasive pad, then re-measure microamps.
5. **Check the ground path** — burner assembly ground, sensor wire continuity, and terminal condition.
6. **Inspect burners and flame quality** for a weak or misaligned flame contacting the rod.
7. **Replace the sensor** if cleaning doesn't restore a strong, stable reading, and only suspect the board after the sensor and ground check out.

A good quote will mention the **microamp measurement** — that's how you know they actually diagnosed it rather than just guessing.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Burners light, shut off in a few seconds, repeat | Dirty/oxidized flame sensor | One reset; replace filter | Clean or replace sensor, verify microamps |
| Intermittent shutdowns, worse over time | Weak/aging flame signal | One reset | Measure microamps, replace sensor |
| Occasional random shutdowns | Poor ground / loose connection | None | Check ground path, retighten/repair wiring |
| Furnace never proves flame at all | Cracked insulator or damaged rod | None | Inspect and replace sensor |
| Lazy/uneven flame, sooting | Dirty burners, flame not reaching rod | Replace filter | Clean burners, realign, verify flame |
| Clean sensor but still no-flame reading | Failed board flame circuit | None | Test/replace control board |
| Repeated lockouts after one reset | Persistent real fault | Stop resetting; call pro | Full flame-sensing diagnosis |

## Repair costs

Honest US ranges, including a typical service call:

- **Diagnostic / service call:** $80 – $150
- **Flame sensor cleaning (as part of a service visit):** often included in the diagnostic, or $90 – $150 alone
- **Flame sensor replacement:** $120 – $250 installed (the part is $10 – $30; most cost is labor)
- **Ground / wiring repair:** $100 – $250 depending on access
- **Burner cleaning / alignment:** $150 – $400
- **Control board replacement:** $400 – $1,200 installed (rare for this symptom; integrated and variable-speed boards sit at the high end, and this is only after the sensor and ground are ruled out)

The sensor itself is cheap, so most of any sensor-replacement bill is the trip charge and labor — in many markets that alone accounts for the bulk of the total. What's worth questioning is a quote that jumps to a **control board or burner assembly** without a documented microamp reading and a ground check first. Ask which measurements were taken before the part was condemned.

## Related codes

- **Carrier Furnace Code 34: Ignition Proving Failure & Fixes** — flame not proven after ignition attempts; the code most often behind the light-then-shut-off pattern on this page.
- **Carrier Furnace Code 14: Ignition Lockout Causes & Fixes** — repeated failed ignition/flame proving ending in lockout.
- **Carrier Furnace Code 22: Abnormal Flame-Proving Signal** — the **inverse** fault, not the same problem. Code 22 means the board reads flame when the gas valve should be closed, which typically points to a leaking gas valve or a shorted/failed flame-sense circuit. Do not treat this as a dirty-sensor issue: shut the furnace off and call a licensed technician right away.
- **Carrier Furnace Keeps Shutting Off: Causes, Fixes & Costs** — broader shutdown troubleshooting.
- **Carrier Furnace Short Cycling: Causes, Fixes & Costs** — the light-then-quit pattern from another angle.
- **Carrier Furnace Ignition Lockout: Causes, Fixes & Costs** — what to do when the board holds in lockout.

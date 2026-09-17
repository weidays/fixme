---
title: "Goodman Furnace 4 Flashes: Open High-Limit Switch Fix"
code: "4 flashes"
description: "Goodman furnace 4 flashes means an open high-limit from overheating — dirty filter or airflow. Causes, fixes and $0–$1,200+ costs."
brand: goodman
equipment: furnace
severity: pro
costRange: "$0 DIY filter swap – $1,200+ if blower or duct work is required"
appliesTo: >
  Most Goodman/Amana gas furnaces with integrated ignition control boards (GMS, GMH, GMV, GMEC, GC/GM series and similar). On many boards 4 flashes = open high-limit; some legends and dual-fuel boards vary, so always confirm against the diagnostic label inside the burner door.
tags:
  - goodman
  - furnace
  - high-limit
  - overheating
  - airflow
parts:
  - name: Furnace air filter
    search: furnace air filter 16x25x1 MERV 8
datePublished: 2026-09-16
dateModified: 2026-09-16
reviewedBy: ""
faq:
  - q: Does the 4-flash code reset on its own?
    a: Yes. The open high-limit code clears automatically once the furnace cools and the limit switch closes again. If it keeps returning, the underlying airflow or blower problem is still present and needs to be fixed.
  - q: Can a dirty filter really trip the high-limit?
    a: Absolutely. A clogged filter starves the blower of return air, so heat builds in the heat exchanger until the primary limit opens. Replacing the filter is the single most common fix for this code.
  - q: Is it safe to keep running the furnace with a 4-flash code?
    a: No. The furnace will short-cycle and overheat repeatedly, which stresses the heat exchanger. Correct the airflow issue first, or have a technician diagnose it before running the system for heat.
  - q: Why is it blowing cold air if the gas shut off?
    a: That is normal on an open limit. The board closes the gas valve but keeps the blower running to pull leftover heat out of the heat exchanger, so you feel cool air at the registers. It usually means overheating, not a dead blower.
---

## What this code means

Four flashes on your Goodman furnace's control board indicate an **open high-limit switch**. The primary limit is a safety device that watches the temperature of air passing over the heat exchanger. When that air gets too hot, the limit opens, the control board shuts off the gas valve, and you get the 4-flash code.

The single most common trigger is **overheating from restricted airflow** — a dirty filter, closed vents, or a blower that isn't moving enough air. As the furnace cools, the limit switch closes again and the code clears on its own; this is an **auto-resetting** condition, not a hard lockout. But if the code keeps coming back, the root cause is still there.

One detail that confuses a lot of homeowners: when the limit opens, the board **closes the gas valve but keeps the blower running** to dissipate the heat still stored in the heat exchanger. So the system "blows cold air" for a while. That is the safety working as designed — it is not by itself a sign of blower failure.

> Note: flash-code legends vary slightly by board generation. On most Goodman/Amana integrated boards 4 flashes means open high-limit, but confirm against the diagnostic label printed inside your burner door before ordering parts. On some Goodman/Amana ignition controls the limit-circuit flash code covers **any** open thermal protection device in that string, which can include a tripped flame rollout switch. If there is any burning smell, soot, or scorching near the burner area, shut the furnace off at the service switch and call a professional instead of treating this as an airflow problem.

## Common causes, ranked by probability

1. **Dirty or clogged air filter** — the number-one cause. Restricts return airflow and lets heat pile up until the limit opens.
2. **Closed, blocked, or too few supply/return vents** — reduces airflow the same way a dirty filter does.
3. **Blower problem** — failing blower motor, bad run capacitor, dirty blower wheel, or wrong blower speed tap, all reducing CFM across the heat exchanger.
4. **Dirty evaporator coil** (on systems with A/C) — a clogged coil above the furnace chokes airflow.
5. **Collapsed, kinked, or undersized ductwork** — chronic airflow restriction that overheats the exchanger.
6. **Faulty or drifting high-limit switch** — the switch itself opens early or has failed open. This is diagnosed only after airflow is ruled out.
7. **Overfiring** — gas pressure set too high, or a manifold/orifice issue, pushing more heat into the exchanger than the airflow can carry away. This is a real secondary cause of repeated limit trips on Goodman 80% units. **Technician-only: gas pressure and orifice work is never a DIY adjustment.**

## Safe checks before you call anyone

These are the only checks a homeowner should perform:

- **Replace the air filter.** If it's gray, matted, or you can't see light through it, swap it. This resolves the majority of 4-flash cases.
- **Open all supply registers and return grilles.** Make sure furniture, rugs, or closed dampers aren't blocking airflow. Never close more than a couple of registers in the whole house.
- **Thermostat sanity check:** set it to Heat and a few degrees above room temperature, and make sure a battery-powered thermostat still has good batteries and a lit display. (Battery failure does not cause an open high-limit — this is only to rule out a dead thermostat.)
- **Check the furnace breaker** and the service switch on or near the furnace. Cycle the breaker once if it's tripped.
- **Confirm the blower door is fully seated.** A loose panel can affect the door safety switch and airflow.

If the code returns after a fresh filter and open vents, stop here and call a technician. Do **not** open the cabinet, bypass the limit, or reset the furnace repeatedly.

## How a technician will diagnose it

A qualified tech will work in roughly this order, and knowing it helps you sanity-check a quote:

- Verify the 4-flash code and read the board history.
- Confirm the filter and coil are clean and airflow paths are open.
- **Measure temperature rise** across the heat exchanger and compare it to the rating-plate spec — high rise confirms an airflow restriction.
- Check blower operation, motor amp draw, run capacitor, and blower speed tap; inspect the blower wheel for dirt buildup.
- Inspect ductwork for restriction or collapse.
- Check the rest of the limit circuit, including the flame rollout switch, for a tripped or open device.
- Verify manifold gas pressure and firing rate against the rating plate if temperature rise stays high with good airflow.
- **Test the high-limit switch continuity** with a multimeter and compare its trip point to spec — only replacing it if airflow is proven good.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Furnace heats, then shuts off; 4 flashes | Dirty filter restricting airflow | Replace filter, open vents | Verify temp rise, confirm airflow restored |
| Blower runs but air turns cold mid-cycle | Limit opened; board closed the gas valve | Replace filter, open vents | Verify temp rise and limit circuit |
| Weak airflow at registers | Blower motor or capacitor weak | Check/replace filter only | Test blower motor, capacitor, speed tap |
| Warm air but low airflow, code recurs | Dirty evaporator coil or blower wheel | None inside cabinet | Clean coil and blower wheel |
| Short-cycling on cold days | Undersized/blocked ductwork | Open all registers | Inspect and correct duct restriction |
| Clean filter but code persists | Failed high-limit switch or overfiring | None inside cabinet | Test limit switch, verify gas pressure/firing rate |
| Burning smell, soot, or scorching at burners | Possible flame rollout trip | Shut off at service switch, call a pro | Find and correct rollout cause |
| No airflow at all, blower silent | Blower motor failure | Reset breaker once | Replace blower motor/module |

## Repair costs

Honest US ranges (parts + labor unless noted):

- **New air filter (DIY):** $10–$40
- **Diagnostic/service call:** $80–$180
- **Blower run capacitor:** $150–$300
- **Blower motor (PSC):** $450–$1,000
- **Blower motor or module (ECM/variable-speed):** $800–$1,800
- **High-limit switch replacement:** $150–$350
- **Evaporator coil cleaning:** $150–$400
- **Gas pressure / firing-rate correction:** typically within a service call, $80–$250
- **Duct repair/modification:** $200–$1,000+ depending on scope

Most homeowners spend $0–$40 fixing this with a fresh filter. Costs climb into the four figures only when a blower motor, ECM module, or duct work is genuinely at fault.

## Related codes

- **Goodman Furnace 2 Flashes: Pressure Switch Stuck Closed**
- **Goodman Furnace 3 Flashes: Pressure Switch Stuck Open**
- **Goodman Furnace 1 Flash: Ignition Failure Lockout Fixes**
- **Goodman Furnace Flame Rollout: Shut Down Now**
- **Goodman Furnace Lockout: Causes, Fixes & Costs**

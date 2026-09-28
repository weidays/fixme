---
title: "Goodman Furnace Blower Won't Shut Off: Causes & Fixes"
code: "Blower won't shut off"
description: "Goodman furnace blower running nonstop? Common causes are thermostat fan settings, limit switch, or bad control board — with DIY checks and repair costs."
brand: goodman
equipment: furnace
severity: diy
costRange: "$0 DIY – $1,800 if the blower motor or integrated control board needs replacement"
appliesTo: "Most Goodman gas furnaces (GMS, GMV, GMVC, GMEC, GCES/GCVC series) with integrated ignition control boards; fan-timing behavior varies by board revision and by dip-switch or thermostat fan settings."
tags:
  - goodman
  - furnace
  - blower
  - fan-wont-stop
  - control-board
parts:
  - name: "Programmable thermostat"
    search: "programmable thermostat honeywell furnace"
  - name: "Thermostat batteries (AA/AAA)"
    search: "AA AAA alkaline batteries"
datePublished: 2026-09-27
dateModified: 2026-09-27
reviewedBy: ""
faq:
  - q: "Why does my Goodman furnace blower run constantly?"
    a: "The most common reason is the thermostat fan switch set to ON instead of AUTO. Other causes include an open (tripped) high-limit switch holding the blower on to cool the cabinet, a failed blower relay on the control board, or a shorted control board."
  - q: "Is it safe to keep running the furnace while the blower won't shut off?"
    a: "If the air coming out is room-temperature or cool and there is no burning smell, it is generally safe short term. If the air is very hot and the blower never stops, shut the furnace off at the switch and call a technician, since that points to an open (tripped) high-limit and an overheating furnace. If you smell burning, hot metal, or gas, shut the furnace off at the switch; if the odor is gas, leave the house first and then call your gas utility or 911 from outside — do not troubleshoot."
  - q: "Will setting the thermostat fan to AUTO fix it?"
    a: "Often yes. If the fan was on ON, switching to AUTO lets the blower stop after each heat cycle. If it still runs nonstop on AUTO, the problem is inside the furnace and needs a technician."
---

## What this code means

"Blower won't shut off" is not a flash code on your Goodman control board — it's a symptom. Your indoor blower motor keeps running even when the furnace isn't heating. On Goodman furnaces, the blower is supposed to run during a heat call, keep running for a set fan-off delay (typically 60–180 seconds, adjustable by dip switch on many boards), then stop.

When it never stops, one of three things is happening: the thermostat is *telling* the blower to run continuously, a safety switch is *forcing* the blower to run to cool the cabinet, or the control board/relay has failed in a way that keeps the blower circuit energized. There is no lockout involved here — the furnace isn't shutting itself down, so there's usually nothing to reset. The key first question is whether the air is **cool/room-temperature** (usually a fan setting or relay issue) or **hot** (usually an open/tripped high-limit).

Repeated high-limit trips with very hot supply air are not a nuisance fault — they mean the furnace is genuinely overheating, and on older furnaces sustained overheating can be a sign of heat-exchanger damage. If that's what you're seeing, shut the furnace off at the switch and leave it off until a technician has inspected it, rather than running it while you wait.

## Common causes, ranked by probability

1. **Thermostat fan set to ON, not AUTO.** By far the most common cause. On ON, the blower runs 24/7 by design. This is a setting, not a fault.
2. **Continuous/circulate fan mode enabled.** Some thermostats have a "circulate" or programmed continuous-fan schedule that runs the blower most of the time.
3. **Open (tripped) high-limit switch.** If the furnace overheats (often from a dirty filter or blocked airflow), the high-limit opens and Goodman boards run the blower continuously to cool the heat exchanger. Here the air is usually hot at first, then room-temp. (A limit that has failed welded *closed* is a different and more dangerous failure — it no longer protects the furnace at all, and it's strictly technician territory.)
4. **Failed blower relay on the integrated control board.** The relay contacts weld shut, keeping the blower energized regardless of the thermostat. The board may otherwise work fine.
5. **Faulty control board / stuck fan-on timer.** A board fault can hold the blower circuit closed or never time out the fan-off delay.
6. **Thermostat wiring fault (stuck G circuit).** A shorted or pinched wire keeping the "G" (fan) terminal energized will run the blower nonstop.

## Safe checks before you call anyone

These are safe for any homeowner — no cabinet needs to be opened.

- **Check the thermostat fan switch.** Set it to **AUTO** (not ON or CIRCULATE). Wait a few minutes and see if the blower stops after the heat cycle ends.
- **Check for a programmed circulate/continuous-fan schedule.** On smart or programmable thermostats, look for a "fan" schedule that runs it continuously and turn it off.
- **Replace weak thermostat batteries.** A dying thermostat can behave erratically; fresh batteries rule that out.
- **Replace a clogged air filter.** A dirty filter causes overheating and repeated high-limit trips, which keep the blower running to cool the furnace. Slide in a clean filter of the correct size.
- **Confirm supply and return vents are open and unblocked.** Restricted airflow overheats the furnace and triggers the same cool-down blower behavior.
- **Cycle the furnace switch/breaker once.** Flip the furnace disconnect switch (or its breaker) off for 30 seconds, then on. If a temporary glitch held the blower on, this may clear it. If it comes right back, stop — it's an internal fault.

If the supply air is very hot and the high-limit keeps tripping even after a filter change, don't keep cycling the furnace to "get through the night" — leave it off at the switch and book a technician. If you smell burning, hot metal, or gas, shut the furnace off at the switch; if the odor is gas, get out of the house and call your gas utility or 911 from outside instead of investigating.

If the blower still won't stop on AUTO with a clean filter and open vents, the fault is inside the cabinet — that's technician work.

## How a technician will diagnose it

A tech will confirm the symptom and narrow it down in roughly this order:

- **Verify thermostat behavior** — check that G isn't being held on by the thermostat or a wiring short, testing the G and R terminals.
- **Check the high-limit switch** — measure whether the limit is open (overheating) and look for the root cause: dirty filter, failed blower capacitor, blocked ducting, or a slow blower motor.
- **Test the blower relay on the control board** — check whether the relay contacts are stuck closed with the thermostat call removed.
- **Check fan-off timing and dip-switch settings** — confirm the board is timing out its heat fan-off delay correctly, and that dip switches match the installation.
- **Inspect blower motor and capacitor** — a failing motor or run capacitor can make the blower behave abnormally.
- **Board test** — if the relay and wiring are good but the blower stays energized, the integrated control board is the culprit.

Ask the tech to show you whether the limit is tripping or the board relay is stuck — that determines the repair and the price.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Blower runs constantly, air is room-temp | Fan set to ON or circulate mode | Set thermostat to AUTO; disable circulate schedule | Check G wiring if AUTO doesn't fix it |
| Blower runs nonstop even on AUTO | Stuck blower relay or bad board | Cycle breaker once; if it returns, call a pro | Test board relay; replace control board |
| Air is hot, blower never stops, filter dirty | Open/tripped high-limit from overheating | Replace filter; open all vents/registers; if it recurs, shut the furnace off and wait for service | Test high-limit, clean/repair airflow issue |
| Blower short-cycles then runs on | Faulty fan-off timer on board | None | Check dip switches and control board |
| Blower runs erratically, thermostat glitchy | Weak thermostat batteries/wiring | Replace batteries | Inspect thermostat wiring, replace if faulty |

## Repair costs

| Fix | Typical US cost |
|---|---|
| Thermostat set to AUTO / disable circulate | **$0 (DIY)** |
| New air filter | **$10 – $40** |
| Thermostat batteries | **$5 – $15** |
| New thermostat (if faulty) | **$25 – $60 DIY part; $150 – $400 installed** |
| High-limit switch replacement | **$150 – $300** |
| Blower run capacitor replacement | **$150 – $300** |
| Blower motor replacement (PSC) | **$450 – $1,800** |
| Blower motor replacement (ECM / variable-speed, e.g. GMV, GMVC, GMEC, GCVC) | **$800 – $1,500+ installed** |
| Integrated control board replacement | **$400 – $1,200** |

A note on the blower relay: on Goodman integrated ignition controls the blower relay is mounted on the board and is generally not serviced on its own. Relay-only repair is uncommon, so the standard fix for a welded relay is replacing the integrated control board — budget for the board price above rather than expecting a cheaper relay swap.

Most "blower won't shut off" calls turn out to be the fan set to ON — a $0 fix. If it's inside the cabinet, expect a diagnostic fee ($80–$150) plus parts and labor. Get the tech to identify whether it's the limit, the board, or the blower motor before authorizing a board swap.

## Related codes

- **Goodman Furnace 4 Flashes: Open High-Limit Switch Fix** — the overheating that can drive continuous blower operation.
- **Goodman Furnace Blowing Cold Air: Causes & Fixes** — when the blower runs but the air is cold.
- **Goodman Furnace Short Cycling: Causes, Fixes & Costs** — related airflow and control-board issues.
- **Goodman Furnace Keeps Shutting Off: Causes & Fixes** — the opposite symptom, often overlapping root causes.
- **Goodman Furnace Won't Turn On: Causes, Fixes & Costs** — for control-board and thermostat power problems.

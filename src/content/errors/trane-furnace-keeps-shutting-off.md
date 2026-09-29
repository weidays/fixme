---
title: "Trane Furnace Keeps Shutting Off: Causes & Fixes"
code: "Keeps shutting off"
description: "Why your Trane furnace keeps shutting off — overheating limits, flame loss, pressure switches and dirty flame sensors — plus fixes and costs from $0 to $3,500+."
brand: trane
equipment: furnace
severity: pro
costRange: "$0 DIY air-filter swap – $1,200 if the inducer motor or integrated control board needs replacing; $3,500+ for a cracked heat exchanger, where replacing the furnace is often the better value"
appliesTo: "Trane XR, XV, XC and S-series single-, two-stage and modulating gas furnaces with an integrated ignition control (IFC) that flashes a diagnostic LED. Exact flash counts and lockout behavior vary by board revision."
tags:
  - trane
  - furnace
  - keeps-shutting-off
  - overheating
  - short-cycling
parts:
  - name: Pleated furnace air filter
    search: 16x25x1 pleated furnace air filter merv 8
  - name: Thermostat batteries (AA/AAA)
    search: energizer aa aaa alkaline batteries
datePublished: 2026-09-28
dateModified: 2026-09-28
reviewedBy: ""
faq:
  - q: Why does my Trane furnace start, run a few minutes, then shut off?
    a: The most common cause is airflow restriction — a clogged filter or blocked returns — that lets the heat exchanger overheat and trip the high-limit switch. The furnace shuts the burner off to protect itself, then retries.
  - q: Is it safe to keep resetting a Trane furnace that keeps shutting off?
    a: Reset the breaker only once. Repeated resets of a locked-out furnace mask a real safety fault like overheating or flame loss and can damage the heat exchanger. If it locks out again, call a technician.
  - q: Can a dirty flame sensor make my Trane furnace shut off?
    a: Yes. A dirty flame sensor stops proving flame, so the board closes the gas valve within seconds and retries or locks out. Cleaning the sensor is a technician job inside the cabinet.
---

## What this code means

"Keeps shutting off" isn't a single Trane fault code — it's a behavior. Your furnace is starting a heat cycle, then stopping it before the thermostat is satisfied. On Trane integrated furnace controls (IFC), this almost always means a **safety switch is opening** or the board **loses flame confirmation**, so it shuts the gas valve to protect the equipment.

Depending on your board revision, the furnace may **auto-retry** a set number of times (typically 3) and then go into a **hard lockout** that holds until power is cycled, or it may flash a diagnostic LED that pins down the exact cause. If your model has a viewing port, count the flashes from outside the cabinet; otherwise, don't pull panels to find the LED — have the technician read it. Either way, that flash count tells you and your technician far more than "it keeps shutting off."

If you ever smell gas: **stop, leave the house, and call your gas utility's emergency line or 911 from outside** before doing anything else. That is not a DIY situation.

## Common causes, ranked by probability

1. **Restricted airflow overheating the heat exchanger.** A clogged filter, closed returns, or a dirty blower slows airflow, the heat exchanger overheats, and the **high-limit switch** opens to shut the burner off. This is the single most common cause and often shows as an open-limit / 4-flash pattern.
2. **Dirty or weak flame sensor.** The board can't confirm flame, so it closes the gas valve within seconds, retries, and eventually locks out. Common on furnaces 5+ years old.
3. **Pressure-proving / draft failure.** A weak or failing inducer motor, a blocked flue or intake (ice, nests, debris at the termination), cracked or loose pressure tubing, or a partially clogged condensate trap all keep the pressure switch from holding closed. The switch opens mid-cycle and the burner drops out.
4. **Condensate backup (high-efficiency models).** A full drain or plugged trap trips a safety and shuts the furnace down on 90%+ AFUE units.
5. **Flame rollout or limit trip from a dirty burner / cracked heat exchanger.** Rollout means flame is escaping the burner compartment instead of going up the heat exchanger. Treat it as an emergency: **shut the furnace off at the wall switch, do not reset it, leave the burner compartment and all panels closed, and call a licensed technician.** If you smell gas or anything burning, leave the house first and call your gas utility's emergency line or 911 from outside.
6. **Failing control board or loose low-voltage wiring.** Intermittent connections and thermostat wiring faults cause random shutdowns.

## Safe checks before you call anyone

- **Replace the air filter.** A clogged filter is the #1 cause. If it's gray or you can't see light through it, swap it. This alone fixes many "keeps shutting off" calls.
- **Check the thermostat.** Confirm it's set to Heat and the setpoint is above room temperature. Replace the batteries if it's battery-powered — a dying thermostat can drop the call for heat mid-cycle.
- **Open all supply registers and clear return grilles.** Blocked airflow starves the furnace and overheats the heat exchanger. Move furniture and rugs off vents.
- **Check the breaker and furnace switch.** If the breaker is tripped, reset it **once**. Confirm the wall switch (looks like a light switch near the furnace) is on.
- **Look at the condensate line/pan** on high-efficiency units. If you see standing water or a full pan, a clogged drain may be tripping a safety. Clearing a visible external clog is fine; internal work is not.
- **Seat the front panels.** The blower door must be fully closed — the door safety switch cuts power if it isn't.

Do **one** breaker reset only. If the furnace shuts off again, stop and call a pro — repeated resets on a locked-out unit are unsafe.

## How a technician will diagnose it

A qualified tech will:

- **Read the LED flash code** at the control board to identify which safety is tripping (limit, pressure switch, flame sense, rollout).
- **Measure temperature rise** across the heat exchanger and check it against the nameplate range — high rise confirms airflow restriction or a blower problem.
- **Test the high-limit and rollout switches** with a multimeter to see if they're opening on heat or failed open.
- **Check the pressure switch and inducer** — inducer amp draw, tubing for cracks or blockage, and the flue for restriction.
- **Clean or test the flame sensor** and measure microamp signal to confirm flame proving.
- **Inspect the heat exchanger** for cracks, and check condensate drainage on high-efficiency units.
- **Verify low-voltage wiring and board outputs**, and test the board itself if all switches and sensors pass.

Sanity check: a good tech identifies *which* safety is opening before quoting parts. "Replace the board" without reading the flash code and testing the switches is a red flag.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Runs a few minutes then shuts off, restarts | Overheating / high-limit trip from airflow | Replace filter, open all vents & returns | Test limit, measure temp rise, clean blower |
| Burner lights then drops out in seconds | Dirty/weak flame sensor | None safe | Clean/test flame sensor, measure microamps |
| Shuts off, inducer cycles, retries | Pressure switch opening / poor draft | Clear visible flue/condensate blockage | Test switch, check inducer & tubing/flue |
| Standing water, furnace stops (HE unit) | Condensate backup tripping safety | Clear visible external drain clog | Clear trap, test float switch |
| Shuts off and won't restart until power cycled | Hard lockout after retries | Reset breaker once only | Diagnose root safety fault before reset |
| Scorching, soot marks or flame outside the burner area | Flame rollout | Shut off at the switch, don't reset, call a pro | Find the cause, inspect heat exchanger & venting |
| Random shutdowns, no pattern | Loose wiring or failing board | Check thermostat batteries | Test wiring & board, replace if faulty |

## Repair costs

| Repair | Typical US cost |
|---|---|
| Air filter (DIY) | $0–$30 |
| Thermostat batteries (DIY) | $5–$15 |
| Flame sensor clean/replace | $80–$250 |
| High-limit or rollout switch | $150–$350 |
| Pressure switch | $150–$350 |
| Condensate trap/drain clearing | $100–$250 |
| Inducer motor assembly | $400–$1,200 |
| Integrated control board (IFC) | $400–$1,200 |
| Heat exchanger (if cracked) | $1,500–$3,500+ |

Trane/American Standard use proprietary control boards, so IFC quotes commonly land in the upper half of that range. A cracked heat exchanger is often not worth repairing on an older furnace — ask about replacement quotes if that's the diagnosis.

## Related codes

- **Trane Furnace Short Cycling: Causes, Fixes & Costs** — closely related rapid on/off behavior.
- **Trane Furnace 4 Flashes: Open Limit Circuit Causes & Fixes** — the specific overheating/limit fault.
- **Trane Furnace 3 Flashes: Pressure Switch Error Fixes** — pressure-proving shutdowns.
- **Trane Furnace Weak Flame Signal: Burner Lights Then Drops Out** — flame-sensor-related dropouts.
- **Trane Furnace 2 Flashes: System Lockout Causes & Fixes** — hard lockout after repeated retries.
- **Trane Furnace Blowing Cold Air: Causes, Fixes & Costs** — if it shuts the burner but keeps blowing.

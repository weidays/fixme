---
title: "Amana Furnace 4 Flashes: Open High-Limit Switch Fix"
code: "4 flashes"
description: "Amana furnace 4 flashes means an open high-limit from overheating. Causes, safe checks, safety stop-rules, and repair costs from $0 DIY to $1,800."
brand: amana
equipment: furnace
severity: pro
costRange: "$0 DIY (filter) – $1,800 if an ECM/variable-speed blower motor or major airflow correction is needed"
appliesTo: >
  Most Amana 80% and 90%+ gas furnaces built with a Goodman/Daikin integrated furnace control (IFC) that reports faults with a diagnostic LED (LED color varies by board vintage — red, green or amber). On many of these boards the 4-flash legend reads "open high-limit switch"; on others it reads "open thermal protective device," a series safety circuit that can also include the auxiliary limit and the manual-reset flame rollout switch(es). Older Amana-branded furnaces built before the Goodman era use different control boards and different flash-code legends. Always confirm the meaning against the diagnostic legend printed on your blower-door label or IFC cover.
tags:
  - amana
  - furnace
  - flash-code
  - high-limit
  - overheating
  - airflow
parts:
  - name: Furnace air filter (check size on your old filter)
    search: furnace air filter 16x25x1 MERV 8
  - name: Pleated furnace filter multipack
    search: pleated hvac furnace filter multipack
datePublished: 2026-09-20
dateModified: 2026-09-20
reviewedBy: ""
faq:
  - q: Does the Amana 4-flash code reset by itself?
    a: The primary high-limit is an auto-reset switch — it closes again on its own once the furnace cools, and the code clears. But on boards whose legend reads "open thermal protective device," the same 4 flashes can also come from a manual-reset flame rollout switch, which does not reset itself and must never be reset by a homeowner. If the code does not clear after the furnace has cooled, treat it as a rollout or a failed safety and call a technician.
  - q: Can I run my furnace with a 4-flash code?
    a: You can try once after replacing a dirty filter, provided there is no burning or scorching smell, no soot around the burner area, and no popped button on a manual-reset switch. If it flashes 4 again the furnace is overheating. Repeated overheating stresses the heat exchanger, so stop and have a technician inspect it.
  - q: Is a 4-flash code dangerous?
    a: The limit switch is a safety device doing its job by shutting off heat. The real risks are ignoring repeated trips, which can crack a heat exchanger over time, and force-resetting a furnace whose rollout switch has tripped because flame is escaping the burner compartment. That makes this a pro-level repair once the basics are ruled out.
  - q: Why does my furnace overheat with a clean filter?
    a: A plugged evaporator coil above the furnace, a weak or failing blower motor, a slipping blower wheel, closed registers, or blocked ductwork can all restrict airflow. A technician measures temperature rise and static pressure to find the cause.
---

## What this code means

Four flashes on your Amana furnace control board means the **primary high-limit switch has opened**. This switch monitors the temperature inside the heat exchanger area. When air can't move through the furnace fast enough, heat builds up, the limit trips, and the burners shut off to protect the unit.

This is a **safety response, not a random glitch** — the furnace is telling you it got too hot. The most common trigger is simply restricted airflow: a clogged filter, closed vents, a dirty coil, or a blower that isn't moving enough air.

**Auto-reset behavior — with one important exception.** The primary high-limit is an auto-reset device: once the furnace cools, the switch closes, the code clears, and the furnace tries to run again. If the airflow problem persists it will overheat and flash 4 again, sometimes short-cycling repeatedly. That repeated cycling is your cue to stop and diagnose the root cause.

The exception matters. On many of these boards the 4-flash legend is **"open thermal protective device"** — a *series* circuit that includes the primary limit, the auxiliary limit **and the flame rollout switch(es)**. Rollout switches are **manual-reset** and they trip because flame is escaping the burner compartment. A furnace in that condition must not be power-cycled and re-fired.

### Stop-rule: do not reset if any of these are true

Shut the furnace off at its service switch, leave it off, and call a licensed technician if you see or smell any of the following:

- A **burning, scorching, or hot-metal smell**, or smoke anywhere near the furnace.
- **Soot, scorch marks, or discoloration** on or around the burner compartment or the furnace cabinet.
- A **button-style manual-reset switch that has popped** (a small raised red or black button on or near the burner area). Never push it in.
- The **code will not clear after the furnace has fully cooled** (give it 30 minutes off).
- Flames or a visible glow rolling **outside** the burner compartment.

**If you smell gas at any time — rotten egg or sulfur — do not touch any switch or breaker. Leave the house immediately, then call your gas utility's emergency line or 911 from outside.**

If none of those conditions apply, the checks below are safe.

## Common causes, ranked by probability

1. **Dirty or clogged air filter** — the number-one cause. A restricted filter starves the blower of return air, and the furnace overheats.
2. **Closed, blocked, or too few supply/return registers** — furniture, rugs, or shut vents reduce airflow enough to trip the limit.
3. **Restricted or undersized ductwork** — collapsed flex duct, a closed damper, or a crushed return run.
4. **Dirty evaporator coil** — a plugged A-coil sitting above the furnace is one of the most common reasons a furnace overheats *with a clean filter*. It's invisible from the outside and needs a technician to inspect and clean.
5. **Blower motor problems** — a failing motor, worn bearings, a bad capacitor, or a blower running on the wrong speed tap moves too little air.
6. **Loose or slipping blower wheel** — a wheel packed with dust or spinning loose on the shaft won't move rated airflow.
7. **A failing or out-of-spec limit switch** — less common, but a limit that opens below its rated temperature will trip even with good airflow.
8. **Oversized furnace or improper gas input** — a unit firing above its rated input generates more heat than the airflow can carry away.

## Safe checks before you call anyone

**Work through the stop-rule above first.** If any of those conditions apply, skip this section entirely and call a pro. Otherwise, these are the only steps a homeowner should do — everything else lives inside the cabinet and is technician work.

- **Replace the air filter.** This resolves a large share of 4-flash calls. Use the size printed on your old filter and don't over-restrict with an ultra-high-MERV filter your system wasn't designed for.
- **Open all supply registers and return grilles.** Make sure no rugs, furniture, or boxes are blocking them. A whole home should not have most of its vents closed.
- **Check the thermostat and test the blower.** Confirm it's set to Heat, the setpoint is above room temperature, and the batteries are good. Then set the fan to **On** for a minute and hold your hand at a supply register — you should feel steady air. Weak or no airflow with the fan on **On** points to a blower or duct problem, not a thermostat problem. Return the fan to **Auto** when you're done.
- **Cycle the breaker once.** Only if the stop-rule conditions are all clear and the furnace has cooled: turn the furnace breaker off, wait 30 seconds, and back on to allow one clean restart. One reset only — do not keep resetting a furnace that trips again.
- **Look for obvious return-air blockages.** A closed door to a room with the only return, or a blocked return-air panel, can starve the blower.
- **Check the condensate drain on a 90%+ furnace.** A clogged drain line or full trap can shut the unit down and is worth clearing from the outside of the cabinet.
- **Give it time to cool.** Because the primary limit auto-resets, wait 5–10 minutes after clearing a blockage before expecting normal operation.

If the furnace flashes 4 again after a fresh filter and open vents, stop here and call a pro.

## How a technician will diagnose it

A qualified tech confirms the fault is real and finds *why* the furnace overheats — so you can sanity-check any quote:

- **Reads the flash code and blower-door legend** to confirm it's the primary high-limit and not an auxiliary limit or a tripped flame rollout switch.
- **Inspects the burner compartment and heat exchanger** for rollout evidence — soot, scorching, or flame disturbance — before re-firing anything.
- **Measures temperature rise** across the furnace and compares it to the rating-plate range (often 30–60°F). A high rise confirms restricted airflow.
- **Measures static pressure** to pinpoint whether the restriction is the filter, coil, or ductwork.
- **Tests the blower motor and capacitor** and verifies the correct blower speed tap for the installed system.
- **Inspects the blower wheel** for dust buildup, slipping, or damage.
- **Tests the limit switch** for continuity and correct trip/reset temperature; replaces it only if it's proven faulty.
- **Checks gas input / manifold pressure** if the furnace is firing above its rated input.
- **Inspects the evaporator coil** (if present) for dirt restricting airflow.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| 4 flashes, filter is filthy | Clogged air filter | Replace filter, reset breaker once | Verify temp rise after filter change |
| 4 flashes returns with clean filter | Blocked vents/ducts or dirty coil | Open all registers and returns | Measure static pressure, inspect coil and ductwork |
| Furnace short-cycles on heat | Weak blower airflow | Confirm filter and vents are clear | Test blower motor, capacitor, speed tap |
| Warm air then shutdown | Blower not reaching speed | None | Inspect/clean blower wheel, check motor |
| Trips even with good airflow | Faulty limit switch | None | Test and replace limit switch |
| High temp rise, whistling ducts | Restricted/undersized duct | Remove obvious blockages | Evaluate ductwork and coil restriction |
| Trips shortly after ignition | Overfiring / high gas input | None | Check manifold pressure, gas input |
| Burning smell, soot, or popped reset button | Possible flame rollout | Shut furnace off, do **not** reset | Inspect heat exchanger and burners before re-firing |

## Repair costs

Honest US ranges. Many 4-flash calls end at the cheapest line.

- **Air filter (DIY):** $8–$40 — often the entire fix.
- **Diagnostic / service call:** $80–$180 to confirm the cause.
- **Blower capacitor replacement:** $150–$300.
- **Limit switch replacement:** $150–$350.
- **Blower wheel cleaning or reseating:** $150–$350.
- **Blower motor replacement:** $450–$900 installed for a standard PSC motor; **$900–$1,800 installed** for an ECM or variable-speed motor or module.
- **Duct or coil airflow correction:** $200–$1,000+ depending on scope.

If a technician recommends heat-exchanger inspection after repeated overheating or a suspected rollout, expect additional cost — a cracked exchanger is a safety issue that may point toward replacement.

## Related codes

- **1 flash — [Amana Furnace Code 1 Flashes](/amana/furnace/1-flashes):** the meaning of a single flash **varies by control board**. On many Goodman/Daikin-built integrated furnace controls it is documented as *flame sensed when no flame should be present* — a flame-signal or gas-valve fault, **not** ignition lockout. Unsuccessful-ignition lockout is indicated differently depending on the board. Read the legend on your own blower-door label before acting on it.
- **2 flashes — [Amana Furnace 2 Flashes: Pressure Switch Stuck Closed Fix](/amana/furnace/2-flashes)** for venting/pressure faults.
- **3 flashes — [Amana Furnace 3 Flashes: Pressure Switch Stuck Open Fix](/amana/furnace/3-flashes)** for a pressure switch that won't close.

Always confirm the meaning against the diagnostic legend on your own furnace's blower-door label, since flash-code legends can vary by control board.

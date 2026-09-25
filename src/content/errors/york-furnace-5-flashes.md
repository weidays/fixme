---
title: "York Furnace 5 Flashes: Flame Sensed With Gas Off"
code: "5 flashes"
description: "York furnace 5 flashes means flame sensed with the gas valve off. Causes, safe checks, tech diagnosis and repair costs from $0 DIY to $1,200."
brand: york
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200 if the control board needs replacement"
appliesTo: "Most York single- and two-stage gas furnaces with LED-flash diagnostic boards (Affinity, LX, Latitude and similar). Flash-code legends vary by board revision — confirm against the label inside your blower door."
tags:
  - york
  - furnace
  - flame-sensor
  - control-board
  - gas-valve
parts: []
datePublished: 2026-09-23
dateModified: 2026-09-23
reviewedBy: ""
faq:
  - q: Is a 5-flash code dangerous?
    a: It can be. It means the board detects flame when the gas valve is supposed to be off. Most of the time that turns out to be a false flame signal from the sensing circuit or the board, but it can also mean a gas valve that is not closing fully — which is a genuine hazard. Either way it is a technician repair, and you should not keep running the furnace.
  - q: Can I fix a York 5-flash error myself?
    a: No. Every likely cause is inside the cabinet — the flame sensor wiring and ground, the control board, or the gas valve. Homeowners are limited to a single reset, and not even that if you can see flame or smell gas after the furnace has shut down.
  - q: Will the furnace reset on its own?
    a: On most York boards this fault holds the unit in lockout until power is cycled at the breaker, though recovery behavior varies by board revision. If it clears and then returns, the underlying fault is still present and needs a technician.
---

## What this code means

Five flashes on a York furnace control board means the board has **sensed flame when no flame should be present** — specifically, the flame sensor is reading a signal while the gas valve is commanded off.

The board watches the flame-sense circuit continuously. If it detects flame current during a period when the gas valve is de-energized, it assumes something is wrong: either gas is still burning when it shouldn't be, or the sensing circuit is falsely reporting flame. Because unintended combustion is a safety hazard, the board locks the furnace out rather than allowing it to keep cycling.

On most York boards this fault **holds in lockout** and will not auto-recover until power is cycled at the breaker. Behavior on recovery varies by board: some versions hold in lockout outright, while others respond by running the inducer — and sometimes the blower — to purge the heat exchanger until the flame current disappears. Because flash-code legends and recovery routines differ between board revisions, confirm the meaning against the diagnostic label inside your blower compartment door.

This is a **pro-level** fault. Every realistic cause lives inside the cabinet and involves the sensor circuit, control board, or gas valve — none of which are homeowner-serviceable.

## Common causes, ranked by probability

1. **Flame sensor or wiring fault producing a false signal** — a shorted or chafed sensor lead, moisture in the connector, or damaged wiring can feed a phantom flame-current reading to the board. This is the most frequent cause in the field.
2. **Grounding problem in the flame-sense circuit** — the flame-rectification signal is measured in microamps and depends on a solid burner and chassis ground. A loose, corroded, or missing ground can distort that signal into something the board reads as flame.
3. **Control board fault** — the flame-sense circuit on the board itself misreads or latches a flame signal even when the valve is off.
4. **Delayed flame extinction / residual gas burn-off** — a small amount of gas in the manifold and burners finishes burning off after the valve closes, and the sensor is still reading current during that window. Fouled or misaligned burners can lengthen it.
5. **Gas valve leaking through / stuck partially open** — the valve passes a small amount of gas after being commanded off, sustaining real flame that the sensor correctly detects. This is comparatively **rare**, but it is by far the **most dangerous** outcome on this list.

**A note on ordering.** The list above is ordered by how often each cause actually turns up. A technician's *inspection* order is usually the reverse: the gas valve and flame-proving hardware get checked first because valve leak-through is the one possibility that puts the house at risk, not because it is the most likely. Frequency and priority are two different things, and this code is a case where they point in opposite directions.

If you can see flame in the burner compartment, hear burning, or smell gas after the furnace has shut down, treat it as the dangerous case: shut the furnace off, leave it off, and call for service immediately (see the table below).

## Safe checks before you call anyone

These are the only steps a homeowner should perform. Do **not** open the cabinet or touch the gas valve, sensor, or wiring.

- **Confirm the thermostat is set correctly** — set it to HEAT with a call for heat, and replace the batteries if it's battery-powered, to rule out an erratic thermostat signal.
- **Try ONE reset** — switch the furnace off at the breaker or unit switch, wait 30 seconds, and restore power. If the 5-flash code returns, stop and call a technician. Skip this step entirely if you saw flame, heard burning, or smelled gas after shutdown.

**Routine housekeeping (not a fix for this code).** The following are worth doing for general furnace health, but none of them will clear a flame-sensed-with-gas-off fault, and a clean filter is not a reason to keep running the unit:

- Replace the air filter if it's dirty.
- Make sure supply and return registers are open and not blocked by furniture or rugs.
- Check the condensate drain for standing water and clear any obvious blockage at the accessible end.

Do **not** reset the unit repeatedly. If flame is being sensed with the gas off, repeated resets could mean repeatedly re-energizing a furnace with a gas-valve problem.

## How a technician will diagnose it

A qualified tech will:

1. **Read the flash history and confirm the code** against the correct board legend for your model.
2. **Test the gas valve for leak-through** — checking whether it fully closes and holds when de-energized. This is done first for safety, not because it is the most common finding. A valve passing gas after shutdown is condemned and replaced.
3. **Observe flame extinction** — watching whether the burners fully extinguish when the valve closes, and how long any residual burn-off lasts.
4. **Measure flame-sense (microamp) current** with a meter during the off cycle to see if the sensor is reporting a false signal.
5. **Inspect the flame sensor, its wiring, and the circuit ground** for shorts, moisture, corrosion, and loose or missing ground connections.
6. **Test the control board's flame-sense circuit** and replace the board only after the valve, sensor, wiring, and ground check out.

Ask any technician to show you *why* they're replacing a part — the valve should be verified as leaking (or the board's circuit shown faulting) before a costly component is condemned.

## Symptom, cause and what to do

Two of the observations below — flickering burners and "no visible flame" — normally require opening the burner compartment, which is technician work. They apply to you only if your furnace has a sight glass or viewport; otherwise, treat them as findings your technician will make.

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| 5 flashes right after shutdown, with flame still visible, burning audible, or a gas smell | Gas valve leaking through — real combustion with the valve commanded off | **Do not reset.** Shut the furnace off at the unit switch or breaker, close the manual gas shutoff if it is safely reachable, ventilate the area, leave the furnace off, and call a technician or your gas utility | Test and replace gas valve |
| 5 flashes with burners flickering after the valve closes (visible only through a viewport, or observed by a technician) | Delayed flame extinction / residual gas burn-off, possibly fouled burners | None — call a pro; do not keep cycling the unit | Inspect burners, confirm and correct extinction timing |
| 5 flashes with no visible flame at all (through a viewport, or as confirmed by a technician) | False flame signal from sensor, wiring, or ground | One reset only; call a pro if it returns | Test flame-sense circuit, wiring, ground |
| Code returns immediately after every reset | Control board flame-sense fault | Stop resetting; call a pro | Verify and replace control board |
| Code appears after damp/humid conditions | Moisture in sense circuit or bad ground | One reset only; call a pro if it returns | Dry/repair circuit, correct grounding |

## Repair costs

Honest US ranges, parts and labor:

- **One reset (fault clears, no return):** $0 DIY
- **Diagnostic service call:** $90 – $180
- **Flame sensor replacement:** $150 – $300
- **Flame-sense wiring / grounding repair:** $120 – $280
- **Gas valve replacement:** $400 – $800+
- **Control board replacement:** $400 – $1,200 — York / Johnson Controls OEM integrated boards commonly land in the upper half of that range once labor is included

Flame-sense circuit repairs — sensor, wiring, ground — are the least expensive outcomes and, in field practice, the most common ones. A control board or gas valve replacement is the worst case, so a quote near or above $900 for an OEM board on a York furnace is not automatically out of line. Get the fault demonstrated to you before authorizing either part.

## Related codes

- **York Furnace 2 Flashes: Pressure Switch Stuck Closed**
- **York Furnace 3 Flashes: Pressure Switch Open Causes & Fixes**
- **York Furnace 4 Flashes: Open Limit Switch Causes & Fixes**

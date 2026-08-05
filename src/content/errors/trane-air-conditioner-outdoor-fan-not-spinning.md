---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Common causes are a failed capacitor, bad motor or contactor. See safe checks, diagnosis and US repair costs."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor is replaced"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series) with a single-phase PSC or ECM outdoor fan motor; ECM/variable-speed units vary in diagnostics"
tags:
  - trane
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: Dual run capacitor
    search: trane dual run capacitor 45+5 mfd 440v
  - name: Condenser fan motor
    search: trane condenser fan motor 1/4 hp 208-230v
  - name: Contactor (single pole)
    search: hvac condenser contactor 30 amp 24v coil
datePublished: 2026-08-05
dateModified: 2026-08-05
reviewedBy: ""
faq:
  - q: Can I run my Trane AC with the outdoor fan not spinning?
    a: No. Running the compressor without the outdoor fan turning causes the system to overheat and can permanently damage the compressor. Shut the system off at the thermostat until it is repaired.
  - q: Is it safe to push the outdoor fan to start it?
    a: If the fan hums but won't spin, a failed capacitor is likely. Do not stick fingers or objects into the fan. This test should be left to a technician, since it involves live 240V components.
  - q: How much does it cost to fix a Trane outdoor fan that won't spin?
    a: Most repairs run $150–$400 for a capacitor or contactor. A full condenser fan motor replacement typically costs $300–$650 including labor, depending on your area and model.
  - q: Why does my outdoor fan spin sometimes but not others?
    a: Intermittent operation usually points to a weakening capacitor, a heat-sensitive motor, or a pitted contactor. These parts often fail gradually, so the fan starts when cold but stalls when hot.
---

## What this code means

"Outdoor fan not spinning" is not a numeric fault code — it's a physical symptom on your Trane outdoor unit (the condenser). The large fan on top of the outdoor cabinet pulls air across the condenser coil to reject the heat your AC removes from the house. When that fan stops turning while the compressor runs, the system loses its ability to shed heat.

On most Trane split systems (XR, XL, and XV series), the fan is driven by a single-phase motor powered through a run capacitor and switched by a contactor. Variable-speed and communicating ECM outdoor units behave differently and may store a fault in the indoor board, so diagnostics vary by model.

**Running the compressor with the fan stopped is damaging.** Head pressure climbs fast, the compressor overheats, and you risk a costly compressor failure. Turn the system off at the thermostat and keep it off until the fan is fixed.

## Common causes, ranked by probability

1. **Failed run/dual-run capacitor** — the single most common cause. The fan may hum but not turn, or not respond at all.
2. **Burned or stuck contactor** — pitted or welded contacts prevent power from reaching the motor, or hold it on unpredictably.
3. **Condenser fan motor failure** — worn bearings, an open winding, or a tripped internal thermal overload. Often the motor is hot and smells burnt.
4. **Debris or ice jamming the fan blade** — sticks, tall grass, or a bent blade physically block rotation.
5. **Motor overheating and cycling on thermal overload** — the fan runs, stops when hot, then restarts after cooling.
6. **Loose or corroded wiring** — a disconnected fan lead or damaged spade terminal.
7. **Low-voltage / control board fault** — on communicating XV units, a board or module issue may hold the fan off. This is model-specific.

## Safe checks before you call anyone

Do these with the system **off at the thermostat first**, then shut off the outdoor disconnect and the breaker before touching anything near the unit. Capacitors hold a dangerous charge even with power off, so **do not open the electrical panel on the condenser**.

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature. Replace batteries if it's a battery model.
- **Air filter:** A clogged indoor filter can trigger safety shutdowns — replace if dirty.
- **Breaker/disconnect:** Check the outdoor breaker and the pull-out disconnect near the unit. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Visible debris:** With power off at the breaker, look through the top grille for leaves, sticks, or a nest jamming the blade. Clear only what you can reach by hand.
- **Indoor vents:** Make sure supply and return registers are open and unblocked.
- **Condensate:** A full condensate pan or clogged drain can trip a float switch and shut the system down. Empty a visible full pan.

If the fan still won't spin after these checks, the fault is electrical (capacitor, contactor, or motor) — that's a pro repair.

## How a technician will diagnose it

A qualified tech will:

1. Verify 240V is reaching the condenser and confirm the thermostat is calling for cooling.
2. **Test the capacitor** with a meter under load — checking the fan (FAN) microfarad rating against the printed value.
3. **Inspect the contactor** for pitting, welding, and confirm the 24V coil is energizing and pulling in.
4. **Check the fan motor** for continuity across windings, a shorted or open winding, and spin the blade by hand to feel for bearing drag.
5. Measure amp draw on the fan motor against the nameplate rating.
6. On communicating XV/ECM units, read stored faults from the indoor board or diagnostic display, since the fan may be controlled electronically.
7. Confirm proper voltage at the motor and rule out damaged wiring or a failed thermal overload.

A sound quote names the exact failed part (capacitor, contactor, or motor) and its measured value — not just "the fan is bad."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but won't spin | Failed run capacitor | Shut system off; don't push the blade | Test and replace capacitor |
| No fan, no hum, compressor runs | Bad capacitor or open motor winding | Turn off at thermostat | Test capacitor and motor; replace failed part |
| Fan blade won't turn freely by hand | Seized bearings or debris | Clear visible debris with power off | Replace motor if bearings are seized |
| Fan runs then stops when unit gets hot | Motor thermal overload / weak capacitor | Shut off to prevent compressor damage | Replace motor and/or capacitor |
| Contactor buzzing or fan cuts in and out | Pitted/stuck contactor | None | Replace contactor |
| Burnt smell from outdoor unit | Failed motor windings | Shut off at breaker | Replace condenser fan motor |
| Communicating XV fan won't start, board shows fault | Control/module fault | Note any display codes | Read board fault; repair per model |

## Repair costs

Ranges are typical US installed prices including parts and labor. Your area, model, and after-hours rates affect the total.

- **Run/dual-run capacitor:** $150–$300
- **Contactor:** $150–$350
- **Condenser fan motor (PSC):** $300–$650
- **ECM/variable-speed fan motor or module (XV series):** $500–$1,000+ — highly model-dependent
- **Blade replacement (bent):** $100–$250
- **Diagnostic/service call:** $75–$200 (often credited toward the repair)

A capacitor is the cheapest and most common fix. If a tech recommends a full motor without showing you a measured out-of-spec reading, it's fair to ask for the test results.

## Related codes

- **Not cooling** — *Trane AC Not Cooling: Causes, Fixes & Repair Costs* — a stopped outdoor fan is one cause of weak or no cooling; this page covers the broader diagnosis.
- **Code 90 (2 blinks)** — *Trane Furnace Code 90 (2 Blinks): Causes & Costs* — furnace-side fault, useful if your indoor blower is also affected.

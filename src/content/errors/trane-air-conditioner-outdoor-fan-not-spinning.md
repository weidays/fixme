---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Common causes are a bad capacitor, motor, or contactor. See safe checks, diagnosis steps, and US repair costs."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor is replaced"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series and older 2/4TTx units). Variable-speed XV20i/XV18 use ECM fan motors that fail and diagnose differently than PSC-motor units."
tags:
  - trane
  - air-conditioner
  - outdoor-unit
  - fan-motor
  - capacitor
parts:
  - name: "Dual run capacitor (match microfarad rating)"
    search: "dual run capacitor 45+5 mfd 440v hvac"
  - name: "Condenser fan motor (match HP, RPM, voltage)"
    search: "condenser fan motor 1/4 hp 208-230v hvac"
  - name: "Contactor (single or double pole)"
    search: "hvac contactor 30 amp 24v coil"
datePublished: 2026-07-19
dateModified: 2026-07-19
reviewedBy: ""
faq:
  - q: "Can I run my AC if the outdoor fan won't spin?"
    a: "No. Running the compressor without the condenser fan lets pressure and heat build fast, which can overheat and destroy the compressor. Shut the system off."
  - q: "Why does the fan start if I push it with a stick?"
    a: "That classic symptom points to a failed run capacitor. The motor windings need the capacitor's phase-shift to start; a manual push mimics it. Replace the capacitor."
  - q: "Is a stuck outdoor fan a DIY fix?"
    a: "Clearing debris or resetting a breaker is DIY. Capacitors, motors, and contactors involve high-voltage terminals and stored charge, so most homeowners should call a pro."
  - q: "How much does a Trane condenser fan motor cost to replace?"
    a: "Expect roughly $300 to $650 installed, depending on motor type. Variable-speed ECM motors on XV-series units cost more than standard PSC motors."
---

## What this code means

"Outdoor fan not spinning" isn't a blink code — it's a physical symptom on your Trane outdoor unit (the condenser). The large fan on top of the condenser is supposed to pull air through the coil to dump heat outside. If it won't turn while the system is calling for cooling, the unit can't reject heat.

On most Trane units there's no dedicated error code for this; you notice it by looking at the outdoor unit and seeing a still fan (or hearing a humming compressor with no airflow). On variable-speed models like the XV20i or XV18, a fault may be logged at the indoor board or communicating thermostat, since those use ECM motors with onboard electronics.

**This is a pro-level issue.** Running the compressor with the fan stopped risks a high-pressure trip or permanent compressor damage. If the fan isn't spinning and the compressor is humming or hot, turn the system off at the thermostat.

## Common causes, ranked by probability

1. **Failed run capacitor** — The single most common cause on standard (PSC-motor) Trane units. The dual run capacitor helps start and run both the fan and compressor. A bulged, leaking, or out-of-spec cap leaves the fan humming or dead.
2. **Bad condenser fan motor** — Worn bearings, an open winding, or a burned-out motor. Often smells hot or spins roughly by hand.
3. **Faulty contactor** — The relay that sends line voltage to the outdoor unit. Pitted or stuck contacts can drop power to the fan.
4. **Debris jamming the fan blade** — Sticks, ice, or a bird's nest physically blocking the blade.
5. **Tripped breaker or blown fuse** — No power reaching the condenser at all.
6. **ECM/module failure (variable-speed units)** — On XV-series units, the fan motor's electronic module or control signal can fail, requiring a specific Trane part.
7. **Overheated motor thermal cutout** — A failing motor may shut off on its internal overload once hot, then run again when cool — an intermittent no-spin.
8. **Bad fan relay or control board signal** — Less common; the fan gets no start command.

## Safe checks before you call anyone

These are the only checks a homeowner should do — none involve opening the electrical panel on the condenser:

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature so the system is actually calling.
- **Breaker:** Check the main panel and the outdoor disconnect breaker. If a breaker is tripped, reset it **once**. If it trips again, stop and call a pro — repeated tripping means a fault.
- **Air filter:** A clogged indoor filter can cause pressure/temperature trips. Replace it if dirty.
- **Visible debris:** With the system **off at the breaker**, look through the fan grille for leaves, sticks, or a nest. Remove obvious debris only — don't force or lubricate the motor.
- **Ice on the coil:** If you see ice on the outdoor or indoor coil, shut the system off and let it thaw. Ice usually points to airflow or refrigerant problems needing a tech.
- **Condensate drain:** A backed-up drain can trip a safety float switch and stop the whole system. Clear a visibly clogged drain line if accessible.

Do **not** open the condenser's electrical box, push the fan with a tool to "help" it start while powered, or bypass any switch. Capacitors hold a dangerous charge even after power is off.

## How a technician will diagnose it

A qualified tech will typically:

1. **Kill power** at the disconnect and verify zero voltage before touching anything.
2. **Discharge and test the capacitor** with a multimeter, comparing measured microfarads to the printed rating. A weak cap is the most common finding.
3. **Check the contactor** for pitted contacts and confirm 24V is pulling it in and line voltage is passing through.
4. **Test the fan motor** — resistance across windings, check the internal overload, and spin it by hand for bearing wear.
5. **Verify line voltage** to the unit and inspect the fuses in the disconnect.
6. On **variable-speed XV units**, read fault history at the board/thermostat and test the ECM motor and its control module per Trane's procedure.
7. **Confirm the fix** by restoring power and watching the fan start promptly and run smoothly.

If a quote jumps straight to "replace the motor" without testing the capacitor first, ask them to confirm the capacitor reading — it's the cheaper, more common culprit.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but won't spin; starts if nudged | Failed run capacitor | Shut off system, don't force it | Discharge & replace capacitor, verify rating |
| Fan dead, compressor humming/hot | Capacitor or motor failure | Turn off at thermostat immediately | Test cap and motor, replace failed part |
| No power to whole outdoor unit | Tripped breaker / blown fuse | Reset breaker once | Find cause of trip, replace fuse, test load |
| Fan blade physically stuck | Debris or seized bearing | Power off, remove visible debris | Replace motor if bearings seized |
| Fan runs then stops when hot | Motor thermal overload | Note the pattern for the tech | Replace failing motor |
| No fan, no click at contactor | Bad contactor or control signal | None — call a pro | Test/replace contactor, check board signal |
| XV20i/XV18 logs a fan fault | ECM motor or module fault | Note the fault code | Diagnose ECM per Trane procedure, replace module/motor |

## Repair costs

Honest US ranges, parts and labor:

- **Run capacitor replacement:** $150 – $350. The part is cheap ($15–$40); most cost is the diagnostic visit and labor.
- **Contactor replacement:** $150 – $350.
- **Condenser fan motor (standard PSC):** $300 – $600 installed.
- **Variable-speed ECM fan motor / module (XV series):** $450 – $900+ installed — the electronics and Trane-specific parts drive the price up.
- **Clearing debris / breaker reset:** $0 DIY, or a $90–$150 service-call minimum if a tech comes out.
- **Diagnostic fee:** $90 – $175, often credited toward the repair.

Prices vary by region, unit age, and whether your system is still under Trane's parts warranty — check your registration, as many Trane units carry a 10-year parts warranty (labor is usually separate).

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — if the fan runs but the house still won't cool, start here.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for indoor furnace/air-handler fault codes on the heating side.

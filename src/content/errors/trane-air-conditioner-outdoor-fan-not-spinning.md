---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane AC outdoor fan not spinning? Common causes include a failed capacitor, motor, or contactor. See safe checks, diagnosis, and repair costs."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 for a condenser fan motor replacement"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series) with single-stage or variable-speed outdoor units; ECM/variable-speed models diagnose differently than PSC motors."
tags:
  - trane
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: "Dual run capacitor"
    search: "trane dual run capacitor 45+5 uf 440v"
  - name: "Condenser fan motor"
    search: "condenser fan motor 1/4 hp 208-230v"
  - name: "Contactor 2-pole 30 amp"
    search: "2 pole 30 amp contactor 24v coil"
datePublished: 2026-09-03
dateModified: 2026-09-03
reviewedBy: ""
faq:
  - q: "Can I run my Trane AC if the outdoor fan won't spin?"
    a: "No. Running the compressor without the outdoor fan causes it to overheat and can lead to a costly compressor failure. Turn the system off."
  - q: "Why does my Trane fan spin if I push it with a stick?"
    a: "A fan that starts only after a manual nudge almost always has a failed or weak run capacitor. The motor can't generate enough torque to start on its own."
  - q: "How much does it cost to fix a Trane outdoor fan that won't spin?"
    a: "A capacitor runs $150–$350 installed, a contactor $150–$350, and a full condenser fan motor replacement $400–$650 depending on the model."
  - q: "Is a stuck outdoor fan dangerous?"
    a: "It's not a fire or gas hazard, but it can quickly destroy your compressor. Shut the AC off at the thermostat and breaker until it's repaired."
---

## What this code means

"Outdoor fan not spinning" isn't a blink code — it's a physical symptom on your Trane condenser (the outdoor unit). The large fan on top pulls air across the condenser coil to dump heat outside. When it stops, the compressor may still run, but the system can't reject heat, pressures spike, and the unit will either stop cooling or shut itself down on a high-pressure or thermal safety.

On most Trane split systems, the fan and compressor share a **dual run capacitor** and are switched on by a **contactor** when the thermostat calls for cooling. A problem in any of those — plus the fan motor itself — can leave the fan dead while the rest of the unit hums.

**Variable-speed / communicating Trane units** (XV18, XV20i and similar) use an ECM outdoor fan motor and a control board that *can* log a fault. On those models, check the indoor thermostat or diagnostic app for an actual code — the fix and diagnosis differ from a standard PSC-motor unit.

> ⚠️ Do not let the AC keep running with a stuck outdoor fan. The compressor can overheat and fail, which is the single most expensive repair on the system. Shut it off.

## Common causes, ranked by probability

1. **Failed run capacitor** — By far the most common. A bulged or blown capacitor can't give the fan motor its starting torque, so it sits dead or only spins if pushed.
2. **Failed condenser fan motor** — Worn bearings, an open winding, or a burned-out motor. Often preceded by grinding, humming, or a hot-smelling unit.
3. **Bad contactor** — Pitted or stuck contacts fail to send power to the fan (and often the compressor). Sometimes buzzes.
4. **Debris jamming the fan** — Sticks, leaves, or ice physically blocking the blade. Least expensive if that's all it is.
5. **Tripped breaker or blown low-voltage fuse** — No power to the outdoor unit or to the 24V control circuit.
6. **Control board / ECM fault (variable-speed units)** — On communicating Trane systems, a board or motor-module failure can stop the fan and should log a code.
7. **Wiring / connection failure** — A loose or corroded spade connector at the motor or capacitor.

## Safe checks before you call anyone

These are the only steps a homeowner should do without tools or opening the unit:

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature. Replace thermostat batteries if it's battery-powered.
- **Breakers:** Check both the indoor air-handler/furnace breaker and the **outdoor disconnect** (the box on the wall near the condenser) and the main-panel AC breaker. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Air filter:** A filthy filter can cause the system to trip on safeties. Replace if dirty.
- **Visible debris:** With the system **off at the breaker**, look through the top grille for leaves, sticks, or a bird's nest resting on the fan blade. Remove anything obvious. Do not reach in with power on.
- **Ice:** If you see ice on the outdoor coil or lines, turn the AC off and set the fan to ON to thaw. Frozen coils often point to airflow or refrigerant issues.
- **Indoor unit running?** Note whether the indoor blower and the outdoor compressor still run while the fan is dead — that detail helps the technician.

Do **not** open the electrical panel of the condenser, touch the capacitor, or spin the fan by hand with power on. Capacitors store a dangerous charge even when the unit is off.

## How a technician will diagnose it

A qualified HVAC tech will typically:

1. **Kill power** at the disconnect and confirm with a meter.
2. **Discharge and test the capacitor** with a multimeter, comparing the reading to the microfarad rating printed on it. A weak or open cap is the usual culprit.
3. **Inspect the contactor** for pitting, buzzing, or failure to pull in when 24V is applied.
4. **Check the fan motor** — spin it by hand for bearing drag, test windings for continuity/resistance, and confirm it gets voltage.
5. **Verify 24V control and line voltage** reaching the outdoor unit, and check the low-voltage fuse on the board.
6. **On variable-speed units,** read the fault log via the thermostat or Trane diagnostics and test the ECM motor module.

A capacitor test takes minutes. If a tech quotes a full motor replacement without first testing the cheap capacitor, ask them to show you the readings.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan dead, compressor humming | Failed run capacitor | Shut off AC to protect compressor | Test and replace capacitor |
| Fan spins if nudged, then stops | Weak run capacitor | Turn off; don't run it | Replace dual run capacitor |
| Fan and compressor both dead, unit silent | Bad contactor or no power | Check/reset outdoor disconnect & breaker | Test 24V, replace contactor |
| Grinding/humming then fan stops | Seized fan motor bearings | Shut off; note the noise | Replace condenser fan motor |
| Fan blade physically jammed | Debris on blade | Power off, remove visible debris | Clear obstruction, inspect blade |
| Breaker trips when AC starts | Short in motor/capacitor/wiring | Reset once only, then stop | Locate short, replace faulty part |
| Fault code on smart thermostat (XV models) | ECM/board fault | Note the code | Diagnose control board/motor module |

## Repair costs

Honest US ranges, parts and labor included:

- **Run capacitor replacement:** $150 – $350
- **Contactor replacement:** $150 – $350
- **Condenser fan motor (PSC):** $400 – $650
- **ECM / variable-speed fan motor or module:** $600 – $1,200+ (varies by model)
- **Debris removal / minor wiring fix:** $80 – $200 diagnostic/service call
- **Diagnostic fee alone:** $75 – $175 (often credited toward the repair)

Prices vary by region and by whether your unit is a standard or communicating Trane system. Communicating XV-series parts cost more. If a capacitor test hasn't been done, that's the first, cheapest thing to rule out.

## Related codes

- **[Trane AC Not Cooling: Causes, Fixes & Repair Costs](/trane/air-conditioner/not-cooling)** — a stopped outdoor fan is one reason the system stops cooling; start here if the fan *is* spinning but no cold air.
- **[Trane Furnace Code 90 (2 Blinks): Causes & Costs](/trane/furnace/code-90)** — related Trane control-board diagnostics on the heating side.

If safe checks don't restore the fan, don't keep resetting the unit — call a licensed HVAC technician to protect your compressor.

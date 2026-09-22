---
title: "Lennox Furnace Code E180: Outdoor Sensor Fix & Cost"
code: "Code E180"
description: "Lennox Code E180 flags an outdoor air temp sensor fault (open, shorted, or out of range). Causes, safe checks, tech fixes and costs."
brand: lennox
equipment: furnace
severity: pro
costRange: "$0 DIY – $250 if the outdoor sensor and wiring need replacement"
appliesTo: >
  Lennox communicating furnaces and systems using an outdoor air temperature sensor with iComfort/SLP or S30/S40 controls. Exact code text and behavior vary by control board and thermostat firmware; some legends list this as an outdoor sensor open/short/out-of-range fault.
tags:
  - lennox
  - furnace
  - outdoor-sensor
  - error-code
  - communicating-hvac
parts: []
datePublished: 2026-09-22
dateModified: 2026-09-22
reviewedBy: ""
faq:
  - q: Will my furnace still heat with a Code E180?
    a: Usually yes. The outdoor sensor is used for staging and efficiency logic, not for basic firing, so the furnace typically keeps heating while flagging the fault.
  - q: Does Code E180 clear itself?
    a: If the sensor value returns to a valid range, the code often self-clears. A persistent open, short, or wiring fault holds the code until the sensor or connection is repaired.
  - q: Can I replace the outdoor sensor myself?
    a: No. The outdoor sensor mounting, low-voltage wiring and terminal connections are technician work. It requires opening the control area and verifying resistance with a meter.
  - q: Is Code E180 an emergency?
    a: No. It is a comfort and staging fault, not a safety lockout. It should be corrected so the system stages and reports outdoor conditions correctly, but it is not urgent.
---

## What this code means

Lennox Code E180 indicates an **outdoor air temperature sensor problem** — the control is reading the outdoor sensor as **open, shorted, or out of range**. This sensor is a small thermistor that reports outdoor temperature back to the communicating control (iComfort thermostat or S30/S40 system), which uses it for staging decisions, efficiency logic, and outdoor temperature display.

Because the sensor is not part of the burner safety chain, the furnace will generally continue to provide heat while E180 is active. What you lose is accurate outdoor-temperature-based control, which can affect comfort, staging, and any features that depend on outdoor conditions.

The code typically **self-clears** once the control reads a valid sensor value again. A true open circuit, a shorted sensor, or damaged wiring will keep the fault present until repaired. Exact wording and reset behavior vary by board and thermostat firmware, so confirm against your unit's installation and troubleshooting guide.

## Common causes, ranked by probability

1. **Failed or drifting outdoor sensor (thermistor)** — the most common trigger; the sensor reads a resistance outside the valid range, registering as open, shorted, or out of range.
2. **Loose or corroded sensor connection** — a poor terminal or corroded splice at the sensor or control produces intermittent open readings.
3. **Damaged sensor wiring** — physical damage, rodent chewing, UV/weather degradation, or a pinched wire on the outdoor run.
4. **Sensor mounted or exposed incorrectly** — direct sun, heat sources, or water intrusion can push readings out of range even when the sensor itself is functional.
5. **Control board input fault** — less common; the input channel on the control misreads the sensor. This is diagnosed only after the sensor and wiring check out.

## Safe checks before you call anyone

These are the only steps a homeowner should do for E180:

- **Confirm the fault at the thermostat.** Note the exact code and any accompanying messages so you can relay them to a technician.
- **Check the thermostat/display.** Make sure the outdoor temperature reading is present or clearly showing an error; a blank or wildly wrong outdoor temp supports the code.
- **Cycle power once at the breaker.** Turn the furnace breaker off, wait 30 seconds, and turn it back on. This allows the control to re-read the sensor and clear a stale fault.
- **Replace thermostat batteries** if your thermostat uses them and the display is weak.
- **Visually scan for obvious outdoor damage** you can see from the ground near the outdoor unit — chewed wiring, a dangling sensor. Do not open panels or touch wiring.

Anything beyond this — opening the cabinet, testing sensor resistance, or touching wiring — is technician work.

## How a technician will diagnose it

A technician will typically:

1. **Read the fault history** in the iComfort/S30/S40 control to confirm E180 and check whether it is intermittent or hard.
2. **Locate the outdoor air temperature sensor** and inspect its mounting, exposure, and connection points.
3. **Measure sensor resistance** with a meter and compare against the Lennox thermistor resistance-vs-temperature chart to see if it reads open, shorted, or out of spec.
4. **Check the wiring run** from the sensor to the control for continuity, damage, corrosion, and loose terminals.
5. **Verify the control input** — if the sensor and wiring are good but the reading is still invalid, they'll evaluate the control board input channel.
6. **Clear the code and confirm** the outdoor temperature now displays correctly and stays within range through a heat cycle.

This sequence lets you sanity-check a quote: a good tech proves the sensor is bad before recommending a control board.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| E180 shown, furnace still heats | Sensor open/short/out of range | Note code, cycle breaker once | Test sensor resistance, inspect wiring |
| Outdoor temp missing or absurd on display | Failed thermistor | Confirm reading, report it | Measure and replace outdoor sensor |
| E180 comes and goes | Loose/corroded connection | Cycle power once | Reseat/repair terminals and splices |
| E180 after storm or rodent activity | Damaged outdoor wiring | Visual scan from ground | Repair or replace sensor wiring run |
| Sensor good but code persists | Control input fault | None | Evaluate/replace control board |

## Repair costs

Ranges are typical US figures including labor; your area and unit may differ.

- **DIY power cycle / battery replacement:** **$0** — often clears an intermittent fault.
- **Outdoor sensor replacement (part + labor):** **$90 – $250** depending on sensor availability and access.
- **Wiring repair or re-run to the sensor:** **$75 – $200** depending on length and routing difficulty.
- **Connection/terminal repair:** **$75 – $150**, often bundled with a diagnostic call.
- **Control board replacement (only if the input is confirmed faulty):** **$400 – $900+**, since communicating boards are costly. Insist the sensor and wiring be ruled out first.
- **Diagnostic/service call:** **$90 – $180**, frequently credited toward the repair.

## Related codes

- **Lennox Furnace Code E125: Control Board Failure Fix & Cost** — if the control itself is at fault rather than the sensor.
- **Lennox Furnace Code E131: Corrupted Control Parameters** — for control configuration/data faults.
- **Lennox Furnace Code E115: Low 24 VAC Causes & Fixes** — for low-voltage supply problems affecting the control circuit.
- **Lennox Furnace Code 200: Causes, Fixes & Costs** — for ignition lockouts (a separate, safety-related fault, not a sensor issue).

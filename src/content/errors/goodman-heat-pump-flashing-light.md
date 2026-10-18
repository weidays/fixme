---
title: "Goodman Heat Pump Flashing Light: Meaning & Fixes"
code: "Flashing light"
description: "Goodman heat pump flashing light explained: pressure switch lockouts, sensor faults and timers, with safe checks, repair options and costs ($0 to $2,500+)."
brand: goodman
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150-$450 for a sensor or board repair; $1,500-$2,500+ for refrigerant leak or compressor work"
appliesTo: "Goodman split heat pumps (GSZ, DSZ, GSZB, GSZC, GSZV and similar series). Non-communicating units use an outdoor defrost control board (PCBDM-series and similar) with a status LED. ComfortNet and ComfortBridge communicating units show codes on a 7-segment display or the thermostat. Flash patterns differ by board revision, so the wiring/diagnostic label inside your unit's control panel cover is the authority."
tags: ["goodman", "heat-pump", "flashing-light", "pressure-switch", "lockout", "defrost-board"]
parts:
  - name: "HVAC air filter (match your size)"
    search: "MERV 8 furnace air filter 16x25x1"
  - name: "Thermostat batteries"
    search: "AA lithium batteries thermostat"
faq:
  - q: "Is a flashing light on my Goodman heat pump always a problem?"
    a: "No. On many Goodman defrost and control boards, a slow steady blink means the board is powered and working normally. A specific repeating pattern of flashes, with a pause between groups, is what signals a fault. Your unit's diagnostic label tells you which pattern means what."
  - q: "Will the flashing light clear itself?"
    a: "It depends on the fault. A single pressure-switch trip or the anti-short-cycle timer usually clears on its own within a few minutes. After repeated pressure-switch trips during one call, many Goodman boards hold a lockout until power is cycled. Reset once at the thermostat or breaker. If it locks out again, call a technician."
  - q: "Where is the light, and should I take the panel off to see it?"
    a: "On most non-communicating Goodman heat pumps, the LED sits on the defrost board inside the outdoor unit's control panel. The panel encloses high-voltage parts and capacitors, so leave it to a technician. If an indoor air handler or communicating thermostat displays a code without opening anything, write that down for the tech."
  - q: "Can low refrigerant cause the flashing light?"
    a: "Yes. A low charge can trip the low-pressure switch, and the board records that as a fault. Only an EPA-certified technician can find the leak, repair it, and recharge the system. Topping off without fixing the leak just postpones the next lockout."
datePublished: 2026-10-18
dateModified: 2026-10-18
reviewedBy: ""
---

## What this code means

A Goodman heat pump doesn't use one universal flashing-light code. The light is a status LED on a control board. On most non-communicating split heat pumps, that board is the outdoor defrost control. It blinks to report what the system is doing or why it stopped.

There are two common states:

- **Slow, steady blink:** On many Goodman boards this is the normal "powered and OK" signal.
- **Grouped flashes (for example, 2 or 3 flashes, then a pause):** The board has detected a fault. Typical faults are a pressure-switch trip or lockout, a defrost sensor problem, or the compressor's anti-short-cycle delay.

Flash meanings vary by board part number and revision. Read the diagnostic label inside the control panel cover, or ask your technician to, rather than relying on a generic chart.

Communicating models (ComfortNet and ComfortBridge, such as GSZC, DSZC and GSZB) report faults on a 7-segment display or a compatible thermostat. They don't rely on a blink count.

**Reset behavior:**

- A single pressure-switch trip is usually a soft lockout. It auto-resets after a delay.
- Repeated trips within one thermostat call commonly escalate to a hard lockout. A hard lockout holds until power is cycled at the breaker or thermostat.

Because the board is behind a high-voltage panel, this page is rated **pro**.

## Common causes, ranked by probability

1. **Anti-short-cycle timer (normal).** After a power blip or a thermostat change, the board waits about 3–5 minutes before restarting the compressor. Some boards signal this delay on the LED. No repair is needed.
2. **High-pressure switch trip.** Common triggers are:
   - a dirty or blocked outdoor coil in cooling mode
   - a failed outdoor fan motor or capacitor
   - a severely clogged filter or blocked indoor airflow in heating mode
   - refrigerant overcharge or a restriction
3. **Low-pressure switch trip.** Common triggers are:
   - a low refrigerant charge from a leak
   - a frozen indoor coil caused by poor airflow
   - a metering device restriction
4. **Defrost sensor or thermostat fault.** An open or shorted coil sensor can make the board flag a fault or mishandle defrost.
5. **Control voltage or wiring problem.** Low 24V, a loose connection, or a shorted thermostat wire can cause erratic board behavior or flashing.
6. **Failed defrost or control board.** This is a diagnosis of last resort, after the sensors and switches test good.

## Safe checks before you call anyone

- **Wait 5 minutes.** Give the anti-short-cycle timer time to finish before assuming a fault.
- **Check the thermostat.**
  - Confirm the mode (Heat or Cool) and that the setpoint calls for operation.
  - Replace the batteries if the display is dim or blank.
- **Replace the air filter if it's dirty.** Restricted airflow is a leading cause of both high- and low-pressure trips.
- **Open supply registers and return grilles.** Make sure at least about 80% are open and unblocked.
- **Clear around the outdoor unit.** Remove leaves, snow and debris from around the cabinet by hand, keeping 2 feet of clearance. Don't open the unit, and don't spray inside it.
- **Check the condensate line.** Confirm the indoor drain isn't backed up and the float switch area isn't flooded. Do this only where the line and pan are visible without removing panels.
- **Confirm the breakers.** Check the indoor and outdoor breakers and the outdoor disconnect. Make sure every exterior panel is fully seated.
- **Reset once.** Turn the thermostat off, switch the breaker off for 1 minute, then restore power. If the light returns to a fault pattern or the unit locks out again, stop and call a technician. Repeated resets can damage the compressor.

## How a technician will diagnose it

A competent tech should:

1. **Read the LED pattern.** They'll match it against the label for your specific board part number, or pull the fault history on communicating models.
2. **Check line voltage and 24V control voltage.** They'll also inspect the thermostat wiring for shorts or loose terminals.
3. **Confirm the outdoor fan.** They'll check that it runs, and test its motor and capacitor.
4. **Inspect and clean the outdoor coil** if it's dirty.
5. **Measure the refrigerant pressures and temperatures.** Expect superheat and subcooling readings, used to confirm whether the high- or low-pressure switch is responding to a real condition.
6. **Check the pressure switches for continuity.**
7. **Test the defrost sensor's resistance** against Goodman's temperature chart.
8. **Replace the board only after everything above checks out.**

Be skeptical of a quote that jumps straight to "new board" or "add refrigerant" without pressure readings and a leak search.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Light flashes, unit restarts in about 5 min | Anti-short-cycle delay | Wait; avoid frequent thermostat changes | None needed |
| Fault flashes in cooling, outdoor fan not spinning | Fan motor or capacitor causing high-pressure trip | Turn system off; call | Test and replace capacitor or fan motor |
| Fault flashes, dirty outdoor coil | High-pressure trip | Clear debris around unit by hand | Clean coil, verify pressures |
| Fault flashes in heat mode, weak airflow | Clogged filter causing high-pressure trip | Replace filter, open registers | Check blower and duct static pressure |
| Repeated lockout, ice on indoor lines | Low charge or frozen coil causing low-pressure trip | Replace filter; reset once | Leak search, repair, recharge |
| Defrost acts oddly plus fault flashes | Defrost sensor fault | None | Test sensor resistance, replace sensor |
| Erratic flashing, intermittent operation | Low 24V or a wiring fault | Check breakers and thermostat batteries | Test transformer and wiring |
| Fault persists with all components testing good | Failed control board | None | Replace defrost or control board |

## Repair costs

| Component / job | Typical US cost |
|---|---|
| Filter, thermostat batteries | $5–$40 DIY |
| Service call and diagnosis | $90–$200 |
| Outdoor coil cleaning | $100–$250 |
| Run or fan capacitor | $120–$300 |
| Outdoor fan motor | $300–$650 |
| Defrost sensor | $150–$300 |
| Pressure switch | $200–$450 |
| Defrost or control board | $300–$700 (communicating boards run higher) |
| Leak search and repair plus recharge | $400–$1,500+ (depends on leak location and refrigerant type) |
| Compressor replacement | $1,500–$2,500+ |

Goodman's parts warranty (often 10 years when the unit was registered) may cover parts. It doesn't cover labor.

## Related codes

- Goodman Heat Pump Short Cycling: Causes, Fixes & Costs
- Goodman Heat Pump Compressor Not Running: Causes & Costs
- Goodman Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Goodman Heat Pump Frozen and Not Defrosting: Fixes
- Goodman Heat Pump Stuck in Defrost Mode: Causes & Fixes
- Goodman Heat Pump Won't Turn On: Causes, Fixes & Costs
- Goodman Heat Pump Not Cooling: Causes, Fixes & Costs
- Goodman Heat Pump Not Heating: Causes, Fixes & Costs

---
title: "Amana Heat Pump Short Cycling: Causes, Fixes & Costs"
code: "Short cycling"
description: "Why an Amana heat pump short cycles in heat mode: defrost, low charge, sensors, sizing. Safe checks, tech diagnosis and repair costs from $0 to $3,000+."
brand: amana
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150–$450 for sensor or control repairs, $500–$3,000+ for refrigerant leak or compressor-related work"
appliesTo: "Amana split heat pumps (ASZ, ASZC, AVZC and older single-stage lines). Defrost board logic, anti-short-cycle delay length and fault-code display vary by model and control board. Communicating ComfortBridge and variable-speed models report faults through the board and thermostat; single-stage units do not. Check your unit's installation and service manual."
tags:
  - amana
  - heat-pump
  - short-cycling
  - heat-mode
  - troubleshooting
parts:
  - name: "Furnace/air handler air filter (match your size)"
    search: "MERV 8 air filter 16x25x1"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries 8 pack"
datePublished: 2026-11-20
dateModified: 2026-11-20
reviewedBy: ""
faq:
  - q: "Is it normal for my Amana heat pump to stop and restart in winter?"
    a: "Yes, sometimes. In cold, humid weather the unit runs defrost cycles. The outdoor fan stops, you may hear a whoosh and see steam, and the cycle usually ends within about 10 minutes. Repeated starts and stops of only a few minutes each in mild weather are not normal."
  - q: "How is this different from the Amana AC short cycling page?"
    a: "The AC page covers cooling-season causes such as oversizing and frozen coils. This page covers heat-pump-specific causes: defrost control behavior, the reversing valve, outdoor sensors and heat-mode pressure trips."
  - q: "Can short cycling damage the compressor?"
    a: "Yes. Every start puts heat and electrical stress on the compressor. Frequent short cycles over weeks can shorten its life and raise power bills. That's why this page is rated pro severity once the basic checks don't fix it."
  - q: "My heat pump starts, runs a minute, then stops and waits a few minutes. What is that?"
    a: "That pattern usually means a safety control is opening, often a high- or low-pressure switch. The board then holds off restart with its anti-short-cycle delay, often around 5 minutes, though it varies by board. Some boards lock out after repeated trips. A technician needs to find the reason the switch is opening."
---

## What this code means

"Short cycling" is not a stored fault code. It describes an Amana heat pump that turns on and off far more often than it should. A healthy unit typically runs 10–20 minutes or longer per cycle.

On Amana heat pumps it usually shows up one of two ways:

- **Thermostat-driven cycling:** the system satisfies the setpoint too fast, or the thermostat misreads the temperature.
- **Safety-driven cycling:** a pressure switch, thermostat-controlled protector or defrost control shuts the compressor off. The unit then restarts after the board's built-in delay.

**Reset behavior depends on what tripped:**

- Single pressure-switch trips on most Amana boards reset on their own after the delay.
- Repeated trips can cause a "soft" or "hard" lockout on some boards. A hard lockout holds until power is cycled.
- Communicating models may display a fault on the thermostat or board instead.

Note that cooling-season causes are covered in Amana AC Short Cycling. This page focuses on heat-pump and heat-mode behavior.

## Common causes, ranked by probability

1. **Thermostat issues.** Possible problems include:
   - weak batteries
   - a cycle-rate (CPH) setting that is too high
   - the thermostat set to "conventional/furnace" instead of "heat pump"
   - a poor location, such as next to a supply register, a lamp or a sunny window.
2. **Restricted indoor airflow in heat mode.** A dirty filter or closed registers cause high head pressure. That opens the high-pressure switch, which is a classic short-cycle cause in heating.
3. **Normal or misbehaving defrost.** Frequent defrost cycles can be caused by a faulty defrost sensor, a sensor that has come loose, or a defrost control issue. They can look like short cycling.
4. **Low refrigerant charge (leak).** This trips the low-pressure switch or causes the compressor's internal overload to trip on heat.
5. **Outdoor unit airflow problems in heat mode.** Snow, ice or debris on the coil, or a failing outdoor fan or capacitor. See Amana Heat Pump Outdoor Fan Not Spinning.
6. **Electrical or control faults.** Possible faults include:
   - a weak run capacitor
   - a failing contactor
   - loose low-voltage wiring
   - a defrost or control board failure.
7. **Reversing valve problems.** A valve that is sticking or partially shifting causes abnormal pressures.
8. **Oversized system.** The unit heats the space too fast, especially on mild days. This is common, but it is a design issue rather than a failure.

## Safe checks before you call anyone

- **Thermostat:**
  - Replace the batteries.
  - Confirm the system type is set to heat pump.
  - Check that the setpoint and mode are correct.
  - If the installer menu shows a cycles-per-hour setting, confirm it is at the default. Your thermostat manual will list it.
  - Make sure no heat source is affecting the thermostat.
- **Air filter:** replace it if it's dirty. Check it monthly during heavy use.
- **Registers and returns:** open all supply vents and clear any furniture or rugs blocking return grilles.
- **Outdoor unit (look only):**
  - Gently clear snow, leaves and debris from around the unit by hand. Keep 2 feet of clearance.
  - Do not chip ice off the coil.
- **Breaker or disconnect:** if the unit appears locked out, reset it once. Turn the thermostat off, switch off the breaker for 5 minutes, then restore power and turn the thermostat back on.
  - If short cycling returns, stop and call a technician. Do not keep resetting it.
- **Condensate:** confirm the indoor drain line and pan are not overflowing. A float switch can shut the system off repeatedly.
- **Panels:** make sure the indoor unit's access panels are fully seated.

## How a technician will diagnose it

- **Watch several full cycles** and time on/off periods. This separates thermostat cycling from safety trips.
- **Read board LEDs, fault history or communicating-thermostat codes** where the model supports them.
- **Measure static pressure and temperature rise** across the indoor coil.
- **Attach gauges** to check suction and discharge pressure, superheat and subcooling. If the charge is low, they will leak-search before recharging. A recharge without a leak search is a red flag on a quote.
- **Test the pressure switches, defrost sensor and defrost board.** This includes forcing a test defrost.
- **Check the run capacitor in µF, the contactor, the compressor amp draw and the wiring.**
- **Confirm the reversing valve shifts fully** by checking temperatures and pressures in both modes.
- **Evaluate equipment sizing** if all components test good.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Runs 2–5 min, reaches setpoint, stops | Thermostat setting, location, oversizing | Replace batteries, check heat-pump setting, look for heat sources near thermostat | Adjust CPH settings, relocate thermostat, evaluate sizing |
| Runs 1–3 min, stops, waits ~5 min, repeats | High-pressure trip from airflow | Replace filter, open registers | Static pressure test, blower/coil service, pressure switch test |
| Short runs, poor heat, frosty lines | Low refrigerant | None beyond filter check | Leak search, repair, recharge to spec |
| Fan stops outdoors, steam, frequent stops | Defrost cycling too often | Clear snow and debris around unit | Test defrost sensor and board, check sensor mounting |
| Compressor clicks off hot, restarts later | Overload, weak capacitor, failing contactor | One power reset only | Capacitor and contactor testing and replacement, amp draw check |
| Whole system shuts off repeatedly | Condensate float switch | Clear the visible drain line | Clean the drain and trap, inspect the pan |

## Repair costs

These are typical US ranges, including labor:

| Repair | Cost |
|---|---|
| Diagnostic visit | $100–$250 |
| Thermostat replacement | $150–$450 installed ($40–$250 for a DIY unit) |
| Run capacitor | $150–$400 |
| Contactor | $150–$350 |
| Pressure switch | $200–$450 |
| Defrost sensor | $150–$350 |
| Defrost or control board | $300–$800 |
| Leak search and repair, plus recharge | $400–$1,500+, depending on leak location and refrigerant type |
| Reversing valve replacement | $1,000–$2,500 |
| Compressor replacement | $1,800–$3,500+ (check whether Amana's limited warranty applies) |

## Related codes

- Amana AC Short Cycling: Causes, Fixes & Repair Costs
- Amana Heat Pump Frozen, Not Defrosting: Causes & Fixes
- Amana Heat Pump Stuck in Defrost Mode: Causes & Fixes
- Amana Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Amana Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Amana Heat Pump Not Heating: Causes, Fixes & Costs
- Amana AC Compressor Not Running: Causes, Fixes & Costs

---
title: "Carrier Heat Pump Short Cycling: Causes, Fixes & Costs"
code: "Short cycling"
description: "Why a Carrier heat pump short cycles: thermostat, airflow, refrigerant charge and pressure-switch causes, safe checks, and honest repair costs."
brand: carrier
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $2,500+ if a refrigerant leak or compressor issue is found"
appliesTo: "Carrier Performance, Comfort and Infinity heat pumps (e.g. 25HCB, 25HCC, 25VNA, 25HPB/25HNB series). Fault codes, anti-short-cycle timer length and pressure-switch lockout behavior vary by control board; Infinity and communicating Evolution/Infinity systems log codes at the wall control, while standard systems flash an LED on the outdoor board."
tags:
  - short-cycling
  - heat-pump
  - carrier
  - pressure-switch
  - airflow
  - thermostat
parts:
  - name: "Replacement air filter (match your filter size)"
    search: "MERV 8 HVAC air filter 16x25x1"
  - name: "Thermostat batteries"
    search: "AA alkaline batteries thermostat"
datePublished: 2026-10-11
dateModified: 2026-10-11
reviewedBy: ""
faq:
  - q: "How short is too short for a Carrier heat pump cycle?"
    a: "As a rough guide, cycles under about 10 minutes, repeated several times an hour in steady weather, point to a problem. Mild-weather days and two-stage or variable-speed models naturally run differently, so look at the pattern rather than a single short run."
  - q: "Is short cycling harmful to my heat pump?"
    a: "Yes. Frequent starts stress the compressor, contactor and start components, raise energy use and leave humidity high in summer. Carrier boards include a roughly five-minute anti-short-cycle delay to limit damage, but a repeated pattern still needs diagnosis."
  - q: "Can I just reset the heat pump to fix short cycling?"
    a: "You may cycle power once at the breaker or disconnect if the unit has locked out. If short cycling returns, stop resetting. Repeated resets can mask a pressure-switch trip that is protecting the compressor, so call a technician."
  - q: "Is this the same as my furnace short cycling?"
    a: "Not exactly. A heat pump short cycles mainly because of refrigerant pressure, airflow, defrost and thermostat problems, while a furnace short cycles because of flame sensing, limits and venting. If you have a dual-fuel system, check which equipment is running when cycles cut out."
---

## What this code means

"Short cycling" is a symptom, not a numbered fault. It means your Carrier heat pump starts, runs only a few minutes, shuts off and then restarts again soon after, without reaching or holding the thermostat setpoint for a normal period.

The most important distinction is whether the **thermostat** is ending the call or the **outdoor unit's safety controls** are ending it:

- **Thermostat-driven cycling:** the thermostat is satisfied quickly or loses its call. This is often due to placement, settings, a weak power supply or an oversized system.
- **Safety-driven cycling:** the high- or low-pressure switch, or the compressor's internal overload, opens. The outdoor control board then shuts the compressor off and applies an anti-short-cycle delay of about five minutes on most Carrier boards.

On many Carrier boards, repeated pressure-switch trips within a single thermostat call lead to a lockout, often after 3 to 4 trips. The lockout usually holds until power is cycled or the thermostat call is removed and restored. Some boards also auto-retry after a set time. The exact count and timing vary by board, so check the wiring-diagram label inside the outdoor unit's panel or your model's service literature.

Infinity and communicating systems usually display the cause, such as a high-pressure or low-pressure event, on the wall control. Standard units flash a status LED on the outdoor board, which a technician will read.

## Common causes, ranked by probability

1. **Restricted indoor airflow.** Common culprits are a dirty filter, closed or blocked registers, or a dirty indoor coil. In heating mode, weak airflow raises head pressure and can trip the **high-pressure switch**. In cooling mode, it can drop suction pressure and trip the **low-pressure switch** or freeze the coil.
2. **Thermostat issues.** Possible causes include a thermostat near a supply register, sunlight or a heat source, a too-narrow cycle rate setting, weak batteries, or a loose or intermittent thermostat wire that drops the call.
3. **Incorrect refrigerant charge, usually from a leak.** A low charge causes low-pressure trips and short runs. An overcharge can cause high-pressure trips.
4. **Dirty or blocked outdoor coil, or a weak outdoor fan.** In cooling mode, this raises head pressure and trips the high-pressure switch or the compressor overload. (If the fan isn't turning at all, see the related page.)
5. **Failing electrical components.** A weak run capacitor, a pitted contactor or a failing pressure switch can cause the compressor to overheat and cut out on its internal overload, or to drop out early.
6. **Metering-device or TXV restriction.** A restriction starves the evaporator and produces low-pressure trips.
7. **Oversized equipment or ductwork problems.** These cause the system to satisfy the thermostat too fast. This is most noticeable on single-stage systems in mild weather.
8. **Control board or sensor faults.** These include defrost-board issues or a faulty outdoor or coil temperature sensor on some models, which cause erratic starts and stops.

## Safe checks before you call anyone

- **Check the air filter.** Replace it if it's dirty or if you can't remember the last change. This is the single most common fix for pressure trips.
- **Open the registers and clear the returns.** Make sure supply registers are open and return grilles aren't blocked by furniture or rugs.
- **Check the thermostat.** Make sure it is set to the correct mode (Heat or Cool, not Emergency Heat). Replace the batteries if it uses them. Note whether it sits in sunlight, above a lamp or near a supply vent.
- **Look at the outdoor unit from outside.** Clear leaves, snow and debris from around the unit, keeping about 2 feet of clearance. You can gently hose dirt off the outside of the coil fins with the power off at the disconnect. Do not remove panels.
- **Make sure exterior panels are seated.** The panels on the indoor and outdoor units must be fully closed.
- **Check the condensate line (cooling season).** Look for a clogged drain line or a full secondary pan. Some systems have a float switch that shuts the system off when the pan fills.
- **Reset once if the unit has locked out.** Turn power off at the breaker or disconnect for 5 minutes, then restore it. If short cycling returns, stop and call a technician.
- **Record what you see.** Note the run times, the mode, the outdoor temperature and any wall-control message. This helps the technician.

## How a technician will diagnose it

- **Reads the fault history.** This means the outdoor board's LED flash codes, or the Infinity or Evolution wall-control service history, to tell high-pressure, low-pressure and overload events apart from simple thermostat cycling.
- **Checks the thermostat call.** The technician confirms whether the R-to-Y or communicating demand drops out when the unit stops, and checks the thermostat wiring and cycle settings.
- **Measures airflow.** This includes static pressure, blower setup and indoor coil condition.
- **Connects gauges or probes.** The technician measures suction and discharge pressure, superheat and subcooling, and compares them with Carrier's charging chart for the model, in the mode it was operating in.
- **Tests electrical components.** This covers capacitors, the contactor, compressor amp draw and winding resistance, and continuity across the high- and low-pressure switches.
- **Inspects the outdoor unit.** The technician looks at the outdoor coil, fan motor, metering device and TXV, and checks the defrost sensors and board where applicable.
- **Leak-tests if the charge is low.** If the system is low on refrigerant, the leak should be found before recharging. "Topping off" without a leak search is a red flag on a quote.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Runs 3–5 min, stops, restarts about 5 min later | Pressure-switch trip from airflow or charge | Replace filter, open vents | Gauges, superheat/subcooling, airflow test |
| Stops quickly, house never reaches setpoint, unit then locks out | Repeated high- or low-pressure trips | One power reset only | Read fault history, leak search, recharge |
| Short cycles only in cooling, outdoor unit very hot | Dirty outdoor coil, weak fan or capacitor | Clear debris, gently rinse coil from outside | Clean coil, test fan motor and capacitor |
| Ice on indoor lines plus short runs | Low charge or very low airflow | Replace filter, set to Off to thaw | Charge check, TXV and metering inspection |
| Thermostat reaches setpoint fast, rooms uneven | Thermostat location or oversizing | Check placement, cycle settings, batteries | Thermostat relocation, staging setup, load check |
| Random stops with thermostat display flicker | Loose thermostat wire or power loss | Replace batteries | Repair wiring, check transformer |
| Compressor hums or clicks off, then retries | Weak capacitor, contactor or overload | None beyond one reset | Electrical tests, replace component |

## Repair costs

Typical US ranges, including parts and labor (these vary by region and model):

| Repair | Typical cost |
|---|---|
| Air filter (DIY) | $10–$40 |
| Service call and diagnosis | $100–$250 |
| Thermostat batteries, wiring repair or relocation | $0–$350 |
| New thermostat installed (Carrier Infinity controls cost more) | $150–$600 |
| Run capacitor | $150–$400 |
| Contactor | $150–$350 |
| Pressure switch replacement | $200–$450 |
| Outdoor coil cleaning | $100–$300 |
| Outdoor fan motor | $350–$800 |
| Leak search and repair, plus recharge (Puron/R-410A or newer refrigerants; large leaks or coil replacement cost more) | $400–$2,500+ |
| TXV replacement | $600–$1,500 |
| Outdoor control or defrost board | $300–$800 |
| Compressor replacement | $1,800–$4,000+ (often weighed against replacing the system) |

Check your Carrier registration. Parts are often covered for 10 years if the unit was registered, but labor usually isn't.

## Related codes

- Carrier Furnace Short Cycling: Causes, Fixes & Costs
- Carrier Heat Pump Frozen and Not Defrosting: Causes & Fixes
- Carrier Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Carrier Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Carrier Heat Pump Not Cooling: Causes, Fixes & Costs
- Carrier Heat Pump Not Heating: Causes, Fixes & Costs
- Carrier Heat Pump Aux Heat On Constantly: Causes & Fixes
- Carrier Heat Pump Stuck in Defrost Mode: Causes & Fixes

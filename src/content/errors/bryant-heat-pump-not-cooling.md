---
title: "Bryant Heat Pump Not Cooling: Causes, Checks & Fixes"
code: "Not cooling"
description: "Bryant heat pump not cooling? Causes include reversing valve, O/B thermostat setup, low refrigerant and capacitor faults. Fixes and $0–$3,000+ costs."
brand: bryant
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $600 for typical electrical or valve-coil repairs; $1,200–$3,000+ for reversing valve or compressor replacement"
appliesTo: "Bryant split-system heat pumps (Legacy, Preferred and Evolution lines). Control boards, LED status codes, lockout timing and communicating vs. 24V thermostat setup vary by model and series. Check the wiring diagram and service manual for your exact model number."
tags:
  - bryant
  - heat-pump
  - not-cooling
  - reversing-valve
  - thermostat
  - refrigerant
parts:
  - name: "Replacement air filter (correct size for your return)"
    search: "MERV 8 air filter 16x25x1"
  - name: "Thermostat batteries"
    search: "AA lithium batteries thermostat"
  - name: "Heat pump compatible programmable thermostat"
    search: "heat pump thermostat O/B reversing valve programmable"
datePublished: 2026-11-11
dateModified: 2026-11-11
reviewedBy: ""
faq:
  - q: "Why is my Bryant heat pump blowing warm air in cooling mode?"
    a: "Usually the reversing valve is not switching to cooling. On Bryant equipment the O terminal energizes the valve in cooling. A thermostat set to B, a loose O wire, a failed valve solenoid coil or a stuck valve all leave the system heating when you want cooling."
  - q: "Can I just add refrigerant to fix it?"
    a: "No. Heat pumps do not use up refrigerant. Low charge means a leak, and handling refrigerant requires an EPA-certified technician. A proper repair finds and fixes the leak, then weighs in the correct charge."
  - q: "Does a Bryant heat pump reset itself after a fault?"
    a: "It depends on the board. Many units retry automatically after a short anti-short-cycle delay. Some Evolution and two-stage boards hold a hard lockout after repeated pressure or temperature trips until power is cycled. Reset the power once. If the fault returns, call a technician."
  - q: "Is it the heat pump or the indoor unit?"
    a: "Check the outdoor unit first. If the fan and compressor run but the air is warm, suspect the reversing valve or the charge. If the outdoor unit is silent, suspect power, the thermostat or a capacitor or contactor. If airflow indoors is weak, start with the filter."
---

## What this code means

"Not cooling" is not a stored fault code. It describes a symptom: your Bryant heat pump runs, or tries to run, in cooling mode but does not lower the indoor temperature.

What sets a heat pump apart from a straight AC is the **reversing valve**. Bryant and Carrier heat pumps energize the valve through the thermostat's **O** terminal in cooling. If that signal is missing or the valve sticks, the system delivers heat instead of cooling.

General AC-side causes are covered in our "Bryant AC Not Cooling" page, including:
- dirty coils
- frozen evaporators
- condensate float switches

This page focuses on heat-pump-specific causes.

On Evolution models with a communicating control, the thermostat or outdoor board may show a status or LED code that narrows things down. Codes and their meanings vary by series.

Whether a fault auto-resets also varies:
- **Auto-retry:** most boards impose a 5-minute anti-short-cycle delay and then try again.
- **Hard lockout:** some boards lock out after several pressure-switch or temperature trips in one call. These hold until power is cycled.

## Common causes, ranked by probability

1. **Thermostat set up wrong for the heat pump.** The thermostat is configured for B (energize in heat) instead of O, set to "Heat" or "Em Heat," or was recently replaced and miswired. This is very common after a DIY thermostat swap.
2. **Dirty filter or restricted airflow.** This reduces capacity and can freeze the indoor coil.
3. **Failed run capacitor or contactor at the outdoor unit.** The fan or compressor will not start, or it hums.
4. **Reversing valve solenoid coil failure or a stuck reversing valve.** The unit runs but blows warm air.
5. **Low refrigerant from a leak.** Indoor and outdoor coils are the common leak points.
6. **Dirty or blocked outdoor coil, or a failed outdoor fan motor.** This leads to high head pressure and pressure-switch trips.
7. **Defrost/control board fault.** The board fails to drop out of defrost or does not pass the O signal through.
8. **Compressor failure.** This is the least likely cause and the most expensive.

## Safe checks before you call anyone

- **Thermostat:** Set it to **Cool**, not Heat, Auto or Em Heat. Set it 3–5°F below room temperature and replace the batteries.
  - If you recently installed a new thermostat, check its installer settings. "Changeover valve" or "O/B" should be set to **O (energize in cool)** for Bryant.
  - Do not rewire anything at the equipment.
- **Air filter:** Replace it if it is dirty.
- **Breakers and disconnect:** Check the indoor furnace or air handler breaker and the outdoor unit breaker, plus the outdoor disconnect switch.
  - Reset a tripped breaker **once**.
  - If it trips again, stop and call a technician.
- **Lockout reset:** If the unit seems locked out, turn the power off at both breakers for 5 minutes, then restore it **once**. Repeated resets can damage the compressor.
- **Vents and registers:** Make sure supply and return grilles are open and unblocked.
- **Around the outdoor unit:** Clear leaves and debris from around the unit, keeping 2 feet of clearance. Do not open the unit.
- **Condensate:** Check that the drain line or pump is draining. A full float switch can shut down cooling.
- **Panels:** Make sure the indoor unit's access panels are fully seated. A loose door switch panel stops the blower.

If the outdoor unit runs but the air stays warm after these checks, call a technician.

## How a technician will diagnose it

A competent tech will typically work through these steps:

1. **Verify the thermostat call.** They confirm 24V on Y and O (or the communicating equivalent on Evolution) at the outdoor unit with cooling called. This separates a thermostat or wiring problem from an equipment problem.
2. **Read board LEDs and fault history.** Evolution and two-stage boards store recent faults, such as high or low pressure and lockouts.
3. **Check the reversing valve.**
   - They measure voltage at the solenoid coil and check the coil's resistance.
   - They feel or measure line temperatures to see whether the valve has shifted.
   - A coil can be replaced without opening the refrigerant system. Replacing the valve body cannot.
4. **Test electrical components.** They check the capacitor in microfarads, the contactor's contacts, and the compressor and fan motor windings and amp draw.
5. **Measure refrigerant performance.** They take superheat or subcooling readings against Bryant's charging chart. If the charge is low, they leak-search before recharging.
6. **Inspect the coils and airflow.** This includes static pressure, temperature split, and the condition of the outdoor coil.

Be wary of a quote that recharges refrigerant without a leak search. Also be wary of a "new compressor" verdict without capacitor, contactor and winding tests.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Warm air in Cool mode, outdoor unit running | Thermostat O/B setting, reversing valve coil or stuck valve | Confirm Cool mode and the O/B setting | Test O signal and coil, replace coil or valve |
| Outdoor unit silent, indoor fan runs | Breaker, disconnect, contactor, thermostat wiring | Check breakers and disconnect, reset once | Test 24V, contactor, wiring |
| Outdoor unit hums, fan does not spin | Failed capacitor or fan motor | Turn off power, call a pro | Replace capacitor or fan motor |
| Runs constantly, slightly cool air, ice on lines | Low refrigerant or restricted airflow | Replace filter, open vents, turn system off to thaw | Leak search, repair, recharge |
| Starts, shuts off, then locks out | High or low pressure trips, dirty outdoor coil | Clear debris, reset power once | Read fault history, clean coil, check charge and fan |
| Board LED or thermostat shows fault | Control board or sensor issue | Note the code, reset power once | Diagnose by service manual, replace board |
| Indoor blower off | Panel not seated, condensate float switch | Seat panels, clear condensate line | Check door switch, blower, board |

## Repair costs

These are typical US ranges including labor. Prices vary by region, warranty status and tonnage.

| Repair | Typical cost |
|---|---|
| Thermostat reconfiguration or service call | $90–$200 |
| New heat-pump thermostat (installed) | $150–$450 |
| Run capacitor | $150–$400 |
| Contactor | $150–$350 |
| Reversing valve solenoid coil | $150–$400 |
| Reversing valve replacement (brazing, evacuation, recharge) | $1,000–$2,500 |
| Leak search and repair plus recharge | $300–$1,500+ |
| Outdoor fan motor | $350–$800 |
| Defrost/control board | $300–$900 (Evolution boards at the higher end) |
| Compressor replacement | $1,800–$4,000+ |

Bryant parts warranties are typically 10 years with registration, but they often exclude labor and refrigerant. Check your registration before approving major work.

## Related codes

- Bryant AC Not Cooling: Causes, Checks & Fixes covers coil, frozen evaporator and AC-side causes.
- Bryant Heat Pump Not Heating: Causes, Checks & Fixes covers defrost and reversing valve issues in heating mode.
- Bryant Mini-Split Not Cooling: Causes, Checks & Fixes is for ductless systems.
- Bryant Furnace Code 41: Blower Motor Fault Fixes applies if the indoor blower in a furnace-paired system will not run.
- Bryant Furnace Code 45: Control Circuitry Lockout Fixes applies to indoor control board faults on dual-fuel systems.

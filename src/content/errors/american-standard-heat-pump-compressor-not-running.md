---
title: "American Standard Heat Pump Compressor Not Running: Fixes"
code: "Compressor not running"
description: "American Standard heat pump compressor won't run? Causes include E-heat mode, lockouts, capacitor, and contactor faults, plus fixes and repair costs."
brand: american-standard
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150-$450 for capacitor or contactor, $1,800-$4,500+ for compressor replacement"
appliesTo: "American Standard split-system heat pumps, including Silver, Gold and Platinum series and AccuLink communicating systems. Defrost/control board type, fault indication (LED flashes vs. thermostat alerts), lockout behavior and inverter (variable-speed) drive diagnostics vary by model and board."
tags:
  - heat-pump
  - compressor
  - american-standard
  - not-heating
  - pressure-switch
  - capacitor
parts:
  - name: "HVAC air filter (correct size for your air handler or return)"
    search: "HVAC air filter MERV 8"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
datePublished: 2026-11-24
dateModified: 2026-11-24
reviewedBy: ""
faq:
  - q: "Why does my American Standard heat pump still blow warm air when the compressor isn't running?"
    a: "The electric backup (auxiliary or emergency) heat strips in the indoor air handler can carry the load by themselves. You stay warm, but you are paying resistance-heat prices, often two to three times the cost of running the heat pump. A warm house does not mean the compressor is working."
  - q: "Is it normal for the compressor to stop in very cold weather?"
    a: "Sometimes. Many American Standard thermostats and communicating controls can be set with a compressor lockout temperature or balance point. Below that outdoor temperature the system uses backup heat only. Check your thermostat's installer settings before you assume the compressor has failed."
  - q: "Will the compressor restart on its own?"
    a: "It depends on the cause. The anti-short-cycle delay clears in about five minutes. A tripped internal compressor overload resets once the compressor cools, which can take an hour or more. On many boards, repeated pressure-switch trips cause a lockout that holds until power is cycled. Reset once at most. If the compressor stops again, call a technician."
  - q: "Can I just replace the capacitor myself?"
    a: "No. A capacitor can hold a dangerous charge even with the power off, and it sits inside the energized outdoor cabinet. Testing and replacing it is technician work. Fortunately it is one of the cheaper repairs."
---

## What this code means

"Compressor not running" is a symptom, not a numbered fault code. On an American Standard heat pump, it means the outdoor unit isn't pumping refrigerant even though the thermostat is calling for heat or cooling.

The outdoor fan may still spin, or the whole outdoor unit may sit silent. The indoor blower usually keeps running.

This page covers what is distinct to heat pumps. In heating mode, electric backup heat often hides the problem. Defrost and low-temperature lockouts can stop the compressor on purpose. In cooling mode, the causes overlap with the AC version of this problem (see Related codes).

Some American Standard outdoor boards report the reason with LED flash codes. AccuLink communicating systems display an alert on the thermostat. The meaning of these codes varies by board, so read them against the wiring diagram and fault label inside your unit's service panel. A technician should open that panel, not you.

**Reset behavior varies:**
- The anti-short-cycle delay clears automatically.
- The internal compressor overload resets automatically once it cools.
- On many models, repeated high- or low-pressure trips latch a lockout that holds until power is cycled.

## Common causes, ranked by probability

1. **Thermostat set to Emergency Heat, or a compressor lockout temperature.** Emergency Heat disables the compressor on purpose. A compressor lockout or balance-point setting does the same below a set outdoor temperature.
2. **Normal delays.** The anti-short-cycle timer (usually around 5 minutes) holds the compressor off after a restart. Defrost transitions also pause the compressor briefly. These are normal unless the compressor stays off.
3. **Failed run or dual capacitor.** This is the most common component failure. The compressor hums or clicks but won't start, then trips its internal overload.
4. **Failed or pitted contactor, or a low-voltage control problem.** The contactor never pulls in. Causes include a bad contactor coil, a broken thermostat wire, or a blown control fuse.
5. **High- or low-pressure switch trip, or board lockout.**
   - Low pressure usually points to low refrigerant (a leak) or a frozen outdoor coil.
   - High pressure in heat mode often points to a restricted indoor airflow path, such as a dirty filter or closed registers.
6. **Compressor thermal overload tripped.** The compressor overheats from hard starting, low charge or high pressures, then stays off until it cools.
7. **Control board or inverter drive fault.** On variable-speed Platinum models, the inverter drive can be the culprit. It has its own fault reporting, so diagnosis is model-specific.
8. **Failed compressor.** The windings are open or shorted to ground, or the compressor is mechanically seized. This is the least likely cause, and a technician should only conclude it after ruling out the items above.

## Safe checks before you call anyone

- **Thermostat mode.** Confirm Heat (not Emergency Heat or Aux) or Cool is selected and the setpoint is several degrees past room temperature. Replace the thermostat batteries if it uses them.
- **Wait 5–10 minutes.** After any setting change or power interruption, give the anti-short-cycle delay time to clear before judging.
- **Lockout settings.** If your thermostat manual shows a compressor lockout or balance-point setting, note its value for the technician. Don't change installer settings you're unsure about.
- **Air filter.** Replace it if it's dirty. A clogged filter can trip the high-pressure switch in heating mode.
- **Registers and returns.** Open supply registers and clear return grilles.
- **Breakers and disconnect.** Check that both the outdoor-unit breaker and the air-handler breaker are on, and that the outdoor disconnect switch is in place. Reset a tripped breaker once only. If it trips again, stop and see the Breaker Keeps Tripping page.
- **One power-cycle reset.** If you suspect a lockout, turn the system off at the thermostat. Switch the breakers off for 5 minutes, then back on. Do this once. If the compressor stops again, call a technician.
- **Outdoor unit exterior.** Clear snow, ice buildup, leaves and debris from around the unit. Confirm the outdoor panels are seated. Do not chip ice off the coil.
- **Condensate.** Make sure the indoor condensate line and pan aren't overflowing. Some air handlers have a float switch that shuts the system down.

## How a technician will diagnose it

- Read any outdoor board LED codes or AccuLink alerts, and check the thermostat configuration, including lockout temperature and emergency heat.
- Confirm 24V at the contactor coil and check that the contactor pulls in. Measure line voltage across the contacts.
- Test the capacitor with a meter (microfarad reading against its rating) and check for bulging or leaking.
- Measure compressor winding resistance (common, start, run) and check for a short to ground. If the compressor is hot, they should allow time for the internal overload to reset.
- Measure amp draw on startup. A high locked-rotor current suggests a hard-start condition or a seized compressor.
- Connect gauges and check suction/discharge pressures, superheat and subcooling. Inspect the pressure switches for continuity.
- On inverter models, check drive fault history and communication with the outdoor board.

**Red flag:** a quote for a new compressor without documented winding, capacitor and amp-draw tests.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Warm air indoors, outdoor unit silent | Emergency Heat mode or compressor lockout temperature | Set mode to Heat and check lockout settings | Reconfigure thermostat or control |
| Outdoor unit hums or clicks, no start | Failed capacitor or hard start | Turn system off to protect the compressor | Test and replace capacitor; add hard-start kit if needed |
| Outdoor unit fully silent, breaker on | Contactor, control fuse or low-voltage wiring | Check breakers and disconnect; one reset | Test contactor and 24V circuit; repair wiring or fuse |
| Runs briefly, then stops and stays off | Pressure-switch lockout | Change filter, open registers, one power cycle | Gauge check, leak search, switch test |
| Stops after long run, restarts an hour later | Internal thermal overload | Note the timing for the technician | Find the overheating cause (charge, capacitor, airflow) |
| Board flashing, unit idle | Control board or inverter fault | Note the flash pattern | Diagnose board or drive and replace if confirmed |
| Breaker trips when compressor tries to start | Shorted or grounded compressor | Do not keep resetting | Winding and ground test; compressor or unit replacement |

## Repair costs

These are typical US installed prices, including labor:

| Repair | Typical cost |
|---|---|
| Diagnostic visit | $80–$200 |
| Thermostat setting correction | Usually just the visit fee |
| Run or dual capacitor | $150–$400 |
| Contactor | $150–$450 |
| Hard-start kit | $200–$450 |
| Pressure switch | $200–$500 |
| Leak repair and refrigerant recharge | $400–$1,500+ |
| Outdoor control or defrost board | $350–$900 |
| Inverter drive (variable-speed models) | $800–$2,000+ |
| Compressor replacement | $1,800–$4,500+ |

On an older unit, a full heat pump replacement ($5,000–$12,000+) may make more sense than a new compressor. Check the registered warranty first: American Standard compressor coverage is often 10–12 years with registration, though labor usually isn't covered.

## Related codes

- American Standard AC Compressor Not Running: Causes & Fixes
- American Standard Heat Pump Not Heating: Causes & Fixes
- American Standard Heat Pump Aux Heat Always On: Fixes
- American Standard Heat Pump Breaker Keeps Tripping: Fixes
- American Standard Heat Pump Outdoor Fan Not Spinning: Fixes
- American Standard Heat Pump Frozen, Not Defrosting: Fixes
- American Standard Heat Pump Short Cycling: Causes & Fixes
- American Standard Heat Pump Not Cooling: Causes & Fixes

---
title: "Amana Heat Pump Compressor Not Running: Causes & Fixes"
code: "Compressor not running"
description: "Amana heat pump compressor not running? Learn the likely causes (capacitor, contactor, lockout, low charge), safe checks, and repair costs from $0 to $3,500+."
brand: amana
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150-$450 for capacitor or contactor; $1,800-$3,500+ if the compressor fails"
appliesTo: "Amana single-stage and two-stage split heat pumps (ASZ, DSZ series and similar) with a defrost control board, plus communicating/inverter models (e.g. AVZC). The diagnostic LED codes, lockout timing and reset behavior vary by control board and model. Check the wiring diagram and fault-code label inside your outdoor unit's service panel, or the installation manual."
tags:
  - amana
  - heat-pump
  - compressor
  - capacitor
  - contactor
  - lockout
parts:
  - name: "Replacement HVAC air filter (match your size)"
    search: "MERV 8 furnace air filter 16x25x1"
  - name: "AA alkaline batteries for thermostat"
    search: "AA alkaline batteries 8 pack"
datePublished: 2026-11-24
dateModified: 2026-11-24
reviewedBy: ""
faq:
  - q: "Why does my Amana heat pump fan run but the compressor stays off?"
    a: "This usually points to a failed run capacitor, a worn contactor, a tripped pressure switch, or a defrost-board lockout. The outdoor fan and the compressor often share a dual capacitor. If only the fan section of the capacitor still works, the fan spins while the compressor hums or stays silent."
  - q: "Will my Amana heat pump reset itself after a compressor lockout?"
    a: "It depends on the board. Many Amana defrost controls hold a soft lockout and retry after a delay of several minutes. Repeated pressure-switch trips can cause a hard lockout that stays in place until power or the thermostat call is cycled. Reset it once. If it locks out again, call a technician."
  - q: "Can I still heat my home if the compressor won't run?"
    a: "Usually yes, if your system has electric backup heat strips. Setting the thermostat to Emergency Heat runs the strips without the compressor. This costs a lot more to operate, so treat it as a stopgap until the repair, not a long-term fix."
  - q: "Is a heat pump compressor that won't start always a dead compressor?"
    a: "No. Most no-start calls turn out to be a capacitor, contactor, or control problem that costs a few hundred dollars or less. A compressor is only condemned after a technician measures the winding resistance and checks for shorts to ground."
---

## What this code means

"Compressor not running" is a symptom, not a numbered fault code. It means your Amana heat pump's outdoor compressor is not starting even though the system is calling for heat or cooling.

You may notice any of these signs:
- The outdoor fan spins, but the unit makes no compressor hum.
- The unit hums briefly and then clicks off.
- The outdoor unit stays completely silent.

Indoors, you'll get lukewarm air in heat mode. If you have backup heat strips, they may carry the load, so the aux heat light stays on.

This page focuses on what is specific to heat pumps: reversing-valve operation, defrost-board lockouts, and heating-season behavior. If you also run Amana central AC equipment, the general AC no-start causes are covered on the separate AC compressor page.

Many Amana heat pumps use a defrost control board that watches the high-pressure switch and, on some models, the low-pressure switch. When a switch opens, the board stops the compressor. Lockout behavior varies by board:
- **Most boards** retry after a timed delay. This is a soft lockout.
- **Some boards** enter a hard lockout after repeated trips. A hard lockout holds until power is cycled.

Communicating models report specific fault codes on the thermostat or on the outdoor board's LED. Check the label inside your unit's service panel or your installation manual for the exact meaning.

## Common causes, ranked by probability

1. **Failed or weak run capacitor.** This is the most common cause. Heat, age, and power surges wear out the dual run capacitor. The compressor hums or does nothing while the fan may still run.
2. **Worn or pitted contactor.** The 24V coil may pull in, but burned contacts don't pass power. Ants and debris can also block the contacts.
3. **Pressure-switch trip or board lockout.** The high-pressure switch can trip because of a dirty or iced coil, a failed outdoor fan, or overcharge. The low-pressure switch can trip because of low refrigerant or a restriction. The board then delays restarting or locks out.
4. **Compressor thermal overload open.** An overheated compressor shuts itself off internally. This often happens after hard starts or low charge. It can take an hour or more to cool and reset.
5. **Control or low-voltage problem.** Possible causes include a blown 3A fuse on the indoor board, a broken thermostat wire to the outdoor unit, a failed defrost board, or a thermostat configured wrong (for example, set as a conventional system instead of a heat pump).
6. **Low refrigerant charge from a leak.** This keeps the low-pressure switch open and can overheat the compressor.
7. **Failed compressor.** Shorted or open windings, a grounded compressor, or a mechanically locked compressor. This is the least common cause, and a technician should only conclude it after ruling out everything above.
8. **Inverter models only.** On communicating/inverter units, inverter board faults or communication errors can prevent the compressor from starting. Read the stored fault code.

## Safe checks before you call anyone

- **Thermostat:** Confirm it's in Heat (or Cool) mode and that the setpoint is at least 3°F past room temperature. Replace the batteries if the display is weak.
- **Anti-short-cycle delay:** Wait 5 minutes after any thermostat change. Amana boards hold off compressor restarts on purpose.
- **Breakers and disconnect:** Check both the outdoor-unit breaker and the air-handler breaker in the panel. Also check that the outdoor disconnect switch or pull-out block is on. If a breaker has tripped, reset it once. If it trips again, stop and call a technician.
- **One reset for a lockout:** Turn the thermostat off. Switch off both breakers for 5 minutes, then restore power. Do this only once.
- **Air filter:** Replace it if it's dirty. Restricted airflow can trip pressure switches in heat mode.
- **Outdoor unit surroundings:** Look without touching. Make sure snow, leaves, and debris aren't blocking the coil, and that the service panel is seated and closed.
- **Supply vents and return grilles:** Make sure they're open and unblocked.
- **Condensate line:** If your air handler has a float switch, a clogged condensate line can cut power to the thermostat circuit. Clear a visible clog at the drain opening.
- **Emergency Heat:** If you have heat strips and it's cold out, set the thermostat to Emergency Heat to stay warm while you wait for service.

Do not open the outdoor unit, poke the contactor, or try to restart the compressor by hand. The capacitor stores a dangerous charge even when the power is off.

## How a technician will diagnose it

- **Confirm the call:** Check for 24V at the outdoor unit and at the contactor coil (Y and C). Read the defrost board's LED or the communicating fault history.
- **Check line voltage:** Measure 240V at the disconnect and across the contactor, both line side and load side. A voltage drop across closed contacts means the contactor needs replacing.
- **Test the capacitor:** Discharge it first, then measure microfarads on the HERM and FAN terminals against the rating printed on the label. A reading more than about 6% low is a failure.
- **Test the compressor:** Measure winding resistance (C-S, C-R, S-R) and do a megohm or ground check. If all windings show open, the internal overload has tripped, so the tech waits for it to cool before condemning the compressor. A locked rotor may get a hard-start kit trial.
- **Check pressure switches:** Test them for continuity, then connect gauges. Compare pressures and superheat/subcooling to the charging chart. In heat mode, the tech may need to check the charge in cooling mode or weigh it in, per Amana's guidance.
- **Check the reversing valve and defrost operation:** Confirm the board isn't stuck holding the compressor off, and inspect the defrost sensor.

Red flags in a quote:
- Condemning the compressor without winding or ground readings.
- Adding refrigerant without finding the leak.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan runs, compressor silent or humming | Weak or failed dual run capacitor | Turn the unit off to protect the compressor and use Emergency Heat | Test and replace the capacitor |
| Outdoor unit completely silent | Tripped breaker, disconnect off, or no 24V signal | Check the breakers and disconnect, reset once | Check the indoor board fuse, wiring, and contactor coil |
| Contactor pulled in, but nothing runs | Burned contactor contacts | None | Replace the contactor |
| Runs a few minutes, then stops and retries | Pressure-switch trip or board soft lockout | Change the filter and clear debris around the outdoor unit | Find the root cause: charge, airflow, fan motor |
| Stays off until power is cycled | Hard lockout on the defrost board | Do one power reset | Read fault history and repair the cause |
| Compressor clicks off, cabinet very hot | Thermal overload | Let it rest and call for service | Check the charge, capacitor, and voltage |
| Breaker trips when the compressor starts | Shorted or grounded compressor | Don't reset repeatedly | Megohm test, then replace the compressor or system |
| Fault code shown on thermostat or LED | Inverter or communication fault (communicating models) | Note the code | Diagnose the inverter board and communication wiring |

## Repair costs

Typical US ranges, including parts and labor:

| Repair | Typical cost |
|---|---|
| Diagnostic or service call | $90–$200 |
| Run capacitor replacement | $150–$400 |
| Contactor replacement | $150–$350 |
| Hard-start kit | $200–$400 |
| Pressure switch replacement | $175–$400 |
| Defrost or control board | $350–$750 |
| Inverter board (communicating models) | $600–$1,500 |
| Leak search and repair plus recharge | $400–$1,500+, depending on leak location and refrigerant type (R-410A vs R-454B) |
| Compressor replacement | $1,800–$3,500+ |

Amana's lifetime compressor replacement coverage applies to qualifying registered units. Labor is usually not included, so check your registration.

If your heat pump is more than 12 years old, or the compressor fails out of warranty, get a quote for full replacement to compare.

## Related codes

Amana Heat Pump Not Heating: Causes, Fixes & Costs. Amana Heat Pump Not Cooling: Causes, Fixes & Costs. Amana Heat Pump Breaker Keeps Tripping: Causes & Fixes. Amana Heat Pump Outdoor Fan Not Spinning: Causes & Fixes. Amana Heat Pump Short Cycling: Causes, Fixes & Costs. Amana Heat Pump Aux Heat On Constantly: Causes & Fixes. Amana Heat Pump Blowing Cold Air in Heat Mode: Fixes. Amana AC Compressor Not Running: Causes, Fixes & Costs.

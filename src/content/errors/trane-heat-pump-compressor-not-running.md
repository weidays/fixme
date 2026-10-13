---
title: "Trane Heat Pump Compressor Not Running: Causes & Fixes"
code: "Compressor not running"
description: "Trane heat pump compressor not running? Learn the likely causes (capacitor, contactor, lockout, pressure switch), safe checks, and repair costs."
brand: trane
equipment: heat-pump
severity: pro
costRange: "$120 – $350 for a capacitor or contactor; $1,800 – $4,500+ for compressor replacement"
appliesTo: "Trane XR, XL, XV and Link-series heat pumps. Single- and two-stage units use a defrost/control board with fault LEDs. Variable-speed XV and Link units use an inverter drive with communicating diagnostics shown on the thermostat or drive. Fault codes, lockout timing and reset behavior vary by model and board."
tags:
  - trane
  - heat-pump
  - compressor
  - compressor-not-running
  - outdoor-unit
parts:
  - name: "Furnace/air handler air filter"
    search: "HVAC air filter (match your existing size)"
  - name: "AA alkaline thermostat batteries"
    search: "AA alkaline batteries thermostat"
datePublished: 2026-10-13
dateModified: 2026-10-13
reviewedBy: ""
faq:
  - q: "Why is my Trane outdoor fan running but the compressor isn't?"
    a: "This usually points to a failed run capacitor (often the compressor side of a dual capacitor) or a compressor that has tripped its internal overload. It can also mean the compressor windings have failed. Turn the system off and call a technician. A compressor that keeps trying to start without running can overheat and damage itself."
  - q: "Can I reset my Trane heat pump compressor myself?"
    a: "You can do one reset. Turn the thermostat off, switch off the outdoor disconnect and the breaker for 5 minutes, then restore power. Many Trane boards also enforce a built-in delay of about 5 minutes before the compressor restarts. If the compressor still won't run, or it locks out again, stop and call a pro. Repeated resets can hide a serious fault."
  - q: "Is a compressor that won't run always a dead compressor?"
    a: "No. Most cases come from cheaper parts: a run capacitor, the contactor, a tripped pressure switch, a lockout on the control board, or a thermostat call that never reaches the unit. True compressor failure is less common. A technician should confirm it with winding resistance and insulation tests before quoting a replacement."
  - q: "Will my house still heat if the compressor is not running?"
    a: "If you have electric auxiliary or emergency heat, it can keep the house warm. It is much more expensive to run, though. Switching the thermostat to Emergency Heat until the repair is a reasonable short-term step. In cooling mode there is no backup."
---

## What this code means

"Compressor not running" is a symptom, not a single Trane fault code. The thermostat is calling for heating or cooling, but the compressor in the outdoor unit stays silent. You may notice:

- the indoor blower runs but the air is room temperature, or the system relies on aux heat
- the outdoor fan spins but the compressor doesn't
- the outdoor unit hums or clicks and then goes quiet

How a Trane heat pump reports this depends on the model:

- **Single- and two-stage units (XR, XL, some XV models).** The defrost/control board may flash a fault LED for a pressure-switch trip or lockout. Many of these boards lock the compressor out after repeated pressure-switch trips within one call. The lockout typically holds until power is cycled or the thermostat call is removed. Exact counts and timing vary by board.
- **Variable-speed communicating units (XV18/XV20i, Link).** The inverter drive reports specific alerts on the ComfortLink/Link thermostat, such as high pressure, low pressure, overcurrent, or drive temperature. Some of these alerts clear automatically after a timed delay. Others lock the unit out until they are cleared.

The compressor also has an internal thermal overload. If it trips, the compressor can stay off for 30 minutes or more while it cools down, even though nothing visibly "fails."

## Common causes, ranked by probability

1. **Failed run capacitor (single/two-stage units).** This is the most common cause. The compressor hums or trips its overload, often while the outdoor fan still runs.
2. **Bad contactor or no 24V signal to it.** The contacts may be pitted or burned, the coil may have failed, or a thermostat/low-voltage wiring fault means the unit never receives a call.
3. **Pressure-switch trip or control-board lockout.** High pressure can come from a dirty coil or a failed outdoor fan. Low pressure can come from a refrigerant leak or a frozen indoor coil. Repeated trips put the board into lockout.
4. **Internal thermal overload open.** The compressor overheated from low charge, a weak capacitor, or high head pressure, and it is waiting to cool down.
5. **Power supply problems.** A tripped breaker or blown disconnect fuse on one leg of the 240V supply, or low voltage, can stop the compressor.
6. **Inverter drive fault (variable-speed models).** The drive reports overcurrent, communication, or temperature alerts, or the drive board itself has failed.
7. **Seized or failed compressor.** The windings may be open or shorted to ground, or the compressor may be mechanically locked. Expect a lockout and possibly a tripped breaker.

## Safe checks before you call anyone

- **Thermostat.** Confirm the mode (Heat/Cool) and a setpoint at least 3°F beyond room temperature. Replace the batteries if the screen is dim or blank.
- **Wait out the delay.** Trane units commonly hold the compressor off for about 5 minutes after any change or power interruption. Give it 10 minutes before you assume a fault.
- **Breakers and disconnect.** Check the outdoor unit's double-pole breaker and the disconnect switch by the unit. Reset a tripped breaker **once**. If it trips again, leave it off. See the related breaker article below.
- **One power-cycle reset.** Turn the thermostat off, then turn off the disconnect and the breaker for 5 minutes. Restore power, then the call. Do this only once.
- **Air filter.** In cooling, a clogged filter can freeze the indoor coil and trip the low-pressure switch; in heating, it can raise head pressure and trip the high-pressure switch. Replace it if it's dirty, using the size printed on your current filter.
- **Airflow.** Open the supply registers and clear the return grilles.
- **Outdoor unit.** Clear leaves, snow, and debris for 2 feet around it. Don't open the panels.
- **Condensate.** If the indoor unit has a float or overflow switch and the drain pan is full, clear the visible drain line or pan.
- **Emergency Heat.** In winter, select Emergency Heat on the thermostat to stay warm while you wait for service.

## How a technician will diagnose it

A good technician will typically:

- Read the board LEDs or communicating alerts and the fault history.
- Confirm there is 24V at the contactor coil and 240V on both legs at the line side.
- Check that the contactor pulls in and measure the voltage drop across its contacts.
- Test the run capacitor's microfarads against its rating.
- Check amp draw at startup. Locked-rotor amps mean the compressor is seized or the capacitor has failed.
- If the compressor is hot, let the internal overload reset before judging it.
- Measure compressor winding resistance (C-S, C-R, S-R) and do a megohm or ground test before condemning the compressor.
- Inspect the pressure switches and connect gauges to check refrigerant pressures, superheat, and subcooling.
- Look for the root cause of any pressure trip: a dirty coil, a failed outdoor fan, a leak, or low indoor airflow.
- On inverter models, check the drive diagnostics, the communication wiring, and the drive's input and output.

**Red flag:** a compressor replacement quote with no winding or amp-draw test results. Also ask for leak-search findings if refrigerant is being added.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor fan runs, compressor hums then stops | Failed run capacitor or tripped overload | Turn the system off; use Emergency Heat | Test and replace the capacitor; check amps |
| Outdoor unit completely silent | No 24V call, failed contactor, or power loss | Check the thermostat, breaker, and disconnect; do one reset | Test the contactor, low-voltage wiring, and fuses |
| Runs briefly, then shuts down repeatedly; board LED flashing | Pressure-switch trips leading to lockout | Replace the filter, clear around the unit, do one reset | Gauge the system, find the leak or airflow fault, check the switch |
| Compressor off; unit very hot | Internal overload open | Wait 30–60 minutes with the system off | Find the cause: charge, capacitor, or head pressure |
| Alert on the ComfortLink/Link thermostat | Inverter drive fault | Note the alert; do one power cycle | Drive diagnostics; repair the drive or communication wiring |
| Breaker trips when the compressor starts | Shorted or grounded compressor, or wiring fault | Leave the breaker off | Megohm test; replace the compressor or wiring |

## Repair costs

| Repair | Typical US cost |
|---|---|
| Thermostat batteries / filter | $5 – $40 |
| Service call / diagnostic | $90 – $200 |
| Run capacitor (dual or single) | $120 – $300 |
| Hard-start kit | $150 – $350 |
| Contactor | $150 – $350 |
| Pressure switch | $200 – $450 |
| Control/defrost board | $400 – $1,000+ |
| Inverter drive board (variable-speed) | $800 – $2,000+ |
| Leak repair plus refrigerant recharge | $400 – $1,500+ |
| Compressor replacement | $1,800 – $4,500+ |

Costs vary by region and by whether the unit is still under warranty. Many Trane registered units carry a 10-year limited compressor warranty, but labor is often not included. Compressor coverage differs by model and registration, and some newer models carry different terms, so check the warranty terms on your own registration before approving a repair.

## Related codes

- Trane Heat Pump Breaker Keeps Tripping: Causes & Fixes
- Trane Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Trane Heat Pump Not Heating: Causes, Fixes & Costs
- Trane Heat Pump Not Cooling: Causes, Fixes & Costs
- Trane Heat Pump Short Cycling: Causes, Fixes & Costs
- Trane Heat Pump Blowing Cold Air in Heat Mode: Fixes
- Trane Heat Pump Aux Heat On Constantly: Causes & Fixes
- Trane Heat Pump Frozen, Not Defrosting: Causes & Fixes

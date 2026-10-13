---
title: "Lennox Heat Pump Compressor Not Running: Causes & Fixes"
code: "Compressor not running"
description: "Lennox heat pump compressor not running? Learn the causes (capacitor, contactor, lockout, controls), safe checks, and repair costs from $0 to $3,500+."
brand: lennox
equipment: heat-pump
severity: pro
costRange: "$0 DIY reset – $150-$400 for a capacitor or contactor – $1,800-$3,500+ for a compressor replacement"
appliesTo: "Lennox split-system heat pumps, including Merit (ML14XP1), Elite (EL16XP1, EL18XPV) and Dave Lennox Signature (XP25, SL25XPV, and the older, discontinued XP21) series. Single- and two-stage units use a contactor and a run capacitor. Variable-capacity iComfort/S30/S40 units use an inverter drive and show alarm codes on the thermostat instead. Defrost board LED flash patterns and lockout timing vary by model, so check the wiring diagram on the inside of the access panel."
tags:
  - lennox
  - heat-pump
  - compressor
  - capacitor
  - contactor
  - high-pressure-lockout
  - not-heating
  - not-cooling
parts:
  - name: "Pleated HVAC air filter (correct size)"
    search: "MERV 8 pleated air filter 16x25x1"
  - name: "Thermostat batteries"
    search: "AA lithium batteries thermostat"
datePublished: 2026-10-13
dateModified: 2026-10-13
reviewedBy: ""
faq:
  - q: "Why does my Lennox outdoor fan run but the compressor doesn't?"
    a: "The usual causes are a failed run capacitor, a compressor that has tripped its internal overload, or a pitted contactor contact. The outdoor fan and the compressor often share a dual capacitor, so the fan can still spin while the compressor side has failed. A technician needs to test this with the power off and the capacitor discharged."
  - q: "Can I reset my Lennox heat pump to get the compressor running?"
    a: "You can reset it once. Turn the thermostat off, switch off the outdoor disconnect and the breaker for 5 minutes, then restore power and call for heat or cool. Many Lennox defrost boards lock the compressor out after several pressure-switch trips in one thermostat call. Depending on the board, the lockout clears when power is cycled or when the thermostat call is removed. Trip count and reset method vary by defrost board. If the compressor stops again, don't keep resetting it. Repeated lockouts point to a real fault that can damage the compressor."
  - q: "Is it safe to run my heat pump if the compressor isn't working?"
    a: "In heat mode, the backup electric strips or furnace may keep the house warm, but at high operating cost. In cooling mode you get only fan air. If the compressor hums without starting, turn the system off at the thermostat. Repeated failed starts overheat the windings."
  - q: "How long should the compressor wait before restarting?"
    a: "Most Lennox defrost and control boards have an anti-short-cycle delay of about 5 minutes after power-up or after a cycle ends. A few minutes of silence after a reset is normal, so wait at least 5 to 10 minutes before deciding it has failed."
---

## What this code means

"Compressor not running" is a symptom, not a single numbered fault code. The thermostat is calling for heating or cooling, but the outdoor compressor isn't operating. You may notice one or more of these signs:

- The outdoor fan spins but the unit is quiet.
- The unit hums and then clicks off.
- Nothing outdoors runs at all.

On standard Lennox single- and two-stage heat pumps, the compressor is switched by a contactor. It is assisted by a run capacitor and protected by:

- a high-pressure switch
- a low-pressure (loss-of-charge) switch
- an internal thermal overload inside the compressor

The defrost control board also enforces a roughly 5-minute anti-short-cycle delay.

How the unit resets depends on what stopped it:

- **Pressure switch trips.** On many Lennox boards, these count toward a lockout after several trips in one thermostat call. Depending on the board, the lockout clears when power is cycled or when the thermostat call is removed. Trip count and reset method vary by defrost board.
- **Internal overload trips.** This resets on its own once the compressor cools, which can take 30 to 60+ minutes.

Variable-capacity models (SL25XPV, XP25, EL18XPV) work differently. An inverter drive runs the compressor, and these units report specific alarm codes on the iComfort or S30/S40 thermostat. Record any code shown, because it narrows the diagnosis considerably.

## Common causes, ranked by probability

1. **Failed or weak run capacitor.** This is the most common cause on Lennox and other split systems. Typical signs are a humming compressor or a fan that runs while the compressor doesn't.
2. **Contactor failure.** Pitted or burnt contacts, a failed coil, or insects jammed in the contacts can stop the compressor from getting power.
3. **Normal anti-short-cycle delay or board lockout.** The defrost board is waiting out its delay, or it has locked the compressor out after repeated high- or low-pressure switch trips.
4. **Compressor internal overload tripped.** The compressor has overheated. This is often caused by a dirty outdoor coil, a failed outdoor fan, low refrigerant, or low voltage. The compressor will feel hot and stay off until it cools.
5. **High- or low-pressure switch open.** A dirty coil or failed fan can cause high head pressure. A refrigerant leak can cause low charge. Either condition opens a switch and breaks the compressor circuit.
6. **No 24 V signal reaching the outdoor unit.** Possible causes include a thermostat setting or wiring problem, a blown control fuse on the indoor board, or a damaged low-voltage wire.
7. **Power supply problem.** This can be a tripped breaker, a pulled or failed outdoor disconnect, or low line voltage.
8. **Failed defrost or control board.** On inverter models, this includes the inverter drive.
9. **Compressor failure.** This covers a shorted, grounded, or open winding, or a mechanically seized compressor. It is the least likely cause, but the most expensive, and it should be confirmed only after the cheaper parts have been ruled out.

## Safe checks before you call anyone

- **Thermostat.** Confirm it is set to HEAT or COOL, not EMERGENCY HEAT or AUX. Set the temperature at least 3°F past the room temperature. Replace the batteries if the display is dim or blank.
- **Wait out the delay.** After any change, give the system 5 to 10 minutes before judging it.
- **Breakers and disconnect.** Check that the outdoor unit breaker and the air handler breaker are both on. Make sure the outdoor disconnect is fully seated or switched on. If a breaker has tripped, reset it once. If it trips again, stop and see [Lennox Heat Pump Breaker Keeps Tripping: Causes & Fixes](#related-codes).
- **One reset.** Turn the thermostat off, switch off the breakers for 5 minutes, and then restore power. Do this only once.
- **Air filter.** A clogged filter raises pressure in heat mode and lowers it in cooling mode. Either can trip the pressure switches. Replace the filter if it is dirty.
- **Outdoor unit airflow.** Look, without opening the unit, for leaves, snow, ice buildup, or plants blocking the coil. Clear debris by hand from outside the cabinet. Keep at least 2 feet of clearance around the unit.
- **Registers and condensate.** Open the supply registers. Check that the condensate drain isn't overflowing. A float switch on the indoor unit can cut off the cooling call.
- **Panels.** Make sure the indoor access panels are fully seated.

Stop there. Capacitors stay dangerously charged even after the power is off. Contactors, wiring, and pressure switches are all technician work.

## How a technician will diagnose it

- Ask about, or check, any alarm code on the thermostat and the LED flash pattern on the defrost board. Then compare it to the model's wiring diagram.
- Verify 24 V at the outdoor contactor coil (Y1/Y2), and line voltage both at the disconnect and across the contactor.
- Inspect the contactor contacts, and measure voltage drop across them while the unit runs.
- Discharge the run capacitor and test its microfarad (µF) value. A reading more than about 6% below the rating is a fail.
- Check the high- and low-pressure switches for continuity, then connect gauges to measure the refrigerant pressures.
- Measure the compressor winding resistances (C-R, C-S) and test the windings for a short to ground.
- If the compressor is hot, allow it to cool before condemning it.
- Measure amp draw on startup. A locked-rotor condition may call for a hard-start kit trial before replacement.
- On inverter units, review the inverter fault history and check the communication wiring.

Treat a "your compressor is dead" quote with caution if the technician hasn't tested the capacitor, the contactor, and the windings first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan runs, compressor silent | Failed capacitor or tripped overload | Turn the system off for 1 hour, then try once | Test and replace the capacitor; check why the overload tripped |
| Compressor hums, then clicks off | Weak capacitor or locked rotor | Turn off at the thermostat | Replace the capacitor, try a hard-start kit, test the windings |
| Nothing outdoors runs | No power or no 24 V signal | Check the thermostat, breakers, and disconnect | Test the contactor coil, control fuse, and low-voltage wiring |
| Runs a few minutes, then stops repeatedly | Pressure switch tripping or lockout | Replace the filter and clear the outdoor coil; reset once | Check the charge, fan, and coil; repair any leak |
| Thermostat shows an alarm (iComfort/S30) | Inverter or communication fault | Note the code; power-cycle once | Run inverter diagnostics; repair the board or drive |
| Breaker trips when compressor starts | Shorted or grounded compressor | Don't reset repeatedly | Megohm test; replace the compressor or the unit |

## Repair costs

These are typical US prices, including parts and labor.

| Repair | Typical cost |
|---|---|
| Service call or diagnostic | $90–$200 |
| Run capacitor | $150–$400 |
| Contactor | $150–$350 |
| Hard-start kit | $200–$450 |
| Pressure switch | $200–$450 (more if the refrigerant has to be recovered) |
| Refrigerant leak repair and recharge | $400–$1,500+ (R-410A or R-454B) |
| Defrost or control board | $350–$800 |
| Inverter board or drive (variable-capacity models) | $800–$2,000 |
| Compressor replacement | $1,800–$3,500+ |

If the compressor needs replacing, check the registered Lennox warranty. Compressor coverage is often 10 years, but labor is usually not included. On older units, replacing the whole outdoor unit may be the better value.

## Related codes

- Lennox Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Lennox Heat Pump Breaker Keeps Tripping: Causes & Fixes
- Lennox Heat Pump Not Heating: Causes, Fixes & Costs
- Lennox Heat Pump Not Cooling: Causes, Fixes & Costs
- Lennox Heat Pump Blowing Cold Air in Heat Mode: Fixes
- Lennox Heat Pump Aux Heat On Constantly: Causes & Fixes
- Lennox Heat Pump Short Cycling: Causes, Fixes & Costs
- Lennox Heat Pump Frozen and Not Defrosting: Fixes & Cost

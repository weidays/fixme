---
title: "American Standard Heat Pump Not Cooling: Causes & Fixes"
code: "Not cooling"
description: "American Standard heat pump not cooling? Learn the likely causes, from a stuck reversing valve to low charge, safe checks, and repair costs."
brand: american-standard
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $3,500+ if the compressor or outdoor coil must be replaced"
appliesTo: "American Standard split heat pumps (Silver, Gold and Platinum series, 4A6 model prefix, including Platinum variable-speed models). American Standard units share platforms with Trane. Single- and two-stage units use a defrost control board and a 24V reversing valve. Communicating (AccuLink/Link) systems show alerts on the thermostat or outdoor board instead. Which diagnostics are available depends on model and control."
tags:
  - heat-pump
  - not-cooling
  - reversing-valve
  - american-standard
  - cooling-mode
parts:
  - name: "Furnace/air handler air filter (match the size printed on your existing filter)"
    search: "MERV 8 HVAC air filter"
  - name: "AA lithium thermostat batteries"
    search: "AA lithium batteries"
datePublished: 2026-11-12
dateModified: 2026-11-12
reviewedBy: ""
faq:
  - q: "Why does my American Standard heat pump heat fine but not cool?"
    a: "This usually points to the reversing valve or its control circuit. A heat pump needs that valve to shift into cooling mode. If the valve coil, the wiring, or the thermostat O signal fails, or the valve sticks, the system can keep running in heat mode. A technician confirms this by measuring line temperatures and coil voltage."
  - q: "Can a heat pump be stuck in heating mode in summer?"
    a: "Yes. On American Standard heat pumps, the reversing valve is energized for cooling through the thermostat's O terminal. If that signal is missing or the valve sticks, warm air comes from the vents in cool mode. Check that the thermostat is set up as a heat pump with O energized in cooling. Valve or wiring repair is technician work."
  - q: "Should I keep resetting the heat pump if it won't cool?"
    a: "No. Do one breaker reset to clear any lockout. If the unit still won't cool, or it trips again, call a technician. Repeated restarts can damage a compressor that is overheating, short of refrigerant, or tripping on a pressure switch."
  - q: "Is a heat pump not cooling different from an AC not cooling?"
    a: "Most causes overlap, including a dirty filter, a failed capacitor, low refrigerant, and dirty coils. Heat pumps add heat-pump-only faults: a reversing valve stuck in heat, wrong thermostat O/B setup, and defrost board faults. This page focuses on those."
---

## What this code means

"Not cooling" is a symptom, not a stored fault code. It means your American Standard heat pump runs, or tries to run, in cool mode but the house doesn't get cooler.

A heat pump is an AC that can run in reverse. A reversing valve in the outdoor unit switches it between heating and cooling. On American Standard and Trane heat pumps, that valve is energized in **cooling**. The thermostat sends that signal on the O wire.

Because of this, a heat pump has extra ways to fail at cooling that a straight AC doesn't. If the valve doesn't shift, the unit runs and blows *warm* air while set to cool.

How the unit reports a problem depends on the model:

- **Single- and two-stage units** may show nothing, or blink an LED on the defrost board. That board sits behind the outdoor unit's service panel, so reading the LED is a technician task. Do not open the panel to look.
- **Communicating systems** (AccuLink / Link) show alerts on the thermostat or outdoor control.

Whether a lockout clears on its own varies by control. Many pressure and temperature trips reset automatically after a delay. Some lockouts hold until power is cycled. For general cooling causes shared with standard AC units, see the separate American Standard AC Not Cooling page.

## Common causes, ranked by probability

The order can shift with the season. In peak summer heat, capacitor and outdoor-unit failures may come up more often than airflow problems.

1. **Thermostat setup or setting.** Possible problems include:
   - The thermostat is not in Cool.
   - The setpoint is too high.
   - A new or replaced thermostat is configured as conventional AC/furnace instead of heat pump.
   - The thermostat is set to energize B instead of O. American Standard uses O for cooling.
2. **Restricted airflow.** A clogged filter, closed registers, or a dirty or iced indoor coil cuts cooling sharply.
3. **Outdoor unit not running or short-cycling.** Common causes are a failed run capacitor, a bad contactor, or a fan motor fault. A tripped high-pressure switch can also do it, often from a dirty outdoor coil or a dead fan.
4. **Reversing valve not shifting to cooling.** The cause may be:
   - A failed solenoid coil
   - No 24V on the O circuit
   - A defrost board fault
   - A mechanically stuck valve

   The telltale sign is warm air from the vents in cool mode.
5. **Low refrigerant charge (leak).** This shows up as weak cooling, ice on the lines or coil, and long run times. A leak must be found and repaired. Topping off the refrigerant does not fix it.
6. **Indoor blower problem.** The blower motor, capacitor, or control may have failed. On communicating systems, there may also be a communication fault between the indoor and outdoor units.
7. **Compressor failure.** Signs include a locked rotor, internal overload trips, or a failed inverter drive on variable-speed models. This is less common, but it is the most expensive cause.
8. **Undersized system or extreme heat.** At very high outdoor temperatures, a correctly working unit may hold only 15–20°F below outdoor temperature.

## Safe checks before you call anyone

- **Thermostat:** Confirm Cool mode and Auto fan. Set the temperature at least 3°F below room temperature. Replace the batteries if the screen is dim or blank.
- **Recent thermostat change?** If you can open it, check the installer settings in the thermostat's own menu. Confirm "heat pump" is selected and the changeover valve is set to energize in **cool (O)**. Do not rewire anything.
- **Air filter:** Replace it if it's gray or clogged. Use a filter that matches the size printed on the edge of your existing one. Then wait an hour and see if cooling improves.
- **Vents:** Open the supply registers and clear furniture away from the return grilles.
- **Outdoor unit:** Look without touching. Is the fan spinning? Is the coil matted with cottonwood, leaves, or grass? Keep about 2 ft clear around the unit. You may gently hose the coil from outside with the power off at the disconnect. Do not remove panels.
- **Breakers and disconnect:** Check the indoor breaker for the air handler or furnace and the outdoor breaker. Also check that the outdoor disconnect is on.
- **One reset:** Turn the thermostat off. Switch off both breakers for 5 minutes, then turn them back on and restart cooling. Do this **once only**.
- **Ice:** If you see ice on the lines or indoor coil, run Fan-only with cooling off for several hours to thaw it, then call a technician. Icing means an airflow or refrigerant problem.
- **Condensate:** Check that the drain line is dripping outside or at the pump. Make sure any float/safety switch pan isn't full. A full pan can shut off cooling.
- **Panels:** Make sure the indoor unit's access doors are firmly seated.

## How a technician will diagnose it

- Verify the thermostat call. Check that 24V is present on Y, and on O in cooling, at the indoor and outdoor units.
- Read the defrost board or outdoor control LED. On communicating systems, read alert codes and history.
- Measure line temperatures and pressures. A heat pump stuck in heat mode shows a hot "suction" line. That confirms a reversing valve that isn't shifting. The tech then checks:
  - Voltage at the valve coil
  - Coil resistance
  - Magnet pull, or energizing and de-energizing to try to free a sticky valve
- Test the capacitor (µF), contactor, and fan motor amps. Check high- and low-pressure switches.
- Measure superheat and subcooling against the nameplate charge. If the charge is low, leak-search before adding refrigerant.
- Check airflow: static pressure, blower operation, and indoor coil cleanliness.
- Check compressor amps and windings. On inverter models, check drive codes.

A credible quote names the measured fault, such as "no voltage at the valve coil" or "superheat 30°F, leak at the service valve." A vague "needs Freon" is not enough.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Warm air from vents in cool mode | Reversing valve not shifting, or thermostat O/B misconfigured | Check the thermostat is in heat pump / O mode | Test O signal and valve coil; replace coil, board, or valve |
| Nothing runs, blank thermostat | Batteries, tripped breaker, or full condensate pan switch | Replace batteries, reset breaker once, check drain | Find the cause of the trip; check transformer and fuse |
| Indoor fan runs, outdoor silent | Capacitor, contactor, or pressure switch trip | Check outdoor breaker and disconnect; one reset | Test and replace capacitor or contactor; diagnose the trip |
| Outdoor fan off, compressor hums | Fan capacitor or motor | Turn off power; do not poke the fan | Replace capacitor or motor |
| Cool but weak air, long run times | Dirty filter or coil, or low charge | Change filter; hose the outdoor coil | Clean coils; leak search and repair |
| Ice on lines or indoor coil | Low airflow or low refrigerant | Thaw on Fan-only; replace filter | Airflow check; charge and leak repair |
| Alert on communicating thermostat | Board, sensor, or communication fault | Note the code; one power reset | Diagnose per alert code |

## Repair costs

Typical US installed ranges, 2026:

- **Filter / thermostat batteries:** $5–$40 DIY
- **Thermostat setup correction (service call):** $100–$250
- **Run capacitor:** $150–$400
- **Contactor:** $150–$350
- **Outdoor fan motor:** $350–$900
- **Reversing valve solenoid coil:** $150–$400
- **Defrost/control board:** $400–$1,200. Communicating boards run toward the high end or above.
- **Reversing valve replacement:** $1,000–$2,500. This requires recovering the refrigerant and brazing.
- **Leak search and repair plus recharge:** $400–$1,500+. Refrigerant type and leak location drive the cost.
- **Indoor blower motor:** $450–$1,200. ECM and variable-speed motors cost more.
- **Coil cleaning:** $100–$400
- **Compressor:** $1,800–$3,500+. Parts warranty may help; labor usually isn't covered.
- **Outdoor coil:** $1,500–$3,000

Check your registered warranty. American Standard often gives 10-year parts coverage on units registered within the registration window.

## Related codes

American Standard AC Not Cooling: Causes, Fixes & Costs
American Standard Heat Pump Not Heating: Causes & Fixes
American Standard Mini-Split Not Cooling: Causes & Fixes

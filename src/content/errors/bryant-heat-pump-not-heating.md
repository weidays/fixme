---
title: "Bryant Heat Pump Not Heating: Causes, Checks & Fixes"
code: "Not heating"
description: "Bryant heat pump not heating? Learn the likely causes (thermostat, defrost, low refrigerant, reversing valve), safe checks, and repair costs."
brand: bryant
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $3,000+ if the compressor or reversing valve must be replaced"
appliesTo: "Bryant split-system heat pumps (Legacy, Preferred and Evolution series), including the 280/286/288 families. Diagnostic LED codes, defrost logic and fault displays differ between single-stage, two-stage and Evolution variable-speed models, so check your outdoor unit's data plate and service manual."
tags:
  - bryant
  - heat-pump
  - not-heating
  - defrost
  - reversing-valve
  - refrigerant
parts:
  - name: "Furnace/air handler air filter"
    search: "air filter matching your existing size"
  - name: "Thermostat batteries"
    search: "AA lithium batteries thermostat"
datePublished: 2026-11-10
dateModified: 2026-11-10
reviewedBy: ""
faq:
  - q: "Is it normal for my Bryant heat pump to blow cool air sometimes?"
    a: "Yes, for short periods. Heat pump supply air is usually only about 85–100°F, which feels cool against your hand compared with a furnace. During a defrost cycle the unit briefly runs in cooling mode. Most systems bring on backup electric heat strips to temper the air while this happens. Air that stays cold for a long time is not normal."
  - q: "Why is there steam coming off my outdoor unit in winter?"
    a: "That is usually a normal defrost cycle. The unit reverses to melt frost off the outdoor coil, which can produce visible vapor and a whooshing sound. A cycle typically lasts a few minutes. If the coil stays caked in solid ice for hours, the defrost system likely has a fault and needs a technician."
  - q: "Can I just add refrigerant myself to get heat back?"
    a: "No. Federal EPA rules require a certified technician to handle refrigerant. Low charge also means there is a leak, and adding refrigerant without finding and fixing it wastes money. Newer Bryant units may use R-454B, which needs specific tools and procedures."
  - q: "My Bryant heat pump runs constantly in very cold weather. Is it broken?"
    a: "Not necessarily. Below roughly 25–35°F, many single-stage heat pumps lose capacity and run nearly nonstop, and they rely on auxiliary heat. Constant running only points to a problem if the house can't hold its setpoint, or if emergency or auxiliary heat runs much more than usual."
---

## What this code means

"Not heating" is not a diagnostic code. It is a symptom. Your Bryant heat pump either isn't running in heat mode or isn't moving enough heat indoors.

Bryant heat pumps get heat by running the refrigerant cycle in reverse. A reversing valve, energized by the thermostat's O/B signal, switches the system between cooling and heating. A defrost control board periodically melts ice off the outdoor coil.

A problem anywhere in that chain can leave you with lukewarm or cold air:

- the thermostat
- the outdoor unit
- the refrigerant circuit
- the indoor air handler or furnace

Some models show an LED flash code on the outdoor control board or a fault on the Bryant Evolution (Evolution Connex) wall control. If yours does, that code narrows the cause and should guide the technician. The meaning of each code depends on the model. Most heat pump faults are not furnace codes, so the Bryant furnace codes listed below only apply on dual-fuel systems.

Reset behavior also varies by model:

- **Many outdoor boards:** use a short anti-short-cycle delay before the compressor restarts.
- **Repeated high- or low-pressure trips:** some boards lock out after repeated trips and hold the lockout until power is cycled.
- **Your model:** check the service manual for how your specific unit behaves.

## Common causes, ranked by probability

1. **Thermostat setup or settings.** The thermostat is set to Cool, Off or Emergency Heat. The setpoint is too low. Batteries are dead. On new installs, the thermostat may be configured for the wrong O/B reversing-valve logic. Bryant uses O (energized in cool).
2. **Normal heat pump behavior mistaken for a fault.** Lukewarm supply air, defrost cycles, or long run times in cold weather are often normal.
3. **Restricted airflow.** A clogged filter or closed or blocked registers can cut capacity. Severe restriction can trip a high-pressure limit.
4. **Tripped breaker or outdoor disconnect.** Look for an outdoor unit that won't run while the indoor fan still blows.
5. **Outdoor coil iced over, or a defrost system fault.** The defrost board, the coil/defrost thermostat or sensor, or the outdoor fan motor may have failed. The unit may also be buried in snow or ice, or roof runoff may be dripping onto it.
6. **Failed run capacitor or contactor.** The compressor or outdoor fan won't start, or the unit hums.
7. **Low refrigerant charge from a leak.** The unit runs but delivers weak heat. The coil may ice up, and low-pressure lockouts can occur.
8. **Reversing valve stuck or its solenoid coil failed.** The system runs in cooling mode, or partway between modes.
9. **Auxiliary/backup heat not working.** A heat strip element, sequencer or limit has failed. This shows up mostly in cold weather or during defrost.
10. **Compressor failure.** This is the least common and most expensive cause.

## Safe checks before you call anyone

- **Thermostat:** Set it to Heat, not Emergency Heat, and raise the setpoint 3–5°F above room temperature. Replace the batteries if the display is blank or shows a low-battery icon.
- **Air filter:** Check it and replace it if it's dirty. Use a filter that matches your existing size. Make sure the airflow arrow points toward the blower.
- **Registers and returns:** Open the supply registers and clear furniture or rugs away from the return grilles.
- **Breakers:** Check the breakers for both the indoor unit and the outdoor unit. Reset a tripped breaker **once**. If it trips again, stop and call a technician.
- **Outdoor unit:** Look at it without touching anything inside.
  - Clear snow, leaves and debris from around the base and the top fan grille.
  - Do not chip or scrape ice off the coil. You can easily puncture a refrigerant tube.
  - Make sure the access panels are in place and seated.
- **Condensate drain:** Check the indoor drain line or pan. If the air handler has a float switch, a full pan can shut the system down.
- **Wait out defrost:** If the outdoor unit is steaming, give it about 10–15 minutes.
- **Locked-out unit:** If the unit seems locked out, cycle power at the thermostat or breaker **one time**. Then give it time to restart, because many boards hold the compressor off for a short delay after power returns. If the problem returns, call a technician. Repeated resets can damage the compressor. This one-time reset does not apply to gas furnace limit or flame rollout faults. See Related codes below.

## How a technician will diagnose it

A qualified technician will usually work through these steps:

1. **Read fault codes.** They read the LED flash code on the outdoor control or defrost board, or the fault history on an Evolution control.
2. **Check thermostat signals.** At the outdoor unit, they confirm 24V control signals: Y for compressor, O for reversing valve, and W for aux heat.
3. **Test electrical parts.** They test the capacitor (µF), contactor, and the compressor windings and amperage.
4. **Measure refrigerant pressures.** Using gauges, they check pressures and superheat/subcooling against Bryant's heating charging chart. Many manufacturers recommend verifying charge in cooling mode or by weighing it in, so a winter "top-off" without leak detection is a red flag.
5. **Check defrost operation.** They check the coil sensor or defrost thermostat and the board. They may force a defrost using the test pins.
6. **Check the reversing valve.** They compare line temperatures and check the solenoid coil for voltage and continuity.
7. **Check airflow.** They measure the temperature rise across the indoor coil and verify blower speed. They also check aux heat strip amperage and the sequencers.
8. **Find leaks if the charge is low.** They use an electronic detector, bubble solution or nitrogen pressure test.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Nothing runs, blank thermostat | Dead batteries, tripped breaker | Replace batteries; reset breaker once | Check transformer, low-voltage fuse, wiring |
| Indoor fan runs, outdoor unit silent | Outdoor breaker/disconnect, contactor, capacitor | Check outdoor breaker once | Test and replace contactor or capacitor; check control board |
| Outdoor unit hums but won't start | Failed capacitor or seized compressor | Turn the system off and call | Capacitor test/replacement, compressor diagnosis |
| Cold air blows continuously | Thermostat in Cool, O/B misconfigured, stuck reversing valve | Verify Heat mode and thermostat settings | Check O signal, solenoid coil, reversing valve |
| Outdoor coil solid ice for hours | Defrost board/sensor fault, outdoor fan failure, low charge | Clear snow and debris; don't chip ice | Test defrost controls and fan motor; leak check |
| Weak warm air, long run times | Dirty filter, low refrigerant, cold weather limits | Replace filter, open registers | Pressure and superheat check, leak search, aux heat check |
| Cold air only during defrost or very cold days | Aux heat strips or sequencer failed | Confirm the breaker for the heat strips | Test elements, sequencers, limits |
| Runs briefly, then shuts off and restarts later | Pressure switch lockout (airflow or charge) | Replace filter; one power reset | Diagnose high/low pressure cause |

## Repair costs

These are typical US costs, including parts and labor. Regional rates vary.

| Repair | Typical cost |
|---|---|
| Service call / diagnostic | $90 – $250 |
| Run capacitor | $120 – $350 |
| Contactor | $150 – $400 |
| Defrost sensor or thermostat | $150 – $400 |
| Defrost / outdoor control board | $300 – $900 |
| Outdoor fan motor | $350 – $900 |
| Heat strip element or sequencer | $200 – $700 |
| Leak search plus refrigerant recharge | $300 – $1,500+ (depends on refrigerant type and amount) |
| Leak repair (brazing) | $250 – $1,500; coil replacement $1,200 – $3,000 |
| Reversing valve or solenoid coil | Solenoid coil $150 – $400; full valve $1,000 – $2,500 |
| Compressor replacement | $1,800 – $4,000+ |

If the unit is out of warranty and needs a compressor or a coil, ask for a replacement quote too. Bryant warranties often cover parts for 10 years if the unit was registered, but not labor.

## Related codes

On dual-fuel systems, where a Bryant gas furnace provides backup heat, a no-heat call may come with a furnace fault code.

- Bryant Furnace Code 13 relates to limit lockouts.
- Bryant Furnace Code 33 relates to limit circuit faults, which can include a flame rollout trip.
- Bryant Furnace Code 34 covers ignition proving failure.
- Bryant Furnace Code 41 covers blower motor faults, which also affect heat pump airflow through the furnace.
- Bryant Furnace Code 45 covers control circuitry lockout.

**Do not reset or investigate a flame rollout or limit trip on a gas furnace yourself.** Leave the furnace off and call a qualified technician.

Check the furnace status LED as well as the outdoor unit's board.

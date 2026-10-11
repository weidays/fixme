---
title: "Lennox Heat Pump Blowing Cold Air in Heat Mode: Fixes"
code: "Blowing cold air in heat mode"
description: "Lennox heat pump blowing cold air on heat? Learn the causes (defrost, reversing valve, low charge), safe checks, fixes and typical repair costs."
brand: lennox
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $2,500+ if a reversing valve or compressor must be replaced"
appliesTo: "Lennox Merit, Elite and Signature split-system heat pumps with air handlers or furnaces. Defrost board type, iComfort/S30/S40 thermostat behavior, and variable-speed indoor fan logic vary by series."
tags: ["lennox", "heat-pump", "cold-air", "heat-mode", "reversing-valve", "defrost", "refrigerant"]
parts:
  - name: "Replacement air filter (match your size)"
    search: "Lennox air filter replacement"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
datePublished: 2026-10-10
dateModified: 2026-10-10
reviewedBy: ""
faq:
  - q: "Is it normal for my Lennox heat pump to blow cool air sometimes?"
    a: "Yes, briefly. Heat pump supply air is often only 85–95°F, which feels cool on your hand compared with a furnace. During a defrost cycle (usually a few minutes), air can also feel cool unless auxiliary heat tempers it. Steady cold air that lasts longer than about 10–15 minutes is not normal."
  - q: "Why does my Lennox heat pump blow cold air only in very cold weather?"
    a: "As outdoor temperatures fall, a standard heat pump's output and supply air temperature drop. If auxiliary or backup heat isn't wired, enabled, or working, the air can feel lukewarm or cool. A technician can confirm the aux heat strips or the furnace backup are being called and are working."
  - q: "Can I fix a stuck reversing valve myself?"
    a: "No. Diagnosing the reversing valve requires checking coil voltage and refrigerant line temperatures, and replacing it means recovering refrigerant and brazing. That work requires EPA certification. Your part is limited to confirming thermostat settings, the filter, and the breakers."
  - q: "Should I keep running the system if it's blowing cold air?"
    a: "No. If you have backup heat, switch the thermostat to Emergency Heat. If you don't, turn the system off at the thermostat. Then call a technician. Leaving the heat pump running while it blows cold air can mean it is cooling the house or is low on refrigerant, and continued running can damage the compressor."
---

## What this code means

"Blowing cold air in heat mode" is a symptom, not a numeric fault code. Lennox heat pumps usually do not display a specific code for it. On some systems, an iComfort or S30/S40 thermostat may log related alerts, such as low-pressure, high-discharge-temperature, or outdoor-unit communication alerts. Alert availability varies by model and thermostat.

The symptom means one of three things:

- **The heat pump isn't moving heat indoors.** It may be off, locked out, or low on refrigerant.
- **It's running in the wrong direction.** A reversing valve problem can leave the system cooling while the thermostat calls for heat.
- **It's normal heat pump behavior that feels cool.** This includes defrost cycles or mild supply air in deep cold.

This page focuses on air that is actively *cold*, as opposed to running with weak heat. For a system that won't heat at all, or that leans on aux heat, see the related pages listed below.

**Reset behavior:**

- **Defrost** ends on its own, usually within 10 minutes. Lennox controls end defrost when the outdoor coil has warmed enough or when a maximum time limit of about 14 minutes is reached. A cycle that runs a little longer than 10 minutes is not by itself a sign of trouble.
- **Pressure-switch lockouts** are handled by the outdoor defrost board. Many Lennox boards lock out the compressor after 5 pressure-switch trips within a single thermostat call, and some newer boards let the installer change the strike count. The lockout is usually cleared by removing and restoring 24 V or power. Behavior varies by board.

## Common causes, ranked by probability

1. **Normal defrost cycle or perceived-cool supply air.** During defrost, the unit temporarily switches to cooling to melt ice off the outdoor coil. Even in normal heating, heat pump air feels cooler than furnace air.
2. **Thermostat setup issue.** Common examples:
   - The thermostat is set to Cool or Fan On.
   - It is configured for a conventional system instead of a heat pump.
   - The O/B reversing-valve setting is wrong. Lennox uses an O (energize-in-cool) reversing valve, so a "B" setting inverts heat and cool.

   This often appears right after a new thermostat install.
3. **Outdoor unit not running while the indoor blower runs.** Possible causes:
   - A tripped outdoor breaker or disconnect.
   - A failed capacitor or contactor.
   - The defrost board has locked out the compressor on a pressure switch.
4. **Low refrigerant charge (leak).** This reduces heating capacity and can trip the low-pressure switch. Supply air ends up near room temperature or cooler.
5. **Reversing valve stuck or failed.** The coil may have failed electrically, or the valve may be mechanically stuck in the cooling position. The system then cools while calling for heat.
6. **Defrost control or sensor fault.** A bad defrost board, coil sensor, or ambient sensor can leave the unit stuck in or cycling through defrost. See "Stuck in Defrost Mode" for that case.
7. **Auxiliary/backup heat not working during defrost or in deep cold.** Causes include failed heat strips, sequencers, or limits, or a backup heat source that is disabled in the thermostat.
8. **Compressor failure.** Examples are a failed winding, an internal overload trip, or a mechanical failure. The fan may run while the compressor does not.

## Safe checks before you call anyone

- **Thermostat mode and settings.** Confirm the thermostat is on Heat (not Cool, Auto with a low setpoint, or Fan On), and set it 3°F or more above room temperature.
  - Replace the batteries if it uses them.
  - If it was recently replaced, note that. Your technician will want to check the heat pump and O/B configuration.
- **Wait out a possible defrost.** If the outdoor unit is steaming or quiet with its fan stopped, wait 10–15 minutes. Then recheck the air temperature at a register.
- **Air filter.** Replace it if it's dirty. A clogged filter can trip safeties and reduce heat delivery.
- **Breakers and disconnect.** Check both the indoor (air handler/furnace) and outdoor unit breakers. Also check that the outdoor disconnect is on.
  - If a breaker is tripped, reset it **once**.
  - If it trips again, leave it off and call a pro.
- **One power reset.** Turn the system off at the thermostat. Then switch off the outdoor and indoor breakers for 5 minutes, and restore power. Do this only once. If cold air returns, stop and call.
- **Look and listen outdoors.** Is the outdoor fan spinning? Is the unit buried in snow or ice, or blocked by debris? You can gently clear snow from around the unit, but don't chip ice off the coil.
- **Vents and registers.** Make sure supply registers are open and return grilles aren't blocked.
- **Use Emergency Heat** if your system has backup heat. This keeps the house warm until service. If you have no backup heat, turn the system off rather than leave it blowing cold air.

## How a technician will diagnose it

- **Confirm the call.** The tech checks thermostat configuration, including heat pump mode, O/B setting, and aux heat staging. They also check for 24 V on Y, O, and W at the outdoor unit and air handler.
- **Check supply and return temperatures.** A heat pump in heat mode typically delivers a temperature rise of roughly 15–30°F, depending on outdoor temperature.
- **Read the outdoor defrost board.** They look for LED fault flashes (pressure switch lockout, sensor faults) and test the defrost thermostat/coil sensor. LED codes vary by board.
- **Check the compressor and fan circuits.** This includes the contactor, run capacitor, and compressor amperage.
- **Check the refrigerant charge.** The tech attaches gauges and measures pressures, superheat, and subcooling, then leak-checks if the system is low. Note that charging accurately in heat mode is limited, and many techs verify the charge in cooling mode or by weighing it in.
- **Test the reversing valve.** They check voltage at the solenoid coil and coil resistance. They also compare line temperatures across the valve to see whether it's shifting or stuck.
- **Test aux heat.** They check strip amperage, sequencers, and limits, or confirm that the backup furnace fires during defrost.

A good quote should name the failed component and the measurement that proved it. "Needs Freon" without a leak search, or "reversing valve" without a coil and temperature test, deserves a second opinion.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Cool air for a few minutes, outdoor unit steaming | Normal defrost | Wait 10–15 min | None unless frequent or long |
| Cold air right after new thermostat install | Wrong O/B or system type setting | Verify Heat mode; note install date | Reconfigure thermostat to heat pump, O energized in cool |
| Indoor fan runs, outdoor unit silent | Tripped breaker, capacitor/contactor, pressure lockout | Check breakers; one reset | Test capacitor/contactor; read board fault LEDs |
| Outdoor unit runs, air cool, ice pattern odd | Low refrigerant charge | Replace filter; call | Gauge check, leak search, repair and recharge |
| House getting colder, air cold like AC | Reversing valve stuck in cool | Switch to Emergency Heat | Test solenoid coil; replace coil or valve |
| Cycles into defrost repeatedly or won't exit | Defrost board/sensor fault | Clear snow around unit | Test sensors; replace defrost board |
| Air cold in deep cold or during defrost | Aux heat failure | Check air handler breaker | Test heat strips, sequencers, limits |
| Outdoor fan runs, compressor doesn't, humming | Compressor or start component failure | Turn system off; call | Amp draw/winding tests; repair or replace |

## Repair costs

Typical US ranges, including labor:

| Repair | Cost |
|---|---|
| Thermostat reconfiguration | $90–$200 (service call) |
| Run capacitor | $150–$400 |
| Contactor | $150–$350 |
| Defrost control board | $300–$700 (communicating iComfort outdoor control boards on Signature-series units can cost more) |
| Defrost/coil sensor | $150–$350 |
| Refrigerant leak search and recharge | $400–$1,500+ (R-410A vs R-454B pricing varies; larger leak repairs or coil replacement cost more) |
| Reversing valve solenoid coil only | $200–$450 |
| Reversing valve replacement | $1,000–$2,500 |
| Heat strip element or sequencer | $200–$600 |
| Compressor replacement | $1,800–$4,000+ |

**Warranty notes:**

- Lennox parts warranties are often 5–10 years with registration, but they generally don't cover labor.
- If a major component fails on an older system, ask for a repair-vs-replace estimate.

## Related codes

- Lennox Heat Pump Not Heating: Causes, Fixes & Costs
- Lennox Heat Pump Stuck in Defrost Mode: Causes & Fixes
- Lennox Heat Pump Frozen and Not Defrosting: Fixes & Cost
- Lennox Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Lennox Heat Pump Aux Heat On Constantly: Causes & Fixes
- Lennox Heat Pump Not Cooling: Causes, Fixes & Costs
- Lennox Furnace Runs Constantly But Not Enough Heat

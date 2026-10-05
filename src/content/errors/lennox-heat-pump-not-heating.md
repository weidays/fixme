---
title: "Lennox Heat Pump Not Heating: Causes, Fixes & Costs"
code: "Not heating"
description: "Lennox heat pump not heating? Causes like thermostat setup, defrost, low refrigerant or stuck reversing valve, safe checks, and repair costs."
brand: lennox
equipment: heat-pump
severity: pro
costRange: "$0 – $4,000+"
appliesTo: "Lennox split-system heat pumps (Merit ML14XP1/ML17XP1, Elite EL16XP1/EL18XPV, Signature SL25XPV/XP25 and similar). Communicating models paired with an iComfort thermostat show alert codes on the thermostat. Conventional 24V models may only show LED flashes on the outdoor defrost or control board. Board type, defrost logic and lockout behavior vary by model and age."
tags:
  - heat-pump
  - not-heating
  - lennox
  - reversing-valve
  - defrost
  - refrigerant
parts:
  - name: "Furnace/air handler air filter (match your size)"
    search: "16x25x1 MERV 8 air filter"
  - name: "AA batteries for thermostat"
    search: "AA alkaline batteries 8 pack"
datePublished: 2026-10-04
dateModified: 2026-10-04
reviewedBy: ""
faq:
  - q: "Why is my Lennox heat pump blowing cool air in heat mode?"
    a: "Heat pump air often feels lukewarm compared with furnace heat, because it is usually only about 20–30°F warmer than the return air. That is normal. If the air is truly cold, the unit may be in a defrost cycle, the thermostat may be set up wrong, the reversing valve may be stuck, or refrigerant may be low."
  - q: "Is it normal for my Lennox heat pump to steam and stop heating briefly in winter?"
    a: "Yes. During defrost the outdoor fan stops, the unit switches modes and melts frost off the coil, and you may see steam. A cycle usually lasts a few minutes, up to about 10–15 depending on the board. If the outdoor coil stays encased in ice for hours, call a technician."
  - q: "Should I switch my thermostat to emergency heat?"
    a: "Emergency heat (EM heat) uses only the backup electric strips or furnace. It is a reasonable temporary way to stay warm while you wait for a technician. It costs more to run with electric strips, so don't leave it on longer than needed."
  - q: "Can I add refrigerant to my heat pump myself?"
    a: "No. Handling refrigerant requires EPA Section 608 certification. Low charge also means there is a leak, and a technician should find and repair it rather than just topping the system up."
  - q: "Does a Lennox heat pump lockout reset by itself?"
    a: "It depends on the board. Many Lennox outdoor controls soft-lock after a pressure-switch trip and retry after a delay, then hard-lock after repeated trips within one call. A hard lockout holds until power or the thermostat call is cycled. Reset once only; if it locks out again, call a pro."
---

## What this code means

"Not heating" is a symptom, not a single Lennox fault code. It means the heat pump runs, or tries to run, but the house doesn't warm up. Sometimes it means the system doesn't respond to a heat call at all.

**What normal heat pump operation looks like:**

- Air at the registers is usually only about 20–30°F warmer than return air, so it can feel lukewarm.
- Below roughly 25–35°F outdoors, most heat pumps need help from backup heat (electric strips or a furnace in a dual-fuel setup).
- Periodic defrost cycles briefly interrupt heating.

**How fault information is shown:**

- **Communicating Lennox systems (iComfort):** fault details appear as alert codes on the thermostat.
- **Conventional 24V systems:** you may only see LED flash codes on the outdoor control board, which is inside the service panel and is a technician's job to read.

**Lockout behavior varies by board:**

- Many Lennox outdoor controls auto-retry after a high- or low-pressure trip.
- After repeated trips within one heat call, the control hard-locks. It stays locked until power is cycled or the thermostat call ends.

If the problem is the gas furnace side of a dual-fuel system (no ignition, burner lockout), see the furnace pages listed under Related codes.

## Common causes, ranked by probability

1. **Thermostat setup or settings.** The thermostat is in cool or auto with a wrong setpoint. Or a newly installed thermostat is configured with the wrong reversing-valve setting. Lennox energizes the O terminal in cooling, so if the thermostat is set to energize in heat (B), the unit runs backwards.
2. **Normal defrost or a stuck/frequent defrost.** The unit cools the house briefly while clearing frost. A faulty defrost sensor or board can cause excessive defrost cycles, or none at all, leaving the coil iced.
3. **Restricted airflow.** A dirty filter, closed registers, or a dirty indoor coil can trip the high-pressure switch in heat mode and cause lockouts.
4. **Outdoor coil blocked or iced over.** Snow, leaves, or ice buildup on the coil, often from failed defrost or a clogged base pan drain.
5. **Low refrigerant charge (leak).** This gives weak heat, long run times, low-pressure switch trips, and sometimes an iced coil.
6. **Reversing valve stuck or bypassing, or O wrongly energized.** On Lennox, the reversing valve rests in the heating position when its solenoid is de-energized; O is energized only for cooling. Cold air in heat mode therefore comes from a valve that is mechanically stuck or bypassing, or from O being energized when it shouldn't be (an O/B misconfiguration, or a stuck thermostat or board relay). A failed (open) solenoid coil does not cause this problem. It leaves the unit stuck in heat, which shows up as no cooling in summer.
7. **Failed run capacitor or outdoor fan motor.** The compressor or fan won't run, or keeps cutting out.
8. **Compressor contactor, compressor, or control board failure.** Outdoor unit dead or erratic.
9. **Backup heat not working in cold weather.** Electric heat strips, their breaker, or sequencers have failed. The heat pump alone can't keep up on very cold days.

## Safe checks before you call anyone

- **Thermostat:**
  - Confirm it's set to HEAT and the setpoint is a few degrees above room temperature.
  - Replace the batteries if it has them.
  - If it was just replaced or reprogrammed, note that. The installer or technician should verify the reversing-valve (O/B) setting.
- **Watch for defrost:** If the outdoor fan is stopped and the unit is steaming, wait 15 minutes before concluding anything is wrong.
- **Air filter:** Replace it if dirty. Make sure all supply registers and return grilles are open and unblocked.
- **Breakers and disconnect:**
  - Check the breakers for the outdoor unit and the indoor air handler or furnace.
  - Many air handlers have separate breakers for the heat strips.
  - Reset a tripped breaker **once only**. If it trips again, stop and call a pro.
- **Outdoor unit (from the outside only):**
  - Clear snow, leaves, and debris from around the unit, keeping about 2 feet of clearance.
  - Make sure it isn't buried in snow or under a dripping roof edge.
  - Don't chip ice off the coil. The fins and tubing are easily punctured.
- **Condensate:** Make sure the indoor condensate drain or pump isn't backed up. A tripped float switch can shut the system off.
- **One reset:** If the system seems locked out, turn the thermostat off for 5 minutes, then back to heat. Do this once. If it doesn't recover, call a technician.
- **Stay warm meanwhile:** Switching to EM HEAT is fine as a temporary measure.

## How a technician will diagnose it

1. **Read codes.** Check iComfort alerts or the outdoor board LED codes, plus the stored fault history.
2. **Verify thermostat wiring and configuration.** Confirm the O/B setting. During a heat call, check for 24V on Y at the outdoor unit and confirm there is **no** 24V on O. Voltage on O in heat mode points to a misconfigured thermostat or a stuck thermostat or board relay.
3. **Measure the temperature split.** Compare supply and return air temperatures, and check static pressure and the indoor coil for airflow problems.
4. **Check refrigerant pressures.** Using gauges, compare against the Lennox charging chart for that model. If charge is low, they should leak-test before recharging.
5. **Test the reversing valve.** With O confirmed de-energized in heat, measure the temperatures of the valve's lines to tell whether the valve is mechanically stuck or bypassing.
6. **Test electrical components.** This covers the capacitor (µF reading), contactor, compressor windings and amperage, and the fan motor.
7. **Check defrost.** Test the defrost sensor resistance and the board's defrost timing and operation.
8. **Check backup heat.** Test the heat strip elements, limits, sequencers, and amp draw.

A good quote names the failed component and the measured reading behind it. Be wary of "it just needs freon" without a leak search.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Cold air, outdoor unit running, no steam | Thermostat O/B misconfigured, O energized by a stuck thermostat or board relay, or reversing valve mechanically stuck or bypassing | Check heat mode and setpoint; note any recent thermostat change | Verify O/B setting and confirm no 24V on O in heat; replace faulty thermostat or board, or replace valve |
| Brief cold air, outdoor fan off, steam | Normal defrost | Wait 15 minutes | None unless it's frequent or prolonged |
| Outdoor coil solid with ice | Failed defrost sensor or board, low charge, blocked drain | Clear snow and debris from outside; run EM heat | Test defrost controls, check charge, clear base pan |
| Lukewarm air, runs nonstop | Low refrigerant, dirty coil, cold weather without backup heat | Replace filter, open registers | Leak search and charge; test heat strips |
| Runs, then stops repeatedly | High or low pressure switch lockout | Replace filter; one thermostat reset | Find root cause (airflow, charge, fan) |
| Outdoor unit hums but won't start | Bad capacitor or compressor | Turn the system off to protect the compressor | Test and replace capacitor or contactor; check compressor |
| Nothing runs at all | Tripped breaker, condensate float switch, board failure | Check breakers once; check condensate drain | Diagnose 24V circuit, fuse, board |

## Repair costs

Typical US installed prices; these vary by region and warranty status:

| Repair | Typical cost |
|---|---|
| Diagnostic or service call | $90 – $200 |
| Thermostat reconfiguration | Often included in the service call |
| Thermostat replacement | $150 – $500 (iComfort units cost more) |
| Run capacitor | $150 – $400 |
| Contactor | $150 – $350 |
| Defrost sensor | $150 – $350 |
| Defrost/control board | $400 – $1,000 |
| Outdoor fan motor | $350 – $800 |
| Leak search plus refrigerant recharge (R-410A or R-454B) | $300 – $1,200 |
| Leak repair | Added on top of the recharge cost |
| Reversing valve solenoid coil | $150 – $400 |
| Reversing valve replacement (brazing, evacuation, recharge) | $1,000 – $2,000 |
| Heat strip element or sequencer | $200 – $600 |
| Compressor replacement | $1,800 – $4,000+ |

**Warranty note:** Lennox parts warranties on registered units often cover the part. Labor and refrigerant are usually billed separately.

## Related codes

**Heat pump:**

- Lennox Heat Pump Defrost Problems: Causes, Fixes & Costs
- Lennox Heat Pump Outdoor Coil Iced Over: Causes & Fixes
- Lennox Heat Pump Pressure Switch Lockout: Causes & Fixes

**Furnace side of a dual-fuel system:**

- Lennox Furnace Runs Constantly But Not Enough Heat
- Lennox Furnace Won't Turn On: Causes, Fixes & Costs
- Lennox Furnace Short Cycling: Causes, Fixes & Costs
- Lennox Furnace Blower Not Running: Causes & Fixes
- Lennox Furnace Code E180: Outdoor Sensor Fix & Cost
- Lennox Furnace Keeps Shutting Off: Causes, Fixes & Costs

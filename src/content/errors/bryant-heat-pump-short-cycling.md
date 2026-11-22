---
title: "Bryant Heat Pump Short Cycling: Causes, Checks & Fixes"
code: "Short cycling"
description: "Why a Bryant heat pump short cycles in heat or cool mode: thermostat, airflow, defrost and charge causes, safe checks, and $0 to $2,500+ repair costs."
brand: bryant
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150–$450 for a sensor or control fix, $600–$2,500+ for refrigerant leak repair or a control board"
appliesTo: "Bryant split-system heat pumps, including Legacy, Preferred and Evolution series, single-stage, two-stage and variable-speed. Evolution communicating systems log fault codes in the Evolution or Housewise wall control, while conventional 24V models show flash codes on the outdoor control board LED. Anti-short-cycle delay timing and lockout behavior vary by board and model."
tags: ["short-cycling", "heat-pump", "bryant", "thermostat", "airflow", "pressure-switch", "defrost"]
parts:
  - name: "Furnace/air handler air filter (match your size)"
    search: "16x25x1 MERV 8 air filter"
  - name: "AA alkaline batteries for thermostat"
    search: "AA alkaline batteries 8 pack"
  - name: "Heat pump compatible programmable thermostat"
    search: "heat pump compatible programmable thermostat"
datePublished: 2026-11-20
dateModified: 2026-11-20
reviewedBy: ""
faq:
  - q: "How short is too short for a heat pump cycle?"
    a: "Most heat pumps should run at least 8 to 10 minutes per cycle in normal weather. If yours keeps shutting off after only 2 to 5 minutes and restarting soon after, it is short cycling. Long run times in very cold weather are normal for a heat pump."
  - q: "Is it normal for my Bryant heat pump to stop and restart during winter?"
    a: "Some stopping is normal. During a defrost cycle the outdoor fan stops, the system switches to cooling mode for a few minutes, and you may hear a whoosh and see steam. That is normal operation. Short cycling means the system repeatedly shuts off before reaching the setpoint, outside of defrost."
  - q: "Can short cycling damage my heat pump?"
    a: "Yes. Frequent starts put extra wear on the compressor, contactor and capacitor, raise your power bills, and leave humidity high in summer. If a safety switch is causing the shutdowns, the root cause, such as low charge or a failing fan, can also damage the compressor."
  - q: "Why does my Bryant heat pump run for a while, stop, and wait about five minutes before restarting?"
    a: "Bryant control boards include an anti-short-cycle timer that holds the compressor off for several minutes after it stops. Seeing that delay over and over means something is ending the cycles early. The timer is protecting the compressor, not causing the problem."
---

## What this code means

"Short cycling" is not a single Bryant fault code. It is a symptom: the heat pump starts, runs only briefly, shuts off, and repeats this pattern well before the house reaches the thermostat setting.

On Bryant heat pumps something is ending each call for heat or cooling early. Common triggers include:

- The thermostat dropping or satisfying its call too soon.
- A safety device, such as the high- or low-pressure switch, opening.
- The outdoor control board stopping the compressor to protect it.

**What the board does after a stop:**
- Bryant outdoor boards apply an anti-short-cycle delay, typically around 5 minutes, before allowing a restart.
- Repeated pressure-switch trips can lead to a board lockout. On many Bryant boards this happens after several trips within one call, and the lockout holds until power is cycled or the thermostat call is removed.
- The exact trip count and lockout duration vary by board.

**Where to look for a stored fault:**
- **Evolution and other communicating systems:** check the wall control's fault history.
- **24V systems:** check the flash code on the outdoor board.

A logged fault narrows down the cause a lot. Pass it to your technician.

This page covers heat-pump-specific behavior in both heating and cooling. Cooling-only causes such as a frozen evaporator are covered on the Bryant AC pages listed at the bottom.

## Common causes, ranked by probability

1. **Thermostat issues.**
   - The thermostat is mounted near a supply register, a lamp, or in sunlight.
   - Low batteries are causing it to reset or lose its call.
   - The thermostat is set up for "conventional" rather than "heat pump" operation.
   - The cycle-rate or swing setting is too tight.
2. **Restricted airflow.**
   - A dirty filter.
   - Closed or blocked registers.
   - A dirty indoor coil.

   In heat mode, poor airflow drives head pressure up and can trip the high-pressure switch. In cooling mode it drives suction pressure down and can trip the low-pressure switch.
3. **Dirty or blocked outdoor coil, or outdoor fan problems.** These cause high-pressure trips in cooling mode. A weak or failing outdoor fan motor or capacitor causes the same pattern.
4. **Low refrigerant charge from a leak.** This causes low-pressure switch trips and short runs. It is common on older systems.
5. **Defrost-related issues in heat mode.** A faulty defrost thermostat or coil sensor, or a board starting defrost too often, can look like short cycling. Normal defrost cycles are sometimes mistaken for it too.
6. **Oversized equipment.** The system satisfies the thermostat in a few minutes, most noticeably in mild weather. Single-stage units are most prone to this.
7. **Electrical or control faults.**
   - A failing compressor run capacitor or contactor.
   - Loose low-voltage wiring.
   - A tripping compressor internal overload.
   - A failing outdoor control board.
8. **Restriction in the refrigerant circuit.** A plugged filter-drier, a failing metering device or TXV, or a sticking reversing valve can all cause trips.

## Safe checks before you call anyone

- **Thermostat:**
  - Confirm it is in the correct mode (Heat or Cool, not Auto bouncing between the two).
  - Replace the batteries if it uses them.
  - Make sure no heat source, sun, or supply register is blowing on it.
  - If your installer's menu shows the system type, it should read "heat pump."
- **Air filter:** Pull it and look. If it is gray or clogged, replace it with the same size.
- **Registers and returns:** Open all supply vents and make sure furniture or rugs aren't blocking return grilles.
- **Outdoor unit, from outside only:**
  - Clear away leaves, snow, and plants within about 2 feet.
  - Don't open panels or touch the fan.
  - If snow or ice is packed around the base, clear it gently by hand without chipping at the coil.
- **Breaker or disconnect:** If either has tripped, reset it once. If it trips again, stop and see the related page on the breaker tripping.
- **One reset:** If the system appears locked out, turn it off at the thermostat, switch off both breakers (indoor and outdoor) for 5 minutes, and restore power once.
  - If short cycling resumes, don't keep resetting. Repeated restarts against a safety trip can damage the compressor.
- **Condensate:** In cooling mode, make sure the condensate line is draining and any float/safety switch pan isn't full. A tripped float switch cuts the thermostat call.
- **Exterior panels:** Confirm the indoor unit's access panels are seated properly.
- **Know what's normal:** In heat mode, a 2–10 minute stop with steam rising from the outdoor unit is defrost. That is normal.

## How a technician will diagnose it

- **Read stored faults** from the Evolution wall control or the outdoor board LED, and confirm the anti-short-cycle and lockout history.
- **Watch a full cycle** while noting what ends it: the thermostat satisfying, the call dropping, a pressure switch opening, or the compressor overload.
- **Check thermostat wiring and voltage** (R, C, Y, O/B) for a stable 24V call and loose connections.
- **Measure airflow and static pressure,** and inspect the indoor coil and blower.
- **Connect gauges or probes** to check suction and head pressure, superheat and subcooling. If the charge is low, this is followed by leak detection.
- **Test components:** the outdoor fan motor and capacitor, compressor capacitor, contactor, and compressor amperage.
- **Test the defrost system:** check the coil sensor or defrost thermostat resistance, and run a forced defrost test.
- **Check sizing** with a load calculation if short runs occur only in mild weather.

A good quote should name *what is actually stopping the cycle*. "Add refrigerant" with no leak search is a red flag.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Runs 2–5 min, thermostat shows satisfied | Thermostat location or settings, oversized unit | Check placement, mode, batteries | Relocate or reconfigure thermostat, adjust staging, load calculation |
| Short runs, weak airflow at vents | Dirty filter, blocked returns, dirty indoor coil | Replace filter, open vents | Clean coil, check blower and static pressure |
| Stops in summer, outdoor unit hot, fan slow or stopped | Dirty outdoor coil, failing fan motor or capacitor | Clear debris around unit | Clean coil, replace fan capacitor or motor |
| Short runs plus poor heating or cooling, possible lockout | Low refrigerant charge (leak) | One power reset; note any fault code | Leak search, repair, evacuate, recharge |
| Frequent stops in winter with steam | Normal defrost or faulty defrost sensor | Observe; clear snow and ice from around the base | Test defrost sensor and board, forced defrost test |
| Clicks on and off, display resets | Weak batteries, loose low-voltage wiring | Replace batteries | Repair wiring, check transformer |
| Stops, hums, restarts after a delay | Failing capacitor, contactor, or compressor overload | None beyond one reset | Test and replace capacitor or contactor, assess compressor |
| Cooling stops and water pan is full | Condensate float switch tripped | Clear condensate line | Repair drain, check pump |

## Repair costs

These are typical US ranges, including parts and labor.

| Repair | Typical cost |
|---|---|
| Filter, batteries, clearing debris | $0–$40 DIY |
| Service call / diagnostic | $90–$200 |
| Thermostat replacement or relocation | $150–$450 |
| Outdoor coil cleaning | $100–$250 |
| Indoor coil cleaning | $200–$500 |
| Run capacitor | $150–$350 |
| Contactor | $150–$350 |
| Outdoor fan motor | $350–$800 |
| Defrost sensor or thermostat | $150–$350 |
| Pressure switch replacement | $200–$500 (requires refrigerant work on some models) |
| Outdoor control board | $400–$900 |
| Evolution board | Can exceed $900 |
| Leak search and repair with recharge | $400–$2,500+ (depends on leak location and refrigerant type, R-22 vs R-410A vs R-454B) |
| Reversing valve or TXV | $1,000–$2,500 |
| Compressor replacement | $1,800–$4,000+ (consider replacing the unit if it is older than 12–15 years) |

## Related codes

- **Bryant AC Short Cycling: Causes, Checks & Fixes** covers cooling-only causes such as a frozen evaporator.
- **Bryant Heat Pump Frozen, Not Defrosting: Causes & Fixes**
- **Bryant Heat Pump Stuck in Defrost Mode: Causes & Fixes**
- **Bryant Heat Pump Outdoor Fan Not Spinning: Causes & Fixes**
- **Bryant Heat Pump Not Heating: Causes, Checks & Fixes**
- **Bryant Heat Pump Not Cooling: Causes, Checks & Fixes**
- **Bryant AC Breaker Keeps Tripping: Causes, Checks & Fixes**
- **Bryant AC Compressor Not Running: Causes, Checks & Fixes**

---
title: "American Standard Furnace Blowing Cold Air: Causes & Fixes"
code: "Blowing cold air"
description: "Why an American Standard gas furnace blows cold air: fan set to ON, dirty filter tripping the limit, failed ignition or flame sensing. Fixes and repair costs."
brand: american-standard
equipment: furnace
severity: pro
costRange: "$0 DIY – $600+ if the inducer motor or control board needs replacement"
appliesTo: "American Standard gas furnaces, both single-stage and two-stage/variable-speed models (Silver, Gold and Platinum series). LED flash codes and blower-delay timing vary by control board, so check the code chart on the inside of your blower door."
tags:
  - furnace
  - blowing-cold-air
  - no-heat
  - american-standard
  - gas-furnace
parts:
  - name: "Furnace air filter (match your size)"
    search: "furnace air filter 16x25x1 MERV 8"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
  - name: "Programmable thermostat"
    search: "programmable thermostat gas furnace"
datePublished: 2026-11-24
dateModified: 2026-11-24
reviewedBy: ""
faq:
  - q: "Is it normal for my American Standard furnace to blow cool air for a minute at startup?"
    a: "Yes. The blower starts on a short delay after the burners light, but the ductwork is still cold, so the first air out of the vents can feel cool for 30 to 90 seconds. It's also normal for cooler air to blow briefly after the burners shut off, because the fan runs on to pull leftover heat out of the heat exchanger."
  - q: "Why does my furnace blow warm air, then cold air, then shut off?"
    a: "That pattern usually means the burners are shutting down while the blower keeps running. Common reasons are a high-limit trip from restricted airflow, which is often a clogged filter, or a flame-sensing problem. Look at the control board LED through the sight glass and count the flashes. That code points to the specific cause."
  - q: "Can I reset the furnace myself?"
    a: "You can turn off power at the furnace switch or breaker for 30 seconds and turn it back on once. If it locks out again or keeps blowing cold air, stop and call a technician. Repeated resets can hide a safety problem, such as an overheating heat exchanger or a venting fault."
  - q: "Does a heat pump blowing cold air have the same causes?"
    a: "No. Heat pumps have their own causes, such as defrost mode, reversing-valve problems and refrigerant issues. This page covers gas furnaces only. If you have a heat pump, see the heat pump blowing cold air page instead."
---

## What this code means

"Blowing cold air" is a symptom, not a stored fault code. The blower is moving air, but the burners either aren't lit or aren't staying lit long enough to warm it.

On American Standard gas furnaces, the control board runs the blower in several situations:

- **When you've set the fan to ON at the thermostat.** The blower runs whether or not there is a call for heat.
- **After the burners shut down.** The blower keeps running to cool the heat exchanger, for example after a high-limit trip.
- **While the board is retrying ignition.**

If the board has detected a fault, its LED will usually be flashing a code. You can see it through the sight glass on the blower door. That flash count is your best clue to what's wrong.

**How resets work:**
- Most American Standard boards go into a soft lockout after repeated failed ignition attempts.
- They typically retry on their own after about an hour.
- Cycling power clears the lockout right away.
- Limit trips reset automatically once the furnace cools down.

Exact timing varies by board, so check the wiring diagram on your blower door.

## Common causes, ranked by probability

1. **Thermostat fan set to ON (not AUTO).** The blower runs constantly and pushes room-temperature air between heating cycles. This is the most common "cause," and it isn't a fault.
2. **Clogged air filter or blocked returns, causing a high-limit trip.** The heat exchanger overheats, the limit switch opens, and the burners shut off while the blower keeps running. This usually shows as a 4-flash (open limit) code.
3. **Dirty or weak flame sensor.** The burners light for a few seconds, then shut off. The board retries, then locks out, while the blower may keep running. This often shows as an 8-flash (low flame sense) code.
4. **Ignition failure.** The cause may be the hot-surface igniter, the gas supply or the gas valve, and the furnace never lights. This shows as an ignition or lockout code (see the 2, 7 and 9 flash pages).
5. **Pressure switch or inducer/venting problem.** A blocked vent, a blocked condensate drain on 90%+ furnaces, or a failing inducer keeps the board from attempting ignition. This often shows as a 3-flash code.
6. **Thermostat problems.** Dead batteries, the wrong system mode, a thermostat configured for a heat pump, or a wiring fault can all be the cause.
7. **Control board failure.** This is less common, and it should be diagnosed only after the causes above are ruled out.

## Safe checks before you call anyone

- **Thermostat:** Set the system to HEAT and the fan to AUTO. Set the temperature at least 3°F above room temperature. Replace the batteries if the display is dim or blank.
- **Air filter:** Pull the filter and hold it up to a light. If you can't see light through it, replace it with the same size.
- **Vents and returns:** Open the supply registers and clear furniture or rugs away from the return grilles.
- **Power:** Make sure the furnace service switch (it looks like a light switch) is ON and the breaker hasn't tripped.
- **Blower door:** Confirm the lower panel is fully seated. A door safety switch shuts the furnace down if the panel is loose.
- **Read the LED:** Count the flashes through the sight glass without removing any panels. Write the count down for your technician.
- **Condensate (90%+ furnaces only):** Check whether the drain line or condensate trap outlet is visibly kinked or overflowing.
- **Reset once:** If the furnace is locked out, turn the power off for 30 seconds and back on, one time only. If the problem returns, call a technician.

**If you smell gas, do not touch the furnace or any switches.** Leave the house and call your gas utility or 911 from outside.

## How a technician will diagnose it

- **Read the fault code** from the LED, along with the board's fault history if your model stores it.
- **Watch a full heating sequence:** inducer start, pressure switch closing, igniter glow, gas valve opening, flame proving, then blower start. Noting which step fails narrows down the cause.
- **Measure temperature rise** across the furnace and compare it with the range printed on the rating plate. Check static pressure to confirm whether airflow is restricted.
- **Test the flame sensor** by measuring its microamp signal. Clean the sensor, or replace it if needed.
- **Test the igniter** by measuring its resistance.
- **Check gas pressure** at the gas valve, both inlet and manifold.
- **Test the limit switch** and look for signs of overheating.
- **Check the inducer** for proper operation and measure pressure-switch vacuum. Inspect the vent and condensate trap.
- **Verify 24V signals** and thermostat wiring at the board before condemning the board itself.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Steady cool air between heating cycles | Fan set to ON | Set the fan to AUTO | None needed |
| Warm air, then cold air while the blower keeps running | High-limit trip from poor airflow | Replace the filter and open the vents | Test the limit, check static pressure and blower, inspect the heat exchanger |
| Burners light for a few seconds, then go out | Weak flame signal | Note the flash code; reset once | Clean or replace the flame sensor, check grounding |
| No glow or flame, then lockout | Igniter, gas valve or gas supply problem | Reset once; confirm other gas appliances work | Test the igniter and valve, check gas pressure |
| Inducer runs but no ignition attempt | Pressure switch or venting problem | Check the condensate line and the outside vent for snow or blockage | Clear the vent or trap, test the switch and inducer |
| Nothing happens at all, or the thermostat is blank | Power or thermostat problem | Replace the batteries, check the breaker and service switch | Trace 24V, check the transformer and fuse |
| Erratic behavior after other causes are ruled out | Control board fault | None | Replace the board |

## Repair costs

These are typical US ranges including parts and labor. A diagnostic visit usually runs $80–$200.

| Repair | Typical cost |
|---|---|
| Thermostat setting or batteries | $0–$10 |
| Air filter | $10–$40 DIY |
| Flame sensor cleaning or replacement | $100–$250 |
| Hot-surface igniter | $150–$350 |
| Limit switch | $150–$350 |
| Pressure switch | $150–$400 |
| Vent or condensate clearing | $100–$250 |
| Gas valve | $300–$700 |
| Inducer motor | $400–$900 |
| Control board | $350–$800 |

Parts covered under warranty can reduce these costs, but labor is usually still charged.

## Related codes

- American Standard Furnace 4 Flashes: Open Limit Circuit
- American Standard Furnace 8 Flashes: Low Flame Sense
- American Standard Furnace 3 Flashes: Causes & Fixes
- American Standard Furnace 2 Flashes: Causes & Fixes
- American Standard Furnace 9 Flashes: Igniter Circuit Fix
- American Standard Furnace 7 Flashes: Gas Valve Circuit
- American Standard Furnace Won't Ignite: Causes & Fixes
- American Standard Furnace Short Cycling: Causes & Fixes
- American Standard Heat Pump Blowing Cold Air: Causes & Fixes

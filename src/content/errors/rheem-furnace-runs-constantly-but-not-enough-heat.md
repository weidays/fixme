---
title: "Rheem Furnace Runs Constantly, Not Enough Heat: Fixes"
code: "Runs constantly but not enough heat"
description: "Rheem furnace runs nonstop but the house stays cool? Learn the likely causes, safe homeowner checks, what a tech will test, and typical repair costs."
brand: rheem
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200+ if the gas valve, inducer or blower motor needs replacement; ductwork repairs vary widely"
appliesTo: "Rheem and Ruud gas furnaces (Classic, Classic Plus, Prestige, and older Criterion series), including single-stage, two-stage and modulating models. No specific fault code is tied to this symptom, so LED diagnostics differ by control board generation. Two-stage and modulating units may run long at low fire by design, so check your model's staging behavior before assuming a fault."
tags:
  - rheem
  - furnace
  - not-enough-heat
  - runs-constantly
  - low-heat-output
  - airflow
  - two-stage-furnace
parts:
  - name: "Furnace air filter (match your filter size)"
    search: "furnace air filter MERV 8 16x25x1"
  - name: "AA/AAA batteries for thermostat"
    search: "AA alkaline batteries 8 pack"
  - name: "Programmable thermostat compatible with two-stage gas furnaces"
    search: "programmable thermostat two stage heat gas furnace"
datePublished: 2026-10-03
dateModified: 2026-10-03
reviewedBy: ""
faq:
  - q: "Is it normal for a Rheem two-stage furnace to run for a long time?"
    a: "Yes. Two-stage and modulating Rheem furnaces often run long cycles at low fire to keep temperatures even and quiet. That is only a problem if the house never reaches the setpoint, or if the air at the registers is only lukewarm even after the furnace has stepped up to high fire."
  - q: "Can a dirty filter make my furnace run constantly without heating the house?"
    a: "Yes. A clogged filter cuts airflow, so less heat reaches the rooms and the furnace can overheat and trip its high-limit switch. The burners then shut off while the blower keeps running. Replacing the filter is the first thing to check."
  - q: "Should I keep resetting my furnace if it is not heating well?"
    a: "No. If cutting power once and restoring it doesn't help, leave the furnace alone and call a technician. Repeated resets can mask overheating or combustion problems that need to be measured with proper instruments."
  - q: "Could my furnace simply be too small for the house?"
    a: "Sometimes. A furnace that is undersized, or a house with poor insulation or leaky ducts, can run nonstop on the coldest days and still fall short. A technician can do a Manual J load calculation and inspect the ducts to tell whether this is an equipment fault or a capacity problem."
---

## What this code means

"Runs constantly but not enough heat" is a symptom, not a Rheem fault code. You won't get a dedicated LED flash pattern for it. The furnace is running, and the blower is moving air that feels somewhat warm. But the thermostat setpoint is never reached, so the system keeps running.

This page is different from **Blowing cold air**, where the air is cold or the burners aren't lit. It is also different from **Short cycling** and **Keeps shutting off**, where the unit stops and starts. Here the furnace runs more or less continuously, but it delivers too little heat.

Three things can cause this:

- **The furnace isn't producing full heat.** Examples are low firing rate or a unit stuck at low stage.
- **The heat isn't reaching the rooms.** Examples are restricted airflow or leaking ducts.
- **The house loses heat faster than the furnace can replace it.** This can be a sizing problem or extreme cold.

Because no fault code is involved, nothing needs to "reset." If the control board does log a related code, such as a high-limit trip, read the LED before cutting power. On many Rheem boards, the stored code clears when power is cut. How codes are stored and recalled varies by board generation.

## Common causes, ranked by probability

1. **Dirty or overly restrictive air filter.** Low airflow carries less heat into the rooms. It can also make the furnace cycle on its high-limit switch while the blower keeps running. A high-MERV filter in a 1" slot can cause the same problem even when it's new.
2. **Thermostat setup or staging issue.**
   - The fan may be set to ON instead of AUTO, which feels like "always running."
   - Weak batteries can cause erratic calls for heat.
   - On two-stage Rheem furnaces, the board may be set to stay at low fire or to wait a long time before stepping up to high fire. Many Rheem two-stage boards have a jumper or DIP switch for this staging timer. The exact setting varies by model.
   - A single-stage thermostat wired to a two-stage furnace may never call for second stage.
3. **Closed or blocked supply registers or return grilles.** Furniture, rugs, or closed vents in many rooms choke airflow.
4. **Duct leaks or disconnected ducts.** Heat escapes into the attic, crawlspace, or basement before it reaches the living space. This is very common in older homes.
5. **Low gas firing rate.** Manifold gas pressure may be set too low, the gas valve may not be stepping to high fire on a two-stage unit, or the orifices may be wrong for the fuel type or altitude. Total gas loss causes ignition codes, not this symptom.
6. **Blower speed set too high or too low for heating.** If it's too high, the air feels lukewarm. If it's too low, the limit switch trips. Speed taps or airflow settings vary by model and motor type (PSC vs. ECM).
7. **Dirty blower wheel or a weak blower motor.** These reduce airflow even when the filter is clean.
8. **Undersized furnace or high heat loss in the house.** Poor insulation, drafty windows, or an addition the system was never sized for can all cause this. It is most noticeable on design-temperature days.
9. **Cracked heat exchanger or combustion problems.** These are less common. A technician may find them while checking temperature rise and combustion. They are a safety concern, so they must be checked by a professional.

## Safe checks before you call anyone

- **Check the filter.** Turn the thermostat off first, then slide out the filter. If it's gray or clogged, replace it with the same size. Use a MERV 8 or lower in a 1" slot unless your installer says otherwise.
- **Check the thermostat.**
  - Make sure it's set to HEAT and the fan is set to AUTO.
  - Set it a few degrees above room temperature.
  - Replace the batteries if it has them.
  - Confirm no "hold" or schedule is lowering the setpoint.
- **Open all supply registers and clear the return grilles.** Move furniture, rugs, and curtains away from them.
- **Feel the air at a register near the furnace** about 5 minutes into a cycle. It should feel clearly hot, not just warm. Note what you find for the technician.
- **Look at any visible ducts** in the basement or utility area. Note any obvious disconnected sections. Don't open or repair anything inside the furnace cabinet.
- **Make sure the furnace's front panels are fully seated.** A loose blower door can pull in room air and may also trigger the door safety switch.
- **Check outdoor vent and intake pipes** on high-efficiency units for snow, ice, or nests. Clear only what you can reach safely from the outside.
- **Do a single reset if needed.** If the unit seems to be cycling on a fault, turn the furnace switch or breaker off for 30 seconds, then back on. Do this once only. If the problem continues, call a pro.

## How a technician will diagnose it

A good technician should do most of the following. Use this list to sanity-check what you're told.

- **Read the control board LED and stored fault history.** This is especially important for repeated high-limit or pressure switch events.
- **Measure temperature rise** (supply air minus return air). They will compare it with the range on the furnace rating plate, which is often about 35–65°F, depending on the model.
  - A **low rise** points to underfiring.
  - A **high rise** points to restricted airflow.
- **Measure static pressure** in the ductwork to find filter, coil, or duct restrictions.
- **Check gas inlet and manifold pressure** with a manometer at low and high fire, then compare them with Rheem's specifications.
- **Clock the gas meter** to confirm the actual input BTU.
- **Verify staging.** This means checking thermostat wiring (W1/W2), the board's staging jumper or DIP settings, and the gas valve's response.
- **Inspect the blower** wheel, motor amperage, and speed tap or airflow profile settings.
- **Inspect the heat exchanger and do a combustion analysis** if the readings are abnormal.
- **Evaluate the house and ducts.** This includes a duct leakage inspection and, if sizing is in doubt, a Manual J load calculation.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Lukewarm air, weak airflow everywhere | Clogged or restrictive filter | Replace the filter | Static pressure test; clean the blower or coil if needed |
| Furnace runs, burners shut off, fan keeps blowing | High-limit trips from low airflow | Replace the filter; open the registers | Diagnose the limit switch and airflow; read the fault history |
| Two-stage unit never seems to go to full heat | Staging setting or thermostat wiring | Confirm thermostat settings and batteries | Check W2 wiring, board staging settings, and gas valve |
| Air warm but not hot; temperature rise low | Low gas pressure or underfiring | None | Measure manifold pressure; clock the meter; adjust per specifications |
| Some rooms cold, others fine | Closed registers or duct leaks | Open the registers; note visible disconnects | Seal or repair the ducts; balance the airflow |
| Fan always running, even between cycles | Thermostat fan set to ON | Set the fan to AUTO | Check the board or fan relay if the fan still won't stop |
| Can't keep up only on the coldest days | Undersized system or heat loss | Close drapes at night; check for drafts | Manual J load calculation; recommend insulation or a right-sized unit |
| Odd smell, soot, or a CO alarm | Combustion or heat exchanger problem | Turn the furnace off, leave the home if the CO alarm sounds, and call 911 or your gas utility | Combustion analysis; heat exchanger inspection |

## Repair costs

These are typical US ranges, including labor. Prices vary by region and model.

| Repair | Typical cost |
|---|---|
| Air filter (DIY) | $10–$40 |
| Thermostat batteries or settings (DIY) | $0–$10 |
| Diagnostic visit | $90–$200 |
| Thermostat replacement (pro-installed, two-stage compatible) | $150–$450 |
| Gas pressure adjustment or staging correction | $100–$250 |
| Blower wheel cleaning | $150–$400 |
| Gas valve replacement | $300–$800 |
| Blower motor replacement (PSC) | $300–$700 |
| Blower motor replacement (ECM/variable-speed) | $600–$1,500 |
| Inducer motor replacement | $350–$900 |
| Duct sealing or repair (localized) | $200–$1,000 |
| Whole-house duct sealing | $1,000–$3,000+ |
| Heat exchanger replacement | $1,500–$3,500 (often leads to considering a replacement furnace) |
| New furnace (installed) | $3,500–$8,000+ |

## Related codes

- Rheem Furnace Blowing Cold Air: Causes & Fixes
- Rheem Furnace Short Cycling: Causes, Fixes & Costs
- Rheem Furnace Keeps Shutting Off: Causes & Fixes
- Rheem Furnace Blower Not Running: Causes & Fixes
- Rheem Furnace Flame Sensor Problems: Causes & Fixes

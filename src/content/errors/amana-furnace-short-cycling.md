---
title: "Amana Furnace Short Cycling: Causes, Fixes & Costs"
code: "Short cycling"
description: "Amana furnace short cycling? Causes include a dirty filter, high-limit trips, a weak flame sensor or a thermostat issue. Safe checks, fixes and costs."
brand: amana
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200+ if the blower motor or control board needs replacement"
appliesTo: "Amana gas furnaces (AMVC, AMVM, AMEC, AMES, AMH, ACVC, ACVM series and older GMS/GME Goodman-built models) with integrated control boards that show LED flash codes; board fault history and LED behavior vary by model and board revision"
tags:
  - amana
  - furnace
  - short-cycling
  - high-limit
  - flame-sensor
  - airflow
parts:
  - name: "Furnace air filter (correct size)"
    search: "furnace air filter MERV 8 16x25x1"
  - name: "Thermostat batteries"
    search: "AA lithium batteries thermostat"
  - name: "Programmable thermostat"
    search: "programmable thermostat compatible with gas furnace"
datePublished: 2026-11-25
dateModified: 2026-11-25
reviewedBy: ""
faq:
  - q: "What counts as short cycling on an Amana furnace?"
    a: "A normal heating cycle usually lasts at least 8 to 15 minutes. If the burners light and shut off within a few minutes, over and over, before the house reaches the set temperature, the furnace is short cycling."
  - q: "Is short cycling dangerous?"
    a: "Usually it is not immediately dangerous, but it often means a safety switch is tripping, most commonly the high-limit from overheating. Repeated overheating stresses the heat exchanger, so get it diagnosed rather than letting it run that way for weeks."
  - q: "Will the furnace show a flash code when it short cycles?"
    a: "Often, yes. Check the LED through the sight glass in the blower door before you turn the power off. Four flashes points to the high-limit, and seven flashes points to a low flame signal. Short cycling caused by the thermostat usually shows no code at all."
  - q: "Can a dirty filter really cause short cycling?"
    a: "Yes. A clogged filter restricts airflow, so the heat exchanger overheats and the high-limit switch shuts the burners off. The limit resets once the furnace cools, and the cycle repeats. A filter is the first thing to check."
  - q: "Does the furnace reset itself after short cycling?"
    a: "High-limit trips reset automatically once the furnace cools, which is why the burners keep relighting. If the board reaches a lockout, such as an ignition lockout after repeated flame losses, most Amana boards retry after about an hour or reset when you cycle the power."
---

## What this code means

Short cycling is a symptom, not a single fault code. It means your Amana furnace starts a heating cycle, the burners light, and then they shut off within a few minutes. This repeats many times, even though the thermostat hasn't been satisfied.

On Amana furnaces, short cycling almost always has one of three sources:

- **A safety control interrupting the burners.** Usually this is the high-limit switch, which trips because of overheating from poor airflow.
- **The board losing flame proof.** A weak flame sensor signal makes the board shut the gas off.
- **The thermostat ending the call for heat too early.**

The key diagnostic step is to read the board's LED through the blower door sight glass while the furnace is acting up. Do this before you cycle the power, because on many boards a power cycle clears the code display.

- **No code:** the problem is often the thermostat.
- **Four flashes (high-limit):** points to airflow.
- **Seven flashes (low flame signal):** points to the flame sensor.

Limit trips reset automatically as the furnace cools, which is why the cycle keeps repeating. Flame-loss retries can end in an ignition lockout. Most Amana boards clear that after about an hour or when power is cycled. Exact behavior varies by board.

If you see a specific flash code, see the dedicated page for that code. This page covers the short-cycling pattern as a whole.

## Common causes, ranked by probability

1. **Restricted airflow causing high-limit trips.** A clogged filter, closed or blocked supply registers or returns, or a dirty evaporator coil above the furnace makes the heat exchanger overheat. The limit opens and the burners shut off. The limit then cools and closes, and the furnace relights. This is the most common cause.
2. **Dirty or weak flame sensor (low flame signal).** The burners light but drop out after a few seconds or minutes because the board can't prove flame reliably. It often shows as 7 flashes, or eventually as an ignition lockout.
3. **Thermostat problems.** Possible causes include:
   - weak batteries
   - poor location (near a supply register, in sunlight, or near a heat source)
   - a wrong cycle-rate or heat-anticipation setting
   - a loose thermostat wire

   These end the call for heat early. Short cycling with no board code often traces here.
4. **Blower problems.** A failing blower motor, a weak run capacitor on PSC models, a dirty blower wheel, or incorrect blower speed settings reduce airflow and trip the limit.
5. **Oversized furnace.** The house reaches the setpoint very quickly, so the cycles are short but normal. You'll notice rapid temperature swings with no fault code. This is a design issue, not a failure.
6. **Weak or failing limit switch.** A limit that opens below its rated temperature causes nuisance trips even with good airflow.
7. **Pressure switch or venting issues on some models.** A marginal pressure switch, a partly blocked vent or intake, or condensate backing up in the collector box on 90%+ models can drop the burners mid-cycle. This is usually logged as 3 flashes.

## Safe checks before you call anyone

- **Note the LED code first.** Look through the sight glass on the blower door and count the flashes. Write the count down before you touch any power.
- **Replace the air filter.** Even a filter that looks only moderately dirty can trip the limit on a tight duct system. Match the size printed on the old filter, and check the arrow for airflow direction.
- **Open the supply registers and clear the return grilles.** Make sure furniture, rugs and drapes aren't blocking them. Don't close more than a few registers in the house.
- **Check the thermostat:**
  - Replace the batteries.
  - Confirm it's set to Heat with the correct system type (gas furnace, not heat pump).
  - Make sure it isn't mounted near a supply vent, a lamp, or in direct sun.
- **Check the condensate line on high-efficiency (90%+) models.** Make sure the drain line and any condensate pump aren't clogged or full. A backed-up drain can make the furnace shut down mid-cycle.
- **Check the outdoor vent and intake pipes** (PVC pipes on 90%+ models). Clear snow, ice, leaves or nests from the terminations, but only from outside the house.
- **Make sure the blower door is seated firmly.** A loose door can open the door safety switch.
- **Reset once if the furnace has locked out.** Turn the furnace switch or breaker off for 30 seconds, then back on. Do this only once. If it short cycles again, call a technician. Don't keep resetting it.

## How a technician will diagnose it

- Reads the current code and the fault history on boards that store it. Watches a full cycle to see which device drops the burners.
- Measures **temperature rise** across the furnace and compares it to the range on the rating plate. A rise above the range confirms an airflow problem.
- Measures **static pressure** in the ducts to find restrictions such as a dirty coil, undersized returns or closed dampers.
- Checks the **blower motor**:
  - amp draw
  - capacitor (PSC motors)
  - wheel cleanliness
  - speed tap or ECM settings
- Measures **flame signal in microamps**, and cleans or replaces the flame sensor if the signal is low. Also checks the burner ground and flame quality.
- Tests the **high-limit switch** and verifies its rating. A tech should not replace a limit without first finding why it tripped.
- Checks thermostat wiring, anticipator or cycle-rate settings, and placement.
- On 90%+ models, checks pressure switch readings, the vent, and condensate drainage at the collector box.
- Compares furnace capacity to the home's heat load if no fault is found. This identifies oversizing.

**Red flag:** a quote that only swaps the limit switch, when the temperature rise or static pressure was never measured.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Burners shut off after a few minutes and the blower keeps running; 4 flashes | High-limit trip from poor airflow | Replace the filter; open registers; clear returns | Measure temperature rise and static pressure; clean the coil or blower; correct the blower speed |
| Burners light, then go out within seconds; 7 flashes or lockout | Dirty or weak flame sensor | One power reset only | Clean or replace the flame sensor; check grounding and the burners |
| Short cycles with no code; thermostat display flickers | Thermostat batteries, setting or location | Replace the batteries; check the mode and settings | Check thermostat wiring; relocate the thermostat; adjust the cycle rate |
| Weak airflow at the vents and a hot cabinet | Failing blower motor or capacitor | Check the filter and registers | Test the capacitor and motor; replace as needed |
| Short cycles even with a clean filter and good airflow | Weak limit switch | None beyond the filter check | Verify the limit trips at its rated temperature; replace if faulty |
| Very short, normal-looking cycles with no fault | Oversized furnace | Use a thermostat with cycle-rate control | Load calculation; adjust the firing rate or recommend a right-sized replacement |
| Shuts down mid-cycle on a 90%+ model; 3 flashes | Vent blockage, condensate backup or pressure switch | Clear the outdoor vent terminations; check the condensate drain | Check the pressure switch, inducer, collector box and drain trap |

## Repair costs

These are typical US price ranges. Actual costs vary by region, model and warranty status.

| Repair | Typical cost |
|---|---|
| Air filter (DIY) | $5 – $40 |
| Thermostat batteries (DIY) | $5 – $10 |
| Service or diagnostic call | $90 – $200 |
| Flame sensor cleaning | $90 – $200 |
| Flame sensor replacement | $120 – $250 |
| High-limit switch replacement | $150 – $350 |
| Blower capacitor replacement | $120 – $250 |
| Blower wheel or evaporator coil cleaning | $150 – $500 |
| Blower motor, PSC | $350 – $700 |
| Blower motor, ECM/variable-speed | $600 – $1,500 |
| Pressure switch replacement | $150 – $350 |
| Control board replacement | $300 – $700 |
| New thermostat, installed | $150 – $400 |
| Duct or return-air modifications for airflow | $300 – $2,000+ |

Amana parts often carry a 10-year or lifetime limited warranty when the unit is registered, which can cut parts costs. Labor is usually not covered.

## Related codes

- Amana Furnace 4 Flashes: Open High-Limit Switch Fix — the most common code behind airflow-related short cycling
- Amana Furnace 7 Flashes: Low Flame Signal Fix — burners dropping out from a weak flame sensor
- Amana Furnace 3 Flashes: Pressure Switch Stuck Open Fix — venting or condensate shutdowns on 90%+ models
- Amana Furnace Ignition Lockout: Causes, Fixes & Costs — what happens after repeated flame losses
- Amana Furnace Code 1 Flashes: Ignition Lockout Fixes
- Amana Heat Pump Short Cycling: Causes, Fixes & Costs — if your system is a heat pump with furnace backup
- Amana AC Short Cycling: Causes, Fixes & Repair Costs — for short cycling in cooling mode

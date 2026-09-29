---
title: "Lennox Furnace Blower Won't Shut Off: Causes & Fixes"
code: "Blower won't shut off"
description: "Lennox furnace blower runs constantly? Causes include thermostat fan settings, an open limit switch, or a stuck relay. DIY checks plus $0–$1,200 repair costs."
brand: lennox
equipment: furnace
severity: diy
costRange: "$0 DIY – $1,200 if the control board fails"
appliesTo: "Most Lennox gas furnaces (Merit, Elite, Signature) using SureLight integrated ignition control boards; older units may use a different OEM-supplied board, and fan-off delay options and terminal behavior vary by board."
tags:
  - lennox
  - furnace
  - blower
  - fan-wont-stop
  - thermostat
parts:
  - name: "Furnace air filter"
    search: "furnace air filter pleated"
  - name: "Thermostat batteries (AA/AAA)"
    search: "energizer aa batteries"
  - name: "Programmable thermostat"
    search: "honeywell programmable thermostat"
datePublished: 2026-09-29
dateModified: 2026-09-29
reviewedBy: ""
faq:
  - q: Is it bad to let the blower run constantly?
    a: If the blower is running non-stop simply because the thermostat fan is set to ON, it isn't dangerous — it just drives up your electric bill and can wear the motor faster. But if the blower runs constantly and you are getting no heat, the high limit may be open because the furnace has been overheating. In that case stop using the furnace normally and have the airflow problem diagnosed before running it again.
  - q: Why does my Lennox blower keep running after the heat stops?
    a: A short run-on of 60 to 180 seconds after heating is normal — that is the fan-off delay cooling the heat exchanger. If it never stops, suspect the thermostat fan setting, an open limit switch, or a stuck relay.
  - q: Can I fix a blower that won't shut off myself?
    a: You can check the thermostat fan setting (AUTO vs ON), replace batteries, swap the filter, and cycle the breaker. Anything inside the cabinet — relays, limit switches, wiring, the control board — is a technician job.
  - q: Will turning off the furnace at the breaker stop the blower?
    a: Yes, cutting power at the breaker or furnace switch stops the blower immediately. If the blower restarts and won't shut off once power is restored, the underlying fault is still present and needs diagnosis.
---

## What this code means

"Blower won't shut off" is not a numbered Lennox fault code — it's a behavior. Your indoor blower motor runs continuously instead of stopping after the heating cycle ends. On most Lennox gas furnaces (Merit, Elite, and Signature series using SureLight integrated ignition control boards — older units may use a different OEM-supplied board), the blower is commanded by the control board through a fan relay, and it's told when to run by the thermostat and by the furnace's own safety and timing logic.

A short run-on period is normal and by design: after the burners shut off, the board keeps the blower running for a **fan-off delay** (typically 60–180 seconds) to pull remaining heat off the heat exchanger. Fan-off delay options and terminal behavior vary by board — some are adjustable via dip switches or a jumper, some are not. If the blower runs longer than the delay your board is set for — or never stops at all — something is keeping the fan circuit energized.

Because this is a behavior rather than a lockout code, there is **no auto-reset or hold state** to report. The blower simply follows whatever is telling it to run.

## Common causes, ranked by probability

1. **Thermostat fan set to ON instead of AUTO.** This is by far the most common cause. In ON mode the thermostat energizes the G (fan) terminal continuously, so the blower runs 24/7 regardless of heating demand. This is a setting, not a fault.
2. **Open high-limit switch.** If the heat exchanger overheats (often from a dirty filter or blocked airflow), the limit switch opens, shuts off the gas, and keeps the blower running continuously to cool the furnace. The fan running non-stop is the furnace protecting itself — and unlike the other causes, there is a real overheating condition behind it.
3. **Thermostat wiring or a failing thermostat holding G energized.** A shorted G-to-R connection, a wiring fault, or a defective thermostat can keep the fan circuit powered even in AUTO.
4. **Stuck or welded fan relay on the control board.** The relay contacts can weld closed, leaving the blower circuit permanently energized even after the board commands it off.
5. **Failed control board.** A board with faulty fan-timing logic or damaged output circuitry may never de-energize the blower.
6. **Fan-off delay set too long.** On boards where the delay is adjustable, a setting at the maximum can make a normal run-on look like a failure — the blower does eventually stop, just after several minutes.

Causes 2 and 4–6 require a technician (you can and should check the filter and vents yourself for cause 2). Note that gas-supply and ignition faults are **not** causes here — those belong to Lennox ignition and flame-proving codes.

## Safe checks before you call anyone

- **Set the thermostat fan to AUTO.** On the thermostat, look for the FAN setting and switch it from ON to AUTO. If the blower stops within a few minutes, that was the whole problem.
- **Replace the thermostat batteries.** Low batteries can cause erratic thermostat behavior; fresh AA/AAA batteries are a cheap first step.
- **Check and replace the air filter.** A clogged filter restricts airflow and can trip the high-limit switch, which then forces the blower to run continuously. Swap in a clean filter that matches the size printed on the edge of your existing filter.
- **Confirm supply and return vents are open.** Blocked or closed registers restrict airflow and can also trip the limit. Walk the house and make sure vents aren't shut, blocked by furniture, or covered by rugs.
- **Cycle the breaker or furnace switch.** Turn the furnace off at its breaker or the wall switch, wait 30 seconds, then restore power. If the blower runs non-stop again in AUTO with a clean filter, you have an internal fault.
- **Check the condensate line (high-efficiency models).** A clogged condensate drain can trigger a safety switch on some models; make sure the drain isn't backed up.

Do **not** open the furnace cabinet, test the relay, or touch any wiring — those steps are for a technician. And if the blower is running constantly while the furnace produces no heat, don't keep running the furnace normally; that pattern points at an overheating/airflow problem that needs to be diagnosed.

## How a technician will diagnose it

A qualified tech will typically:

1. **Verify the thermostat command.** They'll check whether G (fan) is being energized by the thermostat and confirm the fan setting and wiring.
2. **Check the high-limit switch.** Using a multimeter, they'll test whether the limit is open (which forces continuous blower operation) and investigate why — dirty filter, blower issue, or a failed limit.
3. **Test the fan relay on the control board.** They'll confirm whether the relay contacts have welded closed by checking continuity with the board de-energized.
4. **Inspect the control board outputs.** If the thermostat and limit are fine and the relay isn't stuck, they'll evaluate the board's fan-timing logic and output circuit.
5. **Verify the fan-off delay setting.** They'll check the dip switches or jumper, where the board provides them, against the Lennox spec to rule out an over-long but normal run-on.

A reasonable quote names the specific failed part — thermostat, limit switch, or control board — not a vague "electrical problem."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Blower runs 24/7, heat works normally | Thermostat fan set to ON | Switch fan to AUTO | Verify thermostat wiring if AUTO doesn't help |
| Blower runs constantly, no heat | Open high-limit from overheating | Replace filter, open vents, stop normal use | Test limit, find airflow cause, replace limit |
| Blower never stops even in AUTO | Stuck/welded fan relay | Cycle breaker once | Test and replace fan relay or control board |
| Blower runs several minutes then stops | Long fan-off delay (normal or over-set) | None needed | Adjust dip switch/jumper if adjustable and too long |
| Erratic fan behavior | Failing thermostat or low batteries | Replace batteries | Replace thermostat, check G wiring |
| Blower runs after clean filter + AUTO | Control board fault | Cycle breaker once | Diagnose and replace control board |

## Repair costs

- **Thermostat fan reset to AUTO:** $0 — a setting change.
- **Air filter replacement:** $10–$40 for a standard pleated filter.
- **Thermostat batteries:** $5–$15.
- **New thermostat (if faulty):** $30–$120 DIY for a basic-to-programmable unit; $150–$350 installed by a pro.
- **High-limit switch replacement:** $150–$400 installed, depending on the part and labor.
- **Fan relay replacement:** often integrated into the control board on Lennox units; if separate, $100–$250 installed.
- **Control board replacement:** $400–$1,200 installed, with the board itself being the bulk of the cost. Communicating / iComfort-compatible boards sit at the top of that range; basic single-stage boards sit near the bottom.

The good news: the single most common cause (fan set to ON) costs nothing to fix.

## Related codes

Lennox alert-code numbering and meanings vary by furnace and control board — confirm any code you see against the installation or service literature for your specific unit before acting on it.

- **Lennox Furnace Code E250 — Causes, Fixes & Cost** — check your unit's literature for what this code means on your furnace.
- **Lennox Furnace Keeps Shutting Off: Causes, Fixes & Costs** — the opposite airflow/limit behavior.
- **Lennox Furnace Short Cycling: Causes, Fixes & Costs** — for rapid on/off cycling.
- **Lennox Furnace Won't Turn On: Causes, Fixes & Costs** — if the blower or furnace won't start at all.
- **Lennox Furnace Code E115 — Causes, Fixes & Cost** — check your unit's literature for what this code means on your furnace.

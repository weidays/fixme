---
title: "Goodman Furnace 1 Flash: Ignition Failure Lockout Fixes"
code: "1 flashes"
description: "Goodman furnace 1 flash means ignition failure lockout after 3 failed trials. Causes, safe checks, and repair costs from $0 DIY to $600+."
brand: goodman
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $600+ if the gas valve or control board needs replacement"
appliesTo: "Goodman/Amana furnaces with integrated ignition controls (GMS, GDS, GMEC, GMVC and similar). The 1-flash code most commonly signals ignition-failure lockout, but LED legends vary by board revision — always confirm against the diagnostic label inside the burner door."
tags:
  - goodman
  - furnace
  - ignition-failure
  - lockout
  - no-heat
parts:
  - name: Pleated furnace air filter
    search: furnace air filter 16x25x1 MERV 8
  - name: Thermostat batteries (AA/AAA)
    search: AA AAA alkaline batteries
datePublished: 2026-09-15
dateModified: 2026-09-15
reviewedBy: ""
faq:
  - q: What does 1 flash mean on a Goodman furnace?
    a: On most Goodman boards, one flash of the diagnostic LED signals an ignition-failure lockout — the furnace tried to light 3 times or lost flame 5 times in one call and shut down for one hour.
  - q: Will the Goodman 1-flash lockout reset on its own?
    a: Yes. The control automatically clears the lockout after about one hour, or immediately if you cycle power at the furnace switch or breaker. One reset is fine, but repeated resets without a fix can be unsafe.
  - q: Can I fix a Goodman ignition-failure lockout myself?
    a: You can safely try one reset, replace a dirty filter, and confirm the gas supply valve is on and thermostat is calling for heat. Cleaning the flame sensor, replacing the igniter, or testing the gas valve is technician work.
  - q: Why does my Goodman furnace keep locking out after ignition?
    a: The most common cause is a dirty flame sensor that cannot prove flame, so the board thinks ignition failed and locks out after several trials. A weak igniter or gas-supply issue can also trigger it.
---

## What this code means

On most Goodman (and Amana) furnaces, **one flash** of the diagnostic LED means an **ignition-failure lockout**. The control board attempted to light the burners and either:

- failed to ignite after **3 ignition trials**, or
- **lost flame 5 times** during a single heat call.

When either condition is met, the control shuts down and **locks out for one hour**. It will **auto-reset after that hour**, or you can clear it immediately by cycling power at the furnace switch or breaker.

> **Important:** LED flash legends vary by board revision. Confirm "1 flash = ignition failure lockout" against the diagnostic chart printed inside your burner-compartment door before acting on this page. On a few boards a single flash means something else entirely, so the label is the authority.

A lockout is the furnace protecting itself. The furnace isn't broken beyond repair — it's telling you it repeatedly tried and failed to establish and prove a stable flame.

## Common causes, ranked by probability

1. **Dirty or failing flame sensor** — the sensor can't detect the flame, so the board reads it as "no ignition" and locks out after the trial count. This is the single most common trigger.
2. **Weak or cracked hot-surface igniter** — the igniter glows but no longer reaches ignition temperature reliably, causing missed lights.
3. **Insufficient or interrupted gas supply** — a partially closed manual gas valve, low pressure, or a faulty gas valve prevents a clean light. (Note: this is documented for *this* ignition code specifically, not for control-circuit codes.)
4. **Dirty or misaligned burners** — carbon buildup or debris disrupts the flame so it can't be proven.
5. **Faulty gas valve** — the valve isn't opening fully or on time.
6. **Poor grounding or wiring at the flame sensor / control** — a marginal ground defeats flame rectification.
7. **Failing integrated control board** — less common, but a bad board can misread flame or mistime the sequence.

## Safe checks before you call anyone

These are the only steps a homeowner should perform. If they don't restore heat, stop and call a licensed HVAC pro.

- **Thermostat:** Confirm it's set to **Heat** and the setpoint is several degrees above room temperature. Replace the **batteries** if it's battery-powered.
- **Air filter:** A severely clogged filter can cause overheating and nuisance shutdowns. Replace it if it's dirty.
- **Furnace switch & breaker:** Make sure the switch on or near the furnace is on and the breaker isn't tripped. **One reset** (cycle power off for 30 seconds, then on) is allowed to clear the lockout.
- **Gas supply:** Verify the manual gas shutoff valve at the furnace is **fully open** (handle parallel to the pipe). Do not adjust anything beyond the manual valve. If you smell gas, leave and call your gas utility or 911.
- **Vents & registers:** Confirm supply and return registers are open and unblocked.
- **Condensate line (high-efficiency models):** Check that the drain isn't clogged or backed up, which can trip a safety and interrupt operation.

**Do not** open the cabinet to clean the flame sensor, touch the igniter, bypass switches, or reset the unit repeatedly. That's where the DIY boundary ends.

## How a technician will diagnose it

A qualified tech will typically:

1. Read the flash code and the board's fault history to confirm ignition failure versus flame loss.
2. Watch a full ignition sequence: inducer start, igniter glow, gas valve opening, and flame establishment.
3. **Measure flame-sensor microamps** and clean or replace the sensor if the signal is weak.
4. **Test the hot-surface igniter** resistance and check for cracks.
5. Verify **gas pressure** at the valve (inlet and manifold) against the rating plate.
6. Inspect and clean **burners** and check flame carryover.
7. Check **grounding and wiring** at the control and sensor.
8. Test the **gas valve** operation and, if needed, the **control board**.

Knowing this sequence lets you sanity-check a quote — a good diagnosis starts with the flame sensor, not a board swap.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Igniter glows, gas lights briefly, then shuts off; locks out | Dirty flame sensor can't prove flame | One reset; replace filter | Clean/replace flame sensor, check ground |
| Igniter glows but never lights gas | Weak/cracked igniter | One reset | Test and replace hot-surface igniter |
| No ignition at all, gas valve seems off | Closed manual valve or low gas supply | Confirm manual valve fully open | Measure gas pressure, service valve |
| Lights but flame flutters/rolls, locks out | Dirty or misaligned burners | Replace filter, open vents | Clean and align burners |
| Repeated lockouts after every reset | Faulty gas valve or control board | Stop resetting; call pro | Test gas valve and integrated control |
| Random shutdowns with clean filter | Poor grounding/wiring | None | Inspect and repair wiring/ground |

## Repair costs

Ranges are typical US installed prices; your market and model vary.

- **Diagnostic / service call:** $80–$180
- **Flame sensor clean:** $0 DIY (technician) to $90–$180 as part of a service call
- **Flame sensor replacement:** $150–$300
- **Hot-surface igniter replacement:** $150–$350
- **Burner cleaning:** $150–$300
- **Gas valve replacement:** $300–$600+
- **Integrated control board replacement:** $350–$700+

Homeowner-buyable parts on this page (filter, thermostat batteries) are a few dollars each and are the only items inside the DIY boundary.

## Related codes

- **Goodman Furnace Lockout: Causes, Fixes & Costs** — broader no-heat lockout troubleshooting.
- **Goodman Furnace Flame Rollout: Shut Down Now** — if you smell burning or see flame outside the burner box, treat it as urgent.
- **Goodman AC Running But Not Cooling: Causes & Costs** — for cooling-side issues unrelated to this ignition code.

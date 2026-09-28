# Compressors

Compressors raise gas pressure and come in several designs with very different vibration behavior. Identify the type first, because the same spectrum peak can mean different things on a centrifugal, screw, or reciprocating machine.

## Overview

| Type | How it works | Vibration character |
|---|---|---|
| Centrifugal | High-speed impeller(s) add velocity, then diffuser converts it to pressure | Smooth, dominated by 1x and blade-pass; shaft vibration usually measured with proximity probes |
| Screw (rotary) | Two meshing helical rotors trap and squeeze gas | Lobe-pass frequency plus bearing tones; high axial loads |
| Reciprocating | Pistons in cylinders, driven by a crankshaft | Strong 1x, 2x and harmonics; impulsive, best read in the time waveform |

!!! info "Check limits first"
    Use the OEM alarm and trip limits and, for centrifugal machines, the applicable API 617 / ISO 20816 guidance. Set thresholds per machine from its own baseline, not from generic tables.

## Key frequencies

| Frequency | Formula | Meaning |
|---|---|---|
| 1x | Shaft speed | Imbalance, bent shaft, thermal bow |
| 2x | 2 × shaft speed | Misalignment; piston inertia on reciprocating machines |
| Blade pass (BPF) | Blades × RPM | Impeller flow pulsation (centrifugal) |
| Lobe pass | Male lobes × male-rotor RPM | Rotor mesh pulsation (screw) |
| Gear mesh (GMF) | Teeth × RPM of that shaft | Integral-gear and geared-screw machines |
| Sub-synchronous | Below 1x | Oil whirl, rotating stall, surge |

---

## Centrifugal compressors

### Imbalance from fouling or erosion
!!! warning "Watch"
    **Signature:** dominant 1x, steady phase, mainly radial.

    **Cause:** deposits (common with polymerizing gases) or erosion on the impeller shift the rotor's mass center.

    **Advice:** compare 1x against baseline and against process conditions. A slow rise usually means fouling; a sudden step suggests lost material or damage.

### Surge
!!! danger "Alert-worthy"
    **Signature:** very low-frequency, large-amplitude swings in pressure, flow and vibration, often with audible banging.

    **Cause:** flow reversal when operating too far left on the compressor map (low flow, high head).

    **Advice:** treat as a process event first. Check anti-surge valve behavior and operating point. Repeated surge damages thrust bearings, seals and impellers.

### Rotating stall
!!! warning "Watch"
    **Signature:** sub-synchronous energy, typically a discrete or narrow-band peak between roughly 10% and 90% of running speed, often load-dependent.

    **Cause:** flow separation in the impeller or diffuser at off-design flow.

    **Advice:** check whether it changes with flow or valve position. If it does, it is aerodynamic, not a bearing fault.

### Oil whirl and oil whip (fluid-film bearings)
!!! warning "Watch: oil whirl"
    **Signature:** peak at about 0.42 to 0.48x RPM, tracking running speed.

!!! danger "Alert-worthy: oil whip"
    **Signature:** whirl frequency locks onto the first critical speed and no longer tracks RPM; amplitude can climb quickly.

    **Advice:** escalate immediately and review bearing clearance, lube oil temperature and pressure, and load.

### Rotor rub
!!! danger "Alert-worthy"
    **Signature:** 1x with many harmonics and sub-harmonics, clipped time waveform, possible temperature rise.

    **Cause:** contact with seals or casing from thermal growth, misalignment or excessive vibration.

    **Advice:** a rub can worsen rapidly. Cross-check with bearing metal temperatures and axial position.

### Blade pass and flow disturbance
!!! warning "Watch"
    **Signature:** rising blade-pass peak or new sidebands around it.

    **Cause:** fouled or damaged impeller, changes in diffuser or inlet flow.

    **Advice:** trend against baseline. Presence is normal; a rising trend is the signal.

### Geared (integral-gear) machines
!!! warning "Watch"
    **Signature:** rising GMF or sidebands spaced at pinion or bull-gear speed.

    **Advice:** see the [Gearboxes](gearboxes.md) page. Look at the time waveform for once-per-revolution impacts that indicate a single-tooth fault.

---

## Screw compressors

### Bearing wear
!!! danger "Alert-worthy"
    **Signature:** BPFO / BPFI / BSF peaks with harmonics and sidebands, rising noise floor in the high-frequency or envelope spectrum.

    **Cause:** high axial and radial loads on the rotor bearings; contaminated or degraded oil.

    **Advice:** worn bearings let the rotors move, raising clearances and hurting efficiency, and can end in rotor contact. Plan replacement on stage-3 indications. See [Bearings](bearings.md).

### Rotor contact or wear
!!! danger "Alert-worthy"
    **Signature:** rising lobe-pass amplitude, broadband noise, harmonics of lobe pass, often falling efficiency or rising discharge temperature.

    **Advice:** confirm with process data (capacity, power draw, temperature) before deciding on an internal inspection.

### Liquid carryover or slugging
!!! warning "Watch"
    **Signature:** sudden broadband bursts or transients, sometimes with motor current spikes.

    **Advice:** check inlet separation and condensate handling.

### Lubrication problems
!!! warning "Watch"
    **Signature:** raised high-frequency noise floor before discrete bearing peaks appear.

    **Advice:** verify oil level, filter differential, and oil analysis. Re-measure after correcting.

---

## Reciprocating compressors

The frequency spectrum is less diagnostic here. Use the time waveform and, where available, crank-angle-based analysis.

### Loose crosshead, rod or bearing
!!! danger "Alert-worthy"
    **Signature:** impacts once per revolution in the time waveform, harmonics of 1x, raised high-frequency energy.

    **Advice:** locate the impact by crank angle to identify the source. Loose components can fail quickly.

### Valve faults (leaking or broken)
!!! warning "Watch"
    **Signature:** high-frequency impacts at repeatable crank angles; changes in cylinder pressure and temperature.

    **Advice:** confirm with pressure-volume (PV) data and valve cover temperatures where available.

### Pulsation and piping vibration
!!! warning "Watch"
    **Signature:** vibration at running-speed harmonics on piping and bottles, often much higher than on the frame.

    **Cause:** acoustic resonance excited by pulsation.

    **Advice:** measure piping and supports, not just the frame. Check clamps and supports.

### Foundation and frame looseness
!!! danger "Alert-worthy"
    **Signature:** harmonic series (1x, 2x, 3x ...), strongly direction-dependent.

    **Advice:** inspect anchor bolts, grout and baseplate.

---

## Monitoring and alert guidance

| Situation | Suggested action |
|---|---|
| Stable, within baseline | Continue routine monitoring |
| Slow upward trend, single order rising | Watch: shorten measurement interval, cross-check process data |
| New peaks, harmonics or sidebands appearing | Watch to alert: identify the fault, state likely cause and advice |
| Sub-synchronous energy locking or growing, rub signs, surge events, or stage-3/4 bearing indicators | Alert immediately with severity, likely cause and a concrete next step |

!!! tip "Cross-check before alerting"
    Compare vibration with process data (pressure, flow, temperature, motor current) and oil condition. Many compressor faults are operational, not purely mechanical.

## Related pages

- [Bearings](bearings.md)
- [Gearboxes](gearboxes.md)
- [Vibration basics](vibration-basics.md)

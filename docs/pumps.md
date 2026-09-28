# Pumps

Most faults on centrifugal pumps are either mechanical (imbalance, misalignment, bearings, looseness) or hydraulic (cavitation, recirculation, operating away from the best efficiency point). Hydraulic faults are process-related, so always cross-check vibration against flow, suction and discharge pressure, and motor current.

## Overview

| Type | How it works | Vibration character |
|---|---|---|
| Centrifugal | Impeller adds velocity, volute converts it to pressure | 1x plus vane-pass; strong link to operating point |
| Gear / screw (positive displacement) | Meshing gears or rotors trap and move fluid | Mesh or lobe-pass frequency plus bearing tones |
| Piston / diaphragm (positive displacement) | Reciprocating stroke pushes fluid through valves | Stroke-rate harmonics, impulsive, pulsation-driven |

!!! info "Check limits first"
    Use the OEM limits and the applicable pump standard (for example ISO 10816-7 or ANSI/HI 9.6.4) and set alert levels from each pump's own baseline. Compare readings at the same flow and operating point.

## Key frequencies

| Frequency | Formula | Meaning |
|---|---|---|
| 1x | Shaft speed | Imbalance, bent shaft, impeller damage or fouling |
| 2x | 2 × shaft speed | Misalignment, pipe strain, looseness |
| Vane pass (VPF) | Vanes × RPM | Hydraulic pulsation as vanes pass the cutwater |
| Gear mesh | Teeth × RPM | Gear pumps |
| Stroke rate | Strokes per minute ÷ 60 | Piston and diaphragm pumps |
| Sub-synchronous | Below 1x | Recirculation, rotating stall, oil whirl in fluid-film bearings |
| Broadband high-frequency | Random | Cavitation, dry running, lubrication starvation |

---

## Centrifugal pumps

### Cavitation
!!! danger "Alert-worthy"
    **Signature:** raised random, broadband high-frequency noise, often with an audible "gravel" sound; VPF and its harmonics may rise; discharge pressure or flow may fluctuate.

    **Cause:** insufficient NPSH available, from a restricted or blocked suction, low suction level, high fluid temperature, or too high a flow.

    **Advice:** this is usually a process issue. Check suction conditions and strainers first. Sustained cavitation erodes the impeller and damages seals and bearings.

### Recirculation (operating too far left of BEP)
!!! warning "Watch"
    **Signature:** sub-synchronous or broadband energy and an elevated vane-pass peak that changes with flow or valve position.

    **Cause:** low flow causes internal flow reversal at the impeller inlet or outlet.

    **Advice:** compare against the pump curve and confirm the operating point. Prolonged low-flow operation shortens bearing and seal life.

### Impeller imbalance, fouling or erosion
!!! warning "Watch"
    **Signature:** dominant 1x, steady phase, mainly radial; slow rise indicates fouling or wear, a sudden step suggests lost material.

    **Advice:** compare 1x against baseline and against flow and pressure trends.

### Vane-pass amplitude rising
!!! warning "Watch"
    **Signature:** VPF amplitude climbs or sidebands appear around it.

    **Cause:** worn or damaged vanes, uneven clearance between the vane tips and cutwater, or flow disturbance in the suction.

    **Advice:** VPF is always present at some level. The trend against baseline is the signal.

### Wear ring wear
!!! warning "Watch"
    **Signature:** slowly rising 1x, lower discharge pressure or flow at the same speed, sometimes higher motor current.

    **Advice:** confirm with performance data before opening the pump.

### Misalignment and pipe strain
!!! warning "Watch"
    **Signature:** 1x and strong 2x, high axial component, often changes when pipe flanges are loosened.

    **Advice:** loosen suction or discharge flange bolts and watch the reading. If it drops, piping strain is the cause. Also check for soft foot.

### Bent shaft
!!! warning "Watch"
    **Signature:** 1x and strong 2x, high axial vibration even after realignment.

    **Advice:** confirm with phase readings and a runout check.

### Mechanical looseness
!!! danger "Alert-worthy"
    **Signature:** harmonic series (1x, 2x, 3x ...), often much worse in one radial direction, clipped time waveform.

    **Advice:** inspect baseplate, grout and anchor bolts and bearing housing fits.

### Bearing faults
!!! danger "Alert-worthy"
    **Signature:** BPFO / BPFI / BSF peaks with harmonics and sidebands; rising high-frequency noise floor; bearing temperature rising.

    **Advice:** see [Bearings](bearings.md). Plan replacement on stage-3 indications and check lubrication and alignment to avoid a repeat.

### Dry running and seal failure
!!! danger "Alert-worthy"
    **Signature:** sudden rise in broadband vibration and temperature, low motor current, possible leakage at the seal.

    **Advice:** stop and check suction and priming. Even short dry runs can wreck seals and wear rings.

### Structural resonance (especially vertical pumps)
!!! warning "Watch"
    **Signature:** large amplitude at 1x or VPF that is sharply speed-dependent; highest at the top of the motor or on the stand.

    **Advice:** confirm with a bump test. Vertical and long-shaft pumps often have natural frequencies close to running speed.

---

## Positive displacement pumps

### Gear and screw pumps
!!! warning "Watch"
    **Signature:** rising mesh or lobe-pass amplitude and sidebands, bearing tones, rising noise; falling flow at the same speed.

    **Advice:** wear opens internal clearances, which reduces capacity and raises temperature. Trend with flow and discharge pressure.

### Piston and diaphragm pumps
!!! warning "Watch"
    **Signature:** impacts in the time waveform locked to the stroke, raised harmonics of stroke rate, pressure pulsation on the discharge line.

    **Cause:** worn valves, loose components, or a failed pulsation dampener (lost precharge).

    **Advice:** check the dampener precharge and valve condition, and inspect piping and supports for pulsation-driven vibration.

### Cavitation or aeration
!!! danger "Alert-worthy"
    **Signature:** knocking or irregular impacts, unstable pressure and flow.

    **Advice:** check suction line, inlet conditions and air leaks.

---

## Monitoring and alert guidance

| Situation | Suggested action |
|---|---|
| Stable, within baseline at the usual operating point | Continue routine monitoring |
| Slow rise in 1x or VPF | Watch: check flow, pressure, clearances, wear |
| Changes only when flow or valve position changes | Likely hydraulic: check operating point and NPSH |
| New broadband high-frequency noise | Check suction, lubrication, cavitation, dry running |
| Bearing frequencies with harmonics and sidebands, looseness, dry running | Alert with severity, likely cause and next step |

!!! tip "Cross-check before alerting"
    Compare vibration with flow, suction and discharge pressure, motor current and temperature. Confirm the pump was at the same operating point when comparing readings.

## Related pages

- [Bearings](bearings.md)
- [Motors](motors.md)
- [Vibration basics](vibration-basics.md)

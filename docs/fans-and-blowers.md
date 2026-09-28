# Fans and Blowers

Fans are sensitive to imbalance from build-up and wear, and to aerodynamic conditions. Many faults change with damper position or flow, so record the operating condition with every reading.

## Overview

| Type | Notes |
|---|---|
| Centrifugal | Overhung wheel common, sensitive to build-up and erosion |
| Axial | Blade pitch and tip clearance matter |
| Belt-driven | Adds belt and pulley faults |
| Direct-drive | Coupling and motor alignment matter |

## Key frequencies

| Frequency | Formula | Meaning |
|---|---|---|
| 1x | Shaft speed | Imbalance, bent shaft, blade damage |
| 2x | 2 × shaft speed | Misalignment |
| Blade pass (BPF) | Blades × RPM | Aerodynamic pulsation |
| Belt frequency | π × D × RPM ÷ L | Belt condition (D = pulley diameter, L = belt length) |
| Sub-synchronous | Below 1x | Aerodynamic instability, belt slip |

## Faults

### Imbalance (build-up, erosion, blade damage)
!!! warning "Watch"
    **Signature:** dominant 1x, steady phase, mainly radial.

    **Cause:** material build-up, uneven erosion, a lost balance weight, or damaged blades.

    **Advice:** inspect the wheel. A sudden step in 1x suggests lost material. A slow rise suggests build-up.

### Misalignment (coupling or belt)
!!! warning "Watch"
    **Signature:** 1x and 2x with high axial.

    **Advice:** laser-align direct-drive fans. On belt drives, check pulley alignment and belt tension.

### Blade pass frequency rising
!!! warning "Watch"
    **Signature:** BPF amplitude climbs or new sidebands appear.

    **Cause:** worn or damaged blades, ductwork obstruction, uneven clearance, or flow disturbance at the inlet.

    **Advice:** BPF is normal at low levels. The trend against baseline is the signal.

### Aerodynamic instability or stall
!!! warning "Watch"
    **Signature:** broadband or sub-synchronous energy that changes with damper or valve position.

    **Advice:** check the operating point against the fan curve.

### Belt faults
!!! warning "Watch"
    **Signature:** peaks at belt frequency and harmonics; unstable amplitude when belts slip.

    **Advice:** check belt condition, tension, and pulley wear. Replace belts as a matched set.

### Looseness
!!! danger "Alert-worthy"
    **Signature:** harmonic series 1x, 2x, 3x ...; clipped time waveform.

    **Advice:** check hub, key, bearing housing and foundation bolts. Cracked wheel welds and loose hubs are serious safety issues.

### Bearing faults
!!! danger "Alert-worthy"
    **Signature:** BPFO / BPFI / BSF with harmonics and sidebands.

    **Advice:** see [Bearings](bearings.md). Overhung wheels load the outboard bearing, so check both.

### Resonance
!!! warning "Watch"
    **Signature:** large 1x that changes sharply with speed; may be high on the fan housing or foundation.

    **Advice:** confirm with a bump test. Common on flexible foundations and VFD-driven fans.

## Alert guidance

| Situation | Suggested action |
|---|---|
| Stable, within baseline at usual damper position | Continue routine monitoring |
| Slow 1x rise | Watch: inspect wheel for build-up or erosion |
| Sudden 1x step | Alert: possible lost material or blade damage |
| Changes only with damper or flow | Likely aerodynamic: check operating point |
| Looseness pattern or cracked wheel suspected | Alert: inspect before it fails |

## Related pages

- [Bearings](bearings.md)
- [Motors](motors.md)
- [Vibration basics](vibration-basics.md)

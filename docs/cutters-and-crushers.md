# Cutters, Crushers and Shredders

Impact-loaded machines (shredders, hammer mills, crushers, granulators, knife cutters) are inherently rough. High, spiky vibration is normal, so generic severity tables do not apply. Set thresholds from each machine's own baseline at comparable load and material.

## Overview

| Type | Notes |
|---|---|
| Shredders and granulators | Slow, heavy rotors with knives; feed-dependent loads |
| Hammer mills and impact crushers | High-speed rotors with hammers; strong impact signature |
| Jaw and cone crushers | Cyclic loading; eccentric shafts and heavy bearings |
| Knife cutters and choppers | Blade wear drives imbalance and load |

## What to trend

- **Overall RMS and peak:** both, since impacts show in peak first.
- **Crest factor:** peak ÷ RMS. Rising crest factor points to impacts (bearing or looseness).
- **Time waveform:** essential. Look for impacts, clipping, and periodic events.
- **Envelope spectrum:** best route to bearing frequencies through the impact noise.
- **Motor current or power:** cross-check with vibration for load and jams.

!!! tip "Compare like with like"
    Record load, material, and feed rate with each reading. A reading taken idling, or on a different material, is not comparable.

## Faults

### Impact and shock loading (normal operating signature)
!!! info "Reference"
    Broadband transients in the time waveform are expected. Alert on change against the machine's baseline, not on the presence of impacts.

### Accelerated bearing wear from shock loads
!!! danger "Alert-worthy"
    **Signature:** BPFO / BPFI / BSF in the envelope spectrum, often hidden in raw FFT by impact energy; rising noise floor.

    **Advice:** use envelope analysis and check lubrication and seals. Shock loading shortens bearing life much faster than on smooth machines. See [Bearings](bearings.md).

### Rotor imbalance (worn or missing hammers, knives or liners)
!!! warning "Watch"
    **Signature:** rising 1x on top of the impact pattern.

    **Cause:** uneven hammer or knife wear, missing pieces, material build-up.

    **Advice:** inspect the rotor and replace or rebalance wear parts as a set.

### Structural looseness and cracks
!!! danger "Alert-worthy"
    **Signature:** harmonics of the impact rate, clipped waveform, strongly directional vibration.

    **Advice:** inspect frame, anchor bolts, and welds. Cracks in frames and housings are common in this class of machine.

### Resonance
!!! danger "Alert-worthy"
    **Signature:** amplification at a structural natural frequency excited by the repetitive impacts.

    **Advice:** confirm with a bump test.

### Belt and drive faults
!!! warning "Watch"
    **Signature:** peaks at belt frequency and harmonics; sub-synchronous and unstable amplitude.

    **Advice:** check belt condition, tension, and flywheel or coupling condition.

### Jam or overload events
!!! danger "Alert-worthy"
    **Signature:** sudden broadband spike, often with a speed drop or motor current surge.

    **Advice:** cross-check with the control system logs. Repeated jams damage bearings and shafts.

## Alert guidance

| Situation | Suggested action |
|---|---|
| Within baseline at comparable load | Continue routine monitoring |
| Rising crest factor or peak | Watch: check bearings and looseness |
| Rising 1x | Watch: inspect wear parts |
| Bearing frequencies in envelope | Alert: plan replacement |
| Looseness, cracks, or repeated jams | Alert: inspect promptly |

## Related pages

- [Bearings](bearings.md)
- [Vibration basics](vibration-basics.md)
- [Gearboxes](gearboxes.md)

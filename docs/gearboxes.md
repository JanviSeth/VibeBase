# Gearboxes

Gearbox diagnosis depends on knowing the tooth counts and shaft speeds. Get the kinematic diagram from the OEM before drawing conclusions, especially for planetary sets.

## Key frequencies

| Frequency | Formula | Meaning |
|---|---|---|
| Shaft speeds | Input RPM ÷ ratio at each stage | 1x of each shaft |
| Gear mesh (GMF) | Teeth × RPM of that shaft | Always present at some level |
| Sidebands | GMF ± shaft speed | Wear, eccentricity, or a local tooth fault |
| Sub-harmonics of GMF | GMF ÷ 2, ÷ 3 | Backlash, looseness |
| Bearing frequencies | BPFO, BPFI, BSF, FTF | Shaft bearings |

!!! tip "Trend the ratio, not just the peak"
    GMF is present on a healthy gearbox. What matters is a rising GMF trend, new sidebands, or growing sideband energy relative to GMF. Measure at consistent load, since gear vibration is load-dependent.

## Faults

### Distributed tooth wear or pitting
!!! danger "Alert-worthy"
    **Signature:** rising GMF and sidebands spaced at the shaft speed of the worn gear, sometimes with harmonics of GMF.

    **Advice:** compare against a baseline at the same load. Combine with oil analysis for wear debris.

### Single tooth fault (crack or chip)
!!! danger "Alert-worthy"
    **Signature:** impact once per revolution of the faulted gear in the time waveform; sidebands at that shaft speed; high crest factor.

    **Advice:** time waveform and envelope analysis are often more revealing than the spectrum. A cracked tooth can fail suddenly.

### Eccentric or bent gear
!!! warning "Watch"
    **Signature:** 1x of that shaft and sidebands at 1x around GMF; amplitude modulation.

    **Advice:** check runout and mounting.

### Misalignment or poor tooth contact
!!! warning "Watch"
    **Signature:** raised GMF with harmonics, high axial content.

    **Advice:** check shaft alignment, bearing condition and contact pattern.

### Backlash and looseness
!!! warning "Watch"
    **Signature:** sub-harmonics of GMF, often intermittent or load-dependent.

    **Advice:** check gear and bearing fits.

### Bearing faults
!!! danger "Alert-worthy"
    **Signature:** BPFO / BPFI / BSF with harmonics and sidebands. In gearboxes, bearing tones can be buried under gear energy.

    **Advice:** use envelope analysis. See [Bearings](bearings.md).

## Planetary (epicyclic) gearboxes

!!! warning "Watch"
    Planetary sets have several mesh paths and sidebands from the planets passing the sensor. With a fixed ring gear, GMF equals ring teeth × carrier speed. Sidebands appear at carrier-related frequencies, and the vibration seen at a fixed sensor is modulated as each planet passes.

    **Advice:** do not guess. Use the gearbox kinematics and known tooth counts before naming a fault. A sun gear fault, planet fault, and ring gear fault give different sideband patterns.

## Alert guidance

| Situation | Suggested action |
|---|---|
| Stable GMF, no new sidebands | Continue routine monitoring |
| GMF rising, sidebands growing | Watch to alert: confirm at same load, add oil analysis |
| Once-per-rev impacts, high crest factor | Alert: suspect tooth damage |
| Bearing tones with harmonics | Alert: plan replacement |
| Debris in oil, rising temperature | Cross-check and alert |

## Related pages

- [Bearings](bearings.md)
- [Vibration basics](vibration-basics.md)

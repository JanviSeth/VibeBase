# Vibration Basics

## What is measured

| Quantity | Unit | Best for |
|---|---|---|
| Displacement | µm (peak-to-peak) | Low speed, shaft motion measured with proximity probes |
| Velocity | mm/s (RMS) | General machinery severity, roughly 10 Hz to 1 kHz |
| Acceleration | g | High frequencies: bearings, gears, impacts |

Velocity is the standard for overall severity. Acceleration exaggerates high frequencies and is best for early bearing and gear faults.

## Sensors and measurement points

- **Accelerometers** on bearing housings, in radial (horizontal, vertical) and axial directions.
- **Proximity probes** measure shaft motion directly on fluid-film-bearing machines (turbines, large compressors).
- Mount rigidly and as close to the bearing as possible. A loose or poorly mounted sensor gives false high-frequency readings.
- Always measure in the same places, in the same direction, at the same load, so readings are comparable.

## Reading a spectrum

| Term | Meaning |
|---|---|
| 1x | Running speed. Order 1 |
| Harmonics | Whole-number multiples of a frequency (2x, 3x ...) |
| Sidebands | Peaks either side of a carrier, spaced at a fault or modulating frequency |
| Sub-synchronous | Frequencies below 1x |
| Non-synchronous | Not a multiple of running speed (typical of bearing defects) |
| Noise floor | Baseline broadband level; rises in late bearing failure and cavitation |

!!! tip "Work in orders"
    On variable-speed machines, express frequencies as orders of running speed so a fault stays at the same order when speed changes.

## Three views of the same signal

- **Time waveform:** shows impacts, clipping, modulation and beating. Essential for looseness, gear tooth faults and reciprocating machines.
- **FFT spectrum:** shows which frequencies carry the energy. The default tool for fault identification.
- **Envelope spectrum:** demodulates high-frequency impacts to reveal repetitive defect frequencies. Best for early bearing and gear faults.

## Getting a good spectrum

- Set the frequency range high enough to capture the faults you care about (bearings and gears need more than 1x to 10x).
- Use enough lines of resolution to separate close peaks, for example 2x line frequency versus 2x running speed on a motor.
- Use averaging and a Hanning window for steady signals.
- Avoid aliasing: the sampling rate must be at least twice the highest frequency of interest.

## Common faults at a glance

| Fault | Frequency | Direction | Notes |
|---|---|---|---|
| Imbalance | 1x | Radial | Steady phase, scales with speed squared |
| Misalignment | 1x, 2x (sometimes 3x) | Radial and axial | High axial is the giveaway |
| Bent shaft | 1x, 2x | Axial | Persists after alignment |
| Looseness | Many harmonics, sometimes half-orders | Often one direction | Clipped waveform |
| Bearing defect | BPFO, BPFI, BSF, FTF | Radial | Non-synchronous with harmonics and sidebands |
| Gear fault | GMF and sidebands | Radial and axial | Sidebands at shaft speeds |
| Electrical | 2x line frequency | Radial | Vanishes when power is cut |
| Resonance | Amplitude peaks at a specific speed | Varies | Confirm with bump test |
| Oil whirl | 0.42 to 0.48x | Radial | Fluid-film bearings only |
| Cavitation | Broadband high-frequency | Radial | Process issue |

## Severity zones (ISO 20816 family)

!!! info "Reference"
    ISO 20816 (replacing ISO 10816) defines four zones from overall vibration level. The exact limits depend on machine type, power and foundation stiffness, so use the applicable part of the standard and the OEM's own limits.

!!! success "Zone A / B: Good"
    New or acceptable for unrestricted long-term operation.

!!! warning "Zone C: Unsatisfactory"
    Usually only acceptable for a limited period. Trend closely and plan action.

!!! danger "Zone D: Unacceptable"
    Vibration is severe enough to cause damage. Alert immediately.

## Building a good alert

1. **Trend:** is it a sudden step or a gradual creep versus baseline?
2. **Frequency:** which orders or defect frequencies carry the energy?
3. **Pattern:** are there harmonics or sidebands, and at what spacing?
4. **Confirm:** cross-check a second measurement point, direction, or data source.
5. **State:** severity, likely cause, and a concrete next step (grease, realign, inspect, replace, schedule downtime).

## Resonance check

If a peak is unusually large or moves with speed, suspect a natural frequency. A bump test (impact the machine while stopped and measure the response) or a run-up/coast-down check confirms it. A resonance amplifies vibration well beyond what the exciting force would cause.

## Related pages

- [Bearings](bearings.md)
- [Motors](motors.md)
- [Gearboxes](gearboxes.md)

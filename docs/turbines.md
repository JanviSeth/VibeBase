# Turbines

Steam and gas turbines run on fluid-film bearings at high speed, so shaft vibration is normally measured with proximity probes (peak-to-peak displacement), often alongside casing accelerometers. Startup and shutdown data (run-up and coast-down) are as valuable as steady-state data.

!!! info "Check limits first"
    Use the OEM alarm and trip limits and the applicable ISO 20816 part for the machine type (for example -2 for large steam turbines and generators, -4 for gas turbines, -5 for hydro sets). Set thresholds per machine from its own baseline.

## Key frequencies

| Frequency | Formula | Meaning |
|---|---|---|
| 1x | Shaft speed | Imbalance, bow, blade loss |
| 2x | 2 × shaft speed | Misalignment, cracked shaft (with 1x) |
| Blade pass | Blades × RPM | Flow-path condition, blade damage |
| Sub-synchronous | Below 1x | Oil whirl, whip, steam whirl, rub |
| 2x line frequency | 100 or 120 Hz | Generator electrical faults |

## Faults

### Blade loss or damage
!!! danger "Alert-worthy"
    **Signature:** sudden step change in 1x amplitude and phase; blade-pass changes.

    **Advice:** a sudden change in 1x vector needs immediate attention and comparison with performance and temperature data.

### Thermal bow
!!! warning "Watch"
    **Signature:** 1x that changes between cold start and steady state, or with load.

    **Advice:** compare 1x amplitude and phase at startup against after thermal stabilization. Follow the OEM start sequence.

### Rotor rub
!!! danger "Alert-worthy"
    **Signature:** 1x with harmonics and sub-harmonics, clipped waveform, sometimes a sudden temperature rise.

    **Cause:** contact with seals or casing from thermal growth, bow or excessive vibration.

    **Advice:** rubs can escalate quickly. Check bearing metal temperatures and axial position.

### Oil whirl
!!! warning "Watch"
    **Signature:** sub-synchronous peak at about 0.42 to 0.48x running speed.

    **Advice:** check bearing loading, clearance and oil temperature.

### Oil whip
!!! danger "Alert-worthy"
    **Signature:** whirl frequency locks onto the first critical speed and stops tracking running speed; amplitude can rise sharply.

    **Advice:** escalate immediately.

### Steam whirl or aerodynamic excitation
!!! warning "Watch"
    **Signature:** sub-synchronous vibration that varies with load or steam conditions rather than with bearing oil temperature.

    **Advice:** check operating conditions and seal clearances. This is a rotor-stability problem, so consult the OEM.

### Misalignment (including thermal growth)
!!! warning "Watch"
    **Signature:** 1x and 2x, high axial, sometimes changing as the machine heats up.

    **Advice:** check hot alignment and coupling condition.

### Bearing wear
!!! warning "Watch"
    **Signature:** rising 1x and 2x, sub-synchronous content, shaft centerline shift.

    **Advice:** check babbitt condition, clearance and oil quality. See [Bearings](bearings.md).

### Critical speeds and resonance
!!! info "Reference"
    Vibration peaks as the machine passes a rotor or structural natural frequency during run-up or coast-down. Bode and polar plots show the critical speeds. Avoid steady operation near a critical.

### Generator electrical issues
!!! warning "Watch"
    **Signature:** 2x line frequency; 1x that changes with field current or load (possible shorted rotor turns).

    **Advice:** compare vibration against load and field current.

## Hydro turbines (brief)

!!! warning "Watch"
    **Draft tube vortex:** low-frequency pulsation (roughly 0.2 to 0.4x running speed) at part load. **Rough zone:** avoid extended operation in load ranges with high vibration. Consult the OEM operating map.

## Alert guidance

| Situation | Suggested action |
|---|---|
| Stable at baseline | Continue routine monitoring |
| 1x drifting with thermal condition | Watch: compare startup and steady-state |
| New sub-synchronous peak | Watch to alert: identify whirl, stability, or rub |
| Sudden 1x vector change, rub signs, oil whip | Alert immediately |

## Related pages

- [Bearings](bearings.md)
- [Compressors](compressors.md)
- [Vibration basics](vibration-basics.md)

# Motors

This page focuses on AC induction motors, the most common driver on rotating equipment. Motor faults are either **electrical** (rotor, stator, air gap) or **mechanical** (imbalance, misalignment, bearings, looseness). Telling them apart is the first step.

!!! tip "Electrical or mechanical? The power-off test"
    If a vibration peak disappears the instant power is cut while the rotor is still coasting, it is electrical. If it decays gradually with speed, it is mechanical.

## Key frequencies

| Frequency | Formula | Meaning |
|---|---|---|
| Line frequency (F_L) | 50 or 60 Hz | Supply frequency |
| 2x line frequency | 100 or 120 Hz | Electrical faults, eccentricity, stator problems |
| Synchronous speed | 120 × F_L ÷ poles (RPM) | Speed of the rotating field |
| Slip frequency | Synchronous speed − running speed (in Hz) | Difference between field and rotor |
| Pole pass frequency (F_p) | Slip frequency × number of poles | Sidebands around 1x in rotor bar faults |
| Rotor bar pass | Number of rotor bars × RPM | Rotor bar defects, air gap issues |
| Stator slot pass | Number of stator slots × RPM | Stator and slot-related issues |

!!! info "Resolution matters"
    2x line frequency and 2x running speed sit very close together (for example 100 Hz versus about 99 Hz). Use a high-resolution spectrum to separate them.

## Electrical faults

### Broken or cracked rotor bars
!!! danger "Alert-worthy"
    **Signature:** sidebands at ±pole pass frequency around 1x and its harmonics; pulsating sound and beating in the time waveform; often higher current.

    **Advice:** growing sidebands mean a worsening fault. Best confirmed at high load. Check motor current signature analysis if available.

### Stator winding or core problems
!!! warning "Watch"
    **Signature:** strong 2x line frequency peak, largely unaffected by load; may show sidebands at 1x; rising temperature.

    **Advice:** confirm with the power-off test, then insulation resistance and winding tests.

### Static and dynamic eccentricity (uneven air gap)
!!! warning "Watch"
    **Signature:** 2x line frequency with sidebands spaced at running speed, plus rotor bar pass sidebands.

    **Cause:** worn bearings, bent shaft, soft foot, or an unevenly seated stator or rotor.

    **Advice:** check bearing wear, shaft runout and mounting.

### Loose stator or rotor bar
!!! warning "Watch"
    **Signature:** elevated 2x line frequency and harmonics that vary with load or temperature.

    **Advice:** confirm with electrical tests before opening the motor.

## Mechanical faults

### Imbalance
!!! warning "Watch"
    **Signature:** dominant 1x, steady phase, radial.

    **Advice:** check for uneven fan or coupling wear, key or fan damage, or build-up. Balance in place if needed.

### Misalignment
!!! warning "Watch"
    **Signature:** 1x and strong 2x with high axial component.

    **Advice:** laser align at operating temperature where possible. Check coupling condition and soft foot.

### Soft foot
!!! warning "Watch"
    **Signature:** raised 1x and 2x, often changes when a foot bolt is loosened.

    **Advice:** loosen each foot bolt in turn and watch the reading, then shim.

### Bearing faults
!!! danger "Alert-worthy"
    **Signature:** BPFO / BPFI / BSF peaks with harmonics and sidebands; raised high-frequency noise; rising bearing temperature.

    **Advice:** see [Bearings](bearings.md). On drive-end and non-drive-end bearings, compare both.

### Looseness
!!! danger "Alert-worthy"
    **Signature:** harmonic series 1x, 2x, 3x ... with clipped time waveform.

    **Advice:** check foot bolts, base, grout and bearing housing fits.

## Variable-frequency drive (VFD) motors

!!! warning "Watch"
    **Bearing damage from shaft currents:** look for fluting on the bearing races and rising high-frequency energy. Insulated bearings or shaft grounding rings help.

    **Resonance:** a fixed structural resonance can be excited when the drive sweeps through a speed band. Work in orders and identify speeds to avoid.

## Alert guidance

| Situation | Suggested action |
|---|---|
| Stable, within baseline | Continue routine monitoring |
| 2x line frequency rising | Watch: power-off test, then electrical tests |
| Growing pole-pass sidebands | Alert: rotor bar fault developing |
| Bearing frequencies with harmonics and sidebands | Alert: plan replacement |
| Looseness pattern | Alert: inspect mounting before it damages the machine |

## Related pages

- [Bearings](bearings.md)
- [Vibration basics](vibration-basics.md)

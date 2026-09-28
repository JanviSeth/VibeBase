# Bearings

Bearing faults are the most common cause of rotating-equipment failure. They show up first in high-frequency and envelope spectra, long before overall vibration levels move.

## Rolling-element bearing fault frequencies

Each defect produces a repeatable, non-synchronous frequency. Get exact values from the manufacturer's bearing calculator or catalog; the formulas below use n = number of rolling elements, d = element diameter, D = pitch diameter, β = contact angle.

| Frequency | Formula | Meaning |
|---|---|---|
| BPFO | (n/2) × RPM × (1 − (d/D) cos β) | Outer race defect |
| BPFI | (n/2) × RPM × (1 + (d/D) cos β) | Inner race defect |
| BSF | (D / 2d) × RPM × (1 − ((d/D) cos β)²) | Ball or roller defect (often visible at 2x BSF) |
| FTF | (RPM / 2) × (1 − (d/D) cos β) | Cage frequency |

!!! tip "Rules of thumb"
    For typical bearings with 8 to 12 rolling elements: BPFO ≈ 0.4 × n × RPM, BPFI ≈ 0.6 × n × RPM, FTF ≈ 0.4 × RPM. Use exact values for diagnosis.

## Fault signatures

### Outer race defect (BPFO)
!!! danger "Alert-worthy"
    **Signature:** sharp, stable peak at BPFO with harmonics. Amplitude and harmonics grow as the defect enlarges.

    **Advice:** compare BPFO amplitude over time and confirm in the envelope spectrum.

### Inner race defect (BPFI)
!!! danger "Alert-worthy"
    **Signature:** peak at BPFI with 1x sidebands (the defect moves in and out of the load zone each revolution).

    **Advice:** sidebands at shaft speed are a strong confirmation.

### Rolling element defect (BSF)
!!! warning "Watch"
    **Signature:** peak at 2x BSF, often with cage-frequency sidebands.

    **Advice:** can be harder to see. Envelope analysis helps.

### Cage defect (FTF)
!!! warning "Watch"
    **Signature:** low-frequency peak around 0.4x running speed, or sidebands at FTF around other bearing peaks.

    **Advice:** often points to lubrication starvation or cage wear. Check lubrication.

## Stages of failure

| Stage | Indication | Suggested action |
|---|---|---|
| 1 | Ultrasonic / very-high-frequency energy rises; no change in normal spectra | Monitor |
| 2 | Bearing component natural frequencies (roughly 500 Hz to 2 kHz) excited; first faint defect tones | Watch: shorten interval, check lubrication |
| 3 | Defect frequencies with harmonics and sidebands clearly visible | Alert: plan replacement |
| 4 | Discrete peaks give way to a rising broadband noise floor; heat, noise | Alert: urgent, failure imminent |

!!! info "Caution"
    In stage 4, discrete peaks can disappear into noise. A rising noise floor with falling peaks does not mean the bearing is improving.

## Lubrication problems

!!! warning "Watch"
    **Signature:** raised high-frequency noise floor before discrete defect peaks appear; temperature may rise.

    **Cause:** too little, too much, contaminated or wrong grease or oil.

    **Advice:** re-grease per the manufacturer's method and quantity, then re-measure after a short interval. Over-greasing causes heat too.

## Other causes of early bearing damage

- **Misalignment or overload:** high loads shorten life. Check alignment and belt tension.
- **Contamination:** dust and moisture in the lubricant produce pitting.
- **Electrical fluting:** shaft currents on VFD motors leave a washboard pattern on the races.
- **Poor installation:** brinelling and incorrect fits cause early failure. Check mounting and clearances.

## Sleeve (journal, fluid-film) bearings

### Oil whirl and oil whip
!!! warning "Watch: oil whirl"
    **Signature:** peak at about 0.42 to 0.48x running speed.

!!! danger "Alert-worthy: oil whip"
    **Signature:** whirl locks onto the first critical speed and no longer follows RPM. Amplitude climbs quickly.

    **Advice:** review clearance, oil temperature and pressure, and load.

### Bearing wear or clearance growth
!!! warning "Watch"
    **Signature:** rising 1x and 2x, sub-synchronous content, changes in shaft centerline position.

    **Advice:** check babbitt condition, oil quality and bearing clearance.

## Monitoring and alert guidance

| Situation | Suggested action |
|---|---|
| Stable envelope and spectrum | Continue routine monitoring |
| Rising high-frequency noise floor | Watch: check lubrication |
| Defect tone appears | Watch: trend, confirm in envelope |
| Defect tone with harmonics and sidebands | Alert: plan replacement |
| Noise floor rising, peaks falling, heat | Alert: urgent |

## Related pages

- [Vibration basics](vibration-basics.md)
- [Motors](motors.md)
- [Pumps](pumps.md)

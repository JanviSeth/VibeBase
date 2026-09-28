# Bearing Fault Frequency Calculator

Rolling-element bearings generate characteristic vibration frequencies that depend on shaft speed and bearing geometry. These frequencies are commonly used to identify developing faults in the inner race, outer race, rolling elements or cage.

The calculator below determines the four main characteristic bearing frequencies:

- **FTF** — Fundamental Train Frequency
- **BPFO** — Ball Pass Frequency Outer race
- **BPFI** — Ball Pass Frequency Inner race
- **BSF** — Ball Spin Frequency

!!! info "Use the bearing geometry where possible"
    Fault frequencies vary between bearing designs. Use the manufacturer's bearing geometry or bearing catalogue data when available. Generic bearing dimensions can give an approximate result but should not be treated as an exact fault frequency.

## Characteristic frequencies

| Frequency | Typical order | Associated component |
|---|---:|---|
| **FTF** | ~0.4–0.5x | Cage / retainer |
| **BPFO** | ~3–5x | Outer race |
| **BPFI** | ~4–6x | Inner race |
| **BSF** | ~2–3x | Rolling element |

The exact order depends on the bearing geometry and contact angle.

## Calculator

Enter the operating speed and bearing geometry below.

<div class="bearing-calculator">

  <div class="calculator-section">
    <h3>Operating conditions</h3>

    <div class="calculator-field">
      <label for="rpm">Shaft speed (RPM)</label>
      <input id="rpm" type="number" value="1500" min="1" step="1">
    </div>

    <div class="calculator-field">
      <label for="elements">Number of rolling elements</label>
      <input id="elements" type="number" value="8" min="1" step="1">
    </div>
  </div>

  <div class="calculator-section">
    <h3>Bearing geometry</h3>

    <div class="calculator-field">
      <label for="element-diameter">Rolling-element diameter</label>
      <input id="element-diameter" type="number" value="10" min="0.01" step="0.01">
    </div>

    <div class="calculator-field">
      <label for="pitch-diameter">Pitch diameter</label>
      <input id="pitch-diameter" type="number" value="50" min="0.01" step="0.01">
    </div>

    <div class="calculator-field">
      <label for="contact-angle">Contact angle (°)</label>
      <input id="contact-angle" type="number" value="0" step="0.1">
    </div>
  </div>

</div>

<button class="md-button md-button--primary" id="calculate-bearing">
  Calculate fault frequencies
</button>

<div id="calculator-results" class="calculator-results">

<h3>Results</h3>

| Fault frequency | Order | Frequency |
|---|---:|---:|
| **FTF** | — | — |
| **BPFO** | — | — |
| **BPFI** | — | — |
| **BSF** | — | — |

</div>

## Results

| Fault frequency | Order | Frequency |
|---|---:|---:|
| **FTF** | — | — |
| **BPFO** | — | — |
| **BPFI** | — | — |
| **BSF** | — | — |

</div>

!!! tip "Spectrum interpretation"
    Compare the calculated frequencies with peaks in the vibration spectrum. A bearing fault does not necessarily produce a single peak exactly at the calculated frequency. Harmonics, sidebands and modulation are commonly present.

!!! warning "A frequency match is not a diagnosis"
    A peak at BPFO, BPFI, BSF or FTF is an indication that should be evaluated together with amplitude, harmonics, sidebands, time waveform, bearing operating conditions and trend data. Other machine components can also generate frequencies close to bearing fault frequencies.

## Equations

The characteristic frequencies are calculated from the shaft speed and bearing geometry.

### Fundamental Train Frequency (FTF)

$$
FTF =
\frac{RPM}{2}
\left(
1-\frac{d}{D}\cos\theta
\right)
$$

### Ball Pass Frequency Outer race (BPFO)

$$
BPFO =
\frac{n \cdot RPM}{2}
\left(
1-\frac{d}{D}\cos\theta
\right)
$$

### Ball Pass Frequency Inner race (BPFI)

$$
BPFI =
\frac{n \cdot RPM}{2}
\left(
1+\frac{d}{D}\cos\theta
\right)
$$

### Ball Spin Frequency (BSF)

$$
BSF =
\frac{D}{2d}
RPM
\left[
1-
\left(
\frac{d}{D}\cos\theta
\right)^2
\right]
$$

Where:

| Parameter | Meaning |
|---|---|
| `RPM` | Shaft rotational speed |
| `n` | Number of rolling elements |
| `d` | Rolling-element diameter |
| `D` | Bearing pitch diameter |
| `θ` | Contact angle |

## Understanding the fault frequencies

### FTF — Cage frequency

!!! info "Reference"
    FTF is associated with the rotational speed of the bearing cage.

    **Typical signature:** low-frequency vibration at approximately 0.4–0.5x running speed.

    **Possible causes:** cage damage, cage instability, severe bearing wear or lubrication problems.

### BPFO — Outer-race frequency

!!! warning "Watch"
    BPFO is associated with a defect on the stationary outer race.

    **Typical signature:** BPFO and harmonics, often with impacts visible in the time waveform.

    **Possible causes:** localized outer-race damage, fatigue spalling, contamination or improper installation.

    **Advice:** check whether the BPFO harmonics are accompanied by an increase in high-frequency or envelope vibration.

### BPFI — Inner-race frequency

!!! warning "Watch"
    BPFI is associated with a defect on the rotating inner race.

    **Typical signature:** BPFI and harmonics, often accompanied by sidebands spaced at 1x running speed.

    **Possible causes:** inner-race fatigue, contamination, mounting problems or excessive loading.

    **Advice:** check the spectrum for BPFI harmonics and 1x sidebands. Compare the result with the bearing's operating speed.

### BSF — Rolling-element frequency

!!! warning "Watch"
    BSF is associated with a defect on a rolling element.

    **Typical signature:** BSF and harmonics, sometimes with sidebands at the cage frequency.

    **Possible causes:** rolling-element damage, spalling, cracking or lubrication-related damage.

    **Advice:** confirm the frequency against the actual bearing geometry because BSF is particularly sensitive to bearing dimensions and contact conditions.

## Harmonics and sidebands

Bearing faults rarely appear as a perfectly isolated frequency.

| Pattern | Possible indication |
|---|---|
| BPFO + harmonics | Outer-race defect |
| BPFI + harmonics | Inner-race defect |
| BSF + harmonics | Rolling-element defect |
| BPFI sidebands at 1x | Inner-race defect on a rotating bearing |
| BSF sidebands at FTF | Rolling-element / cage interaction |
| Increasing high-frequency energy | Developing impact-related bearing damage |

!!! info "Look at the complete signature"
    Frequency alone should not be used to identify a bearing fault. Confirm the characteristic frequency using harmonics, sidebands, time waveform and trend behaviour.

## Example

For a bearing operating at **1500 RPM**, the shaft frequency is:

$$
1x = \frac{1500}{60} = 25\ Hz
$$

If the calculated BPFO is **90 Hz**:

$$
\frac{90}{25} = 3.6x
$$

A spectrum peak around **3.6x running speed**, particularly when accompanied by BPFO harmonics and an increasing envelope trend, is consistent with an outer-race-related bearing fault.

## Practical workflow

| Step | Action |
|---|---|
| 1 | Determine the actual shaft speed |
| 2 | Identify the exact bearing model |
| 3 | Obtain the bearing geometry |
| 4 | Calculate FTF, BPFO, BPFI and BSF |
| 5 | Compare the frequencies with the vibration spectrum |
| 6 | Check harmonics and sidebands |
| 7 | Confirm with time waveform and trend data |
| 8 | Inspect the bearing if the evidence indicates deterioration |

!!! tip "Variable-speed machines"
    For variable-speed equipment, calculate the characteristic frequencies from the actual shaft speed at the time of measurement. Bearing fault frequencies will move with running speed.

## Related pages

- [Bearings](bearings.md)
- [Vibration Basics](vibration-basics.md)
- [Motors](motors.md)
- [Pumps](pumps.md)
- [Fans and Blowers](fans-and-blowers.md)
- [Gearboxes](gearboxes.md)

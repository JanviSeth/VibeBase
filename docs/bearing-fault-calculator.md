# Bearing Fault Frequency Calculator

Calculate the characteristic frequencies of a rolling-element bearing based on its geometry and operating speed.

<div class="grid">

<div markdown>

### Operating conditions

**Rotational speed**

<input id="rpm" type="number" value="1500" min="0" step="1">

**Number of rolling elements**

<input id="elements" type="number" value="8" min="1" step="1">

</div>

<div markdown>

### Bearing geometry

**Rolling-element diameter**

<input id="element-diameter" type="number" value="10" min="0" step="0.01">

**Pitch diameter**

<input id="pitch-diameter" type="number" value="50" min="0" step="0.01">

**Contact angle (°)**

<input id="contact-angle" type="number" value="0" step="0.1">

</div>

</div>

<button class="md-button md-button--primary" id="calculate-bearing">
    Calculate fault frequencies
</button>

<div id="calculator-results" markdown>

### Results

| Fault frequency | Order | Frequency |
|---|---:|---:|
| **FTF** | — | — |
| **BPFO** | — | — |
| **BPFI** | — | — |
| **BSF** | — | — |

</div>

!!! info "What do the frequencies mean?"

    **FTF — Fundamental Train Frequency**  
    Typically associated with the bearing cage/retainer.

    **BPFO — Ball Pass Frequency Outer race**  
    Characteristic frequency associated with an outer-race defect.

    **BPFI — Ball Pass Frequency Inner race**  
    Characteristic frequency associated with an inner-race defect.

    **BSF — Ball Spin Frequency**  
    Characteristic frequency associated with a rolling-element defect.

!!! tip "Vibration analysis"

    Compare the calculated characteristic frequencies with peaks in the vibration spectrum. 
    Bearing faults can produce the characteristic frequency and its harmonics.

---

## Equations

For a bearing with `n` rolling elements:

$$
FTF = \frac{RPM}{2}
\left(1-\frac{d}{D}\cos\theta\right)
$$

$$
BPFO = \frac{n \cdot RPM}{2}
\left(1-\frac{d}{D}\cos\theta\right)
$$

$$
BPFI = \frac{n \cdot RPM}{2}
\left(1+\frac{d}{D}\cos\theta\right)
$$

$$
BSF =
\frac{D}{2d}RPM
\left(1-\left(\frac{d}{D}\cos\theta\right)^2\right)
$$

Where:

- `RPM` = shaft rotational speed
- `n` = number of rolling elements
- `d` = rolling-element diameter
- `D` = bearing pitch diameter
- `θ` = contact angle

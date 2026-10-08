# Fault Frequency Calculator

Enter the running speed and the geometry of the component to get the frequencies to look for in the spectrum. Everything is calculated in your browser; nothing is sent anywhere.

!!! info "Use exact geometry for real diagnoses"
    The defaults are an example (a 6205 deep-groove ball bearing). For real cases, take the geometry or the frequency multipliers from the bearing manufacturer's catalog or online calculator. Small differences in geometry can materially change the fault frequencies.

<div class="ffc" id="ffc">
<div class="ffc-card">
<h3>1. Running speed</h3>
<div class="ffc-grid">
<label>Speed<input id="ffc-speed" type="number" min="0" step="any" value="1480"></label>
<label>Unit<select id="ffc-unit"><option value="rpm">RPM</option><option value="hz">Hz</option></select></label>
</div>
<p class="ffc-note" id="ffc-speed-note"></p>
</div>
<div class="ffc-card">
<h3>2. Rolling-element bearing</h3>
<div class="ffc-grid">
<label>Number of rolling elements, n<input id="ffc-n" type="number" min="1" step="1" value="9"></label>
<label>Element diameter, d (mm)<input id="ffc-d" type="number" min="0" step="any" value="7.94"></label>
<label>Pitch diameter, D (mm)<input id="ffc-D" type="number" min="0" step="any" value="39.04"></label>
<label>Contact angle, β (degrees)<input id="ffc-beta" type="number" step="any" value="0"></label>
</div>
<p><button type="button" id="ffc-preset" class="md-button">Reset to example: 6205 ball bearing</button></p>
<div class="ffc-scroll"><table class="ffc-table"><thead><tr><th>Frequency</th><th>Order (× shaft)</th><th>Hz</th><th>CPM</th><th>2× (Hz)</th><th>3× (Hz)</th></tr></thead><tbody id="ffc-bearing-out"></tbody></table></div>
<p class="ffc-error" id="ffc-bearing-err"></p>
</div>
<div class="ffc-card">
<h3>3. Gear mesh, blade pass, vane pass, lobe pass</h3>
<div class="ffc-grid">
<label>Number of teeth, blades, vanes or lobes<input id="ffc-count" type="number" min="1" step="1" value="12"></label>
</div>
<p class="ffc-note">Use the speed of the shaft that carries the gear, impeller or rotor. For a gearbox, enter that shaft's speed above.</p>
<div class="ffc-scroll"><table class="ffc-table"><thead><tr><th>Frequency</th><th>Order (× shaft)</th><th>Hz</th><th>CPM</th><th>2× (Hz)</th><th>3× (Hz)</th></tr></thead><tbody id="ffc-count-out"></tbody></table></div>
</div>
<div class="ffc-card">
<h3>4. Belt drive</h3>
<div class="ffc-grid">
<label>Pulley diameter (mm)<input id="ffc-pulley" type="number" min="0" step="any" value="150"></label>
<label>Belt length (mm)<input id="ffc-belt" type="number" min="0" step="any" value="1500"></label>
</div>
<p class="ffc-note">Use the speed of the pulley whose diameter you enter. Belt problems often show at 1× to 4× belt frequency.</p>
<div class="ffc-scroll"><table class="ffc-table"><thead><tr><th>Frequency</th><th>Order (× shaft)</th><th>Hz</th><th>CPM</th><th>2× (Hz)</th><th>3× (Hz)</th></tr></thead><tbody id="ffc-belt-out"></tbody></table></div>
<p class="ffc-error" id="ffc-belt-err"></p>
</div>
<div class="ffc-card">
<h3>5. Induction motor: slip and pole pass</h3>
<div class="ffc-grid">
<label>Line frequency<select id="ffc-line"><option value="50">50 Hz</option><option value="60">60 Hz</option></select></label>
<label>Number of poles<input id="ffc-poles" type="number" min="2" step="2" value="4"></label>
</div>
<p class="ffc-note">Uses the running speed above. Pole pass sidebands around 1× are most visible at high load; use a high-resolution spectrum.</p>
<div class="ffc-scroll"><table class="ffc-table"><thead><tr><th>Quantity</th><th>Value</th></tr></thead><tbody id="ffc-motor-out"></tbody></table></div>
<p class="ffc-error" id="ffc-motor-err"></p>
</div>
</div>

## How to use the results

1. Look for peaks at these frequencies and at their 2× and 3× harmonics, allowing a few percent tolerance.
2. Bearing tones are non-synchronous: they will not sit at a whole multiple of running speed.
3. An inner race defect (BPFI) usually shows sidebands spaced at running speed. A rolling-element defect usually shows most clearly at 2 × BSF, which is the 2× column of the BSF row.
4. Confirm bearing frequencies in the envelope spectrum before alerting. See [Bearings](bearings.md).
5. On variable-speed machines, work in orders (the "Order" column) so the peaks stay put when speed changes.

## Formulas

Bearing formulas assume a stationary outer race and a rotating inner race, with pure rolling and no slip. In practice, measured values can differ from calculated ones by a few percent.

| Frequency | Formula |
|---|---|
| BPFO | (n / 2) × (1 − (d / D) cos β) × shaft speed |
| BPFI | (n / 2) × (1 + (d / D) cos β) × shaft speed |
| BSF | (D / 2d) × (1 − ((d / D) cos β)²) × shaft speed |
| FTF | ½ × (1 − (d / D) cos β) × shaft speed |
| Mesh / blade / vane / lobe pass | count × shaft speed |
| Belt frequency | π × pulley diameter × pulley speed ÷ belt length |
| Synchronous speed | 120 × line frequency ÷ poles (RPM) |
| Slip frequency | (synchronous speed − running speed) ÷ 60 (Hz) |
| Pole pass frequency | slip frequency × poles |


hey

## Related pages

- [Bearings](bearings.md)
- [Motors](motors.md)
- [Gearboxes](gearboxes.md)
- [Vibration basics](vibration-basics.md)

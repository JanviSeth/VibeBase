# Fault Frequency Calculator

Search for a bearing to autofill its geometry, or type in your own numbers. Everything runs in your browser; nothing is sent anywhere.

!!! info "Where the bearing data comes from"
    This tool can't pull live data from manufacturer sites — a published page here can only load scripts from a short list of approved hosts, and SKF isn't one of them. Instead, the bearing search reads from `data/bearings.json` in this repo, which the team builds up over time.

    To add a bearing: open its product page on the manufacturer's site (SKF, Timken, NSK, FAG...) and run the page's own "Bearing Frequencies" or "Periodic Frequencies" calculation. That gives you either the geometry (number of rolling elements, element diameter, pitch diameter, contact angle) or the BPFO/BPFI/BSF/FTF multipliers directly — either can go straight into an entry. See [Adding a bearing](#adding-a-bearing-to-the-library) below.

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
<h3>2. Bearing</h3>
<div class="ffc-grid">
<label>Search the library<input id="ffc-bearing-search" list="ffc-bearing-list" placeholder="Start typing a designation, e.g. 6205"><datalist id="ffc-bearing-list"></datalist></label>
</div>
<p class="ffc-note" id="ffc-library-note"></p>
<p class="ffc-error" id="ffc-library-err"></p>

<div class="ffc-grid">
<label>Input mode<select id="ffc-mode"><option value="geometry">Geometry (n, d, D, β)</option><option value="orders">Multipliers from the manufacturer</option></select></label>
</div>

<div id="ffc-geometry-fields" class="ffc-grid">
<label>Number of rolling elements, n<input id="ffc-n" type="number" min="1" step="1" value="9"></label>
<label>Element diameter, d (mm)<input id="ffc-d" type="number" min="0" step="any" value="7.94"></label>
<label>Pitch diameter, D (mm)<input id="ffc-D" type="number" min="0" step="any" value="39.04"></label>
<label>Contact angle, β (degrees)<input id="ffc-beta" type="number" step="any" value="0"></label>
</div>

<div id="ffc-orders-fields" class="ffc-grid">
<label>BPFO (× shaft speed)<input id="ffc-order-bpfo" type="number" step="any"></label>
<label>BPFI (× shaft speed)<input id="ffc-order-bpfi" type="number" step="any"></label>
<label>BSF (× shaft speed)<input id="ffc-order-bsf" type="number" step="any"></label>
<label>FTF (× shaft speed)<input id="ffc-order-ftf" type="number" step="any"></label>
</div>

<div class="ffc-scroll"><table class="ffc-table"><thead><tr><th>Frequency</th><th>Order (× shaft)</th><th>Hz</th><th>CPM</th><th>2× (Hz)</th><th>3× (Hz)</th></tr></thead><tbody id="ffc-bearing-out"></tbody></table></div>
<p class="ffc-error" id="ffc-bearing-err"></p>
</div>

<div class="ffc-card">
<h3>3. Gear mesh, blade pass, vane pass, lobe pass</h3>
<div class="ffc-grid">
<label>Number of teeth, blades, vanes or lobes<input id="ffc-count" type="number" min="1" step="1" value="12"></label>
</div>
<p class="ffc-note">Use the speed of the shaft that carries the gear, impeller or rotor.</p>
<div class="ffc-scroll"><table class="ffc-table"><thead><tr><th>Frequency</th><th>Order (× shaft)</th><th>Hz</th><th>CPM</th><th>2× (Hz)</th><th>3× (Hz)</th></tr></thead><tbody id="ffc-count-out"></tbody></table></div>
</div>

<div class="ffc-card">
<h3>4. Belt drive</h3>
<div class="ffc-grid">
<label>Pulley diameter (mm)<input id="ffc-pulley" type="number" min="0" step="any" value="150"></label>
<label>Belt length (mm)<input id="ffc-belt" type="number" min="0" step="any" value="1500"></label>
</div>
<p class="ffc-note">Use the speed of the pulley whose diameter you enter.</p>
<div class="ffc-scroll"><table class="ffc-table"><thead><tr><th>Frequency</th><th>Order (× shaft)</th><th>Hz</th><th>CPM</th><th>2× (Hz)</th><th>3× (Hz)</th></tr></thead><tbody id="ffc-belt-out"></tbody></table></div>
<p class="ffc-error" id="ffc-belt-err"></p>
</div>

<div class="ffc-card">
<h3>5. Induction motor: slip and pole pass</h3>
<div class="ffc-grid">
<label>Line frequency<select id="ffc-line"><option value="50">50 Hz</option><option value="60">60 Hz</option></select></label>
<label>Number of poles<input id="ffc-poles" type="number" min="2" step="2" value="4"></label>
</div>
<p class="ffc-note">Uses the running speed above.</p>
<div class="ffc-scroll"><table class="ffc-table"><thead><tr><th>Quantity</th><th>Value</th></tr></thead><tbody id="ffc-motor-out"></tbody></table></div>
<p class="ffc-error" id="ffc-motor-err"></p>
</div>
</div>

## How to use the results

1. Look for peaks at these frequencies and at their 2× and 3× harmonics, allowing a few percent tolerance.
2. Bearing tones are non-synchronous: they won't sit at a whole multiple of running speed.
3. An inner race defect (BPFI) usually shows sidebands spaced at running speed. A rolling-element defect usually shows most clearly at 2 × BSF, in the 2× column of the BSF row.
4. Confirm bearing frequencies in the envelope spectrum before alerting. See [Bearings](bearings.md).
5. On variable-speed machines, work in orders so the peaks stay put when speed changes.

## Adding a bearing to the library

1. Find the bearing's product page on the manufacturer's site and run its frequency calculation (SKF and NSK call this "Bearing Frequencies"; Timken calls it "Periodic Frequencies").
2. Note either the geometry (n, d, D, β) or the four multipliers (BPFO, BPFI, BSF, FTF) it gives you.
3. In the repo, open `docs/data/bearings.json` and add an entry in one of these two formats:

```json
{
  "designation": "6206",
  "type": "Deep groove ball bearing",
  "n": 9,
  "d_mm": 9.53,
  "D_mm": 46.0,
  "beta_deg": 0,
  "source": "SKF product page, checked 2026-09-30"
}
```

```json
{
  "designation": "22213 CC",
  "type": "Spherical roller bearing",
  "bpfo_order": 7.86,
  "bpfi_order": 9.14,
  "bsf_order": 3.42,
  "ftf_order": 0.42,
  "source": "SKF Bearing Frequencies calculator, checked 2026-09-30"
}
```

4. Keep the file as one JSON array (square brackets around all entries, commas between them). Commit the change, and the new bearing will appear in the search box once the site rebuilds.
5. Always include a `source` note with the date you checked it. Bearing designs can change between manufacturers and over time, so this tells the next person how current the entry is.

## Formulas

Bearing formulas assume a stationary outer race and a rotating inner race, with pure rolling and no slip. Measured values can differ from calculated ones by a few percent.

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

## Related pages

- [Bearings](bearings.md)
- [Motors](motors.md)
- [Gearboxes](gearboxes.md)
- [Vibration basics](vibration-basics.md)

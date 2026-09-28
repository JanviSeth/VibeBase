/* Fault frequency calculator - Predictive Maintenance Encyclopedia.
   Runs entirely in the browser. Loaded on every page; only acts if the calculator is present. */
(function () {
  "use strict";

  function $(id) { return document.getElementById(id); }
  function num(id) { return parseFloat($(id).value); }
  function fmt(x, dp) { return isFinite(x) ? x.toFixed(dp === undefined ? 2 : dp) : "–"; }

  // One results row: name, order (x shaft speed), frequency in Hz, plus CPM and harmonics
  function row(name, order, hz) {
    return "<tr><td>" + name + "</td><td>" + fmt(order, 3) + "</td><td>" + fmt(hz) +
      "</td><td>" + fmt(hz * 60, 0) + "</td><td>" + fmt(hz * 2) + "</td><td>" + fmt(hz * 3) + "</td></tr>";
  }
  function pair(label, value) { return "<tr><td>" + label + "</td><td>" + value + "</td></tr>"; }

  function clearAll() {
    ["ffc-bearing-out", "ffc-count-out", "ffc-belt-out", "ffc-motor-out"].forEach(function (id) { $(id).innerHTML = ""; });
    ["ffc-bearing-err", "ffc-belt-err", "ffc-motor-err"].forEach(function (id) { $(id).textContent = ""; });
  }

  function update() {
    var speed = num("ffc-speed");
    var f = $("ffc-unit").value === "rpm" ? speed / 60 : speed; // running speed in Hz
    if (!(isFinite(f) && f > 0)) {
      clearAll();
      $("ffc-speed-note").textContent = "Enter a running speed greater than zero.";
      return;
    }
    $("ffc-speed-note").textContent = "= " + fmt(f * 60, 1) + " RPM = " + fmt(f, 3) + " Hz";

    // Rolling-element bearing (stationary outer race, rotating inner race)
    var n = num("ffc-n"), d = num("ffc-d"), D = num("ffc-D"), beta = num("ffc-beta");
    if (n >= 1 && d > 0 && D > d && isFinite(beta)) {
      var r = (d / D) * Math.cos(beta * Math.PI / 180);
      var bpfo = (n / 2) * (1 - r);
      var bpfi = (n / 2) * (1 + r);
      var bsf = (D / (2 * d)) * (1 - r * r);
      var ftf = 0.5 * (1 - r);
      $("ffc-bearing-out").innerHTML =
        row("BPFO (outer race)", bpfo, bpfo * f) +
        row("BPFI (inner race)", bpfi, bpfi * f) +
        row("BSF (rolling element)", bsf, bsf * f) +
        row("FTF (cage)", ftf, ftf * f);
      $("ffc-bearing-err").textContent = "";
    } else {
      $("ffc-bearing-out").innerHTML = "";
      $("ffc-bearing-err").textContent = "Check the bearing inputs: n must be at least 1 and 0 < d < D.";
    }

    // Gear mesh, blade pass, vane pass, lobe pass = count x shaft speed
    var cnt = num("ffc-count");
    $("ffc-count-out").innerHTML = cnt >= 1 ? row("Mesh / blade / vane / lobe pass", cnt, cnt * f) : "";

    // Belt frequency = pi x pulley diameter x speed / belt length
    var pd = num("ffc-pulley"), bl = num("ffc-belt");
    if (pd > 0 && bl > 0) {
      var bo = Math.PI * pd / bl;
      $("ffc-belt-out").innerHTML = row("Belt frequency", bo, bo * f);
      $("ffc-belt-err").textContent = "";
    } else {
      $("ffc-belt-out").innerHTML = "";
      $("ffc-belt-err").textContent = "Enter a pulley diameter and belt length greater than zero.";
    }

    // Induction motor: slip, pole pass, 2x line frequency
    var line = num("ffc-line"), poles = num("ffc-poles");
    if (line > 0 && poles >= 2 && poles % 2 === 0) {
      var syncRpm = 120 * line / poles;
      var slipHz = (syncRpm - f * 60) / 60;
      if (slipHz > 0) {
        var pp = slipHz * poles;
        $("ffc-motor-out").innerHTML =
          pair("Synchronous speed", fmt(syncRpm, 0) + " RPM") +
          pair("Slip", fmt(slipHz, 3) + " Hz (" + fmt(slipHz * 60 / syncRpm * 100, 2) + " %)") +
          pair("Pole pass frequency (slip × poles)", fmt(pp, 3) + " Hz") +
          pair("2 × line frequency", fmt(2 * line, 1) + " Hz") +
          pair("Rotor bar sidebands around 1x", fmt(f - pp, 2) + " Hz and " + fmt(f + pp, 2) + " Hz");
        $("ffc-motor-err").textContent = "";
      } else {
        $("ffc-motor-out").innerHTML = "";
        $("ffc-motor-err").textContent = "Running speed must be below the synchronous speed (" + fmt(syncRpm, 0) + " RPM). Check the speed, line frequency and poles.";
      }
    } else {
      $("ffc-motor-out").innerHTML = "";
      $("ffc-motor-err").textContent = "Poles must be an even number of at least 2.";
    }
  }

  function init() {
    if (!$("ffc")) { return; }
    $("ffc").addEventListener("input", update);
    $("ffc").addEventListener("change", update);
    $("ffc-preset").addEventListener("click", function () {
      $("ffc-n").value = 9; $("ffc-d").value = 7.94; $("ffc-D").value = 39.04; $("ffc-beta").value = 0;
      update();
    });
    update();
  }

  if (typeof document$ !== "undefined") { document$.subscribe(init); }   // Material instant navigation
  else if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", init); }
  else { init(); }
})();

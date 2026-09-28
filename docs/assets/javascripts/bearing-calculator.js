document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("calculate-bearing");

    if (!button) return;

    button.addEventListener("click", function () {

        const rpm = parseFloat(document.getElementById("rpm").value);
        const n = parseFloat(document.getElementById("elements").value);
        const d = parseFloat(document.getElementById("element-diameter").value);
        const D = parseFloat(document.getElementById("pitch-diameter").value);
        const angle = parseFloat(document.getElementById("contact-angle").value);

        if (
            !Number.isFinite(rpm) ||
            !Number.isFinite(n) ||
            !Number.isFinite(d) ||
            !Number.isFinite(D) ||
            !Number.isFinite(angle) ||
            rpm <= 0 ||
            n <= 0 ||
            d <= 0 ||
            D <= 0
        ) {
            alert("Please enter valid bearing parameters.");
            return;
        }

        const theta = angle * Math.PI / 180;

        const ratio = (d / D) * Math.cos(theta);

        const ftf =
            (rpm / 2) * (1 - ratio);

        const bpfo =
            (n * rpm / 2) * (1 - ratio);

        const bpfi =
            (n * rpm / 2) * (1 + ratio);

        const bsf =
            (D / (2 * d)) *
            rpm *
            (1 - Math.pow(ratio, 2));

        function formatFrequency(cpm) {
            return `${cpm.toFixed(2)} CPM / ${(cpm / 60).toFixed(2)} Hz`;
        }

        function order(cpm) {
            return (cpm / rpm).toFixed(2) + "×";
        }

        document.querySelector("#calculator-results tbody").innerHTML = `
            <tr>
                <td><strong>FTF</strong></td>
                <td>${order(ftf)}</td>
                <td>${formatFrequency(ftf)}</td>
            </tr>
            <tr>
                <td><strong>BPFO</strong></td>
                <td>${order(bpfo)}</td>
                <td>${formatFrequency(bpfo)}</td>
            </tr>
            <tr>
                <td><strong>BPFI</strong></td>
                <td>${order(bpfi)}</td>
                <td>${formatFrequency(bpfi)}</td>
            </tr>
            <tr>
                <td><strong>BSF</strong></td>
                <td>${order(bsf)}</td>
                <td>${formatFrequency(bsf)}</td>
            </tr>
        `;
    });
});

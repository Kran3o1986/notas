// Códigos base por Tier
const tierCodes = {
    1: "700001",
    2: "700002",
    3: "700003",
    4: "700004",
    5: "700005"
};

// Código fijo de consignación B&F
const consignacion = "123456";

function generarEtiqueta() {
    const tier = document.getElementById("tier").value;
    const color = document.getElementById("color").value;
    const graduacion = document.getElementById("graduacion").value;
    const cristal = document.getElementById("cristal").value;
    const extraValor = parseInt(document.getElementById("extra").value);

    const codigoBase = tierCodes[tier];
    const codigoUnico = codigoBase; // no cambia con extras

    // Render del código de barras
    JsBarcode("#barcode", codigoUnico, {
        format: "CODE128",
        width: 2,
        height: 40,
        displayValue: false
    });

    // Información impresa
    document.getElementById("info").innerHTML = `
        <div><strong>${codigoUnico}</strong></div>
        <div>Consignación: ${consignacion}</div>
        <div>Color: ${color}</div>
        <div>Grad.: ${graduacion}</div>
        <div>Cristal: ${cristal}</div>
        <div>Extra: ${extraValor === 0 ? "Ninguno" : "$" + extraValor}</div>
    `;
}

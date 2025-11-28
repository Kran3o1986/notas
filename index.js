function generarCodigoNumerico(combinacion) {
    let hash = 0;
    for (let i = 0; i < combinacion.length; i++) {
        hash = (hash * 31 + combinacion.charCodeAt(i)) % 1000000000;
    }
    return String(hash).padStart(12, "0");
}

function generarEtiqueta() {
    const tier = document.getElementById("tier").value;
    const color = document.getElementById("color").value;
    const graduacion = document.getElementById("graduacion").value;
    const cristal = document.getElementById("cristal").value;

    // Combinación para generar el código único
    const combinacion = `${tier}-${color}-${graduacion}-${cristal}`;
    const codigoNumerico = generarCodigoNumerico(combinacion);

    // Código de consignación fijo
    const codigoConsignacion = "123456";

    // Generar código de barras
JsBarcode("#barcode", codigoNumerico, {
    format: "CODE128",
    width: 3.8,
    height: 130,
    margin: 4,
    displayValue: false
});





    // Insertar solo número + consignación
    document.getElementById("info").innerHTML = `
        <div style="text-align:center; font-size:12px; margin-top:2px;">${codigoNumerico}</div>
        <div style="text-align:center; font-size:10px;">Cód. Consignación: ${codigoConsignacion}</div>
    `;
}

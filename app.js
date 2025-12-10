// =================================================================
// 1. DEFINICIÓN DEL CATÁLOGO MAESTRO (132 PRODUCTOS)
//    *** DATOS EXTRAÍDOS DIRECTAMENTE DE LA TABLA ADJUNTA ***
// =================================================================

// Usamos esta estructura para manejar la granularidad de precios por TIER
const RAW_CATALOG_DATA = [
    // TIER 1
    { tier: "T1", descripcion: "CLIP ON", precio: 40000.00, graduacion_key: "NOGRAD", final_sku: "T1ClpOn" },
    { tier: "T1", descripcion: "NEUTROS CON AR VERDE", precio: 56000.00, graduacion_key: "NOGRAD", final_sku: "T1LeNeArVr" },
    { tier: "T1", descripcion: "NEUTROS POLARIZADO", precio: 104000.00, graduacion_key: "NOGRAD", final_sku: "T1LeNeSol" },
    { tier: "T1", descripcion: "PARA COMPUTO NEUTROS", precio: 89000.00, graduacion_key: "NOGRAD", final_sku: "T1LeNeCom" },
    { tier: "T1", descripcion: "LENTE MONOFOCAL - AR AZUL", precio: 177000.00, graduacion_key: "MONO", final_sku: "T1LeMoArAz" },
    { tier: "T1", descripcion: "LENTE MONOFOCAL - HI", precio: 177000.00, graduacion_key: "MONO", final_sku: "T1LeMoHi" },
    { tier: "T1", descripcion: "LENTE MONOFOCAL - AR AZUL + HI", precio: 177000.00, graduacion_key: "MONO", final_sku: "T1LeMoArAzHi" },
    { tier: "T1", descripcion: "LENTE MONOFOCAL POLARIZADO", precio: 188000.00, graduacion_key: "MONO", final_sku: "T1LeMoSol" },
    { tier: "T1", descripcion: "LENTE MONOFOCAL FOTOCROMATICO", precio: 188000.00, graduacion_key: "MONO", final_sku: "T1LeMoFo" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWTON", precio: 246000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNew" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWTON + AR AZUL", precio: 277000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNewArAz" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWTON POLARIZADO", precio: 297000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNewSol" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWTON + FOTO", precio: 297000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNewFo" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWTON + FOTO + HI", precio: 316000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNewFoHi" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWTON + HI", precio: 277000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNewHi" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWTON + HI + AR AZUL", precio: 306000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNewHiArAz" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWPLUS", precio: 288000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPl" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWPLUS + AR AZUL", precio: 318000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPlArAz" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWPLUS POLARIZADO", precio: 338000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPlSol" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWPLUS + FOTO", precio: 338000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPlFo" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWPLUS + FOTO + HI", precio: 358000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPlFoHi" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWPLUS + HI", precio: 318000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPlHi" },
    { tier: "T1", descripcion: "LENTE PROGRESIVO NEWPLUS + HI + AR AZUL", precio: 348000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPlHiArAz" },
    
    // TIER 2
    { tier: "T2", descripcion: "CLIP ON", precio: 36000.00, graduacion_key: "NOGRAD", final_sku: "T2ClpOn" },
    { tier: "T2", descripcion: "NEUTROS CON AR VERDE", precio: 51000.00, graduacion_key: "NOGRAD", final_sku: "T2LeNeArVr" },
    { tier: "T2", descripcion: "NEUTROS POLARIZADO", precio: 94000.00, graduacion_key: "NOGRAD", final_sku: "T2LeNeSol" },
    { tier: "T2", descripcion: "PARA COMPUTO NEUTROS", precio: 80000.00, graduacion_key: "NOGRAD", final_sku: "T2LeNeCom" },
    { tier: "T2", descripcion: "LENTE MONOFOCAL - AR AZUL", precio: 159000.00, graduacion_key: "MONO", final_sku: "T2LeMoArAz" },
    { tier: "T2", descripcion: "LENTE MONOFOCAL - HI", precio: 159000.00, graduacion_key: "MONO", final_sku: "T2LeMoHi" },
    { tier: "T2", descripcion: "LENTE MONOFOCAL - AR AZUL + HI", precio: 159000.00, graduacion_key: "MONO", final_sku: "T2LeMoArAzHi" },
    { tier: "T2", descripcion: "LENTE MONOFOCAL POLARIZADO", precio: 169000.00, graduacion_key: "MONO", final_sku: "T2LeMoSol" },
    { tier: "T2", descripcion: "LENTE MONOFOCAL FOTOCROMATICO", precio: 169000.00, graduacion_key: "MONO", final_sku: "T2LeMoFo" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWTON", precio: 221000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNew" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWTON + AR AZUL", precio: 249000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNewArAz" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWTON POLARIZADO", precio: 267000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNewSol" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWTON + FOTO", precio: 267000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNewFo" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWTON + FOTO + HI", precio: 284000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNewFoHi" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWTON + HI", precio: 249000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNewHi" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWTON + HI + AR AZUL", precio: 275000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNewHiArAz" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWPLUS", precio: 259000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPl" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWPLUS + AR AZUL", precio: 286000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPlArAz" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWPLUS POLARIZADO", precio: 304000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPlSol" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWPLUS + FOTO", precio: 304000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPlFo" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWPLUS + FOTO + HI", precio: 322000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPlFoHi" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWPLUS + HI", precio: 286000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPlHi" },
    { tier: "T2", descripcion: "LENTE PROGRESIVO NEWPLUS + HI + AR AZUL", precio: 313000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPlHiArAz" },

    // TIER 3
    { tier: "T3", descripcion: "LENTE DE SOL NEUTRO", precio: 119000.00, graduacion_key: "NOGRAD", final_sku: "T3LeNeSol" }, // Lente de sol neutro
    { tier: "T3", descripcion: "LENTE DE SOL GRADUADO", precio: 188000.00, graduacion_key: "MONO", final_sku: "T3LeMoSol" }, // Lente de sol graduado
    { tier: "T3", descripcion: "LENTE MONOFOCAL - AR AZUL", precio: 159000.00, graduacion_key: "MONO", final_sku: "T3LeMoArAz" },
    { tier: "T3", descripcion: "LENTE MONOFOCAL - HI", precio: 168000.00, graduacion_key: "MONO", final_sku: "T3LeMoHi" },
    { tier: "T3", descripcion: "LENTE MONOFOCAL - AR AZUL + HI", precio: 177000.00, graduacion_key: "MONO", final_sku: "T3LeMoArAzHi" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWTON", precio: 207000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNew" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWTON + AR AZUL", precio: 227000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNewArAz" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWTON POLARIZADO", precio: 267000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNewSol" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWTON + FOTO", precio: 267000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNewFo" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWTON + FOTO + HI", precio: 287000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNewFoHi" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWTON + HI", precio: 227000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNewHi" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWTON + HI + AR AZUL", precio: 257000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNewHiArAz" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWPLUS", precio: 247000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPl" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWPLUS + AR AZUL", precio: 267000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPlArAz" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWPLUS POLARIZADO", precio: 307000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPlSol" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWPLUS + FOTO", precio: 307000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPlFo" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWPLUS + FOTO + HI", precio: 327000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPlFoHi" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWPLUS + HI", precio: 267000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPlHi" },
    { tier: "T3", descripcion: "LENTE PROGRESIVO NEWPLUS + HI + AR AZUL", precio: 297000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPlHiArAz" },
    { tier: "T3", descripcion: "NEUTROS CON AR VERDE", precio: 51000.00, graduacion_key: "NOGRAD", final_sku: "T3LeNeArVr" },
    { tier: "T3", descripcion: "PARA COMPUTO NEUTROS", precio: 64000.00, graduacion_key: "NOGRAD", final_sku: "T3LeNeCom" },

    // TIER 4
    { tier: "T4", descripcion: "CLIP ON", precio: 32000.00, graduacion_key: "NOGRAD", final_sku: "T4ClpOn" },
    { tier: "T4", descripcion: "LENTE MONOFOCAL - AR AZUL", precio: 119000.00, graduacion_key: "MONO", final_sku: "T4LeMoArAz" },
    { tier: "T4", descripcion: "LENTE MONOFOCAL - HI", precio: 159000.00, graduacion_key: "MONO", final_sku: "T4LeMoHi" },
    { tier: "T4", descripcion: "LENTE MONOFOCAL - AR AZUL + HI", precio: 168000.00, graduacion_key: "MONO", final_sku: "T4LeMoArAzHi" },
    { tier: "T4", descripcion: "LENTE MONOFOCAL POLARIZADO", precio: 188000.00, graduacion_key: "MONO", final_sku: "T4LeMoSol" },
    { tier: "T4", descripcion: "LENTE MONOFOCAL FOTOCROMATICO", precio: 168000.00, graduacion_key: "MONO", final_sku: "T4LeMoFo" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWTON", precio: 196000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNew" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWTON + AR AZUL", precio: 207000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNewArAz" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWTON POLARIZADO", precio: 267000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNewSol" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWTON + FOTO", precio: 267000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNewFo" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWTON + FOTO + HI", precio: 287000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNewFoHi" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWTON + HI", precio: 207000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNewHi" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWTON + HI + AR AZUL", precio: 237000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNewHiArAz" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWPLUS", precio: 227000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPl" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWPLUS + AR AZUL", precio: 247000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPlArAz" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWPLUS POLARIZADO", precio: 297000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPlSol" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWPLUS + FOTO", precio: 297000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPlFo" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWPLUS + FOTO + HI", precio: 316000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPlFoHi" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWPLUS + HI", precio: 247000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPlHi" },
    { tier: "T4", descripcion: "LENTE PROGRESIVO NEWPLUS + HI + AR AZUL", precio: 277000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPlHiArAz" },
    { tier: "T4", descripcion: "LENTE DE SOL NEUTRO", precio: 104000.00, graduacion_key: "NOGRAD", final_sku: "T4LeNeSol" },
    { tier: "T4", descripcion: "LENTE DE SOL GRADUADO", precio: 168000.00, graduacion_key: "MONO", final_sku: "T4LeMoSol" },
    { tier: "T4", descripcion: "NEUTROS CON AR VERDE", precio: 45000.00, graduacion_key: "NOGRAD", final_sku: "T4LeNeArVr" },
    { tier: "T4", descripcion: "PARA COMPUTO NEUTROS", precio: 64000.00, graduacion_key: "NOGRAD", final_sku: "T4LeNeCom" },

    // TIER 5 (Lentes)
    { tier: "T5", descripcion: "CLIP ON", precio: 32000.00, graduacion_key: "NOGRAD", final_sku: "T5ClpOn" },
    { tier: "T5", descripcion: "LENTE MONOFOCAL - AR AZUL", precio: 119000.00, graduacion_key: "MONO", final_sku: "T5LeMoArAz" },
    { tier: "T5", descripcion: "LENTE MONOFOCAL - HI", precio: 159000.00, graduacion_key: "MONO", final_sku: "T5LeMoHi" },
    { tier: "T5", descripcion: "LENTE MONOFOCAL - AR AZUL + HI", precio: 168000.00, graduacion_key: "MONO", final_sku: "T5LeMoArAzHi" },
    { tier: "T5", descripcion: "LENTE MONOFOCAL POLARIZADO", precio: 188000.00, graduacion_key: "MONO", final_sku: "T5LeMoSol" },
    { tier: "T5", descripcion: "LENTE MONOFOCAL FOTOCROMATICO", precio: 168000.00, graduacion_key: "MONO", final_sku: "T5LeMoFo" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWTON", precio: 196000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNew" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWTON + AR AZUL", precio: 207000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNewArAz" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWTON POLARIZADO", precio: 267000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNewSol" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWTON + FOTO", precio: 267000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNewFo" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWTON + FOTO + HI", precio: 287000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNewFoHi" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWTON + HI", precio: 207000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNewHi" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWTON + HI + AR AZUL", precio: 237000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNewHiArAz" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWPLUS", precio: 227000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPl" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWPLUS + AR AZUL", precio: 247000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPlArAz" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWPLUS POLARIZADO", precio: 297000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPlSol" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWPLUS + FOTO", precio: 297000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPlFo" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWPLUS + FOTO + HI", precio: 316000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPlFoHi" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWPLUS + HI", precio: 247000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPlHi" },
    { tier: "T5", descripcion: "LENTE PROGRESIVO NEWPLUS + HI + AR AZUL", precio: 277000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPlHiArAz" },
    { tier: "T5", descripcion: "LENTE DE SOL NEUTRO", precio: 104000.00, graduacion_key: "NOGRAD", final_sku: "T5LeNeSol" },
    { tier: "T5", descripcion: "LENTE DE SOL GRADUADO", precio: 168000.00, graduacion_key: "MONO", final_sku: "T5LeMoSol" },
    { tier: "T5", descripcion: "NEUTROS CON AR VERDE", precio: 45000.00, graduacion_key: "NOGRAD", final_sku: "T5LeNeArVr" },
    { tier: "T5", descripcion: "PARA COMPUTO NEUTROS", precio: 64000.00, graduacion_key: "NOGRAD", final_sku: "T5LeNeCom" },

    // TIER 5 (Micas) - Precios y SKU exclusivos
    { tier: "T5", descripcion: "MICAS MONOFOCAL AR VERDE", precio: 40000.00, graduacion_key: "MONO", final_sku: "T5MicMoArVr" },
    { tier: "T5", descripcion: "MICAS MONOFOCAL AR AZUL", precio: 40000.00, graduacion_key: "MONO", final_sku: "T5MicMoArAz" },
    { tier: "T5", descripcion: "MICAS MONOFOCAL FOTOCROMATICO", precio: 104000.00, graduacion_key: "MONO", final_sku: "T5MicMoFo" },
    { tier: "T5", descripcion: "MICAS MONOFOCAL POLARIZADO", precio: 104000.00, graduacion_key: "MONO", final_sku: "T5MicMoArSol" },
    { tier: "T5", descripcion: "MICAS NEUTRAS POLARIZADAS", precio: 104000.00, graduacion_key: "NOGRAD", final_sku: "T5MicNeSol" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWTON AR VERDE", precio: 120000.00, graduacion_key: "NEWTON", final_sku: "T5MicProNew" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWTON POLARIZADO", precio: 160000.00, graduacion_key: "NEWTON", final_sku: "T5MicProNewSol" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWTON AR AZUL", precio: 120000.00, graduacion_key: "NEWTON", final_sku: "T5MicProNewArAz" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWTON FOTOCROMATICO", precio: 160000.00, graduacion_key: "NEWTON", final_sku: "T5MicProNewFo" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWTON + HI", precio: 160000.00, graduacion_key: "NEWTON", final_sku: "T5MicProNewHi" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWTON + HI + AR AZUL", precio: 160000.00, graduacion_key: "NEWTON", final_sku: "T5MicProNewHiArAz" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWPLUS AR VERDE", precio: 160000.00, graduacion_key: "NEWPLUS", final_sku: "T5MicProNewPl" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWPLUS AR AZUL", precio: 160000.00, graduacion_key: "NEWPLUS", final_sku: "T5MicProNewPlArAz" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWPLUS POLARIZADO", precio: 200000.00, graduacion_key: "NEWPLUS", final_sku: "T5MicProNewPlSol" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWPLUS FOTOCROMATICO", precio: 200000.00, graduacion_key: "NEWPLUS", final_sku: "T5MicProNewPlFo" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWPLUS + HI", precio: 200000.00, graduacion_key: "NEWPLUS", final_sku: "T5MicProNewPlHi" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWPLUS + HI + AR AZUL", precio: 200000.00, graduacion_key: "NEWPLUS", final_sku: "T5MicProNewPlHiArAz" },
];

const PRODUCT_CATALOG = RAW_CATALOG_DATA.map(item => ({
    tier: item.tier,
    graduacion: item.graduacion_key,
    combinacion_final: item.descripcion, // La descripción es la opción de cara al usuario
    precio: item.precio,
    final_sku: item.final_sku,
}));


// =================================================================
// 2. ELEMENTOS Y CONFIGURACIÓN
// =================================================================

const tier = document.getElementById("tier");
const graduacion = document.getElementById("graduacion");
const combinacion_final = document.getElementById("combinacion_final");
const generar = document.getElementById("generar");
const preview = document.getElementById("preview");

// El orden de selectores: solo 3
const SELECT_CONTROLS = [
    { id: "tier", element: tier, label: "Seleccionar Tier" },
    { id: "graduacion", element: graduacion, label: "Graduación" },
    { id: "combinacion_final", element: combinacion_final, label: "Combinación / Producto Final" }
];

// Mapeo para nombres de opciones de Graduación
const OPTION_LABELS_GRAD = {
    MONO: 'Monofocal',
    NEWTON: 'Progresivo Newton',
    NEWPLUS: 'Progresivo Newton Plus',
    NOGRAD: 'Sin graduación',
    // Usamos el texto de la descripción para la combinacion_final
};


// =================================================================
// 3. FUNCIONES DE LÓGICA
// =================================================================

function formatPrice(price) {
    if (price === undefined || price === null) return "Precio no disponible";
    // Usamos Intl.NumberFormat para un formato de moneda correcto
    return new Intl.NumberFormat('es-CO', { // Puedes cambiar 'es-CO' a tu región de preferencia
        style: 'currency',
        currency: 'USD', // O COP, MXN, etc.
        minimumFractionDigits: 0
    }).format(price);
}

function resetNextSelects(startIndex) {
    for (let i = startIndex; i < SELECT_CONTROLS.length; i++) {
        const control = SELECT_CONTROLS[i];
        control.element.innerHTML = `<option value="">-- Selecciona --</option>`;
        control.element.value = "";
        control.element.disabled = true;
    }
    generar.disabled = true;
    preview.innerHTML = "";
}

function updateOptions(currentId) {
    const currentIndex = SELECT_CONTROLS.findIndex(c => c.id === currentId);
    resetNextSelects(currentIndex + 1);

    const selections = {};
    for (let i = 0; i <= currentIndex; i++) {
        selections[SELECT_CONTROLS[i].id] = SELECT_CONTROLS[i].element.value;
    }

    if (selections[currentId] === "") {
        return;
    }

    const nextControl = SELECT_CONTROLS[currentIndex + 1];
    if (!nextControl) {
        generar.disabled = false;
        return;
    }

    // Filtrar el Catálogo basado en las selecciones previas
    let filteredCatalog = PRODUCT_CATALOG.filter(product => {
        let match = true;
        ['tier', 'graduacion'].forEach(key => {
            if (selections[key] && product[key] !== selections[key]) {
                match = false;
            }
        });
        return match;
    });

    let nextOptions = [];
    if (nextControl.id === 'graduacion') {
        // Para Graduación: obtenemos las 4 opciones principales que estén disponibles
        nextOptions = ["MONO", "NOGRAD", "NEWTON", "NEWPLUS"].filter(
            grad => filteredCatalog.some(p => p.graduacion === grad)
        );
        nextOptions.sort((a, b) => a.localeCompare(b));
    } else {
        // Para combinacion_final: Obtenemos objetos {value: descripción, price: precio}
        const uniqueCombinations = {};
        filteredCatalog.forEach(p => {
             // La clave única es la descripción (value), el precio debe ser el que coincide con el TIER
             uniqueCombinations[p.combinacion_final] = p.precio;
        });

        // Convertir el mapa a un array de objetos para el select
        nextOptions = Object.keys(uniqueCombinations).map(value => ({
            value: value,
            price: uniqueCombinations[value]
        }));
        
        // Ordenamos por nombre de combinación
        nextOptions.sort((a, b) => a.value.localeCompare(b.value));
    }

    // 6. Popular el siguiente selector y habilitarlo
    if (nextOptions.length > 0) {
        let optionsHtml = `<option value="">-- Selecciona --</option>`;
        
        nextOptions.forEach(option => {
            if (nextControl.id === 'graduacion') {
                const label = OPTION_LABELS_GRAD[option] || option;
                optionsHtml += `<option value="${option}">${label}</option>`;
            } else if (nextControl.id === 'combinacion_final') {
                // Aquí usamos el valor y el precio en la etiqueta visible
                const priceFormatted = formatPrice(option.price);
                optionsHtml += `<option value="${option.value}">${option.value} (${priceFormatted})</option>`;
            }
        });

        nextControl.element.innerHTML = optionsHtml;
        nextControl.element.disabled = false;
    }
}


// =================================================================
// 4. ASIGNACIÓN DE EVENT LISTENERS
// =================================================================

SELECT_CONTROLS.forEach((control) => {
    control.element.addEventListener("change", () => {
        updateOptions(control.id);
        
        // Habilitar Generar si el último select tiene valor
        if (control.id === 'combinacion_final' && control.element.value !== "") {
            generar.disabled = false;
        } else if (control.id === 'combinacion_final' && control.element.value === "") {
            generar.disabled = true;
        }
    });
});


// =================================================================
// 5. GENERACIÓN DE ETIQUETA
// =================================================================

generar.addEventListener("click", () => {
    const t = tier.value;
    const g = graduacion.value;
    const cf = combinacion_final.value; 

    // Buscamos el SKU final EXACTO usando la coincidencia de los 3 campos
    const finalProduct = PRODUCT_CATALOG.find(p => 
        p.tier === t && 
        p.graduacion === g && 
        p.combinacion_final === cf
    );

    const finalSKU = finalProduct ? finalProduct.final_sku : "SKU-NO-ENCONTRADO";
    const precioUnitario = finalProduct ? formatPrice(finalProduct.precio) : "N/A";
    const consignacion = "123456";

    if (finalSKU === "SKU-NO-ENCONTRADO") {
        preview.innerHTML = `<p style="color: red;">Error: La combinación seleccionada no es un producto válido en el catálogo.</p>`;
        return;
    }
    
    // Generación de Etiqueta
    preview.innerHTML = `
        <div class="barcode">
            <svg id="barcode"></svg>
            <p style="font-size:20px; margin:5px 0;"><b>${finalSKU}</b></p>
            <p style="font-size:18px;">Precio: ${precioUnitario}</p>
            <p style="font-size:18px;">${consignacion}</p>
        </div>
    `;

    JsBarcode("#barcode", finalSKU, {
        format: "CODE128",
        width: 3,
        height: 90,
        displayValue: false
    });
});
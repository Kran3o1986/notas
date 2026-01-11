// Referencias a elementos del DOM
const tierSelect = document.getElementById('tier');
const extrasContainer = document.getElementById('extras-container');
const cuponSelect = document.getElementById('cupon');
const etiquetaContainer = document.getElementById('etiquetaGenerada');
const btnImprimir = document.getElementById('btnImprimir');
const statusText = document.getElementById('status');
const mensajesDiv = document.getElementById('mensajes');
const subtotalSpan = document.getElementById('subtotal');
const totalSpan = document.getElementById('total');

// Datos en memoria
let DATA_TIERS = [];
let DATA_EXTRAS = [];
let DATA_CUPONES = [];

// Cargar Excel ripley.xlsx automáticamente
async function cargarExcelAutomatico() {
    try {
        const response = await fetch('ripley.xlsx');
        if (!response.ok) throw new Error('No se encontró ripley.xlsx');

        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const rows = jsonData.map(r => ({
            producto: String(r.Producto || '').trim(),
            precio: Number(r.Precio) || 0,
            codigo_barra: String(r.codigo_barra || '').trim()
        }));

        DATA_TIERS = rows.filter(r => r.producto.startsWith('Armazón Tier'));
        DATA_EXTRAS = rows.filter(r =>
            ['Hi-index', 'Fotocromatico', 'Clip-on', 'Ar Azul',
                'Polarizado', 'Newton', 'Newton Plus'].includes(r.producto)
        );
        DATA_CUPONES = rows.filter(r =>
            r.producto === 'Descuento 7000' || r.producto === 'Descuento 50%'
        );

        inicializarUI();
        statusText.innerText = `✅ ${rows.length} filas cargadas.`;
        statusText.style.color = 'green';
    } catch (err) {
        console.error(err);
        statusText.innerText = '❌ Error al leer ripley.xlsx';
        statusText.style.color = 'red';
    }
}

// Inicializar selects, checkboxes y eventos
function inicializarUI() {
    // Tiers
    tierSelect.innerHTML = '<option value="">Sin armazón</option>';
    DATA_TIERS.forEach((t, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = `${t.producto} (${formatearCLP(t.precio)})`;
        tierSelect.appendChild(opt);
    });

    // Extras
    extrasContainer.innerHTML = '<label class="form-label">Extras</label>';
    DATA_EXTRAS.forEach((e, idx) => {
        const id = `extra_${idx}`;
        const div = document.createElement('div');
        div.className = 'form-check';
        div.innerHTML = `
      <input class="form-check-input extra-check" type="checkbox" id="${id}"
             data-nombre="${e.producto}" data-precio="${e.precio}">
      <label class="form-check-label" for="${id}">
        ${e.producto} (${formatearCLP(e.precio)})
      </label>
    `;
        extrasContainer.appendChild(div);
    });

    // Cupones
    cuponSelect.innerHTML = '<option value="">Sin cupón</option>';
    DATA_CUPONES.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.producto;
        opt.textContent = c.producto;
        cuponSelect.appendChild(opt);
    });

    tierSelect.addEventListener('change', recalcular);
    extrasContainer.addEventListener('change', manejarExtrasChange);
    cuponSelect.addEventListener('change', recalcular);

    btnImprimir.addEventListener('click', () => {
        const contenido = etiquetaContainer.innerHTML.trim();
        if (contenido && !contenido.includes('Selecciona un tier')) {
            console.log('Intentando imprimir...'); // Para debug
            try {
                // Pequeño delay para asegurar que el DOM esté listo
                setTimeout(() => {
                    console.log('Llamando a window.print()'); // Para debug
                    window.print();
                }, 100);
            } catch (error) {
                console.error('Error al imprimir:', error);
                alert('Error al abrir el diálogo de impresión. Prueba con Ctrl+P');
            }
        } else {
            alert('Selecciona un tier primero');
        }
    });

    recalcular();
}

// Formatear moneda CLP
function formatearCLP(monto) {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    }).format(monto);
}

// Manejar cambios en extras (todas las reglas de incompatibilidad)
function manejarExtrasChange(e) {
    if (!e.target.classList.contains('extra-check')) return;

    const nombre = e.target.dataset.nombre;
    const checks = [...document.querySelectorAll('.extra-check')];
    const getCheck = n => checks.find(c => c.dataset.nombre === n);

    const chkArAzul = getCheck('Ar Azul');
    const chkPolarizado = getCheck('Polarizado');
    const chkFoto = getCheck('Fotocromatico');
    const chkClip = getCheck('Clip-on');
    const chkNewton = getCheck('Newton');
    const chkNewtonPlus = getCheck('Newton Plus');

    // 1. Polarizado y Fotocromatico son mutuamente excluyentes
    if (nombre === 'Polarizado' && e.target.checked && chkFoto) {
        chkFoto.checked = false;
    }
    if (nombre === 'Fotocromatico' && e.target.checked && chkPolarizado) {
        chkPolarizado.checked = false;
    }

    // 2. Polarizado / Fotocromatico vs Ar Azul
    if (nombre === 'Polarizado' || nombre === 'Fotocromatico') {
        if (e.target.checked) {
            if (chkArAzul) {
                chkArAzul.checked = false;
                chkArAzul.disabled = true;
            }
        } else {
            if (chkArAzul &&
                (!chkPolarizado || !chkPolarizado.checked) &&
                (!chkFoto || !chkFoto.checked)) {
                chkArAzul.disabled = false;
            }
        }
    }

    if (nombre === 'Ar Azul' && e.target.checked) {
        if (chkPolarizado && chkPolarizado.checked) chkPolarizado.checked = false;
        if (chkFoto && chkFoto.checked) chkFoto.checked = false;
    }

    // 3. Newton XOR Newton Plus
    if (nombre === 'Newton' && e.target.checked && chkNewtonPlus) {
        chkNewtonPlus.checked = false;
    }
    if (nombre === 'Newton Plus' && e.target.checked && chkNewton) {
        chkNewton.checked = false;
    }

    recalcular();
}

// Obtener selección actual
function obtenerSeleccion() {
    let base = { nombre: null, precio: 0, codigo_barra: '' };

    if (tierSelect.value !== '') {
        const t = DATA_TIERS[Number(tierSelect.value)];
        if (t) {
            base = {
                nombre: t.producto,
                precio: t.precio,
                codigo_barra: t.codigo_barra
            };
        }
    }

    const extrasSel = [];
    const checks = document.querySelectorAll('.extra-check');
    checks.forEach(chk => {
        if (chk.checked) {
            extrasSel.push({
                nombre: chk.dataset.nombre,
                precio: Number(chk.dataset.precio) || 0
            });
        }
    });

    const cupon = cuponSelect.value || null;

    return { base, extrasSel, cupon };
}

// Recalcular subtotal, total y mensajes
function recalcular() {
    const { base, extrasSel, cupon } = obtenerSeleccion();
    const mensajes = [];

    const nombresExtras = extrasSel.map(e => e.nombre);
    const redundante =
        nombresExtras.includes('Clip-on') &&
        (nombresExtras.includes('Polarizado') ||
            nombresExtras.includes('Fotocromatico'));

    if (redundante) {
        mensajes.push(
            '⚠️ Clip-on junto con Polarizado o Fotocromático es redundante.'
        );
    }

    let subtotal = base.precio;
    extrasSel.forEach(e => { subtotal += e.precio; });

    let total = subtotal;
    if (cupon === 'Descuento 7000') {
        total = Math.max(0, subtotal - 7000);
    } else if (cupon === 'Descuento 50%') {
        total = subtotal / 2;
    }

    subtotalSpan.textContent = formatearCLP(subtotal);
    totalSpan.textContent = formatearCLP(total);
    mensajesDiv.innerHTML = mensajes.join('<br>');

    // Permitir generar etiqueta si hay tier O extras seleccionados
    if (base.nombre || extrasSel.length > 0) {
        dibujarEtiqueta(base, extrasSel, total);
    } else {
        etiquetaContainer.innerHTML = '<p>Selecciona un tier o extras para generar la etiqueta</p>';
        btnImprimir.style.display = 'none';
    }
}

// Dibujar la etiqueta final con código de barras
function dibujarEtiqueta(base, extrasSel, total) {
    // Validar que haya al menos algo que mostrar
    if (!base.nombre && extrasSel.length === 0) {
        etiquetaContainer.innerHTML = '<p>Selecciona un tier o extras para generar la etiqueta</p>';
        btnImprimir.style.display = 'none';
        return;
    }

    // Determinar qué mostrar en la etiqueta
    let nombreProducto = '';
    let codigoBarra = base.codigo_barra || '000000000000'; // Código genérico si no hay tier

    if (base.nombre && extrasSel.length > 0) {
        // Tier + Extras
        const nombreLimpio = base.nombre.replace('Armazón ', '').toUpperCase();
        const extrasTexto = extrasSel.map(e => e.nombre).join(' + ');
        nombreProducto = `${nombreLimpio}<br><span class="extras-text">${extrasTexto}</span>`;
    } else if (base.nombre) {
        // Solo Tier
        nombreProducto = base.nombre.replace('Armazón ', '').toUpperCase();
    } else {
        // Solo Extras (sin tier)
        nombreProducto = extrasSel.map(e => e.nombre).join(' + ').toUpperCase();
    }

    // Crear estructura HTML con SVG para código de barras
    etiquetaContainer.innerHTML = `
    <div class="etiqueta-simplificada-container">
      <div class="barcode-area-simplified">
        <svg id="barcode"></svg>
        <div class="barcode-number-simplified">${codigoBarra}</div>
      </div>
      <div class="producto-precio-simplified">
        <div class="product-text">${nombreProducto}</div>
        <div class="price-text">${formatearCLP(total)}</div>
      </div>
    </div>
  `;

    // Generar código de barras usando JsBarcode
    try {
        JsBarcode("#barcode", codigoBarra, {
            format: "CODE128",
            displayValue: false,
            width: 2,
            height: 40,
            margin: 0
        });
    } catch (error) {
        console.error('Error generando código de barras:', error);
        document.getElementById('barcode').innerHTML = '<text>Error en código de barras</text>';
    }

    // Mostrar botón de imprimir
    btnImprimir.style.display = 'block';
}

// Iniciar
window.addEventListener('load', cargarExcelAutomatico);

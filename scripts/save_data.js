let botonEnviar = document.getElementById('solicitudcun:btnEnviar');
botonEnviar.addEventListener('click', function guardarDatos(event) {
    let iden = document.getElementById('solicitudcun:iden').value;
    let mail = document.getElementById('solicitudcun:mail').value;
    let ticu = document.getElementById('solicitudcun:ticu').value;
    let tiqu = document.getElementById('solicitudcun:tiqu').value;
    let obje = document.getElementById('solicitudcun:obje').value;
    let fund = document.getElementById('solicitudcun:fund').value;

    // Guardar datos en localStorage
    localStorage.setItem('solicitud', JSON.stringify({
        iden, mail, ticu, tiqu, obje, fund
    }));
});
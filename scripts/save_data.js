document.addEventListener('DOMContentLoaded', function () {
    let inputFile = document.querySelector('#solicitudcun\\:fadj'); // Captura el input file con escape JSF
    let botonEnviar = document.getElementById('solicitudcun:btnEnviar');

    inputFile.addEventListener('change', function (event) {
        let archivos = event.target.files; // Obtener archivos seleccionados
        let archivosBase64 = [];

        if (archivos.length > 0) {
            let procesados = 0; // Contador de archivos procesados

            Array.from(archivos).forEach((archivo) => {
                let reader = new FileReader();

                reader.onload = function (e) {
                    let base64 = e.target.result.split(',')[1]; // Obtener Base64 sin el prefijo

                    archivosBase64.push({
                        name: archivo.name,
                        content: base64,
                        mime_type: archivo.type
                    });

                    procesados++;

                    // Cuando todos los archivos se procesan, guardamos en localStorage
                    if (procesados === archivos.length) {
                        localStorage.setItem('archivosAdjuntos', JSON.stringify(archivosBase64));
                        console.log("Archivos guardados en localStorage:", archivosBase64);
                    }
                };

                reader.readAsDataURL(archivo); // Convertir archivo a Base64
            });
        }
    });

    botonEnviar.addEventListener('click', function (event) {
        let iden = document.getElementById('solicitudcun:iden').value;
        let mail = document.getElementById('solicitudcun:mail').value;
        let ticu = document.getElementById('solicitudcun:ticu').value;
        let tiqu = document.getElementById('solicitudcun:tiqu').value;
        let obje = document.getElementById('solicitudcun:obje').value;
        let fund = document.getElementById('solicitudcun:fund').value;

        let archivos = localStorage.getItem('archivosAdjuntos'); // Recuperar archivos guardados en localStorage

        // Guardar toda la solicitud con archivos en localStorage
        localStorage.setItem('solicitud', JSON.stringify({
            iden, mail, ticu, tiqu, obje, fund, archivos: archivos ? JSON.parse(archivos) : []
        }));

        console.log("Solicitud guardada con archivos en localStorage");
    });
});

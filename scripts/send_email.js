
const solicitud = JSON.parse(localStorage.getItem('solicitud'));
var cunNo = document.getElementById("respuestacun:cunNo").innerText;

// Recuperar la lista de archivos adjuntos
const archivosAdjuntos = solicitud.archivos || [];

console.log("Archivos adjuntos enviados:", archivosAdjuntos);

// Llamada a la API de ZeptoMail
fetch('http://192.168.1.15:5000/enviarcorreo', {  // Usa la IP pública o dominio
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        to: solicitud.mail,
        subject: `Confirmación de CUN: ${cunNo}`,
        content: `Estimado usuario,<br><br>
    Su CUN generado es: ${cunNo}<br><br>
    Copia de la petición:<br><br>
    Documento de identificación: ${solicitud.iden}<br>
    Tipo de petición: ${solicitud.ticu}<br>
    Tipo de queja: ${solicitud.tiqu}<br><br>
    Objeto:<br>${solicitud.obje}<br><br>
    Hechos:<br>${solicitud.fund}<br><br>
    Gracias por su solicitud.`,
        attachments: archivosAdjuntos
    })
})
    .then(response => response.json())
    .then(data => console.log('Correo enviado correctamente:', data))
    .catch(error => console.error('Error al enviar correo:', error));
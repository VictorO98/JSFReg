
const solicitud = JSON.parse(localStorage.getItem('solicitud'));
console.log("Recuperacion Datos")
console.log(solicitud)
var cunNo = document.getElementById("respuestacun:cunNo").innerText;
console.log("test cun No: " + cunNo);

/* 
emailjs.init("mATPswy5fE-CPFNh4");

const formData = {
    cunNo: cunNo,
    user_pqr: solicitud.mail,
    iden: solicitud.iden,
    ticu: solicitud.ticu,
    tiqu: solicitud.tiqu,
    obje: solicitud.obje,
    fund: solicitud.fund,
};

emailjs.send("service_z9zjy98", "template_deah36q", formData)
    .then(function (response) {
        console.log("Correo enviado exitosamente.");
    }, function (error) {
        console.log("Error al enviar correo:");
    });
*/

const correo = {
    from: "noreply@emtel.com.co",
    to: solicitud.mail,
    subject: `Confirmación de CUN: ${cunNo}`,
    content: `Estimado usuario,\n\nSu CUN generado es: ${cunNo}\n\nCopia peticion:\n\n${solicitud.obje}\n\n${solicitud.fund}\n\nGracias por su solicitud.`
};
fetch('https://api.zeptomail.com/v1.1/email', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Zoho-enczapikey wSsVR60i8xfxCv0uzzKpIbhpng5QAl7/QEQv2Qb07HauH/3D9cdpwUCcUwKnSKNKFzVuRzcaoO8hmh9W1GJYhox/yl8HDyiF9mqRe1U4J3x17qnvhDzKWG1dlROLJYkOxwtjk2VlEMFu'
    },
    body: JSON.stringify({
        from: { address: correo.from },
        to: [{ email_address: { address: correo.to } }, { email_address: { address: "servicioalcliente@emtel.com.co" } }],
        subject: correo.subject,
        textbody: correo.content
    })
})

// Llamada a la API de ZeptoMail
/* fetch('https://api.zeptomail.com/v1.1/email', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Zoho-enczapikey wSsVR60i8xfxCv0uzzKpIbhpng5QAl7/QEQv2Qb07HauH/3D9cdpwUCcUwKnSKNKFzVuRzcaoO8hmh9W1GJYhox/yl8HDyiF9mqRe1U4J3x17qnvhDzKWG1dlROLJYkOxwtjk2VlEMFu'
    },
    body: JSON.stringify({
        from: { address: correo.from },
        to: [{ email_address: { address: correo.to } }, { email_address: { address: "servicioalcliente@emtel.com.co" } }],
        subject: correo.subject,
        textbody: correo.content
    })
})
    .then(response => response.json())
    .then(data => {
        console.log('Correo enviado:', data);
    })
    .catch((error) => {
        console.error('Error al enviar correo:', error);
    }); */
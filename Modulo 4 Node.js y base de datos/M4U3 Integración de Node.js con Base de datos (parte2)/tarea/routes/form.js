var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('form');
});

router.post('/', async (req, res, next) => { 
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'lacolinajc@gmail.com',
    subject: 'contacto desde la web',
    html: `${nombre} ${apellido} se contacto a traves del formulario en "Fulvito" y quiere mas info a este correo: ${email} ademas, hizo el siguiente comentario: ${mensaje}. su tel es ${tel}.`
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transporter.sendMail(obj);

  res.render('form', {
    message: 'Mensaje enviado correctamente'
  });
});

module.exports = router;
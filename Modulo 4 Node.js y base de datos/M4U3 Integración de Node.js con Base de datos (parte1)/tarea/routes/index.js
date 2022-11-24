var express = require('express');
var router = express.Router();
var pool = require('/Juan Cruz/utn e-learning/programador web inicial-Front End Developer/Modulo 4 Node.js y base de datos/M4U3 Integración de Node.js con Base de datos (parte1)/tarea/models/bd');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* select */
// pool.query('select * from m4u3').then(function (resultados){
//   console.log(resultados)
// })

/* insert */
// var obj = {
//   nombre: 'Juan',
//   apellido: 'Rodriguez',
//   usuario: 'rucz',
//   contraseña: 'rucz123',
//   mail: 'rucz@gmail.com'
// }

// pool.query('insert into m4u3 set ?', [obj]).then(function (resultados){
//   console.log(resultados)
// })

/* update */
// var id = 1
// var obj = {
//   nombre: 'Juan Cruz'
// }

// pool.query('update m4u3 set ? where id = ?', [obj, id]).then(function (resultados){
//   console.log(resultados)
// })

/* delete */
// var id = 2

// pool.query('delete from m4u3 where id = ?', [id]).then(function (resultados){
//   console.log(resultados)
// })

module.exports = router;
var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel')

router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades()

  res.render('admin/adminMenu',{
    layout: 'admin/layout',
    usuario: req.session.name,
    novedades
  });
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id

  await novedadesModel.deleteNovedadesById(id)
  res.redirect('/admin/adminMenu')
})

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar',{
    layout: 'admin/layout'
  })
})

router.post('/agregar', async (req, res, next) => {
  try{
    console.log(req.body)
    if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
      await novedadesModel.insertNovedad(req.body)
      res.redirect('/admin/adminMenu')
    }
    else{
      res.render('admin/agregar',{
        layout: 'admin/layout',
        error: true,
        message: 'todos los campos son requeridos'
      })
    }
  }
  catch(error){
    console.log(error)
    res.render('admin/agregar',{
      layout: 'admin/layout',
      error: true,
      message: 'no se cargó la novedad'
    })
  }
})

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id
  var novedad = await novedadesModel.getNovedadById(id)
  res.render('admin/modificar',{
    layout: 'admin/layout',
    novedad
  })
})

router.post('/modificar', async (req, res, next) => {
  try{
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    await novedadesModel.modificarNovedadById(obj, req.body.id)
    res.redirect('/admin/adminMenu')
  }
  catch(error){
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'no se modifico la novedad'
    })
  }
})

module.exports = router;
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

module.exports = router;
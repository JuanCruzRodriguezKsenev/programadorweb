var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin/adminMenu',{
    layout: 'admin/layout',
    usuario: req.session.name
  });
});

module.exports = router;
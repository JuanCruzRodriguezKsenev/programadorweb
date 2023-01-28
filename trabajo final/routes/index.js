var express = require("express");
var router = express.Router();
var novedadesModel = require("../models/novedadesModel");
var cloudinary = require("cloudinary").v2;

router.get("/", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map((novedad) => {
    if (novedad.img_id) {
      const imagen = cloudinary.url(novedad.img_id);

      return {
        ...novedad,
        imagen,
      };
    } else {
      return {
        ...novedad,
        imagen: "/images/Nike Mercurial Vapor.jpeg",
      };
    }
  });

  res.render("index", {
    layout: "layout",
    usuario: req.session.name,
    novedades
  });
});

module.exports = router;

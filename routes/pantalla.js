var express = require('express');
var PantallaController = require('../controllers/pantalla');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/views/pantalla/list', PantallaController.listar);


module.exports = router;
var express = require('express');
var TecladoController = require('../controllers/teclado');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/views/teclado/list', TecladoController.listar);


module.exports = router;
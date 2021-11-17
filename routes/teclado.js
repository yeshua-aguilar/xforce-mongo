var express = require('express');
var TecladoController = require('../controllers/teclado');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/views/teclado/list', TecladoController.listar);
router.get('/views/teclado/form/:id', TecladoController.form);//abrir formularia
router.post('/teclado/save',TecladoController.save);
module.exports = router;
var express = require('express');
var TecladoController = require('../controllers/teclado');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/views/teclado/list', TecladoController.listar);
router.get('/views/teclado/form/:id', TecladoController.form);//abrir formularia
router.post('/teclado/save',TecladoController.save);//es para guarda los datos que persona escribio en la pestaña 
//del teclado form
module.exports = router;
var express = require('express');
var GeneralController = require('../controllers/general');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/views/general/list', GeneralController.listar);
router.get('/views/general/form/:id',GeneralController.form);// ABRIR EL FORMULARIO
router.post('/general/save',GeneralController.save);


module.exports = router;
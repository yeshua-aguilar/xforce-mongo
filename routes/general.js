var express = require('express');
var GeneralController = require('../controllers/general');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/views/general/list', GeneralController.listar);


module.exports = router;
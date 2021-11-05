var express = require('express');
var PcgamerController = require('../controllers/pcgamer');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/views/pcgamer/list', PcgamerController.listar);


module.exports = router;
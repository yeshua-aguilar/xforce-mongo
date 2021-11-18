var express = require('express');
var PcgamerController = require('../controllers/pcgamer');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/views/pcgamer/list', PcgamerController.listar);
router.get('/views/pcgamer/:id', PcgamerController.form);
router.post('/pcgamer/save',PcgamerController.save);

module.exports = router;
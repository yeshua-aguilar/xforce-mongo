var express = require('express');
var MouseController = require('../controllers/mouse');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/views/mouse/list', MouseController.listar);


module.exports = router;
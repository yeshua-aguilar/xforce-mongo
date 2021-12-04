'use strict'

var express = require('express');
var SubirimgController = require('../controllers/subirImg');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/views/subirimg/list', SubirimgController.listar);


module.exports = router;
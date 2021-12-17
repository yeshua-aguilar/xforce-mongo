var express = require('express');
var MouseController = require('../controllers/mouse');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/views/mouse/list', MouseController.listar);
router.get('/views/mouse/fomr/:id', MouseController.form);
router.post('/mouse/save', MouseController.save);


module.exports = router;

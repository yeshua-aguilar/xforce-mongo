'use strict'

// REQUIRES
var express = require('express');

// CARGAR ARCHIVOS DE RUTAS
var pantalla_routes = require('./routes/pantalla');
var teclado_routes = require('./routes/teclado');
var mouse_routes = require('./routes/mouse');
var pcgamer_routes = require('./routes/pcgamer');


// EJECUTAR EXPRESS
var app = express();

// ASIGNO EJS A LAS VISTAS
app.set('view engine','ejs');

// DECODIFICACION DE ENVIOS FORM
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// REESCRIBIR RUTAS
app.use('/',pantalla_routes);
app.use('/',teclado_routes);
app.use('/',mouse_routes);
app.use('/',pcgamer_routes);


//EXPORTAR MODULE
module.exports = app;
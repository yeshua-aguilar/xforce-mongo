var client = require("../database/db");
var db = client.db("certus");// SELECCIONANDO LA BASE DE DATOS

var controller = {
    listar: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR GENERAL");
        db.collection("general").find().toArray()
            .then(
                general => {
                    res.render('general_list', { dataGeneral: general });
                }
            ).catch(
                error => console.log(error)
            )
    },
    form: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION FORM");
        console.log("id:" + req.params.id);
        if (req.params.id == 1) {
            var general = {}
            general.nombre = "";
            general.categoria = "";
            general.marca = "";
            general.precio = "";
            res.render('general_form', { generalForm: general });
        }


    },
    save: function (req, res){
        console.log("-------------------");
        console.log("ENTRADA A LA FUNCION GUARDAR");
        console.log(req.body);
        if(req.body.nombre){
            var general = {}
            general.nombre = req.body.nombre;
            general.categoria = req.body.categoria;
            general.marca = req.body.marca;
            general.precio = req.body.precio;
            console.log(general);
            db.collection("general").insertOne(general).then(
                ()=>{
                    res.redirect('/views/general/list');
                }
            ).catch(
                error => console.log(error)
            )
        }
    }
}
module.exports = controller;
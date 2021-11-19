var client = require("../database/db");
var db = client.db("certus");// SELECCIONANDO LA BASE DE DATOS

var controller = {
    listar: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR PCGAMER");
        db.collection("pcgamer").find().toArray()
            .then(
                pcgamer => {
                    res.render('pcgamer_list', { dataPcgamer: pcgamer });
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
            var pcgamer = {}
            pcgamer.nombre = "";
            pcgamer.Gama = "";
            pcgamer.precio = "";
            res.render('pcgamer_form', { pcgamerForm: pcgamer });
        }


    },
    save: function (req, res){
        console.log("-------------------");
        console.log("ENTRADA A LA FUNCION GUARDAR");
        console.log(req.body);
        if(req.body.nombre){
            var pcgamer = {}
            pcgamer.nombre= req.body.nombre;
            pcgamer.Gama = req.body.Gama;
            pcgamer.precio = req.body.precio;
            console.log(pcgamer);
            db.collection("pcgamer").insertOne(pcgamer).then(
                ()=>{
                    res.redirect('/views/pcgamer/list');
                }
            ).catch(
                error => console.log(error)
            )
        }
    }
}
module.exports = controller;
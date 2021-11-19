var client = require("../database/db");
var db = client.db("certus");// SELECCIONANDO LA BASE DE DATOS

var controller = {
    listar: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR MOUSE");
        db.collection("mouse").find().toArray()
            .then(
                mouse => {
                    res.render('mouse_list', { dataMouse: mouse });
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
            var mouse = {}
            mouse.nombre = "";
            mouse.PRECIO = "";
            res.render('mouse_form', { mouseForm: mouse });
        }


    },
    save: function (req, res){
        console.log("-------------------");
        console.log("ENTRADA A LA FUNCION GUARDAR");
        console.log(req.body);
        if(req.body.nombre){
            var mouse = {}
            mouse.nombre= req.body.nombre;
            mouse.PRECIO = req.body.PRECIO;
            console.log(mouse);
            db.collection("mouse").insertOne(mouse).then(
                ()=>{
                    res.redirect('/views/mouse/list');
                }
            ).catch(
                error => console.log(error)
            )
        }
    }
}
module.exports = controller;

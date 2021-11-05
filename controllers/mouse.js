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
    }
}
module.exports = controller;
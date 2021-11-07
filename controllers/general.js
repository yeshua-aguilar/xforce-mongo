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
    }
}
module.exports = controller;
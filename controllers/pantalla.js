var client = require("../database/db");
var db = client.db("certus");// SELECCIONANDO LA BASE DE DATOS

var controller = {
    listar: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");
        db.collection("pantalla").find().toArray()
            .then(
                pantalla => {
                    res.render('pantalla_list', { dataProductos: pantalla });
                }
            ).catch(
                error => console.log(error)
            )
    }
}
module.exports = controller;
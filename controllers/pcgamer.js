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
    }
}
module.exports = controller;
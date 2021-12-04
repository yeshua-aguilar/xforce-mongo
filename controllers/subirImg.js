var client = require("../database/db");
var db = client.db("certus");// SELECCIONANDO LA BASE DE DATOS

var controller = {
    listar: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR TECLADO");
        db.collection("teclado").find().toArray()
            .then(
                subir => {
                    res.render('subirimg_list', { dataSubir: subir });
                }
            ).catch(
                error => console.log(error)
            )
    },
}
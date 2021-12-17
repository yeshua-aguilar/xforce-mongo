var client = require("../database/db");
var db = client.db("certus");// SELECCIONANDO LA BASE DE DATOS

var controller = {
    listar: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR TECLADO");
        db.collection("teclado").find().toArray()
            .then(
                teclado => {
                    res.render('teclado_list', { dataTeclado: teclado });
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
            console.log("ENTRANDO A LA FUNCION nuevo FORM");
            var teclado = {}
            teclado.nombre = "";
            teclado.idproducto = "";           
            teclado.precio = "";
            res.render('teclado_form', { tecladoForm:teclado });
        }


    },

 save: function (req, res){
    console.log("-------------------");
    console.log("ENTRADA A LA FUNCION GUARDAR");
    console.log(req.body);
    if(req.body.nombre){
        var teclado = {}
        teclado.nombre = req.body.nombre;
        teclado.IDPRODUCTO = req.body.IDPRODUCTO;
        teclado.PRECIO = req.body.PRECIO;
        console.log(teclado);
        db.collection("teclado").insertOne(teclado).then(

            ()=>{                  // es para cuando el usario termine de inserta los datos vuelva a la pagina de lista
                res.redirect('/views/teclado/list');
            }
        ).catch(
            error => console.log(error)
        )
    }
}




}
module.exports = controller;
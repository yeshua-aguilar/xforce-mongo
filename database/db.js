const { MongoClient } = require("mongodb");
const client =  new MongoClient("mongodb+srv://grupo3:grupo3@cluster0.ksqs0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

client.connect().then(
    (response) =>{
        console.log('La conexion a la bd es correcta - url:'+ response.url);
    },
    (error) => {
        console.error('error:' + error);
    }

)

module.exports = client;
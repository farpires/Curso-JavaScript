'use strict'
//recargar el modulo de mongo
//creamos un objeto en la variable mongoose(importamos el modulo de mongoose)
var mongoose = require('mongoose'); 
var app = require('./app');//conectar a la ruta de app
var port = 3700; //puerto de mi servidor 

//vamos hacer una promesa
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio',{
            useUnifiedTopology: true,//nuevo analizador de cadena url
            useNewUrlParser: true,//nuevo detección y supervisión del servidor 
        })
        .then(()=>{//se ejecuta si encuentra la ruta
            console.log("Conexion a la base de datos establecida con sactificatoriamente..");
            
            //Creacion del servidor 
            app.listen(port,()=>{
                console.log("servidor corriendo correctamente en la url: localhost:3700");
            });

        })
        .catch(err => console.log(err));  

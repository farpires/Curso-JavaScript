'use strict'
//MOTOR DE LA aplicación a nivel de BACKEND:
//cargaremos el modulo de exprees
//required es una funcion de Node.js
//tenemos un objeto de express  para trabajarlo
//tenemos un objeto de bodyparse
var express = require('express');
var bodyParse = require('body-parser');

var app = express();

//cargar archivos rutas
var project_router = require('./routes/project');
//middlewares "una capa o metodo, qeu se ejecuta antes de ejecutar la accion de un controlador "
//            "ejecuta antes de obtener el resultado de una peticion"
//            "Primero se ejecuta el middlewares y segundo la funcionalidad principal de la ruta a la cual estemos llamndo "
//             "CREAMOS UN middlewares global"
app.use(bodyParse.urlencoded({extended:false})); //configuracion necesaria para body parse 
app.use(bodyParse.json());//CUALQUIER TIPO DE PETICION LO VA A CONVERTIR EN JSON --todo lo que le llege se transforma en objetojson

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');//NOTA: cuando publiques la aplicacion o la pagina web a donde esta (*) colocamos la URL permitida o los origen permitidos
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
app.use('/api',project_router);

//exportar

module.exports = app;


// app.get('/',(req,res)=>{ 
//     res.status(200).send(
//         "<h1>Desde pagina de inicio<h1>"
//     );  
    
// });
// app.post('/test/:id',(req,res)=>{ 
//     console.log(req.body.nombre);//tengo toda la informacion de la peticion
//     console.log(req.body.apellido);
//     console.log(req.query.web);
//     console.log(req.params.id);
// res.status(200).send({
//     message: "Hola mundo desde mi Api de Node.js"
// });  

// })
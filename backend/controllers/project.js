// simpplemente un controlador es una ESPECIE DE CLASE QUE VA ATENER serie DE METODO  O DEACCION, QUE SE RELACIONARA CON LAS ENTIDDES DEL PROYCTO
'use strict'

//importamos modelos
var Project = require('../models/project');
//importar libreria para borra un archivo(imagen)
var fs = require('fs');
var path = require('path');

//obj json
//crear propiedades por cada metodo
var controller = {
    home: function(req, res){//primera logica
        return res.status(200).send({
            message: "Soy la home"
        });
    },
    test: function(req, res){//segunda logica
        return res.status(200).send({
            message: "Soy el metodo o accion test del controlador del project"
        });
    },
    //guarda un documento en la base de dato
    saveProyect: function(req,res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        //como ya tenemos la urm de mongoose es muy sencillo
        project.save((err,projectStored) => {
            if(err) return res.status(500).send({message:'Error al guaradr el cocumento'});
            if(!projectStored) return res.status(404).send({message:'no se ha podido guardar el projecto'});
            return res.status(200).send({project: projectStored})
        });
    },
    //nos devuelve un documento en la base de datos 
    getProyect: function(req, res){
        var projectId = req.params.id;//parametro d ela url que le anadiremos
        if(projectId == null) return res.status(404).send({message: 'El proyecto no existe'});

        Project.findById(projectId,(err,project)=>{//findById es buscar un objeto en la base de dato
            if(err) return res.status(500).send({message:'Error al devolver los datos'});
            if(!project) return res.status(404).send({message:'El proyecto no existe.'});
            return res.status(200).send({ project })
        })

    },

    getProyects: function(req, res){
            //me permite sacamarma todo s los documento que hay dentrp colecciones de datos--se puede aplicar 
            //WHEREE EJEMPLO  Project.find({year:2004}).exec((err,projects)=>{} 
            //Ordenar de Mayor a Menor EJEMPLO Project.find({}).sort('-year').exec((err,projects)=>{}
        Project.find({}).sort('-year').exec((err,projects)=>{

            if(err) return res.status(500).send({message:'Error al devolver los datos'});
            if(!projects) return res.status(404).send({message:'No hay proyectos para mostrar'});
            return res.status(200).send({projects}) 
        }) 
    },

    updateProject: function(req,res){
        //sacar el proyecto a actualizar
        var projectId = req.params.id;
        //recojer los datos del body , todo actualizado para sustitui el ya seleccionado 
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update,{new:true},(err,projectUpdated) => {
            if(err) return res.status(500).send({message:'Error al devolver los datos'});
            if(!projectUpdated) return res.status(404).send({message:'No se Existe el Proyecto para actualizar'});
            return res.status(200).send({
                project: projectUpdated
            })
        })
    },

    deleteProject: function(req,res){
        var projectId = req.params.id;
        Project.findByIdAndRemove(projectId,(err,projectDeleted)=>{
            if(err) return res.status(500).send({message:'No se a podido borrar el projecto'});
            if(!projectDeleted) return res.status(404).send({message:'No se Puede eliminar ese projecto'});
            return res.status(200).send({
                project: projectDeleted
            })
        })
    },
    
    uploadImage: function(req,res){
        //recojer el id del proyecto sobre el cual se va a guardar esta imagen 
        var projectId = req.params.id;
        var fileName = 'Imagen no Subida..';
         /* connect-multiparty es poder recoger fichero por la request es decir utilizar ---->   req.file <---
        **Por Default esto no existe en Node,js. TENEMOS QUE USAR ALGÚN PLUGIN O ALGÚN MÓDULO
        */
       if(req.files){//ahora es sacar diferentes valores, diferentes datos para guardar en la base de datos 
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            //mejoras en la subida de archivos   
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if(fileExt == 'png' || fileExt == 'jpg'||fileExt == 'jpeg'|| fileExt == 'gif'){
                Project.findByIdAndUpdate(projectId,{image: fileName},{new: true},(err,projectUpdated)=>{
                    if(err) return res.status(500).send({message:'la imagen no se ha subido'});
                    if(!projectUpdated) return res.status(404).send({message:'El Proyecto no existe y no se a asignado la imagen '})
                    return res.status(200).send({
                        project: projectUpdated
                    })
    
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message: 'la extension no es valida'});
                });
            }
       }else{
        return res.status(200).send({
                message: fileName
        })
       }

 
    },
    getImageFile: function(req,res){
        var file = req.params.image;
        var path_file = './uploads/'+file;
        fs.exists(path_file,(exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));//el nombre path en este caso es el modulo de nodo.js que lo vamos a tener que inportar por arriba
            }else{
                return res.status(200).send({
                    message: "no existe la imagen..."
                });
            }
        })
    }



};
module.exports = controller;
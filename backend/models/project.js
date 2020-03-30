'use strict'

//hay que importat mongoose quien se encarga de trabajar con los MODELOS
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//este va a ser el molde, el cual estare utilizando para crear nuevos proyecto de la base de dato
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: [String], 
})

module.exports =   mongoose.model('Project',ProjectSchema);
// proyects --> guarad los documentos en la collecion

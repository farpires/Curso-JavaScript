'use strict'
var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router(); 

var multipart = require('connect-multiparty');
//se utiliza la funcion multipart : y se eindica a donde se sube los archivos 
var multipartMiddleware = multipart({ uploadDir: './uploads'})

router.get('/home',ProjectController.home);
router.post('/test',ProjectController.test);
router.post('/save-project',ProjectController.saveProyect);
router.get('/project/:id?',ProjectController.getProyect);
router.get('/projects',ProjectController.getProyects);
router.put('/project/:id',ProjectController.updateProject);
router.delete('/project/:id',ProjectController.deleteProject);
router.post('/upload-image/:id',multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:image',ProjectController.getImageFile);

module.exports = router;


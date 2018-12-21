//
// Image routes
//
'use strict';

const routes = require('express').Router()
const ImageController = require('../controllers/image.controller')

routes.post('/images', ImageController.createImage)
routes.get('/images', ImageController.getImages)
routes.delete('/images/:id', ImageController.deleteImage)

module.exports = routes
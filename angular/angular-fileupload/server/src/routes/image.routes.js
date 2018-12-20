//
// Image routes
//
'use strict';

const routes = require('express').Router()
const ImageController = require('../controllers/image.controller')
const UploadController = require('../controllers/upload.controller')

// routes.post('/images', UploadController.handleFormData, ImageController.createImage)
routes.post('/images', ImageController.createImage)
routes.get('/images', ImageController.getImages)

module.exports = routes
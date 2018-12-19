//
// Image routes
//
'use strict';

let routes = require('express').Router()
let ImageController = require('../controllers/image.controller')

routes.post('/images', ImageController.createImage)
routes.get('/images', ImageController.getImages)

module.exports = routes
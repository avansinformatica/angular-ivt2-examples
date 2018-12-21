//
// Image controller
//
'use strict';

const ApiError = require('../model/ApiError')
const Image = require('../model/image.model')
const logger = require('../config/config').logger

module.exports = {

    createImage(req, res, next) {
        logger.info('createImage')
        // logger.info(req.body)

        // Create an image data object from the incoming request
        const data = {
            info: {
                imagename: req.body.imagename,
                description: req.body.description,
                category: req.body.category
            },
            data: req.body.data
        }

        // Create the image
        Image.create(data)
            .then(image => {
                logger.debug('Image created')
                res.status(200).json({ results: image })
            })
            .catch(err => {
                logger.error('error: ' + err)
                next(new ApiError(err.toString(), 500))
            })
    },

    getImages(req, res, next) {
        logger.info('getImages')

        Image.find()
            .then(images => res.status(200).json({ results: images }))
            .catch(err => next(new ApiError(err.toString(), 500)))
    },

    deleteImage(req, res, next) {
        logger.info('deleteImage ' + req.params.id )

        Image.findOneAndDelete({ _id: req.params.id })
            .then(success => res.status(200).end())
            .catch(err => next(new ApiError(err.toString(), 500)))
    }


}
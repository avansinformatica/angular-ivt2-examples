//
//
//
'use strict';

const ApiError = require('../model/ApiError')
const Image = require('../model/image.model')
const logger = require('../config/config').logger

module.exports = {

    createImage(req, res, next) {
        logger.info('createImage')
        logger.info(req.body)
        Image
            .save()
            .then(image => res.status(200).json({ results: image }))
            .catch(err => res.status(500).json(new ApiError(err.toString(), 500)))
    },

    getImages(req, res, next) {
        logger.info('getImages')
        Image
            .find()
            .then(images => res.status(200).json({ results: images }))
            .catch(err => res.status(500).json(new ApiError(err.toString(), 500)))
    }

}
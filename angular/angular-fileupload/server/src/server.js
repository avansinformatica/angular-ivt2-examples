'use strict';

process.env.NODE_ENV === undefined? process.env.NODE_ENV = 'development' : null

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
const imageRoutes = require('./routes/image.routes')
const authenticationRoutes = require('./routes/authentication.routes')
const ApiError = require('./model/ApiError')
const { webPort, logger } = require('./config/config')
require('./config/mongo.db');

// const port = process.env.PORT || webPort

let app = express()

// https://expressjs.com/en/advanced/best-practice-performance.html
app.use(compression())

// bodyParser parses the body from a request
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: 'true' })); 

// parse application/json
// Set the max file size limit for json uploads. 
// Important when uploading binary files as bse64 strings.
// Info: see https://www.npmjs.com/package/body-parser#limit
app.use(bodyParser.json({ limit: 5 * 1024 * 2014 }));

// Instal Morgan as logger
app.use(morgan('dev'))

// Add CORS headers
// Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers 
// to tell a browser to let a web application running at one origin (domain) have 
// permission to access selected resources from a server at a different domain.
//
logger.info(`Setting process.env.ALLOW_ORIGIN to '${process.env.ALLOW_ORIGIN}'`);
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

// Provide login and registration 
app.use('/api', authenticationRoutes)
// Handle all other API requests
app.use('/api', imageRoutes)

// Catch all non-existing API endpoint requests
app.use('/api/*', function (req, res, next) {
	const error = new ApiError('Non-existing endpoint', 404)
	next(error)
})

// Catch-all error handler according to Express documentation - err should always be an ApiError! 
// See also http://expressjs.com/en/guide/error-handling.html
app.use((err, req, res, next) => {
	logger.error(err.toString())
	res.status(500).json(err)
	// res.status((err.code || 404)).json(err)
})

//
// When this server shuts down, we gracefully clean up all the mess behind us.
// ToDo: release the database connection.
//
function shutdown() {
	logger.info('shutdown started')
	setTimeout(() => process.exit(0), 500);
}
process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)

// Testcases need our app - export it.
module.exports = app
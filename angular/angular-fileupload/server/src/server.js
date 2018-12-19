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
app.use(bodyParser.urlencoded({
	'extended': 'true'
})); 
// parse application/json
app.use(bodyParser.json()); 
// parse application/vnd.api+json as json
app.use(bodyParser.json({
	type: 'application/vnd.api+json'
})); 

// Instal Morgan as logger
app.use(morgan('dev'))

// Add CORS headers
logger.info(`Setting process.env.ALLOW_ORIGIN to '${process.env.ALLOW_ORIGIN}'`);
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

// Serve files from the ./static folder 
app.use(express.static('./static'))

// Provide login and registration 
app.use('/api', authenticationRoutes)
// Handle image api requests
app.use('/api', imageRoutes)

// Postprocessing; catch all non-existing endpoint requests
app.use('/api/*', function (req, res, next) {
	const error = new ApiError('Non-existing endpoint', 404)
	next(error)
})

// Catch-all error handler according to Express documentation - err should always be an ApiError! 
// See also http://expressjs.com/en/guide/error-handling.html
app.use((err, req, res, next) => {
	res.status((err.code || 404)).json(err).end()
})

//
// When this server shuts down, we gracefully clean up all the mess behind us.
// ToDo: release the database pool.
//
function shutdown() {
	logger.info('shutdown started')
	setTimeout(() => process.exit(0), 500);
}
process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)

// Testcases need our app - export it.
module.exports = app
const mongoose = require('mongoose');
const { logger, dbHost, dbPort, dbUser, dbDatabase, dbPassword }  = require('./config');

// Gebruik es6 promises ipv mongoose mpromise
mongoose.Promise = global.Promise;

const dbUrl = process.env.NODE_ENV === 'production' ?
    'mongodb://' + dbUser + ':' + dbPassword + '@' + dbHost + ':' + dbPort + '/' + dbDatabase :
    'mongodb://localhost/' + dbDatabase;

// For more info on connection options, see
// https://mongoosejs.com/docs/connections.html
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false
    // autoReconnect: true,                // Doesn't seem to work...
    // numberOfRetries : Number.MAX_VALUE, // Never stop trying to reconnect
    // reconnectInterval: 2000,
    // poolSize: 10,                       // Maintain up to 10 socket connections
    // // If not connected, return errors immediately rather than waiting for reconnect
    // // bufferMaxEntries: 0,
    // connectTimeoutMS: 30000,            // Give up initial connection after milliseconds
    // socketTimeoutMS: 45000,             // Close sockets after 45 seconds of inactivity
    // family: 4                           // Use IPv4, skip trying IPv6
}

mongoose.connect(dbUrl, options)
const connection = mongoose.connection
    .once('open', function () { logger.trace('MongoDB connection opened') })
    .on('connecting', function () { logger.info(`Connecting to ${dbUrl}`) })
    .on('connected', function () { logger.warn('MongoDB connected!') })
    .on('reconnected', function () { logger.info('MongoDB reconnected') })
    .on('error', function (error) { 
        logger.error(error.toString())
        mongoose.disconnect()
    })
    .on('disconnected', function () { 
        logger.error('MongoDB disconnected!')
        setTimeout(() => {
            mongoose.connect(dbUrl, options )
        }, 5000);
    })

module.exports = connection
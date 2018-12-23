const mongoose = require('mongoose');
const { logger, dbHost, dbPort, dbUser, dbDatabase, dbPassword }  = require('./config');

// Use es6 promises instead of mongoose mpromise
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
}

mongoose.connect(dbUrl, options)
const connection = mongoose.connection
    .once('open', () => { logger.info('MongoDB connection opened') })
    .on('connecting', () => { logger.info(`Connecting to ${dbUrl}`) })
    .on('connected', () => { logger.info('MongoDB connected!') })
    .on('reconnected', () => { logger.info('MongoDB reconnected') })
    .on('error', function (error) { 
        logger.error(error.toString())
        mongoose.disconnect()
    })
    .on('disconnected', () => { 
        logger.error('MongoDB disconnected!')
        setTimeout(() => {
            // Try to reconnect every 5 secs. 
            mongoose.connect(dbUrl, options )
        }, 5000);
    })

module.exports = connection
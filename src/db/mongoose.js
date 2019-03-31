const mongo = require('mongoose');
const logger = require('../util/Logger')

module.exports = {
  init: () => {
    const dbOptions = {
      useNewUrlParser: true,  
      autoIndex: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500,
      poolSize: 5,
      connectTimeoutMS: 10000,
      family: 4
    }
  
    mongo.connect('mongodb+srv://funo_bot:b7IoWUKh4Ybaa0ob@cluster0-wzigu.mongodb.net/funo_bot', dbOptions);
    mongo.set('useFindAndModify', false);
    mongo.Promise = global.Promise;
  
    mongo.connection.on('connected', () => {
      logger.info('Successfully connected to MongoDB.');
    });
  
    mongo.connection.on('err', err => {
      logger.info(`Mongoose connection error: \n ${err.stack}`);
    });
  
    mongo.connection.on('disconnected', () => {
      logger.info('Mongoose connection disconnected');
    });
  }
}
const logger = require('../util/logger');

module.exports = funo => {
  logger.info('Reconnecting to the Discord API...').then(() => logger.info('Successfully reconnected to the Discord API!'));
}

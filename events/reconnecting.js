const logger = require('../util/logger');

module.exports = funo => {
  logger.info(funo, 'Reconnecting to the Discord API...').then(() => logger.success(funo, 'Successfully reconnected to the Discord API!'));
}

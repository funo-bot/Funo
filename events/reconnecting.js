const logger = require('../util/logger');
const chalk = require('chalk');
module.exports = funo => {
  logger.info(funo, 'Reconnecting to the Discord API...').then(() => logger.success(funo, 'Successfully reconnected to the Discord API!'));
}

const logger = require('../util/logger');
module.exports = funo => {
  logger(funo, 'Reconnecting to the Discord API...').then(() => logger(funo, 'Successfully reconnected to the Discord API!'));
}

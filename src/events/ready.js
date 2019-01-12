const logger = require('../util/logger');

module.exports = funo => {
  logger.info(`Logged in with ${funo.guilds.size} servers and ${funo.users.size} users.`);
};

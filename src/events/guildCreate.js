const logger = require('../util/logger');

module.exports = guild => {
  logger.info(`Added to new guild ${guild.name}, with ${guild.members.size} members!`);
}

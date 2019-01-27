const logger = require('../util/Logger');

module.exports = guild => {
  logger.info(`Removed from ${guild.name}, with ${guild.members.size} members!`);
}
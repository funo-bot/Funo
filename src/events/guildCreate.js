const logger = require('../util/Logger');

module.exports = guild => {
  logger.info(`Added to new guild ${guild.name}, with ${guild.members.size} members!`);
}

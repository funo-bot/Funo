const logger = require('../util/Logger');

module.exports = guild => {
  funo = guild.client
  
  funo.settings.delete(guild.id);
  logger.info(`Removed from ${guild.name}, with ${guild.members.size} members!`);
}
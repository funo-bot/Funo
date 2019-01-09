const logger = require('../util/logger');

module.exports = guild => {
    logger.info(`Removed from ${guild.name}, with ${guild.members.size} members!`);
}
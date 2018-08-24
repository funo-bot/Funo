/**
 * To-Do:
 *  Post to bot list API when added to a guild. 
 */
const logger = require('../util/logger');

module.exports = guild => {
    funo = guild.client;
    logger.info(funo, 'Reomved from guild, ' + guild.name + ' with ' + guild.members.size + ' members!');
}
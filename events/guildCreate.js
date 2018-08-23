const logger = require('../util/logger');
const chalk = require('chalk');

module.exports = guild => {
    funo = guild.client;
    logger.info(funo, 'Added to new guild! ' + guild.name + ', with ' + guild.members.size + ' members!');
}

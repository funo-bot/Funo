const logger = require('../util/logger');
const chalk = require('chalk');

module.exports = guild => {
    funo = guild.client;
    logger(funo, chalk.green('Added to ' + guild.name));
}

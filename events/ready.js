const setStatusMessage = require('../functions/setStatusMessage');
const logger = require('../util/logger');
const chalk = require('chalk');

module.exports = funo => {
  setStatusMessage(funo);

  logger(funo, chalk.green("Cached " + funo.guilds.size + " servers into memory."));
};

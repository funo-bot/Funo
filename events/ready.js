const setStatusMessage = require('../functions/setStatusMessage');
const logger = require('../util/logger');
const chalk = require('chalk');

module.exports = funo => {
  setStatusMessage(funo);
  logger.success(funo, "Cached " + funo.guilds.size + " servers into memory.");
};

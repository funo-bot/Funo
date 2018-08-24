const setStatusMessage = require('../functions/setStatusMessage');
const logger = require('../util/logger');

module.exports = funo => {
  setStatusMessage(funo);
  logger.success(funo, "Cached " + funo.guilds.size + " servers into memory.");
};

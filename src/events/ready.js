const setStatusMessage = require('../functions/setStatusMessage');
const logger = require('../util/logger');

module.exports = funo => {
  setStatusMessage(funo);
  logger.info(`Logged in with ${funo.guilds.size} servers and ${funo.users.size} users.`);
};

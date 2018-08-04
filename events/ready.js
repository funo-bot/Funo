const postToBotList = require('../functions/PostToBotList');
const setStatusMessage = require('../functions/setStatusMessage');
const logger = require('../util/logger');


module.exports = funo => {
  setStatusMessage(funo);
  //postToBotList(funo);
  logger(funo, `Logged in as ${funo.user.username}`);
  logger(funo, funo.guilds.size);
  
};

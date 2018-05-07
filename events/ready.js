const postToBotList     = require('../functions/PostToBotList');
const setStatusMessage  = require('../functions/setStatusMessage');
const logger            = require('../util/logger.js');


module.exports = funo => {
    //postToBotList(funo);
    setStatusMessage(funo);
    logger(funo, `Logged in as ${funo.user.username}`);
};

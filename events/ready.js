const postToBotList     = require('../functions/PostToBotList');
const setStatusMessage  = require('../functions/setStatusMessage');

module.exports = funo => {
    //postToBotList(funo);
    //setStatusMessage(funo);
    console.log(`Logged in as ${funo.user.username}`);
};
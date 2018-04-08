const moment = require('moment');
module.exports = async (funo, message) => {
    console.log(`[${moment().format('HH:mm:ss')}] ${message}`);
};

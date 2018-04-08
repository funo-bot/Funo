const moment = require('moment');
module.exports = async (funo, message) => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
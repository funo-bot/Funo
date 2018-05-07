const moment = require('moment');
const chalk = require('chalk');
module.exports = async (funo, message) => {
    console.log(chalk.bgBlue("["+ moment().format('HH:mm:ss') + "]") + chalk.white("", message));
};

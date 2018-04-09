const moment = require('moment');
const chalk = require('chalk');
module.exports = async (funo, message) => {
    console.log(chalk.cyan("["+ moment().format('HH:mm:ss') + "] ") + chalk.white(message));
};

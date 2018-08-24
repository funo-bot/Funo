const moment = require('moment');
const chalk = require('chalk');

var time = chalk.bgBlue('['+ moment().format('HH:mm:ss') + ']');

module.exports.success = async (funo, message) => {
    console.log(time + chalk.green('', message));
}

module.exports.info = async (funo, message) => {
    console.log(time + chalk.yellow('', message));
}

module.exports.loaded = async (funo, message) => {
    console.log(time + chalk.blue('', message));
}

module.exports.error = async (funo, message) => {
    console.log(chalk.red(message));
}
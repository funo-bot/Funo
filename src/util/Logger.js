const chalk = require("chalk");

module.exports.info = async (message) => Console.log(`${chalk.cyan("[INF]")} ${message}`);
module.exports.error = (message) => Console.log(`${chalk.red("[ERR]")} ${message}`);
module.exports.debug = (message) => Console.log(`${chalk.yellow("[DBG]")} ${message}`);
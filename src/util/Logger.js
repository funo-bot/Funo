const chalk = require("chalk");

module.exports.info = (message) => console.log(`${chalk.cyan("[INF]")} ${message}`);
module.exports.error = (message) => console.log(`${chalk.red("[ERR]")} ${message}`);
module.exports.debug = (message) => console.log(`${chalk.yellow("[DBG]")} ${message}`);
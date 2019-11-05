import chalk from 'chalk'

export default class Logger {

  info(...args) {
    console.log(chalk.yellow("[INF]"), ...args)
  }

  error(...args) {
    console.log(chalk.red("[ERR]"), ...args)
  }
}

module.exports.debug = (message) => console.log(`${chalk.yellow("[DBG]")} ${message}`);
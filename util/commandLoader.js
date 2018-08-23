const Discord = require('discord.js');
const logger = require('../util/logger');
const fs = require('fs');
const chalk = require('chalk');
module.exports = funo => {

  funo.commands = new Discord.Collection();

  fs.readdir('./commands/', (e, files) => {
    if (e) logger(funo, e);

    let commands = files.filter(f => f.split('.').pop() === 'js');
    if (commands.length <= 0) {
      logger.info(funo, 'No commands to load!');
      return undefined;
    }
    logger.info(funo, `Loading ${commands.length} commands...`);

    commands.forEach((cmd) => {
      let props = require(`../commands/${cmd}`);
      funo.commands.set(props.help.name, props);
      logger.loaded(funo, `${props.help.command} command loaded!`);
    });

    logger.success(funo, 'All commands loaded!');
  });
}

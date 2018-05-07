const Discord = require('discord.js');
const logger = require('../util/logger');
const fs = require('fs');
module.exports = funo => {

  funo.commands = new Discord.Collection();

  fs.readdir('./commands/', (err, files) => {
    if (err) logger(funo, err);

    let jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if (jsfiles.length <= 0) {
      logger(funo, 'No commands to load!');
      return undefined;
    }
    logger(funo, `Loading ${jsfiles.length} commands...`);

    jsfiles.forEach((f, i) => {
      let props = require(`../commands/${f}`);
      funo.commands.set(props.help.name, props);
      logger(funo, `${f} command loaded!`);
    });

    logger(funo, 'All commands loaded!');
  });
}

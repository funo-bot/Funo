const Discord = require('discord.js');
const fs = require('fs');

module.exports = (funo) => {
  funo.commands = new Discord.Collection();
  funo.aliases = new Discord.Collection();

  fs.readdir(`${__dirname}/../commands`, (e, files) => {
    if (e) {
      funo.logger.error(e);
    }

    const commands = files.filter(f => f.split('.').pop() === 'js');
    if (commands.length <= 0) {
      funo.logger.info('No commands to load!');
      return;
    }

    commands.forEach((cmd) => {
      const props = require(`../commands/${cmd}`);
      if (props.help.disabled) {
        
      } else {
        funo.commands.set(props.help.name.toLowerCase(), props);
        props.help.aliases.forEach(alias => funo.aliases.set(alias, props.help.name.toLowerCase()));
      }
    });
    funo.logger.info('All commands loaded!');
  });
};

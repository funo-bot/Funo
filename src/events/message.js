const config = require("../../config.json");

let funo;

module.exports = (message) => {
  funo = message.client;
  
  if (!message.guild || message.author.bot) {
    return;
  }

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  const guildConf = funo.settings.ensure(message.guild.id, funo.defaultSettings);
  const prefix = guildConf.prefix || config.prefix

  let cmdStr = '';
  if (command === `<@${funo.user.id}>` || command === `<@!${funo.user.id}>`) {
    if (messageArray.length < 2) return

    cmdStr = args.shift().toLowerCase()
  } else if (message.content.indexOf(prefix) === 0) {
    cmdStr = command.slice(prefix.length)
  } else if (message.content === config.prefix + "prefix") {
    cmdStr = 'prefix'
  } else return;

  const cmd = funo.commands.get(cmdStr) || funo.commands.get(funo.aliases.get(cmdStr));

  if (cmd) {
    cmd.run(funo, message, args).catch((err) => {
      funo.guilds.get(config.logServerID).channels.find(c => c.name == config.errorChannelName).send((`**\`AN ERROR HAS OCCURED\`**\n\nGuild: ${message.guild.name}\nCommand ran: ${cmd.name}\n\`\`\`${err.stack}\`\`\``));
    });
  }
};
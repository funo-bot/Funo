const config = require('../../config.json');

module.exports = message => {
  funo = message.client;

  if (!message.guild || message.author.bot) return

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  const guildConf = funo.settings.ensure(message.guild.id, funo.defaultSettings);

  console.log(guildConf)

  if (message.content.indexOf(guildConf.prefix) !== 0) return;

  let cmd = funo.commands.get(command.slice(guildConf.prefix.length));
  if (cmd) cmd.run(funo, message, args);

}

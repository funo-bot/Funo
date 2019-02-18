module.exports.run = async (funo, message) => {

  /* Rewrite this */
  const guildConf = funo.settings.ensure(message.guild.id, funo.defaultSettings);
  const commandList = `**Command List:**\n\n${funo.commands.map((cmd) => `**${cmd.help.name}** - ${cmd.help.description}`).join("\n")}\n\n[Current prefix is \`${guildConf.prefix}\`]\n\`[To execute a command use ${guildConf.prefix}<command>]\`\n\nJoin our official support Discord if you have any issues with the bot!\nhttps://discord.gg/e4QcD8Q`;

  message.channel.send(commandList);
};

module.exports.help = {
  command: "Help",
  name: "help",
  description: "Get a list of commands"
};

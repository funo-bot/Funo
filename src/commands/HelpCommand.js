const config = require('../../config.json')

module.exports.run = (funo, message) => {

  /* Rewrite this */

  const commandNames = Array.from(funo.commands.keys());
  const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  const commandList = `\`\`\`asciidoc\n= Command List =\n\n${funo.commands.map(cmd => `${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} = ${cmd.help.description}`).join('\n')}\n\n= Join our official support Discord! =\nhttps://discord.gg/e4QcD8Q\`\`\``

  message.channel.send(commandList)
}

module.exports.help = {
  command: "Help",
  name: "help",
  description: "Get a list of commands"
}

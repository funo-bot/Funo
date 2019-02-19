const Discord = require("discord.js");
module.exports.run = async (funo, message) => {

  const commandList = new Discord.RichEmbed();
  const commandStr = `${funo.commands.map((cmd) => `**${cmd.help.name}** - ${cmd.help.description}`).join("\n")}`;

  commandList.setColor("#ba7896");
  commandList.setTitle("List of Available commands");
  commandList.setDescription(commandStr);
  commandList.addBlankField();
  commandList.addField("Information", "[Discord](https://discord.gg/e4QcD8Q) | [Github](https://github.com/DelxHQ/Funo)");

  message.channel.send(commandList);
};

module.exports.help = {
  command: "Help",
  name: "help",
  description: "Get a list of commands"
};

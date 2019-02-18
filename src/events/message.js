const config = require("../../config.json");
const Discord = require("discord.js");

let funo;

module.exports = (message) => {
  funo = message.client;

  if (!message.guild || message.author.bot) {
    return;
  }

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  const guildConf = funo.settings.ensure(message.guild.id, funo.defaultSettings);

  if (message.content === config.prefix + "prefix") {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription(`This server"s current prefix is **\`${guildConf.prefix}\`**`)
      .setColor("BLUE")
    );
  }

  if (message.content.indexOf(guildConf.prefix) !== 0) {
    return;
  }

  let cmd = funo.commands.get(command.slice(guildConf.prefix.length));

  if (cmd) {
    cmd.run(funo, message, args).catch((err) => {
      funo.guilds.get(config.logServerID).channels.find("name", config.errorChannelName).send(("**`AN ERROR HAS OCCURED:`**\n```" + err.stack + "```"));
    });
  }
};

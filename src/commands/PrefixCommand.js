const config = require("../../config.json");
const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {

  const guildConf = funo.settings.ensure(message.guild.id, funo.defaultSettings);

  if(!args.length) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription(`This server's current prefix is **\`${guildConf.prefix || config.prefix}\`**`)
      .setColor("BLUE")
    );
  }

  if (!message.member.hasPermission("MANAGE_GUILD")) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You lack the **`MANAGE_GUILD`** permisson.")
      .setColor("RED")
    );
  }

  funo.settings.set(message.guild.id, args[0], "prefix");

  message.channel.send(new Discord.RichEmbed()
    .setDescription(`Server prefix has been set to **\`${guildConf.prefix}\`**`)
    .setColor("BLUE")
  );
};

module.exports.help = {
  command: "Prefix",
  name: "prefix",
  category: "util",
  description: "Change Funo's prefix for the Discord server.",
  aliases: [
    "setprefix"
  ]
};
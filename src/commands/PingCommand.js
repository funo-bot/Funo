const Discord = require("discord.js");

module.exports.run = async (funo, message) => {
  const m = await message.channel.send("🏓 Pong! ");
  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription(`🏓 Pong! ** ${Math.round(m.createdTimestamp - message.createdTimestamp)} **ms.`);

  m.edit({ embed });
};

module.exports.help = {
  command: "Ping",
  name: "ping",
  description: "Pong!"
};  
const Discord = require("discord.js");
const ping = require('ping');

module.exports.run = async (funo, message, args) => {

  if(args.length) {
    ping.promise.probe(args[0], {
      timeout: 10,
    }).then(async res => {
      await message.channel.send(new Discord.RichEmbed()
        .setColor("RED")
        .setDescription(`🏓 Pong! **${res.host}** replied in **${Math.round(res.time * 100) / 100}**ms.`));
    });
  } else {
    const m = await message.channel.send("🏓 Pong! ");
    const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(`🏓 Pong! ** ${Math.round(m.createdTimestamp - message.createdTimestamp)} **ms.`);

    m.edit({ embed });
  }
};

module.exports.help = {
  command: "Ping",
  name: "ping",
  category: "util",
  description: "Pong!",
  aliases: [
    "latency"
  ],
  permissions: []
};
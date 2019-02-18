const { version: discordVersion } = require("discord.js");
const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (funo, message, args) => {

  const duration = moment.duration(funo.uptime).format(" D[d], H[h], m[m], s[s]");
  message.channel.send(new Discord.RichEmbed()
    .setThumbnail("https://i.imgur.com/RYj85PW.png")
    .setColor("GREEN")
    .addField("Username:", `${funo.user.username}#${funo.user.discriminator}`, true)
    .addField("Uptime:", duration, true)
    .addField("Users:", funo.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("Servers:", funo.guilds.size.toLocaleString(), true)
    .addField("Channels:", funo.channels.size.toLocaleString(), true)
    .addField("Discord.js version:", discordVersion, true)
    .addField("Memory usage:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField("Offical Discord server:", "**[Funo Discord server](https://discord.gg/e4QcD8Q)**", true)
  );
};

module.exports.help = {
  command: "Info",
  name: "info",
  description: "Get information about Funo."
};
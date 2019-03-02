const moment = require("moment");
require("moment-duration-format");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const duration = moment.duration(bot.uptime).format(" D[d], H[h], m[m], s[s]");
  message.channel.send(new Discord.RichEmbed()
    .setColor("BLUE")
    .setDescription(duration + " since last restart")
  );
};

module.exports.help = {
  command: "Uptime",
  name: "uptime",
  category: "util",
  description: "Get how long Funo has been online for."
};
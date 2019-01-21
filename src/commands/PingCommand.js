const Discord = require('discord.js');

module.exports.run = async (funo, message) => {
  var m = await message.channel.send("🏓 Pong! ");
  var embed = new Discord.RichEmbed()
    .setColor('RED')
    .setDescription('🏓 Pong! **' + parseInt(Math.round(m.createdTimestamp - message.createdTimestamp)) + '**ms.');

  m.edit({ embed });
}

module.exports.help = {
  command: "Ping",
  name: "ping",
  description: "Pong!"
}
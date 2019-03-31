/*
Created by: Suremeo
Date: 3/2/2019, 5:12 PM
*/

const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  if (!funo.musicTasks[message.guild.id]) return message.channel.send(new Discord.RichEmbed()
    .setDescription(`Nothing is playing right now!`)
    .setColor("#36393F")
    .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" || "https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
    .setImage("https://i.imgur.com/BwPBeG9.gif"))

  var task = funo.musicTasks[message.guild.id]
  task.Stop();
  message.channel.send(new Discord.RichEmbed()
    .setDescription("**Successfully cleared the queue and stopped the current song**")
    .setColor("#36393F")
    .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" || "https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
    .setImage("https://i.imgur.com/BwPBeG9.gif"))
}

module.exports.help = {
  command: "Stop",
  name: "stop",
  category: "music",
  description: "Stops the current song and clears the queue",
  aliases: [
    "no"
  ],
  permissions: []
};

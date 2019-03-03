/*
Created by: Suremeo
Date: 3/2/2019, 5:14 PM
*/

const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
    if (!funo.musicTasks[message.guild.id]) return message.channel.send(new Discord.RichEmbed()
        .setDescription(`Nothing is playing right now!`)
        .setColor("#36393F")
        .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" ||"https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
        .setImage("https://i.imgur.com/BwPBeG9.gif"))

    var task = funo.musicTasks[message.guild.id]
    task.Skip();
    message.channel.send(new Discord.RichEmbed()
        .setDescription("**Successfully skipped the song**")
        .setColor("#36393F")
        .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" ||"https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
        .setImage("https://i.imgur.com/BwPBeG9.gif")
    )
}

module.exports.help = {
    command: "Skip",
    name: "skip",
    category: "music",
    description: "Skips the current song",
    aliases: [
        "skip"
    ]
};
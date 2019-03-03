/*
Created by: Suremeo
Date: 3/2/2019, 2:22 PM
*/

const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
    if (!funo.musicTasks[message.guild.id]) return message.channel.send(new Discord.RichEmbed()
        .setDescription(`Nothing is playing right now!`)
        .setColor("#36393F")
        .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" ||"https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
        .setImage("https://i.imgur.com/BwPBeG9.gif"))

    var task = funo.musicTasks[message.guild.id]
    var np = await task.nowPlaying
    if (typeof np != "object") return message.channel.send(new Discord.RichEmbed()
        .setDescription(`Nothing is playing right now!`)
        .setColor("#36393F")
        .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" ||"https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
        .setImage("https://i.imgur.com/BwPBeG9.gif"))

    message.channel.send(new Discord.RichEmbed()
        .setDescription(`**[${np.data.title.replace(/\[/g, '').replace(/\]/g, '').substr(0, 46)}...](${np.url})**\n<:t:550084023775395840><:t:550084023775395840><:t:550084023775395840><:t:550084023775395840><:t:550084023775395840>\`${np.song_thru}/${np.song_length}\`\n\n${np.data.description.substr(0,400)}...`)
        .setColor("#36393F")
        .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" ||"https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
        .setImage("https://i.imgur.com/BwPBeG9.gif")
    )
}

module.exports.help = {
    command: "Nowplaying",
    name: "nowplaying",
    category: "music",
    description: "Shows which song is currently playing",
    aliases: [
        "np"
    ]
};
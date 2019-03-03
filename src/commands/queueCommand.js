/*
Created by: Suremeo
Date: 3/2/2019, 12:11 PM
*/

/*
Created by: Suremeo
Date: 3/1/2019, 10:27 PM
*/

const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
    if (!funo.musicTasks[message.guild.id]) return message.channel.send(new Discord.RichEmbed()
        .setDescription(`Nothing is playing right now!`)
        .setColor("#36393F")
        .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" || "https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
        .setImage("https://i.imgur.com/BwPBeG9.gif"))

    var task = funo.musicTasks[message.guild.id]

    message.channel.send(new Discord.RichEmbed()
        .setDescription(`${task.queue.slice(0, 15).map(q => `**#${Number(task.queue.indexOf(q)) + 1}: [${q.data.title.replace(/\[/g, '').replace(/\]/g, '').substr(0, 30)}...](${q.url})** \`${q.time}\``).join("\n")}`)
        .setColor("#36393F")
        .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" || "https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
        .setImage("https://i.imgur.com/BwPBeG9.gif"))
};

module.exports.help = {
    command: "Queue",
    name: "queue",
    category: "music",
    description: "Check the music queue",
    aliases: [
        "queue", "q"
    ]
};
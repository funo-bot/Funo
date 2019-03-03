/*
Created by: Suremeo
Date: 3/1/2019, 10:27 PM
*/

const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
    if (!message.member.voiceChannel) return message.channel.send(new Discord.RichEmbed().setDescription("**You are not in a voice channel**"))
    if (!funo.musicTasks[message.guild.id]) funo.musicTasks[message.guild.id] = new funo.musicTask(message.guild, message.member.voiceChannel)

    var task = funo.musicTasks[message.guild.id]

    if (args[0].includes("youtube.com/") || args[0].includes("youtu.be/")) {
        task.addSong(args[0], message.channel ,async(msg)=> {
            message.channel.send(
                new Discord.RichEmbed()
                    .setDescription(msg)
                    .setColor("#36393F")
                    .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" ||"https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
                    .setImage("https://i.imgur.com/BwPBeG9.gif")
            )
        })
    } else {
        var search = require('youtube-search');

        var opts = {
            maxResults: 5,
            key: funo.config.YOUTUBE_KEY
        };
        search(args.join(" "), opts, async (err, results) => {
            if(err) return console.log(err);

            message.channel.send(new Discord.RichEmbed()
                .setDescription("Loading options...")
                .setColor("#36393F")
                .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" ||"https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
                .setImage("https://i.imgur.com/BwPBeG9.gif")
            ).then(async m=>{
                if (results[0]) await m.react(funo.emojis.get("551607641533841429"))
                if (results[1]) await m.react(funo.emojis.get("551607641311281157"))
                if (results[2]) await m.react(funo.emojis.get("551607641588367363"))
                if (results[3]) await m.react(funo.emojis.get("551607641655476234"))
                if (results[4]) await m.react(funo.emojis.get("551607269595283468"))
                const filter = (reaction, user) => !user.bot && user.id == message.author.id
                var collector = await m.createReactionCollector(filter,{time:15000})
                collector.on('collect', async r => {
                    try {
                        switch(r.emoji.name) {
                            case "_one":
                                collector.stop()
                                playUrl(results[0])
                                break;
                            case "_two":
                                collector.stop()
                                playUrl(results[1])
                                break;
                            case "_three":
                                collector.stop()
                                playUrl(results[2])
                                break;
                            case "_four":
                                collector.stop()
                                playUrl(results[3])
                                break;
                            case "_five":
                                collector.stop()
                                playUrl(results[4])
                                break;
                            default:
                                break;
                        }

                        async function playUrl (url) {
                            task.addSong(url.link, message.channel ,async(msg)=> {
                                m.edit(
                                    new Discord.RichEmbed()
                                        .setDescription(msg)
                                        .setColor("#36393F")
                                        .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" ||"https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
                                        .setImage("https://i.imgur.com/BwPBeG9.gif")
                                )
                            })
                        }
                    } catch(err) {
                        collector.stop()
                    }
                })
                collector.on('end', async collected => {
                    await m.clearReactions()
                    if(collected.size == 0) {
                        await m.edit(new Discord.RichEmbed()
                            .setDescription("Request timed out since you didn't react in 15 seconds")
                            .setColor("#36393F")
                            .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" ||"https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
                            .setImage("https://i.imgur.com/BwPBeG9.gif")
                        )
                    }
                })
                await m.edit(new Discord.RichEmbed()
                    .setDescription("**__React with what song you wish to play__**\n\n" + results.map(r=> `**#${Number(results.indexOf(r)) + 1} [${r.title.replace(/\\[/g, '').replace(/\\]/g, '').substr(0, 43)}...](${r.link})**`).join("\n"))
                    .setColor("#36393F")
                    .setThumbnail("https://rhythmcadence.carrd.co/assets/images/image01.gif" ||"https://hotemoji.com/images/dl/i/musical-note-emoji-by-twitter.png")
                    .setImage("https://i.imgur.com/BwPBeG9.gif")
                )
            })
        });
    }
};

module.exports.help = {
    command: "Play",
    name: "play",
    category: "music",
    description: "Play a song",
    aliases: [
        "p"
    ]
};
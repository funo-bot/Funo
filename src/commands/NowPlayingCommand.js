const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  const queue = funo.guildQueues.get(message.guild.id);

  message.channel.send(new Discord.RichEmbed()
    .setColor('BLUE')
    .setDescription('Currently playing: ' + queue[0].info.title)
  );
}

module.exports.help = {
  command: "Nowplaying",
  name: "nowplaying",
  category: "music",
  description: "Shows which song is currently playing",
  aliases: [
    "np"
  ],
  permissions: []
};
const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  const guildId = message.guild.id;

  if(!funo.guildQueues.has(guildId)) {
    return message.channel.send(new Discord.RichEmbed().setDescription("**There are no songs in the queue**"))
  }

  const queue = funo.guildQueues.get(guildId);
  const embed = new Discord.RichEmbed().setTitle('Song Queue')
  
  for(const song of queue) {
    embed.addField(song.info.title, `by ${song.info.author}`)
  }

  return message.channel.send(embed)
};

module.exports.help = {
  command: "Queue",
  name: "queue",
  category: "music",
  description: "Check the music queue",
  aliases: [
    "queue", "q"
  ],
  permissions: []
};
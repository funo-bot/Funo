module.exports.run = async (funo, message, args) => {
  return funo.guildPlayers.get(message.guild.id).stop()
}

module.exports.help = {
  command: "Skip",
  name: "skip",
  category: "music",
  description: "Skips the current song",
  aliases: []
};
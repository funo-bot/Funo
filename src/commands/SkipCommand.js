module.exports.run = async (funo, message, args) => {
  return funo.player.stop(message.guild.id)
}

module.exports.help = {
  command: "Skip",
  name: "skip",
  category: "music",
  description: "Skips the current song",
  aliases: []
};
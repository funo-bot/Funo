module.exports.run = async (funo, message, args) => {
  return console.log(funo.lavalinkNode.stats)
}

module.exports.help = {
  command: "Stats",
  name: "stats",
  category: "music",
  description: "Get the current stats for Lavalink",
  aliases: []
};
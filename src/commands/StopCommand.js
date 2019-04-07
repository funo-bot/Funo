module.exports.run = async (funo, message, args) => {
  funo.guildQueues.clear(message.guild.id)
  funo.manager.leave(message.guild.id)
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

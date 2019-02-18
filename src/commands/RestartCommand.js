const Discord = require("discord.js")
const config = require("../../config.json")
const logger = require("../util/Logger")

module.exports.run = async (funo, message) => {

  if (message.author.id !== config.ownerid) return

  logger.info("Shutting down...")
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setDescription("Restarting...")
    .setTimestamp();

  await message.channel.send({ embed });

  process.exit(0);
};

module.exports.help = {
  command: "Restart",
  name: "restart",
  description: "Restart Funo."
};
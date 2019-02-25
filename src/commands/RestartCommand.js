const Discord = require("discord.js");
const config = require("../../config.json");
const logger = require("../util/Logger");

module.exports.run = async (funo, message) => {

  if (!config.ownerid.includes(message.author.id)) {
    return;
  }
  
  logger.info("Shutting down...");
  
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
    category: "util",
    private: true,
  description: "Restart Funo."
};
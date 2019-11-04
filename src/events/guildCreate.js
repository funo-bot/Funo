const Discord = require("discord.js");
const logger = require("../util/Logger");

let funo;

module.exports = (guild) => {
  funo = guild.client;
  
  logger.info(`Added to new guild ${guild.name}, with ${guild.members.size} members!`);

  funo.settings.set(guild.id, funo.prefix, "prefix");
};

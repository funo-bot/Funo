const Discord = require("discord.js");
const config = require("../../config.json");
const logger = require("../util/Logger");

let funo;

module.exports = (guild) => {
  funo = guild.client;

  funo.settings.delete(guild.id);
  logger.info(`Removed from ${guild.name}, with ${guild.members.size} members!`);

  funo.guilds.get(config.logServerID).channels.find("name", config.logChannelName).send(new Discord.RichEmbed()
    .setThumbnail(guild.iconURL)
    .setTitle("Removed from a guild")
    .setColor("RED")
    .addField("Name:", guild.name, true)
    .addField("ID:", guild.id, true)
    .addField("Owned by:", `${guild.owner.user.username}#${guild.owner.user.discriminator}`, true)
    .addField("Owner's ID", guild.owner.user.id, true)
    .addField("Members:", guild.members.size, true)
    .addField("Channels:", guild.channels.size, true)
    .addField("Roles:", guild.roles.size, true)
  );
};
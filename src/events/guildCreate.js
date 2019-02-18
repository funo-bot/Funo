const Discord = require("discord.js")
const config = require("../../config.json")
const logger = require("../util/Logger");

module.exports = guild => {
  logger.info(`Added to new guild ${guild.name}, with ${guild.members.size} members!`);

  funo.guilds.get(config.logServerID).channels.find("name", config.logChannelName).send(new Discord.RichEmbed()
    .setThumbnail(guild.iconURL)
    .setTitle("Added to new guild")
    .setColor("BLUE")
    .addField("Name:", guild.name, true)
    .addField("ID:", guild.id, true)
    .addField("Owned by:", `${guild.owner.user.username}#${guild.owner.user.discriminator}`, true)
    .addField("Owner's ID", guild.owner.user.id, true)
    .addField("Members:", guild.members.size, true)
    .addField("Channels:", guild.channels.size, true)
    .addField("Roles:", guild.roles.size, true)
  )
}

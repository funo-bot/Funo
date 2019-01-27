const Discord = require('discord.js')
const logger = require('../util/Logger')

module.exports = funo => {
  logger.info(`Logged in with ${funo.guilds.size} servers and ${funo.users.size} users.`)

  funo.guilds.get("485580148306083840").channels.find("name", "bot-logs").send(new Discord.RichEmbed()
    .setColor('GREEN')
    .setDescription(`Logged in with ${funo.guilds.size} servers and ${funo.users.size} users.`)
    .setTimestamp()
  )

};

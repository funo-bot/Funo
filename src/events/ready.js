const Discord = require('discord.js')
const logger = require('../util/Logger')
const config = require('../../config.json')

module.exports = funo => {
  logger.info(`Logged in with ${funo.guilds.size} servers and ${funo.users.size} users.`)

  funo.user.setPresence({ game: { name: config.prefix + 'help for commands', type: 0 } })

  funo.guilds.get(config.logServerID).channels.find("name", config.logChannelName).send(new Discord.RichEmbed()
    .setColor('GREEN')
    .setDescription(`Logged in with ${funo.guilds.size} servers and ${funo.users.size} users.`)
    .setTimestamp()
  )
}
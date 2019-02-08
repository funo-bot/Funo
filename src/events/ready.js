const Discord = require('discord.js')
const logger = require('../util/Logger')
const { prefix } = require('../../config.json')

module.exports = funo => {
  logger.info(`Logged in with ${funo.guilds.size} servers and ${funo.users.size} users.`)

  funo.user.setPresence({ game: { name: prefix + 'help for commands', type: 0 } })

  funo.guilds.get(config.logServerID).channels.find("name", logChannelName).send(new Discord.RichEmbed()
    .setColor('GREEN')
    .setDescription(`Logged in with ${funo.guilds.size} servers and ${funo.users.size} users.`)
    .setTimestamp()
  )
}
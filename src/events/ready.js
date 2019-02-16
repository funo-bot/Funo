const Discord = require('discord.js')
const logger = require('../util/Logger')
const config = require('../../config.json')
const DBL = require('dblapi.js')

module.exports = funo => {

  logger.info(`Logged in with ${funo.guilds.size} servers and ${funo.users.size} users.`)

  funo.user.setPresence({ game: { name: config.prefix + 'help for commands', type: 0 } })

  funo.guilds.get(config.logServerID).channels.find("name", config.logChannelName).send(new Discord.RichEmbed()
    .setColor('GREEN')
    .setDescription(`Logged in with ${funo.guilds.size} servers and ${funo.users.size} users.`)
    .setTimestamp()
  )

  const dbl = new DBL(config.DBLAPI_KEY, funo);

  setInterval(() => {
    dbl.postStats(funo.guilds.size)
  }, 300000)
}
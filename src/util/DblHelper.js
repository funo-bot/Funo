const DBL = require('dblapi.js');
const Discord = require('discord.js')
const config = require('../../config.json')
const logger = require('./Logger')

module.exports = async funo => {
  const dbl = new DBL(config.DBLAPI_KEY, { webhookPort: 5000, webhookAuth: config.webHookAuth });
 
  dbl.webhook.on('vote', async vote => {
    funo.guilds.get(config.logServerID).channels.find("name", config.logChannelName).send(new Discord.RichEmbed()
      .setDescription(`User ${await getUsername(vote)} just voted!`)
      .setColor('BLUE')
      .setTimestamp()
    )
  })

  async function getUsername(vote) {
    return new Promise(async resolve => resolve((await dbl.getUser(vote.user)).username))
  }
}
const DBL = require('dblapi.js');
const Discord = require('discord.js')
const config = require('../../config.json')
const logger = require('./Logger')

module.exports = async funo => {
  const dbl = new DBL(config.DBLAPI_token, { webhookPort: 5000, webhookAuth: config.webHookAuth });

  dbl.webhook.on('ready', hook => logger.info(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`))
 
 
  dbl.webhook.on('vote', vote => {
    funo.guilds.get(config.logServerID).channels.find("name", config.logChannelName).send(new Discord.RichEmbed()
      .setDescription(`User ${await getUsername(vote)} just voted!`)
      .setColor('BLUE')
    )
  })
}

async function getUsername(vote) {
  return new Promise(resolve => resolve((await dbl.getUser(vote.user)).username))
}
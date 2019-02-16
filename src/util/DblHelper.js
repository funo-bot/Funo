const DBL = require('dblapi.js');
const Discord = require('discord.js')
const config = require('../../config.json')

module.exports = async funo => {
  const dbl = new DBL(config.DBLAPI_KEY, { webhookPort: 5000, webhookAuth: config.webHookAuth });
 
  dbl.webhook.on('vote', async vote => {
    funo.guilds.get(config.logServerID).channels.find("name", config.logChannelName).send(new Discord.RichEmbed()
      .setThumbnail(await getVoteUser(vote).avatar)
      .setDescription(`User ${await getVoteUser(vote).username}#${await getVoteUser(vote).descriminator} just voted!`)
      .setColor('BLUE')
      .setTimestamp()
    )

    console.log()
  })

  async function getVoteUser(vote) {
    return new Promise(async resolve => resolve(await dbl.getUser(vote.user)))
}
}
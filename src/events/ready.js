const Discord = require("discord.js");
const logger = require("../util/Logger");
const config = require("../../config.json");
const DBL = require("dblapi.js");
const fetch = require("node-fetch")
module.exports = (funo) => {

  logger.info(`Logged in with ${funo.guilds.size} servers and ${funo.users.size} users.`);

  funo.user.setPresence({ game: { name: config.prefix + "help for commands", type: 0 } });

  funo.guilds.get(config.logServerID).channels.find(c=> c.name == config.logChannelName).send(new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(`Logged in with ${funo.guilds.size} servers and ${funo.users.size} users.`)
    .setTimestamp()
  );

  const dbl = new DBL(config.DBLAPI_KEY, funo);

  setInterval(() => {
    dbl.postStats(funo.guilds.size);
    fetch(`https://botsfordiscord.com/api/bot/${funo.user.id}`, {
      headers: {
        'Authorization': config.BOTS_ON_DISCORD_TOKEN,
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({server_count: funo.guilds.size})
    })
  }, 300000);
};
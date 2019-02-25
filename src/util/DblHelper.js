const DBL = require("dblapi.js");
const Discord = require("discord.js");
const config = require("../../config.json");
const logger = require("./Logger");

module.exports = (funo) => {
  const dbl = new DBL(config.DBLAPI_KEY, { webhookPort: 5000, webhookAuth: config.webHookAuth });

  async function getUsername(vote) {
    return new Promise(async (resolve) => resolve((await dbl.getUser(vote.user)).username));
  }
 
  dbl.webhook.on("vote", async (vote) => {
    funo.guilds.get(config.logServerID).channels.find("name", config.logChannelName).send(new Discord.RichEmbed()
      .setDescription(`${await getUsername(vote)} just voted on DBL`)
      .setColor("BLUE")
      .setTimestamp()
    );
  });
};
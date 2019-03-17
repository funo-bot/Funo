const config = require("../../config.json");

module.exports = (funo) => {
  funo.guilds.get(config.logServerID).channels.find(c => c.name == config.errorChannelName).send("`An unknown error has occured.`");
};

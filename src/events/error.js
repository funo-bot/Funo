const config = require('../../config.json');

module.exports = async (funo, error) => {
  funo.guilds.get(config.logServerID).channels.find("name", config.errorChannelName).send(("**`AN ERROR HAS OCCURED:`**\n```" + JSON.stringify(error) + "```"));
};
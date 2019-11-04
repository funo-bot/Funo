const logger = require("../util/Logger");

module.exports = (funo) => {
  logger.info(`Logged in with ${funo.guilds.size} servers and ${funo.users.size} users.`);

  funo.user.setPresence({ game: { name: funo.prefix + "help for commands", type: 0 } });
};
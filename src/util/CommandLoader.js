const Discord = require("discord.js");
const fs = require("fs");
const logger = require("./Logger");

module.exports = funo => {
  funo.commands = new Discord.Collection();

  fs.readdir(`${__dirname}/../commands`, (e, files) => {
    if (e) logger.error(e);

    let commands = files.filter(f => f.split(".").pop() === "js");
    if (commands.length <= 0) {
      logger.info("No commands to load!");
      return;
    };

    commands.forEach((cmd) => {
      var props = require(`../commands/${cmd}`);
      funo.commands.set(props.help.name, props);
    });

    logger.info("All commands loaded!");
  });
};
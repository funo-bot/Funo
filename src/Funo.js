const Discord = require("discord.js");
const Enmap = require("enmap");
const config = require("../config.json");
const logger = require("./util/Logger");

const funo = new Discord.Client({ disableEveryone: true });
const start = Date.now();

funo.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: "deep"
});

funo.defaultSettings = {
  prefix: config.prefix,
  logChannel: "mod-logs"
};

require("./util/EventLoader")(funo);
require("./util/CommandLoader")(funo);
require("./util/DblHelper")(funo);
var imagemanipulation = require("./util/ImageManipulation")
funo.imageManipulator = new imagemanipulation(funo)

funo.login(config.token).then(() => {
  const finish = Date.now() - start;
  logger.info(`Done! (${Math.floor(finish / 10)}ms)`);
});
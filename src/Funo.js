const Discord = require("discord.js");
const Enmap = require("enmap");
const config = require(process.env.CONFIG_LOCATION || "../config.json");
const logger = require("./util/Logger");
const ImageHandler = require("./ImageHandler/ImageHandler")

const funo = new Discord.Client({ disableEveryone: true });
const start = Date.now();

funo.ImageHandler = new ImageHandler(funo)

funo.musicTask = require("./util/musicHandler")
funo.musicTasks = {}

funo.config = config

funo.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: "deep"
});

funo.stats = new Enmap({
    name: "settings",
    fetchAll: false,
    autoFetch: true,
    cloneLevel: "deep"
});

funo.defaultSettings = {
  prefix: ".",
  logChannel: "mod-logs"
};

require("./util/EventLoader")(funo);
require("./util/CommandLoader")(funo);
require("./util/DblHelper")(funo);

funo.login(config.token).then(() => {
  const finish = Date.now() - start;
  logger.info(`Done! (${Math.floor(finish / 10)}ms)`);
});

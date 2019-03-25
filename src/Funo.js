const Discord = require("discord.js");
const Enmap = require("enmap");
const config = require(process.env.CONFIG_LOCATION || "../config.json");
const logger = require("./util/Logger");
const loader = require("./util/CommandLoader");
const lavalink = require("discord.js-lavalink");

const funo = new Discord.Client({ disableEveryone: true });
const start = Date.now();

(async () => {
  require("./util/EventLoader")(funo);
  loader.load(funo);
  loader.initCmds(funo);

  await funo.login(config.token).then(() => {
    const finish = Date.now() - start;
    logger.info(`Done! (${Math.floor(finish / 10)}ms)`);
  });

  funo.config = config

  funo.manager = new lavalink.PlayerManager(funo, config.nodes, {
    user: funo.user.id,
    shards: 0
  });

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

  require("./util/LavaLink")(funo);
})()

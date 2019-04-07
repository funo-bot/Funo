const Discord = require("discord.js");
const Enmap = require("enmap");
<<<<<<< HEAD
=======
const config = require(process.env.CONFIG_LOCATION || "../config.json");
const logger = require("./util/Logger");
const loader = require("./util/CommandLoader");
const lavalink = require("discord.js-lavalink");
>>>>>>> music-rewrite

const funo = new Discord.Client({
  disableEveryone: true,
  disabledEvents: [
    "RESUMED",
    "GUILD_SYNC",
    "GUILD_UPDATE",
    "GUILD_MEMBER_ADD",
    "GUILD_MEMBER_REMOVE",
    "GUILD_MEMBER_UPDATE",
    "GUILD_MEMBERS_CHUNK",
    "GUILD_ROLE_CREATE",
    "GUILD_ROLE_DELETE",
    "GUILD_ROLE_UPDATE",
    "GUILD_BAN_ADD",
    "GUILD_BAN_REMOVE",
    "CHANNEL_CREATE",
    "CHANNEL_DELETE",
    "CHANNEL_UPDATE",
    "CHANNEL_PINS_UPDATE",
    "MESSAGE_DELETE",
    "MESSAGE_UPDATE",
    "MESSAGE_DELETE_BULK",
    "MESSAGE_REACTION_ADD",
    "MESSAGE_REACTION_REMOVE",
    "MESSAGE_REACTION_REMOVE_ALL",
    "USER_UPDATE",
    "USER_NOTE_UPDATE",
    "USER_SETTINGS_UPDATE",
    "PRESENCE_UPDATE",
    "VOICE_STATE_UPDATE",
    "TYPING_START",
    "VOICE_SERVER_UPDATE",
    "RELATIONSHIP_REMOVE"
  ]
});
const start = Date.now();

(async () => {
  require("./util/EventLoader")(funo);
  loader.load(funo);

<<<<<<< HEAD
funo.config = require(process.env.CONFIG_LOCATION || "../config.json");
funo.logger = require("./util/Logger");

require("./util/EventLoader")(funo);
require("./util/CommandLoader")(funo);
require("./util/DblHelper")(funo);
=======
  await funo.login(config.token).then(() => {
    const finish = Date.now() - start;
    logger.info(`Done! (${Math.floor(finish / 10)}ms)`);
>>>>>>> music-rewrite

    loader.initCmds(funo);
  });

<<<<<<< HEAD
funo.stats = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: "deep"
});
=======
  funo.config = config

  funo.manager = new lavalink.PlayerManager(funo, config.nodes, {
    user: funo.user.id,
    shards: 0
  });

  funo.guildPlayers = new Map();
  funo.guildQueues = new Map();

  funo.settings = new Enmap({
    name: "settings",
    fetchAll: false,
    autoFetch: true,
    cloneLevel: "deep"
  });
>>>>>>> music-rewrite

  funo.stats = new Enmap({
    name: "settings",
    fetchAll: false,
    autoFetch: true,
    cloneLevel: "deep"
  });

<<<<<<< HEAD
funo.login(funo.config.token).then(() => {
  const finish = Date.now() - start;
  funo.logger.info(`Done! (${Math.floor(finish / 10)}ms)`);
});
=======
  funo.defaultSettings = {
    prefix: ".",
    logChannel: "mod-logs"
  };

  require("./util/LavaLink")(funo);
})()
>>>>>>> music-rewrite

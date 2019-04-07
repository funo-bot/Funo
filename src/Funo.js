const Discord = require("discord.js");
const Enmap = require("enmap");

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

funo.musicTask = require("./util/musicHandler")
funo.musicTasks = {}

funo.config = require(process.env.CONFIG_LOCATION || "../config.json");
funo.logger = require("./util/Logger");

require("./util/EventLoader")(funo);
require("./util/CommandLoader")(funo);
require("./util/DblHelper")(funo);

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

funo.login(funo.config.token).then(() => {
  const finish = Date.now() - start;
  funo.logger.info(`Done! (${Math.floor(finish / 10)}ms)`);
});

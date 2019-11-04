const Discord = require("discord.js");
const Enmap = require("enmap");
const loader = require("./util/CommandLoader");

const funo = new Discord.Client({disableEveryone: true});

funo.prefix = '!'


;(async () => {
  const start = Date.now();

  funo.logger = require("./util/Logger");

  require("./util/EventLoader")(funo);
  loader.load(funo);

  await funo.login(process.env.TOKEN).then(() => {
    const finish = Date.now() - start;
    funo.logger.info(`Done! (${Math.floor(finish / 10)}ms)`);

    loader.initCmds(funo);
  });

  funo.settings = new Enmap({
    name: "settings",
    fetchAll: false,
    autoFetch: true,
    cloneLevel: "deep"
  });

  funo.defaultSettings = {
    prefix: ".",
    logChannel: "mod-logs"
  };
})()

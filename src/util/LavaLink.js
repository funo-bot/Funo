const lavalink = require("discord.js-lavalink");
const logger = require("./Logger");

module.exports = (funo) => {

   funo.lavalinkNode = new lavalink.Node(funo.manager, {
    address: `http://80.241.223.109:2333`,
    host: '80.241.223.109',
    port: 2333,
    reconnectInterval: 1000
  })

  funo.lavalinkNode.on('ready', () => {
    logger.info("Successfully connected to Lavalink server on " + funo.lavalinkNode.address)
  })

  funo.lavalinkNode.on('error', () => console.error)
}



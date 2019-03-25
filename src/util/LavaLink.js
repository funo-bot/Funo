const lavalink = require("discord.js-lavalink");
const logger = require("./Logger");

module.exports = (funo) => {

  const lavalinkNode = new lavalink.Node(funo.manager, {
    address: `http://localhost:2333`,
    host: 'localhost',
    password: 'test123',
    port: 2333,
    reconnectInterval: 1000
  })

  lavalinkNode.on('ready', () => {
    logger.info("Successfully connected to Lavalink server on " + lavalinkNode.address)
  })
}
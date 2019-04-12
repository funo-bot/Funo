const lavalink = require("discord.js-lavalink");
const logger = require("./Logger");
const config = require('../../config.json')

module.exports = (funo) => {

  funo.lavalinkNode = new lavalink.Node(funo.manager, {
    address: `http://${config.nodes[0].host}:${config.nodes[0].port}`,
    host: config.nodes[0].host,
    port: config.nodes[0].port,
    password: config.nodes[0].password,
    reconnectInterval: 120000
  })

  funo.lavalinkNode.on('ready', () => {
    logger.info("Successfully connected to Lavalink server on " + funo.lavalinkNode.address)
  })

  funo.lavalinkNode.on('error', () => console.error)
}
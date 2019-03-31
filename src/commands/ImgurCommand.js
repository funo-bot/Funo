const config = require("../../config.json")
const Discord = require("discord.js")
const fetch = require("node-fetch")
const URL = require('url').URL

module.exports.run = async (funo, message, args) => {
  const imgurOptions = { 'Authorization': config.IMGUR_CLIENT_ID }

  await fetch(new URL('https://api.imgur.com/3/gallery/search/top/0/?q=' + args.join(" ")), {
    headers: {
      'Authorization': `Client-ID ${imgurOptions.Authorization}`
    }
  })
    .then(res => res.json())
    .then(json => {
      if (json['data'] < 1) {
        return message.channel.send(new Discord.RichEmbed()
          .setColor("RED")
          .setDescription("Nothing was found with your search.")
        );
      }
      
      const reply = json['data'][Math.floor(Math.random() * json['data'].length)]

      message.channel.send(new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle(reply.title)
        .setURL(reply.link)
        .setDescription(JSON.stringify(reply.is_album) === "true" ? reply.images[0].description || "No description specifed." : reply.description || "No description specifed.")
        .setImage(JSON.stringify(reply.is_album) === "true" ? reply.images[0].link : reply.link)
      );
    })
}

module.exports.help = {
  name: "imgur",
  category: "fun",
  description: "Search for images with Imgur",
  aliases: [],
  permissions: []
}
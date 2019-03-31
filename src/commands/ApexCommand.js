const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (funo, message, args) => {

  let platforms = ["pc", "xbl", "psn"];

  if (!platforms.includes(args[0])) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("The platform can either be **PC**, **XBL** or **PSN**.")
      .setColor("#9F3139")
    );
  }

  const body = await fetch(`https://apextab.com/api/search.php?platform=${args[0]}&search=${args[1]}`)
    .then(res => res.json())

  if(!body.results || !body.results.length) {
    return message.channel.send(new Discord.RichEmbed()
        .setColor("#9F3139")
        .setDescription("Could not find any username matching " + args[1] + " on platform " + args[0]))
  }

  const player = body.results[0]
  message.channel.send(new Discord.RichEmbed()
    .setTitle(`Stats for ${player.name}`)
    .setThumbnail(player.avatar)
    .addField("Level", player.level)
    .addField("Kills", player.kills)
    .addField("Favourite legend", player.legend)
    .setColor("#9F3139")
  );
};

module.exports.help = {
  command: "Apex",
  name: "apex",
  category: "fun",
  description: "Get a players Apex Legends stats.",
  aliases: [
    "apexstats"
  ],
  permissions: []
};
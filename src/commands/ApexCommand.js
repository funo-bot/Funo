const Discord = require("discord.js");
const snekfetch = require("snekfetch")

module.exports.run = async (funo, message, args) => {

  let platforms = ["pc", "xbl", "psn"];

  if (!platforms.includes(args[0])) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("The platform can either be **PC**, **XBL** or **PSN**.")
      .setColor("#9F3139")
    );
  }

  snekfetch.get(`https://apextab.com/api/search.php?platform=${args[0]}&search=${args[1]}`).then((r) => {
    let body = r.body.results[0];
    console.log(body)
    message.channel.send(new Discord.RichEmbed()
      .setTitle(`Stats for ${body.name}`)
      .setThumbnail(body.avatar)
      .addField("Level", body.level)
      .addField("Kills", body.kills)
      .addField("Favourite legend", body.legend)
      .setColor("#9F3139")
    );
  }).catch((rejection) => message.channel.send(new Discord.RichEmbed()
    .setColor("#9F3139")
    .setDescription("Could not find any username matching " + args[1] + " on platform " + args[0])
    )
  );
};

module.exports.help = {
  command: "Apex",
  name: "apex",
  description: "Get a players Apex Legends stats."
};
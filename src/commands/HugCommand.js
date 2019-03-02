const Client = require("nekos.life");
const neko = new Client();
const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  const toHug = message.mentions.users.first();
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  if (!toHug) {
    return message.channel.send(new Discord.RichEmbed()
      .setColor("RED")
      .setDescription("You must mention someone to hug them.")
    );
  }

  neko.sfw.hug().then((imageBody) => {
    message.channel.send(new Discord.RichEmbed()
      .setDescription(`${message.author} hugs ${toHug}`)
      .setColor(color)
      .setImage(imageBody.url)
    );
  });
};

module.exports.help = {
  command: "Hug",
  name: "hug",
  category: "fun",
  description: "Hug a user in a Discord server."
};
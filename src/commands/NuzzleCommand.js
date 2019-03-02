const Client = require("nekos.life");
const neko = new Client();
const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  const toNuzzle = message.mentions.users.first();
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  if (!toNuzzle) {
    return message.channel.send(new Discord.RichEmbed()
      .setColor("RED")
      .setDescription("You must mention someone to nuzzle them.")
    );
  }

  neko.sfw.cuddle().then((imageBody) => {
    message.channel.send(new Discord.RichEmbed()
      .setDescription(`${message.author} nuzzles ${toNuzzle}`)
      .setColor(color)
      .setImage(imageBody.url)
    );
  });
};

module.exports.help = {
  command: "Nuzzle",
  name: "nuzzle",
  category: "fun",
  description: "Nuzzle a user in a Discord server."
};
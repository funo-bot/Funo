const Client = require("nekos.life");
const neko = new Client();
const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  const toPat = message.mentions.users.first();
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  if (!toPat) {
    return message.channel.send(new Discord.RichEmbed()
      .setColor("RED")
      .setDescription("You must mention someone to pat them.")
    );
  }

  neko.sfw.pat().then((imageBody) => {
    message.channel.send(new Discord.RichEmbed()
      .setDescription(`${message.author} pats ${toPat}`)
      .setColor(color)
      .setImage(imageBody.url)
    );
  });
};

module.exports.help = {
  command: "Pat",
  name: "pat",
  description: "Pat a user in a Discord server."
};
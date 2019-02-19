const Client = require("nekos.life");
const neko = new Client();
const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  const toTickle = message.mentions.users.first();
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  if (!toTickle) {
    return message.channel.send(new Discord.RichEmbed()
      .setColor("RED")
      .setDescription("You must mention someone to tickle them.")
    );
  }

  neko.sfw.tickle().then((imageBody) => {
    message.channel.send(new Discord.RichEmbed()
      .setDescription(`${message.author} tickles ${toTickle}`)
      .setColor(color)
      .setImage(imageBody.url)
    );
  });
};

module.exports.help = {
  command: "Tickle",
  name: "tickle",
  description: "Tickle a user in a Discord server."
};
const client = require('nekos.life');
const neko = new client();
const Discord = require('discord.js');

module.exports.run = async (funo, message, args) => {
  const toKiss = message.mentions.users.first()
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);

  if (!toKiss) return message.channel.send(new Discord.RichEmbed()
    .setColor('RED')
    .setDescription('You must mention someone to kiss them.')
  )

  await neko.sfw.kiss().then((imageBody) => {
    message.channel.send(new Discord.RichEmbed()
      .setDescription(`${message.author} kisses ${toKiss}`)
      .setColor(color)
      .setImage(imageBody.url)
    )
  })
}

module.exports.help = {
  command: "Kiss",
  name: "kiss",
  description: "Kiss a user in a Discord server."
}
const client = require("nekos.life");
const neko = new client();
const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  const input = args.join(" ")

  if (!args[0]) return message.channel.send(new Discord.RichEmbed()
    .setColor("RED")
    .setDescription("You must provide a message to OwOify uwu.")
  )

  await neko.sfw.OwOify({ text: input }).then((messageBody) => {
    message.channel.send(messageBody.owo)
  })
}

module.exports.help = {
  command: "Owoify",
  name: "owoify",
  description: "OwOify your message."
}
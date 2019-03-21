const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports.run = async (funo, message) => {

  const body = await fetch('http://aws.random.cat/meow')
    .then(res => res.json())

  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  message.channel.send(new Discord.RichEmbed()
    .setTitle("Meow! 🐱")
    .setColor(color)
    .setImage(body.file)
  );
};

module.exports.help = {
  command: "Random Cat",
  name: "cat",
  category: "fun",
  description: "Get a lovely picture of a cat",
  aliases: [
    "kitten",
    "cats"
  ]
};
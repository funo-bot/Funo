const fetch = require("node-fetch");
const Discord = require("discord.js");
module.exports.run = async (funo, message) => {

  const body = await fetch('https://random.dog/woof.json')
    .then(res => res.json())

  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  message.channel.send(new Discord.RichEmbed()
    .setTitle("Woof! 🐶")
    .setColor(color)
    .setImage(body.url)
  );
};

module.exports.help = {
  command: "Random dog",
  name: "dog",
  category: "fun",
  description: "Get a lovely picture of a dog",
  aliases: [
    "puppy",
    "dogs"
  ],
  permissions: []
};
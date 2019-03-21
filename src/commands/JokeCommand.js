const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  const body = await fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())

  return message.channel.send(new Discord.RichEmbed()
    .addField(body.setup, body.punchline)
  );
};

module.exports.help = {
  command: "Joke",
  name: "joke",
  category: "fun",
  description: "Get a random joke.",
  aliases: [
    "jk"
  ]
};
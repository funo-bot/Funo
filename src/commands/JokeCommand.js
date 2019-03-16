const snekfetch = require("snekfetch");
const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  const { body } = await snekfetch.get('https://official-joke-api.appspot.com/random_joke')

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
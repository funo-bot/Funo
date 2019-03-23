const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports.run = async (funo, message) => {

  function timeout(ms, promise) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(new Error("timeout"))
      }, ms)
      promise.then(resolve, reject)
    })
  }

  const body = await timeout(3000, fetch('http://aws.random.cat/meow'))
    .then(res => res.json())
    .catch(function (error) {
      return message.channel.send(new Discord.RichEmbed()
        .setDescription("Timed out while getting a response from the remote server. " + error)
        .setColor("RED")
      );
    })

    console.log(body)

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
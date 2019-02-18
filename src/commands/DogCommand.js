const snekfetch = require("snekfetch");
const Discord = require("discord.js");
module.exports.run = async (funo, message) => {
  snekfetch.get("https://random.dog/woof.json").then(r => {
    let body = r.body;
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    message.channel.send(new Discord.RichEmbed()
      .setTitle("Woof! 🐶")
      .setColor(color)
      .setImage(body.url)
    );
  });
}

module.exports.help = {
  command: "Random dog",
  name: "dog",
  description: "Get a lovely picture of a dog"
}
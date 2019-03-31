const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {

  if (!args[0]) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You must provide a message!")
      .setColor("RED")
    );
  }

  const body = await fetch('https://8ball.delegator.com/magic/JSON/' + args.join(" "))
    .then(res => res.json())

  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return message.channel.send(new Discord.RichEmbed()
    .addField(args.join(" "), body.magic.answer)
    .setColor(color)
  );
};

module.exports.help = {
  command: "8ball",
  name: "8ball",
  category: "fun",
  description: "Ask the magic 8ball a question.",
  aliases: ["8b"],
  permissions: []
};
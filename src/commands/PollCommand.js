const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  let poll = await message.channel.send(new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle("Poll")
    .setDescription(args.join(" "))
  );

  await poll.react("🅰")
  await poll.react("🅱")
};

module.exports.help = {
  name: "poll",
  category: "fun",
  description: "Create a poll.",
  aliases: []
};
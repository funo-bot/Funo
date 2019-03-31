const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {

  let m = await message.channel.send(new Discord.RichEmbed()
    .setDescription("Getting avatar...")
    .setColor("BLUE")
  );

  let target = message.mentions.users.first() || message.author;

  await message.channel.send({
    files: [{
      attachment: target.displayAvatarURL,
      name: "avatar.png"
    }]
  });

  m.delete();
};

module.exports.help = {
  command: "Avatar",
  name: "avatar",
  category: "util",
  description: "Get a users avatar.",
  aliases: [
    "av"
  ],
  permissions: []
};
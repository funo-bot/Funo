const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You lack the **`MANAGE_MESSAGES`** permission.")
      .setColor("RED")
    );
  }

  if (!args[0]) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You need to provide a message for me to say.")
      .setColor("RED")
    );
  }
  message.delete().catch();
  message.channel.send(args.join(" "));
};

module.exports.help = {
  command: "Say",
  name: "say",
  category: "util",
  description: "Make Funo say something.",
  aliases: [
    "repeat"
  ],
  permissions: []
};
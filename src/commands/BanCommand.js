const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  const toBan = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);

  if (!message.member.hasPermission("BAN_MEMBERS")) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You lack the `BAN_MEMBERS` permisson.")
      .setColor("RED")
    );
  }

  if (!toBan) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You provide someone to ban.")
      .setColor("RED")
    );
  }

  if (message.author.id === toBan.id) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You cannot ban yourself!")
      .setColor("RED")
    );
  }

  let reason = args.slice(1).join(" ") || "No reason specifed."

  if (toBan.highestRole.position > message.member.highestRole.position) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You cannot ban a member who has a higher role than you.")
      .setColor("RED")
    );
  }

  await toBan.send(new Discord.RichEmbed()
    .setTitle(`You have been banned from **${message.guild.name}**`)
    .setColor("RED")
    .addField("By:", message.author.username)
    .addField("Reason:", "```" + reason + "```")).then(() => toBan.ban());

  message.channel.send(new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(`${toBan} has been banned from the server.`)
  );
};


module.exports.help = {
  command: "Ban",
  name: "ban",
  category: "moderation",
  description: "Ban a user from your server",
  aliases: [
    "banuser"
  ],
  permissions: []
};
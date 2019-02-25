const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  const toKick = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);

  if (!message.member.hasPermission("KICK_MEMBERS")) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You lack the `KICK_MEMBERS` permisson.")
      .setColor("RED")
    );
  }

  if (!toKick) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You provide someone to kick.")
      .setColor("RED")
    );
  }

  if (message.author.id === toKick.id) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You cannot kick yourself!")
      .setColor("RED")
    );
  }

  let reason = args.slice(1).join(" ");

  if (toKick.highestRole.position > message.member.highestRole.position) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You cannot kick a member who has a higher role than you.")
      .setColor("RED")
    );
  }

  toKick.send(new Discord.RichEmbed()
    .setTitle("You have been kicked from **" + message.guild.name + "**")
    .setColor("RED")
    .addField("By:", message.author.username)
    .addField("Reason:", "```" + reason + "```")).then(() => toKick.kick()
  );

  message.channel.send(new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(toKick + " has been kicked from the server.")
  );
};


module.exports.help = {
  command: "Kick",
  name: "kick",
    category: "moderation",
  description: "Kick a user from your server"
};
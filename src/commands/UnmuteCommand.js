const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  const toUnmute = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);

  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You lack the `MANAGE_MESSAGES` permisson.")
      .setColor("RED")
    );
  }

  if (!toUnmute) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You must provide someone to unmute.")
      .setColor("RED")
    );
  }

  let role = message.guild.roles.find((r) => r.name === "Funo Muted");

  if (!role || !toUnmute.roles.has(role.id)) {
    return message.channel.send(new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(toUnmute + " has not been muted.")
    );
  }

  await toUnmute.removeRole(role).then(() => message.channel.send(new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(toUnmute + " has been unmuted.")));
};

module.exports.help = {
  command: "Unmute",
  name: "unmute",
  category: "moderation",
  description: "Unmute a user in your server",
  aliases: [],
  permissions: []
};
const Discord = require("discord.js");
const logger = require("../util/Logger");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You lack the `MANAGE_MESSAGES` permisson.")
      .setColor("RED")
    );
  }

  const toMute = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);

  if (!toMute) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You provide someone to mute.")
      .setColor("RED")
    );
  }

  if (toMute.id === message.author.id) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You cannot mute yourself!")
      .setColor("RED")
    );
  }

  if (toMute.highestRole.position > message.member.highestRole.position) {
    return message.channel.send("You cannot mute a member who has a higher role than you.");
  }

  let role = message.guild.roles.find((r) => r.name === "Funo Muted");
  if (!role) {
    try {
      role = await message.guild.createRole({
        name: "Funo Muted",
        color: "#e63900",
        permissions: []
      });

      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(role, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false

        });
      });
    } catch (e) {
      logger.error(e.stack);
    }
  }

  if (toMute.roles.has(role.id)) {
    return message.channel.send(new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(toMute + " has already been muted.")
    );
  }

  await toMute.addRole(role).then(() => message.channel.send(new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(toMute + " has been muted.")));
};

module.exports.help = {
  name: "mute",
  category: "moderation",
  description: "Mute a user in your Discord server",
  aliases: [
    "silence"
  ]
};
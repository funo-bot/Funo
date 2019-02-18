const error = require("../util/Errors");
const Discord = require("discord.js");

module.exports.run = (funo, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return error.noPermission(message, "KICK_MEMBERS");
  var toKick = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
  if (!toKick) return error.noArgs(message);
  if (message.author.id === toKick.id) return error.useOnSelf(message, "You cannot kick yourself!");
  if (!args[1]) return error.noReason(message, "You must give a reason for kicking!");

  var reason = args.slice(2).join(" ");

  if (toKick.highestRole.position >= message.member.highestRole.position) return error.userHigherRole(message);

  toKick.send(new Discord.RichEmbed()
    .setTitle("You have been kicked from **" + message.guild.name + "**")
    .setColor("RED")
    .addField("By:", message.author.username)
    .addField("Reason:", "```" + reason + "```")).then(() => {
      toKick.kick({
        reason: reason
      });
    });

  message.channel.send(new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription("😄 " + toKick + " has been kicked!")
  );
};


module.exports.help = {
  command: "Kick",
  name: "kick",
  description: "Kick a user from your server"
};
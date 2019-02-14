const error = require('../util/Errors');
const Discord = require('discord.js');

module.exports.run = (funo, message, args) => {
  const toBan = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);

  if (!message.member.hasPermission('BAN_MEMBERS')) return error.noPermission(message, 'BAN_MEMBERS');
  if (message.author.id === toBan.id) return error.useOnSelf(message, 'You cannot ban yourself!');
  if (!toBan) return error.noArgs(message);
  if (!args[1]) return error.noReason(message, 'You must give a reason for banning!');

  const reason = args.slice(2).join(' ');

  if (toBan.highestRole.position >= message.member.highestRole.position) return error.userHigherRole(message);

  toBan.send(new Discord.RichEmbed()
    .setTitle(`You have been banned from **${message.guild.name}**`)
    .setColor('RED')
    .addField('By:', message.author.username)
    .addField('Reason:', '```' + reason + '```')).then(() => {
      toBan.ban({
        reason: reason
      });
    });

  message.channel.send(new Discord.RichEmbed()
    .setColor('GREEN')
    .setDescription(`😄 ${toBan} has been banned!`)
  )
}


module.exports.help = {
  command: "Ban",
  name: "ban",
  description: "Ban a user from your server"
}
const error = require('../util/errors');
const Discord = require('discord.js');

module.exports.run = async (funo, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return error.noPermission(message, 'MANAGE_MESSAGES');
    var toUnmute = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
    if (!toUnmute) return error.noArgs(message);
    if (toUnmute.id === message.author.id) return error.useOnSelf(message);

    var role = message.guild.roles.find(r => r.name === 'Funo Muted');

    if (!role || !toUnmute.roles.has(role.id)) return message.channel.send(new Discord.RichEmbed().setColor('RED').setDescription('😕 ' + toUnmute + ' is not muted!'));
    await toUnmute.removeRole(role).then(() => message.channel.send(new Discord.RichEmbed().setColor('GREEN').setDescription('😄 ' + toUnmute + ' has been unmuted!')));
}

module.exports.help = {
    command: "Unmute",
    name: "unmute",
    description: "Unmute a user in your server"
}
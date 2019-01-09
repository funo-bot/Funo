const Discord = require('discord.js');

/*
 * This needs a complete rewrite
 */

module.exports.noPermission = (message, permission) => {
    var embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(message.author.username)
    .setDescription('⛔ You need the **`' + permission + '`** permission to run that command!')
    .setFooter('No permission');

    message.channel.send({ embed });
}

module.exports.noArgs = (message, noArgsMessage) => {
    var embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(message.author.username)
    .setDescription('⛔ ' + noArgsMessage && '⛔ That command requires arguments!')
    .setFooter('No arguments');

    message.channel.send({ embed });
}

module.exports.useOnSelf = (message, errorReason) => {
    var embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(message.author.username)
    .setDescription('⛔ ' + errorReason)
    .setFooter('Cannot use on self');

    message.channel.send({ embed });
}

module.exports.userHigherRole = (message) => {
    var embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(message.author.username)
    .setDescription('⛔ ' + message.mentions.users.first() + '\'s role is higher than yours!')
    .setFooter('User has a higher role');

    message.channel.send({ embed });
}

module.exports.noReason = (message, reason) => {
    var embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(message.author.username)
    .setDescription('⛔ ' + reason)
    .setFooter('No reason specifed');

    message.channel.send({ embed });
}

module.exports.NaN = (message, NaNMessage) => {
    var embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(message.author.username)
    .setDescription('⛔ ' + NaNMessage)
    .setFooter('Not a number');

    message.channel.send({ embed });
}
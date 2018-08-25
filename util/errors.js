const Discord = require('discord.js');

module.exports.noPermission = (message, permission) => {
    var embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(message.author.username)
    .setDescription('⛔ You need the **`' + permission + '`** permission to run that command!');

    message.channel.send({ embed });
}

module.exports.noArgs = (message) => {
    var embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(message.author.username)
    .setDescription('⛔ That command requires arguments!');

    message.channel.send({ embed });
}

module.exports.useOnSelf = (message) => {
    var embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(message.author.username)
    .setDescription('⛔ You cannot use that command on yourself!');

    message.channel.send({ embed });
}

module.exports.userHigherRole = (message) => {
    var embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(message.author.username)
    .setDescription('⛔ ' + message.mentions.users.first() + '\'s role is higher than yours!');

    message.channel.send({ embed });
}
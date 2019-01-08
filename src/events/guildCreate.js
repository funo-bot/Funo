/**
 * To-Do:
 *  Post to bot list API when removed from a guild. 
 */
const Discord = require('discord.js');
const logger = require('../util/logger');

module.exports = guild => {
    funo = guild.client;
    logger.info(funo, 'Added to new guild! ' + guild.name + ', with ' + guild.members.size + ' members!');
    
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    funo.guilds.get("485580148306083840").channels.find("name", "bot-logs").send(new Discord.RichEmbed()
    .setColor(color)
    .setTitle('Added to new guild!')
    .addField('Server name', guild.name, true)
    .addField('ID', guild.id, true)
    .addField('Owned by', guild.owner.user.username + '#' + guild.owner.user.discriminator, true)
    .addField('Owners ID', guild.owner.user.id, true)
    .addField('Members', guild.members.size, true)
    .addField('Channels', guild.channels.size, true)
    .addField('Roles', guild.roles.size, true)
    .setThumbnail(guild.iconURL));

}

const snekfetch = require('snekfetch');
const Discord = require('discord.js');
module.exports.run = async (funo, message) => {
    snekfetch.get('http://aws.random.cat/meow').then(r => {
        var body = r.body;
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        message.channel.send(new Discord.RichEmbed().setTitle('Meow! 🐱').setColor(color).setImage(body.file));
    });
}

module.exports.help = {
    command: "Random Cat",
    name: "cat"
}
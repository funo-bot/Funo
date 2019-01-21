const snekfetch = require('snekfetch');
const Discord = require('discord.js');
module.exports.run = async (funo, message) => {
  snekfetch.get('https://api.unsplash.com/photos/random?client_id=18aaabdcbc5470f0cb3b4e1215a08e633eb95a68aeec86714734b4fc40bda648').then(r => {
    var body = r.body;
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    message.channel.send(new Discord.RichEmbed().setTitle('Woah! 😮').setColor(color).setImage(body.urls.full).setDescription('Image by __[' + body.user.username + '](https://unsplash.com/@' + body.user.username + ')__ ' + 'on __[Unsplash](https://unsplash.com)__'));
  });
}

module.exports.help = {
  command: "Random Picture",
  name: "pic",
  description: "Get a random picture"
}
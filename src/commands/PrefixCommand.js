const Discord = require("discord.js")

module.exports.run = async (funo, message, args) => {

  funo.settings.set(message.guild.id, args[0], 'prefix');
  
  const guildConf = funo.settings.ensure(message.guild.id, funo.defaultSettings);

  message.channel.send(new Discord.RichEmbed()
    .setDescription(`Server prefix has been set to **\`${guildConf.prefix}\`**`)
    .setColor('BLUE')
  )
}

module.exports.help = {
  command: 'Prefix',
  name: "prefix",
  description: "Change Funo's prefix for the Discord server."
}
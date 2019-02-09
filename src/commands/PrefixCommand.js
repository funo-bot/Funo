const Discord = require("discord.js")

module.exports.run = async (funo, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(new Discord.RichEmbed()
  .setDescription('You lack the `MANAGE_SERVER` permisson.')
  .setColor('RED')
)

  if (!args[0]) return message.channel.send(new Discord.RichEmbed()
    .setDescription('You must supply a prefix to set for the server.')
    .setColor('RED')
  )

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
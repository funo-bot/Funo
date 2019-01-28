const config = require('../../config.json')
const Discord = require('discord.js')

module.exports.run = (funo, message) => {

  const max = 5
  let i = 0

  const funoCommands = Array.from(funo.commands.entries())

  while (i < funoCommands.length) {
    const cmds = funoCommands.slice(i, i + max)
    const commandList = new Discord.RichEmbed()
    
    cmds.forEach(cmd => commandList.addField(cmd[1].help.name, cmd[1].help.description))

    commandList.addField('Information', '[Discord](https://discord.gg/e4QcD8Q) | [Github](https://github.com/DelxHQ/Funo)')
    commandList.setTitle('Funo Command List')
    commandList.setColor('#bf80ff')

    message.channel.send(commandList)
    console.log('Help command ran!')

    i += cmds.length
  }
}

module.exports.help = {
  command: "Help",
  name: "help",
  description: "Get a list of commands"
}

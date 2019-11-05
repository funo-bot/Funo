import { Client, RichEmbed } from 'discord.js'

import loader from './util/CommandLoader'
import Logger from './util/Logger'

const logger = new Logger()

export class Funo extends Client {

  constructor() {
    super()

    this.on('message', message => this.onMessageReceived(message))
  }

  async init() {
    const start = Date.now()

    await loader.load(this)

    await this.login(process.env.TOKEN).then(() => {
      const finish = Date.now() - start
      logger.info(`Done! (${Math.floor(finish / 10)}ms)`)

      loader.initCmds(this)
    });
  }

  async onMessageReceived(message) {
    if (!message.guild || message.author.bot) return
  
    const permissions = message.channel.permissionsFor(this.user)
  
    if (!permissions.has('SEND_MESSAGES')) return
  
    let messageArray = message.content.split(/\s+/g)
    let command = messageArray[0].toLowerCase()
    let args = messageArray.slice(1)
  
    const prefix = '.'
  
    let cmdStr = ''
    if (command === `<@${this.user.id}>` || command === `<@!${this.user.id}>`) {
      if (messageArray.length < 2) return
  
      cmdStr = args.shift().toLowerCase()
    } else if (message.content.indexOf(prefix) === 0) {
      cmdStr = command.slice(prefix.length)
    } else if (message.content === funo.prefix + "prefix") {
      cmdStr = 'prefix'
    } else return
  
    const cmd = this.commands.get(cmdStr) || this.commands.get(this.aliases.get(cmdStr))
  
    if (cmd) {
      if (!permissions.has(cmd.help.permissions)) {
        return message.channel.send(new RichEmbed()
          .setColor('RED')
          .setDescription('Could not run command. Please make sure I have permissions `' + cmd.help.permissions + '`')
        )
      }
      message.channel.startTyping()
      await cmd.run(this, message, args)
      message.channel.stopTyping()
    }
  }
}
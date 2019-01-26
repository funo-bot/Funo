const Discord = require('discord.js')
const config = require('../../config.json')
const logger = require('../util/logger')

const sys = require('sys')
const exec = require('child_process').exec;
let child;

module.exports.run = async (funo, message) => {

  if (message.author.id != config.ownerid) return

  const embed = new Discord.RichEmbed()
    .setDescription('Updating to the latest version...')
    .setTimestamp()

  await message.channel.send({ embed })

  // execute `git pull`
  child = exec('git pull', function (error, stdout, stderr) {
    logger.debug('stdout: ' + stdout);
    logger.debug('stderr: ' + stderr);
    message.channel.send('```' + stdout + '```')
    if (error !== null) {
      logger.error('exec error: ' + error);
    }
  });
}

module.exports.help = {
  command: "Update",
  name: "update",
  description: "Update Funo to the latest version."
}

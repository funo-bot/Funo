const error = require('../util/Errors');

module.exports.run = async (funo, message, args) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return error.noPermission(message, 'MANAGE_MESSAGES');
  if (!args[0]) return error.noArgs(message);

  message.delete().catch();
  message.channel.send(args.join(' '));
}

module.exports.help = {
  command: "Say",
  name: "say",
  description: "Make Funo say something."
}
const config = require('../../../../config.json');
module.exports = message => {
    funo = message.client;
    if (message.author.bot) return undefined;
    if (message.channel.type === 'dm') return undefined;

    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (!command.startsWith(config.prefix)) return undefined;

    let cmd = funo.commands.get(command.slice(config.prefix.length));
    if (cmd) cmd.run(funo, message, args);
}

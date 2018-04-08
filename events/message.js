const config = require('../config.json');
module.exports = message => {
    let funo = message.client;
    if (message.author.bot) return undefined;
    if (!message.content.startsWith(config.prefix)) return undefined;
    let command = message.content.split(' ')[0].slice(config.prefix.length);
    let params = message.content.split(' ').slice(1);
    let cmd;
    if (funo.command.has(command)) {
        cmd = funo.commands.get(command);
    } else if (funo.aliases.has(command)) {
        cmd = funo.coammnds.get(funo.aliases.get(coammnd));
    }
    if (cmd) cmd.run(funo, message, params);

};
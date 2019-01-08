const Discord = require('discord.js');

const config = require('../../../config.json');
const logger = require('./util/logger');

const funo = new Discord.Client({ disableEveryone: true });

require('./util/eventLoader')(funo);
require('./util/commandLoader')(funo);

funo.login(config.token).then(() => {
    logger.success(funo, 'Logged in as ' + funo.user.username + '!');
    funo.guilds.get("485580148306083840").channels.find("name", "bot-logs").send(new Discord.RichEmbed().setColor('0x55FF00').setDescription('😁 Successfully started with ' + funo.guilds.size + ' servers!'));
});

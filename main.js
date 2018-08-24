const Discord = require('discord.js');

const config = require('./config.json');
const logger = require('./util/logger');

const funo = new Discord.Client({ disableEveryone: true });

require('./util/eventLoader')(funo);
require('./util/commandLoader')(funo);

funo.login(config.token).then(() => logger.success(funo, ('Logged in as ' + funo.user.username + '!')));

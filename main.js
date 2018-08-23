const Discord = require('discord.js');
const chalk = require('chalk');

const config = require('./config.json');
const logger = require('./util/logger');

const funo = new Discord.Client({ disableEveryone: true });

require('./util/eventLoader')(funo);
require('./util/commandLoader')(funo);

funo.login(config.token).then(() => logger(funo, chalk.bgGreen('Logged in as ' + funo.user.username + '!')));

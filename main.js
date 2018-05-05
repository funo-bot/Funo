const Discord = require('discord.js');
const config = require('./config.json');

const funo = new Discord.Client();

require('./util/eventLoader')(funo);
require('./util/commandLoader')(funo);

funo.login(config.token);

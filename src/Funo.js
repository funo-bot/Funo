const Discord = require('discord.js');
const config = require('../config.json');
const logger = require('./util/logger');

const funo = new Discord.Client({ disableEveryone: true });

const start = Date.now();

require('./util/eventLoader')(funo);
require('./util/commandLoader')(funo);

funo.login(config.token).then(() => {
    const finish = Date.now() - start;
    logger.info(`Done! (${Math.floor(finish / 10)}ms)`)
})

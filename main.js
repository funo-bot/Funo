const Discord   = require('discord.js');
const config    = require('./config.json');
const fs        = require('fs');
const moment    = require('moment');

const funo      = new Discord.Client();

const logger    = require('./functions/terminal.js');

require('./util/eventLoader')(funo);

funo.commands     = new Discord.Collection();
funo.aliases      = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.log(err);
    logger(funo, `Loading ${files.length} commands...`);
    files.forEach(f => {
        let props = require(`./commands/${f}`)
        logger(funo, `Loading command: ${props.help.name}...`);
        funo.coammnds.set(props.help.name, props)
        props.conf.aliases.forEach(alias => {
            funo.aliases.set(alias, props.help.name);
        });
    });
});

funo.login(config.token);

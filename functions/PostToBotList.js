module.exports  = async (funo) => {
const Discord   = require('discord.js');
const DBL       = require("dblapi.js");
const config    = require('../config.json');
const dbl       = new DBL();

    try {
        console.log(chalk.yellow("[Information] Posting to discordbots.org..."))
        await dbl.postStats(funo.guilds.size).then(() => console.log(chalk.green('[Success] Posted to discordbots.org successfully.')));
    } catch (error) {
        console.log(error)
    }
}

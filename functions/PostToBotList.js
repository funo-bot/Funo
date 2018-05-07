module.exports  = async (funo) => {
const Discord   = require('discord.js');
const DBL       = require("dblapi.js");
const config    = require('../config.json');
const dbl       = new DBL();

const logger    = require('../util/logger');

    try {
        logger(funo, "[Information] Posting to discordbots.org...")
        await dbl.postStats(funo.guilds.size).then(() => logger(funo, '[Success] Posted to discordbots.org successfully.'));
    } catch (error) {
        logger(funo, error)
    }
}

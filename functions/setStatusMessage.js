const Discord   = require('discord.js');
const logger    = require('../functions/terminal');

module.exports = async (funo) => {
    funo.user.setActivity('Loading...');
    setInterval(function () {
        var activitys = {
            "LISTENING": `to ${funo.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users!`,
            "WATCHING": `over ${funo.guilds.size} servers`,
            "PLAYING": `with updates!`
        }
        var types = [
            "WATCHING",
            "LISTENING",
            "PLAYING"
        ];
        var type = types[Math.floor(Math.random() * types.length)]
        var name = activitys[type]
        funo.user.setActivity(name, { type: type })
        logger(funo, `Status message set to {${type}} {${name}}`)
    }, 30000)
}

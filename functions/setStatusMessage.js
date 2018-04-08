const Discord = require('discord.js');
module.exports = async(funo) => {
    setInterval(function () {
        var games = [
            `in ${funo.guilds.size} servers`,
            `making ${funo.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users happy!`,
            `use $help for a list of commands`,
            `Random crash should be fixed. Server issues!`,
            `Running on the main server again!`,
            `Small backend update!`

        ];

        funo.user.setPresence({
            game: {
                name: games[Math.floor(Math.random() * games.length)],
                type: 0
            }
        });
    }, 15000)
}

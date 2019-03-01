/*
Created by: Suremeo
Date: 2/28/2019, 3:50 PM
*/

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var config = await bot.settings.ensure(message.guild.id, bot.defaultSettings)
    console.log(config)
    var dates = config.memberArray.splice(-1, 7)
    var date = config.datesArray.splice(-1, 7)
    console.log(date)
    console.log(dates)
    var shit = [{
        label: 'Online',
        data: [dates[6] || message.guild.members.size, dates[5] || message.guild.members.size ,dates[4] || message.guild.members.size ,dates[3] || message.guild.members.size,dates[2] || message.guild.members.size ,dates[1] || message.guild.members.size ,dates[0] || message.guild.members.size ,],
        // borderColor: [ 'black','black',"black","black" ],
        borderColor: [ "rgba(209, 50, 241, 1)", "rgba(209, 50, 241, 1)", "rgba(209, 50, 241, 1)", "rgba(209, 50, 241, 1)", "rgba(209, 50, 241, 1)", "rgba(209, 50, 241, 1)", "rgba(209, 50, 241, 1)" ],
        backgroundColor: [ "rgba(209, 50, 241, 0.3)", "rgba(209, 50, 241, 0.3)", "rgba(209, 50, 241, 0.3)", "rgba(209, 50, 241, 0.3)", "rgba(209, 50, 241, 0.3)", "rgba(209, 50, 241, 0.3)", "rgba(209, 50, 241, 0.3)" ],
        fontSize: [30]
    }]
        await bot.ImageHandler.preformAction("graphMemberCount", bot , [shit, "line", [date[6] || "Unknown", date[5] || "Unknown", date[4] || "Unknown", date[3] || "Unknown", date[2] || "Unknown", date[1] || "Unknown", date[0] || "Unknown"], `${message.guild.name} - ${message.guild.members.size} members`], async (obj) => {
            if (obj.Status) {
                message.channel.send(new Discord.Attachment(obj.Buffer))
            } else {
                message.channel.send(JSON.stringify(obj, null, 4))
            }
        })
};

module.exports.help = {
    name: "memberflow",
    category: "util",
    description: "Generate a graph to show the memberflow"
};
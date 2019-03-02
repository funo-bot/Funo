/*
Created by: Suremeo
Date: 2/28/2019, 3:50 PM
*/

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var config = await bot.stats.ensure(message.guild.id, bot.defaultStats)
  var dates = config.memberArray.slice(-7)
  var date = config.dateArray.slice(-7)
  var shit = [{
    label: 'Online',
    data: [dates[dates.length - 7] || dates[0], dates[dates.length - 6] || dates[0], dates[dates.length - 5] || dates[0], dates[dates.length - 4] || dates[0], dates[dates.length - 3] || dates[0], dates[dates.length - 2] || dates[0], message.guild.members.size],
    // borderColor: [ 'black','black',"black","black" ],
    borderColor: ["rgba(209, 50, 241, 1)", "rgba(209, 50, 241, 1)", "rgba(209, 50, 241, 1)", "rgba(209, 50, 241, 1)", "rgba(209, 50, 241, 1)", "rgba(209, 50, 241, 1)", "rgba(209, 50, 241, 1)"],
    backgroundColor: ["rgba(209, 50, 241, 0.3)", "rgba(209, 50, 241, 0.3)", "rgba(209, 50, 241, 0.3)", "rgba(209, 50, 241, 0.3)", "rgba(209, 50, 241, 0.3)", "rgba(209, 50, 241, 0.3)", "rgba(209, 50, 241, 0.3)"],
    fontSize: [30]
  }]
  await bot.ImageHandler.preformAction("graphMemberCount", bot, [shit, "line", ["60m Ago", "50m Ago", "40m Ago", "30m Ago", "20m Ago", "10m Ago", "Now"], `${message.guild.name} - ${message.guild.members.size} members`], async (obj) => {
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
  description: "Generate a graph to show the memberflow",
  aliases: [
    "mflow"
  ]
};
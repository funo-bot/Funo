/*
Created by: Suremeo
Date: 2/23/2019, 11:44 AM
*/

const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {

  let tooEarly;

  if (!args[0]) {
    return message.channel.send(new Discord.RichEmbed()
      .setColor("#ff5050")
      .setDescription("You didn't provide an image URL")
    );
  }

  const embed = new Discord.RichEmbed();
  embed.setColor("#ffd500");
  embed.setDescription("Loading...");
  tooEarly = false
  message.channel.send(embed).then(msg => {
    require("../util/image2text.js")({
      url: args[0],
      callback: async (type, object) => {
        switch (type) {
          case "error":
            try {
              embed.setDescription(`${object.text}`);
              embed.setColor("#ff5050");
              msg.edit(embed);
            } catch (err) {
              embed.setDescription(`${err}`);
              embed.setColor("#ff5050");
              msg.edit(embed);
            }
            break;
          case "done":
            try {
              embed.setDescription(`${object.text}`);
              embed.setColor("#00cc00");
              msg.edit(embed);
            } catch (err) {
              embed.setDescription(`${err}`);
              embed.setColor("#ff5050");
              msg.edit(embed);
            }
            break;
          case "update":
            if (!tooEarly) {
              tooEarly = true
              let progress_calc_1 = Number(object.progress).toFixed(2).toString().replace(".", "");
              if (progress_calc_1.startsWith(" ")) progress = progress_calc_1.replace(" ", "");
              embed.setDescription(`**Status**: ${object.status}\n**Progress**: ${progress_calc_1.replaceAll("0", "")}%`);
              msg.edit(embed);
              setTimeout(async () => { tooEarly = false }, 500);
            }
            break;
        }
      }
    })
  })
};

module.exports.help = {
  command: "image2text",
  name: "image2text",
    category: "image",
  description: "Pull text from an image"
};

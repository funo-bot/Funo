/*
Created by: Suremeo
Date: 2/24/2019, 11:54 AM
*/

const Discord = require("discord.js");

module.exports.run = async (funo, msg, args) => {
  if (!funo.imageCache) funo.imageCache = {};
  if (!funo.imageCache[msg.channel.id]) funo.imageCache[msg.channel.id] = "";
  if (!funo.imageHistory) funo.imageHistory = {};
  if (!funo.imageHistory[msg.channel.id]) funo.imageHistory[msg.channel.id] = [];

  var jimpGenerator = require("../util/jimpGenerator.js")
  if (args[0] == "undo") {
    msg.guild.emojis.array().forEach(async (emoji) => {
      console.log(emoji.name + " : " + emoji.id)
    })
    try {
      funo.imageHistory[msg.channel.id].pop()
      funo.imageCache[msg.channel.id] = funo.imageHistory[msg.channel.id][funo.imageHistory[msg.channel.id].length - 1] || "http://bcpiac.com/wp-content/uploads/2018/04/no_photo_provided.png";
      await msg.channel.send({
        files: [funo.imageHistory[msg.channel.id][funo.imageHistory[msg.channel.id].length - 1] || "http://bcpiac.com/wp-content/uploads/2018/04/no_photo_provided.png"]
      })
    } catch (err) {
      S
      msg.channel.send({
        files: ["http://bcpiac.com/wp-content/uploads/2018/04/no_photo_provided.png"]
      });
    }
    return;
  }

  if (args[0] === "help") return msg.channel.send(new Discord.RichEmbed()
    .setColor("#00cc00")
    .setDescription("```Image methods```" +
      "\n***Turn an image black and white***" +
      "\ngreyscale `url`" +
      "\n\n***Resize an image***" +
      "\nresize `url` `width` `height`" +
      "\n\n***Apply a blur effect***" +
      "\nblur `url` `amount`" +
      "\n\n***Crop an image***" +
      "\ncrop `url` `x1` `y1` `x2` `y2`" +
      "\n\n***Apply a news overlay***" +
      "\nnews `url`" +
      "\n\n***Invert the colors on an image***" +
      "\ninvert `url`" +
      "\n\n***Normalize the colors of an image***" +
      "\nnormalize `url`" +
      "\n\n***Apply a sepia filter***" +
      "\nsepia `url`" +
      "\n\n***Rotate an image***" +
      "\nrotate `url` `degrees`")
  );

  async function get(type) {
    if (msg.mentions.users.array().length != "0") {
      if (type == "url") {
        funo.imageHistory[msg.channel.id].push(msg.mentions.users.first().avatarURL);
        return await msg.mentions.users.first().avatarURL;
      } else {
        return args.splice(2);
      }
    } else {
      if (!args[1] || !args[1].includes("://")) {
        if (funo.imageCache[msg.channel.id] == "") {
          if (type == "url") {
            funo.imageHistory[msg.channel.id].push("http://bcpiac.com/wp-content/uploads/2018/04/no_photo_provided.png")
            return "http://bcpiac.com/wp-content/uploads/2018/04/no_photo_provided.png"
          } else {
            return args.splice(1);
          }
        } else {
          if (type == "url") {
            return funo.imageCache[msg.channel.id];
          } else {
            return args.splice(1);
          }
        }
      } else {
        if (type == "url") {
          funo.imageHistory[msg.channel.id].push(args[1]);
          return args[1];
        } else {
          return args.splice(2);
        }
      }
    }
  }

  try {
    msg.channel.send("Working on it...").then(async m => {
      await jimpGenerator(funo, msg, args[0], await get("url"), await get("args"), async (type, response, text) => {
        switch (type) {
          case "success":
            let attachment = new Discord.Attachment(response, "result.png");
            if (text) {
              msg.channel.send(response);
            } else {
              msg.channel.send(attachment).then(m => m.attachments.forEach(async (attachment) => {
                funo.imageCache[msg.channel.id] = attachment.url;
                funo.imageHistory[msg.channel.id].push(attachment.url);
              }))
            }
            m.delete();
            break;
          case "error":
            m.delete();
            msg.channel.send("An error occured\n```" + response + "```");
            break;
        }
      })
    })
  } catch (err) {
    msg.channel.send("An unknown error has occured");
  }
};

module.exports.help = {
  command: "i",
  name: "i",
  category: "image",
  description: "edit an image",
  aliases: [
    "image"
  ],
  permissions: []
};
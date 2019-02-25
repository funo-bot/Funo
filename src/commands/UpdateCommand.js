const Discord = require("discord.js");
const config = require("../../config.json");
const logger = require("../util/Logger");

const exec = require("child_process").exec;
let child;

module.exports.run = async (funo, message) => {

  if (!config.ownerid.includes(message.author.id)) {
    return;
  }

  message.channel.send(new Discord.RichEmbed()
    .setColor("BLUE")
    .setDescription("Updating to the latest version...")
    .setTimestamp()
  );

  // execute `git pull`
  child = exec("git pull", async function (error, stdout, stderr) {
    message.channel.send("**`OUTPUT:`**\n```" + stdout + "```");
    if (error !== null) {
      message.channel.send("**`EXEC ERROR:`**\n```" + error + "```");
    } else {
      await message.channel.send(new Discord.RichEmbed()
        .setColor("GREEN")
        .setDescription("Done! Restarting to apply changes...")
        .setTimestamp()
      );
      process.exit();
    }
  });
};

module.exports.help = {
  command: "Update",
  name: "update",
    category: "util",
    private: true,
  description: "Update Funo to the latest version."
};

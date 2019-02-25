const Discord = require("discord.js");
module.exports.run = async (funo, message) => {

  const commandList = new Discord.RichEmbed();
    const guildConf = funo.settings.ensure(message.guild.id, funo.defaultSettings);

    var util = await funo.commands.filter(c=> c.help.category === "util").map(c => "`" + c.help.name + "`").join(", ")
    var moderation = await funo.commands.filter(c=> c.help.category === "moderation").map(c => "`" + c.help.name + "`").join(", ")
    var fun = await funo.commands.filter(c=> c.help.category === "fun").map(c => "`" + c.help.name + "`").join(", ")
    var image = await funo.commands.filter(c=> c.help.category === "image").map(c => "`" + c.help.name + "`").join(", ")
  // const commandStr = `${funo.commands.map((cmd) => `${guildConf.prefix}**${cmd.help.name}** - \`${cmd.help.description}\``).join("\n")}`;

  commandList.setColor("#36393F");
  commandList.setDescription(`${funo.emojis.get("549432155168571412")} **Commands:**\n\n${funo.emojis.get("549486394977026048")} **Fun**\n${fun}\n\n:shield: **Moderation**\n${moderation}\n\n:frame_photo: **Image Manipulation**\n${image}\n\n:hammer: **Utils**\n${util}\n\n:desktop: **Statistics:**\n\`Servers: ${funo.guilds.size}\`\n\`Users: ${funo.users.size}\`\n\n**${funo.emojis.get("549494825062367232")} [Discord](https://discord.gg/PFAeSTh)  ${funo.emojis.get("549491316535590933")} [Github](https://github.com/DelxHQ/Funo)  ${funo.emojis.get("549494392860442634")} [Discord Bot List](https://discordbots.org/bot/332971222897786892)**`);
  commandList.setImage("https://i.imgur.com/BwPBeG9.gif")
    commandList.setThumbnail("https://media.giphy.com/media/2swNBwJoTZoMU/giphy.gif")
  message.channel.send(commandList);
};

module.exports.help = {
  command: "Help",
  name: "help",
    category: "util",
  description: "Get a list of commands"
};

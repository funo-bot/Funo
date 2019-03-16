const Discord = require("discord.js");
module.exports.run = async (funo, message, args) => {

  if (args[0]) {
    const commandList = new Discord.RichEmbed();
    let array = await funo.commands.filter(c => c.help.name === args[0]).map(c => c.help.description).join();
    commandList.setColor("#36393F");
    commandList.setImage("https://i.imgur.com/BwPBeG9.gif")
    commandList.setThumbnail("https://media.giphy.com/media/2swNBwJoTZoMU/giphy.gif")
    if (array != "") {
      commandList.setDescription("**Showing help for the** `" + args[0] + "` **command**\n\n```css\n" + array + "\n```")
    } else {
      commandList.setDescription("The command `" + args[0] + "` was not found")
    }
    message.channel.send(commandList);
  } else {
    const commandList = new Discord.RichEmbed();
    const guildConf = funo.settings.ensure(message.guild.id, funo.defaultSettings);

    let util = await funo.commands.filter(c => c.help.category === "util" && !c.help.private).map(c => "`" + c.help.name + "`").join(", ")
    let moderation = await funo.commands.filter(c => c.help.category === "moderation").map(c => "`" + c.help.name + "`").join(", ")
    let fun = await funo.commands.filter(c => c.help.category === "fun").map(c => "`" + c.help.name + "`").join(", ")
    let image = await funo.commands.filter(c => c.help.category === "image").map(c => "`" + c.help.name + "`").join(", ")
    let music = await funo.commands.filter(c => c.help.category === "music").map(c => "`" + c.help.name + "`").join(", ")
    // const commandStr = `${funo.commands.map((cmd) => `${guildConf.prefix}**${cmd.help.name}** - \`${cmd.help.description}\``).join("\n")}`;

    commandList.setColor("#36393F");
    commandList.setDescription(`<:t:550084023775395840><:t:550084023775395840> <:t:550084023775395840> <:t:550084023775395840> <:c:549973819087912960> <:o:549975246716010497><:m:549989428433649684><:m:549989428433649684><:a:549989505617231903><:n:549991441972199465><:d:549991473664491526><:s:549991513963364373>\n<:t:550084023775395840><:t:550084023775395840> <:t:550084023775395840> <:t:550084023775395840> \`${guildConf.prefix}help <command> for more info\`\n\n${funo.emojis.get("549486394977026048")} **Fun** ${funo.emojis.get("549486394977026048")}\n${fun}\n\n:musical_note:  **Music** :musical_note:\n${music}\n\n    <:utils:550088827906293761> **Utilities** <:utils:550088827906293761>\n${util}\n\n:shield: **Moderation** :shield:\n${moderation}\n\n:frame_photo: **Image Manipulation** :frame_photo:\n${image}\n\n:desktop: **Statistics:**\n\`Servers: ${funo.guilds.size}\`\n\`Users: ${funo.users.size}\`\n\n**${funo.emojis.get("549494825062367232")} [Discord](https://discord.gg/PFAeSTh)  ${funo.emojis.get("549491316535590933")} [Github](https://github.com/DelxHQ/Funo)  ${funo.emojis.get("556289036478578699")} [Patreon](https://www.patreon.com/user?u=7399474) ${funo.emojis.get("549494392860442634")} [Bot Page](https://discordbots.org/bot/332971222897786892)**  ${funo.emojis.get("549716045321994250")} **[Invite](https://discordapp.com/oauth2/authorize?client_id=332971222897786892&scope=bot&permissions=1349790839)**`);
    commandList.setImage("https://i.imgur.com/BwPBeG9.gif")
    message.channel.send(commandList);
  }
}


module.exports.help = {
  command: "Help",
  name: "help",
  category: "util",
  description: "Get a list of commands",
  aliases: [
    "h"
  ]
};
const Discord = require("discord.js");
const config = require("../../config.json");

module.exports.run = async (funo, message, args) => {

  if (!config.ownerid.includes(message.author.id)) {
    return;
  }

  if (args[0] === "funo.token") {
    return;
  }

  function clean(text) {
    if (text.includes(JSON.stringify(config)) || text.includes(config.token)) return;
    if (typeof (text) === "string") {
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    } else {
      return text;
    }
  }

  try {
    const code = args.slice(0).join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string") {
      evaled = require("util").inspect(evaled);
    }

    message.channel.send(new Discord.RichEmbed()
      .setTitle("**:white_check_mark: Success:**")
      .setColor("0x55FF00")
      .addField("📥 **Input:**", `\`\`\`xl\n${code}\n\`\`\``)
      .addField("📤 **Output:**", `\`\`\`xl\n${clean(evaled)}\n\`\`\``)
      .setFooter("© Funo Eval", funo.user.avatarURL)
    );
  } catch (err) {
    message.channel.send(new Discord.RichEmbed()
      .setTitle("**:x:ERROR:**")
      .setColor("0xFF0000")
      .addField("📥 **Input:**", `\`\`\`xl\n${args.join(" ")}\n\`\`\``)
      .addField("📤 **Output:**", `\`\`\`xl\n${clean(err)}\n\`\`\``)
      .setFooter("© Funo | Eval", funo.user.avatarURL)
    );
  }
};

module.exports.help = {
  command: "Eval",
  name: "eval",
  category: "util",
  private: true,
  description: "Secrets"
};
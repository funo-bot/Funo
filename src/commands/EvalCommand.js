const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {

  if (message.author.id != process.env.OWNER_ID) {
    return
  }

  function clean(text) {
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
    );
  } catch (err) {
    message.channel.send(new Discord.RichEmbed()
      .setTitle("**:x:ERROR:**")
      .setColor("0xFF0000")
      .addField("📥 **Input:**", `\`\`\`xl\n${args.join(" ")}\n\`\`\``)
      .addField("📤 **Output:**", `\`\`\`xl\n${clean(err)}\n\`\`\``)
    );
  }
};

module.exports.help = {
  command: "Eval",
  name: "eval",
  category: "util",
  private: true,
  description: "Secrets",
  aliases: [],
  permissions: []
};
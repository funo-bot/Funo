const os = require('os');
const Discord = require('discord.js');
module.exports.run = async (funo, message, args) => {
    if (message.author.id !== "462407582284513280") return undefined;
    if (args[1] == 'funo.token') return undefined;
    try {
        const code = args.slice(1).join(' ');
        var evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        message.channel.send(new Discord.RichEmbed()
            .setTitle('**:white_check_mark: Success:**')
            .setColor('0x55FF00')
            .addField('📥 **Input:**', `\`\`\`xl\n${code}\n\`\`\``)
            .addField('📤 **Output:**', `\`\`\`xl\n${clean(evaled)}\n\`\`\``)
            .setFooter('© Funo Eval', funo.user.avatarURL));

    } catch (err) {
        message.channel.send(new Discord.RichEmbed()
            .setTitle('**:x:ERROR:**')
            .setColor('0xFF0000')
            .addField('📥 **Input:**', `\`\`\`xl\n${args.join(" ")}\n\`\`\``)
            .addField('📤 **Output:**', `\`\`\`xl\n${clean(err)}\n\`\`\``)
            .setFooter('© Funo | Eval', funo.user.avatarURL));
    }
}

function clean(text) {
    if (typeof (text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)); else return text;
}
module.exports.help = {
    command: 'Eval',
    name: "eval"
}
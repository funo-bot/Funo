const Discord = require("discord.js");
const urban = require("urban.js");

module.exports.run = async (funo, message, args) => {

  if (!args[0]) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You must provide a search query")
      .setColor("RED")
    );
  }

  urban(args.slice(0).join(" ")).then((body) => {
    message.channel.send(new Discord.RichEmbed()
      .setTitle(`${body.word} by ${body.author}`)
      .setDescription(body.definition)
      .addField("Example(s)", body.example)
      .addBlankField()
      .addField("Reacts", `:thumbsup: ${body.thumbsUp} | :thumbsdown: ${body.thumbsDown}`, true)
      .addField("URL", body.URL, true)
      .setColor("#1D2439")
    );
  }).catch((rejection) => message.channel.send(new Discord.RichEmbed()
    .setColor("#1D2439")
    .setDescription("Could not find any definition matching " + args.slice(0).join(" "))
    )
  );
};

module.exports.help = {
  command: "Urban",
  name: "urban",
  description: "Search urban dictionary"
};

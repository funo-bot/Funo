const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch();

  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You lack the `MANAGE_MESSAGES` permisson.")
      .setColor("RED")
    ).then(msg => msg.delete(7000));
  }

  if (isNaN(args[0]) || args[0] > 100 || args[0] <= 0) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("Make sure to provide a valid number between **1** and **100** as first argument.")
      .setColor("RED")
    ).then(msg => msg.delete(7000));
  }

  const fetched = await message.channel.fetchMessages({
    limit: args[0]
  });

  const fetchedSize = fetched.size;
  const mentioned = message.mentions.users.first();

  message.channel.send(`Deleting ${fetchedSize} message${fetchedSize !== 1 ? "s" : ""}...`).then(msg => msg.delete(7000));
  await message.channel.bulkDelete(mentioned ? fetched.filter(msg => msg.author.id === mentioned.id) : fetched).catch(error => message.channel.send(`Error: ${error}`));
  message.channel.send(`${mentioned ? fetched.filter(msg => msg.author.id === mentioned.id).size : fetchedSize} out of ${fetchedSize} message${fetchedSize !== 1 ? "s" : ""} matched the given criteria!`).then(msg => msg.delete(7000));
};

module.exports.help = {
  name: "clear",
  category: "moderation",
  description: "Delete X ammount of message in a Discord server.",
  aliases: ["prune", "delete"],
  permissions: ['MANAGE_MESSAGES']
};

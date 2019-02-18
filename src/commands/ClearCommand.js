const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.RichEmbed()
    .setDescription("You lack the `MANAGE_MESSAGES` permisson.")
    .setColor("RED")
  );

  const fetched = await message.channel.fetchMessages({ limit: args[0] });

  message.channel.send(`Deleting ${fetched.size} messages...`).then(msg => msg.delete(3000));
  await message.channel.bulkDelete(fetched).catch(error => message.channel.send(`Error: ${error}`));
  message.channel.send(`Deleted ${fetched.size} successfully!`).then(msg => msg.delete(3000));

};

module.exports.help = {
  name: "clear",
  description: "Delete X ammount of message in a Discord server."
};
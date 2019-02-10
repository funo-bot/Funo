module.exports.run = async (bot, message, args) => {
  //Check if command executor has the right permissions to do this command. 
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have the manage messages permission.")
  //Get the mentioned user, return if there is none.
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
  if (!toMute) return message.channel.send("You did not specify a user to mute!");

  if (toMute.id === message.author.id) return message.channel.sendMessage("You cannot mute yourself.");
  if (toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You cannot mute a member who is higher or has the same role as you.");

  let role = message.guild.roles.find(r => r.name === "Funo Muted")
  if (!role) {
    try {
      role = await message.guild.createRole({
        name: "Funo Muted",
        color: "#e63900",
        permissions: []
      });

      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(role, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false

        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }

  if (toMute.roles.has(role.id)) return message.channel.sendMessage("That user has already been muted!");

  await toMute.addRole(role).then()
  message.channel.send(args[0] + " has been muted");

}

module.exports.help = {
  name: "mute",
  description: "Mute a user in your Discord server"
}
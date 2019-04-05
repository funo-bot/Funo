const Discord = require('discord.js');

module.exports.run = async (funo, message, args) => {

  const user = message.guild.member(message.mentions.members.first() || message.author)

  let kickable = user.kickable ? "✅" : "❎";
  let bannable = user.bannable ? "✅" : "❎";

  let nickname = user.nickname;
  if (nickname) {
    nickname = user.nickname;
  } else {
    nickname = 'None'
  };

  let createdAtRaw = user.user.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");
  let joinedAtRaw = user.joinedAt.toDateString();
  let joinedAt = joinedAtRaw.split(" ");

  let playingStatus = user.presence.game;
  if (playingStatus) {
    playingStatus = user.presence.game.name;
  } else {
    playingStatus = 'None'
  }

  message.channel.send(new Discord.RichEmbed()
    .setTitle(`Information for ${user.user.tag}`)
    .setColor('BLUE')
    .setThumbnail(user.user.displayAvatarURL)
    .addField('Username', user.user.tag, true)
    .addField('Nickname', nickname, true)
    .addField('User ID', user.id, true)
    .addField('Status', user.presence.status, true)
    .addField('Playing Status', playingStatus, true)
    .addField('Account Created On', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
    .addField('Joined This Guild On', `${joinedAt[0]} ${joinedAt[2]} ${joinedAt[1]} ${joinedAt[3]}`, true)
    .addField('Bannable', bannable)
    .addField('Kickable', kickable)
  );
}

module.exports.help = {
  command: "Uinfo",
  name: "uinfo",
  category: "util",
  description: "Get information about a Discord user",
  aliases: [],
  permissions: []
}
const { PlayerManager } = require("discord.js-lavalink");
const fetch = require("node-fetch");
const { URLSearchParams } = require("url");

module.exports.run = async (funo, message, args) => {
  const guildQueue = new Map();

  const nodes = [
    { host: "localhost", port: 2333, password: "test123" }
  ];


  if (!message.member.voiceChannel) {
    return message.channel.send(new Discord.RichEmbed().setDescription("**You are not in a voice channel**"))
  }


  const manager = new PlayerManager(funo, nodes, {
    user: funo.user.id,
    shards: 0
  });

  const track = args.join(" ");
  const [song] = await getSongs(`ytsearch: ${track}`);

  const player = await manager.join({
    guild: message.guild.id,
    channel: message.member.voiceChannel.id,
    host: manager.nodes.first().host
  }, { selfdeaf: true });

  if (!guildQueue.has(message.guild.id)) {
    guildQueue.set(message.guild.id)
  }

  player.play(song.track);

  player.once("end", async data => {
    if (data.reason === "REPLACED") return;
    await manager.leave(message.guild.id);
  });

  return message.channel.send(`Now playing: **${song.info.title}** by *${song.info.author}*`);

  async function getSongs(search) {
    const node = manager.nodes.first();

    const params = new URLSearchParams();
    params.append("identifier", search);

    return fetch(`http://${node.host}:${node.port}/loadtracks?${params.toString()}`, { headers: { Authorization: node.password } })
      .then(res => res.json())
      .then(data => data.tracks)
      .catch(err => {
        console.error(err);
        return null;
      });
  }

}
module.exports.help = {
  command: "Play",
  name: "play",
  category: "music",
  description: "Play some music",
  aliases: ["p"]
};
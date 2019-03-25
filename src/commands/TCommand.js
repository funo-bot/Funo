const fetch = require("node-fetch");
const config = require('../../config.json')
const { URLSearchParams } = require("url");

module.exports.run = async (funo, message, args) => {
  const queue = new Map();

  const voiceChannel = message.member.voiceChannel;

  const player = await funo.manager.join({
    guild: message.guild.id,
    channel: message.member.voiceChannel.id,
    host: config.nodes[0].host
  });

  if (!voiceChannel) {
    return message.channel.send(new Discord.RichEmbed().setDescription("**You are not in a voice channel**"))
  };

  const track = args.join(" ");
  const [search] = await getSongs(`ytsearch: ${track}`);
  const serverQueue = queue.get(message.guild.id)

  player.once("end", async () => {
      serverQueue.songs.shift();
      player.play(search.track)
    })

  return handleVideo(search, message, voiceChannel);

  async function handleVideo(search, message, voiceChannel) {
    const serverQueue = queue.get(message.guild.id);

    if (!serverQueue) {
      const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        songs: [],
        playing: true
      };

      queue.set(message.guild.id, queueConstruct);
      queueConstruct.songs.push(search.track);

      try {
        play(message.guild, queueConstruct.songs[0]);
      } catch (err) {
        console.error(`I could not join the voice channel: ${error}`);
        queue.delete(message.guild.id);
      }
    } else {
      console.log(serverQueue.songs);
      serverQueue.songs.push(search.track);
      return message.channel.send(`✅ **${search.info.title}** has been added to the queue!`);
    }
  }

  async function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    console.log(serverQueue.songs)

    player.play(serverQueue.songs[0])

    return serverQueue.textChannel.send(`Now playing: **${search.info.title}** by *${search.info.author}*`);
  }

  async function getSongs(search) {
    const node = config.nodes[0]

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
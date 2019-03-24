const Discord = require("discord.js");
const { PlayerManager } = require("discord.js-lavalink");
const fetch = require("node-fetch");
const { URLSearchParams } = require("url");

const guildPlayers = new Map();
const guildQueues = new Map();

const nodes = [
  { host: "localhost", port: 2333, password: "test123" }
];

let manager;

module.exports.init = async funo => {
  manager = new PlayerManager(funo, nodes, {
    user: funo.user.id,
    shards: 0
  });
}

module.exports.run = async (funo, message, args) => {
  if (!message.member.voiceChannel) {
    return message.channel.send(new Discord.RichEmbed().setDescription("**You are not in a voice channel**"))
  }

  const guildId = message.guild.id;

  const track = args.join(" ");
  const [song] = await getSongs(`ytsearch: ${track}`);

  if(!guildQueues.has(guildId)) guildQueues.set(guildId, [])

  const queue = guildQueues.get(guildId);

  let player;
  if(!guildPlayers.has(guildId)) {
    player = await manager.join({
      guild: guildId,
      channel: message.member.voiceChannel.id,
      host: manager.nodes.first().host
    }, { selfdeaf: true });

    player.once("end", async data => {
      queue.shift();

      const song = queue[0];
      player.play(song.track);

      return message.channel.send(`Now playing: **${song.info.title}** by *${song.info.author}*`);
    });

    guildPlayers.set(guildId, player);
  } else {
    player = guildPlayers.get(guildId);
  }

  if(queue.length) {
    // Songs in queue

    queue.push(song)
    
    return message.channel.send(`Added to queue: **${song.info.title}** by *${song.info.author}*`);
  } else {
    // No songs in queue
    queue.push(song)

    player.play(song.track);

    return message.channel.send(`Now playing: **${song.info.title}** by *${song.info.author}*`);
  }
}

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

module.exports.help = {
  command: "Play",
  name: "play",
  category: "music",
  description: "Play some music",
  aliases: ["p"]
};
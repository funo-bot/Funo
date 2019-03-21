const fetch = require("node-fetch");
const Discord = require("discord.js");

let currentComic = 0
const promise = fetch('https://xkcd.com/info.0.json').then(async res => {
  currentComic = (await res.json()).num
})

async function getComic(message, num = 0) {
  const body = await fetch(`https://xkcd.com/${num === 0 ? '' : `${num}/`}info.0.json`)
    .then(res => res.json())

  if (num === 0) currentComic = body.num

  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  message.channel.send(new Discord.RichEmbed()
    .setTitle(`${body.title} - ${body.num}`)
    .setColor(color)
    .setImage(body.img)
  );
}

module.exports.run = async (funo, message, args) => {
  await promise;

  if (args.length) {
    if (typeof args[0] === 'string' && args[0].toLowerCase() === 'latest') return getComic(message)
    else {
      const num = parseInt(args[0])
      if (num < 1 || num > currentComic || isNaN(num)) return

      return getComic(message, num)
    }
  } else {
    const num = Math.round(Math.random() * (currentComic - 1) + 1)
    return getComic(message, num)
  }
};

module.exports.help = {
  command: "xkcd",
  name: "xkcd",
  category: "fun",
  description: "Get xckd comics.",
  aliases: [
    "comic"
  ]
};
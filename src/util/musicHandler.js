/*
Created by: Suremeo
Date: 3/1/2019, 10:05 PM
*/
var YTDL = require("ytdl-core")
const EventEmitter = require('events');
const Discord = require("discord.js")
module.exports = class extends EventEmitter {
    constructor(guild, channel) {
        super()

        this.funo = guild.client
        this.guild = guild
        this.channel = channel
        this.queue = []
        this.init()
    }

    Skip() {
        if (this.dispatcher !=null) {
            this.dispatcher.end()
        }
    }
    Stop() {
        this.queue = [null]
        if (this.dispatcher != null) {
            this.dispatcher.end()
        }
    }
    set Channel(channel) {
        this.channel = channel
    }

    get Channel() {
        return this.channel
    }

    get nowPlaying() {
        if (!this.queue[0]) return false
        var minutes = "0" + Math.floor(this.queue[0].data.length_seconds / 60);
        var seconds = "0" + (this.queue[0].data.length_seconds - minutes * 60);

        var minutestwo = "0" + Math.floor(this.dispatcher.time / 1000 / 60);
        var secondstwo = "0" + (Number(`${this.dispatcher.time / 1000}`.split(".")[0]) - minutestwo * 60)

        return {
            "url": this.queue[0].url,
            "data": this.queue[0].data,
            "song_length": minutes.substr(-2) + ":" + seconds.substr(-2),
            "song_thru": minutestwo.substr(-2) + ":" + secondstwo.substr(-2),
        }
    }

    async _playNext() {
        this.queue.shift();
        if (this.queue[0]) {
            var minutes = "0" + Math.floor(this.queue[0].data.length_seconds / 60);
            var seconds = "0" + (this.queue[0].data.length_seconds - minutes * 60);
            this.connection = await this.channel.join()
            this.dispatcher = this.connection.playStream(YTDL(this.queue[0].url, {filter: "audioonly"}))
            this.dispatcher.on("end", async () => {
                this.dispatcher = null
                this._playNext()
            })
        } else {
            setTimeout(async () => {
                try {
                    if (this.dispatcher==null) this.channel.leave()
                } catch(err){}
            },300000)
        }
    }

    async addSong(song_url, textchannel, cb) {
        try {
            this.emit("addSong", {
                data: await YTDL.getInfo(song_url),
                cb: cb,
                channel: textchannel.id
            })
        } catch(err) {
            cb(err)
        }
        // console.log(await YTDL.getInfo(song_url))
    }

    async init() {
        this.connection = await this.channel.join()
        this.on("addSong", async (data, textchannel, cb) => {
                let song_data = data.data
                var minutes = "0" + Math.floor(song_data.length_seconds / 60);
                var seconds = "0" + (song_data.length_seconds - minutes * 60);
            if (this.queue[0]) {
                try {
                    this.queue.push({url: song_data.video_url, data: song_data, cb: cb, channel: textchannel, time: minutes.substr(-2) + ":" + seconds.substr(-2)})
                    data.cb(`<:t:550084023775395840><:t:550084023775395840><:t:550084023775395840><:t:550084023775395840>**Added to queue**\n**[${song_data.title.replace(/\[/g, '').replace(/\]/g, '').substr(0, 43)}...](${song_data.video_url})**\n<:t:550084023775395840><:t:550084023775395840><:t:550084023775395840><:t:550084023775395840> <:t:550084023775395840>\`${minutes.substr(-2) + ":" + seconds.substr(-2)}\``)
                } catch(err) {data.cb(err)}
            } else {
                try{
                    this.connection = await this.channel.join()
                    this.dispatcher = this.connection.playStream(YTDL(song_data.video_url, {filter: "audioonly"}))
                    this.dispatcher.on("end", async () => {
                        this.dispatcher = null
                        this._playNext()
                    })
                    this.queue.push({url: song_data.video_url, data: song_data, cb: cb, channel: textchannel, time: minutes.substr(-2) + ":" + seconds.substr(-2)})
                    data.cb(`<:t:550084023775395840> <:t:550084023775395840> <:t:550084023775395840><:t:550084023775395840>**Now playing**\n**[${song_data.title.replace(/\[/g, '').replace(/\]/g, '').substr(0, 43)}...](${song_data.video_url})**\n<:t:550084023775395840><:t:550084023775395840><:t:550084023775395840><:t:550084023775395840> <:t:550084023775395840>\`${minutes.substr(-2) + ":" + seconds.substr(-2)}\``)
                } catch(err) { data.cb(err) }}
        })
    }
}
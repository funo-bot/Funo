module.exports.run = async (funo, message, args) => {
    message.channel.send("The command handler works!");
}

module.exports.help = {
    name: "test"
}

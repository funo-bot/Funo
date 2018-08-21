module.exports.run = async (funo, message) => {
    message.channel.send('The command handler works!');
}

module.exports.help = {
    command: "Test",
    name: "test"
}

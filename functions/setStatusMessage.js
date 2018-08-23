module.exports = async (funo) => {
    setInterval(function () {
        var messages = [
            'Coming soon!',
            'Runs on Ubuntu 18.10!',
            '2GB of ram 😛',
            'I love you, you love me! ❤',
            'Loving ' + funo.guilds.size + 'servers!',
            'making ' + funo.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + 'people happy!',
            'Come play 😄'
        ];
        funo.user.setActivity(messages[Math.floor(Math.random() * messages.length)]);
    }, 20000);
}

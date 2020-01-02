const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args) => {

    if (!message.member.voiceChannel) return message.channel.send("Please connect to voice channel first!");

    if (message.guild.me.voiceChannel) return message.channel.send("The bot is already connected to other voice channel!");

    if (!args[0]) return message.channel.send("Please give music link from YouTube u want to play!");

    var validate = await ytdl.validateURL(args[0]);

    if (!validate) return message.channel.send("The link you entered is not valid!");

    var info = await ytdl.getInfo(args[0]);

    const streamOptions = { seek: 0, volume: 1 };

    let voiceConnection = message.member.voiceChannel.join()
        .then(voiceConnection => {
            const stream = ytdl(args[0], { filter: 'audioonly' });
            const streamDispatcher = voiceConnection.playStream(stream, streamOptions);
        })
        .catch(console.error);

    message.channel.send(`Now playing: ${info.title}`);

}

module.exports.help = {
    name: "play",
    description: "Play Music"
}

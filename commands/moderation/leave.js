module.exports.run = async (bot, message, args) => {

    if (!message.member.voiceChannel) return message.channel.send("You aren't in the voice channel!");

    if (!message.guild.me.voiceChannel) return message.channel.send("The bot is not connected to voice channel!");

    if (message.guild.me.voiceChannelID != message.member.voiceChannelID) return message.channel.send("Please connect to the same voice channel where bot is!");

    message.guild.me.voiceChannel.leave();

    message.channel.send("I leaved the voice channel!");    
}

module.exports.help = {
    name: "leave",
    description: "Leave voice channel"
}

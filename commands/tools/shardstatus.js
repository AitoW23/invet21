const Discord = require('discord.js');

module.exports = {
    name: "status",
    description: "Näyttää kaikki komennot",
    run: (client, message, args) => {

        let values = await client.shard.broadcastEval(`
        [
            this.shard.id,
            this.guilds.size
        ]
    `);
    // Make a final string which will be sent in the channel
    let finalString = "**SHARD STATUS**\n\n";
    // For each shard data
    values.forEach((value) => {
        // Add the shard infos to the final string
        finalString += "• SHARD #"+value[0]+" | ServerCount: "+value[1]+"\n";
    });
    // Send the final string in the channel
    message.channel.send(finalString);
    }
}
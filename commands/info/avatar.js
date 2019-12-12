const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Näyttää jäsenen profiilikuvan",
    run: async (client, message, args) => {
    let msg = await message.channel.send("Wait a second..");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("0099ff")
        .setTitle("Avatar")
        .setDescription("[Avatar URL link]("+mentionedUser.displayAvatarURL+")")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');

        message.channel.send(embed)
      
         msg.delete();
}};
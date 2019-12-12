const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "Näyttää kaikki komennot",
    run: (client, message, args) => {

const embedhelp = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('List of Commands')
  .setDescription("There is some commands. Only Admins and Moderators can use moderation commands")
  .addField("**General Commands**", "`-help`, `-usage`, `-ping`, `-uptime`, `-report`")
  .addField("**User/Info Commands**", "`-avatar`, `-userinfo`, `-serverinfo`")
  .addField("**Music Commands**", "`-play`, `-leave`")
	.addField("**Funny Commands**", "`-meme`, `-dog`, `-cat`, `-im`")
  .addField("**Experimental Commands**", "`-csgoranks`, `-image`")
  .addField("**Test commands for Coinsystem**", "`-coinflip`, `-formatcoins`, `-resetcoins`, `-mycoins`, `-daily`, `-mylevel`, `-buylevels`")
  .addField("**Moderation Commands**", "`-kick`, `-ban`, `-warn`, `-purge`")
	.setTimestamp()
	.setFooter('Made by GhostSlayer#7959', 'https://cdn.ghostslayer.tk/web-assets/images/ghostslayer.png');
     message.channel.send(embedhelp);
    }
}
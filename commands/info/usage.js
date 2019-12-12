const Discord = require('discord.js');

module.exports = {
    name: "usage",
    description: "Näyttää kaikki komennot",
    run: (client, message, args) => {

      if(!args[0]){
        return message.channel.send("Please provide a command!")
          .then(m => m.delete(5000));
      }
      
      var com = args[0];
      
      if(com == "ban"){
        const embedban = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for ban command')
        .addField("**Usage**", "-ban [@User] [Reason]")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
         message.channel.send(embedban);
      }
      else if(com == "kick"){        
        const embedkick = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for kick command')
        .addField("**Usage**", "-kick [@User] [Reason]")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
         message.channel.send(embedkick);
      }
      else if(com == "purge" || com == "clear" || com == "nuke"){
        const embedpurge = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for '+com+' command')
        .addField("**Usage**", "-"+com+" [message amount]")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
         message.channel.send(embedpurge);
      }
      else if(com == "report"){
        const embedreport = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for warn command')
        .addField("**Usage**", "-report [@User] [Reason]")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
         message.channel.send(embedreport);
      }
      else if(com == "warn"){
        const embedwarn = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for warn command')
        .addField("**Usage**", "-warn [@User] [Reason]")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
         message.channel.send(embedwarn);
      }
      else if(com == "avatar"){
        const embedavatar = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for avatar command')
        .addField("**Usage**", "-avatar [@User]")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
         message.channel.send(embedavatar);
      }
      else if(com == "userinfo"){
        const embeduserinfo = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for userinfo command')
        .addField("**Usage**", "-userinfo [@User]")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
         message.channel.send(embeduserinfo);
      }
      else if(com == "play"){
        const embedplay = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for play command')
        .addField("**Usage**", "-play [Youtube Link]")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
         message.channel.send(embedplay);
      }
      else if(com == "image"){
        const embedimage = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for image command')
        .addField("**Usage**", "-image [Name]")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
         message.channel.send(embedimage);
      }
      else if(com == "coinflip"){
        const embedcoinflip = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for coinflip command')
        .addField("**Usage**", "-coinflip [Heads or Tails] [Coin amount]")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
         message.channel.send(embedcoinflip);
      }
      else if(com == "csgoranks"){
        const embedranks = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for csgoranks command')
        .addField("**Usage**", "-csgoranks [1-18]")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
         message.channel.send(embedranks);
      }
      else if(com == "buylevels"){
        const embedlvl = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for buylevels command')
        .addField("**Usage**", "-buylevels [Level amount]")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
         message.channel.send(embedlvl);
      }
      else if(com == "im"){
        const embedim = new Discord.RichEmbed()
        .setColor('#0099ff')
	      .setTitle('Usage for im command')
        .addField("**Usage**", "-im [text]")
        .setTimestamp()
        .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
         message.channel.send(embedim);
      }
      else{
        message.channel.send("Please provide valid command or that command doesn't have any usage!")
      }
    }
}
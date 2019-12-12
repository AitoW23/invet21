var cheerio = require("cheerio");
var request = require("request");

var Discord = require('discord.js');
var client = new Discord.Client();

module.exports = {
    name: "image",
    description: "...",
    run: (client, message, args) => {

      var parts = message.content.split(" ");
      
      if (parts[0] === "-image") {
        image(message, parts);
      }
    
}}

function image(message, parts) {
  
      var search = parts.slice(1).join(" ");
      
      if (message.content.startsWith("-image")){
          message.delete({timeout: 1000});
      }
  
      const err1 = new Discord.RichEmbed()
	        .setColor('#ff0000')
	        .setTitle('ERROR 404')
          .addField("**Image Not Found**", "I didn't find image by your choice!\nPlease give another image choice.")
	        .setTimestamp()
	        .setFooter('Made by GhostSlayer#7959', 'https://cdn.ghostslayer.tk/web-assets/images/ghostslayer.png');
  
      const err2 = new Discord.RichEmbed()
	        .setColor('#ff0000')
	        .setTitle('ERROR')
          .addField("**URL LENGTH**", "URL LENGTH ERROR!")
	        .setTimestamp()
	        .setFooter('Made by GhostSlayer#7959', 'https://cdn.ghostslayer.tk/web-assets/images/ghostslayer.png');
  
      var options = {
        url: "https://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
          "accept": "text/html",
          "User-Agent": "Chrome"
        }
      };
        
      request(options, function(error, response, responseBody) {
        if (error) {
          message.channel.send(err1)
        }
        $ = cheerio.load(responseBody);
        
        var links = $(".image a.link");
        
        var urls = new Array(links.legth).fill(0).map((v, i) => links.eq(i).attr("href"));
        
        if (!urls.length) {
          message.channel.send(err2)
        }
        
        const embedimg = new Discord.RichEmbed()
	        .setColor('#0099ff')
	        .setTitle("Given name: "+search)
          .setDescription('There may be some latency with loading the image')
          .setImage( urls[0] )
	        .setTimestamp()
	        .setFooter('Made by GhostSlayer#7959', 'https://cdn.ghostslayer.tk/web-assets/images/ghostslayer.png');
        message.channel.send(embedimg);
      });
}
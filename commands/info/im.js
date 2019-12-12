const Discord = require('discord.js');

module.exports = {
    name: "im",
    description: "Näyttää kaikki komennot",
    run: (client, message, args) => {
      
      if(!args[0]){
        return message.channel.send("Please provide some text!");
      }
      
      var parts = message.content.split(" ");
      
      if (parts[0] === "-im") {
        im(message, parts);
      }

      function im(message, parts) {
        var some = parts.slice(1).join(" ");
      
        message.channel.send("Yep, you are "+some+"!");
    }
}}
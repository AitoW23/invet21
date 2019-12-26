const Discord = require('discord.js');

module.exports = {
  name: "eval",
  description: "IDK",
  run: async (client, message, args) => {
    if (!args[0]) {
      if (message.author.id === "267386908382855169") {
        try {
          message.channel.send(eval(args.join(" ")) + "");
        } catch (e) {
          message.channel.send(e.toString());
        }
      }
    }
  }
};
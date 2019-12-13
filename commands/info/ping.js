const Discord = require("discord.js");
function ping(host, pong) {

var started = new Date().getTime();

var http = new XMLHttpRequest();

http.open("GET", "https://" + host, /*async*/true);
http.onreadystatechange = function() {
  if (http.readyState == 4) {
    var ended = new Date().getTime();

    var milliseconds = ended - started;

    if (pong != null) {
      pong(milliseconds);
    }
  }
};
try {
  http.send(null);
} catch(exception) {
}

};

module.exports = {
  name: "ping",
  description: "Näyttää kaikki komennot",
  run: async (client, message, args) => {

if (!args[0]) {
const exampleEmbed = new Discord.RichEmbed()
  .setColor("#0099ff")
  .setTitle("Loading...")

const m = await message.channel.send(exampleEmbed);
const noobEmbed = new Discord.RichEmbed()
.setColor("#0099ff")
.setTitle("Ping")
.setDescription(`Message Round Trip: \`${m.createdTimestamp - message.createdTimestamp}ms\`  \nDiscord Latency: \`${Math.round(client.ping)}ms\` `)
.setTimestamp()
.setFooter('Made by Drivet Development');

 m.edit(noobEmbed);
  }
}
}
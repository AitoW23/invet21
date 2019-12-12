const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjEzMzczNTk3MTc1NTEzMTE0.XfJTMQ.kwlK84_dhC5Xy_Zx9L49wh4XOes');

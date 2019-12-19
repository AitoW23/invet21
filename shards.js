const { Client, ShardingManager } = require('discord.js');
var http = require('http');
setInterval(() => {
    http.get('http://[app-name].herokuapp.com/');
}, 1000*60*15);

const client = new Client({
    disableEveryone: true
  });
const shard = new ShardingManager('./bot.js', {
  token: process.env.BOT_TOKEN,
  autoSpawn: true
});

shard.spawn(3);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id} is rebooted`));

const { Client, ShardingManager } = require('discord.js');
const PREFIX = process.env.PREFIX;

const client = new Client({
    disableEveryone: true
  });
const shard = new ShardingManager('./bot.js', {
  token: process.env.BOT_TOKEN,
  autoSpawn: true
});

client.on('ready', () => { //Startup
    console.log(`Hi, ${client.user.username} is now online and connected to database!`);
    client.user.setStatus('online');
    client.user.setActivity(`slaybot.tk | -help | Shard: ${shard.id}`, {
      type: 'playing'
    });
  });

shard.spawn(5);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/5`));
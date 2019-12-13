const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./bot.js', {
  token: process.env.BOT_TOKEN,
  autoSpawn: true
});

shard.spawn(5);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/5`));


client.on('ready', () => { //Startup
    console.log(`Hi, ${client.user.username} is now online and connected to database!`);
    client.user.setStatus('online');
    client.user.setActivity(`slaybot.tk | -help | Shard: ${shard.id}`, {
      type: 'playing'
    });
  });
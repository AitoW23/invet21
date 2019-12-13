const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./bot.js', {
  token: process.env.BOT_TOKEN,
  autoSpawn: true
});

shard.spawn(5);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/5`));
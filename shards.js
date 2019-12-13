const { Client, ShardingManager } = require('discord.js');
const PREFIX = process.env.PREFIX;

const client = new Client({
    disableEveryone: true
  });
const shard = new ShardingManager('./bot.js', {
  token: process.env.BOT_TOKEN,
  autoSpawn: true
});

shard.spawn(20);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id} of 20 is Online`));
const { Client, ShardingManager } = require('discord.js');
const PORT = process.env.port || 3000;
const express = require('express');
const app = express();
app.listen(PORT, (response) => {
    console.log(`Our app is running on port ${ PORT }`);
});

const client = new Client({
    disableEveryone: true
  });
const shard = new ShardingManager('./bot.js', {
  token: process.env.BOT_TOKEN,
  autoSpawn: true
});

shard.spawn(3);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id} is rebooted`));

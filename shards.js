const { Client } = require('discord.js');
const { ShardingManager } = require('kurasuta');
const { join } = require('path');
const PREFIX = process.env.PREFIX;
const sharder = new ShardingManager(join(__dirname, 'bot'), {
  token: process.env.BOT_TOKEN,
  autoSpawn: true
});

const client = new Client({
    disableEveryone: true
  });

sharder.spawn(21);

sharder.on('launch', sharder => console.log(`[SHARD] Shard ${sharder.id} of 20 are now Online`));
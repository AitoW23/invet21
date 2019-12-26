const { Client, ShardingManager } = require('discord.js');
const mysql = require('mysql');
const express = require('express');
const app = express();

const client = new Client({
    disableEveryone: true
  });
const shard = new ShardingManager('./bot.js', {
  token: process.env.BOT_TOKEN,
  autoSpawn: true
});

shard.spawn(21);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id} is rebooted`));

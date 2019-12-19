const { Client, ShardingManager } = require('discord.js');
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.port);
setInterval(() => {
  http.get(`https://bot-slaybot.herokuapp.com`);
}, 280000);

const client = new Client({
    disableEveryone: true
  });
const shard = new ShardingManager('./bot.js', {
  token: process.env.BOT_TOKEN,
  autoSpawn: true
});

shard.spawn(3);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id} is rebooted`));

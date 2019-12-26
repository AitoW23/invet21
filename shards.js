const { Client, Collection, Discord } = require("discord.js");
const client = new Client({ disableEveryone: true });
const mysql = require('mysql');
const PORT = process.env.port || 3000;
const express = require('express');
const app = express();
app.listen(PORT, (response) => {
    console.log(`Our app is running on port ${ PORT }`);
});

var con = mysql.createConnection({
  host: process.env.dbhost,
  user: process.env.dbuser,
  password: process.env.dbpass,
  database: process.env.dbuser
});

con.connect(err => {
  if(err) throw err;
  if(err) console.log('Failed to boot the database');
});

client.on('ready', () => { //Startup
  client.user.setStatus('online');
  client.user.setActivity(`slaybot.tk | -help | Shard ${shard.id}`, {
    type: 'playing'
  });
});

const shard = new ShardingManager('./bot.js', {
  token: process.env.BOT_TOKEN,
  autoSpawn: true
});

shard.spawn(3);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id} is rebooted`));

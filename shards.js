const { Client, ShardingManager } = require('discord.js');
const mysql = require('mysql');
const express = require('express');
const app = express();

var con = mysql.createConnection({
  host: process.env.dbhost,
  user: process.env.dbuser,
  password: process.env.dbpass,
  database: process.env.dbuser
});

con.connect(err => {
  if(err) throw err;
  console.log("Error connecting the database")
  client.destroy()
});

const client = new Client({
    disableEveryone: true
  });
const shard = new ShardingManager('./bot.js', {
  token: process.env.BOT_TOKEN,
  autoSpawn: true
});

shard.spawn(21);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id} is rebooted`));

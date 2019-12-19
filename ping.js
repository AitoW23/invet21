const { Client, Collection, Discord } = require("discord.js");

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});

client.login(process.env.BOT_TOKEN)

const Discord = require('discord.js');
const mysql = require('mysql');

var coins = 0;

module.exports = {
    name: "formatcoins",
    description: "...",
    run: (client, message, args) => {
      
      var id = message.author.id;
      
      con.query(`SELECT * FROM userCoins WHERE userID = '${id}'`, (err, rows) => {
        if(err) throw err;
      
        if(!rows[0]){
          con.query(`INSERT INTO userCoins (userID, coins) VALUES ('${id}', ${coins})`);
          message.channel.send("You have succesfully formatted your coins!");
        }else{
          message.channel.send("You already have formatted your coins!");
        }
      });
    }
}
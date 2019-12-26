const Discord = require('discord.js');
const mysql = require('mysql');

var dailycoins = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
var date1 = new Date();
var datenow = date1.getDate()+"."+date1.getMonth()+"."+date1.getFullYear();
console.log(datenow);

module.exports = {
    name: "daily",
    description: "...",
    run: (client, message, args) => {

      var con = mysql.createConnection({
        host: process.env.dbhost,
        user: process.env.dbuser,
        password: process.env.dbpass,
        database: process.env.dbuser
      });
      
      con.connect(err => {
        if(err) throw err;
      });
      
      var id = message.author.id;
      
      con.query(`SELECT * FROM userCoins WHERE userID = '${id}'`, (err, rows) => {
        if(err) throw err;
        
        var date = rows[0].date;
        
        var datex = JSON.stringify(date);
        
        var coinsx = rows[0].coins;
        
        var dailyc = parseInt(dailycoins);
        
        var mcoins = coinsx + dailyc;
        
        var daten = JSON.stringify(datenow);
        
        if(datex == daten){
          message.channel.send("You already have taken daily coins!");
        }else{
          con.query(`UPDATE userCoins SET date = ${daten} WHERE userID = ${id}`);
          con.query(`UPDATE userCoins SET coins = ${mcoins} WHERE userID = ${id}`);
          message.channel.send("You have succesfully added "+dailycoins+" coins to your coins!")
      }
    });
}
}
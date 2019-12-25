const Discord = require('discord.js');
const mysql = require('mysql');

var coins = 0;

module.exports = {
    name: "mycoins",
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
        
        if(!rows[0]) return message.channel.send("This user has no coins on record!\nYou have to use -formatcoins to have a record!");
        
        var coinsx = rows[0].coins;
        
        const embedcoins = new Discord.RichEmbed()
	        .setColor('#0099ff')
	        .setTitle('Your coins')
          .addField("**Coins**", coinsx)
          .setTimestamp()
          .setFooter('Made by Drivet Development');
            message.channel.send(embedcoins)
        });     
  }
}
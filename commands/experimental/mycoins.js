const Discord = require('discord.js');
const mysql = require('mysql');

var coins = 0;

module.exports = {
    name: "mycoins",
    description: "...",
    run: (client, message, args) => {
      
      var con = mysql.createConnection({
        host: "remotemysql.com",
        user: "CrS7XeHuCc",
        password: "IdoUOupxrX",
        database: "CrS7XeHuCc"
      });

      con.connect(err => {
        if(err) throw err;
        return message.channel.send("Database OK!")
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
          .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
            message.channel.send(embedcoins)
        });     
  }
}
const Discord = require("discord.js");
const mysql = require("mysql");

var lvl = 0;

module.exports = {
  name: "mylevel",
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
      if(err) console.log('Failed to boot the database');
    });
    
    var id = message.author.id;

    con.query(`SELECT * FROM userCoins WHERE userID = '${id}'`, (err, rows) => {
      if (err) throw err;

      let target =
        message.mentions.users.first() ||
        message.guild.members.get(args[1]) ||
        message.author;

      var level = rows[0].level;

      if (level != 0 && level < 0) {
        message.channel.send("This user has no levels on record!");
        con.query(
          `UPDATE userCoins SET level = '${lvl}' WHERE userID = '${id}'`
        );
        var level1 = rows[0].level;
        return message.channel.send(
          "Setup for levels is done!\nYour level is now " + level1 + "."
        );
      }
      
      var tierNo = 0;
      
      if(level >= 1 && level < 2){
        tierNo = 1;
      }
      else if(level >= 2 && level < 5){
        tierNo = 2;
      }
      else if(level >= 5 && level < 10){
        tierNo = 3;
      }
      else if(level >= 10 && level < 25){
        tierNo = 4;
      }
      else if(level >= 25 && level < 50){
        tierNo = 5;
      }
      else if(level >= 50 && level < 100){
        tierNo = 6;
      }
      else if(level >= 100){
        tierNo = 7
      }
      
      con.query(`SELECT * FROM tiers WHERE tierNumber = '${tierNo}'`, (err, rows) => {
        if (err) throw err;
        
        var tier = rows[0].tier;
                       
        if(tierNo < 7){
          var tierUpNo = tierNo + 1;
          
          con.query(`SELECT * FROM tiers WHERE tierNumber = '${tierUpNo}'`, (err, rows) => {
            if (err) throw err;
            
            var tierUp = rows[0].tier;
            var reqlvl = rows[0].reqLevel;
            
            const embedlevels = new Discord.RichEmbed()
            .setColor("#0099ff")
            .setTitle("Your level")
            .addField("**Level**", level)
            .addField("**Level Tier**", tier)
            .addField("**Upcoming Tier**", tierUp+" (at level "+reqlvl+")")
            .setTimestamp()
            .setFooter('Made by Drivet Development');
            message.channel.send(embedlevels);
          });
        }
        else{
            con.query(`SELECT * FROM tiers WHERE tierNumber = '${tierUpNo}'`, (err, rows) => {
            if (err) throw err;
            
            const embedlevels2 = new Discord.RichEmbed()
            .setColor("#0099ff")
            .setTitle("Your level")
            .addField("**Level**", level)
            .addField("**Level Tier**", tier)
            .setTimestamp()
            .setFooter('Made by Drivet Development');
            message.channel.send(embedlevels2);
          });
        }
      });
    });
  }
}

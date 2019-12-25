const Discord = require('discord.js');
const mysql = require('mysql');

var lvl = 0;

module.exports = {
    name: "buylevels",
    description: "...",
    run: (client, message, args) => {
      
      if(!args[0]){
        return message.channel.send("Please provide amount of levels to buy!")
      }
      
      var amount = args[0];
      
      var amt = parseInt(amount);
      
      var coins = amt * 100
      
      var id = message.author.id;
      
      con.query(`SELECT * FROM userCoins WHERE userID = '${id}'`, (err, rows) => {
        if(err) throw err;
        
        let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;
        
        var level = rows[0].level;
        
        if(level != 0 && level < 1){
          message.channel.send("This user has no levels on record!");
          con.query(`UPDATE userCoins SET level = '${lvl}' WHERE userID = '${id}'`);
          var level = rows[0].level;
          return message.channel.send("Setup for levels is done!\nYour level is now "+level+".");
        } 
        
        var coinsx = rows[0].coins;
        
        var coinsxx = parseInt(coinsx)
        
        var levelx = parseInt(level);
        
        var lvlx = levelx + amt;
        
        var cx = coinsxx - coins;
        
        if(amt <= 0){
          return message.channel.send("Please provide right amount of levels to buy (more than 0, etc. 1 or 2)!");
        }else if(amt == 1){
          if(coinsxx < coins){
            return message.channel.send("You don't have enough coins to buy any levels!");
          }
          else{
            con.query(`UPDATE userCoins SET level = '${lvlx}' WHERE userID = '${id}'`);
            con.query(`UPDATE userCoins SET coins = '${cx}' WHERE userID = '${id}'`);
          }
        }else{
          if(coinsxx < coins){
            return message.channel.send("You don't have enough coins to buy "+amount+" levels!");
          }
          else{
            con.query(`UPDATE userCoins SET level = '${lvlx}' WHERE userID = '${id}'`);
            con.query(`UPDATE userCoins SET coins = '${cx}' WHERE userID = '${id}'`);
          }
        }
        
          const embedlevels = new Discord.RichEmbed()
	        .setColor('#0099ff')
	        .setTitle('Amount of your bought levels')
          .addField("**Levels**", amount)
          .addField("**Used coins**", coins)
          .setTimestamp()
          .setFooter('Made by Drivet Development');
            message.channel.send(embedlevels)
        });     
  }
}
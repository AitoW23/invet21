const Discord = require('discord.js');
const mysql = require('mysql');

var coins = 0;

module.exports = {
    name: "coinflip",
    description: "...",
    run: (client, message, args) => {

      var con = mysql.createConnection({
        host: `process.env.dbhost`,
        user: `process.env.dbuser`,
        password: `process.env.dbpass`,
        database: `process.env.dbuser`
      });
      
      const embederr = new Discord.RichEmbed()
	        .setColor('#ff0000')
	        .setTitle('Coinflip')
          .addField("**Wrong input**", "Please choose **heads** or **tails** before coinflipping!")
	        .setTimestamp()
	        .setFooter('Made by GhostSlayer#7959', 'https://cdn.ghostslayer.tk/web-assets/images/ghostslayer.png');
      
      const embederr2 = new Discord.RichEmbed()
	        .setColor('#ff0000')
	        .setTitle('Coinflip')
          .addField("**Wrong input**", "Please give amount of coins to use in coinflipping!")
	        .setTimestamp()
	        .setFooter('Made by GhostSlayer#7959', 'https://cdn.ghostslayer.tk/web-assets/images/ghostslayer.png');
      
      const embederr3 = new Discord.RichEmbed()
	        .setColor('#ff0000')
	        .setTitle('Coinflip')
          .addField("**Wrong input**", "Please give valid amount of coins to coinflip!")
	        .setTimestamp()
	        .setFooter('Made by GhostSlayer#7959', 'https://cdn.ghostslayer.tk/web-assets/images/ghostslayer.png');
      
      if(args[1].startsWith(1)){
      }
      else if(args[1].startsWith(2)){
      }
      else if(args[1].startsWith(3)){
      }
      else if(args[1].startsWith(4)){
      }
      else if(args[1].startsWith(5)){
      }
      else if(args[1].startsWith(6)){
      }
      else if(args[1].startsWith(7)){
      }
      else if(args[1].startsWith(8)){
      }
      else if(args[1].startsWith(9)){
      }
      else{
        return message.channel.send(embederr3);
      }
      
      if(!args[0]){
        return message.channel.send(embederr);
      }
      if(!args[1]){
        return message.channel.send(embederr2);
      }
      else{
        var choice = args[0];
        var coinsamount = args[1];
        var coinsamt = parseInt(coinsamount);
        
        if (choice == 'heads' || choice == 'h' || choice == 'head') {
            choice = 'Heads';
        }

        else if (choice == 'tails' || choice == 't' || choice == 'tail') {
            choice = 'Tails';
        }else
          return message.channel.send(embederr)
        }
    
        
        var coins = [
          "Heads",
          "Tails"
        ];
          var coinz = coins[Math.floor(Math.random() * coins.length)];
        
          var con = mysql.createConnection({
            host: `process.env.dbhost`,
            user: `process.env.dbuser`,
            password: `process.env.dbpass`,
            database: `process.env.dbuser`
          });
        
          var id = message.author.id;
      
          con.query(`SELECT * FROM userCoins WHERE userID = '${id}'`, (err, rows) => {
            if(err) throw err;
          
            var coinshave = rows[0].coins;
          
            const errcoins = new Discord.RichEmbed()
	          .setColor('#ff0000')
	          .setTitle('Coinflip')
            .addField("**Coins**", "You don't have enough coins\nto coinflip with that amount!")
            .setTimestamp()
            .setFooter('Made by Drivet Development');
          
            if(coinsamt > coinshave){
              message.channel.send(errcoins);
            }else{
              var coinslose = rows[0].coins - coinsamt;
            var coinswon = rows[0].coins + coinsamt;
        
            const embedlose = new Discord.RichEmbed()
	          .setColor('#ff0000')
	          .setTitle('Coinflip')
            .addField("**Your bet**", choice)
            .addField("**Your coins to use**", coinsamount)
            .addField("**Bot flipped**", coinz)
            .addField("**Final**", "You lose!")
            .addField("**Coins**", "You lose "+coinsamount+" coins!")
            .setTimestamp()
            .setFooter('Made by Drivet Development');
          
            const embedlose2 = new Discord.RichEmbed()
	          .setColor('#ff0000')
	          .setTitle('Coinflip')
            .addField("**Your bet**", choice)
            .addField("**Your coins to use**", coinsamount)
            .addField("**Bot flipped**", coinz)
            .addField("**Final**", "You lose!")
            .addField("**Coins**", "You lose "+coinsamount+" coins!")
            .setTimestamp()
            .setFooter('Made by Drivet Development');
      
            const embedwin = new Discord.RichEmbed()
	          .setColor('#00ff00')
	          .setTitle('Coinflip')
            .addField("**Your bet**", choice)
            .addField("**Your coins to use**", coinsamount)
            .addField("**Bot flipped**", coinz)
            .addField("**Final**", "You won!")
            .addField("**Coins**", "You got "+coinsamount+" more coins!")
            .setTimestamp()
            .setFooter('Made by Drivet Development');
          
            const embedwin2 = new Discord.RichEmbed()
	          .setColor('#00ff00')
	          .setTitle('Coinflip')
            .addField("**Your bet**", choice)
            .addField("**Your coins to use**", coinsamount)
            .addField("**Bot flipped**", coinz)
            .addField("**Final**", "You won!")
            .addField("**Coins**", "You got "+coinsamount+" more coins!")
            .setTimestamp()
            .setFooter('Made by Drivet Development');
          
            if (choice != coinz) {
              message.channel.send(embedlose);
              con.query(`UPDATE userCoins SET coins = ${coinslose} WHERE userID = ${id}`)
            } else {
              message.channel.send(embedwin);
              con.query(`UPDATE userCoins SET coins = ${coinswon} WHERE userID = ${id}`)
            };
          }
        });
      }
}
exports.run = async (client, message, args) => {
    let ownerID = "400703871586886914";
    if (message.author.id == ownerID) {
    client.destroy()
    .then(() => client.login('YOUR-BOT-TOKEN'))
    .then(() => message.channel.send(`The bot was successfully restarted!`));
    }
    else {
      return;
    } 
  }

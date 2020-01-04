exports.run = async (client, message, args) => {
    let ownerID = "304264050647498772";
    if (message.author.id == ownerID) {
    client.destroy()
    .then(() => client.login('NjM2NTE2MjEzMTgyMzAwMTcz.XhC-cg.9-Rr0XEosgBoUkkx5udi5jGVXmo'))
    .then(() => message.channel.send(`The bot was successfully restarted!`));
    }
    else {
      return;
    } 
  }

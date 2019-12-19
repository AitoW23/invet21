const { Client, ShardingManager } = require('discord.js');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

const client = new Client({
    disableEveryone: true
  });
const shard = new ShardingManager('./bot.js', {
  token: process.env.BOT_TOKEN,
  autoSpawn: true
});

shard.spawn(3);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id} is rebooted`));

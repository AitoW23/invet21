const { ShardingManager } = require('kurasuta');
const { join } = require('path');
const sharder = new ShardingManager(join(__dirname, 'bot'), {
	// your options here
});

sharder.spawn(21);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id} of 20 are now Online`));
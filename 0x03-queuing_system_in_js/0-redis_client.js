import redis from 'redis';

async function RedisTest() {
  try {
    const client = redis.createClient();
    await client.connect();
    console.log('Redis client connected to the server');
  } catch (e) {
    console.log(`Redis client not connected to the server: ${e}`);
  }
}
RedisTest();

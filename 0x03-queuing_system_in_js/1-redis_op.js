import redis from 'redis';

const client = redis.createClient();

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err);
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

(async () => {
  try {
    await client.connect();

    async function setNewSchool(schoolName, value) {
      try {
        const reply = await client.set(schoolName, value);
        console.log(`Reply: ${reply}`);
      } catch (e) {
        console.log(`Error in setting: ${e}`);
      }
    }

    async function displaySchoolValue(schoolName) {
      try {
        const value = await client.get(schoolName);
        console.log(value);
      } catch (e) {
        console.log(`Error in getting: ${e}`);
      }
    }

    await displaySchoolValue('ALX');
    await setNewSchool('ALXSanFrancisco', '100');
    await displaySchoolValue('ALXSanFrancisco');

    // Close the client after operations
    await client.quit();
  } catch (error) {
    console.error(`Error: ${error}`);
  }
})();

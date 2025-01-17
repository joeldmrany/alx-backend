import redis from 'redis';

const client = redis.createClient();

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err);
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, value) => {
    if (err) {
      console.log(`Error in getting: ${err}`);
    } else {
      console.log(`${value}`);
    }
  });
}

displaySchoolValue('ALX');
setNewSchool('ALXSanFrancisco', '100');
displaySchoolValue('ALXSanFrancisco');

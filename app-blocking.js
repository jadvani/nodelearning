var start = new Date()
var simulateTime = 1000

setTimeout(function(argument) {
  // execution time simulated with setTimeout function


const fs = require('fs');
var data = fs.readFileSync('lorem.md'); // blocks here until file is read
console.log(data);
data = fs.readFileSync('lorem.md'); // blocks here until file is read
console.log(data);
data = fs.readFileSync('lorem.md'); // blocks here until file is read
console.log(data);
data = fs.readFileSync('lorem.md'); // blocks here until file is read
console.log(data);
data = fs.readFileSync('lorem.md'); // blocks here until file is read
console.log(data);

  var end = new Date() - start
  console.info('Execution time: %dms', end)
}, simulateTime)

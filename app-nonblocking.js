var start = new Date()
var simulateTime = 1000

setTimeout(function(argument) {
  // execution time simulated with setTimeout function


const fs = require('fs');
fs.readFile('lorem.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.readFile('lorem.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.readFile('lorem.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.readFile('lorem.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.readFile('lorem.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
  var end = new Date() - start
  console.info('Execution time: %dms', end)
}, simulateTime)

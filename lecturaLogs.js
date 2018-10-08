/*
The function you have "readFile" makes
an asynchronous callback. It doesn't execute right away, rather it
executes when the file loading has completed. When you call readFile,
control is returned immediately and the next line of code is executed.
So when you call console.log, your callback has not yet been invoked,
and this content has not yet been set. Welcome to asynchronous programming.*/

const fs = require('fs');
/*var content;
// First I want to read the file
fs.readFile('resumen.log', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;


  //  console.log(content);   // Put all of the code here (not the best solution)
    processFile();          // Or put the next step in a function and invoke it
});

function processFile() {
    var words =content.toString('utf-8');
    console.log(words)


//console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
}
*/

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('mensajes.log')
});

lineReader.on('line', function (line) {
  if(line.indexOf('info') > -1) {
  console.log('Linea filtrada:', line,'\n');
};

});

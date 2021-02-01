const fs = require('fs');

const argv = process.argv;
console.log(argv);

fs.readFile('sample.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
});
const fs = require('fs');
const path = require('path');


const F1 = path.join(__dirname, 'files','xyz.txt');
// console.log(__dirname);
console.log(F1);

const data = 'Writing into a file using file system';


fs.readFile('abc.txt', { encoding: 'utf-8', flag: 'r' }, (err, data) => {
    if (err) throw err;
    console.log(data);
});

// fs.writeFile(F1, data, (err) => {
//     if (err) throw err;
//     console.log('file written successfully');
// })



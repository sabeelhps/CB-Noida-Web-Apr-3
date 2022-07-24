const fs = require('fs');
const path = require('path');

const F1 = path.join(__dirname, 'inp1.txt');
const F2 = path.join(__dirname, 'inp2.txt');
const F3 = path.join(__dirname, 'output.txt');

let res = [];

fs.readFile(F1, (err, data) => {
    if (err) throw err;
    const arr1 = data.toString().split('\n');
    res = res.concat(arr1); //merging first array to res array
    fs.readFile(F2, (err, data) => {
        if (err) throw err;
        const arr2 = data.toString().split('\n');
        res = res.concat(arr2); //merging second array to res array
        // sorting
        res.sort((a, b) => a - b);

        res = res.join('\n');

        fs.writeFile(F3, res, (err) => {
            if (err) throw err;
            console.log('File written successfully');
        })

    });
});




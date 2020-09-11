'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("filename: ", (filename) => {
    fs.readFile(filename, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data.toString().toUpperCase());
    })
    rl.close();
})
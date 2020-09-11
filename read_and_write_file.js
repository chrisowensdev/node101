'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.question("Input file: ", (input) => {
    fs.readFile(input, (err, data) => {
        if (err) {
            console.log(err);
            rl.close();
        }
        rl.question("Output file: ", (output) => {
            rl.close();
            const content = data.toString().toUpperCase();
            fs.writeFile(output, content, (err) => {
                if (err) {
                    console.error(err)
                };
                console.log("Wrote to file", output)
            });
        })
    })
})


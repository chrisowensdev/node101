'use strict';

const dns = require('dns');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Domain Name: ", function (domain) {
    dns.lookup(domain, function (error, address) {
        if (error) {
            console.log(error);
        }
        console.log("IP Address: ", address);
    });
    rl.close();
})


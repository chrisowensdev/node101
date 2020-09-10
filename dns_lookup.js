const dns = require('dns');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What domain?", function (domain) {
    dns.lookup(domain, function (error, address) {
        if (error) {
            console.log(error);
        }
        console.log(address);
    });
    rl.close();
})

// const domain = ('Lookup Domain');
// console.log(domain);
var PORT = 33333;
var HOST = '127.0.0.1';

const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//var message = 'Hi marcus, you are so beautiful!';
rl.question("What is your name ? ", function (name) {
    rl.question("What is the message ? ", function (msg) {
        //console.log(`${name}, is a citizen of ${country}`);
        var message = `${name} said ${msg}`;
        client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
            if (err) throw err;
            console.log('UDP message sent to ' + HOST + ':' + PORT);
            client.close();
            rl.close();
        });
    });
});

rl.on('SIGINT', function () {
    console.log("Caught interrupt signal");

    //if (i_should_exit)
    process.exit();
});

rl.on("close", function () {
    console.log("\nMessage sent \nBYE BYE !!");
});


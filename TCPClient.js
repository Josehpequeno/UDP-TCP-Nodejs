var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;
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
        var client = new net.Socket();
        client.connect(PORT, HOST, function () {
            console.log('\nCONNECTED TO: ' + HOST + ':' + PORT);
            // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
            client.write(message);

        });

        // Add a 'data' event handler for the client socket
        // data is what the server sent to this socket
        client.on('data', function (data) {
            //console.log('DATA: ' + data);
            console.log("Sent")
            // Close the client socket completely
            client.destroy();
        });

        // Add a 'close' event handler for the client socket
        client.on('close', function () {
            console.log('Connection closed');
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
    console.log("\nBYE BYE !!");
});

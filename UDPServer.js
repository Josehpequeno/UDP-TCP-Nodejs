var PORT = 33333;
var HOST = '127.0.0.1';
//app.set("HOST", process.env.HOST || "localhost");
console.log("host: ",process.env.HOST)
console.log("host: ","localhost")

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function() {
  var address = server.address();
 console.log('UDP Server listening on ' + address.address + ':' + address.port);
});

server.on('message', function(message, remote) {
 console.log(remote.address + ':' + remote.port +' - ' + message);
});

server.bind(PORT, HOST);

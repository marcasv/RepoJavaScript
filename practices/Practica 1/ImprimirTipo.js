// server.js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var toType = function(obj) {
    return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
  }

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    let arturo;
    let cadena = "Con typeof: \n" + typeof(1) + "\n" + typeof("el gatito") + "\n" + typeof(new Function("5+2")) + "\n" + typeof(new Date()) + "\n" + typeof(arturo) + "\n" + typeof(null);
    cadena += "\n\nCon funcion custom: \n" + toType(1) + "\n" + toType("el gatito") + "\n" + toType(new Function("5+2")) + "\n" + toType(new Date()) + "\n" + toType(arturo) + "\n" + toType(null);
    res.end(cadena);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
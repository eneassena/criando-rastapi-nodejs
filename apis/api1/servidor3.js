// carregando o modulo de servidor
const http = require('http');

// criando o servidor e guardamos na variavel serve
let server = http.createServer((req, res) => {

    console.log("URL: ", req.url);
    console.log("MEthod: ", req.method);

    res.end("OK");

});


server.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});
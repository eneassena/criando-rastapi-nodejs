// carregando o modulo de servidor
const http = require('http');

// criando o servidor e guardamos na variavel serve
let server = http.createServer((req, res) => {

    console.log("URL: ", req.url);
    console.log("MEthod: ", req.method);

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader("Content-Type", 'text/html');
            res.end("<h1>Óla</h1>");
            break;
        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                users: [{
                    nome: 'eneas',
                    email: 'eneas@gmail.com.br',
                    id: 1
                }]
            }));
            break;

    }
});


server.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});
// carregando o modulo de servidor
const express = require('express');


let app = express();

// criando o servidor e guardamos na variavel serve
app.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/html');
    res.end("<h1>Óla</h1>");

});

app.get('/users', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{
            id: 1,
            nome: 'eneas',
            email: 'eneas@gmail.com.br',
            telefone: '1111-2222'
        }]
    });
})



app.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});
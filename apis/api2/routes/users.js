module.exports = (app) => {

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
    });

    app.post('/users', (req, res) => {

        res.json(req.body);

    });

};
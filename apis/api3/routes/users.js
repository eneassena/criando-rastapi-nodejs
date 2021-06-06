const NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});


module.exports = (app) => {



    app.get('/users', (req, res) => {

        db.find({}).sort({ name: 'eneas' }).exec((err, users) => {
            if (err) {
                console.log(`Error ${err}`);
                res.status(400).json({
                    error: err
                });
            } else {
                res.status(200);
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    users
                });
            }
        })


    });

    // app.get('/users', (req, res) => {

    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.json({
    //         users: [{
    //             id: 1,
    //             nome: 'eneas',
    //             email: 'eneas@gmail.com.br',
    //             telefone: '1111-2222'
    //         }]
    //     });
    // });

    app.post('/users', (req, res) => {
        // inserindo usuario no banco nedb
        db.insert(req.body, (err, user) => {

            if (err) {
                console.log(`Eror ${err}`);
                res.status(400).json({
                    error: err
                });
            } else {
                res.status(200).json(user);
            }

        });

    });

};
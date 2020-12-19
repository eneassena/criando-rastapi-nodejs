const NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});


module.exports = (app) => {

    let route = app.route('/users')

    route.get((req, res) => {

        db.find({}).sort({ name: 1 }).exec((err, users) => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {

                res.status(200);
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    users
                });

            }

        })
    });

    route.post((req, res) => {

        if (!app.utils.validator.user(app, req, res)) return false;

        db.insert(req.body, (err, user) => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }

        });

    });

    // let routeID = app.route('/users/:id');

    // routeID.get((req, res) => {

    //     db.findOne({ _id: req.params.id }).exec((err, user) => {

    //         if (err) {
    //             app.utils.error.send(err, req, res);
    //         } else {
    //             res.status(200).json(user);
    //         }

    //     })

    // });

    // consulta usuario por nome
    let routeName = app.route('/users/:nome');

    routeName.get((req, res) => {
        // rota que buscar usuario pelo nome
        db.findOne({ nome: req.params.nome }).exec((err, user) => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }

        });

    });


    // routeID.put((req, res) => {

    //     if (!app.utils.validator.user(app, req, res)) return false;

    //     db.update({ _id: req.params.id }, req.body, err => {

    //         if (err) {
    //             app.utils.error.send(err, req, res);
    //         } else {
    //             res.status(200).json(Object.assign(req.params, req.body));
    //         }

    //     })

    // });

    // routeID.delete((req, res) => {

    //     db.remove({ _id: req.params.id }, {}, err => {

    //         if (err) {
    //             app.utils.error.send(err, req, res);
    //         } else {
    //             res.status(200).json(req.params);
    //         }

    //     })
    // });

};
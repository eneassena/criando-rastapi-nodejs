module.exports = {

    user: (app, req, res) => {

        req.assert('name', "O nome é obrigatório.").notEmpty();
        req.assert('email', "O email é obrigatório.").notEmpty().isEmail();

        let erros = req.validationErrors();

        if (erros) {

            app.utils.error.send(errors, req, res);
            return false;

        } else {

            return true;

        }

    }

};
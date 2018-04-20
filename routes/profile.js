const express = require('express');
//const bodyParser = require('body-parser').json();
const Profile = require('../models/profile.model');


module.exports = (app) => {
    const router = express.Router();

    app.use('/profiles', router);

    router.get('/:name', (req, res) => {
        const name = decodeURI(req.params.name);
        
        Profile.findOne({ 'title': name }).then(
            (result) => {
                res.json(result);
            },
            (err) => {
                res.send({ success: false, message: 'Erro ao recuperar perfil', data: err });
            });
    });
};

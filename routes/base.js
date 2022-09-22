const express = require('express');
const router = express.Router();

router.get('/', function (request, response) {
    let user = { 
        nome: 'Joao', 
        email: 'joao@ifro.edu.br'
    };

    response.render('index', {
        user
    });


});

router.get('/sobre', function (request, response) {
    response.render('sobre');
});


router.get('/menu/Menu', function (request, response) {
    response.render('partes/menu');
});


module.exports = router;
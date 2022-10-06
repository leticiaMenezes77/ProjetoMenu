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

router.get('/cadastro/Cadastro', function (request, response) {
    response.render('partes/cadastro');
});

router.post('/cadastro/criar', function (request, response) {

    response.send('Salvar cadastro');
}); //aqui foi o modo feita para salvar o formukario de cadastra-se
   //E assim fazer com os demais formularios
router.get('/login/Login', function (request, response) {
    response.render('partes/Login');
});
router.post('/login/criar', function (request, response) {

    response.send('Salvar Login');
}); 


module.exports = router;
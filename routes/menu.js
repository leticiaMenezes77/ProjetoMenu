const express = require('express');
const router = express.router();
const controller = require('../controllers/cardapioController');

router.get('/menu', controller.listen);

router.get ('/menu/abrir', controller.create_form);
router.post ('/menu/abrir', controller.create);


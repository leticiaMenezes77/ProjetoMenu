const express = require('express');
const router = express.router();
const controller = require('../controllers/cardapioController');

router.get('/menu', controller.listen);

router.get ('/menu/abrir', controller.create_form);
router.post ('/menu/abrir', controller.create);

router.get ('/menu/id/atualizar', controller.update_form);
router.post ('/menu/id/atualizar', controller.update);

router.get ('/menu/id/delete', controller.update_form);
router.post ('/menu/id/delete', controller.update);

module.exports = router;
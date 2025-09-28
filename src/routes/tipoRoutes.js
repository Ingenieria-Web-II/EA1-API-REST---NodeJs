const express = require('express');
const router = express.Router();
const controller = require('../controllers/tipoController');

router.post('/', controller.createTipo);
router.get('/', controller.getTipos);
router.get('/:id', controller.getTipoById);
router.put('/:id', controller.updateTipo);
router.delete('/:id', controller.deleteTipo);

module.exports = router;
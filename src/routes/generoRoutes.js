const express = require('express');
const router = express.Router();
const controller = require('../controllers/generoController');

router.post('/', controller.createGenero);
router.get('/', controller.getGeneros);
router.get('/:id', controller.getGeneroById);
router.put('/:id', controller.updateGenero);
router.delete('/:id', controller.deleteGenero);

module.exports = router;
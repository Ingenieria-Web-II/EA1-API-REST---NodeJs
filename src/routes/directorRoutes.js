const express = require('express');
const router = express.Router();
const controller = require('../controllers/directorController');

router.post('/', controller.createDirector);
router.get('/', controller.getDirectores);
router.get('/:id', controller.getDirectorById);
router.put('/:id', controller.updateDirector);
router.delete('/:id', controller.deleteDirector);

module.exports = router; 
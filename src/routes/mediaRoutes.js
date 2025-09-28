const express = require('express');
const router = express.Router();
const controller = require('../controllers/mediaController');

router.post('/', controller.createMedia);
router.get('/', controller.getMedias);
router.get('/:id', controller.getMediaById);
router.put('/:id', controller.updateMedia);
router.delete('/:id', controller.deleteMedia);

module.exports = router;
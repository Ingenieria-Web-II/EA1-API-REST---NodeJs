const express = require('express');
const router = express.Router();
const controller = require('../controllers/productoraController');

router.post('/', controller.createProductora);
router.get('/', controller.getProductoras);
router.put('/:id', controller.updateProductora);
router.delete('/:id', controller.deleteProductora);

module.exports = router;
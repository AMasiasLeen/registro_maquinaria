const express = require('express');
const router = express.Router();
const maquinariaController = require('../controllers/maquinariaController');

router.get('/', maquinariaController.index);
router.get('/new', maquinariaController.new);
router.post('/', maquinariaController.create);

module.exports = router;

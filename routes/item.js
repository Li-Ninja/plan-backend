const express = require('express');
const { getMany, update } = require('../controllers/item.controller');
const router = express.Router();

router.get('/Get', getMany);
router.post('/Update', update);

module.exports = router;

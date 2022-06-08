const express = require('express');
const Item = require('../models/item.model');
const db = require('../db');
const router = express.Router();

// get
router.get('/Get', async (_req, res) => {
    const resData = await Item.find();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(resData));
    res.end();
});

module.exports = router;

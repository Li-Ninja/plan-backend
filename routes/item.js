const express = require('express');
const dayjs = require('dayjs');
const Item = require('../models/item.model');
const router = express.Router();

// get
router.get('/Get', async (_req, res) => {
    const resData = await Item.find();

    res.send({
        Success: true,
        Data: resData
    });
});

router.post('/Update', async (req, res) => {
    const id = req.body._id;

    if (!id) {
        res.status(404).send('error');
    }

    const { count } = await Item.findById(id);

    await Item.findByIdAndUpdate(id, {
        count: count + 1,
        updateAt: dayjs()
    }).then(() => {
        res.send({
            Success: true
        })
    }).catch(() => {
        res.send({
            Success: false,
            Message: 'update failed'
        })
    });
});

module.exports = router;

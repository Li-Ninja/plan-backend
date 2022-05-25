const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (_req, res, _next) => {
  res.send('Home Page');
}); // sql.conn

module.exports = router;

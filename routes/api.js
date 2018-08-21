'use strict';

const express = require('express');
const cors = require('cors');
const timestamp = require('../utils/timestamp');

const router = express.Router();

router.get('/timestamp/:date?', cors(), (req, res) => {
  res.json(timestamp(req.params.date));
});

module.exports = router;

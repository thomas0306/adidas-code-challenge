const express = require('express'),
    router = express.Router();

const suggestions = require('./suggestions');

const api = router.use('/', suggestions);

module.exports = api;
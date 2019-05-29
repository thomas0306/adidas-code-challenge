const express = require('express'),
    router = express.Router();

const suggestions = require('./suggestions');
const wishlist = require('./wishlist');

const api = router.use('/', suggestions, wishlist);

module.exports = api;
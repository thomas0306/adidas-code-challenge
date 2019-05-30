const express = require('express'),
    router = express.Router();

const suggestions = require('./suggestions');
const wishlist = require('./wishlist');

const api = router
    .use('/', suggestions, wishlist)
    .use((req, res, next) => {
        res.sendStatus(404);
    });

module.exports = api;
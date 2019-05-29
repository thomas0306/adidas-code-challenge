

const express = require('express'),
    router = express.Router();

let data = require('./../data');
const identifierHelper = require('./../data/identifier');

const config = {
    wordIdentifierLength: 5,
}

let wishlist = router

.get('/wishlist/:identifier', (req, res, next) => {
    const targetIdentifier = req.params.identifier;
    const targetWishListKey = Object.keys(data.wishlists).find(identifier => identifier == targetIdentifier);
    if (targetWishListKey === undefined) {
        res.send(404).json({
            success: false,
            message: 'Wishlist not found',
        });
    } else {
        res.json({
            success: true,
            wishlist: data.wishlists[targetWishListKey],
        })
    }
})

.post('/wishlist', (req, res, next) => {
    const identifier = identifierHelper.generateUniqueCamelCaseWord(5, Object.keys(data.wishlists));
    data.wishlists[identifier] = [];
    res.json({
        success: true,
        identifier,
        wishlist: data.wishlists[identifier],
    })
})

module.exports = wishlist;
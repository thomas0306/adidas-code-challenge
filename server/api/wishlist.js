

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

module.exports = wishlist;
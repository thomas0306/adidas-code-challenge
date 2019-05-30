

const express = require('express'),
    router = express.Router();

let data = require('./../data');

const identifierHelper = require('./../data/identifier');
const uuidv4 = require('uuid/v4');

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
    const identifier = identifierHelper.generateUniqueCamelCaseWord(config.wordIdentifierLength, Object.keys(data.wishlists));
    data.wishlists[identifier] = [];
    res.json({
        success: true,
        identifier,
        wishlist: data.wishlists[identifier],
    })
})

.post('/wishlist/:identifier/item', (req, res, next) => {
    const identifier = req.params.identifier;

    if (Object.keys(data.wishlists).find(key => key === identifier) !== undefined) {
        const wishlistItem = {
            id: uuidv4(),
            ...req.body,
        };
        data.wishlists[identifier].push(wishlistItem);
        res.json({
            success: true,
            identifier,
            wishlistItem,
        });
    } else {
        res.send(404).send('Wishlist not found.');
    }
})
module.exports = wishlist;
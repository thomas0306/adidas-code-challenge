const express = require('express'),
    router = express.Router();

const proxy = require('http-proxy-middleware');

const suggestions = router.get('/suggestions/:query', proxy({
    target: 'https://adidas.co.uk', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
        '^/api/suggestions': '/api/search/suggestions', // rewrite paths
    },
}))

module.exports = suggestions;
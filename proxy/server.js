
const express = require('express');
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors())
app.use('/api', createProxyMiddleware({ 
    target: 'https://www.metaweather.com',
    headers: {
        accept: "application/json",
        method: "GET"
    },
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
     }
}));
app.listen(3001);
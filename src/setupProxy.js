const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://64.226.85.13:8000',
      changeOrigin: true,
    })
  );
};
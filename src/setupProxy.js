//新版配置代码
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', {
            target: 'http://localhost:8080',
            changeOrigin: true,
            pathRewrite: {'^/api1': ''}
        })
    ),
        app.use(
            createProxyMiddleware('/api1', {
                target: 'http://localhost:3030',
                changeOrigin: true,
                pathRewrite: {'^/api1': ''}
            })
        )
}
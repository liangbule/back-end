const baseWebpackConfig = require('./webpack.base.js')//共有的配置
const {merge} = require('webpack-merge')
module.exports = merge(baseWebpackConfig,{
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer:{
        host: "localhost",
        port: 8080,
        hot: true,
        open: true,
        historyApiFallback: true
    }
})

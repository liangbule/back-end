module.exports = {
//    预设  babel-preset-react-app
    presets: [
        // "react-app"
        ['@babel/preset-env', {
            useBuiltIns: "usage", // 按需加载
            corejs: {
                version: "3.8",
                proposals: true,
            },
            targets: {node: 'current'}
        }],
        ['@babel/preset-react', {targets: {node: 'current'}}] // add this
    ],
}
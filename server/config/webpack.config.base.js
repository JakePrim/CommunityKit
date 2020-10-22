const path = require('path');
const nodeExcternals = require('webpack-node-externals');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

const utils = require('./utils');
//npx node --inspect-brk ./node_modules/.bin/webpack --inline --progress 调试webpack
const webpackConfig = {
    target: "node",
    entry: {
        server: path.join(utils.APP_PATH, 'index.js')
    },
    output: {
        filename: "[name].bundle.js",
        path: utils.DIST_PATH
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: [path.join(__dirname, '/node_modules')]
            }
        ]
    },
    externals: [nodeExcternals()],
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({//配置环境变量
            'process.env':{//创建一个常量
                NODE_ENV: (process.env.NODE_ENV === 'production' ||
                process.env.NODE_ENV === 'prod') ? "'production'" : "'development'"
            }
        })
    ],
    node: {
        global: true,
        __filename: true,
        __dirname: true,
    }
}

module.exports = webpackConfig
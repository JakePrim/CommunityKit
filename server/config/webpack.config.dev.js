const webpackMerge = require('webpack-merge');

const baseWebpckConfig = require('./webpack.config.base');

const webpackConfig = webpackMerge.merge(baseWebpckConfig,{
    devtool: 'eval-source-map',
    mode:'development',
    stats: {children:false}
});

module.exports = webpackConfig;
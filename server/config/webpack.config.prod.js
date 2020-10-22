//生产打包
const webpackMerge = require('webpack-merge');

const baseWebpckConfig = require('./webpack.config.base');

const TerserWebpackPlugin = require('terser-webpack-plugin');//压缩js插件

//SplitChunksPlugin 

const webpackConfig = webpackMerge.merge(baseWebpckConfig,{
    mode:'production',
    stats: {children:false,warnings:false},
    optimization:{
        minimize:true,
        minimizer:[
            new TerserWebpackPlugin({//压缩js文件配置
                terserOptions:{
                    warnings:false,
                    compress: {
                        warnings:false,
                        //是否注释掉console
                        drop_console:false,
                        dead_code:true,
                        drop_debugger:true,
                    },
                    output: {
                        comments:false,
                        beautify:false
                    },
                    mangle:true,
                },
                parallel:true,
                sourceMap:false,
            })
        ],
        splitChunks:{//避免重复依赖
            cacheGroups:{
                commons:{
                    name:'commons',
                    chunks:'initial',
                    minChunks:3,
                    enforce:true
                }
            }
        }
    }
});

module.exports = webpackConfig;
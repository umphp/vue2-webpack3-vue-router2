'use strict';
let shell = require('shelljs');
let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let baseConfig = require('./base');
let defaultSettings = require('./default');

//编译之前删除build文件夹
shell.rm('-rf' , defaultSettings.buildPath);


let config = Object.assign({}, baseConfig, {
    // devtool: 'sourcemap',
    plugins: [
        //如果你使用了一些有着很酷的依赖树的库，那么它可能存在一些文件是重复的。webpack可以找到这些文件并去重。
        // new webpack.optimize.DedupePlugin(),
        // 暴露到全局，js文件可直接使用
        new webpack.ProvidePlugin({
            Vue: 'vue',
            VueRouter: 'vue-router',
        }),
        // 提取公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            chunks: ['main','vendor']
        }),
        new HtmlWebpackPlugin({
            filename:  path.join(defaultSettings.buildPath,'index.html'),
            template: 'index.html',
            inject: false,
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            //         // more options:
            //         // https://github.com/kangax/html-minifier#options-quick-reference
            // },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // new webpack.optimize.UglifyJsPlugin(),
        // new webpack.optimize.OccurenceOrderPlugin(),

        //合并策略插件
        // new webpack.optimize.AggressiveMergingPlugin(),
        // new webpack.NoErrorsPlugin()
    ],
    module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
// config.module.loaders.push({
//     test: /\.(js|jsx)$/,
//     loader: 'babel',
//     include: [].concat(
//         config.additionalPaths,
//         [ path.join(__dirname, '/../src') ]
//     )
// });

module.exports = config;

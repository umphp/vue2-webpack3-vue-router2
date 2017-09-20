'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./default');


let config = Object.assign({}, baseConfig, {
    devtool: 'eval-source-map',
    plugins: [
        // 暴露到全局，js文件可直接使用
        new webpack.ProvidePlugin({
            Vue: 'vue',
            VueRouter: 'vue-router',
        }),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
    ],
    module: defaultSettings.getDefaultModules()
});


// Add needed loaders to the defaults here
// config.module.rules.push({
//     test: /\.(js|vue)$/,
//     loader: 'eslint-loader',
//     include: [defaultSettings.srcPath]
//     ,exclude: /node_modules/
//     ,use:[{
//         loader: 'babel-loader'
//         ,query: {
//             presets: ['es2015']
//         }
//     }]
// });

module.exports = config;

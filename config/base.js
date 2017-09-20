'use strict';
let path = require('path');
let defaultSettings = require('./default');


module.exports = {
    devtool: 'eval',
    entry: {
        vendor:['vue','vue-router']
        ,main:path.resolve(defaultSettings.srcPath , 'main.js')
    }
    ,output: {
        // path: __dirname + '/build'
        path: path.resolve(defaultSettings.buildPath , 'static')
        ,publicPath: '/static/'
        ,filename: '[name].js'
        ,chunkFilename: "[name].js"
    },
    resolve: {
        extensions: ['.js', '.jsx' ,'vue'],
        alias: {
            'vue': path.resolve(defaultSettings.rootPath,'node_modules/vue/dist/vue.min.js')
            ,'vue-router': path.resolve(defaultSettings.rootPath,'node_modules/vue-router/dist/vue-router.min.js')
            ,'Components': path.resolve(defaultSettings.srcPath, 'components/')
            ,'Pages': path.resolve(defaultSettings.srcPath, 'pages/')
            ,'Plugins': path.resolve(defaultSettings.srcPath, 'plugins/')
            ,'Services': path.resolve(defaultSettings.srcPath, 'services/')
            ,'Sources': path.resolve(defaultSettings.srcPath, 'sources/')
            ,'Style': path.resolve(defaultSettings.srcPath, 'styles/')
            ,'Utils': path.resolve(defaultSettings.srcPath, 'utils/')
        }
    },
    module: {}
};

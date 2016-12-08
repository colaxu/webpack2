const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const config = require('./config');
const baseConfig = {
    _entry: {
        index: config.srcDir + '/scripts/index.js'
    },
    _output: {
        filename: 'scripts/[name].js',
        path: config.buildDir
    },
    _module: {
        rules: []
    },
    _resolve: {
        alias: {
          
        }
    }
}
module.exports = baseConfig;

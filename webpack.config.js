/* eslint-disable*/
var path = require('path')
var webpack = require('webpack')
var isProduction = function() {
    return process.env.NODE_ENV == "production";
};

var plugins = [];
if (isProduction()) {
    console.log("生产环境")
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    )
} else {
    console.log("开发环境")
    plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    )
}
module.exports = {
    devtool: isProduction() ? false : 'inline-source-map',
    entry: isProduction() ? {
        index: __dirname + '/src/javascripts/index.js',
    } : {
        index: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            __dirname + '/src/javascripts/index.js'
        ]
    },
    output: {
        path: __dirname + '/public',
        publicPath: isProduction() ? '/public/' : '/public/',
        filename: isProduction() ? "[name].[chunkhash].js" : "[name].js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: ['babel'],
            include: path.join(__dirname, 'src'),
            exclude: path.join(__dirname, 'node_modules'),
            query: {
                presets: ['es2015', 'es2017','react']
            }
        }, {
            test: /\.s?css$/,
            loader: 'style!css!sass!postcss'
        }, {
            test: /\.(png|jpg|bmp)$/,
            loader: 'url?limit=3000'
        }]
    },
    plugins: plugins,
    externals: {
        // 'babel-polyfill': 'true',
        // "sweetalert": "swal"
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: '0.0.0.0',
        port: 8080,
        // proxy: {
        //     '/khaleesi/pintu/*': {
        //         target: 'http://10.1.29.249:30301',
        //         secure: false
        //     }
        // }
    }
}

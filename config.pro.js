var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env){
    console.log('.......启动生产环境........');
    var config = {
        entry: {
          common:['react','react-router','react-dom'],
          app:'./src/js/app.js'
        },
        output: {
          filename: '[name].[hash].js',
          path: path.resolve(__dirname, 'production/dist'),
          publicPath: './dist/',
          chunkFilename: '[id].chunk.[hash].js', 
        },
        module: {
          rules: [
          //es6加载器
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: [{
                loader: 'babel-loader',
                options: {
                  presets: [['es2015'],['react']],
                  plugins: [
                  'syntax-dynamic-import',
                  ]
                }
              }]
            },
            //css加载器
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            //less加载器
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]

            },
            
            ]
        },
        plugins: [
                new webpack.optimize.CommonsChunkPlugin({
                    name:['common','manifest'] ,
                    minChunks: Infinity
                }),
                new webpack.optimize.UglifyJsPlugin({
                    beautify: false,
                    mangle: {
                        screw_ie8: true,
                        keep_fnames: true
                    },
                    compress: {
                        screw_ie8: true,
                        warnings: false
                    },
                    comments: false
                }),
                new webpack.DefinePlugin({
                  'process.env.NODE_ENV': JSON.stringify('production')
                }),
                new HtmlWebpackPlugin({
                  title: 'Custom template',
                  template: './template.ejs', // Load a custom template (ejs by default see the FAQ for details)
                  filename:'../index.html',
                  hash:true
                })
            ]
      };

    return config;
};
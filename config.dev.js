var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');//用于打开浏览器

module.exports = function(env){
    console.log('.......启动开发环境........');
    var config = {
        devtool: 'cheap-module-source-map',
        entry: {
          app:'./src/js/app.js',
        },
        output: {
          filename: '[name].js',
          path: path.resolve(__dirname, 'dist'),
          publicPath: '/dist/',
          chunkFilename: '[id].chunk.js', 
        },
        devServer: {
          port: 8485,
          host: 'localhost',
          historyApiFallback: true,
          noInfo: false,
          stats: 'minimal',
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

            }]
        },
        plugins: [
                new webpack.optimize.CommonsChunkPlugin({
                    name: 'common',
                    minChunks: function (module) {
                       // this assumes your vendor imports exist in the node_modules directory
                       return module.context && module.context.indexOf('node_modules') !== -1;
                    }
                }),
                new OpenBrowserPlugin({
                  url: 'http://localhost:8066'
                }),
            ]
      };

    return config;
};


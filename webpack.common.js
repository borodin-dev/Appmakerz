//basic vars
const path = require('path');
const webpack = require('webpack');

//additional plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

//module settings
module.exports = {
    //basic path to project
    // context: path.resolve(__dirname, 'src'),

    //entry js
    entry: {
        //main file of app
        app: './src/js/app.js'
    },

    //path for files
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '../'
    },

    //dev-server configuration
    // devServer: {
    //     contentBase: './app'
    // },

    module: {
        rules: [
            //scss
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {sourceMap: true}
                        },
                        {
                            loader: 'postcss-loader',
                            options: {sourceMap: true}
                        },
                        {
                            loader: 'sass-loader',
                            options: {sourceMap: true}
                        }
                    ],
                    fallback: 'style-loader',
                }),
            },
            //image
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    },
                    'img-loader',
                ],
            },
            //fonts
            {
                test: /\.(woff|woff2|ttf|otf)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '../fonts/',
                            outputPath: './fonts/'
                        }
                    },
                ]
            },
            //svg converter
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin(
            './css/[name].css'
        ),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/index.html'
        }),
    ],
};

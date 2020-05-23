/**
 * @author: wangyongqi@baidu.com
 * @date: 2020-01-14 16:54:00
 * @last Modified time: 2020-01-14 16:54:00
 */


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 清空打包目录的插件
// 判断命令行参数中是否有 --production 参数
const isDebug = !~process.argv.indexOf('--release');

console.log('isDebug ', isDebug);

module.exports = {
    mode: isDebug ? 'development' : 'production',
    entry: {
        index: path.resolve(__dirname, './src/')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash:6].js',
        chunkFilename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // CSS Loader https://github.com/webpack/css-loader
                            importLoaders: 1,
                            sourceMap: isDebug,
                            // CSS Modules https://github.com/css-modules/css-modules
                            modules: {
                                localIdentName: isDebug ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')()
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve('src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public', 'index.html'),
            filename: 'index.html',
            hash: true, // 防止缓存
            minify: {
                removeAttributeQuotes: true // 压缩 去掉引号
            }
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        // compress: true,
        port: 8000,
        open: true,
        proxy: {
            '/api': 'http://localhost:9000'
        }
    },
    devtool: 'source-map'
};


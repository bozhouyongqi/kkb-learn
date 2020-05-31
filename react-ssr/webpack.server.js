// 服务端webpack打包配置

const path = require('path');

module.exports = {
    mode: 'development',
    target: 'node', // 标示打包对象是是node端代码
    entry: path.resolve(__dirname + '/serverRender'),
    output: {
        path: path.resolve(__dirname + '/build'),
        filename: 'server.bundle.js',
        // webpackjs.com/configuration/output/#模块定义系统
        libraryTarget: 'commonjs2' // 这里需要将该中间件打包成commonjs的模块方式，这样才能通过require()的方式引用到。重要
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    // 这个必须配置，否则通过require之后找不到导出的变量
                                    targets: {
                                        node: process.versions.node // 配置为当前使用的node版本
                                    },
                                    modules: 'cjs'
                                }
                            ],
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    },
    devtool: 'source-map'
};


// 浏览器端webpack打包配置

const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname + '/client'),
    output: {
        path: path.resolve(__dirname + '/public'),
        filename: 'client.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};


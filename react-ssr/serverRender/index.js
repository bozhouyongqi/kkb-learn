/**
 * 这是处理服务端渲染的中间件
 * 可以使用import 的es6语法，后面使用webpack编译成node代码即可
 */
import App from '../src/app';
// 这里使用rederToString渲染成字符串;还可以使用renderToStream的方法渲染成字节流的方式，然后使用res.write方法写入到当前流中
import {renderToString} from 'react-dom/server';
import React from 'react';

export function handleRoute(req, res, next) {
    // 这里先不考虑其他的路由，先把App从服务端渲染出去
    // 回头需要在这里匹配路由
    const ssrString = renderToString(<App />);

    // 这里注意public目录下存放静态文件，但是访问不能再添加public路径
    const html = `
        <html>
            <head>
                <meta charset="utf-8"></meta>
                <title>服务端渲染</title>
            </head>
            <body>
                <div id="root">
                ${ssrString}
                </div>
            </body>
            <script src="/client.bundle.js"></script>
        </html>
    `;

    return res.send(html);
};

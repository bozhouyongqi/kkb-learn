
代码目录结构
```
.
├── README.md
├── build
│   └── server.bundle.js            // 存放serverRender中间件经过webpack转换后的代码
├── client
│   └── index.js                    // 浏览端渲染的初始代码
├── package.json
├── public
│   └── client.bundle.js            // 存放经过webpack打包后的浏览器端代码
├── server
│   └── index.js                    // express服务端代码，引入serverRender中间件执行服务端渲染
├── serverRender
│   └── index.js                    // 服务端渲染的中间件
├── src
│   ├── app.js                      // 页面根组件App
│   └── component
├── webpack.client.js               // 浏览器端webpack配置
├── webpack.server.js               // 服务端webapck配置
└── yarn.lock
```

#### 在浏览器端代码添加事件响应，测试逻辑是否正确
这一步遇到的坑：
1. public静态目录
    在serverRender中间件中引入client.bundle.js时,不用再添加public/路径前缀。
2. script是成对标签
   在serverRender中间件中引入client.bundle.js不是自闭合标签，需使用成对标签<script></script>


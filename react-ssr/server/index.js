/**
 * 这是express服务器代码
 * 通过使用server/bundle.js中的中间件实现服务端同构渲染
 */

const path = require('path');
const express = require('express');
const reactRoute = require('../build/server.bundle.js');
const apiRouter = require('./api');

const app = express();
const port = 9000;

app.use(express.static(path.join(__dirname, '../public')));
// 中间存放api接口，若路由都没有匹配到，再执行最后的服务端渲染逻辑

// 注意这里要从build/server.bundle.js引入该中间件,这个是不会上传至cdn的，这个只在服务端使用
// 需要确保启动服务时，该目录下已经是最新打包后的文件
app.use('/api', apiRouter);

app.get('*', reactRoute.handleRoute);

// TO DO: 遗留个问题: 结束当前命令窗口后，该9000端口没有释放掉
app.listen(port, function () {
    console.log('server listening at ', port);
});




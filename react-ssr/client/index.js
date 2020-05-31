/**
 * 这里面负责渲染浏览器端的代码
 * 此时的代码是运行在服务端返回的html页面中的
 * 
 */
// 使用hydrate不会重新渲染组件，只会给组件绑定生命周期方法
import React from 'react';
import {hydrate} from 'react-dom';
import App from '../src/app';


hydrate(<App></App>, document.getElementById('root'));

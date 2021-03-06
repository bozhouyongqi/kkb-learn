/**
 * * @author: wangyongqi@baidu.com
 * @date: 2020-05-23 22:57:04
 * @last Modified time: 2020-05-23 22:57:04
 * @file index.js
 */

import React from './kkreact/react';
import ReactDom from './kkreact/react-dom';
import App from './component/App';
import style from './app.css'; // 样式隔离

function onClick() {
    console.log('clicked the div')
}

const jsx = (
    <div>
        文本节点1
        文本节点2
        <div className={style.wrapper} onClick={onClick}>文本节点3</div>
        <FunctionComponent name="function 1"></FunctionComponent>
        <FunctionComponent name="function 2"></FunctionComponent>
        <App ></App>
        <App name="class组件1"></App>
    </div>
);

function FunctionComponent(props) {

    const name = (props && props.name) || 'default';

    return (
        <div>我是Function 组件 {name}</div>
    );
}


ReactDom.render(jsx, document.getElementById('root'));


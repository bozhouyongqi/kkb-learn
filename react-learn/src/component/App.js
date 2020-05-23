/**
 * @author: wangyongqi@baidu.com
 * @date: 2020-05-23 22:55:20
 * @last Modified time: 2020-05-23 22:55:20
 * @file App.js
 */


import React, {Component} from '../kkreact/react';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                文本节点1
                文本节点2
                文本节点3
                {/* <FunctionComponent />
                <ClassComponent></ClassComponent> */}
            </div>
        );
    }
}

class ClassComponent extends Component {

    render() {
        const {name} = this.props && this.props.name || 'deault';
        return (
            <div>
                我是class组件 {name}
            </div>
        );
    }
}

function FunctionComponent(props) {

    const {name} = props && props.name || 'default';

    return (
        <div>我是Function 组件 {name}</div>
    );
}

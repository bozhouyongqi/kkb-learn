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
        this.state = {
            count: 0
        };
    }

    click = () => {
        console.log('App click');
        this.setState({count: ++this.state.count});
    }

    render() {
        const name = this.props && this.props.name || "default";
        return (
            <div>
                我是app组件 {name}
                <div>
                    count: {this.state.count}
                </div>
                <button onClick={this.click}>点击计数</button>
            </div>
        );
    }
}

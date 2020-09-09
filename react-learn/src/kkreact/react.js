/**
 * * @author: wangyongqi@baidu.com
 * @date: 2020-05-23 23:12:56
 * @last Modified time: 2020-05-23 23:12:56
 * @file react.js
 * @description 自己实现的react源码中的组件
 */
import {TEXT_NODE_TYPE, HTML_ELEMENT_TYPE, CLASS_NODE_TYPE, FUNCTION_NODE_TYPE} from './type';
import {diff} from './diff';

export function createElement(type, props, ...children) {
    // 经过babel转换的jsx语法不是明确的一个树形结构，需要将其转换成一颗树状结构
    // console.log('createElement')
    // console.log(type);
    // console.log(props);
    // console.log(children);
    let vType;
    // 若是文本节点,bebel不会转成createElement的形式，所以这里不用判断
    if (typeof type === 'string') {
        // 说明这是一个原生标签
        vType = HTML_ELEMENT_TYPE;
    }
    else if (typeof type === 'function') {
        if (type.prototype.isReactComponent) {
            // 这是一个class组件
            vType = CLASS_NODE_TYPE;
        }
        else {
            // 否则是一个function组件
            vType = FUNCTION_NODE_TYPE;
        }
    }
    // 除此之外没有其他的类型了，将其转换成树状结构

    return {
        type,
        vType,
        props,
        children // 这里处理方式有些不对，应该放到props中，props.children = children
    };
}

export function Component(props, context, updater) {
    this.props = props;
    this.state = {};
    this.$cache = {}; // 存放该组件对应的vNode和其父container
}

Component.prototype.isReactComponent = true;

Component.prototype.setState = function (nextState, callback) {
    if (typeof nextState === 'function') {

    }
    else {
        // 这里不进行批处理，直接覆盖
        this.state = {
            ...this.state,
            ...nextState
        };
        this.forceUpdate(callback);
    }
};

Component.prototype.forceUpdate = function (callback) {
    // 再调用一次render
    const newVnode = this.render();
    // 其实是需要比较$cache中存储的vNode与vvNode的差异，然后再更新node。现在先写个不真正比较的diff，直接重新appendChild
    const newNode = diff(this.$cache, newVnode);

    // 更新当前组件实例的cache
    this.$cache = {
        ...this.$cache,
        vNode: newVnode,
        node: newNode
    };

};

export function PureComponent(props) {
}

Component.prototype.isPureReactComponent = true;


export default {
    createElement,
    Component,
    PureComponent
};


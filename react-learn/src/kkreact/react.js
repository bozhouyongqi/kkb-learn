/**
 * * @author: wangyongqi@baidu.com
 * @date: 2020-05-23 23:12:56
 * @last Modified time: 2020-05-23 23:12:56
 * @file react.js
 * @description 自己实现的react源码中的组件
 */

export const TEXT_NODE_TYPE = 0;
export const HTML_ELEMENT_TYPE = 1;
export const CLASS_NODE_TYPE = 2;
export const FUNCTION_NODE_TYPE = 3;
//  其实react中定义了很多类型，例如Fragment类型，Provider组件类型，StrictMode组件类型，Profiler组件类型等等


export function createElement(type, props, ...children) {
    // 经过babel转换的jsx语法不是明确的一个树形结构，需要将其转换成一颗树状结构
    console.log(type);
    console.log(props);
    console.log('children ', children);
    console.log('children type : ', Array.isArray(children))

    let vType;
    if (!type) {
        // 说明这是一个文件节点
        vType = TEXT_NODE_TYPE;
    }
    else if (typeof type === 'string') {
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
        children
    };
}

export function Component() {


}

Component.prototype.isReactComponent = true;

export function PureComponent(props) {
    
}

Component.prototype.isPureReactComponent = true;


export default {
    createElement,
    Component,
    PureComponent
};


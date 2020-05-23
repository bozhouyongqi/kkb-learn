/**
 * @author: wangyongqi@baidu.com
 * @date: 2020-05-23 23:13:45
 * @last Modified time: 2020-05-23 23:13:45
 * @file react-dom.js
 * @description 自己实现的react-dom中的方法
 * 1.目前只实现ReactDom.render方法
 */
import {TEXT_NODE_TYPE, HTML_ELEMENT_TYPE, CLASS_NODE_TYPE, FUNCTION_NODE_TYPE} from './type';

function render(vNode, container) {
    console.log('react-dom render')
    console.log(vNode);
    console.log('container: ', container);
    const node = initNode(vNode, container);
    
    container.appendChild(node);
}

function initNode(vNode, container) {
    let node;
    let vType = vNode.vType;
    if (!vType) { // 文本节点不会被bebel转换成createElement的形式，所以不会有type等属性，就是一个字符串
        node = initHtmlTextNode(vNode, container);
    }
    else if (vType === HTML_ELEMENT_TYPE) {
        node = initHtmlElementNode(vNode, container);
    }
    else if (vType === CLASS_NODE_TYPE) {
        node = initClassComponentNode(vNode, container);
    }
    else if (vType === FUNCTION_NODE_TYPE) {
        node = initFuncComponentNode(vNode, container);
    }
    return node;
}
function initHtmlTextNode(vNode, container) {
    const node = document.createTextNode(vNode);
    return node;
}

function initHtmlElementNode(vNode, container) {
    const node = document.createElement(vNode.type);
    // 检查是否有children,若是有children还需要在继续initNode
    if (vNode.children && vNode.children.length) {
        for (let idx = 0; idx < vNode.children.length; idx++) {
            let childNode = initNode(vNode.children[idx], node);
            node.appendChild(childNode);
        }
    }

    return node;
}

function initClassComponentNode(vNode, container) {
   
}

function initFuncComponentNode(vNode, container) {
    
}

 export default {
    render
 };


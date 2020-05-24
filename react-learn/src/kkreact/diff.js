/**
 * * @author: wangyongqi@baidu.com
 * @date: 2020-05-24 13:24:40
 * @last Modified time: 2020-05-24 13:24:40
 * @file diff函数
 * @description 不进行diff比较，先直接替换旧的节点
 */


import {initNode} from './react-dom';


export function diff(cache, newVnode) {
    const {vNode: oldVnode, node: oldNode, container: parentNode} = cache;

    const newNode = initNode(newVnode, parentNode);

    // parentNode.replaceChild(newChild, oldChild);
    parentNode.replaceChild(newNode, oldNode);

    return newNode;
}


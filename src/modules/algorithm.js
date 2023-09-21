/**
 * 算法
 */

/**
 * 冒泡排序
 */

/**
 * 选择排序
 */

/**
 * 归并排序
 */

/**
 * 节点递归算法
 * @param {*} id
 * @param {*} parentId
 * @param {*} children
 * @returns
 */
export function recursionNode(id = 'id', parentId = 'parentId', children = 'children') {
  return function recurse(paramNodes = [], paramsParent) {
    const nodes = [];
    const parentNode = paramsParent || {};
    for (let i = 0, length = paramNodes.length; i < length; i++) {
      const node = paramNodes[i];
      if ((!node[parentId] && !parentNode[id]) || (parentNode[id] && node[parentId] === parentNode[id])) {
        node[children] = recurse(paramNodes, node);
        node.hasChildren = node[children].length > 0;
        if (!node.hasChildren) {
          delete node[children];
        }
        nodes.push(node);
      }
    }
    return nodes;
  };
}

/**
 * 笛卡尔乘积
 */
export function cartesianProduct(options = []) {
  return options.reduce(
    (x, y) => {
      const arr = [];
      x.forEach((x) => y.forEach((y) => arr.push(x.concat([y]))));
      return arr;
    },
    [[]]
  );
}

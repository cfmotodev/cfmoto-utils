/**
 * 功能
 */

// 下载

/**
 * 节流防抖
 */
export function throttle(delay, fn) {
  // last为上一次触发回调的时间, timer是定时器
  let last = 0;
  let timer = null;
  // 将throttle处理结果当作函数返回

  return function a(...args) {
    // 保留调用时的this上下文
    const context = this;
    // 保留调用时传入的参数
    // const args = arguments;
    // 记录本次触发回调的时间
    const now = +new Date();

    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
    if (now - last < delay) {
      // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
      clearTimeout(timer);
      timer = setTimeout(function b() {
        last = now;
        fn.apply(context, args);
      }, delay);
    } else {
      // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应
      last = now;
      fn.apply(context, args);
    }
  };
}

/**
 * 节点递归算法
 * @param {*} id
 * @param {*} parentId
 * @param {*} children
 * @returns
 */
export function recursiveNode(id = 'id', parentId = 'parentId', children = 'children') {
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
 * 展开节点
 * @param {*} values
 * @param {*} children
 * @returns
 */
export function spreadNode(values = [], children = 'children') {
  if (!value || !value.length) return value;
  const newValues = [];
  for (item in values) {
    const newItem = JSON.parse(JSON.stringify(item));
    const itemChildren = item[children] || [];
    if (newItem[children]) {
      delete newItem[children];
    }
    newValues = [newItem, ...arguments.callee(itemChildren, children)];
  }
  return newValues;
}

/**
 * 随机UUID
 * @returns
 */
export function randomUUID() {
  const tempUrl = URL.createObjectURL(new Blob());
  const uuid0 = tempUrl.toString();
  URL.revokeObjectURL(tempUrl); // 释放这个url
  return uuid0.substring(uuid0.lastIndexOf('/') + 1);
}

// OSS缩略图
export function ossImageResize(outSrc, outWidth = 80, outHeight, v = new Date().getTime()) {
  if (!outSrc) return '';
  const src = typeof outSrc === 'string' ? [outSrc] : outSrc || [];
  const srcs = src.map((itemSrc) => {
    if (!/^http/.test(itemSrc) || !/(jpg|png|gif|jpeg)$/.test(itemSrc)) return itemSrc;
    const size = outHeight ? `w_${outWidth},h_${outHeight}` : `w_${outWidth}`;
    return `${itemSrc.split('?')[0]}?x-oss-process=image/resize,m_lfit,${size}&v=${v}`;
  });
  return typeof outSrc === 'string' ? srcs[0] : srcs;
}

// OSS视频快照
export function ossVideoSnapshot(options = {}) {
  const { src, width, height, position, v } = options;
  if (!src || /(jpg|png|gif|jpeg)$/.test(src)) return src || '';
  const width0 = width ? `,w_${width}` : '';
  const height0 = height ? `h_${height}` : '';
  const position0 = position || 1000;
  const v0 = v || new Date().getTime();
  const backgroundImageUrl = /^http/.test(src) ? `${src.split('?')[0]}?x-oss-process=video/snapshot,t_${position0}${width0}${height0},f_jpg,m_fast&v=${v0}` : src;
  return backgroundImageUrl;
}

// 从应用市场唤起APP-国际标准
export function launchApplication(id) {
  if (getUserAgent('iPhone') || getUserAgent('iPod') || getUserAgent('iPad')) {
    window.location.href = `https://itunes.apple.com/cn/app/id${id}`;
    return;
  }
  window.location.href = `https://play.google.com/store/apps/details?id=${id}`;
}

// 从应用市场唤起APP-国内标准
export function launchApplicationDAMS(id) {
  function getUserAgent(name) {
    return navigator.userAgent.toLowerCase().match(new RegExp(name.toLowerCase(), 'i'));
  }

  if (getUserAgent('iPhone') || getUserAgent('iPod') || getUserAgent('iPad')) {
    window.location.href = `https://itunes.apple.com/cn/app/id${id}`;
    return;
  }
  if (getUserAgent('vivo')) {
    window.location.href = `vivomarket://details?id=${id}`;
    return;
  }
  if (getUserAgent('oppo')) {
    window.location.href = `oppomarket://details?packagename=${id}`;
    return;
  }
  if (getUserAgent('HUAWEI') || getUserAgent('HONOR')) {
    window.location.href = `appmarket://details?id=${id}`;
    return;
  }
  if (getUserAgent('mi')) {
    window.location.href = `mimarket://details?id=${id}`;
    return;
  }
  if (getUserAgent('samsung')) {
    window.location.href = `samsungapps://ProductDetail/${id}`;
    return;
  }
  window.location.href = `https://sj.qq.com/appdetail/${id}`;
}

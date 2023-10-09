/**
 * 数据转换
 */

/**
 * url查询参数转对象
 * @param {*} url 
 * @returns 
 */
export function queryParse(url = '') {
  const query = {};
  try {
    const queryStr = url.split('?')[1] || '';
    const queryArr = queryStr.split('&').map((item) => item.split('='));
    if (queryArr.length === 0 || !queryArr[0]) {
      return query;
    }
    queryArr.forEach(([name, value]) => {
      if(value === undefined || value === null) return;
      if (query[name] === undefined) {
        query[name] = value;
        return;
      }
      if (!(query.name instanceof Array)) {
        query.name = [name];
      }
      query[name].push(value);
    });
    return query;
  } catch (error) {
    return query;
  }
}

/**
 * 对象转查询参数
 * @param {*} query 
 * @returns 
 */
export function queryStringify(query = {}) {
  return Object.keys(query)
    .map((key) => {
      if (query[key] instanceof Array) {
        return queryStringify({ [key]: query[key] });
      }
      if (query[key] instanceof Object) {
        return `${key}=${JSON.stringify(query[key])}`;
      }
      return `${key}=${query[key]}`;
    })
    .join('&');
}

/**
 * _转岮峰
 */
export function underlineToHump(values) {
  if (!values) {
    return values;
  }
  if (values instanceof Array) {
    return values.map((value) => underlineToHump(value));
  }
  if (typeof values === 'object') {
    const vals = JSON.parse(JSON.stringify(values));
    const oldNames = Object.keys(vals);
    const newNames = Object.keys(vals).map((name) => name.replace(/(_[a-z])/g, (match) => match.toUpperCase().replace('_', '')));
    oldNames.forEach((newName) => {
      vals[newName] = underlineToHump(vals[newName]);
    });
    newNames.forEach((newName, i) => {
      const name = Object.keys(vals)[i];
      vals[newName] = underlineToHump(vals[name]);
    });
    return vals;
  }
  return values;
}

/**
 * 岮峰转_
 */
export function humpToUnderline(values) {
  if (!values) {
    return values;
  }
  if (values instanceof Array) {
    return values.map((value) => humpToUnderline(value));
  }
  if (typeof values === 'object') {
    const vals = JSON.parse(JSON.stringify(values));
    const oldNames = Object.keys(vals);
    const newNames = Object.keys(vals).map((name) => name.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`).replace(/^_/, ''));

    oldNames.forEach((newName) => {
      vals[newName] = humpToUnderline(vals[newName]);
    });
    newNames.forEach((newName, i) => {
      const name = Object.keys(vals)[i];
      vals[newName] = humpToUnderline(vals[name]);
    });
    return vals;
  }
  return values;
}

/**
 * 过滤属性值
 */
export function filterValue(options = {}, emptyValues = ['', null, [], [null, null], {}, 'null']) {
  const oldData = JSON.parse(JSON.stringify(options));
  const newData = JSON.parse(JSON.stringify(options));
  Object.keys(oldData).forEach((key) => {
    if (emptyValues.some((emptyValue) => JSON.stringify(emptyValue) === JSON.stringify(oldData[key]))) {
      delete newData[key];
    }
  });
  return newData;
}

/**
 * 最近时间
 */
export function formatterLatelyTime(value) {
  if (!value) return '';
  const datetime =  value instanceof Date? value: value.split('.')[0].split('-').join('/');
  const preTime = new Date(datetime).getTime() / 1000 / 60;
  const nowTime = new Date().getTime() / 1000 / 60;
  if (nowTime - preTime < 1) {
    return '刚刚';
  }
  if (nowTime - preTime < 60) {
    return `${parseInt(nowTime - preTime, 10)}分钟前`;
  }
  if (nowTime - preTime > 60 && nowTime - preTime < 24 * 60) {
    return `${parseInt((nowTime - preTime) / 60, 10)}小时前`;
  }
  if (nowTime - preTime > 24 * 60) {
    return `${new Date(datetime).getFullYear()}.${new Date(datetime).getMonth() + 1}.${new Date(datetime).getDate()}`;
  }
  return '';
}

/**
 * Pascal转-
 * @param {*} key 
 * @returns 
 */
function keyPraseMiddleLine(key) {
  return key
    .replace(/([A-Z])/g, function q(patternStr) {
      return `-${patternStr.toLowerCase()}`;
    })
    .replace(/^-/, '');
}

/**
 * 对象与数据class转换成string
 * @param {*} options
 */
export function parseObjectClass(options = {}) {
  if (typeof options === 'string') {
    return options.replace(/[ ]+/, ' ');
  }
  if (options instanceof Array) {
    return options
      .map((key) => {
        return parseObjectClass(key);
      })
      .join(' ');
  }

  if (options instanceof Object) {
    return Object.keys(options)
      .map((key) => {
        return options[key] ? key : '';
      })
      .join(' ');
  }
  return options;
}

/**
 * 对象与数据样式转换成string
 * @param {*} options
 */
export function parseObjectStyle(options = {}) {
  if (typeof options === 'string') {
    return options;
  }
  return Object.keys(options)
    .map((key) => {
      const newKey = keyPraseMiddleLine(key);
      if (typeof options[key] === 'object') {
        return parseObjectStyle(options[key]);
      }
      return `${newKey}:${options[key]};`;
    })
    .join('');
}
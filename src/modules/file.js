/**
 * 文件处理
 */

/**
 * url下载后转为base64
 * @param {*} url
 * @returns
 */
export const urlToBase64 = async (url) => {
  // if (!/^[\w]+\\:/.test(url) && !/^\//.test(url)) {
  //   return url;
  // }
  if (!/^[\w]+:\/\//.test(url) ) {
    return url;
  }
  const version = /\?/.test(url) ? `&v=${new Date().getTime()}` : `?v=${new Date().getTime()}`;
  const xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.responseType = 'arraybuffer';
    xhr.onerror = reject;
    let contentType = null;
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
        // 如果 readyState 表示响应头已返回
        contentType = xhr.getResponseHeader('Content-Type'); // 将此连接的 Content-Type 响应头项赋值到 contentType。
      }
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        return;
      }
      resolve(`data:${contentType};base64,${window.btoa(new Uint8Array(xhr.response).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`);
    };
    xhr.open('GET', `${url}${version}`, true);
    xhr.send();
  });
};

export async function urlToFile(url) {
  const base64 = await urlToBase64(url);
  return base64ToFile(base64);
}

export async function urlToBlob(url) {
  const base64 = await urlToBase64(url);
  return base64ToBlob(base64);
}


export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      resolve(event.target.result);
    };
    fileReader.onerror = reject;
    fileReader.readAsDataURL(file);
  });
}

export function fileToArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      resolve(event.target.result);
    };
    fileReader.onerror = reject;
    fileReader.readAsArrayBuffer(file);
  });
}

export function base64ToFile(dataURL, fileName, mimeType = null) {
  const arr = dataURL.split(',');
  const defaultMimeType = arr[0].match(/:(.*?);/)[1];
  const suffix = defaultMimeType.split('/')[1];
  const fileName0 = `${new Date().getTime()}.${suffix}`;
  const bStr = window.atob(arr[1]);
  let n = bStr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bStr.charCodeAt(n);
  }
  return new File([u8arr], fileName || fileName0, { type: mimeType || defaultMimeType });
}

export function base64ToBlob(base64, fileType) {
  // 第二种：直接传入base64文件
  const audioSrc = base64; // 拼接最终的base64

  const arr = audioSrc.split(',');
  const array = arr[0].match(/:(.*?);/);
  const mime = (array && array.length > 1 ? array[1] : fileType) || fileType;
  // 去掉url的头，并转化为byte
  const bytes = window.atob(arr[1]);
  // 处理异常,将ascii码小于0的转换为大于0
  const ab = new ArrayBuffer(bytes.length);
  // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
  const ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], {
    type: mime,
  });
}

export function base64ToBuffer(base64) {
  const text = new TextEncoder();
  return text.encode(btoa(base64));
}

export function base64ToUint8Array(base64String) {
  const arr = base64String.split(',');
  const bStr = window.atob(arr[1].replace(/[\n\r]/g, ''));
  const u8arr = new Uint8Array(bStr.length);
  for (let i = 0; i < bStr.length; i++) u8arr[i] = bStr.charCodeAt(i);
  return u8arr;
}

export function blobToBase64(blob) {
  const a = new FileReader();
  return new Promise((resolve, reject) => {
    a.readAsDataURL(blob);
    a.onload = function b(e) {
      resolve(e.target.result);
    };
    a.onerror = reject;
  });
}

export function blobToArrayBuffer(blob) {
  const a = new FileReader();
  return new Promise((resolve, reject) => {
    a.readAsArrayBuffer(blob);
    a.onload = function b(e) {
      resolve(e.target.result);
    };
    a.onerror = reject;
  });
}


// ios翻译文件内容
export function jsonToStrings(options = {}) {
  return Object.keys(options).map((key) => {
    const items = options[key];
    const value = Object.keys(items)
      .map((itemKey) => {
        return `"${itemKey}"="${items[itemKey]}";`;
      })
      .join('\n');
    const item = { type: 'strings', key };
    item.value = new Blob([value], {
      type: 'text/plain',
    });
    return item;
  });
}

// android翻译文件内容
export function jsonToXML(options = {}) {
  return Object.keys(options).map((key) => {
    const items = options[key];
    const value = Object.keys(items)
      .map((itemKey) => {
        return `    <string name="${itemKey}">${items[itemKey]}</string>`;
      })
      .join('\n');
    const item = { type: 'xml', key };
    const content = `<?xml version="1.0" encoding="utf-8"?>\n<resources xmlns:tools="http://schemas.android.com/tools">\n${value}\n</resources>`;
    item.value = new Blob([content], {
      type: 'application/xml',
    });
    return item;
  });
}

// js翻译文件内容
export function jsonToJavascript(options = {}) {
  function parseObjectValue(outValue = {}) {
    let valueMap = {};
    const keys = Object.keys(outValue).map((key) => `${key}`.split('.'));
    keys.forEach((key) => {
      console.log(key);
      key.forEach((name, index) => {
        const prevOriginKeys = key
          .slice(0, index)
          .map((name2) => `['${name2}']`)
          .join('');
        const currentOriginKeys = key
          .slice(0, index + 1)
          .map((name2) => `['${name2}']`)
          .join('');
        const prevPathKeys = key
          .slice(0, index)
          .map((name2) => `${name2}`)
          .join('.');
        const currentPathKeys = key
          .slice(0, index + 1)
          .map((name2) => `${name2}`)
          .join('.');
        try {
          console.log(currentOriginKeys, currentPathKeys);
          if (!outValue[currentPathKeys] && eval(`!valueMap${currentOriginKeys}`)) {
            eval(`valueMap${currentOriginKeys}={}`);
          }
          // // 以.分割的上一级key重复，以{}覆盖
          if (index > 0 && new RegExp(prevPathKeys).test(currentPathKeys)) {
            eval(`valueMap${prevOriginKeys} = valueMap${prevOriginKeys} && typeof valueMap${prevOriginKeys} === 'object'? valueMap${prevOriginKeys}:{};`);
          }
          const newValue = eval(`outValue["${currentPathKeys}"]||valueMap${currentOriginKeys}||{}`);
          console.log(newValue);
          eval(`valueMap${currentOriginKeys} =  ${JSON.stringify(newValue)}`);
        } catch (error) {
          eval(`valueMap${currentOriginKeys} =  {}`);
        }
      });
    });
    return valueMap;
  }

  return Object.keys(options).map((key) => {
    const items = options[key];
    const value = `/* eslint-disable max-len */\nexport default ${JSON.stringify(parseObjectValue(items), null, '  ')}
    `;
    const item = { type: 'js', key, fileName: key+'.js' };
    item.value = new Blob([value], {
      type: 'text/javascript',
    });
    return item;
  });
}

export async function pdfFileToPage(pdfjsLib, file) {
  if (!file || !pdfjsLib) return [];
  const arrayBuffer = await fileToArrayBuffer(file);
  const pdfContent = await pdfjsLib.getDocument(arrayBuffer).promise.then((res) => res);
  const numPageArrays = [...new Array(pdfContent.numPages)].map((val, index) => index + 1);
  return Promise.all(numPageArrays.map((page) => pdfContent.getPage(page)));
}
export async function pdfPageToImage({ pages, onProgress }) {
  if (!pages) return [];
  let current = 0;
  const images = await Promise.all(
    pages.map(async (page) => {
      const viewport = page.getViewport({ scale: 2 });
      const canvas = document.createElement('canvas');
      const canvasContext = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext, viewport }).promise;
      if (onProgress) {
        onProgress({ total: pages.length, current: ++current });
      }
      return canvas.toDataURL('image/jpeg');
    })
  );
  return images;
}

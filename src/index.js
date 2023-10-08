export { default as JSONSort } from './modules/JSONSort'; // json属性排序
export { default as CONSTANTS } from './modules/constants'; // 常量
export  * as Convert  from './modules/convert'; // 数据转换
export  * as Color  from './modules/color'; // 数据转换
export  * as File  from './modules/file'; // 文件处理
export  * as Functions  from './modules/functions'; // 功能

/**
 * 随机UUID
 * @returns 
 */
export default function randomUUID() {
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
export function ossVideoSnapshot(outSrc, outWidth = 80, outHeight = 80, v = new Date().getTime()) {
  if (!outSrc || /(jpg|png|gif|jpeg)$/.test(outSrc)) return outSrc || '';
  const backgroundImageUrl = /^http/.test(outSrc) ? `${outSrc.split('?')[0]}?x-oss-process=video/snapshot,t_1000,w_${outWidth},h_${outHeight},f_jpg,m_fast&v=${v}` : outSrc;
  return backgroundImageUrl;
}

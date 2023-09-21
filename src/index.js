export function parseQuery() {}


export default function randomUUID() {
  const tempUrl = URL.createObjectURL(new Blob());
  const uuid0 = tempUrl.toString();
  URL.revokeObjectURL(tempUrl); // 释放这个url
  return uuid0.substring(uuid0.lastIndexOf('/') + 1);
}

export function getVideoSnapshot(src, v = new Date().getTime()) {
  if (!src || /(jpg|png|gif|jpeg|bmp)$/.test(src)) return src || '';
  const backgroundImageUrl = /^http/.test(src) ? `${src.split('?')[0]}?x-oss-process=video/snapshot,t_1000,w_800,f_png,m_fast&v=${v}` : src;
  return backgroundImageUrl;
}
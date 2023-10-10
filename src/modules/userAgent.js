/**
 * 用户端环境判断
 */

/**
 * 是否安卓系统
 * @returns Boolean
 */
export function isAndroid(){
  return (window.navigator.userAgent.toLowerCase().match(/android/i) && true) || false;
} 

/**
 * 是否苹果系统
 * @returns Boolean
 */
export function isApple(){
  return window.navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad);?/i) || false;
} 

/**
 * 是否微信
 * @returns Boolean
 */
export function isMicroMessenger() {
  return (window.navigator.userAgent.toLowerCase().match(/micromessenger/i) && true) || false;
}

/**
 * 是否小程序
 * @returns Boolean
 */
export function isMiniProgram() {
  return (window.navigator.userAgent.toLowerCase().match(/miniprogram/i) && true) || false;
}

/**
 * 是否QQ
 * @returns Boolean
 */
export function isQQ() {
  return (window.navigator.userAgent.toLowerCase().match(/qq/i) && true) || false;
}

/**
 * 是否微博
 * @returns Boolean
 */
export function isWeibo() {
  return (window.navigator.userAgent.toLowerCase().match(/weibo/i) && true) || false;
}

/**
 * 是否钉钉
 * @returns Boolean
 */
export function isDingtalk() {
  return (window.navigator.userAgent.toLowerCase().match(/dingtalk/i) && true) || false;
}
 
/**
 * 是否移动端
 * @returns Boolean
 */
export function isMobile() {
  return (window. navigator.userAgent.toLowerCase().match(/mobile/i) && true) || false;
}

/**
 * 是否CFMOTO APP
 * @returns Boolean
 */
export function isCfmotoApp(){
  return (window.navigator.userAgent.toLowerCase().match(/cfmoto/i) && true) || false;
}

/**
 * 是否ZEEHO APP
 * @returns Boolean
 */
export function isZeehoApp(){
  return (window.navigator.userAgent.toLowerCase().match(/zeeho/i) && true) || false;
}
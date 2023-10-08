/**
 * 常量
 */

// 图片格式
export const FILE_ACCEPT_IMAGE = '.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP'; 
// 图片与视频格式
export const FILE_ACCEPT_MEDIA = '.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.mp4,.avi';
// 办公文件格式
export const FILE_ACCEPT_OFFICE = '.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.rar,.zip';

// 特殊符号正则
export const PATTERN_SYMBOL = /[~!@#$%^&*]/g;
//  表情正则
export const PATTERN_EMOJI = '[\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]';
// 手机号 
export const PATTERN_PHONE = /^1[3-9][\d]{9}$/
// 邮箱 
export const PATTERN_EMAIL = /^[\w-]+@[\w]+(\.[a-zA-Z]+)+$/
// 身份证号
export const PATTERN_IDENTITY = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
// url
export const PATTERN_URL = /^([a-z]+:\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/;
// 十六进制颜色
export const PATTERN_HEX = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
// 车牌号
export const PATTERN_PLAT_NUMBER = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领警A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;

// 密码正则：8位以上数字大小写字母特殊符号
export const PATTERN_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[，。、《》？；‘：“”【】·！@#￥%……&*（）——~!@#$%^&*()_+`\-={}:";'<>?,.\\/]).{8,20}$/;

export default {
  FILE_ACCEPT_MEDIA,
  FILE_ACCEPT_IMAGE,
  FILE_ACCEPT_OFFICE,
  PATTERN_PASSWORD,
  PATTERN_URL,
  PATTERN_HEX,
  PATTERN_EMOJI,
  PATTERN_PHONE,
  PATTERN_EMAIL,
  PATTERN_SYMBOL,
  PATTERN_IDENTITY,
  PATTERN_PLAT_NUMBER
}
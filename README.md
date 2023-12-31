# cfmoto工具
cfmoto工具

## 一、快速开始
### 安装
```
npm install -S cfmoto-utils

```

### 使用
```
import { queryParse } from 'cfmoto-utils';

queryParse(window.location.href)

```

## 二、常量

### 图片格式

```
import { CONSTANTS } from 'cfmoto-utils';

CONSTANTS.FILE_ACCEPT_IMAGE

```
### 图片与视频格式

```
import { CONSTANTS } from 'cfmoto-utils';

CONSTANTS.FILE_ACCEPT_MEDIA

```

### 办公文件格式

```
import { CONSTANTS } from 'cfmoto-utils';

CONSTANTS.FILE_ACCEPT_OFFICE

```

### 手机号正则

```
import { CONSTANTS } from 'cfmoto-utils';

CONSTANTS.PATTERN_PHONE

```

### 邮箱正则

```
import { CONSTANTS } from 'cfmoto-utils';

CONSTANTS.PATTERN_EMAIL

```

### 特殊符号正则

```
import { CONSTANTS } from 'cfmoto-utils';

CONSTANTS.PATTERN_SYMBOL

```

### 表情正则

```
import { CONSTANTS } from 'cfmoto-utils';

CONSTANTS.PATTERN_EMOJI

```

### 身份证号

```
import { CONSTANTS } from 'cfmoto-utils';

CONSTANTS.PATTERN_IDENTITY

```

### url

```
import { CONSTANTS } from 'cfmoto-utils';

CONSTANTS.PATTERN_URL

```

### 十六进制颜色

```
import { CONSTANTS } from 'cfmoto-utils';

CONSTANTS.PATTERN_HEX

```

### 车牌号

```
import { CONSTANTS } from 'cfmoto-utils';

CONSTANTS.PATTERN_PLAT_NUMBER

```

### 密码正则：8位以上数字大小写字母特殊符号

```
import { CONSTANTS } from 'cfmoto-utils';

CONSTANTS.PATTERN_PASSWORD

```

## 三、用户环境

### 是否安卓系统
```isAndroid()```

### 是苹果系统
```isApple()```

### 是否微信
```isMicroMessenger()```

### 是否小程序
```isMiniProgram()```

### 是否QQ
```isQQ()```

### 是否微博
```isWeibo()```

### 是否钉钉
```isDingtalk()```

### 是否移动端
```isMobile()```

### 是否CFMOTO APP
```isCfmotoApp()```

### 是否ZEEHO APP
```isZeehoApp()```

## 四、功能与数据

### 节流防抖 
```throttle(time,callback)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| time | Number | 是 | 300 | 时间毫秒 |
| callback | Function | 是 | event | 回调函数 |

- 返回值 Function result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | Function | 执行函数 | document.addEventListener('scroll',result) |

### 节点递归算法 
```recursiveNode(id, parentId, children)(values)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| id | String | 是 | id | 唯一主键名称 |
| parentId | String | 是 | parentId | 唯一父主键名称 |
| children | String  | 是 | children | 生成的子节点属性名称 |
| values | Array  | 是 | \[{id:'3',parentId:'2'}\] | 所有节点数据 |

- 返回值 Array\<\Object\> result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | Array<Object>  | 节点组合 | \[\{id:'3',parentId:'2',children:\[\]\}\] |

### 展开节点 
```spreadNode(values, children)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| values | Array  | 是 |  \[\{id:'3',parentId:'2',children:\[\]\}\]  | 所有节点数据 |
| children | String  | 是 | children | 展开的子节点属性名称 |

- 返回值 Array\<\Object\> result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | Array\<\Object\>  | 节点组合 | \[{id:'3',parentId:'2'}\] |

### 从应用市场唤起APP-国际标准 
```launchApplication(id)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| id | String  | 是 | com.lxc.cfmoto | android包名或ios appid |

### 从应用市场唤起APP-国内标准 
```launchApplicationDAMS(id)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| id | String  | 是 | com.lxc.cfmoto | android包名或ios appid |



### oss缩略图
```ossImageResize(options)```

| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| options.src | String or Array | 是 | https://xxxx.xxx.com/xxx.jpg | oss图片地址 |
| options.m | String | 否 | lfit | 模式：lfit、mfit、fill、pad、fixed，默认为 lfit |
| options.w | Number | 否 | 1-4096 | 宽度 |
| options.h | Number | 否 | 1-4096 | 高度 |
| options.l | Number | 否 | 1-4096 | 长边宽度 |
| options.s | Number | 否 | 1-4096 | 短边宽度 |
| options.limit | Number | 否 | 1 | 0/1, 默认是 1 |
| options.v | String | 否 | 1.0.0 | 版本号防止缓存，默认为timestamp |

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | 新的地址 | https://xxx.xxx.com/xxx.jpg?x-oss-process=image/resize,m_lfit,w=100,h_100&v=12334455545 |

### OSS视频快照
```ossVideoSnapshot(options)```

| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| options.src | String | 是 | https://xxxx.xxx.com/xxx.mp4 | oss视频地址 |
| options.w | Number | 否 | 100 | 指定截图宽度，如果指定为0，则自动计算 |
| options.h | Number | 否 | 100 | 指定截图高度，如果指定为0，则自动计算；如果w和h都为0，则输出为原视频宽高 |
| options.t | Number | 否 | 1000 | 单位：ms,指定截图时间。如果设置的截图时间t超过了视频时长，则返回视频的最后一帧关键帧 |
| options.m | String | 否 | fast | 指定截图模式,不指定则为默认模式，根据时间精确截图。如果指定为fast，则截取该时间点之前的最近的一个关键帧 |
| options.f | String | 否 | jpg or png | 指定输出图片的格式 |
| options.ar | String | 否 | auto or h or w | 指定是否根据视频信息自动旋转图片 |
| option.v | String | 否 | 1.0.0 | 版本号防止缓存，默认为timestamp |

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | 新的地址 | https://xxx.xxx.com/xxx.mp4?x-oss-process=video/snapshot,t_1000,w=100,h_100,f_jpg,m_fast&v=12334455545 |

### 生成随机UUID
```randomUUID()```

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | uuid | dadd-ddafd-fddf-fdsfs |

### 千分位转换
```convertThousandth```
- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| value | String Or Number | 数值 | 12333.000 |
| defaultValue | String Or Number | 默认值 | 0 |

- 返回值 String result

### 解析url查询参数
```queryParse(url)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| url | String | 是 | ?a=11&b=22 | url问号后的部分 |

- 返回值 Object result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | Object | JSON对象 | { a: 11, b: 22 } |

### 将url转换成url查询参数
```queryStringify(options)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| options | Object | 是 | {a: 11, b: 22} | JSON对象 |

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | url查询参数 | a=11&b=22 |


### 岮峰转_
```humpToUnderline(options)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| options | Object | 是 | {aA: 11, bB: 22} | JSON对象 |

- 返回值 Object result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | Object | JSON对象 | {a_a:11, b_b: 22} |

### _转岮峰
```underlineToHump(options)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| options | Object | 是 | {a_a: 11, b_b: 22} | JSON对象 |

- 返回值 Object result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | Object | JSON对象 | {aA:11, bB: 22} |

### 过滤空值
```filterValue(options, fields)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| options | Object | 是 | {a: [], b: '', c: null, d: 11} | JSON对象 |
| fileds | Array | 是 | ['',null, []] | 需要过滤的值 |

- 返回值 Object result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | Object | JSON对象 | {d:11} |

### 最近时间(评论或聊天会话)
```formatterLatelyTime(options, fields)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| options | Date or String | 是 | 2022-10-12 23:34:34 | 日期对象或日期YYYY-MM-DD HH:mm:ss格式化字符串 |

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | 最近的时间说明 | 最近，1分钟前，1小时前，1天前，2022-10-12 23:34:34  |

### 对象与数据class转换成string 
```parseObjectClass(options)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| options | Object or Array | 是 | [{classa:true},'classb'] | 对象数组或字条串 |

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | class 组合 | "classa classb"  |

### 对象与数据样式转换成string 
```parseObjectStyle(options)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| options | Object or Array | 是 | [{classa:true},'classb'] | 对象数组或字条串 |

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | class 组合 | "classa classb"  |

### JSON排序深拷贝

```
import {JSONSort} from 'cfmoto-utils'
JSONSort.stringify({a:'11', b: '22'});
JSONSort.parse("{}")
```

## 五、文件

### url下载后转为base64 
```urlToBase64(url)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| url | String | 是 | https://sss.dddd.scom/ffssf.xml | url文件地址 |

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | base64文件内容 |  base64:image/png,xxxx  |

### url下载后转为base64 
```urlToBase64(url)```

### url转File 
```urlToFile(url)```

### url转Blob
```urlToBlob(file)```

### File转为base64 
```fileToBase64(file)```

### File转为ArrayBuffer
```fileToArrayBuffer(file)```

### base64转File
```base64ToFile(file)```

### base64转Blob
```base64ToBlob(file)```

### base64转Buffer
```base64ToBuffer(file)```

### base64转Uint8Array
```base64ToUint8Array(file)```

### blob转Base64
```blobToBase64(file)```

### blob转ArrayBuffer
```blobToArrayBuffer(file)```

### blob转ArrayBuffer
```blobToArrayBuffer(file)```

### ios翻译文件内容
```jsonToStrings(options)```

| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| options | Object | 是 | \{zh:\{a:'aa'\}\} | Object.keys(options).map(key=>options\[key\]) key：翻译语言标识，options\[key\]：翻译语言内容 |

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | ios翻译文件文本内容 | "aaa"="222" |

### android翻译文件内容
```jsonToXML(options)```

| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| options | Object | 是 | \{zh:\{a:'aa'\}\} | Object.keys(options).map(key=>options\[key\]) key：翻译语言标识，options\[key\]：翻译语言内容 |

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | android翻译文件文本内容 | \<?xml version="1.0" encoding="utf-8"?><resources>${value}</resources> |

### js翻译文件内容
```jsonToJavascript(options)```


| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| options | Object | 是 | \{zh:\{a:'aa'\}\} | Object.keys(options).map(key=>options\[key\]) key：翻译语言标识，options\[key\]：翻译语言内容 |

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | javascript翻译文件文本内容 | export default {} |



### 将pdf文件转换为pdf页面对象
```pdfFileToPage(pdfjsLib, file)```

| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| pdfjsLib | Object | 是 | pdfjsLib | pdfjsLib js库对象 |
| file | File | 是 | file Object | pdf文件 |

- 返回值 Promise<Array<PdfPage>> pages

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| pages | Promise<Array<PdfPage>> | Promise PDF Pages 页面数组 |  |

### 将pdf页面对象数组转为图片数组
```pdfPageToImage({ pages, onProgress })```

| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| pages | Array<Pages> | 是 | PdfPage | PDF页面对象 |
| onProgress | Function | 是 | event | pdf页面转换进度 |

- 返回值 Promise<Array<String>> bas64String

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| bas64String | Promise<Array<String>> | base64字符串数组 |  |

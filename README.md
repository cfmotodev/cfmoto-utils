# cfmoto工具
cfmoto工具

## 一、快速开始
### 安装
```
npm install -S cfmoto-utils

```

### 使用
```
import { parseQuery } from 'cfmoto-utils';

parseQuery(window.location.href)

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


## 三、API使用说明

### 解析url查询参数
```parseQuery(url)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| url | String | 是 | ?a=11&b=22 | url问号后的部分 |

- 返回值 Object result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | Object | JSON对象 | { a: 11, b: 22 } |

### 将url转换成url查询参数
```stringifyQuery(options)```
| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| options | Object | 是 | {a: 11, b: 22} | JSON对象 |

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | url查询参数 | a=11&b=22 |

### 生成随机UUID
```randomUUID()```

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | uuid | dadd-ddafd-fddf-fdsfs |

### oss缩略图
```ossImageResize(src, width, height, v)```

| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| src | String | 是 | https://xxxx.xxx.com/xxx.jpg | oss图片地址 |
| width | String | 否 | 100 | 宽度 |
| height | String | 否 | 100 | 调试 |
| v | String | 否 | 1.0.0 | 版本号防止缓存，默认为timestamp |

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | 新的地址 | https://xxx.xxx.com/xxx.jpg?x-oss-process=image/resize,m_lfit,w=100,h_100&v=12334455545 |

### OSS视频快照
```ossVideoSnapshot(src, width, height, v)```

| 参数 | 参数类型 | 是否必须 | 参数值 | 参数说明 |
| :-----| :---- | :---- | :---- | :---- |
| src | String | 是 | https://xxxx.xxx.com/xxx.mp4 | oss视频地址 |
| width | String | 否 | 100 | 宽度 |
| height | String | 否 | 100 | 调试 |
| v | String | 否 | 1.0.0 | 版本号防止缓存，默认为timestamp |

- 返回值 String result

| 属性 |  类型 | 说明 | 示例
| :----- | :---- | :---- |  :---- |
| result | String | 新的地址 | https://xxx.xxx.com/xxx.mp4?x-oss-process=video/snapshot,t_1000,w=100,h_100,f_jpg,m_fast&v=12334455545 |
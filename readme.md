# tracker
这是一个埋点SDK
This is a buried SDK

使用方法如下
The usage is as follows


```js
import Tracker from 'buriedpoint'

new Tracker({
    requestUrl:"xxxxxx"
})

```
options 介绍
Options introduction
```ts

/**
 * @requestUrl 接口地址
 * @historyTracker history上报
 * @hashTracker hash上报
 * @domTracker 携带Tracker-key 点击事件上报
 * @sdkVersion 版本
 * @extra 透传字段
 * @jsError js和promise报错异常上报
 */
export interface DefaultOptions {
    uuid: string | undefined,
    requestUrl: string | undefined,
    historyTracker: boolean,
    hashTracker: boolean,
    domTracker: boolean,
    sdkVersion: string | number,
    extra: Record<string, any> | undefined,
    jsError: boolean
}
```

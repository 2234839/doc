# storage 事件 + 回调

- pubdate:2019-04-11 17:20:25
- tags : JavaScript，工具

跨页面传值通讯

---

[mdn storage 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/defaultView/storage_event)

最近跨页面传值碰到的越来越多，a 页面要刷新 b 页面，b 页面要拿 c 页面的值之类的，简单的监听 storage 事件已经不能够满足需求了 。

于是对 storage 事件进行了封装，解决了 storage 事件的一些弊端

- 触发写入操作的页面下的 **storage listener** 不会被触发
- 重复设置相同值不会触发 listener

未解决的问题

- Safari 隐身模式下无法设置 localStorage 值 _由于目前主要用于混合式 app 开发，基本不会遇上这个问题，所以留待以后解决_

完成的一些扩展

- 可以传递对象
- 监听器会尝试解析值转成对象
- **可以传递一个回调函数** (这是看到 socket.io 可以传递函数产生的想法，最终实现了，不知道和 socket.io 的思路是否一致)

## ts 实现的代码

```typescript
/*------------[Storage]------------*/
interface onStorageCallback {
  (...args: any[]): void;
}
/** 存入的值的接口 */
interface onStorageValue {
  _callback_function_?: Function | string;
  /** 用于确保每次都触发事件 */
  _date_now_time_: number;
  [key: number]: any;
  [key: string]: any;
}
/** 取出的值的接口 */
interface onStorageValue2 extends onStorageValue {
  /** 回调函数 */
  _callback_function_: Function;
}
interface onStorageEvent {
  key: string;
  oldValue: string;
  newValue: onStorageValue;
  local: boolean;
}
let util_onStorage_map = new Map(); //存储监听的事件和函数
/**
 * 监听storage事件
 * @param {String} key	 	要监听的storage key
 * @param {Function} fun	事件处理函数 (e.newValue,e)
 */
export function onStorage(key: string, fun: { (...args: any[]): void }) {
  util_onStorage_map.set(key, fun);
}
/**
 * 触发storage事件
 */
export function triggerStorage(key: string, value: any, callback?: onStorageCallback) {
  let event: onStorageEvent = {
    key,
    oldValue: localStorage.getItem(key),
    newValue: value,
    local: false,
  };
  if (typeof value === "object") {
    /** 当前时间戳 */
    value._date_now_time_ = Date.now(); // 以便每次都触发
    if (callback) {
      //存在回调函数
      /** 回调函数监听的key */
      value._callback_function_ = "_callback_" + callback.name + "_" + Date.now();
      /** 上面那个key触发的事件交给 callback */
      onStorage(value._callback_function_, (value) => callback(...value));
    }
    localStorage.setItem(key, JSON.stringify(value));
  } else localStorage.setItem(key, value);
  if (util_onStorage_map.has(event.key)) {
    //此页面也有监听storage的函数，因为下面的监听捕获不到故在此处罚
    event.local = true; //这个事件是自己这个页面触发的
    handle(event);
  }
}
window.addEventListener("storage", handle);

function handle(e: any) {
  var newValue = e.newValue;
  try {
    /** 尝试序列化 */
    newValue = JSON.parse(e.newValue);
  } catch (e) {}
  if (typeof newValue === "object" && newValue._callback_function_ !== undefined) {
    const storageKey = newValue._callback_function_;
    /** 传递过来的回调函数 */
    newValue._callback_function_ = function(...value: any) {
      triggerStorage(storageKey, value);
    };
  }
  if (util_onStorage_map.has(e.key))
    //将新值传给监听该key的函数
    util_onStorage_map.get(e.key)(newValue, e); //触发监听这个key的函数
}
/*############[Storage]############*/
```


{: id="20201104153359-xardzca" type="doc"}

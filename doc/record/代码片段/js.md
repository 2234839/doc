# 我的代码片段 js 版

- pubdate:2020-02-21 16:08:36
- tags:js,ts

---

> requestAnimationFrame \* setTimeout == setAnimationInterval

```typescript
const { setAnimationInterval, clearAnimationInterval } = (() => {
  const fun_id_list: number[] = [];
  /** 用来记录递增的id */
  let id = 0;
  /**
   * 设置一个定时执行的函数，但他只会在requestAnimationFrame允许执行的时候再执行
   * 也就是说最小执行时间间隔是requestAnimationFrame的间隔
   * 最大时间间隔是interval_time+requestAnimationFrame+js线程阻塞的时间 */
  function setAnimationInterval(f: () => any, interval_time: number) {
    const _id = id++;
    const f5 = () => {
      if (fun_id_list.includes(_id)) {
        f();
        setTimeout(() => {
          requestAnimationFrame(f5);
        }, interval_time);
      } else {
        return;
      }
    };
    requestAnimationFrame(f5);
    fun_id_list.push(_id);
    return _id;
  }
  /** 清除设置的定时器 */
  function clearAnimationInterval(id: number) {
    fun_id_list.splice(fun_id_list.indexOf(id), 1);
  }
  return {
    setAnimationInterval,
    clearAnimationInterval,
  };
})();
export { setAnimationInterval, clearAnimationInterval };
```


{: id="20201104153359-2ipuyup" type="doc"}

# ts技巧

- pubdate:2019-08-21 10:35:43
- tags:typescript,技巧

---------

## 使用typeof获取数组中元素的类型

有时候接收到的数组是别人传过来的，要定义一个数组元素的类型就可以用这个

```typescript

const list=<{a:123}>[]

const temp=list[0]
const el=typeof temp[0]
```

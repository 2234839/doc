# ts技巧

- pubdate:2019-08-21 10:35:43
- update:2019-09-18 09:27:08
- tags:typescript,技巧

[深入理解 TypeScript](./深入了解Typescript)

[typescript中文手册](./typescript中文手册)

---------

[我写的一个工具模块其中关于类型方面的](https://dev.tencent.com/u/sheng_gu/p/js_util/git/tree/master/ts-type)
    [我觉得写的还可以的一个方法](https://dev.tencent.com/u/sheng_gu/p/js_util/git/blob/master/adap/cb-promise.ts)

## [typescript 内置的一些实用类型](https://www.typescriptlang.org/docs/handbook/utility-types.html)

## 关于怎么使用ts类型系统

ts类型系统并非简简单单的 name:type 它真正的强大在于类型推断，要能够让它的类型推断完全发挥作用就需要掌握泛型

下面是加减

```typescript

// 获取一个值（变量 函数 。。。）的类型
type window_type=typeof window
// 这样我们就获取到 window 的类型了，其实 window 的类型你能够在vscode中通过悬停提示看到也是应为typescript的开发人员编写了windw 的类型
```

## 实战技巧

1. [为vuex提供代码提示](./typescript-vuex.md)

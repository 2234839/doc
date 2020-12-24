# ts 技巧

- pubdate:2019-08-21 10:35:43
- update:2020-06-10 14:42:28
- tags:typescript，技巧

---

## TypeScript 怎么上手？

可以先在这里试水 [TypeScript 在线尝试](https://www.typescriptlang.org/v2/en/play) 这里有些例子可以初步让你从 js 过渡到 ts，这些例子也基本覆盖了常用的一些操作

怎么深入？ [其他 ts 文档](#资源)

## 我为什么使用 ts

我用 typescript 的着重点在于

1. 可以在不用去看详细代码的情况下基本确定一个函数该传哪些参数，可以得到哪些返回值。也即是 **typescript 很好的体现了代码即文档这一思想** 原来使用 js 想要达到这样的境界需要编写详细的 jsdoc 以后每次更新也都需要修订 jsdoc 颇为繁琐。
2. js 本身的动态性就决定了无法得到 IDE 的支援，而 ts 却可以得到 IDE 最顶尖的代码提示与校验，可以防范低级错误发生的频率
3. ts 可以减慢项目的混乱程度的增加速度
4. 实际上完善的类型推导和类型定义是能够加速项目开发并且减少返工次数，也能够提高对自己代码的信心

## [typescript 内置的一些实用类型](https://www.typescriptlang.org/docs/handbook/utility-types.html)

## 实战技巧

1. [为 vuex 提供代码提示](./typescript-vuex.md)

## 资源

[深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/#why)

[typescript 中文手册](https://typescript.bootcss.com/interfaces.html)


{: id="20201104153359-whnn14z" type="doc"}

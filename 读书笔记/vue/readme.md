# vue.js

- pubdate:2019-11-05 09:29:31
- tags:vue

---

## style

[关于样式的作用域 可以通过 /deep/ 来让样式在子组件中生效](https://vue-loader-v14.vuejs.org/zh-cn/features/scoped-css.html)

## vue 和 ts 一起使用的一些问题

> 计算属性中报 类型“CombinedVueInstance<Vue, unknown, unknown, unknown, Readonly<Record<never, any>>>”上不存在属性“XXXX”

    - 这里需要给计算属性中的函数手动标注返回值

# vue.js
{: id="20201123170136-zn4rhxx"}

- {: id="20201123170136-7yivilq"}pubdate:2019-11-05 09:29:31
- {: id="20201123170136-56ujuav"}tags:vue
{: id="20201123170136-vjkc7i3"}

---

## style
{: id="20201123170136-gb1ojtf"}

[关于样式的作用域 可以通过 /deep/ 来让样式在子组件中生效](https://vue-loader-v14.vuejs.org/zh-cn/features/scoped-css.html)
{: id="20201123170136-xm9ju5s"}

## #vue# 和 ts 一起使用的一些问题
{: id="20201123170136-abak97o"}

> 计算属性中报 类型“CombinedVueInstance<Vue, unknown, unknown, unknown, Readonly<Record<never, any>>>”上不存在属性“XXXX”
> {: id="20201123170136-3o7ebbm"}
{: id="20201123170136-1s8ftap"}

==这个是因为vue要求必须给计算属性中的函数手动标注返回值类型==
{: id="20201123170136-cc7ef5m"}

## 修改属性后没有触发视图或者计算属性等更新
{: id="20201123170136-xo879vc"}

这个多半是因为你修改的对象原本没有这个属性，因为目前 vue 使用 Object.defineProperty 实现数据的响应式，而这个方法不可能监听到任意属性的修改，所以需要先使用 Vue.set 将相关属性设置为响应式。 也许以后 vue 使用 proxy 实现的时候就不用管这个问题了
{: id="20201123170136-180dovo"}


{: id="20201104153359-f25ee82" type="doc"}

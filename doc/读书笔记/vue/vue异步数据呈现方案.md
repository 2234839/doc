# vue异步数据呈现方案
{: id="20210108205622-uzauzyw"}

​[demo 地址](https://2234839.github.io/vue-demo/?template_name=promise-loading)  [源码地址](https://github.com/2234839/vue-demo/tree/master/src/components/promise-loading)
{: id="20210108200154-ax9rjf2"}

## 起因
{: id="20210108200404-gckt5vm"}

当我领会到 ((20201231154951-w78fwxr "写程序的重点在于处理好输入与输出之后")) 再来写一个搜索组件的时候我关于loading 的思考如下
{: id="20210108200527-8xw00z6"}

- {: id="20210108201203-2sozhbf"}什么时候显示 loading ？
  - {: id="20210108201210-5oc3fwr"}请求发起后还没有到达的这一段时间
  {: id="20210108201210-3b0vlvz"}
- {: id="20210108201212-q7uc93z"}怎么控制视图在这段时间内显示 loading ？
  - {: id="20210108201244-cjk5fsa"}使用一个变量来控制
  {: id="20210108201244-4ejp1da"}
- {: id="20210108201300-dnh8d84"}那这个变量属于输入吗？
  - {: id="20210108201315-6441hb1"}不算，他是一个输出，这个搜索组件的输入只有一个: `searchText`
  {: id="20210108201315-xtmi4e7"}
- {: id="20210108201424-6km7fy7"}这个输出的相关的 input、 transform 怎么样的？
  - {: id="20210108201454-0sr4exy"}input:searchText -> transform:异步请求 -> output:loading 状态
  {: id="20210108201457-67ycdhi"}
- {: id="20210108202413-8s04uhd"}怎么实现这样的一个 transform？
  - {: id="20210108202450-gq4pmi3"}这个transform需要立即的返回状态，没有状态页面上无法确定 loading 怎么显示
    - {: id="20210108203303-5il0agt"}想到了 promise to object
    {: id="20210108203304-6r9ex88"}
  - {: id="20210108202836-xutkbpb"}这个transform需要持续的返回新状态。loading一开始必然是显示，如果之后不返回新状态就没办法关闭了
    - {: id="20210108203325-vkplme7"}想到了 vue 的计算属性
    - {: id="20210108203341-xeesm88"}想到了事件机制
    {: id="20210108203325-ler12v4"}
  - {: id="20210108203110-m8wzdc2"}这个transform还需要返回异步请求的结果。
    - {: id="20210108203401-h142urn"}object 中新增一个 data 字段用来放结果，还可以有一个 error 字段
    {: id="20210108203401-cg1upu3"}
  - {: id="20210108203557-ul4sp7e"}所以这个 transform 可以当 input 改变时返回一个 object 并且在 依据input发起的异步请求成功或者结束后修改之前返回的 object
  {: id="20210108202450-aobuwwx"}
{: id="20210108201119-ve0re41"}

{: id="20210108203800-scc83pz"}

然后就是在 vue 中实现这样的一个思路
{: id="20210108203755-m61498o"}

## 应用的代码长啥样
{: id="20210108203812-ai3qcn7"}

> !((20210108200154-ax9rjf2 "快捷导航"))
> {: id="20210108204124-xweklg2"}
{: id="20210108204043-c0zucwh"}

```typescript
import { defineComponent, ref } from "vue";
import { usePromiseComputed } from "./lib/vue.composition.api";

export default defineComponent({
  setup(props, ctx) {
    const searchText = ref("");

    const searchResults = usePromiseComputed({
      defaultData: [] as string[],
      getter() {
        return searchApi(searchText.value);
      },
    });

    return { searchText, searchResults };
  },
});
```
{: id="20210108203828-llve3wd"}

这里的 `usePromiseComputed` 就是之前思考的 transform ，他返回了一个 `ref(object)` 然后当  `searchText`发生变化时会重新执行查询请求`searchApi(searchText.value);` , 当查询请求结束的时候他会修改之前返回的  `ref(object)`
{: id="20210108203818-0e1qh1q"}

### 在模板中
{: id="20210108201144-d9u6a5a"}

```html
<template>
  <input placeholder="请输入你要搜索的关键字" v-model="searchText" />

  <div v-if="searchResults.pending">正在查询中</div>
  <div v-else-if="searchResults.rejected">
    查询失败
    {{ searchResults.error }}
  </div>
  <div v-else-if="searchResults.fulfilled">
    <div v-for="(item, index) in searchResults.data" :key="index">
      {{ item }}
    </div>
  </div>
  
</template>
```
{: id="20210108204436-ac9jg52"}

在这里可以看出来 `usePromiseComputed` 返回的结果其中的五个字段，三个状态字段也就是((20210108201244-4ejp1da "前文中提到的控制loading的那个变量")) 两个((20210108203401-cg1upu3 "结果字段")) 
{: id="20210108204517-89451yw"}

## 总结
{: id="20210108205558-97zie2c"}

就上面的代码而言是一个极简 ((20210108205107-2ki19h5 "{{.text}}")) 结构。这里不需要手动的声明一个状态变量，然后在不同的阶段在去修改这个变量，这样的操作封装在了 `usePromiseComputed` 里面。
{: id="20210108204840-9bzd53x"}

关于 `usePromiseComputed` 的实现可以去这里查看[https://github.com/2234839/vue-demo/blob/master/src/components/promise-loading/lib/vue.composition.api.ts](https://github.com/2234839/vue-demo/blob/master/src/components/promise-loading/lib/vue.composition.api.ts%E2%80%B8)
{: id="20210108205536-tqjlcfw"}

实际上针对业务还加入了两个可选参数 deps 和 dataMergeFun
{: id="20210108204631-8uhp6ah"}

利用 deps 可以显式的声明哪些变量变化的时候重新请求
{: id="20210108205949-7n8unyc"}

利用 dataMergeFun 可以非常简单的在上面的代码基础上加入请求结果翻页功能
{: id="20210108205853-oi776s5"}

{: id="20210108210229-tuqp0i2"}


{: id="20210108200154-2j8bhxv" type="doc"}

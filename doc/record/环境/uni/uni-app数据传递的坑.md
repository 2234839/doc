{: id="20210122232307-esbdcse"}

## [为什么没有使用的computed属性也会被调用getter方法呢?](https://www.zhihu.com/question/440696975/answer/1692446028) #uniapp/坑#
{: id="20210122232322-nvudi39"}

{: id="20210122232328-z2zsalt"}

因为你使用的是 uniapp , 而 uniapp 内部会读取计算属性然后交给微信的，这里就实际上使用了该计算属性。
{: id="20210122232321-oe2sfsc"}

你可以用微信开发者工具看一下调试器中的AppData，里面肯定有 fullname 的值。
{: id="20210122232321-jydux21"}

这里是 uniapp 的一个比较大的坑，主要是在于他会使用类似于 `JSON.parse(JSON.stringify(vue组件暴露给模板的属性))` 这样的方式来将 vue的数据同步到微信小程序的视图层（计算属性这里 uniapp 理论上可以优化掉的，但他没有做）
{: id="20210122232321-ojpbqz1"}

这里还会造成 vue 中 是 undefined 微信开发者工具那边查看到的是 null 因为 json 的规范中没有 undefined , 我个人的经验是这一个((20210122232321-ojpbqz1 "数据传递的流程"))造成了 uniapp 使用者相当多的困惑，但只要明白了这点就也还好。
{: id="20210122232321-dkq4i14"}

---
{: id="20210122232809-tlz6qph"}

## ((20210325155155-2wk7rxv "{{.text}}")) 
{: id="20210122232809-myke87v" updated="20210410114750"}

[为什么没有使用的computed属性也会被调用getter方法呢? - 崮生的回答 - 知乎](https://www.zhihu.com/question/440696975/answer/1692446028)
{: id="20210122232902-i61klmj" updated="20210410114800"}

{: id="20210410114751-ut07tix"}


{: id="20210122232307-u074mii" type="doc"}

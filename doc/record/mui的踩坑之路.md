# mui 的踩坑之路

- pubdate:2019-05-07 17:10:15
- tags:mui

> 一个自己开发时攒下来的一点工具 [muiutil](https://dev.tencent.com/u/sheng_gu/p/muiutil/git)

---

## 怎么重写 mui.back 也没用

重写之后按返回还是能够退出，这是因为那个页面里加载了 iframe，iframe 里面的 js 执行了 mui.back 的逻辑。

解决方案就是将 iframe 里面的 mui.back 也重写就好了


{: id="20201104153359-sji4b7x" type="doc"}

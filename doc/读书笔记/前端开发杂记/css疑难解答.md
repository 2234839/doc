# CSS 疑难解答

- pubdate:2019-08-21 10:35:43
- tags:css

---

## [overflow flex 导致左侧有些元素不显示](https://segmentfault.com/q/1010000013475438)

## 吸附效果 （iOS 中无法监听滚动事件，也就没办法通过 js 来搞定，而且 js 实现总是比较卡）

[position: sticky](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) ; 可以通过这个属性来设置吸附。

[Overflow 会影响 Sticky](https://juejin.im/post/5cde75636fb9a07ef562048a) 大致就是 sticky 是通过向上查找可滚动元素，然后基于这个元素进行计算，导致有时不符合预期


{: id="20201104153359-4xbjpcg" type="doc"}

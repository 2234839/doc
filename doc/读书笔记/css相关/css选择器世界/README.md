# CSS 选择器世界

- pubdate:2020-02-24 09:51:21
- tags:css，笔记

---

[css 选择器世界 电子版](https://www.epubit.com/bookDetails?id=UB6c876b4ad511e)

## 命名最佳实践

1. 命名建议使用小写，使用英文单词或缩写，对于专有名词，可以使用拼音，例如：

.cs-logo-youku {}

不建议使用驼峰命名，驼峰命名建议专门给 JavaScript DOM 用，以便和 CSS 样式类名区分开。

.csLogoYouku {} /_ 不建议 _/

2. 对于组合命名，可以短横线或下划线连接，可以组合使用短橫线和下划线，也可以连续短横线或下划线连接，任何方式都可以，只要在项目中保持一致就可以：

.cs-logo-youku {} .cs_logo_youku {} .cs-logo--youku {} .cs-logo\_\_youku {}

组合个数没有必要超过 5 个，5 个是极限。

3. 设置统一前缀，强化品牌同时避免样式冲突：

.cs-header {} .cs-logo {} .cs-logo-a {}

这样，CSS 代码的美观度也会提升很多。

##　不要这样做

１. 不使用 id


{: id="20201104153359-x39wcrb" type="doc"}

# mdn文档中关于dom的一些摘抄

- pubdate:2019-08-30 10:06:36
- tags:mdn

---------

![有些时候应该使用DOMContentLoaded而非load](./dom-content-loaded.png)

[DOMContentLoaded](https://developer.mozilla.org/zh-CN/docs/Web/Events/DOMContentLoaded#%E7%9B%B8%E5%85%B3%E4%BA%8B%E4%BB%B6)

[nodeList](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList) 和 [HTMLCollection](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection) ，有点惭愧今天才了解到HTMLCollection，感觉这个概念挺好的,他和nodeList的差距在于nodeList是返回你通过规则获取的那一刻符合规则的元素，而HTMLCollection中时刻都是符合规则的元素，例如document.forms 始终是返回文档中所有的表单。

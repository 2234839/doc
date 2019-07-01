# 使用nico

- pubdate: 2019-3-6
- tags : nico
------

安装之类的都很容易，按照[官方文档](http://lab.lepture.com/nico/) 来就行了

难受的是之后配置一直不成功，明明配置的一样了，界面却不变。

解决方案是将nico server --watch 关掉重启就行了-_-

## nico 语法[官方文档](https://lab.lepture.com/nico/zh/syntax)

### 元信息

- pubdate: 文章的发布时间。（主题编写请注意：将会被转化为 moment 对象）
- tags: 文章标签。（将会被转化为 Array）
- status: 文章的状态（public, secret, draft,默认为 public）
- template: 文章用什么模板来渲染，post 类文章默认为 post.html  - page 类文章默认为 page.html

上面内置支持的元信息，在主题编写中，可直接访问，如 {{post.pubdate}}。除了内置支持的元信息，你还可以自己扩展，比如：

- topic: nico

这时，在主题中必须使用 {{post.meta.topic}} 才能获得该信息

## 2019-03-16 17:37:50
今天又遇到一个问题 编译之后staitc 目录不存在
还有一些奇奇怪怪的问题，原因是我在content 下安装了node模块。。。。
删掉就好了


## 扩展nico让他在pre标签上有language属性
修改了nico的一些代码用来支持这个功能 [nico](https://github.com/2234839/nico/commit/4c74b69f174b47556f748d345d77972b5e6c3184)
# 使用 nico

- pubdate: 2019-03-06 20:35:28
- tags : nico

---

安装之类的都很容易，按照[官方文档](http://lab.lepture.com/nico/) 来就行了

难受的是之后配置一直不成功，明明配置的一样了，界面却不变。

解决方案是将 nico server --watch 关掉重启就行了-\_-

## nico 语法[官方文档](https://lab.lepture.com/nico/zh/syntax)

### 元信息

- pubdate: 文章的发布时间。（主题编写请注意：将会被转化为 moment 对象）
- tags: 文章标签。（将会被转化为 Array）
- status: 文章的状态（public, secret, draft，默认为 public）
- template: 文章用什么模板来渲染，post 类文章默认为 post.html - page 类文章默认为 page.html

上面内置支持的元信息，在主题编写中，可直接访问，如 {{post.pubdate}}。除了内置支持的元信息，你还可以自己扩展，比如：

- topic: nico

这时，在主题中必须使用 {{post.meta.topic}} 才能获得该信息

## 2019-03-16 17:37:50

今天又遇到一个问题 编译之后 staitc 目录不存在还有一些奇奇怪怪的问题，原因是我在 content 下安装了 node 模块。。。。删掉就好了

## 扩展 nico 让他在 pre 标签上有 language 属性

修改了 nico 的一些代码用来支持这个功能 [nico](https://github.com/2234839/nico/commit/4c74b69f174b47556f748d345d77972b5e6c3184) [nico 语法](https://lab.lepture.com/nico/zh/syntax)

## 用于服务器上同步博客内容的一个小脚本

> 就是自动拉取 Git 的代码然后 nico build

```typescript
const shell = require("shelljs");
const iconv = require("iconv-lite"); // 编码

export async function gitPull(url: string) {
  try {
    shell.cd(url);
    let git = await exec("git pull");
    let nico = await exec("nico build");
  } catch (error) {
    console.log(error);
  }
}
//执行命令返回Promise
function exec(cmd) {
  return new Promise((resolve, reject) => {
    shell.exec(cmd, { encoding: "binary" }, function(err, stdout, stderr) {
      if (err) reject(iconvDecode(stderr));
      resolve(iconvDecode(stdout));
    });
  });
}
//转换编码
function iconvDecode(str = "") {
  const encoding = "gb2312";
  const binaryEncoding = "binary";
  return iconv.decode(Buffer.from(str, binaryEncoding), encoding);
}
```

## 代码高亮 {.test}

> [highlightjs](https://highlightjs.org/usage/)

nico 自带的代码高亮好像只有 HTML，于是用了 highlightjs 的。要注意的是需要运行 highlightBlock 来高亮指定的元素中的代码，我将以下代码添加到了 nico 的 templates 中。_记得引入 [highlightjs](https://highlightjs.org/usage/)_

```html{run}
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/default.min.css"
/>
<script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/highlight.min.js"></script>
<pre class="example">
    document.querySelectorAll("pre").forEach(function(value) {
      hljs.highlightBlock(value);
    });
</pre>
<script>
  //高亮代码块
  document.querySelectorAll("pre.example").forEach(function(value) {
    hljs.highlightBlock(value);
    console.log(value);
  });
</script>
```

## 关于一些资源访问不到的问题

> 2019-03-26 00:20:46

因为文件名中含有大写字母，而 nico“贴心的”帮你转为小写了下划线\_也会被转为-

## nico live reload

全局安装 socket.io 然后

> nico server --watch

就可以了


{: id="20201104153359-lfntwqo" type="doc"}

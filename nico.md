# nico md 构建的静态页面

- pubdate: 2019-3-6
- tags : nico
  [nico](./record/nico) 配置不生效

---

[nico 语法](https://lab.lepture.com/nico/zh/syntax)

## 用于服务器上同步博客内容的一个小脚本

> 就是自动拉取 git 的代码然后 nico build

```typescript
const shell = require("shelljs");
const iconv = require("iconv-lite"); //编码

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

## 代码高亮{.test}

> [highlightjs](https://highlightjs.org/usage/)

nico 自带的代码高亮好像只有 html，于是用了 highlightjs 的。
要注意的是需要运行 highlightBlock 来高亮指定的元素中的代码，我将以下代码添加到了 nico 的 templates 中。_记得引入[highlightjs](https://highlightjs.org/usage/)_

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

因为文件名中含有大写字母，而 nico“贴心的”帮你转为小写了
下划线\_也会被转为-

## nico live reload

全局安装 socket.io
然后

> nico server --watch

就可以了
# nico md构建的静态页面

- pubdate: 2019-3-6

[nico](./record/nico) 配置不生效
------
[nico语法](https://lab.lepture.com/nico/zh/syntax)  

## 用于服务器上同步博客内容的一个小脚本
> 就是自动拉取git的代码然后nico build

```javascript 
const shell = require("shelljs");
const iconv = require('iconv-lite');//编码

export async function gitPull(url:string){
    try {
        shell.cd(url);
        let git=await exec('git pull')
        let nico=await exec('nico build')
    } catch (error) {
        console.log(error);
    }
}
//执行命令返回Promise
function exec(cmd) {
    return new Promise((resolve, reject) => {
        shell.exec(cmd, { encoding: 'binary' }, function (err, stdout, stderr) {
            if (err)
                reject(iconvDecode(stderr))
            resolve(iconvDecode(stdout))
        })
    })
}
//转换编码 
function iconvDecode(str = '') {
    const encoding = 'gb2312';
    const binaryEncoding = 'binary';
    return iconv.decode(Buffer.from(str, binaryEncoding), encoding);
}
```

## 代码高亮
> [highlightjs](https://highlightjs.org/usage/)

nico自带的代码高亮好像只有html，于是用了highlightjs的。
要注意的是需要运行highlightBlock来高亮指定的元素中的代码，我将以下代码添加到了nico的templates中。*记得引入[highlightjs](https://highlightjs.org/usage/)*
```html
<script>
  //高亮代码块
  document.querySelectorAll('pre').forEach(function(value){
    hljs.highlightBlock(value);
  })
</script>
```
# 日记

- pubdate: 2019-3-6
- zj: 有毒

------
[nico](./record/nico)  就是这个静态采用的生成方法
[nico](//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css)
[nico](//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js)

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
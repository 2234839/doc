# 各种系统安装 node

- pubdate: 2019-08-14 17:10:11
- tags : node.js

---

## [centos 和 ubuntu](https://segmentfault.com/a/1190000010209661)

CentOS

运行脚本

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
```

然后运行它提示你要运行的命令

## 更新至 node 最新版

```bash
$ npm i -g n    # n 模块是专门用来管理node版本的

#安装node版本  也可以安装指定版
$ n latest      # 安装最新版
$ n stable      # 安装稳定版
$ n lts         # 安装最新的LTS官方版本
```

## CentOS

```bash
yum install nodejs
```


{: id="20201104153359-3bz18z5" type="doc"}

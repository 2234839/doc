# yarn 学习

- pubdate:2019-08-06 15:25:18
- tags :yarn，工具

早就见过 yarn 了，今天才下定决心学习一下

---

[官方文档-安装](https://yarn.bootcss.com/docs/install/#windows-stable)

这页面的提到的安装方法都太麻烦了，之前安装过 npm 的话可以直接 **npm install -g yarn**

## [从 npm 迁移到 yarn](https://yarnpkg.com/lang/zh-hans/docs/migrating-from-npm/)

直接在终端中执行 **yarn** 就好了

## [使用方法](https://yarn.bootcss.com/docs/usage/)

### 添加依赖包

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

### 将依赖项添加到不同的类别中

```bash
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

### 安装全部依赖

```bash
yarn
```

好像就没了，平时 npm 也就用这些，发布包的大致看了一下和 npm 没太大的区别，等用的时候再仔细看吧


{: id="20201104153359-x7lw9qj" type="doc"}

# yarn 学习
{: id="20210428111336-4rpy85n"}

- {: id="20210428111336-ctfxcw8"}pubdate:2019-08-06 15:25:18
  {: id="20210428111336-wwhmyy8"}
- {: id="20210428111336-6wrr8ur"}tags :yarn，工具
  {: id="20210428111336-s6t0uov"}
{: id="20210428111336-yn52yeg"}

早就见过 yarn 了，今天才下定决心学习一下
{: id="20210428111336-ggtvpkl"}

---
{: id="20210428111336-pn3popj"}

[官方文档-安装](https://yarn.bootcss.com/docs/install/#windows-stable)
{: id="20210428111336-br61hkg"}

这页面的提到的安装方法都太麻烦了，之前安装过 npm 的话可以直接 **npm install -g yarn**
{: id="20210428111336-rjb9pkh"}

## [从 npm 迁移到 yarn](https://yarnpkg.com/lang/zh-hans/docs/migrating-from-npm/)
{: id="20210428111336-w0ejlh1"}

直接在终端中执行 **yarn** 就好了
{: id="20210428111336-rdmjier"}

## [使用方法](https://yarn.bootcss.com/docs/usage/)
{: id="20210428111336-ww3ahdk"}

### 添加依赖包
{: id="20210428111336-s1700d0"}

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```
{: id="20210428111336-pt4acex"}

### 将依赖项添加到不同的类别中
{: id="20210428111336-me1mhvt"}

```bash
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```
{: id="20210428111336-740zota"}

### 安装全部依赖
{: id="20210428111336-hnq0tz2"}

```bash
yarn
```
{: id="20210428111336-efo6uzb"}

## workspace
{: id="20210428111336-0d3mimm" updated="20210428111349"}

命令执行方式 `yarn workspace [工作目录名] add [package]`
{: id="20210428111350-w8uujwt" updated="20210428111544"}

{: id="20210428111340-zf6eb2x"}


{: id="20201104153359-x7lw9qj" type="doc"}

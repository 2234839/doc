# git的一些记录

- pubdate: 2019-03-08 11:00:01
- tags : git

-----------

[git 免密码](https://todebug.com/Tips/)

## 查看谁更改了my_file中的内容和时间

git blame

## git commit

## [生成公钥](https://git-scm.com/book/zh/v1/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E7%94%9F%E6%88%90-SSH-%E5%85%AC%E9%92%A5)

```bash
ssh-keygen
```

## git 配置全局的name和email

git config --global user.name 崮生@台式

git config --global user.email admin@shenzilong.cn.com

## git使用自己的服务器

有时候不太想用第三方的git服务而且就自己使用，这时候就可以搭建一个简单的属于自己的git服务器。由于git很强大所以这个很简单。

首先再服务器上初始化一个git库

```bash
git --bare init
```

如果是在/root/test/目录中初始化的

在其它地方拉取代码可以直接通过ssh连接拉取

```bash
git clone ssh://root@shenzilong/root/test
```

这里有一个小坑就是你提交代码的时候他会报错，这是因为服务上代码正在master分支，你在提交到master就不可以。所以可以在服务器上新建一个serve分支然后切换过去，再提交就没问题了。

服务器端要更新代码就合并一下master分支即可

## [git 推送到多个分支](https://segmentfault.com/a/1190000011294144)

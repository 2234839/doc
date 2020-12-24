# Git 的一些记录
{: id="20201224110723-nkrqoh9"}

- {: id="20201224110723-tpkeliu"}pubdate: 2019-03-08 11:00:44
- {: id="20201224110723-4u3jgfp"}tags : Git
{: id="20201224110723-wxrkjvm"}

---

[git 免密码](https://todebug.com/Tips/)
{: id="20201224110723-8836696"}

## 查看谁更改了 my_file 中的内容和时间
{: id="20201224110723-w4cbzk4"}

Git blame
{: id="20201224110723-yf6ueuy"}

## Git commit
{: id="20201224110723-nus4oxc"}

## [生成公钥](https://git-scm.com/book/zh/v1/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E7%94%9F%E6%88%90-SSH-%E5%85%AC%E9%92%A5)
{: id="20201224110723-dv21ghk"}

```bash
ssh-keygen
```
{: id="20201224110723-oidijji"}

## Git 配置全局的 name 和 email
{: id="20201224110723-oymwmcb"}

Git config --global user.name 崮生@台式
{: id="20201224110723-yf9x1nl"}

Git config --global user.email admin@shenzilong.cn.com
{: id="20201224110723-yslze9s"}

## Git 使用自己的服务器
{: id="20201104154010-vuigjpy"}

有时候不太想用第三方的 Git 服务而且就自己使用，这时候就可以搭建一个简单的属于自己的 Git 服务器。由于 Git 很强大所以这个很简单。
{: id="20201224110723-njejyky"}

首先在服务器上初始化一个 Git 库
{: id="20201224110723-zmdmfhx"}

```bash
git --bare init
```
{: id="20201224110723-oe7j34l"}

如果是在/root/test/目录中初始化的
{: id="20201224110723-mg1vqgd"}

在其它地方拉取代码可以直接通过 SSH 连接拉取
{: id="20201224110723-cee5gdr"}

```bash
git clone ssh://root@shenzilong/root/test
```
{: id="20201224110723-h22qrgd"}

这里有一个小坑就是你提交代码的时候他会报错，这是因为服务上代码正在 master 分支，你在提交到 master 就不可以。所以可以在服务器上新建一个 serve 分支然后切换过去，再提交就没问题了。
{: id="20201224110723-8qxs5lv"}

服务器端要更新代码就合并一下 master 分支即可
{: id="20201224110723-k931kto"}

## [git 推送到多个分支](https://segmentfault.com/a/1190000011294144)
{: id="20201224110723-5zc2aoe"}

## GitHub 学习教程
{: id="20201224110723-ljsvrky"}

1. {: id="20201224110723-hqsgkmy"}分配 Assignees 💚
2. {: id="20201224110723-uqsuuzj"}开启 GitHub pages 💚
3. {: id="20201224110723-6aszs19"}关闭 issue 💚
{: id="20201224110723-qlazi6v"}

((20201104154010-9eacxep "崮生的 MIT"))
{: id="20201224110723-edddtz1"}

```ts
test33344
var a=3
```
{: id="20201104182457-n0e7b8z"}

((20201104182457-n0e7b8z "test333"))
{: id="20201224110723-j6mqfnz"}

((20201104154010-vuigjpy "Git 使用自己的服务器"))
{: id="20201224110723-9gw3b5h"}


{: id="20201104153359-es0bj7h" type="doc"}

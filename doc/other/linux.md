## 常用命令
{: id="20210116223426-utqavga"}

| 命令     | 效果                         | 备注                                                                           |
| ------------ | -------------------------------- | ---------------------------------------------------------------------------------- |
| `uname -a` | 查看当前系统架构信息 | 像有一些软件提供 amd 、arm、的包就需要判断当前系统的架构 |
|            |                                |                                                                                  |
{: id="20210116223434-r4v373q"}

{: id="20210117030356-2lcirnr"}

## 一些技巧
{: id="20210117030357-r36wapw"}

[ubuntu 安装字体的方法](http://ivo-wang.github.io/2018/08/03/ubuntu-%E5%AE%89%E8%A3%85ttf%E5%AD%97%E4%BD%93/)
{: id="20210117030404-jgm7jox"}

### linux 通过二进制安装软件
{: id="20210117030419-4gdao01"}

参考 [nodejs 通过二进制安装](https://github.com/nodejs/help/wiki/Installation#how-to-install-nodejs-via-binary-archive-on-linux)
{: id="20210117124714-u5o3us4"}

```
# Nodejs
VERSION=v10.15.0 # 这个变量和下面那个变量要能组合出正确的 PATH 路径
DISTRO=linux-x64
export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH
```
{: id="20210117124751-w9m47cm"}

{: id="20210117124801-6jldf1d"}


{: id="20210116223423-f6rtkwk" type="doc"}

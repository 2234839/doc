# CentOS 安装 mogodb 失败

- pubdate:2019-07-04 10:51:28
- tags:环境，mogodb

---

## 一切按照官方文档做的却失败了

[官方文档](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/)

错误：

```text
http://repo.mongodb.org/yum/redhat/6/mongodb-org/3.0/x86_64/repodata/repomd.xml/repodata/repomd.xm[mongodb-org-4.0]
l: [Errno 14] HTTP Error 404 - Not Found
Trying other mirror.
```

## 解决方案 1 - 失败了，又报了密钥错误，看方案 2 吧

[方案来源](https://unix.stackexchange.com/questions/217083/yum-error-while-installing-mongodb-on-centos)

做法：修改/etc/yum.repos.d/mongodb-org-4.0.repo 文件中的地址

文件最终内容：

```text
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=http://repo.mongodb.org/yum/redhat/6/mongodb-org/3.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
```

## 解决方案 2

[方案来源](https://unix.stackexchange.com/questions/217083/yum-error-while-installing-mongodb-on-centos) Hasan Tayyar BESIK 的回答

我照着做就好了


{: id="20201104153359-jafjpde" type="doc"}

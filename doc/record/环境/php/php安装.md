# PHP 安装

- pubdate:2019-08-14 17:36:40
- tags :环境，PHP

---

## CentOS

这个方案安装的 PHP 数据库驱动不行

~~[CentOS7 使用 yum 的方式安装和配置 PHP-FPM](https://curder.gitbooks.io/blog/centos/centos-7-uses-yum-way-to-install-and-configure-php-fpm.html)~~

这个的驱动才是新的

[Centos 6/7 升级 PHP 5.6 到 7.1/7.2](https://www.centos.bz/2018/05/centos-6-7-%E5%8D%87%E7%BA%A7-php-5-6-%E5%88%B0-7-1-7-2/)

```bash
# 删除原来的php和相关的包
yum remove php*
# 安装新的
yum install php71w php71w-cli php71w-common php71w-devel php71w-embedded php71w-fpm php71w-gd php71w-mbstring php71w-mysqlnd php71w-opcache php71w-pdo php71w-xml php71w-ldap php71w-mcrypt
```


{: id="20201104153359-9xdmm8q" type="doc"}

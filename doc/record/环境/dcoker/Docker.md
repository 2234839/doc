# Docker 使用

- pubdate: 2019-05-28 11:55:49
- tags: docker,node，服务器

---

## 安装 docker

[Docker 安装]{https://docs.docker.com/engine/installation/}

### 安装的时候不出意外又遇到了很多错误

通过下面的方法解决了问题 [Docker CE on RHEL - Requires: container-selinux >= 2.9](https://stackoverflow.com/questions/45272827/docker-ce-on-rhel-requires-container-selinux-2-9)

具体步骤如下

```bash
$ yum install http://vault.centos.org/centos/7.3.1611/extras/x86_64/Packages/container-selinux-2.9-4.el7.noarch.rpm

$ yum install -y yum-utils device-mapper-persistent-data lvm2

$ yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

$ yum install docker-ce

$ sudo systemctl start docker

```


{: id="20201104153359-brlarq4" type="doc"}

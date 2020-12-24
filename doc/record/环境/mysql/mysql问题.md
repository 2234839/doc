# MySQL 的一些问题的解决方案

- pubdate:2019-08-14 18:11:28
- tags :mysql

---

## CentOS7 启动 MySQL 服务

```bash
systemctl start mysql

```

## MySQL 高版本导致的密钥问题

```bash
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
```


{: id="20201104153359-4qiguui" type="doc"}

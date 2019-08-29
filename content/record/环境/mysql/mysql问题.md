# mysql的一些问题的解决方案

- pubdate:2019-08-14 18:11:28
- tags :mysql

------

## centos7 启动mysql服务

```bash
systemctl start mysql

```

## mysql高版本导致的密钥问题

```bash
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
```

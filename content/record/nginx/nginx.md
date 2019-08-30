# nginx 学习

- pubdate:2019-08-14 17:15:40
- tags:nginx

------------

## 安装nginx

[centos7安装nginx](https://qizhanming.com/blog/2018/08/06/how-to-install-nginx-on-centos-7)

```bash
sudo rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm

sudo yum install nginx
```

## 配置
然后进行[配置](https://www.nginx.com/resources/wiki/start/topics/examples/full/)

我的一个配置

```properties
user    root    root;#配置用户组
http {
        include       mime.types;#设置类型，不设置css会出问题
        default_type  application/octet-stream;
        server {
            listen 8800;#监听端口
            # ^~ 代表匹配到这个规则后就不再往下匹配了
            location ^~ /uploads/  {
                root    /root/sp/;#路径映射
                expires 30d;#缓存的天数
            }
            location ~ \.css {
                add_header  Content-Type    text/css;
            }

            location ~ \.js {
                add_header  Content-Type    application/x-javascript;
            }

            location ^~ /static/  {
                root    /root/sp/;#路径映射
                expires 30d;#缓存的天数
            }

            location ^~ /public/  {
                root    /root/sp/;#路径映射
                expires 30d;#缓存的天数
            }

            location / {
                proxy_pass http://127.0.0.1:8000;#代理
                proxy_connect_timeout 1;#加上这个减少超时
                proxy_set_header Host $server_name;  #传递给服务器用户访问真实地址
                proxy_set_header x-forwarded-for $remote_addr; #真实来源的ip
                proxy_send_timeout 30;
                proxy_read_timeout 60;
            }
        }
        server {#80跳转https 通过301重定向实现的
            listen 80;
            server_name www.shenzilong.cn;
            index index.html index.php index.htm;

            return      301 https://$server_name$request_uri; #//这是nginx最新支持的写法
        }
    }

events {# 工作的连接数
        worker_connections  1024;  ## Default: 1024
    }
```

## nginx 运行指定的配置文件
sudo nginx -c ~/nginx.conf

## kill掉所有的nginx
sudo pkill nginx

## nginx 403
这是因为用户权限的问题，要在配置文件开头配置用户组。
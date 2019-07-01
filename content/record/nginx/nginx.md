# nginx 学习

- pubdate:2019-06-27 16:42:17
- tags:nginx

------------

## 安装nginx
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
                proxy_send_timeout 30;
                proxy_read_timeout 60;
            }
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
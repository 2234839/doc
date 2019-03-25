# git的一些记录

- pubdate:2019-03-24 16:58:05

-----------

# 最重要的
alt+enter ->  获取当前错误的修复提示  
鼠标点击报错的行，最下方状态栏有错误信息可以复制  
这两个技巧加上百度能解决大部分问题。
# 一些遇到的问题

## 配置


| 要实现的     | 配置项    | 配置值        |
| ------------ | --------- | ------------- |
| editText多行 | inputType | textMultiLine |

## 异常

### 开启udp服务的时候报错
>method android.graphics.PorterDuffColorFilter android.support.graphics.drawable.VectorDrawableCompat.updateTintFilter(android.graphics.PorterDuffColorFilter, android.content.res.ColorStateList, android.graphics.PorterDuff$Mode) would have incorrectly overridden the package-private method in android.graphics.drawable.Drawable

需要配置因特网的权限
```xml
<uses-permission android:name="android.permission.INTERNET"/>
```

## Fragment，类似于iframe的使用方式

1. 在layout中新建Activvity->Fragment+ViewModel创建新页面
2. 在主页面布局中common中就可以使用fragment控件了

## java get请求
> 一定要注意 127.0.0.1 只能在本机用啊，最好养成用局域网ip的习惯
```java
public static String getHtml(String path) throws Exception {
    HttpURLConnection connection = null;
    BufferedReader reader = null;
    URL url = new URL(path);
    connection = (HttpURLConnection) url.openConnection();
    //设置请求方法
    connection.setRequestMethod("GET");
    //设置连接超时时间（毫秒）
    connection.setConnectTimeout(5000);
    //设置读取超时时间（毫秒）
    connection.setReadTimeout(5000);

    //返回输入流
    InputStream in;
    if(connection.getResponseCode()==HttpURLConnection.HTTP_OK){
        in = connection.getInputStream();
    }else{//读取错误流  错误了，但服务器还是返回了数据
        in = connection.getErrorStream();
    }

    //读取输入流
    reader = new BufferedReader(new InputStreamReader(in));
    StringBuilder result = new StringBuilder();
    String line;
    while ((line = reader.readLine()) != null) {
        result.append(line);
    }
    return (result.toString());
}
```

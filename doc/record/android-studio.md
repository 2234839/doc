# 安卓编程的一些记录
{: id="20210121203516-w531xwp"}

- {: id="20210121203516-77yi54q"}pubdate:2019-03-24 16:58:05
- {: id="20210121203516-4pq9687"}tags:android,java
{: id="20210121203516-ukhxuaw"}

---

# 最重要的
{: id="20210121203516-isx52lt"}

alt+enter ->  获取当前错误的修复提示
鼠标点击报错的行，最下方状态栏有错误信息可以复制
这两个技巧加上百度能解决大部分问题。
{: id="20210121203516-4dr2gun"}

# 一些遇到的问题
{: id="20210121203516-qu2gprk"}

## 配置
{: id="20210121203516-jpkwpet"}

| 要实现的    | 配置项 | 配置值     |
| ----------------- | ----------- | --------------- |
| editText 多行 | inputType | textMultiLine |
{: id="20210121203516-627rnx4"}

## 异常
{: id="20210121203516-lxvqsiu"}

### 开启 udp 服务的时候报错
{: id="20210121203516-68s4ci7"}

> method android.graphics.PorterDuffColorFilter android.support.graphics.drawable.VectorDrawableCompat.updateTintFilter(android.graphics.PorterDuffColorFilter, android.content.res.ColorStateList, android.graphics.PorterDuff$Mode) would have incorrectly overridden the package-private method in android.graphics.drawable.Drawable
> {: id="20210121203516-g7pwtg0"}
{: id="20210121203516-574hqjc"}

需要配置因特网的权限
{: id="20210121203516-ktoip4n"}

```xml
<uses-permission android:name="android.permission.INTERNET"/>
```
{: id="20210121203516-owtbd8u"}

### Unexpected error while executing: am start -n "com.example.user.ypologismosmoriwn/com.example.user.ypologismosmoriwn.MainActivity" -a android.intent.action.MAIN -c android.intent.category.LAUNCHER Error while Launching activity
{: id="20210121203516-s72ko97"}

因为我将那个 apk 冻结了，于是启动不了 activity
{: id="20210121203516-8j80ijf"}

## Fragment，类似于 iframe 的使用方式
{: id="20210121203516-rr8sie2"}

1. {: id="20210121203516-u484bca"}在 layout 中新建 Activvity->Fragment+ViewModel 创建新页面
2. {: id="20210121203516-n9dw7xg"}在主页面布局中 common 中就可以使用 fragment 控件了
{: id="20210121203516-nakz8m1"}

## Java get 请求
{: id="20210121203516-zpxeefo"}

> 一定要注意 127.0.0.1 只能在本机用啊，最好养成用局域网 ip 的习惯
> {: id="20210121203516-26hp8pj"}
{: id="20210121203516-3gr50b5"}

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
{: id="20210121203516-26xklcn"}


{: id="20201104153359-k5cnjmg" type="doc"}

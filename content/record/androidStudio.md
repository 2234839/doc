# git的一些记录

- pubdate:2019-03-24 16:58:05

-----------

# 最重要的
alt+enter ->  获取当前错误的修复提示  
鼠标点击报错的行，最下方状态栏有错误信息可以复制  
这两个技巧加上百度能解决大部分问题。
# 一些遇到的问题

## 配置


|要实现的|配置项|配置值|
|----|----|----|
|editText多行|inputType|textMultiLine|

## 异常

### 开启udp服务的时候报错
>method android.graphics.PorterDuffColorFilter android.support.graphics.drawable.VectorDrawableCompat.updateTintFilter(android.graphics.PorterDuffColorFilter, android.content.res.ColorStateList, android.graphics.PorterDuff$Mode) would have incorrectly overridden the package-private method in android.graphics.drawable.Drawable

需要配置因特网的权限
```xml
<uses-permission android:name="android.permission.INTERNET"/>
```
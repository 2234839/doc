# 一次nodejs内存溢出bug修复

- pubdate : 2019-06-21 13:30:20
- tags:bug,nodejs

-----------

## 寻找工具[easy-monitor](https://github.com/hyj1991/easy-monitor)

### 安卓easy-monitor的时候报错了

```txt
Error: Can't find Python executable "python", you can set the PYTHON env variable.
```
这台windows下没有python的环境....

安装了python后还是不行😓

过了半天，还是各种环境报错。放弃安装这些工具了，看代码去了。

## 找到了泄漏的地方

因为我写了一个方法来递归的生成目录，当初的目录是指向G盘的而新电脑并没有G盘，导致那个方法一直递归却没有成功的返回。
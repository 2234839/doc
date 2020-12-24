# 一次 nodejs 内存溢出 bug 修复

- pubdate : 2019-06-21 13:30:20
- tags:bug,nodejs,index

---

## 寻找工具 [easy-monitor](https://github.com/hyj1991/easy-monitor)

### 安卓 easy-monitor 的时候报错了

```error
Error: Can't find Python executable "python", you can set the PYTHON env variable.
```

这台 windows 下没有 python 的环境....

安装了 python 后还是不行 😓

过了半天，还是各种环境报错。放弃安装这些工具了，看代码去了。

## 找到了泄漏的地方

因为我写了一个方法来递归的生成目录，当初的目录是指向 G 盘的而新电脑并没有 G 盘，导致那个方法一直递归却没有成功的返回。


{: id="20201104153359-c21on9u" type="doc"}

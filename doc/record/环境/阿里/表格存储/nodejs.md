# 阿里云表格存储 node.js

- pubdate:2019-11-22 22:48:59
- tags:node.js，表格存储，阿里

---

## 必读

- tablestore sdk 基本上所有的接口都是支持 promise 和错误优先回调两种调用方式的，我一开始以为只支持回调方式，还自己写了一些转换的函数

## 花费了我一番时间寻找

1.自增主键该如何赋值 设置为这个 [TableStore.PK_AUTO_INCR](https://github.com/aliyun/aliyun-tablestore-nodejs-sdk/blob/master/samples/primarykey.js)

## 疑难杂症

- getRow 读取的数据中 row 为空
  实际上 row 里面是有值的，直接 JSON.stringify getRow 返回的对象显示的是"" 但 JSON.stringify row 对象就能看到实际结果了
  这里据阿里的人说可能是 Protobuf 的问题，这些函数最后返回的都是 Protobuf 的完整对象

### 遇到的一些错误

> Cannot read property 'rowExistenceExpectation' of undefined

```
- 没有传   condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
```


{: id="20201104153359-6o8ykq1" type="doc"}

# 阿里云表格存储 node.js

- pubdate:2019-11-22 22:48:59
- tags:node.js,表格存储,阿里

---

## 花费了我一番时间寻找

1.自增主键该如何赋值 设置为这个[TableStore.PK_AUTO_INCR](https://github.com/aliyun/aliyun-tablestore-nodejs-sdk/blob/master/samples/primarykey.js)

## 疑难杂症

- getRow 读取的数据中 row 为空
  实际上 row 里面是有值的，直接 JSON.stringify getRow 返回的对象显示的是"" 但 JSON.stringify row 对象就能看到实际结果了
  这里据阿里的人说可能是 protobuf 的问题，这些函数最后返回的都是 protobuf 的完整对象

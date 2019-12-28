# socket.io 学习记录

- pubdate:2019-04-03 16:40:04
- tags : socket,socket.io

---

# 传递函数！

> [官方文档](https://socket.io/docs/#Sending-and-getting-data-acknowledgements)

socket 可以用 emit 发送函数！然后使用这个函数来回调，这种跨端回调的写法让我震惊了，于是我想基于 store 事件也写一个这样的回调

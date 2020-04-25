# 加入 b3blog

- pubdate:2020-04-25 19:21:14
- tags:b3blog

---

## 资料

1. 博客发布/更新文章推送社区

发布文章和更新文章使用相同的 API，如果 article.id 已经存在则视为更新操作。

参数在 POST body 中指定 JSON 格式的实参：

> post https://rhythm.b3log.org/api/article

```json
{
  "article": {
    "id": "1165070220000",
    "title": "这是一篇测试文章",
    "permalink": "/test-post",
    "tags": "Sandbox",
    "content": "上面请使用 Sandbox 作为标签。"
  },
  "client": {
    "title": "我的个人博客",
    "host": "http://xxx.com",
    "name": "Solo",
    "ver": "3.0.0",
    "userName": "88250",
    "userB3Key": "xxxx"
  }
}
```

# rss 推送

---

```html{run .hidden}
标题 <input id="title" type="text" />
<br />
链接 <input id="link" type="text" />
<br />
描述 <input id="description" type="text" />
<br />
密钥 <input id="rssPassword" type="text" />
<br />
<a class="btn" onclick="send()">推送</a>
<script src="/static/mui.min.js"></script>
<script>
  function send() {
    mui.ajax({
      url: "https://shenzilong.cn/blog/addRss",
      data: {
        title: document.querySelector("#title").value,
        link: document.querySelector("#link").value,
        description: document.querySelector("#description").value,
        rssPassword: document.querySelector("#rssPassword").value,
      },
      dataType: "json",
      type: "get",
      timeout: 10000,
      success: function(r) {
        if (r.state === "succeed") alert("推送成功");
        else alert("推送失败");
        console.log(r);
      },
      error: function(xhr, type, errorThrown) {
        console.log(errorThrown);
      },
    });
  }
  window.send = send;
</script>
```

## 一些制作 rss 源的方法

[知乎 v2ex](https://rss.lilydjwg.me/)

[新浪微博](https://rssfeed.today/weibo/)

[哔哩哔哩](https://www.moerats.com/archives/567/)

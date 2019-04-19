# rss推送

------

`````html

标题 <input id="title" type="text">
<br>
链接 <input id="link" type="text">
<br>
描述 <input id="description" type="text">
<br>
密钥 <input id="rssPassword" type="text">
<br>
<a class="button" onclick="send()">推送</a>
<script src="/static/mui.min.js"></script>
<script>
    function send() {
        mui.ajax({
            url: 'http://shenzilong.cn/blog/addRss',
            data: {
                title:document.querySelector("#title").value,
                link:document.querySelector("#link").value,
                description:document.querySelector("#description").value,
                rssPassword:document.querySelector("#rssPassword").value
            },
            dataType: 'json',
            type: "get",
            timeout: 10000,
            success: function (r) {
                if(r.state==="succeed") alert('推送成功')
                else alert("推送失败")
                console.log(r);
            },
            error: function (xhr, type, errorThrown) {
                console.log(errorThrown);
            }
        })
    }
</script>
`````
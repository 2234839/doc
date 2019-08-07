# 数据表结构json生成

- pubdate:2019-08-07 16:35:56
- tags :工具

------

<script src="/static/mui.min.js"></script>

## 荣事达

`````javascript
    mui.ajax({
        url:"https://shenzilong.cn/rsd/get_table_construction",
        data:{},
        dataType: 'json',
        type: 'get',
        timeout: 10000,
        success:console.log
    });
`````
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
        success:parse
    });
    function parse({body}) {
        var database={}
        console.log(body);
        body.forEach(el => {
            if(database[el.表名]===undefined)
                database[el.表名]=[]
            database[el.表名].push(el)
        });
        console.log(database);


    }
`````
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
    var database={}
    function parse({body}) {
        console.log(body);
        body.forEach(el => {
            if(database[el.表名]===undefined)
                database[el.表名]=[]
            const name=el.表名
            delete el.表名
            database[name].push(el)
        });
        console.log(database)
    }

    function generateJSON(tableName) {
        var template={
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
                "blicenseImg": {
                    "type": "string",
                    "description": "营业执照照片地址"
                }
            }
        }
        database[tableName].forEach(el => {
            template.properties[el.列名].description=el.注释
            template.properties[el.列名].type=el.类型
        });
        return template
    }


}
`````
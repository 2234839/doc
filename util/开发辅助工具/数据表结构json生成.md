# 数据表结构json生成

- pubdate:2019-08-07 16:35:56
- tags :工具

------

<script src="/static/mui.min.js"></script>

## 荣事达

<div id="btn_list" >

</div>
<textarea id="content" style="width:600px;height:800px;"></textarea>

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
    mui("#btn_list").on('tap','a',function () {
        const str=JSON.stringify(generateJSON(this.textContent),null,4)
        console.log(str);

        document.querySelector('#content').value=str
    })

    function parse({body}) {
        body.forEach(el => {

            if(database[el.表名]===undefined)
                database[el.表名]=[]
            const name=el.表名
            delete el.表名
            database[name].push(el)
        });

        for (const key in database) {
            if (database.hasOwnProperty(key)) {
                const element = database[key];
                const btn= document.createElement('a')
                btn.classList.add("button")
                btn.textContent=key
                document.querySelector('#btn_list').appendChild(btn)
            }
        }
        console.log(database)
    }

    function generateJSON(tableName) {
        var template={
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {}
        }
        database[tableName].forEach(el => {
            template.properties[el.列名]={}
            template.properties[el.列名].description=el.注释
            template.properties[el.列名].type=getType(el.类型)
        });

        function getType(str) {
            if(["int","tinyint","smallint","mediumint","int","bigint","float","double","real","decimal"].includes(str))
                return "number"
            else
                return "string"
        }
        return template
    }
`````
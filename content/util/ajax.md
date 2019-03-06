# ajax

- pubdate: 2019-3-6 19:19

------

<script src="/static/mui.min.js"></script>

<table>
    <tr>
        <th>协议</th>
        <th>url</th>
        <th>Mehod</th>
        <th>操作</th>
    </tr>
    <tr>
        <td>
            <select id="protocol" id="">
                <option value="http">http</option>
                <option value="https">https</option>
            </select>
        </td>
        <td><input id='url' type="text"></td>
        <td>
            <select name="mehod" id="">
                <option value="get">get</option>
                <option value="post">post</option>
            </select>
        </td>
        <td>
            <a class="button" onclick="send()">发送</a>
        </td>
    </tr>
</table>

*data*
<table id="query">
    <tr>
        <th>name</th>
        <th>value</th>
        <th>操作</th>
    </tr>
    <tr class="only">
        <td><input class="parName" type="text"></td>
        <td><input class="parValue" type="text"></td>
        <td>
            <a class="button add">添加</a> <a class="button remove">删除</a>
        </td>
    </tr>
</table>

*response*
<pre><code class="json" id='res'></code></pre>

<script>
    function send() {
        let data={};
        let parName=mui('.parName')
        let parValue=mui('.parValue')
        for (let i = 0; i < parName.length; i++) {
            const name = parName[i].value;
            const value = parValue[i].value;
            if(name==="")
                continue
            data[name]=value
        }
        mui.ajax({
            url:mui('#protocol')[0].value+ "://" + mui('#url')[0].value,
            data,
            dataType: 'json',
            type: mui('[name=mehod]')[0].value,
            timeout: 10000,
            success:load,
            error: function (xhr, type, errorThrown) {
                load(errorThrown)
            }
        });
        
        function load(res){
            console.log(res);
            mui('#res')[0].innerHTML = res
            hljs.highlightBlock(mui('#res')[0]);
        }
    }

    mui('body').on('click', '.add', function (e) {
        let thisTr = this.parentNode.parentNode

        let tr = document.createElement('tr')
        tr.innerHTML = thisTr.innerHTML
        mui('#query')[0].appendChild(tr)
    })
    mui('body').on('click', '.remove', function (e) {
        let thisTr = this.parentNode.parentNode
        if (thisTr.classList.contains('only'))
            return;
        thisTr.remove()
    })
</script>
# log

------

<!-- ## 我负责记录，君负责回忆 -->

`````html
<a class="button" onclick="filter()">执行下面的过滤规则</a>
<input id="date" type="date">
<a class="button" onclick="_selectDate()">显示此日期的log</a>
`````

> 过滤器使用示例

```javascript
logList.__filter(el => {
    return !el.__data[2].includes('/x')
}, el => {
    return !el.__data[2].endsWith('.css')
}, el => {
    return !el.__data[2].endsWith('favicon.ico')
}, el => {
    return !el.__data[2].endsWith('.js')
})
```

`````html
<style>
    .template {
        display: none;
    }
</style>
<table>
    <thead>
        <tr>
            <th>ip</th>
            <th>time</th>
            <th>url</th>
        </tr>
    </thead>
    <tbody style="font-size: 14px;">
        <tr class="template">
            <td>${tdList[0]}</td>
            <td>${tdList[1]}</td>
            <td>${tdList[2]}</td>
        </tr>
    </tbody>
</table>

<script>

    let logList
    function selectDate({date}){
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load', function () {
            if(logList && logList.length>0){//移除原有的
                logList.forEach(el=>el.remove())
            }
            const data = JSON.parse(xhr.response)
            logList = parseLog(data)
        })
        xhr.open('get', location.origin + '/blog/log?date='+date)
        // xhr.open('get', 'https://shenzilong.cn/blog/log')
        xhr.send()
    }
    selectDate({date:new Date()})
    document.querySelector('#date').value = formatDate(new Date())

    function _selectDate(){
        selectDate({date:document.querySelector('#date').value})
    }
    function filter() {
        logList.__filter(el => {
            return !el.__data[2].includes('/x')
        }, el => {
            return !el.__data[2].endsWith('.css')
        }, el => {
            return !el.__data[2].endsWith('favicon.ico')
        }, el => {
            return !el.__data[2].endsWith('.js')
        })
    }

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
    function parseLog(str) {
        let logList = str.split('\r\n').reverse()
        const trList = logList.map(v => {
            let tdList = v.split('\t|')
            const template = document.querySelector('.template').cloneNode(true)
            template.classList.remove('template')
            template.__data = tdList
            template.querySelector('td:nth-child(1)').innerText = tdList[0]
            template.querySelector('td:nth-child(2)').innerText = tdList[1]
            template.querySelector('td:nth-child(3)').innerText = tdList[2]
            document.querySelector('tbody').appendChild(template)
            return template
        })
        trList.__filter = function filter(...testList) {
            this.forEach(el => {
                if (test(el)) {
                    el.style.display = ""
                } else {
                    el.style.display = "none"
                }
            });
            /** 测试el是否通过了所有测试 */
            function test(el) {
                for (let i = 0; i < testList.length; i++) {
                    const fun = testList[i];
                    if (fun(el) === false)
                        return false
                }
                return true
            }
        }
        return trList
    }
</script>
`````
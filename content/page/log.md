# log

------

<!-- ## 我负责记录，君负责回忆 -->

`````html
<a class="button" onclick="filter()">执行下面的过滤规则</a>
<input id="date" type="date">
<a class="button" onclick="_selectDate()">显示此日期的log</a>
`````

> 过滤器使用示例

````javascript
var filter_list=[el => {
    return !el.__data[1].includes('/x')
},
/** 静态资源过滤 */
 el => {
    return !el.__data[1].endsWith('.css')
}, el => {
    return !el.__data[1].endsWith('favicon.ico')
}, el => {
    return !el.__data[1].endsWith('.js')
}, el => {
    return !el.__data[1].endsWith('.map')
}, el => {
    return !el.__data[1].includes('shenzilong.cn/node_modules/')
},
/** 自身请求过滤 */
 el => {
    return !el.__data[1].includes('shenzilong.cn/blog/log')
}, el => {
    return !el.__data[1].includes('shenzilong.cn/util/error/')
},
/** 想注入的 */
...['FxCodeShell.jsp',
].map(str=>(el)=>!el.__data[1].includes(str))

/** 过滤爬虫 */
...['robot','bot.html',
    /** 挺多人骂的一个 */ "YisouSpider",
'baidu.com','google.com','bing.com','sogou.com','mj12bot.com',
"opensiteexplorer.org",'yandex.com'
].map(str=>(el)=>!el.__data[2].includes(str))]





// logList.__filter(...filter_list)
````

`````html
<style>
    .template {
        display: none;
    }
</style>
<table>
    <thead>
        <tr>
            <th>ip & time</th>
            <th>url</th>
            <th>ua</th>
        </tr>
    </thead>
    <tbody id="tbody" style="font-size: 14px;">
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
            const data = decodeURIComponent(JSON.parse(xhr.response))
            logList = parseLog(data)
            logList.__filter(...filter_list)
        })
        xhr.open('get', location.origin + '/blog/log?date='+date)
        // xhr.open('get', 'https://shenzilong.cn/blog/log')
        xhr.send()
    }
    document.querySelector('#date').value = formatDate(new Date())

    function _selectDate(){
        selectDate({date:document.querySelector('#date').value})
    }
    function filter() {
        logList.__filter(...filter_list)
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
        let logList = str.split('[log]').reverse()
        const trList = logList.map(v => {
            let tdList = v.split('\t|')
            const template = document.querySelector('.template').cloneNode(true)
            template.classList.remove('template')
            template.__data = tdList
            template.querySelector('td:nth-child(1)').innerText = tdList[0]
            template.querySelector('td:nth-child(2)').innerText = tdList[1]
            template.querySelector('td:nth-child(3)').innerText = tdList[2]
            document.querySelector('#tbody').appendChild(template)
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
                if(!(el.__data[0] && el.__data[1] && el.__data[2])){
                    console.warn("有问题的数据",el,el.__data);

                    return true
                }
                for (let i = 0; i < testList.length; i++) {
                    const fun = testList[i];
                    try {
                        if (fun(el) === false)
                            return false
                    } catch (error) {
                        console.error(error);
                        /** 这条数据有问题，故显示出来 */
                        return true
                    }

                }
                return true
            }
        }
        return trList
    }
</script>
`````
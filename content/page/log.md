# log

------

## 我负责记录，君负责回忆

`````html
<table>
    <thead>
        <tr>
            <th>ip</th><th>time</th><th>url</th>
        </tr>
    </thead>
    <tbody style="font-size: 14px;">

    </tbody>
</table>

<script>
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', function () {
        let data = JSON.parse(xhr.response)
        parseLog(data);
    })
    xhr.open('get', location.origin + '/blog/log')
    xhr.send()

    function parseLog(str) {
        let logList = str.split('\r\n').reverse()
        console.log(logList);
        let html=""
        logList.forEach(v => {
            let tdList=v.split('\t|')
            html+=` <tr>
                        <td>${tdList[0]}</td><td>${tdList[1]}</td><td>${tdList[2]}</td>
                    </tr>`
        });
        document.querySelector('tbody').innerHTML=html
    }
</script>

`````
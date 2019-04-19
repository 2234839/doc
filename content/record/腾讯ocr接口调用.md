# 腾讯ocr接口调用

- pubdate: 2019-04-19 16:45:55

-------

## 生成签名的方式

一开始我用的encodeURI而非encodeURIComponent导致签名一直异常，坑了我半天时间

[encodeUrl](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
看文档可知encodeURI 保留了一些字符，这些字符即便具有适当的UTF-8转义序列也不会被转义

|类型|包含|
|---|--|
|保留字符|; , / ? : @ & = + $|
|非转义的字符|字母 数字 - _ . ! ~ * ' ( )|
|数字符号|#|

```javascript
function getReqSign(params: any, appkey: string) {
    // 1. 字典升序排序
    params = ksort(params);
    // 2. 拼按URL键值对
    let str = '';
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const element = params[key]
            if (element === '')
                continue
            str += key + '=' + encodeURIComponent(element) + '&'
        }
    }
    str += 'app_key=' + appkey
    // 4. MD5运算+转换大写，得到请求签名
    params.sign = md5(str).toUpperCase()
    return params
}
function ksort(obj: any) {
    var keys = Object.keys(obj).sort()
        , sortedObj: any = {};
    for (var i in keys) {
        sortedObj[keys[i]] = obj[keys[i]];
    }
    return sortedObj;
}
```
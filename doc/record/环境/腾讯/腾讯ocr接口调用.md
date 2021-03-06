# 腾讯 ocr 接口调用

- pubdate: 2019-04-19 16:45:55
- tags : 工具，ocr

---

## 生成签名的方式

一开始我用的 encodeURI 而非 encodeURIComponent 导致签名一直异常，坑了我半天时间

[encodeUrl](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
看文档可知 encodeURI 保留了一些字符，这些字符即便具有适当的 UTF-8 转义序列也不会被转义

| 类型             | 包含                          |
| ------------------ | ------------------------------- |
| 保留字符       | ; , / ? : @ & = + $             |
| 非转义的字符 | 字母 数字 - _ . ! ~ * ' ( ) |
| 数字符号       | ##                              |

```typescript
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

### img 转 base64

主要利用 canvas 的 [toDataURL](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL),toDataURL 的第二个参数可以调整图片的质量，能够起到压缩图片的功能。

```typescript
export function getBase64Image(img: HTMLImageElement) {
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/jpeg",0.5);
    //toDataURL的第二个参数可以调整压缩率
    // return dataURL
    return dataURL.replace("data:image/jpeg;base64,", "");
}
```


{: id="20201104153359-kzy7ww2" type="doc"}

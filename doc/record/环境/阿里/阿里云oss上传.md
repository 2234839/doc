# 阿里云 oss 上传及图片转 bolb

- pubdate :2019-04-20 17:55:37
- tags : 阿里云，工具

---

## 主体

[阿里云 oss-sdk-6.0.0](http://gosspublic.alicdn.com/aliyun-oss-sdk-6.0.0.min.js)

```typescript
import { OSS_PAR } from "./config";

let client:OSS;

/** 上传到oss */
export async function upload(fileName:string,data:HTMLImageElement|HTMLCanvasElement|Blob|string) {
    if('OSS' in window===false){
        throw "请加载oss-sdk";
    }
    if(client===undefined)
        client = new OSS(OSS_PAR);
    if(data instanceof Blob){}
    if(data instanceof HTMLCanvasElement){
        data=await getBolb(data)
    }
    if(data instanceof HTMLImageElement){
        var canvas = document.createElement('canvas')
        canvas.width = data.width;
        canvas.height = data.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(data, 0, 0, data.width, data.height);
        data=await getBolb(canvas)
    }
    if(typeof data === 'string'){
        data=new Blob([data],{ type: 'text/plain' })
    }
    if(data instanceof Blob===false){
        console.error(data);
        throw "无法将传入的参数转化为blob"
    }
    return await client.put(fileName,data);
}

/** 获取图片的Blob */
async function getBolb(canvas: HTMLCanvasElement):Promise<Blob>{
    return new Promise((resolve, reject) => {
        canvas.toBlob(function (bolb) {
            resolve(bolb)
        })
    })
}

/** 获取图片的base64 */
export function getBase64Image(img: HTMLImageElement,/** 压缩 */ qualty: number) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/jpeg", qualty);
    // return dataURL
    return dataURL.replace("data:image/jpeg;base64,", "");
}
```

## par

参照 [阿里云文档](https://help.aliyun.com/document_detail/64047.html?spm=a2c4g.11186623.2.34.222420beoP4yNo)

config 文件

```typescript
export const OSS_PAR={
    /** 存储所在区域 */
    region: 'oss-cn-beijing',
    /** accessKeyId */
    accessKeyId: '********',
    /** accessKeySecret */
    accessKeySecret: '**************',
    /** 块名称 */
    bucket: 'yb-storage'
}
```

## 阿里云 sdk 的声明

```typescript
declare class OSS {
    constructor(par: {
        region: string,
        accessKeyId: string,
        accessKeySecret: string,
        bucket: string
    })

    put(fileName: string, bolb: Blob):ossRes
}

/** 阿里云上传接口返回的响应 */
interface ossRes {
    name: string
    res: {
        aborted: false
        data: Uint8Array[]
        headers: {}
        keepAliveSocket: false
        remoteAddress: ""
        remotePort: ""
        requestUrls: string[]
        rt: 207
        size: 0
        status: 200
        statusCode: 200
        timing: null
    }
    url: string
}
```


{: id="20201104153359-rzhftsw" type="doc"}

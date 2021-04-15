((20210325155155-2wk7rxv "{{.text}}"))
[一个简简单单的 TypeScript RPC 解决方案 - 崮生的文章 - 知乎](https://zhuanlan.zhihu.com/p/281083041)
[在 TypeScript 处理后端API返回的响应数据这一块，你或者所在团队都做了哪些比较好的实践呢？ - 崮生的回答 - 知乎](https://www.zhihu.com/question/345364393/answer/1827394867)
{: id="20210410114147-c1tluk3" updated="20210410153823"}

{: id="20210410154327-bahzt0o" updated="20210410154327"}

> 有时候不需要什么「分布式」，前后端「项目分离」。
> {: id="20201121144434-92gye3r"}
>
> 只是想可以方便调用一个接口、不去写接口文档、还有有完善的方法类型提示而已。
> {: id="20201121144434-7tekmdf"}
>
> 何必那么复杂呢。......
> {: id="20201121144434-72audfc"}
>
> 这里提供超轻量级的远程调用，完备的类型提示！
> {: id="20201121144434-vzyu84i"}
{: id="20201121144434-zixchle"}

[codesandbox 体验地址](https://codesandbox.io/s/github/2234839/typescript_RPC_demo?utm_medium=plugin&file=/src/rpc.ts) codesandbox 的类型提示还不太行，本地开发是没有问题的
{: id="20201121144434-10a6mik"}

[demo  github 地址](https://github.com/2234839/typescript_RPC_demo)
{: id="20201121144434-z7z0r3p"}

![image.png](assets/20201109143728-hfw4r7v-image.png)
{: id="20201121144434-ulxsxqf"}

## 0x00 服务端方法
{: id="20201121144434-x2ulo2n" updated="20210415103138"}

```typescript
// apis/time.ts
export function currentTime() {
  return Date.now();
}

export function currentTime2(toLocaleString: boolean) {
  if (toLocaleString) {
    return new Date().toLocaleString();
  } else {
    return Date.now();
  }
}
```
{: id="20201121144434-tqfcfol"}

这里随便写了几个方法
{: id="20201121144434-rkrn94r"}

## 0x01 聚合
{: id="20201121144434-5p37pxh" updated="20210415103141"}

```typescript
// apis/index.ts
export * from "./time";
```
{: id="20201121144434-v6a2q4u"}

约定俗称的用一个 `index.ts` 文件将其他文件中的方法聚合起来。
{: id="20201121144434-grh37hy"}

## 0x02 Remote Procedure Call !
{: id="20201121144434-f6awc68" updated="20210415103143"}

Remote Procedure Call 要说的高大上呢那也有很多可以做的细节，但我们追求简简单单。
{: id="20201121144434-u2tnf4d"}

```typescript
// router/rpc.ts
import * as apis from "../apis";

export async function post(req: any, res: any) {
  const data = [] as any[];
  req.on("data", function (chunk) {
    data.push(chunk);
  });
  req.on("end", async () => {
    const { method, data: _data } = JSON.parse(data.join(""));
    const result = await apis[method](..._data);
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify(result));
  });
}
```
{: id="20201121144434-llith0o"}

简单的远程调用只需要暴露一个接口让用户可以调用本机方法就行了
{: id="20201121144434-24hayq2"}

## 0x03 TypeScript ! 🎉
{: id="20201121144434-75b8h96" updated="20210415103146"}

```typescript
//  rpc.ts
/** ═════════🏳‍🌈 超轻量级的远程调用，完备的类型提示！ 🏳‍🌈═════════  */
import type * as apis from "./apis";
type apis = typeof apis;
type method = keyof apis;

/** Remote call ， 会就近的选择是远程调用还是使用本地函数 */
export function RC<K extends method>(
  method: K,
  data: Parameters<apis[K]>
): Promise<unPromise<ReturnType<apis[K]>>> {
  if (typeof window !== "undefined") {
    // 客户端运行
    return fetch("/rpc", {
      method: "POST",
      body: JSON.stringify({ method, data }),
      headers: {
        "content-type": "application/json"
      }
    }).then((r) => r.json());
  } else {
    // 服务端运行，使用 import 的原因是避免 apis 的代码被打包发送到客户端
    return import("./apis/index").then(async (r: any) => {
      return await r[method](...data);
    });
  }
}

/** 解开 promise 类型包装 */
declare type unPromise<T> = T extends Promise<infer R> ? R : T;

// 示例 1 直接使用 RC

RC("currentTime", []).then((r) => console.log("服务器当前时间", r));
RC("currentTime2", [true]).then((r) => console.log("服务器当前时间本地化", r));

/** 包装了一次的 RC 方便跳转到函数定义  */
export const API = new Proxy(
  {},
  {
    get(target, p: method) {
      return (...arg: any) => RC(p, arg);
    }
  }
) as apisPromiseify;

/** apis 中包含的方法可能不是返回 promise 的，但 RC 调用后的一定是返回 promsie */
type apisPromiseify = {
  readonly [K in keyof apis]: (
    ...arg: Parameters<apis[K]>
  ) => Promise<unPromise<ReturnType<apis[K]>>>;
};

// 示例 2 通过 API 对象调用对应方法，这里的优点是可以直接跳转到对应函数的源码处

API.currentTime().then((r) => console.log("服务器当前时间", r));
API.currentTime2(true).then((r) => console.log("服务器当前时间本地化", r));

```
{: id="20201121144434-to5lrnx"}

上面就是一顿类型操作，打完收工。
{: id="20201121144434-xjmhrz7"}

接下来无论是在服务端还是客户端通过 RC 或 API 来调用方法获得的体验是一模一样的。
{: id="20201121144434-bvogew0"}

并且通过 API 对象调用对应方法，这里的优点是可以直接跳转到对应函数的源码处。啥类型提示都有，接口文档也没有必要了。
{: id="20201121144434-65amyu0"}

## 0x04 安全性问题
{: id="20210415103149-r8j4car" updated="20210415104847"}

从 github 查看此次修改： [e4e674c](https://github.com/2234839/typescript_RPC_demo/commit/e4e674cdcd16791fbaaf525b7c99c9084d550946)
{: id="20210415104855-4099tkm" updated="20210415104928"}

知友提出了下面这个问题
{: id="20210415103705-dca2gwe" updated="20210415103719"}

> [![beeplin](https://pic2.zhimg.com/7ec8a4eb75582008f0a79b2e709def92_s.jpg?source=06d4cd63)](https://www.zhihu.com/people/beeplin)[beeplin](https://www.zhihu.com/people/beeplin)**昨天 01:05**
> {: id="20210415103659-jsz34ww"}
>
> 用 dynamic import 通过 webpack 制造一个 永远不会被前端实际加载的 chunk，从而避免后端函数代码被打包到前端，我这个理解正确么？
> {: id="20210415103659-lyhj1mn"}
>
> 如果没错的画，有个潜在的问题，这个 chunk 文件依然是放在 dist 目录下的，虽然正常情况下不会去主动加载，但是还是有被用户“偶然”猜对文件名从而加载到前端导致代码泄露的可能。有办法解决这个问题么？
> {: id="20210415103659-wgxup04"}
{: id="20210415103204-jvkalet" updated="20210415103658"}

我现在想出来的解决方案就是利用条件编译来使得前端打包时不去 `import("./apis/index")` ,
{: id="20210415103724-o8n2ube" updated="20210415103856"}

RC.ts 代码内的条件如下图这样改动，
{: id="20210415104022-zq7er4k" updated="20210415104154"}

![image.png](assets/image-20210415104020-terddw3.png)
{: id="20210415103858-8nnpgm8" updated="20210415104059"}

`process.browser` 来自于 webpack 插件的定义
{: id="20210415104228-1f4xpw0" updated="20210415104249"}

![image.png](assets/image-20210415104225-nc4us9j.png)
{: id="20210415104158-t2yf6y3" updated="20210415104228"}

这样改动后当打包前端代码的时候打包工具检测到 `process.browser===true` 一定成立，于是会删去条件不成立分支的代码，之后再对代码进性依赖分析之类的就不会引入 api.ts 中的代码到前端代码中去了
{: id="20210415104259-ugwphz5" updated="20210415104543"}

{: id="20210415104455-rszq85y"}

## 总结
{: id="20201121144434-m2hjyfb" updated="20210415104253"}

这个~~项目~~ 方法 的重点在于复用了服务端提供接口的类型，并且可以直接跳转过去。
{: id="20201121144434-k066v3c"}

追求简单的方法，完善类型体验。
{: id="20201121144434-crk7nwo"}

我写出这个想法之后觉得我以前就是憨憨，自己写一个项目还维护一份接口文档 😀。
{: id="20201121144434-xm6il3l"}

---
{: id="20210410111402-fph404k"}

现在 codesandbox 还不支持中文文件名，坑了我一把
{: id="20201121144434-mruhrq1"}

![image.png](assets/20201109171018-un3fain-image.png)
{: id="20201121144434-jcq53xy"}

{: id="20210410114552-ae38v0j"}


{: id="20201121144434-sbev4ga" type="doc"}

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

# 0x00 服务端方法
{: id="20201121144434-x2ulo2n"}

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

# 0x01 聚合
{: id="20201121144434-5p37pxh"}

```typescript
// apis/index.ts
export * from "./time";
```
{: id="20201121144434-v6a2q4u"}

约定俗称的用一个 `index.ts` 文件将其他文件中的方法聚合起来。
{: id="20201121144434-grh37hy"}

# 0x02 Remote Procedure Call !
{: id="20201121144434-f6awc68"}

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

# 0x03 TypeScript ! 🎉
{: id="20201121144434-75b8h96"}

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

# 总结
{: id="20201121144434-m2hjyfb"}

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

## ((20210325155155-2wk7rxv "{{.text}}"))
{: id="20210410114147-c1tluk3" updated="20210410114446"}

[一个简简单单的 TypeScript RPC 解决方案 - 崮生的文章 - 知乎](https://zhuanlan.zhihu.com/p/281083041)
{: id="20210410114510-5mogoml" updated="20210410114605"}

[在 TypeScript 处理后端API返回的响应数据这一块，你或者所在团队都做了哪些比较好的实践呢？ - 崮生的回答 - 知乎](https://www.zhihu.com/question/345364393/answer/1827394867)
{: id="20210410114527-d7xjure" updated="20210410114611"}

{: id="20210410114552-ae38v0j"}


{: id="20201121144434-sbev4ga" type="doc"}

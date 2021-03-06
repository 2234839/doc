# node 热部署以及装饰器的应用
{: id="20210409165030-ktn5bpo"}

- {: id="20210409165030-riuzp0d"}pubdate: 2019-03-16 17:43:29
  {: id="20210409165030-6508mjk"}
- {: id="20210409165030-3gcdvco"}tags : node.js,index
  {: id="20210409165030-d9mlps3"}
{: id="20210409165030-u9fmtda"}

---
{: id="20210409165030-v3ak87r"}

## node 热部署基础
{: id="20210409165030-ettv6mp"}

node 的热部署主要依赖 require 来动态的引入模块
即通过 fs 模块来监视文件，如果文件发生变动则重新 require 该文件
{: id="20210409165030-bfbmp3f"}

```typescript
fs.watch(
  dirName,
  {
    recursive: true, //监视所有子目录
  },
  (eventType: String, filename: String) => {
    if (eventType == "change" && filename.endsWith(".js")) {
      const filePath = path.join(dirName, filename);
      const module = require(filePath); //重新require该模块
      /**
                按照自己的需要用该模块替换掉旧的
                也可以是该模块被require之后自动更新自身
                registered(filePath,router)//我写了一个方法来更新koa的router绑定的函数
             */
    }
  },
);
```
{: id="20210409165030-ofn0f9x"}

## koa-router 热部署
{: id="20210409165030-4nrmz3b"}

> 通过对 router.routeStack 中的 handler 函数的替换来实现保存代码改动之后立刻重新加载该函数无需重启整个服务
> {: id="20210409165030-m5b5cc4"}
{: id="20210409165030-dkwfp70"}

```typescript
/**
 * 将一个文件显式声明的方法绑定到指定的路由对象上
 * @param path 路由文件路径
 * @param router koa-router 路由对象
 */
function registered(path: string, router: any) {
  //热部署，小心内存泄露.... 之前一直失败原因居然是path中有 // 这样的路径  require智能的解析为 单斜杠了但导致delete则完全删除错了 所以使用path来进行路径合并就行了
  delete require.cache[path];
  let mapping = require(path);

  for (const url in mapping) {
    registerMethod(router, url, mapping[url]);
  }
}

/**
 * 注册一个方法到路由上指定的路径
 * @param router 路由对象
 * @param url url：例如 get /app/login
 * @param fun 处理函数
 */
export function registerMethod(router, url, fun) {
  let strList = url.match(/(.*?) (.*)/);
  if (!strList) {
    console.error(`此url存在错误 ${url}`);
    return;
  }
  let method = strList[1];
  let path = strList[2]; //去掉头部的get 。
  let regexp = new RegExp(method, "i");
  let b = router.routeStack.some((route) => {
    if (route.path == path && regexp.test(route.method)) {
      //在路由上找到了相同的路径
      route.handler = fun;
      console.log(`覆写一个方法： ${method} ${path}`);
      return true;
    }
  });
  if (!b) {
    //在routeStack没有找到要注册的路径 新注册一个方法
    try {
      router[method.toLowerCase()](path, fun);
      console.log(`注册一个方法： ${method} ${path}`);
    } catch (error) {
      console.error(`url 可能不符合规范，没有在router上找到该方法 ${url}`);
    }
    return;
  }
}
```
{: id="20210409165030-s7gorew"}

## 通过装饰器来绑定路径以及减少重复代码
{: id="20210409165030-aedtzep"}

装饰器的代码
{: id="20210409165030-nepcjko"}

```typescript
/**
 * 绑定方法到指定的路径上 这个方法依赖全局的 global["router"] 支持多重装饰
 * @param url 绑定的路径 例如 "get /app/login"
 */
export function bindRouter(url: string) {
  return function(target, name, descriptor) {
    let value = async function(...args) {
      let data = await descriptor.value.apply({}, args); //应用函数本身的逻辑并返回值
      if (data === undefined) return args[0].response;
      return data;
    };
    registerMethod(global["router"], url, value);
    return {
      ...descriptor,
      value,
    };
  };
}
```
{: id="20210409165030-ha29vf3"}

应用装饰器
{: id="20210409165030-wtpn2qc"}

```typescript
    @bindRouter("get /blog/proxy") @bindRouter("post /blog/proxy")
    static async proxy(ctx, next) {
        /** 实现功能的代码 */
    }
```
{: id="20210409165030-kn1ud9m"}

((20201104153359-3hiw1pt "{{.text}}"))
{: id="20210409165030-icuszt2" updated="20210409165041"}

{: id="20210409165044-burzr16"}


{: id="20201104153359-eraeclx" type="doc"}

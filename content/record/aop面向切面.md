# AOP 面向切面编程

- pubdate: 2019-05-05 13:45:24

Aspect Oriented Program
-------------

## 为嘛需要面向切面编程

业务是一直在变化的，但一些业务是具有共通性。例如要给api添加日志和权限控制，可以直接在api内部实现，但这样每个api都会有重复的代码，**重复代码是万恶之源** 故需要将他们分离开来。

我们可以将这个日志和权限控制前置或者后置，就是一个请求先进入权限处理在进入实际的业务流程在返回同时进行日志处理。

koa的中间件就是这样的一种情况，也即是切面。

一个请求从用户出发到达网关，这里是一个切面，进入服务器之后我们对这个请求将进行各种处理，其中的很多处理对于每一个api都是重复的，他们就可以构成一个个切面。

请求如同沙子落入筛网，每一层筛网都可能拦下也可能改变沙子的模样甚至是留下沙子的全部或者部分信息备份，最终通过不同筛网的沙子去往不同的地方，有的回归客户，有的进入数据库。

更多的是一粒沙子在筛网中不断改变并且不断的被复制，最终他的化身留在日志、留在数据库、响应回客户、被呈递给第三方、等等....

而更换筛网也比起更换每一个功能的具体实现要简单的多。

## 那么怎么实现

在js里面首先装饰器可以很好的实现aop

其次通过[Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

然后js也是有代理的[Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
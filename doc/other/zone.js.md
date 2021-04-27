[zone.js npm](https://www.npmjs.com/package/zone.js?activeTab=readme)
{: id="20210409090641-0wmityi" updated="20210409090702"}

- {: id="20210409090813-cgawbhl"}zones 曾是 js 中的一个提案，但后来被废弃了，现在提出了新的 [异步上下文提案](https://github.com/JSCIG/es-discuss/discussions/9)
  {: id="20210409090813-ufcwxmh" updated="20210409090855"}
{: id="20210409090813-weju7he"}

- {: id="20210409090813-prhx9ap"}在 node.js 中 req.on('end') 里面调用的函数似乎无法绑定到对应的 zone
  {: id="20210409090813-jwvde4i"}

  - {: id="20210409090813-5vj8oji"}可以通过封装成 promise 来解决这个问题
    {: id="20210409090813-sehgrqo"}
  {: id="20210409090813-8k5yht1"}
- {: id="20210426203344-kh5mp4z"}对于 promise 他可以正确监听，但 原生 async 与 await zone.js 会被中断，在浏览器中没有办法弥补
  {: id="20210426201523-hzstubp" updated="20210426203339"}

  - {: id="20210409090813-fnzo3tu"}[Moving off of Zones and building to target ES2018. · Issue #38782 · angular/angular (github.com)](https://github.com/angular/angular/issues/38782)
    {: id="20210426203344-l07n20f"}
  - {: id="20210426203333-8mgsda9"}[angular with tsconfig target ES2017 async/await will not work with zone.js · Issue #31730 · angular/angular (github.com)](https://github.com/angular/angular/issues/31730)
    {: id="20210426203333-cincqi2" updated="20210426203333"}
  {: id="20210426203333-7u4gymj"}
- {: id="20210426201523-dohkg0i"}单纯靠他监听异步结束似乎并不靠谱，我没有找到有效的方法
  {: id="20210409090813-nl0j6ts"}

  - {: id="20210409090813-du4r050"}官方文档中使用 [`!hasTaskState.microTask && !hasTaskState.macroTask`](https://docs.google.com/document/d/1F5Ug0jcrm031vhSMJEOgp1l-Is-Vf0UCNDY-LsQtAIY/edit#) 来进行判断，但在我的代码中这个判断是不正确的
    {: id="20210409090813-fd7orwr" updated="20210409090922"}
  {: id="20210409090813-pnm6pk2"}
{: id="20210409090813-qcnca5a"}

{: id="20210409090813-4q22e9p"}


{: id="20210409090637-h0drlqf" type="doc"}

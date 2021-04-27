> 链接到指定网页的文本片段
> {: id="20210321143057-ehuhzwh" updated="20210321154131"}
>
> [link-to-text-fragment github repo](https://github.com/GoogleChromeLabs/link-to-text-fragment)
> {: id="20210321153635-yd5mtfm" updated="20210321153652"}
{: id="20210321143054-jm3iuzp" updated="20210321153652"}

## [扩展安装](https://github.com/GoogleChromeLabs/link-to-text-fragment#installation)
{: id="20210321142411-a20zh7r" updated="20210321154215"}

chrome 90 已经内置了此功能，通过访问此链接开启 [`chrome://flags/#copy-link-to-text`](chrome://flags/#copy-link-to-text)
{: id="20210426091156-dbyu8ub" updated="20210426091307"}

edge : [https://microsoftedge.microsoft.com/addons/detail/link-to-text-fragment/pmdldpbcbobaamgkpkghjigngamlolag?hl=zh-CN](https://microsoftedge.microsoft.com/addons/detail/link-to-text-fragment/pmdldpbcbobaamgkpkghjigngamlolag?hl=zh-CN)
{: id="20210321142446-mdzp7ri" updated="20210321142503"}

chrome : [https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg/](https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg/)
{: id="20210321142457-t8lw4et" updated="20210321142529"}

firefox : [https://addons.mozilla.org/zh-CN/firefox/addon/link-to-text-fragment/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search](https://addons.mozilla.org/zh-CN/firefox/addon/link-to-text-fragment/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
{: id="20210321142617-7ant3rf" updated="20210321142629"}

- {: id="20210321142638-bbe320l"}[Chromium 版本在 80 以上的就支持跳转，但也需要安装插件来在右键菜单中加入生成的功能](https://sspai.com/post/61081#:~:text=%E5%88%86%E4%BA%AB%E4%B8%8E%E6%8E%A5%E6%94%B6%E5%8F%8C%E6%96%B9%E9%83%BD%E5%BF%85%E9%A1%BB%E4%BD%BF%E7%94%A8%20Chrome%2080%20%E5%8F%8A%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8%EF%BC%8C%E6%89%8D%E8%83%BD%E7%9C%8B%E5%88%B0%E7%94%9F%E6%88%90%E7%9A%84%E5%B8%A6%E6%9C%89%E9%AB%98%E4%BA%AE%E6%96%87%E6%9C%AC%E6%98%BE%E7%A4%BA%E6%95%88%E6%9E%9C%E7%9A%84%E9%A1%B5%E9%9D%A2%E3%80%82) 而 firefox 则完全需要插件才能支持此功能
  {: id="20210321142638-t0enfaq" updated="20210321153815"}
- {: id="20210321143224-kd1f7d3"}#todo# 我的博客实现的有一些问题，导致此功能的效果有一些 bug
  {: id="20210321143224-gaw1zbw" updated="20210426091401"}
{: id="20210321142631-h5loz3e" updated="20210321153814"}

## 关于使用 ((20210321142309-wn4sd7t "{{.text}}"))  维持双链导出后的链接功能的设想
{: id="20210321144243-bwrm25x" updated="20210321145430"}

这是 chrome 80 版本以后支持的一个跳转到指定网页文本的功能
{: id="20210321145454-s380c9k"}

### 适用场景
{: id="20210321145454-6gnvcsd" updated="20210321145500"}

单页内的双链跳转
{: id="20210321145454-ho74e0a"}

### 痛点
{: id="20210321145454-aocnuxe" updated="20210321145503"}

我刚尝试了一下 ((20201104155455-awawq0n "{{.text}}")) 与 wolai 在导出 markdown 后双链引用都只剩下了文字，这显然不太合理，
{: id="20210321145454-4xqd5cn" updated="20210321145513"}

在这种情况下 如果支持 Link to Text Fragment 的链接，虽然跨页面还是不行（需要多页面建议像我这样自建一个网站,可以利用 ((20201121142503-ivwtfzg "{{.text}}"))  ），但至少在单页的文档下链接体验会有一个提升。
{: id="20210321145454-lro0wh3" updated="20210321145638"}

### 示例
{: id="20210321145454-5sspvti" updated="20210321145731"}

```
<a target="_blank" rel="noopener" href="#:~:text=%E7%97%9B%E7%82%B9,-%E6%88%91%E5%88%9A%E5%B0%9D%E8%AF%95%E4%BA%86%E4%B8%80%E4%B8%8B">痛点</a> 
```
{: id="20210321150817-b8evm11" updated="20210321151856"}

<a target="_blank" rel="noopener" href="#:~:text=%E7%97%9B%E7%82%B9,-%E6%88%91%E5%88%9A%E5%B0%9D%E8%AF%95%E4%BA%86%E4%B8%80%E4%B8%8B">痛点</a>

{: id="20210321151553-9mrp54r"}

在支持 ((20210321142309-wn4sd7t "{{.text}}")) 的浏览器下点击上面的链接会打开一个新标签跳转到 ((20210321145454-aocnuxe "{{.text}}"))
{: id="20210321151553-ducclbr" updated="20210321151655"}

## 缺陷
{: id="20210321151554-t7srfu5" updated="20210321151702"}

这个功能不像 [锚点定位](https://www.zhangxinxu.com/wordpress/2013/08/url-anchor-html-%E9%94%9A%E7%82%B9%E5%AE%9A%E4%BD%8D%E6%9C%BA%E5%88%B6-%E5%BA%94%E7%94%A8-%E9%97%AE%E9%A2%98/) 那么完善，在正常期望下应该不需要加上 `target="_blank"`  但现实是不加这个他不给面子，firefox 下还可以使用 `target="_self"` 来达到不需要新开标签的效果（需要安装((20210321142617-7ant3rf "扩展"))），但 chrome 不行
{: id="20210321151703-ym9sgrg" updated="20210321152346"}

{: id="20210321152355-woqxuzn"}

。。。 非常遗憾，本来很兴奋的以为有了一个普适的好方案
{: id="20210321151857-4gm5ly8" updated="20210321152421"}

{: id="20210321152425-4v60llf"}


{: id="20210321142309-wn4sd7t" type="doc"}

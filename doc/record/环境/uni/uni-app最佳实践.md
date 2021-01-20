# 崮生的 uni-app 最佳实践
{: id="20210120134520-aeplf1b"}

[代码仓库](https://github.com/2234839/uni_app-demo)
{: id="20210120134603-09bte2u"}

## ((20201104153359-jkol7s4 "{{.text}}"))
{: id="20210120134541-yvifakc"}

！ 值得注意的是微信小程序并不支持一些 css 选择器还有他的 wxss 不支持 `\`  所以如果直接使用tailwindcss 会报错类似于图中这样的错 : ![image.png](assets/20210120143300-oymna2p-image.png)
{: id="20210120134556-w728bux"}

幸运的是 tailwindcss 支持自定义，所以在这种情况下需要自行去 tailwind.config.js 中将该功能给去掉或者重写一下他的 className
{: id="20210120143301-jwaumns"}

这个demo中采用的是[taro-tailwind](https://github.com/windedge/taro-tailwind/blob/master/tailwind.config.js) 的配置文件稍加修改后的, 关闭了几乎所有的响应式功能，但基础功能还是可以正常使用的
{: id="20210120144423-bcefv7s"}

![image.png](assets/20210120154929-x3giu2s-image.png)
{: id="20210120143702-htst9km"}

- {: id="20210120155741-provey6"}引入 tailwindcss 并在 微信开发者工具中正常跑起来的改动 [`b3c7085`](https://github.com/2234839/uni_app-demo/commit/b3c70853540b90e896e0135bc829040413511e8e)
{: id="20210120154930-d8l6wqa"}


{: id="20210120134520-egxkpts" type="doc"}

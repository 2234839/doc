# tailwindcss

- pubdate:2019-11-22 11:08:21
- tags:css,tailwindcss

---

[tailwindcss 官网](https://tailwindcss.com/)

## 为什么用 tailwindcss

一开始是在[现代 Web 开发的现状与未来（JSDC 2019 演讲全文）](https://zhuanlan.zhihu.com/p/88616149)这里看到的(这篇文感觉讲的相当好)，然后就去了解了一下

一开始的时候觉得这都什么鬼，感觉写的很丑陋。 但写了一阵子之后... 真香了，其实使用这个还是相当于手写样式，但就减少了很多的重复

之前我写样式都是，HTML 中一堆 .content .header .card .body .footer .left .right 之类的，然后 scss 文件中也是这些各种嵌套，即便使用了 mixin 但还是感觉很多冗余，有些东西感觉提取一个 mixin 没必要，但确实又由两三个地方有点重复

这就让人感觉有点不爽。

## 怎么用 tailwindcss

> 演习场 ↓ 展示官网的一些例子，你也可以手动改一下试试效果

```html{run}
<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">这是官网的一个例子</strong>
  <span class="block sm:inline">地址在 https://tailwindcss.com/components/alerts/</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg
      class="fill-current h-6 w-6 text-red-500"
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <title>Close</title>
      <path
        d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
      />
    </svg>
  </span>
</div>

<div class="bg-indigo-900 text-center py-4 lg:px-4">
  <div
    class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
    role="alert"
  >
    <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
      >New</span
    >
    <span class="font-semibold mr-2 text-left flex-auto"
      >Get the coolest t-shirts from our brand new store</span
    >
    <svg
      class="fill-current opacity-75 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
      />
    </svg>
  </div>
</div>
```

可以看到这里完全没有直接的写 CSS，但稍微了解一下类名，很容易的就可以了解它的意思。

### 那么到底怎么用

首先进入 [tailwindcss 官网](https://tailwindcss.com/components) 然后看最顶上的搜索框，你要改变什么样式就直接搜，例如 border 这类的

其次(搜索一个之后)看右边，这里可以跳到响应和伪类可以看着加一些 hover 之类的效果，其次就是 Customizing 了，定制，靠这个定制可以覆盖它原有的样式，添加新的样式

> 这是我写的一个定制的例子

```javascript
module.exports = {
  theme: {
    /** 扩展原来的配置，冲突了的以扩展的为准，如果直接写在theme里面会覆盖导致没有默认配置 */
    extend: {
      colors: {
        /** 黑色，重色 顶栏 */ dark: "#1b1b1b",
        /** 背景色 */ bg: "rgba(237, 237, 237)",
        /** 背景色 245 浅灰 */ 245: "rgba(245, 245, 245)",
        /** 警告浅色 */ "warning-light": "#ffe8ea",
        /** 警告 重色 */ "warning-heavy": "#f5222d",
        /** 字 黑色 基础色 */ black: "#333",
        /** 字 灰色 */ gray9: "#999",
        /** 字 灰色 666 */ gray6: "#666",
        /** fff 最白色 */ fff: "#fff",
      },
      height: {
        sm: "14px",
        md: "16px",
        lg: "24px",
        xl: "48px",
      },
      /** 自定义间距 最高 100 px  */
      spacing: (() => {
        const spacing = {};
        for (let i = 0; i < 100; i++) {
          spacing[i] = `${i}px`;
        }
        return spacing;
      })(),
      /** 字体大小 */
      fontSize: (() => {
        const size = {};
        for (let i = 0; i < 50; i++) {
          size[i] = `${i}px`;
        }
        Object.assign(size, {
          sm: "14px",
          base: "16px",
          lg: "24px",
          xl: "48px",
        });
        return size;
      })(),
      /** 字体间距 */
      letterSpacing: (() => {
        const spacing = {};
        for (let i = 0; i < 30; i++) {
          spacing[i] = `${i}px`;
        }
        return spacing;
      })(),
    },
  },
};
```


{: id="20201104153359-jkol7s4" type="doc"}

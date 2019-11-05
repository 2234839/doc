# cssFlex
- pubdate: 2019-06-05 14:45:32
- tags: css,index

感谢flex 祝愿ie早日重新做人
---------

[css 弹性盒子](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)

````html
<div class="flex">
    <div> 1</div>
    <div> 2</div>
    <div> 3</div>
    <div> 4</div>
    <div> 5</div>
    <div> 6</div>
    <div> 7</div>
</div>
````

justify-content 实验场，align-content 只是换了一个轴向

````css
.flex{
    color:white;
    display: flex;
    /* ## Positional alignment ## */
    /** 居中排列 */
    /* justify-content: center;      */
    /** Pack items from the start */
    /* justify-content: start;       */
    /** Pack items from the end */
    /* justify-content: end; */
    /** 从行首起始位置开始排列 */
    /* justify-content: flex-start; */
    /** 从行尾位置开始排列 */
    /* justify-content: flex-end;    */
    /** Pack items from the left */
    /* justify-content: left; */
    /** Pack items from the right */
    /* justify-content: right;       */

    /* ## Baseline alignment ## */
    /* justify-content: baseline;
    justify-content: first baseline;
    justify-content: last baseline; */

    /* ## Distributed alignment ## */
    /** 均匀排列每个元素 首个元素放置于起点，末尾元素放置于终点 */
    /* justify-content: space-between;   */
    /**💕 均匀排列每个元素 每个元素周围分配相同的空间,注意左右两边只有中间的一半 */
    /* justify-content: space-around;   */
    /**❤🌹 均匀排列每个元素 每个元素之间的间隔相等 完美的间距 */
    /* justify-content: space-evenly;  */
    /** Distribute items evenly Stretch 'auto'-sized items to fit the container */
    /* justify-content: stretch; */

    /* ## Overflow alignment ## */
    /* justify-content: safe center; */
    /* justify-content: unsafe center; */

    /* ## Global values ## */
    /* justify-content: inherit; */
    /* justify-content: initial; */
    /* justify-content: unset; */

}
.flex div{
    background-color: saddlebrown;
}
````

```javascript
alert(1)
```

````javascript
console.log(3333)
````

## 布局

[最后一行靠左](https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/)  推荐空元素占位法
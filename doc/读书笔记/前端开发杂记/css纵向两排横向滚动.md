# CSS 纵向两排横向滚动

- pubdate:2019-09-19 17:52:52
- tags:

---

今天碰到这样子的需求，一开始没想出来

后来灵机一闪使用 flex 布局主轴改成纵向就搞定了

```scss
.div{
    display: flex;

    @media screen and(max-width:$mobile) {
        max-height: 600px;
        overflow-x: hidden;
        flex-wrap: wrap;
        flex-direction: column;
    }
}
```


{: id="20201104153359-wv8uv3c" type="doc"}

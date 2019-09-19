# css纵向两排横向滚动

- pubdate:2019-09-19 17:52:52
- tags:

---------

今天碰到这样子的需求，一开始没想出来

后来灵机一闪使用flex布局主轴改成纵向就搞定了

```scss
    display: flex;

    @media screen and(max-width:$mobile) {
        max-height: 600px;
        overflow-x: hidden;
        flex-wrap: wrap;
        flex-direction: column;
    }
```
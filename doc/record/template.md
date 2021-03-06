# template

- pubdate: 2019-03-07 16:08:35
- tags : template,shadow,web 组件

内容模板元素 +shadowRoot，请确保您的浏览器支持 shadowRoot 和 template

---

* 自定义元素是行内元素？

````html{run}
<element-tr>
    <div slot="foot">dddddd</div>
</element-tr>

<element-tr>
    <div slot="foot">cccccc</div>
    <div>这里没有显示,但它是存在于dom之中的</div>
</element-tr>


<template id="element-tr-template">
    <style>
        /*  模板里的样式会限制范围在template里
        这是依赖 shadowRoot 实现的
    */
        * {
            color: red;
            border: 1px solid red;
        }
    </style>
    <tr>
        <td><a class='button'>按钮</a> </td>
        <td>
            <slot name="foot">foot插槽</slot>
        </td>
    </tr>
</template>
<script>
    //定义自定标签element-tr
    customElements.define('element-tr',
        class extends HTMLElement {
            constructor() {
                super();
                const template = document
                    .getElementById('element-tr-template')
                    .content;
                //设置为 "closed" 会让该 ShadowRoot 的内部实现无法被 JavaScript 访问及修改
                this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true));
                this.shadowRoot.querySelector("td").addEventListener('click', function () {
                    console.log(this);//访问模板内部元素的办法 this.shadowRoot
                })
                this.querySelectorAll('*')//这样获取的是solt元素
            }
        }
    );
</script>
````

## 实现一个 switch 控件

````html{run}
<my-switch id="switch"></my-switch>
<template id="my-switch">
    <style>
        #frame,#circle {
            background-color: rgb(206, 206, 206);
            border-radius: 100px;
            width: 50px;
            height: 30px;
            transition: 0.5s;
        }
        #circle{
            background-color: rgb(75, 74, 74);
            width: 30px
        }
        .on #circle{
            /* float: right; */
            margin-left: 20px;
            background-color: rgb(13, 194, 94);
        }
        .on#frame{
            background-color: rgb(233, 232, 232);
        }
    </style>
    <div id="frame">
        <div id="circle"></div>
    </div>
</template>
<script>
    customElements.define("my-switch",
        class extends HTMLElement {
            constructor() {
                super();
                const template = document
                    .getElementById('my-switch')
                    .content;
                this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true));
                let dom=this.shadowRoot
                dom.querySelector("#frame").addEventListener('click', function () {
                    dom.querySelector("#frame").classList.toggle('on')
                    //派发切换事件
                    this.dispatchEvent(new Event('switch', {bubbles: true, composed: true}));
                    if(dom.querySelector("#frame").classList.contains('on'))
                        this.dispatchEvent(new Event('switch-on', {bubbles: true, composed: true}));
                    else
                        this.dispatchEvent(new Event('switch-off', {bubbles: true, composed: true}));
                })
                this.querySelectorAll('*')//这样获取的是solt元素
            }
        }
    )

    document.querySelector('#switch').addEventListener('switch',function(){
        console.log(this);
    })
    document.querySelector('#switch').addEventListener('switch-on',function(){
        alert('switch on')
    })
    document.querySelector('#switch').addEventListener('switch-off',function(){
        alert('switch off')
    })
</script>
````


{: id="20201104153359-7rhwdvj" type="doc"}

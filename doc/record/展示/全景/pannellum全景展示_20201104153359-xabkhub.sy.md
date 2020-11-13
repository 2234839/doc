# Pannellum 全景插件

- pubdate:2019-07-01 17:15:48
- tags:index

---

## [Pannellun](https://pannellum.org/documentation/examples/simple-example/)

[压缩包下载](./pannellum-2.4.0.zip)

## 通过 iframe 的方式加载

````html
<iframe
    width="600" height="400"
    allowfullscreen style="border-style:none;"
    src="https://cdn.pannellum.org/2.4/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg"></iframe>
````

## 独立的加载方式

````html
<link rel="stylesheet" href="https://cdn.pannellum.org/2.4/pannellum.css"/>
<script type="text/javascript" src="https://cdn.pannellum.org/2.4/pannellum.js"></script>
<style>
    #panorama {
        width: 600px;
        height: 400px;
    }
</style>

<div id="panorama"></div>

<script>
    //https://pannellum.org/images/alma.jpg
pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "/record/展示/全景/09dd76fac68c341b6aafb24dda768d3.jpg"
});
</script>
````

# vscode 编辑器 monaco-editor 使用

- pubdate:2019-06-28 16:25:11
- tags:工具,vscode

-----------------

## [使用方式示例](https://www.netnr.com/home/list/111)

先引入loader用来加载模块
```html
<script src="/node_modules/monaco-editor/min/vs/loader.js"></script>
```

用来放置编辑器的容器
````html
<div id="container" style="width:800px;height:600px;border:1px solid grey"></div>
````

通过amd的方式来加载模块显示编辑器
````html
<script>
    var editor
    require.config({ paths: { 'vs': '/node_modules/monaco-editor/min/vs' }});
    require(['vs/editor/editor.main'], function () {
        editor = monaco.editor.create(document.getElementById('container'), {
            value:`
function x() {
	console.log("Hello world!");
}`,
            language: 'javascript'
        });
    });
</script>
````
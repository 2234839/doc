/** 高亮代码块 */
const code = document.querySelectorAll(`[class*="lang"]`);
if (code === null) throw "未找到code块";
require.config({ paths: { vs: "/node_modules/monaco-editor/min/vs" } });
require(["vs/editor/editor.main"], function() {
  code.forEach(function(el) {
    const div = document.createElement("div");
    el.parentElement.appendChild(div);
    div.style = `
       width: 100%;
       margin-bottom: 10px;
     `;
    el.style.display = "none";
    var editor = monaco.editor.create(div, {
      value: el.innerText,
      language: getLanguage(el),
      minimap: {
        enabled: false, //代码略缩图
      },
      theme: "vs",
      automaticLayout: true,
      scrollBeyondLastLine: false,
    });
    editoAdapHeight(editor, div);

    editor.onDidChangeModelContent((e) => {
      editoAdapHeight(editor, div);
    });
    /** 根据内容来计算高度 */
    function editoAdapHeight(editor, div) {
      let lines = editor.getModel().getLinesContent().length;
      //   if (lines > 20) lines = 20;
      div.style.height = lines * 19 + "px";
    }
  });
});
function getLanguage(el) {
  console.log(el, el.className);

  return el.className.match(/lang-(.*)\b/)[1];
}
